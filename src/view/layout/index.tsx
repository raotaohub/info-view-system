import React from 'react';
import { renderRoutes } from 'react-router-config';
// import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { AreaChartOutlined, DashboardOutlined, OrderedListOutlined} from '@ant-design/icons';
import './layout.scss';

const { SubMenu } = Menu;

export const Layout = (props:any) => {
    console.log(props);
    const {route} = props.props;
    const handleClick = (e:any) => {
        console.log('click ', e);
        props.props.history.push(e.key)
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
                                <Menu.Item key="1">数据监控</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup key="g2" title="系统监控">
                                <Menu.Item key="3">CPU监控</Menu.Item>
                                <Menu.Item key="4">内存监控</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>

                        <SubMenu key="sub2" icon={<OrderedListOutlined />} title="数据监控">
                            <Menu.Item key="/errorDataList">异常数据</Menu.Item>
                            <Menu.Item key="/serverList">服务器列表</Menu.Item>
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