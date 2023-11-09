import styled from "styled-components";
import Filters from "../Filters/Filters";

const Container = styled.div`
  text-align: center;
  color: white;
  background-color: #1a3439;
  padding: 20px;
  box-sizing: border-box;
`;

const Header = () => {
  return (
    <Container>
      <h1>ReciPad</h1>
      <Filters></Filters>
    </Container>
  );
};

export default Header;
