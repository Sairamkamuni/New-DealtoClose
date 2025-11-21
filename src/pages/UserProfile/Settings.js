import React, { useState, useEffect } from "react";
import MetaTags from "react-meta-tags";
import { Container, Row, Col, Card, CardBody, InputGroup, Input, InputGroupText } from "reactstrap";
import AllButton from "pages/utils/allButton";
import { SettingBillingInfo, SettinginitialFormData } from "AllDummyData/UserProfileDummyData";

const Settings = () => {
    const [showPassword, setShowPassword] = useState({ current: false, new: false, confirm: false })
    const [formData, setFormData] = useState(SettinginitialFormData);

    const togglePassword = (field) => {
        setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }))
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        console.log('Submitting formData:', formData);
        // const url = editMode ? ${BANK_URL}/${editingId} : BANK_URL; 
        // // const method = editMode ? put : post; // 
        // const { success, body } = await method(url, formData);
        console.log("API method call:", "PUT");
        const success = true; if (success) {
            showSuccessAlert('Account Setting updated successfully!');
            setFormData(SettinginitialFormData);
        }
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Setting | {process.env.REACT_APP_TITLE}</title>
                </MetaTags>
                <Container fluid>
                    <Row>
                        <Col className="text-center">
                            <h3 className="fw-bolder">Account Settings</h3>
                        </Col>
                    </Row>

                    <Card className="mt-4" style={{ border: "1px solid #dad1e0", borderRadius: "12px" }}>
                        <CardBody>
                            <Row>
                                <Col>
                                    <div className="d-flex mb-0 gap-2">
                                        <i className="bx bx-lock-alt mt-1" style={{ fontSize: "2rem", color: "#243d78" }} />
                                        <div>
                                            <h3 className="mb-0 fw-bold">Reset Password</h3>
                                            <p className="mt-1 mb-0"> Update your account password. </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="mt-4 mb-4">
                                <Col>
                                    <label>Current Password</label>
                                    <InputGroup>
                                        <Input type={showPassword.current ? "text" : "password"} name="current_password" className="form-control"
                                            value={formData.current_password} onChange={handleChange} />
                                        <InputGroupText onClick={() => togglePassword("current")} style={{ cursor: "pointer" }}>
                                            <i className={`mdi ${showPassword.current ? "mdi-eye-off" : "mdi-eye"}`} />
                                        </InputGroupText>
                                    </InputGroup>
                                </Col>
                                <Col>
                                    <label>New Password</label>
                                    <InputGroup>
                                        <Input type={showPassword.new ? "text" : "password"} name="new_password" className="form-control"
                                            value={formData.new_password} onChange={handleChange} />
                                        <InputGroupText onClick={() => togglePassword("new")} style={{ cursor: "pointer" }}>
                                            <i className={`mdi ${showPassword.new ? "mdi-eye-off" : "mdi-eye"}`} />
                                        </InputGroupText>
                                    </InputGroup>
                                </Col>
                                <Col>
                                    <label>Confirm New Password</label>
                                    <InputGroup>
                                        <Input type={showPassword.confirm ? "text" : "password"} name="confirm_new_password" className="form-control"
                                            value={formData.confirm_new_password} onChange={handleChange} />
                                        <InputGroupText onClick={() => togglePassword("confirm")} style={{ cursor: "pointer" }}>
                                            <i className={`mdi ${showPassword.confirm ? "mdi-eye-off" : "mdi-eye"}`} />
                                        </InputGroupText>
                                    </InputGroup>
                                </Col>
                            </Row>

                            <hr />
                            <Row className="d-flex justify-content-end">
                                <Col xs="auto">
                                    <AllButton label="Update Password" width="140px" outline={false} onClick={() => console.log("Button Clicked")} />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>

                    <Card className="mt-4" style={{ border: "1px solid #dad1e0", borderRadius: "12px" }}>
                        <CardBody>
                            <Row>
                                <Col>
                                    <div className="d-flex mb-0 gap-2">
                                        <i className="bx bx-credit-card mt-1" style={{ fontSize: "2rem", color: "#243d78" }} />
                                        <div>
                                            <h3 className="mb-0 fw-bold">Billing Information</h3>
                                            <p className="mt-1 mb-0"> Manage your subscription and payment details. </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="align-items-start mt-4" >
                                <Col>
                                    {SettingBillingInfo.map((item, index) => (
                                        <Row key={index} className="align-items-center mb-2">
                                            <Col xs="auto">
                                                <p className="fw-bold mb-0">{item.label}:</p>
                                            </Col>
                                            <Col className="ps-0 text-muted">{item.value}</Col>
                                        </Row>
                                    ))}
                                </Col>
                            </Row>

                            <p className="mt-3">To update your billing details or change your plan, please visit our secure billing portal.</p>

                            <hr />
                            <Row className="d-flex justify-content-end">
                                <Col xs="auto">
                                    <AllButton label="Manage Subscription" width="165px" outline={false} onClick={() => console.log("Button Clicked")} />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>

                </Container>
            </div>
        </React.Fragment>

    )
};

export default Settings;