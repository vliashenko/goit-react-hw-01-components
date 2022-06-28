import React, { Component } from 'react';
import propTypes from "prop-types";
import styled from 'styled-components';

const FriendList = styled.ul`
    margin: 120px auto 0;
    width: 300px;
`;

const Item = styled.div`
   display: flex;
   align-items: center;
   box-shadow: 0px 1px 10px #d7d7d7;
   border-radius: 10px;
   margin: 10px 0;
   padding: 10px 0;
   background-color: #fff;
`;

const Status = styled.span`
    display: flex;
    justify-content: center;
    margin: 0 15px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${props => props.status ? "#49b04b" : "red"};
`;

const Avatar = styled.img`
    width: 70px;
    box-shadow: 0px 1px 2px #d7d7d7;
    border-radius: 10px;
`;

const Name = styled.div`
    margin-left: 20px;
    font-size: 20px;
    font-weight: 400;
`;

class FriendsList extends Component {
    render() {
        const { friends } = this.props;
        return (
            <FriendList>
                {friends.map(item => {
                    return (
                        <Item key={item.id}>
                            <Status status={item.isOnline}/>
                            <Avatar src={item.avatar} alt="User avatar" width="48" />
                            <Name>{item.name}</Name>
                        </Item>
                    )
                })}
            </FriendList>
        );
    }
};

FriendList.propTypes = {
    friends: propTypes.arrayOf(
        propTypes.shape({
            avatar: propTypes.string,           
            name: propTypes.string,
            isOnline: propTypes.boolean,
            id: propTypes.number
        }).isRequired
    )
}

export default FriendsList;