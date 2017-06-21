import { MenuType, RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', menuType: MenuType.LEFT, icon: 'pe-7s-graph' },
    { path: 'user', title: 'Company', menuType: MenuType.LEFT, icon:'pe-7s-user' },
    { path: 'table', title: 'Reports', menuType: MenuType.LEFT, icon:'pe-7s-note2' },
   
];
