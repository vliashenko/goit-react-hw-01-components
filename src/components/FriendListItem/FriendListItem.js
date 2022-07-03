import React from 'react';
import PropTypes from "prop-types";
import { Item, Status, Avatar, Name } from "./FriendListItem.styled_components";

const FriendListItem = ({ isOnline, avatar, name }) => {
    
    return (
        <Item>
            <Status status={isOnline}/>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </Item>
    );
};

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired
}


export default FriendListItem;