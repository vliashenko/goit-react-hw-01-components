import React, { Component } from 'react';
import propTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`

    margin: 0 auto;
    width: 400px;
    box-shadow: 0px 1px 10px grey;
    border-radius: 10px;
    background-color: #fff;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img`
    margin-top: 60px;
    margin-bottom: 5px;
    border-radius: 50%;
    border: 1px solid #ececec;
    width: 150px;
`;

const Name = styled.p`
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 24px;
    font-weight: 600;
`;

const Tag = styled.p`
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: 400;
    color: #a4aeb8;
`;

const Location = styled.p`
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: 400;
    color: #a4aeb8;
`;

const Stats = styled.ul`
    margin-top: 40px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 0;
    border-radius: 0px 0px 10px 10px;
    background-color: #f3f6f9;
`;

const StatsItem = styled.li`
    padding: 30px 10px 30px 10px;
    display: flex;
    flex: 1;
    flex-direction: column;
    text-align: center;
    border-top: 1px solid #ebeff4;
    border-right: ${props => props.stats && "1px solid #ebeff4"}
`;

const Label = styled.span`
    color: #a7b2bc;
    margin-bottom: 2px;
`;

const Quantity = styled.span`
    color: #293c51;
    font-size: 18px;
    font-weight: 700;
`;


class Profile extends Component {
    render() {
        const { username, tag, location, avatar, stats } = this.props;
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
                    <StatsItem stats={stats.followers}>
                        <Label>Followers</Label>
                        <Quantity>{stats.followers}</Quantity>
                    </StatsItem>
                    <StatsItem stats={stats.views}>
                        <Label>Views</Label>
                        <Quantity>{stats.views}</Quantity>
                    </StatsItem>
                    <StatsItem>
                        <Label>Likes</Label>
                        <Quantity>{stats.likes}</Quantity>
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