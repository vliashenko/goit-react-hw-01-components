import styled from 'styled-components';

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

export { Item, Status, Avatar, Name };