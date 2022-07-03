import React, { Component } from 'react';
import FriendListItem from '../FriendListItem/FriendListItem';
import { FriendList } from './FriendList.styled_components';
import PropTypes from "prop-types";


class FriendsList extends Component {
    render() {
        const { friends } = this.props;
        return (
            <FriendList>
                {friends.map(item => {
                    const { id, avatar, isOnline, name } = item;
                    return (
                        <FriendListItem 
                            key={ id } 
                            avatar={ avatar } 
                            isOnline={ isOnline }
                            name={ name }
                        />  
                    )
                })}
            </FriendList>
        );
    }
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        }).isRequiredw
    )
}

export default FriendsList;