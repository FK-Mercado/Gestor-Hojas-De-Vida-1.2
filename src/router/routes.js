import home from '../views/home.html?raw';
import login from '../views/login.html?raw';
import register from '../views/register.html?raw';
import dashboard_admin from '../views/dashboard-admin.html?raw';
import dashboard_coder from '../views/dashboard-coder.html?raw';
import register_admin from '../views/register-admin.html?raw';
import notFound from '../views/404.html?raw';

export const routePath={
    '/': {
        view: home,
        logic: () => import("../logic/home.js")
    },
    '/login':{
        view: login,
        logic: () => import("../logic/login.js") 
    },
    '/register':{
        view: register, 
    logic: () => import("../logic/register.js")
    },
    '/dashboard-admin':{
        view: dashboard_admin, 
        logic: () => import("../logic/dashboard-admin.js") 
    },
    '/dashboard-coder':{
        view: dashboard_coder,
        logic: () => import("../logic/dashboard-coder.js")
    },
    '/register-Admin':{
        view: register_admin,
        logic: ()=> import("../js/register-admin.js")
    },
    "*": {
        view: notFound,
        logic: () => import("../logic/404.js"),
    }
};