import styled from "@emotion/styled";

export const Controls = styled.div`
  border: none;
  padding: 5px 10px;
  background-color: white;
  color: black;
  font-weight: 500;
  margin-left: 5px;
  margin-right: 5px;
  font-family: inherit;
  outline: none;

  > button {
    border: none;
    padding: 5px 10px;
    background-color: white;
    color: black;
    font-weight: 500;
    margin-left: 5px;
    margin-right: 5px;
    font-family: inherit;
    cursor: pointer;
    outline: none;
    box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);
    transition: box-shadow 250ms linear;
    border-radius: 5px;
    border: 1px solid gray;

    &:hover,
    focus,
    active {
      background-color: rgba(8, 75, 201, 0.295);
      color: white;
      box-shadow: 2px 5px 2px 0 rgb(0 0 0 / 0.5);
    }
  }
`;

export const MainHeading = styled.h1`
  font-size: 35px;
`;

export const Button = styled.button`
  border: none;
  padding: 5px 10px;
  background-color: white;
  color: black;
  font-weight: 500;
  margin-left: 5px;
  margin-right: 5px;
  font-family: inherit;
  cursor: pointer;
  outline: none;
  box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);
  transition: box-shadow 250ms linear;
  border-radius: 5px;
  border: 1px solid gray;

  &:hover,
  focus,
  active {
    background-color: rgba(8, 75, 201, 0.295);
    color: white;
    box-shadow: 2px 5px 2px 0 rgb(0 0 0 / 0.5);
  }
`;
