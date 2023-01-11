import dayjs from "dayjs";
import { FORMAT } from "../pages/TodoPage";
import { DAY } from "../constants/word";

export const getDate = () => {
  return dayjs().format(FORMAT[DAY]);
};
