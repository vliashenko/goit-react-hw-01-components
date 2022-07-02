import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendsList from "./components/FriendsList/FriendsList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import user from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
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
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions}/>
    </AppContainer>
  );
}

export default App;
