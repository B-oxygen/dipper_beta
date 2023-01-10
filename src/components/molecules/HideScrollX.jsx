import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 16px;

  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export default function HideScrollX({ children }) {
  return <Container>{children}</Container>;
}
