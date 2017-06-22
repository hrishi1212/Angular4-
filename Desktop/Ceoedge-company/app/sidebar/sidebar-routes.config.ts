import { MenuType, RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', menuType: MenuType.LEFT, icon: 'pe-7s-display1',class:'' },
    { path: 'user', title: 'Collaborator', menuType: MenuType.LEFT, icon:'pe-7s-id' ,class:''},
    { path: 'table', title: 'Manage Task', menuType: MenuType.LEFT, icon:'pe-7s-news-paper' ,class:''},
    { path: 'typography', title: 'Manage Leaves', menuType: MenuType.LEFT, icon:'pe-7s-portfolio' ,class:''},
    { path: 'icons', title: 'Reports', menuType: MenuType.LEFT, icon:'pe-7s-door-lock' ,class:''},
    { path: 'login', title: 'login', menuType: MenuType.LEFT, icon:'pe-7s-power' ,class:''},
   
    
];
