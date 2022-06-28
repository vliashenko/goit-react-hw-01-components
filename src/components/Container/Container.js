import React, { Component } from 'react';
import Profile from '../Profile/Profile';
import user  from "../../user.json";
import styled from "styled-components";

const MainContainer = styled.div`
    padding: 13.6vh 0;
    margin: 0 auto;
    width: 400px;
`

class Container extends Component {
    render() {
        return (
            <MainContainer>
                <Profile 
                    username={user.username}
                    tag={user.tag}
                    location={user.location}
                    avatar={user.avatar}
                    stats={user.stats}
                />
            </MainContainer>
        );
    }
}

export default Container;