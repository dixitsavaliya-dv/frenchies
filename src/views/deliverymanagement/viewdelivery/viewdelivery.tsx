import React from "react";
import { Link } from "react-router-dom";
// import utils from '../../../utils';
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
// import './adduser.css';
// import NavBar from '../../navbar/navbar';
// import API from '../../../service/service';
// import Switch from "react-switch";
import constant from "../../../constant/constant";
import Admin from "../../../layouts/Admin";

class ViewDelivery extends React.Component<{ history: any }> {
  constructor(props: any) {
    super(props);
  }

  async componentDidMount() {
    // document.title = constant.viewUserTitle + utils.getAppName();
    // const getProfile = await API.getProfile();
    // console.log("getprofile",getProfile);
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
                        <h1 className="main_color">View Delivery Details</h1>
                      </Col>
                      <Col
                        xs="12"
                        sm="6"
                        md="3"
                        lg="3"
                        xl="3"
                        style={{ textAlign: "right" }}
                      >
                        <Link to="/delivery">
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
                      <Col xs="12" sm="12" md="4" lg="4" xl="4">
                        <FormGroup>
                          <Label htmlFor="first_name">
                            <b>User Name</b>
                          </Label>
                          <p>User-1</p>
                        </FormGroup>
                      </Col>
                      <Col xs="12" sm="12" md="4" lg="4" xl="4">
                        <FormGroup>
                          <Label htmlFor="email">
                            <b>Area</b>
                          </Label>
                          <p>Rajkot</p>
                        </FormGroup>
                      </Col>
                      <Col xs="12" sm="12" md="4" lg="4" xl="4">
                        <FormGroup>
                          <Label htmlFor="mobile_no">
                            <b>Shop</b>
                          </Label>
                          <p>Shop-1</p>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12" sm="12" md="4" lg="4" xl="4">
                        <FormGroup>
                          <Label htmlFor="first_name">
                            <b>DL</b>
                          </Label>
                          <p>DL</p>
                        </FormGroup>
                      </Col>
                      <Col xs="12" sm="12" md="4" lg="4" xl="4">
                        <FormGroup>
                          <Label htmlFor="email">
                            <b>Id Proof</b>
                          </Label>
                          <p>Id Proof</p>
                        </FormGroup>
                      </Col>
                      <Col xs="12" sm="12" md="4" lg="4" xl="4">
                        <FormGroup>
                          <Label htmlFor="mobile_no">
                            <b>RC</b>
                          </Label>
                          <p>RC</p>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12" sm="12" md="4" lg="4" xl="4">
                        <FormGroup>
                          <Label htmlFor="first_name">
                            <b>Registration Number</b>
                          </Label>
                          <p>7878787878</p>
                        </FormGroup>
                      </Col>
                      <Col xs="12" sm="12" md="4" lg="4" xl="4">
                        <FormGroup>
                          <Label htmlFor="email">
                            <b>Vehicle Front Photo</b>
                          </Label>
                          <p>Vehicle Front Photo</p>
                        </FormGroup>
                      </Col>
                      <Col xs="12" sm="12" md="4" lg="4" xl="4">
                        <FormGroup>
                          <Label htmlFor="mobile_no">
                            <b>Vehicle Back Photo</b>
                          </Label>
                          <p>Vehicle Back Photo</p>
                        </FormGroup>
                      </Col>
                    </Row>
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

export default ViewDelivery;
