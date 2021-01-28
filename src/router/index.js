import React from 'react';
import { Redirect } from 'react-router-dom';
import Login from '@/view/login';
import Home from '@/view/home';
import Dashboard from '@/view/dashboard';
import About from '@/view/about';
import Query from '@/view/query';
import System from '@/view/system';
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
                path: '/about',
                component: About
            },
            {
                path: '/query',
                component: Query
            },
            {
                path: '/system',
                component: System
            },
        ]
    },
    
]

export default routes;