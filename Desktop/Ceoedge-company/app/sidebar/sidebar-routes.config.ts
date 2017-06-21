import { MenuType, RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', menuType: MenuType.LEFT, icon: 'pe-7s-graph' },
    { path: 'user', title: 'Collaborator', menuType: MenuType.LEFT, icon:'pe-7s-user' },
    { path: 'table', title: 'Manage Task', menuType: MenuType.LEFT, icon:'pe-7s-note2' },
    { path: 'typography', title: 'Manage Leaves', menuType: MenuType.LEFT, icon:'pe-7s-news-paper' },
    { path: 'icons', title: 'Reports', menuType: MenuType.LEFT, icon:'pe-7s-science' },
    { path: 'login', title: 'login', menuType: MenuType.LEFT, icon:'pe-7s-map-marker' },
   
    
];
