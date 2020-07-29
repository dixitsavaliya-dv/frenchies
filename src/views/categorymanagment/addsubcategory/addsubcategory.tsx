import React from 'react';
import { Link } from 'react-router-dom';
// import utils from '../../../utils';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Form,
    CustomInput,
    Table,
    Input,
    Col,
    FormGroup,
    Label,
    Row,
} from 'reactstrap';
// import './adduser.css';
// import NavBar from '../../navbar/navbar';
// import API from '../../../service/service';
// import Switch from "react-switch";
import constant from '../../../constant/constant';
import Admin from '../../../layouts/Admin';
// import { subCategoryCreateRequest, subCategoryUpdateRequest } from '../../../modelController/subCategoryModel';

class AddSubCategory extends React.Component<{ history: any }> {

    state = {
        selectedFile: undefined,
        categoryname: '',
        categorynameerror: '',
        selectedFileerror: '',
        selectcategory:'',
        selectcategoryerror:''
    }

    constructor(props: any) {
        super(props);
        // this.Profile = this.Profile.bind(this);
        this.handleChangeEvent = this.handleChangeEvent.bind(this);
        this.removeIcon = this.removeIcon.bind(this);
        // this.addSubCategory = this.addSubCategory.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onItemSelect = this.onItemSelect.bind(this);
    }

    async componentDidMount() {
        // document.title = constant.addSubCategoryTitle + utils.getAppName();

        // const getAllCategory = await API.getAllCategory();
        // console.log("getAllCategory",getAllCategory);
    }

    onChangeHandler(event: any) {
        // let data = new FormData();
        // data.append('file_name', event.target.files[0]);
        // console.log("event",event.target.files[0].name);
        this.setState({
            selectedFile: this.state.selectedFile = event.target.files[0].name
        })
    }

    onItemSelect(){
        this.setState({

        })
    }

    validate() {
        let categorynameerror = "";
        let selectedFileerror = "";
        let selectcategoryerror = "";

        if (!this.state.categoryname) {
            categorynameerror = "please enter category name";
        }

        if (!this.state.selectedFile) {
            selectedFileerror = "please select file";
        }

        if (!this.state.selectcategory) {
            selectcategoryerror = "please select category";
        }

        if (categorynameerror || selectedFileerror || selectcategoryerror) {
            this.setState({ categorynameerror, selectedFileerror, selectcategoryerror });
            return false;
        }
        return true;
    };

    handleChangeEvent(event: any) {
        event.preventDefault();
        const state: any = this.state;
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    // async addSubCategory() {
    //     const isValid = this.validate();
    //     if (isValid) {
    //         this.setState({
    //             categorynameerror: '',
    //             selectedFileerror: '',
    //             selectcategoryerror: ''
    //         })
    //         if (this.state.categoryname && this.state.selectedFile && this.state.selectcategory) {
    //             const obj : subCategoryCreateRequest = {
    //                 categoryname: this.state.categoryname,
    //                 selectedFile: this.state.selectedFile,
    //                 selectcategory: this.state.selectcategory
    //             }

    //             const obj1 : subCategoryUpdateRequest = {
    //                 id:'',
    //                 categoryname: this.state.categoryname,
    //                 selectedFile: this.state.selectedFile,
    //                 selectcategory: this.state.selectcategory
    //             }

    //             // const addSubCategory = await API.addSubCategory(obj);
    //             // console.log("addSubCategory",addSubCategory);

    //             // const editCategory = await API.editCategory(obj);
    //             // console.log("editCategory",editCategory);

    //             if (this.state.categoryname === obj.categoryname && this.state.selectedFile === obj.selectedFile) {
    //                 const msg = "SubCategory Added Successfully";
    //                 utils.showSuccess(msg);
    //                 this.props.history.push('/subcategory');
    //             } else {
    //                 const msg1 = "Error";
    //                 utils.showError(msg1);
    //             }
    //         }
    //     };
    // }

    removeIcon() {
        this.setState({
            selectedFile: this.state.selectedFile = undefined
        })
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
                                                <h1 className="main_color">Add Sub Category</h1>
                                            </Col>
                                            <Col xs="12" sm="6" md="3" lg="3" xl="3" style={{ textAlign: "right" }}>
                                                <Link to="/subcategory">
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
                                                    <Label htmlFor="category_name">Sub Category Name</Label>
                                                    <Input
                                                        type="text"
                                                        id="category_name"
                                                        name="categoryname"
                                                        className="form-control"
                                                        // value={this.state.categoryname}
                                                        onChange={this.handleChangeEvent}

                                                        placeholder="Enter your category name"
                                                        required
                                                    />
                                                    <div className="mb-4 text-danger">
                                                        {this.state.categorynameerror}
                                                    </div>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                                <Form>
                                                    <FormGroup>
                                                        <Label for="exampleCustomSelect">Select Category</Label>
                                                        <CustomInput
                                                            type="select"
                                                            id="exampleCustomSelect"
                                                            name="customSelect"
                                                        onChange={this.onItemSelect}
                                                        >
                                                            <option value="">Select Category</option>
                                                            <option value="Food">Food</option>
                                                            <option value="Sweet">Sweet</option>
                                                            {/* {
                                                                        this.state.userrole.length > 0 ? this.state.userrole.map((data, index) =>
                                                                            <option key={data.id} value={data.id}>{data.name}</option>
                                                                        ) : ''
                                                                    } */}
                                                        </CustomInput>
                                                        <div className="mb-4 text-danger">
                                                        {this.state.selectcategoryerror}
                                                    </div>
                                                    </FormGroup>
                                                </Form>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                                <FormGroup className="img-upload">
                                                    {
                                                        this.state.selectedFile != null ? (
                                                            <div className="img-size">
                                                                {
                                                                    this.state.selectedFile ? (
                                                                        <div>
                                                                             <img className="picture" src={require('../../../assets/img/apple-icon.png')} />
                                                                            <i className="fa fa-times cursor" onClick={() => this.removeIcon()}></i>
                                                                        </div>
                                                                    ) : (null)
                                                                }
                                                            </div>
                                                        ) : (
                                                                <div className="">
                                                                    <p style={{fontSize:'16px'}}>Category Image</p>
                                                                    <Label className="imag" for="file-input"><i className="fa fa-upload fa-lg" style={{ color: '#20a8d8' }}></i></Label>
                                                                    <Input
                                                                        id="file-input"
                                                                        type="file"
                                                                        className="form-control"
                                                                        name="file"
                                                                        onChange={this.onChangeHandler.bind(this)}
                                                                    />

                                                                </div>
                                                            )
                                                    }
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
                                            // onClick={this.addSubCategory}
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

export default AddSubCategory;
