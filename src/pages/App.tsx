import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import styled from "@emotion/styled";

import "../styles/App.css";
import CheckIcon from "../assets/CheckIcon";

const TODOS = [
  { id: v4(), todo: "개발하기", completed: false },
  { id: v4(), todo: "개발하기", completed: false },
  { id: v4(), todo: "개발하기", completed: false },
  { id: v4(), todo: "개발하기", completed: false },
];

function App() {
  const [todos, setTodos] = useState<
    {
      todo: string;
      completed: boolean;
      id: string;
    }[]
  >([]);

  useEffect(() => {
    setTodos(TODOS);
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

  console.log(todos);

  return (
    <Container>
      {todos.map((el, i) => {
        return (
          <Box key={i}>
            <Label>
              <div>
                <Checkbox
                  onClick={() => handleClick(el.id, el.completed)}
                  id={el.id}
                >
                  {el.completed ? (
                    <CheckIcon fill="#ffffff" width="16px" height="16px" />
                  ) : null}
                </Checkbox>
              </div>
              <Input id={el.id} value={el.todo} onChange={handleChange} />
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

const Box = styled.div``;

const Checkbox = styled.div`
  width: 16px;
  height: 16px;
  border: 1px solid #455d7a;
  border-radius: 4px;
  background: #455d7a;
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
  &:focus {
    outline: none;
  }
`;
