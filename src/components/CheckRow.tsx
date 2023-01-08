import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import CheckIcon from "../assets/CheckIcon";
import { CheckRowProps } from "../type";

function CheckRow({ title, list, setList }: CheckRowProps) {
  const handleClick = (id: string, isCompleted: boolean) => {
    if (list && list.length > 0) {
      const newClicks = list.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            completed: !isCompleted,
          };
        }

        return el;
      });
      setList(newClicks);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (list && list.length > 0) {
      const newClicks = list.map((el) => {
        if (el.id === e.target.id) {
          return {
            ...el,
            todo: e.target.value,
          };
        }

        return el;
      });
      setList(newClicks);
    }
  };

  return (
    <Container>
      {title}
      {list &&
        list.length > 0 &&
        list.map((el, i) => {
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
      {["", "", "", ""].map((el, i) => {
        return (
          <SubContainer subIndex={i + 1}>
            {list &&
              list.length > 0 &&
              list.map((el, i) => {
                return (
                  <Box onClick={() => handleClick(el.id, el.completed)} key={i}>
                    <Label>
                      <div>
                        <Checkbox isCompleted={el.completed} id={el.id}>
                          {el.completed ? (
                            <CheckIcon
                              fill="#ffffff"
                              width="16px"
                              height="16px"
                            />
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
          </SubContainer>
        );
      })}
    </Container>
  );
}

export default CheckRow;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

interface SubContainerProps {
  subIndex: number;
}

const SubContainer = styled.div<SubContainerProps>`
  display: flex;
  flex-direction: column;
  padding-left: ${(props: SubContainerProps) =>
    props ? 16 * props.subIndex : 0}px;
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
