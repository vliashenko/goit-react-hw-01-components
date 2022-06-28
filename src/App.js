import Container from "./components/Container/Container";
import styled from "styled-components";

const AppContainer = styled.div`
  background-color: #e7ecf2;
`;


function App() {
  return (
    <AppContainer>
      <Container/>
    </AppContainer>
  );
}

export default App;
