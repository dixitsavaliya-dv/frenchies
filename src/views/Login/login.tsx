import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
// import API from '../../service/service';
import utils from "../../helper/utils/utils";
import Constant from "../../constant/constant";
// import $ from "jquery";
import constant from "../../constant/constant";
// import { loginCreateRequest } from '../../modelController/loginModel';

class Login extends React.Component<{ history: any }> {
  state = {
    email: "",
    emailerror: "",
    password: "",
    passworderror: "",
    mobilenumber:"",
    mobilenumbererror:""
  };

  constructor(props: any) {
    super(props);
    this.handleChangeEvent = this.handleChangeEvent.bind(this);
    this.handleChangeEventPassword = this.handleChangeEventPassword.bind(this);
    this.login = this.login.bind(this);
    this.forgotpassword = this.forgotpassword.bind(this);
  }

  async componentDidMount() {
    document.title = constant.login + utils.getAppName();
  }

  handleChangeEvent(event: any) {
    event.preventDefault();
    const state: any = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleChangeEventPassword(event: any) {
    event.preventDefault();
    const state: any = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  validate() {
    let emailerror = "";
    let passworderror = "";

    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!this.state.email) {
      emailerror = "please enter email";
    } else if (!reg.test(this.state.email)) {
      emailerror = "please enter valid email";
    }

    if (!this.state.password) {
      passworderror = "please enter password";
    }

    if (emailerror || passworderror) {
      this.setState({ emailerror, passworderror });
      return false;
    }
    return true;
  }

  validatePassword() {
    let mobilenumbererror = "";

    const number = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!this.state.mobilenumber) {
        mobilenumbererror = "please enter mobile number";
    } else if (!number.test(this.state.mobilenumber)) {
        mobilenumbererror = "please enter valid  mobile number";
    }

    if (mobilenumbererror) {
      this.setState({ mobilenumbererror });
      return false;
    }
    return true;
  }

  forgotpassword() {
    const isValid = this.validatePassword();
    if (isValid) {
      this.setState({
        mobilenumbererror: this.state.mobilenumbererror = "",
      });
      if (this.state.mobilenumber) {
        const obj = {
            mobilenumber: this.state.mobilenumber,
        };

        // var forgotPassword = await API.forgotPassword(obj);
        // console.log("forgotPassword",forgotPassword);

        if (this.state.mobilenumber === obj.mobilenumber) {
          const msg = "Password Reset Successfully";
          utils.showSuccess(msg);
          // $('#modal-12').modal('hide');
          // this.props.history.push('/');
        } else {
          const msg1 = "Error";
          utils.showError(msg1);
        }
      }
    }
  }

  login() {
    // this.props.history.push('/dashboard');
    const isValid = this.validate();
    if (isValid) {
      this.setState({
        emailerror: this.state.emailerror = "",
        passworderror: this.state.passworderror = "",
      });
      if (this.state.email && this.state.password) {
        const obj = {
          email: this.state.email,
          password: this.state.password,
        };

        let token = "123456";
        localStorage.setItem("token", token);

        // var loginUser = await API.loginUser(obj);
        // console.log("loginuser",loginUser);

        if (
          this.state.email === obj.email &&
          this.state.password === obj.password
        ) {
          const msg = "Login Successfully";
          utils.showSuccess(msg);
          this.props.history.push("/admin/dashboard");
        } else {
          const msg1 = "Error";
          utils.showError(msg1);
        }
      }
    }
  }

  render() {
    return (
      <div>
        <div className="main-div">
          <div className="login-form">
            <div className="left-box">
              <img src="../../assets/img/login-img.jpg" alt="" />
            </div>
            <div className="right-box">
              <h1>Login to Account</h1>
              <form>
                <div className="form-group">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="input-box form-control"
                    placeholder="Enter Email"
                    onChange={this.handleChangeEvent}
                  />
                  <div className="mb-4 text-danger">
                    {this.state.emailerror}
                  </div>
                </div>
                <div className="form-group">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="input-box form-control"
                    placeholder="Enter Password"
                    onChange={this.handleChangeEvent}
                  />
                  <div className="mb-4 text-danger">
                    {this.state.passworderror}
                  </div>
                </div>
                <a
                  href="#"
                  className="for-pass"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  Forgot password?
                </a>
                <button type="button" onClick={this.login}>
                  Sign in
                </button>
              </form>
            </div>
          </div>
          <div className="modal p-box" id="myModal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" style={{width:'auto'}}>
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <h3>Forgot Password? </h3>
                  <p>Enter your mobile number to recover your password</p>
                  <div className="form-group">
                    <input
                      id="mobile"
                      type="number"
                      name="mobilenumber"
                      className="input-box"
                      placeholder="Enter your mobile number"
                      onChange={this.handleChangeEventPassword}
                    />
                    <div className="mb-4 text-danger">
                      {this.state.mobilenumbererror}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn-re-pass"
                    style={{ width: "fit-content" }}
                    onClick={this.forgotpassword}
                  >
                    Forgot Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
