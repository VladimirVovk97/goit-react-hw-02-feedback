import styled from "@emotion/styled";

export const List = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  font-size: 20px;
  font-weight: bold;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Value = styled.span`
  font-weight: normal;
`;
