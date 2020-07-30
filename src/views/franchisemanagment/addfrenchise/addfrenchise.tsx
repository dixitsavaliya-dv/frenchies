import React from "react";
import { Link } from "react-router-dom";
// import utils from '../../../utils';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Input,
  Form,
  CustomInput,
  Col,
  FormGroup,
  Label,
  Row,
} from "reactstrap";
// import './adduser.css';
// import NavBar from '../../navbar/navbar';
// import API from '../../../service/service';
import Switch from "react-switch";
import constant from "../../../constant/constant";
import Admin from "../../../layouts/Admin";
// import { categoryCreateRequest,categoryUpdateRequest } from '../../../modelController/categoryModel';

class AddFrenchise extends React.Component<{ history: any }> {
  state = {
    userselect: "",
    userselecterror: "",
    statusselect: "",
    statusselecterror: "",
    servicearea:"",
    serviceareaerror:"",
    address:"",
    addresserror:"",
    isVerified:false
  };

  constructor(props: any) {
    super(props);
    // this.Profile = this.Profile.bind(this);
    this.handleChangeEvent = this.handleChangeEvent.bind(this);
    this.onItemSelect = this.onItemSelect.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.addCategory = this.addCategory.bind(this);
  }

  handleChange(checked: boolean) {
    this.setState({ isVerified: this.state.isVerified = checked });
}

  async componentDidMount() {
    // document.title = constant.addCategoryTitle + utils.getAppName();
    // const getProfile = await API.getProfile();
    // console.log("getprofile",getProfile);
  }

  onItemSelect() {
    this.setState({});
  }

  validate() {
    let userselecterror = "";
    let statusselecterror = "";
    let serviceareaerror = "";
    let addresserror = ""

    if (!this.state.userselect) {
      userselecterror = "please select user";
    }

    if (!this.state.statusselect) {
      statusselecterror = "please select status";
    }

    if (!this.state.servicearea) {
        serviceareaerror = "please enter service area";
    }

    if (!this.state.address) {
        addresserror = "please enter address";
      }

    if (userselecterror || statusselecterror || serviceareaerror || addresserror) {
      this.setState({ userselecterror, statusselecterror, serviceareaerror, addresserror });
      return false;
    }
    return true;
  }

  handleChangeEvent(event: any) {
    event.preventDefault();
    const state: any = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  // async addCategory() {
  //     const isValid = this.validate();
  //     if (isValid) {
  //         this.setState({
  //             userselecterror: '',
  //             statusselecterror: ''
  //         })
  //         if (this.state.categoryname && this.state.selectedFile) {
  //             const obj : categoryCreateRequest = {
  //                 categoryname: this.state.categoryname,
  //                 selectedFile: this.state.selectedFile
  //             }

  //             const obj1 : categoryUpdateRequest = {
  //                 id:'',
  //                 categoryname: this.state.categoryname,
  //                 selectedFile: this.state.selectedFile
  //             }

  //             // const addCategory = await API.addCategory(obj);
  //             // console.log("addCategory",addCategory);

  //             // const editCategory = await API.editCategory(obj);
  //             // console.log("editCategory",editCategory);

  //             if (this.state.categoryname === obj.categoryname && this.state.selectedFile === obj.selectedFile) {
  //                 const msg = "Category Added Successfully";
  //                 utils.showSuccess(msg);
  //                 this.props.history.push('/category');
  //             } else {
  //                 const msg1 = "Error";
  //                 utils.showError(msg1);
  //             }
  //         }
  //     };
  // }

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
                        <h1 className="main_color">
                          Add Frenchise
                        </h1>
                      </Col>
                      <Col
                        xs="12"
                        sm="6"
                        md="3"
                        lg="3"
                        xl="3"
                        style={{ textAlign: "right" }}
                      >
                        <Link to="/frenchise">
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
                          <Label htmlFor="service_area">Service Area</Label>
                          <Input
                            type="text"
                            id="service_area"
                            name="servicearea"
                            className="form-control"
                            // value={this.state.firstname}
                            onChange={this.handleChangeEvent}
                            placeholder="Enter your service area"
                            required
                          />
                          <div className="mb-4 text-danger">
                            {this.state.serviceareaerror}
                          </div>
                        </FormGroup>
                      </Col>
                      <Col xs="12" sm="12" md="6" lg="6" xl="6">
                      <FormGroup>
                          <Label htmlFor="address">Address</Label>
                          <Input
                            type="text"
                            id="address"
                            name="address"
                            className="form-control"
                            // value={this.state.email}
                            onChange={this.handleChangeEvent}
                            placeholder="Enter your address"
                            required
                          />
                          <div className="mb-4 text-danger">
                            {this.state.addresserror}
                          </div>
                        </FormGroup>
                       </Col>
                    </Row>
                    <Row>
                      <Col xs="12" sm="12" md="6" lg="6" xl="6">
                        <Form>
                          <FormGroup>
                            <Label for="shop">Select User</Label>
                            <CustomInput
                              type="select"
                              id="shop"
                              name="userselect"
                              onChange={this.onItemSelect}
                            >
                              <option value="">Select User</option>
                              <option value="User-1">User-1</option>
                              <option value="User-2">User-2</option>
                              {/* {
                                                                        this.state.userrole.length > 0 ? this.state.userrole.map((data, index) =>
                                                                            <option key={data.id} value={data.id}>{data.name}</option>
                                                                        ) : ''
                                                                    } */}
                            </CustomInput>
                            <div className="mb-4 text-danger">
                              {this.state.userselecterror}
                            </div>
                          </FormGroup>
                        </Form>
                      </Col>
                      <Col xs="12" sm="12" md="6" lg="6" xl="6">
                        <Form>
                          <FormGroup>
                            <Label for="status">Select Status</Label>
                            <CustomInput
                              type="select"
                              id="status"
                              name="selectstatus"
                              onChange={this.onItemSelect}
                            >
                              <option value="">Select Status</option>
                              <option value="REQUEST_SENT">REQUEST_SENT</option>
                              <option value="REQUEST_ACCEPTED">REQUEST_ACCEPTED</option>
                              <option value="REQUEST_REJECTED">REQUEST_REJECTED</option>
                              <option value="PHYSICALLY_VERIFIED">PHYSICALLY_VERIFIED</option>
                              {/* {
                                                                        this.state.userrole.length > 0 ? this.state.userrole.map((data, index) =>
                                                                            <option key={data.id} value={data.id}>{data.name}</option>
                                                                        ) : ''
                                                                    } */}
                            </CustomInput>
                            <div className="mb-4 text-danger">
                              {this.state.statusselecterror}
                            </div>
                          </FormGroup>
                        </Form>
                      </Col>
                    </Row>
                    <Row>
                                            <Col xs="12" sm="12" md="4" lg="4" xl="4">
                                                <label>
                                                    <span>IsVerified</span>
                                                    <br />
                                                    <div style={{ marginTop: '10px' }}>
                                                        <Switch
                                                            onChange={this.handleChange}
                                                            checked={this.state.isVerified}
                                                        />
                                                    </div>
                                                </label>
                                            </Col>

                                        </Row>

                    <Button
                      type="button"
                      size="sm"
                      color="primary"
                      className="mb-2 mr-2 custom-button"
                      // onClick={this.addCategory}
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

export default AddFrenchise;
