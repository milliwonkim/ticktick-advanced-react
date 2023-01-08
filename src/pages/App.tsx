import React from "react";
import { Route, Routes } from "react-router-dom";
import { DAY, MONTH, WEEK, YEAR } from "../constants/word";
import TodoPage from "./TodoPage";
import Header from "../components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={`/${YEAR}`} element={<TodoPage type={YEAR} />} />
        <Route path={`/${MONTH}`} element={<TodoPage type={MONTH} />} />
        <Route path={`/${WEEK}`} element={<TodoPage type={WEEK} />} />
        <Route path={`/${DAY}`} element={<TodoPage type={DAY} />} />
      </Routes>
    </>
  );
}

export default App;
