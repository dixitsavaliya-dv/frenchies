import React from "react";
import { Link } from "react-router-dom";
// import utils from "../../../utils";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Col,
  FormGroup,
  Label,
  Row,
} from "reactstrap";
import "./adduser.css";

import constant from "../../../constant/constant";
// import {
//   userCreateRequest,
//   userUpdateRequest,
// } from "../../../modelController/userModel";
import { any } from "prop-types";
import Admin from "../../../layouts/Admin";

class AddUser extends React.Component<{ history: any }> {
  state = {
    selectedFile: new Array(),
    firstname: "",
    firstnameerror: "",
    lastname: "",
    lastnameerror: "",
    email: "",
    emailerror: "",
    mobilenumber: 0,
    mobilenumbererror: "",
    password: "",
    passworderror: "",
    checked: false,
    selectedFileerror: "",
    onItemSelect: "",
    onItemSelecterror: "",
    roleid:0,
    userrole:[],
    updateTrue:false,
    file:null
  };

  constructor(props: any) {
    super(props);
    // this.Profile = this.Profile.bind(this);
    this.handleChangeEvent = this.handleChangeEvent.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeIcon = this.removeIcon.bind(this);
    // this.addUser = this.addUser.bind(this);
    // this.editUser = this.editUser.bind(this);
    this.onItemSelect = this.onItemSelect.bind(this);
    // this.getUserRole = this.getUserRole.bind(this);
  }

  handleChange(checked: boolean) {
    this.setState({ checked });
  }

  async componentDidMount() {
    // document.title = constant.addUserTitle + utils.getAppName();
    // this.getUserRole();

    // const getProfile = await API.getProfile();
    // console.log("getprofile",getProfile);
  }

  onChangeHandler(event: any) {
    // let data = new FormData();
    // data.append('file_name', event.target.files[0]);
    // console.log("event",event.target.files[0].name);
    
    let fileArray = [];
    fileArray.push(event.target.files[0]);
    this.setState({
      selectedFile: this.state.selectedFile = fileArray,
    });
    if(this.state.selectedFile.length == 1) {
      this.setState({
        file: this.state.file = this.state.selectedFile[0].name,
      });
    }
  }

  // async getUserRole() {
  //     const getUserRole = await RoleAPI.getUserRole();

  //   if(getUserRole.resultObject != null) {
  //     this.setState({
  //       userrole : this.state.userrole = getUserRole.resultObject
  //     })

  //   } else {
  //     const msg1 = getUserRole.explanation;
  //     utils.showError(msg1);
  // }
  // }

  validate() {
    let firstnameerror = "";
    let lastnameerror = "";
    let emailerror = "";
    let mobilenumbererror = "";
    let passworderror = "";
    let selectedFileerror = "";
    let onItemSelecterror = "";

    if (!this.state.firstname) {
      firstnameerror = "please enter firstname";
    }

    if (!this.state.lastname) {
      lastnameerror = "please enter lastname";
    }

    const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!this.state.email) {
      emailerror = "please enter email";
    } else if (!reg.test(this.state.email)) {
      emailerror = "please enter valid email";
    }

    if (!this.state.mobilenumber) {
      mobilenumbererror = "please enter mobile number";
    }

    if (!this.state.password) {
      passworderror = "please enter password";
    }

    if (!this.state.selectedFile) {
      selectedFileerror = "please select file";
    }

    if (!this.state.onItemSelect) {
      onItemSelecterror = "please select role";
    }

    if (
      firstnameerror ||
      lastnameerror ||
      emailerror ||
      mobilenumbererror ||
      passworderror ||
      selectedFileerror ||
      onItemSelecterror
    ) {
      this.setState({
        firstnameerror,
        lastnameerror,
        emailerror,
        mobilenumbererror,
        passworderror,
        selectedFileerror,
        onItemSelecterror,
      });
      return false;
    }
    return true;
  }

  onItemSelect(event: any) {
    this.setState({
      roleid: this.state.roleid = event.target.options[event.target.selectedIndex].value,
      onItemSelect:this.state.onItemSelect = event.target.options[event.target.selectedIndex].innerHTML
    });
  }

  handleChangeEvent(event: any) {
    event.preventDefault();
    const state: any = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  // async addUser() {
  //   const isValid = this.validate();
  //   if (isValid) {
  //     this.setState({
  //       firstnameerror: "",
  //       lastnameerror: "",
  //       emailerror: "",
  //       mobilenumbererror: "",
  //       passworderror: "",
  //       onItemSelecterror: ""
  //     });
  //     if (
  //       this.state.firstname &&
  //       this.state.lastname &&
  //       this.state.email &&
  //       this.state.mobilenumber &&
  //       this.state.password &&
  //       this.state.selectedFile &&
  //       this.state.onItemSelect
  //     ) {

  //       let formData = new FormData();    

  //       formData.append('roleId', this.state.roleid.toString());   
  //       formData.append('firstName', this.state.firstname);
  //       formData.append('lastName', this.state.lastname);
  //       formData.append('email', this.state.email);
  //       formData.append('phone', this.state.mobilenumber.toString());
  //       formData.append('photo', '');
  //       formData.append('isActive','true');
  //       formData.append('files', new Blob(this.state.selectedFile));
  //       formData.append('userId', '0');

  //       const addUser:any = await API.addUser(formData);
  //       console.log("addUser",addUser);

  //       if(addUser.resultObject !== null) {
  //         const msg = "User Added Successfully";
  //         utils.showSuccess(msg);
  //         this.props.history.push("/users");
  //       } else {
  //         const msg1 = "Error";
  //           utils.showError(msg1);
  //       }
  //     }
  //   }
  // }

  // async editUser() {
  //   const isValid = this.validate();
  //   if (isValid) {
  //     this.setState({
  //       firstnameerror: "",
  //       lastnameerror: "",
  //       emailerror: "",
  //       mobilenumbererror: "",
  //       passworderror: "",
  //       onItemSelecterror: ""
  //     });
  //     if (
  //       this.state.firstname &&
  //       this.state.lastname &&
  //       this.state.email &&
  //       this.state.mobilenumber &&
  //       this.state.password &&
  //       this.state.selectedFile &&
  //       this.state.onItemSelect
  //     ) {

  //       let formData = new FormData();    

  //       formData.append('iD', this.state.roleid.toString());
  //       formData.append('roleId', this.state.roleid.toString());   
  //       formData.append('firstName', this.state.firstname);
  //       formData.append('lastName', this.state.lastname);
  //       formData.append('email', this.state.email);
  //       formData.append('phone', this.state.mobilenumber.toString());
  //       formData.append('photo', '');
  //       formData.append('isActive','true');
  //       formData.append('files', new Blob(this.state.selectedFile));
  //       formData.append('userId', '0');

  //       const addUser:any = await API.addUser(formData);
  //       console.log("addUser",addUser);

  //       if(addUser.resultObject !== null) {
  //         const msg = "User Added Successfully";
  //         utils.showSuccess(msg);
  //         this.props.history.push("/users");
  //       } else {
  //         const msg1 = "Error";
  //           utils.showError(msg1);
  //       }
  //     }
  //   }
  // }

  removeIcon() {
    // const obj = {
    //     id: this.props.auth.auth_data.id,
    //     image_path: data
    // }
    this.setState({
      selectedFile: this.state.file = null,
    });
  }

  render() {
    return (
      <>
        <Admin>
          <div className="ms-content-wrapper">
            <div className="row">
              <Col xs="12" sm="12" md="12" lg="12" xl="12">
                <Card>
                  <CardHeader>
                    <Row>
                      <Col xs="12" sm="6" md="9" lg="9" xl="9">
                        <h1 className="main_color">Add User</h1>
                      </Col>
                      <Col
                        xs="12"
                        sm="6"
                        md="3"
                        lg="3"
                        xl="3"
                        style={{ textAlign: "right" }}
                      >
                        <Link to="/users">
                          <Button
                            type="button"
                            size="sm"
                            color="primary"
                            className="mb-2 mr-2 custom-button"
                          >
                            Back
                          </Button>
                        </Link>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col xs="12" sm="12" md="6" lg="6" xl="6">
                        <FormGroup>
                          <Label htmlFor="first_name">First Name</Label>
                          <Input
                            type="text"
                            id="first_name"
                            name="firstname"
                            className="form-control"
                            // value={this.state.firstname}
                            onChange={this.handleChangeEvent}
                            placeholder="Enter your first name"
                            required
                          />
                          <div className="mb-4 text-danger">
                            {this.state.firstnameerror}
                          </div>
                        </FormGroup>
                      </Col>
                      <Col xs="12" sm="12" md="6" lg="6" xl="6">
                        <FormGroup>
                          <Label htmlFor="last_name">Last Name</Label>
                          <Input
                            type="text"
                            id="last_name"
                            name="lastname"
                            className="form-control"
                            // value={this.state.lastname}
                            onChange={this.handleChangeEvent}
                            placeholder="Enter your last name"
                            required
                          />
                          <div className="mb-4 text-danger">
                            {this.state.lastnameerror}
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12" sm="12" md="6" lg="6" xl="6">
                        <FormGroup>
                          <Label htmlFor="email">E-Mail</Label>
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            // value={this.state.email}
                            onChange={this.handleChangeEvent}
                            placeholder="Enter your email"
                            required
                          />
                          <div className="mb-4 text-danger">
                            {this.state.emailerror}
                          </div>
                        </FormGroup>
                      </Col>
                      <Col xs="12" sm="12" md="6" lg="6" xl="6">
                        <FormGroup>
                          <Label htmlFor="mobile_no">Mobile Number</Label>
                          <Input
                            type="text"
                            id="mobile_no"
                            name="mobilenumber"
                            className="form-control"
                            // value={this.state.mobilenumber}
                            onChange={this.handleChangeEvent}
                            placeholder="Enter your mobile number"
                          />
                          <div className="mb-4 text-danger">
                            {this.state.mobilenumbererror}
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12" sm="12" md="6" lg="6" xl="6">
                        <Label htmlFor="password">Password</Label>
                        <Input
                          type="password"
                          id="password"
                          name="password"
                          className="form-control"
                          // value={this.state.password}
                          onChange={this.handleChangeEvent}
                          placeholder="Enter your password"
                        />
                        <div className="mb-4 text-danger">
                          {this.state.passworderror}
                        </div>
                      </Col>
                      <Col xs="12" sm="12" md="6" lg="6" xl="6">
                        <FormGroup>
                          <Label for="exampleCustomSelect">
                            Select Role:
                          </Label>
                          <Input
                            type="select"
                            name="onItemSelect"
                            onChange={this.onItemSelect}
                          >
                            {/* <option value="">Select UserRole:</option>
                            <option id="1" value="User">User</option>
                            <option id="2" value="Customer">Customer</option> */}
                            <option value="">Select UserRole:</option>
                            {
                              this.state.userrole.length > 0 ? this.state.userrole.map((data:any, index:any) =>
                                  <option key={data.roleId} value={data.roleId}>{data.role}</option>
                              ) : ''
                          }
                          </Input>
                          <div className="mb-4 text-danger">
                          {this.state.onItemSelecterror}
                        </div>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12" sm="12" md="6" lg="6" xl="6">
                        <FormGroup className="img-upload">
                          {this.state.file != null ? (
                            <div className="img-size">
                              {this.state.file != null ? (
                                <div>
                                  <img
                                    className="picture"
                                    // src={constant.filepath + this.state.file}
                                  />
                                  <i
                                    className="fa fa-times cursor"
                                    onClick={() => this.removeIcon()}
                                  ></i>
                                </div>
                              ) : null}
                            </div>
                          ) : (
                            <div className="">
                              <p style={{ fontSize: "16px" }}>User Image</p>
                              <Label className="imag" for="file-input">
                                <i
                                  className="fa fa-upload fa-lg"
                                  style={{ color: "#20a8d8" }}
                                ></i>
                              </Label>
                              <Input
                                id="file-input"
                                type="file"
                                className="form-control"
                                name="file"
                                onChange={this.onChangeHandler.bind(this)}
                              />
                            </div>
                          )}
                          <div className="text-danger">
                            {this.state.selectedFileerror}
                          </div>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button
                      type="button"
                      size="sm"
                      color="primary"
                      className="mb-2 mr-2 custom-button"
                      // onClick={this.addUser}
                    >
                      Save
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </div>
          </div>
        </Admin>
      </>
    );
  }
}

export default AddUser;
