import React, { Component } from 'react';
import FriendListItem from '../FriendListItem/FriendListItem';
import propTypes from "prop-types";
import styled from 'styled-components';

const FriendList = styled.ul`
    margin: 120px auto 0;
    width: 300px;
`;

class FriendsList extends Component {
    render() {
        const { friends } = this.props;
        return (
            <FriendList>
                {friends.map(item => {
                    return (
                        <FriendListItem 
                            key={ item.id } 
                            avatar={ item.avatar } 
                            isOnline={ item.isOnline }
                            name={ item.name }
                        />  
                    )
                })}
            </FriendList>
        );
    }
};

FriendList.propTypes = {
    friends: propTypes.array
}

export default FriendsList;