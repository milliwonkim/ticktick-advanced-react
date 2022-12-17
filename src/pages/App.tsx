import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import "../styles/App.css";
import CheckIcon from "../assets/CheckIcon";
import { css } from "@emotion/react";
import { api } from "../api/api";
import dayjs from "dayjs";

function App() {
  const [todos, setTodos] = useState<
    {
      todo: string;
      completed: boolean;
      id: string;
    }[]
  >([]);

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

  const handleClick = (id: string, isCompleted: boolean) => {
    const newClicks = todos.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          completed: !isCompleted,
        };
      }

      return el;
    });
    setTodos(newClicks);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newClicks = todos.map((el) => {
      if (el.id === e.target.id) {
        return {
          ...el,
          todo: e.target.value,
        };
      }

      return el;
    });
    setTodos(newClicks);
  };

  return (
    <Container>
      {dayjs().format("YYYY-MM-DD HH:mm")}
      {todos.map((el, i) => {
        return (
          <Box onClick={() => handleClick(el.id, el.completed)} key={i}>
            <Label>
              <div>
                <Checkbox isCompleted={el.completed} id={el.id}>
                  {el.completed ? (
                    <CheckIcon fill="#ffffff" width="16px" height="16px" />
                  ) : null}
                </Checkbox>
              </div>
              <Input
                id={el.id}
                value={el.todo}
                onClick={(e) => e.stopPropagation()}
                onChange={handleChange}
              />
            </Label>
          </Box>
        );
      })}
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Box = styled.div`
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: #e2e2e2;
  }
`;

interface CheckboxProps {
  isCompleted: boolean;
}

const Checkbox = styled.div<CheckboxProps>`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  ${({ isCompleted }) => {
    if (isCompleted) {
      return css`
        background: #455d7a;
      `;
    }
  }}
  border: 1px solid #455d7a;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Input = styled.input`
  border: transparent;
  background: transparent;
  &:focus {
    outline: none;
  }
`;
