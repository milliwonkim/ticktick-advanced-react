// src/mocks/handlers.js
import { rest } from "msw";
import { DAY_TODO, MONTH_TODO, WEEK_TODO, YEAR_TODO } from "./fixtures/fixture";
import { DAY, MONTH, WEEK, YEAR } from "../constants/word";

export const handlers = [
  rest.get(`/todos/${DAY}`, (req, res, ctx) => {
    return res(ctx.json(DAY_TODO));
  }),
  rest.get(`/todos/${WEEK}`, (req, res, ctx) => {
    return res(ctx.json(WEEK_TODO));
  }),
  rest.get(`/todos/${MONTH}`, (req, res, ctx) => {
    return res(ctx.json(MONTH_TODO));
  }),
  rest.get(`/todos/${YEAR}`, (req, res, ctx) => {
    return res(ctx.json(YEAR_TODO));
  }),
  rest.post("/login", (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem("is-authenticated", "true");

    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),

  rest.get("/user", (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem("is-authenticated");

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  }),
];
