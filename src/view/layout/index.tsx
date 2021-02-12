import { renderRoutes } from 'react-router-config';
import { Button, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  } from '@ant-design/icons';


import './layout.scss';

import { getDefaultMenuKeys, routeMap } from '../../utils/routerHandle';
import { renderMenu } from '../../utils/renderMenu';
import Header from './header/index';
import { useState } from 'react';

export const Layout = (props: { props: { history?: any; route?: any; location?: any; }; }) => {
    
    const {route, location} = props.props;
    const {defaultSelectedKeys, defaultOpenKeys} = getDefaultMenuKeys(location.pathname);


    const handleClick = (e: { key: any; }) => {
        console.log('click ', e);
        props.props.history.push(e.key)
    }

    // const handleOpen = (e:any) => {
    //     console.log('click ', e);
    //     setOpenKey([...e]);
    // }

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    }

    return (
        <div className="g-layout">
            <div className="g-layout-header">
                <Header {...props}></Header>
            </div>
            <div className="g-layout-main">
                <div className="left-nav" style={{width: !collapsed ? 220 : 50}}>
                    <div className="left-nav-wrap" style={{width: !collapsed ? 230 : 60}}>
                        <div style={{textAlign: !collapsed ? 'right':'center'}}>
                            <Button type={'text'} onClick={toggleCollapsed} style={{ marginBottom: 8, marginTop: 8, }}>
                                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            </Button>
                        </div>
                        <Menu
                            // onOpenChange={handleOpen}
                            onClick={handleClick}
                            style={{ width: !collapsed ? 230 : 60, background: 'transparent', height: "100%" }}
                            defaultSelectedKeys={[...defaultSelectedKeys]}
                            defaultOpenKeys={[...defaultOpenKeys]}
                            mode="inline"
                            inlineCollapsed={collapsed}
                        >
                            {renderMenu(routeMap)}
                            {/* <Menu.Item key="/dashboard" icon={<DashboardOutlined />}>仪表盘</Menu.Item>
                            <SubMenu key="sub1" icon={<AreaChartOutlined />} title="数据监控">
                                <Menu.ItemGroup key="g1" title="大屏监控">
                                    <Menu.Item key="/1">数据监控</Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup key="g2" title="系统监控">
                                    <Menu.Item key="/3">CPU监控</Menu.Item>
                                    <Menu.Item key="/4">内存监控</Menu.Item>
                                </Menu.ItemGroup>
                                <SubMenu key="sub4" icon={<OrderedListOutlined />} title="数据监控">
                                    <Menu.Item key="/7">异常数据</Menu.Item>
                                    <Menu.Item key="/8">服务器列表</Menu.Item>
                                </SubMenu>
                            </SubMenu>

                            <SubMenu key="sub2" icon={<OrderedListOutlined />} title="数据监控">
                                <Menu.Item key="/errorDataList">异常数据</Menu.Item>
                                <Menu.Item key="/serverList">服务器列表</Menu.Item>
                            </SubMenu> */}
                        </Menu>
                    </div>
                </div>
                <div className="right-content">
                    <div className="breadcrumb-box"></div>
                    {renderRoutes(route.routes)}
                </div>
            </div>
        </div>
    )
} 