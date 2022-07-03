import React, { Component } from 'react';
import propTypes from "prop-types";
import { Wrapper, Description, Image, Name, Tag, Location, Stats, StatsItem, Label, Quantity } from "./Profile.styled_components"

class Profile extends Component {
    render() {
        const { username, tag, location, avatar, stats } = this.props;
        const { followers, views, likes } = stats;
        return (
            <Wrapper>
                <Description>
                    <Image
                        src={avatar}
                        alt="User avatar"
                    />
                    <Name>{username}</Name>
                    <Tag>@{tag}</Tag>
                    <Location>{location}</Location>
                </Description>

                <Stats>
                    <StatsItem stats={followers}>
                        <Label>Followers</Label>
                        <Quantity>{followers}</Quantity>
                    </StatsItem>
                    <StatsItem stats={views}>
                        <Label>Views</Label>
                        <Quantity>{views}</Quantity>
                    </StatsItem>
                    <StatsItem>
                        <Label>Likes</Label>
                        <Quantity>{likes}</Quantity>
                    </StatsItem>
                </Stats>
        </Wrapper>
        );
    }
}

Profile.propTypes = {
    username : propTypes.string.isRequired,
    tag : propTypes.string.isRequired, 
    location : propTypes.string.isRequired,
    avatar : propTypes.string.isRequired,
    stats : propTypes.shape({
            followers: propTypes.number.isRequired,                    
            views: propTypes.number.isRequired,
            likes: propTypes.number.isRequired
        })
};

export default Profile;