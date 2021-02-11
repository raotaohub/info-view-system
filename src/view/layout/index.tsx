import React, { useEffect, useState } from 'react';
import { renderRoutes } from 'react-router-config';
import { Menu } from 'antd';

import './layout.scss';

import { getDefaultMenuKeys, routeMap } from '../../utils/routerHandle';
import { renderMenu } from '../../utils/renderMenu';

export const Layout = (props:any) => {
    
    const {route, location} = props.props;
    const {defaultSelectedKeys, defaultOpenKeys} = getDefaultMenuKeys(location.pathname);


    const handleClick = (e:any) => {
        console.log('click ', e);
        props.props.history.push(e.key)
    }

    // const handleOpen = (e:any) => {
    //     console.log('click ', e);
    //     setOpenKey([...e]);
    // }

    return (
        <div className="g-layout">
            <div className="g-layout-header"></div>
            <div className="g-layout-main">
                <div className="left-nav">
                    <div className="left-nav-wrap">
                        <Menu
                            // onOpenChange={handleOpen}
                            onClick={handleClick}
                            style={{ width: 230, background: 'transparent', height: "100%" }}
                            defaultSelectedKeys={[...defaultSelectedKeys]}
                            defaultOpenKeys={[...defaultOpenKeys]}
                            mode="inline"
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
                    {renderRoutes(route.routes)}
                </div>
            </div>
        </div>
    )
} 