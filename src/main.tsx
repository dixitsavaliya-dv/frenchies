import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Switch, HashRouter,Redirect } from 'react-router-dom';
import DashboardContent from './views/Dashboard/Dashboard';
import UserProfile from './views/UserProfile/UserProfile';
import ChangePassword from './views/changepassword/changepassword';
import Users from './views/usersmanagment/users/users';
import AddUser from './views/usersmanagment/adduser/adduser';
import UserRole from './views/usersmanagment/userrole/userrole';
import AddUserRole from './views/usersmanagment/adduserrole/adduserrole';
import UserRoleToRights from './views/usersmanagment/userroletorights/userroletorights';
import ViewUser from './views/usersmanagment/viewuser/viewuser';
import ViewUserRole from './views/usersmanagment/viewuserrole/viewuserrole';
import Category from './views/categorymanagment/category/category';
import SubCategory from './views/categorymanagment/subcategory/subcategory';
import AddCategory from './views/categorymanagment/addcategory/addcategory';
import AddSubCategory from './views/categorymanagment/addsubcategory/addsubcategory';
import ViewCategory from './views/categorymanagment/viewcategory/viewcategory';
import ViewSubCategory from './views/categorymanagment/viewsubcategory/viewsubcategory';
import AreaManagement from './views/areamanagment/areamanagment';
import Shop from './views/shopmanagement/shop/shop';
import AddShop from './views/shopmanagement/addshop/addshop';
import ViewShop from './views/shopmanagement/viewshop/viewshop';
import ShopVerification from './views/shopmanagement/shopverification/shopverification';
import AddShopVerification from './views/shopmanagement/addshopverification/addshopverification';
import ViewShopVerification from './views/shopmanagement/viewshopverification/viewshopverification';
import Products from './views/productmanagment/productmanagement';
import AddProduct from './views/productmanagment/addproduct/addproduct';
import ViewProduct from './views/productmanagment/viewproduct/viewproduct';
import Orders from './views/ordermanagement/order/order';
import ViewOrder from './views/ordermanagement/vieworder/vieworder';
import DeliveryList from './views/deliverymanagement/delivery/delivery';
import AddDelivery from './views/deliverymanagement/adddelivery/adddelivery';
import ViewDelivery from './views/deliverymanagement/viewdelivery/viewdelivery';
const hist = createBrowserHistory();

class Main extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
            <Route exact path='/dashboard' name='Dashboard' render={(props: any) => <DashboardContent {...props} />} />
            <Route exact path='/user' name='User Profile' render={(props: any) => <UserProfile {...props} />} />
            <Route exact path='/change-password' name='Change Password' render={(props: any) => <ChangePassword {...props} />} />
            <Route exact path='/users' name='Users' render={(props: any) => <Users {...props} />} />
            <Route exact path='/adduser' name='Add User' render={(props: any) => <AddUser {...props} />} />
            <Route exact path='/edituser' name='Add User' render={(props: any) => <AddUser {...props} />} />
            <Route exact path='/viewuser' name='View User' render={(props: any) => <ViewUser {...props} />} />
            <Route exact path='/role' name='Role' render={(props: any) => <UserRole {...props} />} />
            <Route exact path='/adduserrole' name='Add Role' render={(props: any) => <AddUserRole {...props} />} />
            <Route exact path='/edituserrole' name='Add Role' render={(props: any) => <AddUserRole {...props} />} />
            <Route exact path='/viewuserrole' name='View Role' render={(props: any) => <ViewUserRole {...props} />} />
            <Route exact path='/role-privileges' name='Role Privileges' render={(props: any) => <UserRoleToRights {...props} />} />
            <Route exact path='/category' render={(props: any) => <Category {...props} />} />
            <Route exact path='/subcategory' render={(props: any) => <SubCategory {...props} />} />
            <Route exact path='/addcategory' render={(props: any) => <AddCategory {...props} />} />
            <Route exact path='/editcategory' render={(props: any) => <AddCategory {...props} />} />
            <Route exact path='/addsubcategory' render={(props: any) => <AddSubCategory {...props} />} />
            <Route exact path='/editsubcategory' render={(props: any) => <AddSubCategory {...props} />} />
            <Route exact path='/viewcategory' render={(props: any) => <ViewCategory {...props} />} />
            <Route exact path='/viewsubcategory' render={(props: any) => <ViewSubCategory {...props} />} />
            <Route exact path='/area' render={(props: any) => <AreaManagement {...props} />} />
            <Route exact path='/shop' render={(props: any) => <Shop {...props} />} />
            <Route exact path='/addshop' render={(props: any) => <AddShop {...props} />} />
            <Route exact path='/editshop' render={(props: any) => <AddShop {...props} />} />
            <Route exact path='/viewshop' render={(props: any) => <ViewShop {...props} />} />
            <Route exact path='/shop-verification' render={(props: any) => <ShopVerification {...props} />} />
            <Route exact path='/add-shop-verification' render={(props: any) => <AddShopVerification {...props} />} />
            <Route exact path='/edit-shop-verification' render={(props: any) => <AddShopVerification {...props} />} />
            <Route exact path='/view-shop-verification' render={(props: any) => <ViewShopVerification {...props} />} />
            <Route exact path='/product' render={(props: any) => <Products {...props} />} />
            <Route exact path='/add-product' render={(props: any) => <AddProduct {...props} />} />
            <Route exact path='/edit-product' render={(props: any) => <AddProduct {...props} />} />
            <Route exact path='/view-product' render={(props: any) => <ViewProduct {...props} />} />
            <Route exact path='/order' render={(props: any) => <Orders {...props} />} />
            <Route exact path='/view-order-details' render={(props: any) => <ViewOrder {...props} />} />
            <Route exact path='/delivery' render={(props: any) => <DeliveryList {...props} />} />
            <Route exact path='/add-delivery' render={(props: any) => <AddDelivery {...props} />} />
            <Route exact path='/edit-delivery' render={(props: any) => <AddDelivery {...props} />} />
            <Route exact path='/view-delivery' render={(props: any) => <ViewDelivery {...props} />} />
             {/* <Redirect from="/" to="/dashboard" /> */}
            {/* <Route exact path='/signup' render={(props: any) => <Signup {...props} />} /> */}
        </Switch>
        </HashRouter>
    )
  }
}

export default Main;