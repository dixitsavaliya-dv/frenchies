import React from 'react';
import './login.css';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn
} from "mdbreact";
import { Link } from 'react-router-dom';
import Constant from '../../constant/constant';

class Login extends React.Component {

    constructor(props:any) {
        super(props);

    }
    
    render() {
        return (
            <MDBContainer className="login">
                <MDBRow>
                    <MDBCol md="6" className="color">
                        {/* <form>
                            <p className="h4 text-center mb-4"><b>{Constant.signin}</b></p>
                            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                <b>{Constant.email}</b>
                            </label>
                            <input
                                type="email"
                                id="defaultFormLoginEmailEx"
                                className="form-control"
                            />
                            <br />
                            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                <b>{Constant.password}</b>
                            </label>
                            <input
                                type="password"
                                id="defaultFormLoginPasswordEx"
                                className="form-control"
                            />
                            <div className="text-center mt-4">
                                <MDBBtn color="indigo" type="button"><b>{Constant.login}</b></MDBBtn>
                            </div>
                        </form>
                        <div className="font-weight-light" style={{ marginTop: '8px' }}>
                            <p><b>{Constant.notmember}</b> <Link to="/signup"><span style={{ color: '#4d5ec1' }}><b>{Constant.signup}</b></span></Link></p>
                            <p style={{ color: '#4d5ec1' }}><Link to="/forgotpassword"><b>{Constant.forgotpassword}</b></Link></p>
                            <p style={{ color: '#4d5ec1' }}><Link to="/dashboard"><b>{Constant.dashboard}</b></Link></p>
                        </div> */}
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default Login;
