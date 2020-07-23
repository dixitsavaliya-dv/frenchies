/* eslint-disable */
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Navbar from "../components/Navbars/Navbar";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import FixedPlugin from "../components/FixedPlugin/FixedPlugin";

// import nav from "../routes";
import routes from "../routes";
import headerRoutes from "../headerroute";

import dashboardStyle from "../assets/jss/material-dashboard-react/layouts/dashboardStyle";

import image from "assets/img/sidebar-2.jpg";
import logo from "assets/img/reactlogo.png";
import { Badge, Nav, NavItem, NavLink as RsNavLink } from "reactstrap";
import classNames from "classnames";
import "./admin.css";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
    })}
  </Switch>
);

const switchHeaderRoutes = (
  <Switch>
    {headerRoutes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
    })}
  </Switch>
);

interface Props {
  classes: any;
  location: any;
}

interface State {
  image: string;
  color: string;
  hasImage: boolean;
  fixedClasses: string;
  mobileOpen: boolean;
}

class Dashboard extends React.Component<Props, State> {
  refs: any;
  state = {
    image: image,
    color: "blue",
    hasImage: true,
    fixedClasses: "dropdown show",
    mobileOpen: false,
    isOpen: false,
  };
  constructor(props: Props) {
    super(props);
    // this.closeNav = this.closeNav.bind(this);
  }

  handleImageClick = (i: string) => {
    this.setState({ image: i });
  };

  handleColorClick = (c: string) => {
    this.setState({ color: c });
  };

  handleFixedClick = () => {
    if (this.state.fixedClasses === "dropdown") {
      this.setState({ fixedClasses: "dropdown show" });
    } else {
      this.setState({ fixedClasses: "dropdown" });
    }
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  getRoute() {
    return this.props.location.pathname !== "/admin/maps";
  }

  resizeFunction = () => {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  };

  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
    window.addEventListener("resize", this.resizeFunction);
  }

  componentDidUpdate(e: any) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }

  //   closeNav = () => {
  //     this.setState({ isOpen: !this.state.isOpen });
  // }

  activeRoute(routeName: any, props: any) {
    const route = window.location.pathname;
    console.log("route", route);
    return route === routeName
      ? `nav-item nav-dropdown open`
      : `nav-item nav-dropdown`;
  }

  handleClick(e: any) {
    e.preventDefault();
    e.target.parentElement.classList.toggle("open");
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeFunction);
  }

  render() {
    const { classes, ...rest } = this.props;
    const badge = (badge: any) => {
      if (badge) {
        const classes = classNames(badge.class);
        return (
          <Badge className={classes} color={badge.variant}>
            {badge.text}
          </Badge>
        );
      }
    };

    // simple wrapper for nav-title item
    const wrapper = (item: any) => {
      return item.wrapper && item.wrapper.element
        ? React.createElement(
            item.wrapper.element,
            item.wrapper.attributes,
            item.name
          )
        : item.name;
    };

    // nav list section title
    const title = (title: any, key: any) => {
      const classes = classNames("nav-title", title.class);
      return (
        <li key={key} className={classes}>
          {wrapper(title)}{" "}
        </li>
      );
    };

    // nav list divider
    const divider = (divider: any, key: any) => {
      const classes = classNames("divider", divider.class);
      return <li key={key} className={classes} />;
    };

    // nav item with nav link
    const navItem = (item: any, key: any) => {
      const classes = {
        item: classNames(item.class),
        link: classNames(
          "nav-link",
          item.variant ? `nav-link-${item.variant}` : ""
        ),
        icon: classNames(item.icon),
      };
      return navLink(item, key, classes);
    };

    // nav link
    const navLink = (item: any, key: any, classes: any) => {
      const url = item.url ? item.url : "";
      return (
        <NavItem key={key} className={classes.item}>
          {isExternal(url) ? (
            <RsNavLink href={url} className={classes.link} active>
              <i className={classes.icon} />
              {item.name}
              {badge(item.badge)}
            </RsNavLink>
          ) : (
            <RsNavLink
              to={url}
              className={classes.link}
              activeClassName="active"
            >
              <i className={classes.icon} />
              {item.name}
              {badge(item.badge)}
            </RsNavLink>
          )}
        </NavItem>
      );
    };

    // nav dropdown
    const navDropdown = (item: any, key: any) => {
      return (
        <li key={key} className={this.activeRoute(item.url, this.props)}>
          {item
            ? item.type === "link" && (
                <a href="#" className="has-chevron" data-toggle="collapse">
                  {" "}
                  <span>
                    <i className={item.icon} />
                    {item.name}{" "}
                  </span>
                </a>
              )
            : ""}
          {item
            ? item.type !== "link" && (
                <>
                  <a
                    href="#"
                    className="has-chevron  nav-dropdown-toggle"
                    data-toggle="collapse"
                    data-target={`#${item.id}`}
                    aria-expanded="false"
                    aria-controls={`${item.id}`}
                    onClick={this.handleClick.bind(this)}
                  >
                    {" "}
                    <span>
                      <i className={item.icon} />
                      {item.name}{" "}
                    </span>
                  </a>
                  <ul
                    id={`${item.id}`}
                    className="collapse"
                    aria-labelledby={`${item.id}`}
                    data-parent="#side-nav-accordion"
                  >
                    {navChildList(item.children)}
                  </ul>
                </>
              )
            : ""}

          {/* <a className="nav-link " href="#" onClick={handleClick.bind(this)}><i className={item.icon}></i>{item.name}</a> */}
        </li>
      );
    };

    // nav type
    const navType = (item: any, idx: any) =>
      item.title
        ? title(item, idx)
        : item.divider
        ? divider(item, idx)
        : item.children
        ? navDropdown(item, idx)
        : navItem(item, idx);

    // nav list
    const navList = (items: any) => {
      if (items !== undefined) {
        console.log("items", items);
        var itemsArray = items;

        if (itemsArray) {
          return itemsArray.map((item: any, index: any) =>
            navType(item, index)
          );
        }
      }
    };

    const navChildList = (chilItem: any) => {
      if (chilItem !== undefined) {
        var itemsArray = chilItem;

        if (itemsArray) {
          return itemsArray.map((chilItem: any, index: any) =>
            navType(chilItem, index)
          );
        }
      }
    };

    const isExternal = (url: any) => {
      const link = url ? url.substring(0, 4) : "";
      return link === "http";
    };

    return (
      <div className={classes.wrapper}>
        <Sidebar
          routes={routes}
          logoText={"React"}
          logo={logo}
          image={this.state.image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color={this.state.color}
          {...rest}
        />
        <div className={classes.mainPanel} ref="mainPanel">
          <Navbar
            routes={routes}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          {this.getRoute() ? (
            <div className={classes.content}>
              {this.props.location.pathname == "/admin/user" ||
              this.props.location.pathname == "/admin/change-password" ? (
                <div className={classes.container}>{switchHeaderRoutes}</div>
              ) : (
                // <div
                //   className={
                //     this.state.isOpen == true
                //       ? "ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar"
                //       : "ms-body ms-primary-theme ms-has-quickbar"
                //   }
                // >
                //   <div
                //     className="ms-aside-overlay ms-overlay-left ms-toggler"
                //     data-target="#ms-side-nav"
                //     data-toggle="slideLeft"
                //   />
                //   <div
                //     className="ms-aside-overlay ms-overlay-right ms-toggler"
                //     data-target="#ms-recent-activity"
                //     data-toggle="slideRight"
                //   />
                //   <aside
                //     id="ms-side-nav"
                //     className="side-nav fixed ms-aside-scrollable ms-aside-left"
                //   >
                //     <div className="logo-sn ms-d-block-lg">
                //       <Link className="pl-0 ml-0 text-center" to="/dashboard">
                //         <img src="./assets/images/logo1.svg" alt="logo" />
                //       </Link>
                //     </div>

                //     <ul
                //       className="accordion ms-main-aside fs-14"
                //       id="side-nav-accordion"
                //     >
                //       <li className="menu-item">{navList(routes)}</li>
                //     </ul>
                //   </aside>
                // </div>

                <div className={classes.container}>{switchRoutes}</div>
              )}
            </div>
          ) : (
            ""
            // <div className={classes.map}>{switchRoutes}</div>
          )}
          {this.getRoute() ? <Footer /> : null}
          <FixedPlugin
            handleImageClick={this.handleImageClick}
            handleColorClick={this.handleColorClick}
            bgColor={this.state.color}
            bgImage={this.state.image}
            handleFixedClick={this.handleFixedClick}
            fixedClasses={this.state.fixedClasses}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(dashboardStyle)(Dashboard);
