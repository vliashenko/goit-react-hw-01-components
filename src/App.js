import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import user from "./data/user.json";
import data from "./data/data.json";
import styled from "styled-components";

const AppContainer = styled.div`
  padding: 126px 0;
  background-color: #e7ecf2;
`;


function App() {
  return (
    <AppContainer>
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data}/>
    </AppContainer>
  );
}

export default App;
