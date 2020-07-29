export default {
 items:[
    {
      id:'dashborad',
      url: '/dashboard',
      name: 'Dashboard',
      icon: 'fa fa-desktop fs-16'
    },
    {
      id:'user management',
      name: 'User-Management',
      icon: 'fa fa-user fs-16',
      children: [
        {
          name: 'User',
          url: '/users'
        },
        {
          name: 'Role',
          url: '/role'
        },
        {
          name: 'Role Privileges',
          url: '/role-privileges'
        }
      ]
    },
    {
      id:'Category management',
      name: 'Category Management',
      icon: 'fa fa-list fs-16',
      children: [
        {
          name: 'Category',
          url: '/category'
        },
        {
          name: 'Sub Category',
          url: '/subcategory'
        }
      ]
    }
  ]
}


