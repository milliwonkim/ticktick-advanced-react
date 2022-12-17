import { useEffect, useState } from "react";
import dayjs from "dayjs";
import objectSupport from "dayjs/plugin/objectSupport";
import { getDate } from "../utils/getDate";

function useDate() {
  const [todayDate, setTodayDate] = useState("");

  useEffect(() => {
    dayjs.extend(objectSupport);
    setTodayDate(getDate());
  }, []);

  return {
    todayDate,
  };
}

export default useDate;
