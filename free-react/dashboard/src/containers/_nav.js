export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['메뉴'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'First',
    to: '/theme/first',
    icon: 'cil-drop',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Second',
    to: '/theme/second',
    icon: 'cil-pencil',
  },
];
