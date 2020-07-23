import React, { Component } from 'react';
import Swal from 'sweetalert2';
import {
    Row,
    Col,
    Button,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Card,
    CardHeader,
    CardFooter,
    CardBody,
    Form,
    FormGroup,
    FormText,
    Label,
    Input,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';
import utils from '../../helper/utils/utils';
import constant from '../../constant/constant';

class ChangePassword extends Component {

    state = {
        oldpassword: '',
        oldpassworderror:'',
        newpassword: '',
        newpassworderror:''
    }

    constructor(props:any) {
        super(props);
        this.ChangePassword = this.ChangePassword.bind(this);
    }

    async componentDidMount() {
        document.title = constant.changePassword + utils.getAppName();
      }
    

    validate() {
        let oldpassworderror = "";
        let newpassworderror = "";

        if(!this.state.oldpassword) {
            oldpassworderror = "please enter old password"
        }

        if(!this.state.newpassword) {
            newpassworderror = "please enter new password"
        }

        if (newpassworderror || oldpassworderror) {
            this.setState({ newpassworderror, oldpassworderror});
            return false;
        }
        return true;

    }

   async ChangePassword() {
        const isValid = this.validate();
        if (isValid) {
            this.setState({
                newpassworderror:'',
                oldpassworderror:''
            })
            if (this.state.oldpassword && this.state.newpassword) {
                const obj  = {
                    oldpassword: this.state.oldpassword,
                    newpassword: this.state.newpassword
                }

                // const updatePassword = await API.updatePassword(obj);
                // console.log("updatePassword",updatePassword);

                if (this.state.oldpassword === obj.oldpassword && this.state.newpassword === obj.newpassword) {
                    const msg = "Password Changed Successfully";
                    utils.showSuccess(msg);
                } else {
                    const msg1 = "Error";
                    utils.showError(msg1);
                }
            }
        };
    }


    render() {

        return (
            <div>
                <Row>
                    <Col xs="12" sm="12" md="12" lg="12" xl="12">
                        <Card>
                            <CardHeader>
                                <strong className="header">Change Password</strong>
                             
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                        <FormGroup>
                                            <Label htmlFor="oldpassword">OldPassword</Label>
                                            <Input
                                                type="password"
                                                id="oldpassword"
                                                name="oldpassword"
                                                className="form-control"
                                                onChange={(e) =>
                                                    this.state.oldpassword = e.target.value
                                                }
                                                placeholder="Enter your Old Password"
                                                required
                                            />
                                                 <div className="text-danger">
                                                        {this.state.oldpassworderror}
                                                    </div>

                                        </FormGroup>
                                    </Col>
                                    <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                        <FormGroup>
                                            <Label htmlFor="newpassword">NewPassword</Label>
                                            <Input
                                                type="password"
                                                id="newpassword"
                                                name="newpassword"
                                                className="form-control"
                                                onChange={(e) =>
                                                    this.state.newpassword = e.target.value
                                                }
                                                placeholder="Enter your New Password"
                                                required
                                            />
                                                 <div className="text-danger">
                                                        {this.state.newpassworderror}
                                                    </div>
                                        </FormGroup>
                                    </Col>
                                </Row>
                             
                                <Button type="button" size="sm" color="primary" onClick={this.ChangePassword}>Update</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ChangePassword;