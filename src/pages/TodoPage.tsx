import React, { useEffect, useState } from "react";
import "../styles/App.css";
import { api } from "../api/api";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import CheckRow from "../components/CheckRow";
import { TodoPageProps, TodoProps } from "../type";
import { DAY, MONTH, WEEK, YEAR } from "../constants/word";

dayjs.extend(weekOfYear);

var d = new Date("2023-04-22");
var date = d.getDate();
var day = d.getDay();

var weekOfMonth = Math.ceil((date - 1 - day) / 7);

export const MONDAY = "MONDAY";
export const TUESDAY = "TUESDAY";
export const WEDNESDAY = "WEDNESDAY";
export const THURSDAY = "THURSDAY";
export const FRIDAY = "FRIDAY";
export const SATURDAY = "SATURDAY";
export const SUNDAY = "SUNDAY";

export const FORMAT = {
  [YEAR]: "YYYY년",
  [MONTH]: "YYYY년 M월",
  [DAY]: "YYYY년 M월 D일",
};

function TodoPage({ type, isStartFromSunday = true }: TodoPageProps) {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const TITLE: {
    [key: string]: string;
  } = {
    [YEAR]: `${dayjs().format(FORMAT[YEAR])}`,
    [MONTH]: `${dayjs().format(FORMAT[MONTH])}`,
    [WEEK]: `${dayjs().format(FORMAT[MONTH])} ${String(
      weekOfMonth + (isStartFromSunday ? 1 : 0)
    )}주차`,
    [DAY]: dayjs().format(FORMAT[DAY]),
  };

  const getTodos = async () => {
    try {
      const res = await api.get(`/todos/${type}`);
      if (type === WEEK) {
        const weekdays = [
          SUNDAY,
          MONDAY,
          TUESDAY,
          WEDNESDAY,
          THURSDAY,
          FRIDAY,
          SATURDAY,
        ].map((el, i) => {
          return {
            date: dayjs().day(i).format(FORMAT[DAY]),
            weekday: el,
          };
        });
        const filteredWeekDays =
          res.data && res.data.length > 0
            ? res.data.filter((el: any) => {
                return (
                  weekdays.filter((ele) => {
                    return ele.date === el.date;
                  }).length > 0
                );
              })
            : [];
        if (filteredWeekDays.length > 0) {
          setTodos(filteredWeekDays);
        } else {
          setTodos([]);
        }
      } else {
        setTodos(res.data);
      }
    } catch (err) {
      console.error("getTodos error", err);
      setTodos([]);
    }
  };

  useEffect(() => {
    getTodos();
  }, [type]);

  return (
    <CheckRow title={TITLE[type || DAY]} list={todos} setList={setTodos} />
  );
}

export default TodoPage;
