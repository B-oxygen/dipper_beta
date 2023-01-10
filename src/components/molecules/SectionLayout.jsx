import styled from "styled-components";

const Container = styled.div`
  padding: 40px 16px;
`;

function SectionLayout({ children }) {
  return <Container>{children}</Container>;
}

export default SectionLayout;
