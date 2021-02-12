import { AreaChartOutlined, DashboardOutlined, OrderedListOutlined, SettingOutlined} from '@ant-design/icons';

// 根据当前 URL 展开默认菜单
export const getDefaultMenuKeys = (pathname: string):any => {
    const getMap = (routes:any, pathname: string):any => {
        if (!routes) return [];
        for (let route of routes) {
            if (route.path === pathname) {
                return [route.path];
            }
            let res = getMap(route.children, pathname);
            if (res.length) return [route.key, ...res];
        }
        return [];
    }
    let routesMap = getMap(routeMap, pathname);
    const defaultSelectedKeys = [routesMap.pop()];
    return {
        defaultSelectedKeys,
        defaultOpenKeys: [...routesMap],
    }
}



// 用于渲染菜单的路由信息表

export const routeMap = [
    {
        path: '/dashboard',
        isItem: true,
        title: '仪表盘',
        icon: DashboardOutlined
    },
    {
        key: 'sub1',
        title: '数据监控',
        isSub: true,
        icon: OrderedListOutlined,
        children: [
            {
                title: '大屏监控',
                key: 'g1',
                isGroup: true,
                children: [
                    {
                        path: '/1',
                        title: '数据监控',
                        isItem: true,
                    }
                ]
            },
            {
                title: '大屏监控',
                key: 'g2',
                isGroup: true,
                children: [
                    {
                        path: '/3',
                        title: 'CPU监控',
                        isItem: true,
                    },
                    {
                        path: '/4',
                        title: '内存监控',
                        isItem: true,
                    }
                ]
            },
            {
                key: 'sub4',
                title: '数据监控',
                icon: AreaChartOutlined,
                isSub: true,
                children: [
                    {
                        path: '/7',
                        title: '异常数据',
                        isItem: true,
                    },
                    {
                        path: '/8',
                        title: '服务器列表',
                        isItem: true,
                    }
                ]
            }
        ]
    },
    {
        key: 'sub2',
        title: '数据监控',
        icon: AreaChartOutlined,
        isSub: true,
        children: [
            {
                path: '/errorDataList',
                title: '异常数据',
                isItem: true,
            },
            {
                path: '/serverList',
                title: '服务器列表',
                isItem: true,
            }
        ]
    },
    {
        key: 'sub3',
        title: '系统设置',
        icon: SettingOutlined,
        isSub: true,
        children: [
            {
                path: '/roleManagement',
                title: '角色管理',
                isItem: true,
            },
        ]
    }
]




