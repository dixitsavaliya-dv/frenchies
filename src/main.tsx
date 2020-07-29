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
             {/* <Redirect from="/" to="/dashboard" /> */}
            {/* <Route exact path='/signup' render={(props: any) => <Signup {...props} />} /> */}
        </Switch>
        </HashRouter>
    )
  }
}

export default Main;