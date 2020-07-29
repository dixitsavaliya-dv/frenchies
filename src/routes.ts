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
    },
    {
      id:'area',
      url: '/area',
      name: 'Area Management',
      icon: 'fa fa-area-chart fs-16'
    },
    {
      id:'Shop management',
      name: 'Shop Management',
      icon: 'fa fa-shopping-cart fs-16',
      children: [
        {
          name: 'Shop',
          url: '/shop'
        },
        {
          name: 'Shop Verification',
          url: '/shop-verification'
        }
      ]
    },
    {
      id:'Product management',
      name: 'Product Management',
      icon: 'fa fa-list-alt fs-16',
      children: [
        {
          name: 'Product',
          url: '/product'
        }
      ]
    },
    {
      id:'Delivery management',
      name: 'Delivery Management',
      icon: 'fa fa-truck fs-16',
      children: [
        {
          name: 'Delivery',
          url: '/delivery'
        },
        {
          name: 'Delivery Verification',
          url: '/delivery-verification'
        }
      ]
    },
    {
      id:'Order management',
      name: 'Order Management',
      icon: 'fa fa-list fs-16',
      children: [
        {
          name: 'Order',
          url: '/order'
        }
      ]
    },
  ]
}


