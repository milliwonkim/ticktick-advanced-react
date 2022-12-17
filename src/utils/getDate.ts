import dayjs from "dayjs";

export const getDate = () => {
  return dayjs().format("YYYY-MM-DD HH:mm");
};
