import { v4 } from "uuid";
import { getDate } from "../../utils/getDate";

export const TODOS = [
  { date: getDate(), id: v4(), todo: "개발하기", completed: false },
  { date: getDate(), id: v4(), todo: "개발하기", completed: false },
  { date: getDate(), id: v4(), todo: "개발하기", completed: false },
  { date: getDate(), id: v4(), todo: "개발하기", completed: false },
];
