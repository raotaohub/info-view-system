import { Button, Dropdown, Menu } from "antd";
import React from "react";
import styled from "styled-components";


const Header = (props: any) => {
    const logout = () => {
        props.props.history.push('/login');
    }
    return (
        <Container>
            <HeaderLeft>
                <h1>信息管理平台</h1>
            </HeaderLeft>
            <HeaderRight>
            <Dropdown overlay={
                <Menu>
                    <Menu.Item key={'logout'}>
                        <Button type={'link'} onClick={logout}>登出</Button>
                    </Menu.Item>
                </Menu>}>
                <Button type={'text'} style={{color: '#fff'}} onClick={e => e.preventDefault()}>Hi, 超级管理员</Button>
            </Dropdown>
            </HeaderRight>
        </Container>
    )
}

export default Header;

const Container = styled.div`
    background-color: rgb(26, 115, 199);
    border-bottom: 2px solid rgb(58, 134, 204);
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HeaderLeft = styled.div`
    display: flex;
    margin-left: 20px;
    align-items: center;
    h1{
        color: #fff;
        margin-bottom: 0;
        font-size: 20px;
    }
`;
const HeaderRight = styled.div`
`;