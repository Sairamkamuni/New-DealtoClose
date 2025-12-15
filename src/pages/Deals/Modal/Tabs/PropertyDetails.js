import React from "react";
import { Row, Col, Collapse } from "reactstrap";
import AllButton, { EditButtonSolid } from "pages/utils/allButton";
import { Link } from "react-router-dom";
import { dealsPropertyDetails, dealsPartyList, dealsAdditionalInformation, dealFields, keyWithDates, Templates } from "AllDummyData/DealsDummyData";
import { InputField, DatePickerField, AsyncSelectField } from "pages/InputFields/InputFields"

const PropertyDetails = ({ collapseToggle, collapseOpen, editMode, setEditMode, formData, handleChange, handleDateChange, handleSelectChange }) => {
    return (
        <Row>
            <Col md="6">
                <Row>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="fw-bolder mb-0 text-primary">Property Details</h5>
                        <EditButtonSolid className={editMode ? "active" : ""} iconMarginRight="0px" iconFontSize="20px"
                            title={`Edit Mode ${editMode ? "Active" : "Disabled"}`} width="40px" onClick={() => setEditMode(!editMode)} />
                    </div>
                    <Col>
                        {dealsPropertyDetails.map((item, index) => (
                            <Row className="g-0" key={index}>
                                <Col md="5" className="d-flex align-items-center" style={{ border: "1px solid #dcdcdc", padding: "0px 12px", borderRadius: "6px" }}>
                                    <label className="fw-bold" style={{ marginTop: "3px" }}>{item.label}</label>
                                </Col>
                                <Col>
                                    <InputField type="text" name={item.key} className="form-control"
                                        placeholder={item.label} value={formData?.[item.key] ?? item.values} onChange={handleChange} readOnly={!editMode}
                                        style={{ borderRadius: "6px", marginLeft: "6px" }} />
                                </Col>
                            </Row>
                        ))}
                        <div className="d-flex justify-content-end mt-3">
                            <AllButton label="Approve" outline={false} />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <div className="d-flex justify-content-between align-items-center mb-3 mt-3">
                        <h5 className="fw-bolder mb-0 text-primary">Parties</h5>
                        <EditButtonSolid className={editMode ? "active" : ""} iconMarginRight="0px" iconFontSize="20px"
                            title={`Edit Mode ${editMode ? "Active" : "Disabled"}`} width="40px" onClick={() => setEditMode(!editMode)} />
                    </div>
                    {dealsPartyList.map((item, index) => (
                        <Col md="6" key={index}>
                            <div className="list-unstyled categories-list mt-1 p-2 mb-2"
                                style={{ border: "1px solid #dcdcdc", borderRadius: "6px" }}>
                                <div className="custom-accordion">
                                    <Link className="text-body fw-bold py-1 d-flex align-items-center" to="#" onClick={() => collapseToggle(index)} >
                                        <div className="d-flex flex-column ms-2 mb-2">
                                            <p className="font-size-15 fw-bolder mb-0">{item.title}</p>
                                            <p className="font-size-12 fw-bolder mb-0 mt-2">{item.name}</p>
                                        </div>

                                        <i className={collapseOpen === index ? "mdi mdi-chevron-up accor-down-icon ms-auto"
                                            : "mdi mdi-chevron-down accor-down-icon ms-auto"} style={{ fontSize: "22px" }} />
                                    </Link>
                                    <Collapse isOpen={collapseOpen === index}>
                                        <div className="card border-0 shadow-none ms-2 mb-0">
                                            <ul className="list-unstyled mb-0">
                                                <li>
                                                    {item.company && <p className="fw-bold">{item.company}</p>}
                                                    <p>{item.phone}</p>
                                                    <p>{item.email}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </Collapse>
                                </div>
                            </div>
                        </Col>
                    ))}
                    <div className="d-flex justify-content-end mt-3">
                        <AllButton label="Approve" outline={false} />
                    </div>
                </Row>

                <Row>
                    <div className="d-flex justify-content-between align-items-center mb-3 mt-3">
                        <h5 className="fw-bolder mb-0 text-primary">Additional Informations</h5>
                        <EditButtonSolid className={editMode ? "active" : ""} iconMarginRight="0px" iconFontSize="20px"
                            title={`Edit Mode ${editMode ? "Active" : "Disabled"}`} width="40px" onClick={() => setEditMode(!editMode)} />
                    </div>
                    <Col>
                        {dealsAdditionalInformation.map((item, index) => (
                            <Row className="g-0 mb-2" key={index}>
                                <Col md="4" className="d-flex align-items-center">
                                    <label className="fw-bold me-2">{item.label} : </label>
                                </Col>
                                <Col>
                                    <InputField type="text" name={item.key} className="form-control"
                                        placeholder={item.label} value={formData?.[item.key] ?? item.values} onChange={handleChange} readOnly={!editMode}
                                        style={{ borderRadius: "6px", marginLeft: "6px" }} />
                                </Col>
                            </Row>
                        ))}
                        <div className="d-flex justify-content-end mt-3">
                            <AllButton label="Approve" outline={false} />
                        </div>
                    </Col>
                </Row>
            </Col>

            <Col md="6">
                <Row>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="fw-bolder mb-0 text-primary">Contract Details</h5>
                        <EditButtonSolid className={editMode ? "active" : ""} iconMarginRight="0px" iconFontSize="20px"
                            title={`Edit Mode ${editMode ? "Active" : "Disabled"}`} width="40px" onClick={() => setEditMode(!editMode)} />
                    </div>
                    <Col>
                        {dealFields.map((item, index) => (
                            <Row className="g-0" key={index}>
                                <Col md="5" className="d-flex align-items-center" style={{ padding: "0px 12px", }}>
                                    <label className="fw-bold" >{item.label}</label>
                                </Col>
                                <Col>
                                    : <input type="text" name={item.key} className=""
                                        placeholder={item.label} value={formData?.[item.key] ?? item.values} onChange={handleChange} readOnly={!editMode}
                                        style={{ border: 'none', borderRadius: "6px", marginLeft: "6px" }} />
                                </Col>
                            </Row>
                        ))}

                        {/* APPROVE BUTTON */}
                        <div className="d-flex justify-content-end mt-3">
                            <AllButton label="Approve" outline={false} />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <div className="d-flex justify-content-between align-items-center mb-3 mt-3">
                        <h5 className="fw-bolder mb-0 text-primary">Important Details</h5>
                        <EditButtonSolid className={editMode ? "active" : ""} iconMarginRight="0px" iconFontSize="20px"
                            title={`Edit Mode ${editMode ? "Active" : "Disabled"}`} width="40px" onClick={() => setEditMode(!editMode)} />
                    </div>
                    <Col>
                        {keyWithDates.map((item, index) => (
                            <Row className="g-0" key={index}>
                                <Col md="5" className="d-flex align-items-center" style={{ border: "1px solid #dcdcdc", padding: "0px 12px", borderRadius: "6px" }}>
                                    <label className="fw-bold" style={{ marginTop: "3px" }}>{item.label}</label>
                                </Col>
                                <Col>
                                    <DatePickerField
                                        name={item.key}
                                        onChange={handleDateChange}
                                        value={formData?.[item.key] ?? item.date}
                                        readOnly={!editMode}
                                    />
                                </Col>
                            </Row>
                        ))}

                        {/* APPROVE BUTTON */}
                        <div className="d-flex justify-content-end mt-3">
                            <AllButton label="Approve" outline={false} />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="d-flex justify-content-between align-items-center mb-3 mt-3">
                            <h5 className="fw-bolder mb-0 text-primary">Cheklist Template</h5>
                        </div>
                        <AsyncSelectField name="templates" optionsList={Templates} value={formData?.templates}
                            onChange={handleSelectChange} />
                        <div className="d-flex justify-content-end mt-3">
                            <AllButton label="Approve" outline={false} />
                        </div>
                    </Col>


                </Row>
            </Col>
        </Row >
    );
};

export default PropertyDetails;