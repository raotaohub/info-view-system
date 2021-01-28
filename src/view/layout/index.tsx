import React from 'react';
import { renderRoutes } from 'react-router-config';
// import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { AreaChartOutlined, DashboardOutlined } from '@ant-design/icons';
import './layout.scss';

const { SubMenu } = Menu;

export const Layout = (props:any) => {
    console.log(props);
    const {route} = props.props;
    const handleClick = (e:object) => {
        console.log('click ', e);
    }

    return (
        <div className="g-layout">
            <div className="left-nav">
                <div className="left-nav-wrap">
                    <Menu
                        onClick={handleClick}
                        style={{ width: 230, background: 'transparent', height: "100%" }}
                        defaultSelectedKeys={['/dashboard']}
                        defaultOpenKeys={[]}
                        mode="inline"
                    >
                        <Menu.Item key="/dashboard" icon={<DashboardOutlined />}>仪表盘</Menu.Item>
                        <SubMenu key="sub1" icon={<AreaChartOutlined />} title="数据监控">
                            <Menu.ItemGroup key="g1" title="大屏监控">
                                <Menu.Item key="1">销售数据</Menu.Item>
                                <Menu.Item key="2">订单数据</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup key="g2" title="系统监控">
                                <Menu.Item key="3">CPU监控</Menu.Item>
                                <Menu.Item key="4">内存监控</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                    </Menu>
                </div>
            </div>
            <div className="right-content">
                {renderRoutes(route.routes)}
            </div>
        </div>
    )
} 