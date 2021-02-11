import React from 'react';
import { Redirect } from 'react-router-dom';
import Login from '@/view/login';
import Home from '@/view/home';
import Dashboard from '@/view/dashboard';

import ErrorDataList from '@/view/monitor/errorDataList';
import ServerList from '@/view/monitor/serverList';


// 系统管理
import RoleManagement from '@/view/system/roleManagement';

const routes = [
    {
        path: '/login',
        component: Login,
        exact: true
    },
    {
        path: '/',
        component: Home,
        routes: [
            
            {
                path: '/',
                exact: true,
                render: () => (
                    <Redirect to="/dashboard" />
                )
            },
            {
                path: '/dashboard',
                component: Dashboard
            },
            {
                path: '/errorDataList',
                component: ErrorDataList
            },
            {
                path: '/serverList',
                component: ServerList
            },

            {
                path: '/roleManagement',
                component: RoleManagement
            },
        ]
    },
    
]

export default routes;