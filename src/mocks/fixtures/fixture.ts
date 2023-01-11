import { v4 } from "uuid";
import { getDate } from "../../utils/getDate";
import { DAY, MONTH, WEEK, YEAR } from "../../constants/word";
import dayjs from "dayjs";
import { FORMAT } from "../../pages/TodoPage";

const getContent = (type: string) => {
  return `${type} - 개발하기`;
};

export const DAY_TODO = [
  {
    date: getDate(),
    id: v4(),
    todo: getContent(DAY),
    completed: false,
    depth: 0,
  },
  {
    date: getDate(),
    id: v4(),
    todo: getContent(DAY),
    completed: false,
    depth: 0,
  },
  {
    date: getDate(),
    id: v4(),
    todo: getContent(DAY),
    completed: false,
    depth: 1,
  },
  {
    date: getDate(),
    id: v4(),
    todo: getContent(DAY),
    completed: false,
    depth: 0,
  },
];

export const WEEK_TODO = [
  {
    date: dayjs("2023-01-12").format(FORMAT[DAY]),
    id: v4(),
    todo: getContent(WEEK),
    completed: false,
    depth: 0,
  },
  {
    date: dayjs("2023-01-13").format(FORMAT[DAY]),
    id: v4(),
    todo: getContent(WEEK),
    completed: false,
    depth: 1,
  },
  {
    date: dayjs("2023-01-14").format(FORMAT[DAY]),
    id: v4(),
    todo: getContent(WEEK),
    completed: false,
    depth: 1,
  },
  {
    date: dayjs("2023-01-15").format(FORMAT[DAY]),
    id: v4(),
    todo: getContent(WEEK),
    completed: false,
    depth: 0,
  },
  {
    date: dayjs("2023-01-16").format(FORMAT[DAY]),
    id: v4(),
    todo: getContent(WEEK),
    completed: false,
    depth: 0,
  },
  {
    date: dayjs("2023-01-17").format(FORMAT[DAY]),
    id: v4(),
    todo: getContent(WEEK),
    completed: false,
    depth: 0,
  },
];

export const MONTH_TODO = [
  {
    date: getDate(),
    id: v4(),
    todo: getContent(MONTH),
    completed: false,
    depth: 0,
  },
  {
    date: getDate(),
    id: v4(),
    todo: getContent(MONTH),
    completed: false,
    depth: 1,
  },
  {
    date: getDate(),
    id: v4(),
    todo: getContent(MONTH),
    completed: false,
    depth: 0,
  },
  {
    date: getDate(),
    id: v4(),
    todo: getContent(MONTH),
    completed: false,
    depth: 1,
  },
];

export const YEAR_TODO = [
  {
    date: getDate(),
    id: v4(),
    todo: getContent(YEAR),
    completed: false,
    depth: 0,
  },
  {
    date: getDate(),
    id: v4(),
    todo: getContent(YEAR),
    completed: false,
    depth: 1,
  },
  {
    date: getDate(),
    id: v4(),
    todo: getContent(YEAR),
    completed: false,
    depth: 1,
  },
  {
    date: getDate(),
    id: v4(),
    todo: getContent(YEAR),
    completed: false,
    depth: 0,
  },
];
