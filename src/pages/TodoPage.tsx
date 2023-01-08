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

function TodoPage({ type, isStartFromSunday = true }: TodoPageProps) {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const TITLE: {
    [key: string]: string;
  } = {
    [YEAR]: `${dayjs().format("YYYY년")}`,
    [MONTH]: `${dayjs().format("YYYY년 M월")}`,
    [WEEK]: `${dayjs().format("YYYY년 M월")} ${String(
      weekOfMonth + (isStartFromSunday ? 1 : 0)
    )}주차`,
    [DAY]: dayjs().format("YYYY년 M월 D일, HH시 mm분"),
  };

  const getTodos = async () => {
    try {
      const res = await api.get("/todos");
      setTodos(res.data);
    } catch (err) {
      console.error("getTodos error", err);
      setTodos([]);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <CheckRow title={TITLE[type || DAY]} list={todos} setList={setTodos} />
  );
}

export default TodoPage;
