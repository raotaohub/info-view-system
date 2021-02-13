import styled from "styled-components";
import { Title } from "../../components/Title";

import ScreenImg from '../../assets/img/screen.png';
import { Button, Card, Col, Row } from "antd";
import React from "react";

export default function DataMonitor() {
    return (
        <Containor>
            <Title title={"数据监控"}></Title>
            

            <Row gutter={16}>
                <Col span={8}>
                    <Card title={'监控大屏1'} 
                    hoverable
                    bodyStyle={{padding: 0}}
                    headStyle={{color: 'rgb(26, 115, 199)',padding: '0 10px'}}
                    cover={<img src={ScreenImg} alt='' />}
                    actions={[
                        <Button type={'link'}>打开</Button>,
                        <Button type={'link'} style={{color: 'red'}}>删除</Button>
                        
                    ]} />
                </Col>
                <Col span={8}>
                    <Card title={'监控大屏2'} 
                    hoverable
                    bodyStyle={{padding: 0}}
                    headStyle={{color: 'rgb(26, 115, 199)',padding: '0 10px'}}
                    cover={<img src={ScreenImg} alt='' />}
                    actions={[
                        <Button type={'link'}>打开</Button>,
                        <Button type={'link'} style={{color: 'red'}}>删除</Button>
                        
                    ]} />
                </Col>
                <Col span={8}>
                    <Card title={'监控大屏3'} 
                    hoverable
                    bodyStyle={{padding: 0}}
                    headStyle={{color: 'rgb(26, 115, 199)',padding: '0 10px'}}
                    cover={<img src={ScreenImg} alt='' />}
                    actions={[
                        <Button type={'link'}>打开</Button>,
                        <Button type={'link'} style={{color: 'red'}}>删除</Button>
                        
                    ]} />
                </Col>
            </Row>
            <br/>
            <Row gutter={16}>
                <Col span={8}>
                    <Card title={'监控大屏4'} 
                    hoverable
                    bodyStyle={{padding: 0}}
                    headStyle={{color: 'rgb(26, 115, 199)',padding: '0 10px'}}
                    cover={<img src={ScreenImg} alt='' />}
                    actions={[
                        <Button type={'link'}>打开</Button>,
                        <Button type={'link'} style={{color: 'red'}}>删除</Button>
                        
                    ]} />
                </Col>
                <Col span={8}>
                    <Card title={'监控大屏5'} 
                    hoverable
                    bodyStyle={{padding: 0}}
                    headStyle={{color: 'rgb(26, 115, 199)',padding: '0 10px'}}
                    cover={<img src={ScreenImg} alt='' />}
                    actions={[
                        <Button type={'link'}>打开</Button>,
                        <Button type={'link'} style={{color: 'red'}}>删除</Button>
                        
                    ]} />
                </Col>
                <Col span={8}>
                    <Card title={'监控大屏6'} 
                    hoverable
                    bodyStyle={{padding: 0}}
                    headStyle={{color: 'rgb(26, 115, 199)',padding: '0 10px'}}
                    cover={<img src={ScreenImg} alt='' />}
                    actions={[
                        <Button type={'link'}>打开</Button>,
                        <Button type={'link'} style={{color: 'red'}}>删除</Button>
                        
                    ]} />
                </Col>
            </Row>
            <br/>
            <Row gutter={16}>
                <Col span={8}>
                    <Card title={'监控大屏7'} 
                    hoverable
                    bodyStyle={{padding: 0}}
                    headStyle={{color: 'rgb(26, 115, 199)',padding: '0 10px'}}
                    cover={<img src={ScreenImg} alt='' />}
                    actions={[
                        <Button type={'link'}>打开</Button>,
                        <Button type={'link'} style={{color: 'red'}}>删除</Button>
                        
                    ]} />
                </Col>
                <Col span={8}>
                    <Card title={'监控大屏8'} 
                    hoverable
                    bodyStyle={{padding: 0}}
                    headStyle={{color: 'rgb(26, 115, 199)',padding: '0 10px'}}
                    cover={<img src={ScreenImg} alt='' />}
                    actions={[
                        <Button type={'link'}>打开</Button>,
                        <Button type={'link'} style={{color: 'red'}}>删除</Button>
                        
                    ]} />
                </Col>
                <Col span={8}>
                    <Card title={'监控大屏9'} 
                    hoverable
                    bodyStyle={{padding: 0}}
                    headStyle={{color: 'rgb(26, 115, 199)',padding: '0 10px'}}
                    cover={<img src={ScreenImg} alt='' />}
                    actions={[
                        <Button type={'link'}>打开</Button>,
                        <Button type={'link'} style={{color: 'red'}}>删除</Button>
                        
                    ]} />
                </Col>
            </Row>
            
        </Containor>
    )
}

const Containor = styled.div`
    background-color: rgb(255, 255, 255);
    padding: 10px;
`;