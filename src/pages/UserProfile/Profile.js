import MetaTags from "react-meta-tags";
import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Dropzone } from "helpers/Dropzone";
import AllButton from "pages/utils/allButton";
import { PreferencesDateFormat, PreferencesCurrencyFormat, ProfileinitialFormData } from "AllDummyData/UserProfileDummyData";
import Select from "react-select";
import { showSuccessAlert } from "pages/utils/Alerts/alertMessages";

// Import Breadcrumb 
import avatar4 from "../../assets/images/users/avatar-4.jpg";

const UserProfile = () => {
    const [formData, setFormData] = useState(ProfileinitialFormData);

    const handleSelectChange = (value, name) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

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
            showSuccessAlert('Profile updated successfully!');
            setFormData(initialFormData);
        }
    };

    const handleFilesData = (files) => {
        setFormData((prev) => ({ ...prev, files }));
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Profile | {process.env.REACT_APP_TITLE}</title>
                </MetaTags>
                <Container fluid>

                    {/* Title */}
                    <Row>
                        <Col className="text-center mb-3">
                            <h3 className="fw-bolder">Personal & Company Settings</h3>
                        </Col>
                    </Row>

                    {/* -------------------- YOUR PROFILE -------------------- */}
                    <Card style={{ border: "1px solid #dad1e0", borderRadius: "12px" }}>
                        <CardBody>

                            {/* Section Header */}
                            <Row>
                                <Col>
                                    <div className="d-flex mb-0 gap-2">
                                        <i className="bx bx-user mt-2" style={{ fontSize: "2rem", color: "#243d78" }} />
                                        <div>
                                            <h3 className="mb-0 fw-bold">Your Profile</h3>
                                            <p className="mt-1 mb-0">
                                                Update your personal information, profile picture, and bio.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            {/* Image + Upload */}
                            <Row className="align-items-center mt-4">
                                <Col xs="auto">
                                    <img className="img-thumbnail rounded-circle avatar-xl" alt="Profile" src={avatar4} />
                                </Col>
                                <Col>
                                    <Dropzone callback={handleFilesData} />
                                </Col>
                            </Row>

                            <hr />

                            {/* Form Fields */}
                            <Row className="mb-2">
                                <Col>
                                    <label>Full Name</label>
                                    <input type="text" name="full_name" className="form-control" value={formData.full_name} onChange={handleChange} />
                                </Col>
                                <Col>
                                    <label>Job Title</label>
                                    <input type="text" name="job_title" className="form-control" value={formData.job_title} onChange={handleChange} />
                                </Col>
                            </Row>

                            <Row className="mb-2">
                                <Col>
                                    <label>Email Address</label>
                                    <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
                                </Col>
                                <Col>
                                    <label>Phone Number</label>
                                    <input type="text" name="phone" className="form-control" value={formData.phone} onChange={handleChange} />
                                </Col>
                            </Row>

                            <Row className="mb-4 mt-2">
                                <Col>
                                    <label>Bio / About Me</label>
                                    <textarea name="about_me" className="form-control" rows={4} value={formData.about_me} onChange={handleChange} />
                                </Col>
                            </Row>

                            <hr />

                            {/* Save Button */}
                            <Row className="d-flex justify-content-end">
                                <Col xs="auto">
                                    <AllButton label="Save Profile" outline={false} onClick={handleSubmit} />
                                </Col>
                            </Row>

                        </CardBody>
                    </Card>

                    {/* -------------------- COMPANY INFO -------------------- */}
                    <Card style={{ border: "1px solid #dad1e0", borderRadius: "12px" }}>
                        <CardBody>

                            {/* Header */}
                            <Row>
                                <Col>
                                    <div className="d-flex mb-0 gap-2">
                                        <i className="mdi mdi-file-tree-outline " style={{ fontSize: "2rem", color: "#243d78" }} />
                                        <div>
                                            <h3 className="mb-0 fw-bold">Company & Team Information</h3>
                                            <p className="mt-1 mb-0">Manage your company, team details, and logos.</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            {/* Company Form */}
                            <Row className="mt-4 mb-2">
                                <Col>
                                    <label>Company Name</label>
                                    <input type="text" name="company_name" className="form-control" value={formData.company_name} onChange={handleChange} />
                                </Col>
                                <Col>
                                    <label>Team Name (Optional)</label>
                                    <input type="text" name="team_name" className="form-control" value={formData.team_name} onChange={handleChange} />
                                </Col>
                            </Row>

                            <Row className="mb-2 mt-2">
                                <Col>
                                    <label>Street Address</label>
                                    <input type="text" name="street_address" className="form-control" value={formData.street_address} onChange={handleChange} />
                                </Col>
                            </Row>

                            <Row className="mb-2 mt-2">
                                <Col>
                                    <label>City</label>
                                    <input type="text" name="city" className="form-control" value={formData.city} onChange={handleChange} />
                                </Col>
                                <Col>
                                    <label>State</label>
                                    <input type="text" name="state" className="form-control" value={formData.state} onChange={handleChange} />
                                </Col>
                                <Col>
                                    <label>Zip Code</label>
                                    <input type="text" name="zip_code" className="form-control" value={formData.zip_code} onChange={handleChange} />
                                </Col>
                            </Row>

                            {/* Logos */}
                            <Row className="mb-3 mt-2">
                                <Col>
                                    <label>Company Logo</label>
                                    <div className="d-flex align-items-center">
                                        <img className="avatar-lg me-4" alt="Company Logo" src={avatar4} />
                                        <Dropzone callback={handleFilesData} />
                                    </div>
                                </Col>
                                <Col>
                                    <label>Team Logo</label>
                                    <div className="d-flex align-items-center">
                                        <img className="avatar-lg me-4" alt="Team Logo" src={avatar4} />
                                        <Dropzone callback={handleFilesData} />
                                    </div>
                                </Col>
                            </Row>

                            <hr />

                            <Row className="d-flex justify-content-end">
                                <Col xs="auto">
                                    <AllButton label="Save Company Info" width="160px" outline={false} onClick={handleSubmit} />
                                </Col>
                            </Row>

                        </CardBody>
                    </Card>

                    {/* -------------------- INTEGRATIONS -------------------- */}
                    <Card style={{ border: "1px solid #dad1e0", borderRadius: "12px" }}>
                        <CardBody>

                            <Row>
                                <Col>
                                    <div className="d-flex mb-0 gap-2">
                                        <i className="mdi mdi-link" style={{ fontSize: "2rem", color: "#243d78" }} />
                                        <div>
                                            <h3 className="mb-0 fw-bold">Integrations</h3>
                                            <p className="mt-1 mb-0">Connect your SalesBoard account with other services.</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="mt-3 p-3" style={{ border: "1px solid #dad1e0", borderRadius: "12px" }}>
                                <Col xs="auto">
                                    <i className="mdi mdi-email-outline" style={{ fontSize: "2rem", color: "#FF0000" }} />
                                </Col>

                                <Col>
                                    <h5 className="mb-1 fw-bolder">Integrations</h5>
                                    <p className="mb-0" style={{ color: "#FF0000" }}>
                                        Not linked. Required for sending emails via checklist tasks.
                                    </p>
                                    <p className="mb-0">
                                        Linking your Gmail account allows SalesBoard to send emails on your behalf for automated tasks
                                        and deal communications. We only request permission to compose and send emails.
                                    </p>
                                </Col>

                                <Col xs="auto" className="d-flex align-items-start justify-content-end">
                                    <AllButton label="Link Gmail Account" width="150px" outline={false} onClick={() => console.log("Gmail link clicked")} />
                                </Col>
                            </Row>

                            <hr />

                            <Row className="d-flex justify-content-end">
                                <Col xs="auto">
                                    <AllButton label="Save Integrations" width="140px" outline={false} onClick={() => console.log("Integrations saved")} />
                                </Col>
                            </Row>

                        </CardBody>
                    </Card>

                    {/* -------------------- PREFERENCES -------------------- */}
                    <Card style={{ border: "1px solid #dad1e0", borderRadius: "12px" }}>
                        <CardBody>

                            <Row>
                                <Col>
                                    <div className="d-flex mb-0 gap-2">
                                        <i className="bx bx-slider mt-1" style={{ fontSize: "2rem", color: "#243d78" }} />
                                        <div>
                                            <h3 className="mb-0 fw-bold">Preferences & Links</h3>
                                            <p className="mt-1 mb-0">Customize your experience and add external links.</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <hr />

                            <Row className="mt-4">
                                <Col>
                                    <label>Date Format</label>
                                    <Select
                                        name="date_format"
                                        isClearable
                                        value={formData.date_format}
                                        options={PreferencesDateFormat}
                                        placeholder="Select Date Format"
                                        onChange={(v) => handleSelectChange(v, "date_format")}
                                    />
                                </Col>
                                <Col>
                                    <label>Currency</label>
                                    <Select
                                        name="currency_format"
                                        isClearable
                                        value={formData.currency_format}
                                        options={PreferencesCurrencyFormat}
                                        placeholder="Select Currency"
                                        onChange={(v) => handleSelectChange(v, "currency_format")}
                                    />
                                </Col>
                            </Row>

                            <Row className="mt-3">
                                <Col>
                                    <label>Website URL</label>
                                    <input type="text" name="website" className="form-control" value={formData.website} onChange={handleChange} />
                                </Col>
                                <Col>
                                    <label>LinkedIn Profile URL</label>
                                    <input type="text" name="linkedin_profile" className="form-control" value={formData.linkedin_profile} onChange={handleChange} />
                                </Col>
                            </Row>

                            <Row className="mt-3">
                                <Col>
                                    <label>Twitter / X Profile URL</label>
                                    <input type="text" name="twitter_profile" className="form-control" value={formData.twitter_profile} onChange={handleChange} />
                                </Col>
                                <Col>
                                    <label>Facebook Profile URL</label>
                                    <input type="text" name="facebook_profile" className="form-control" value={formData.facebook_profile} onChange={handleChange} />
                                </Col>
                            </Row>

                            <hr />

                            <Row className="d-flex justify-content-end">
                                <Col xs="auto">
                                    <AllButton label="Save Preferences" width="140px" outline={false} onClick={handleSubmit} />
                                </Col>
                            </Row>

                        </CardBody>
                    </Card>

                </Container>
            </div>
        </React.Fragment>
    );
};

export default UserProfile;
