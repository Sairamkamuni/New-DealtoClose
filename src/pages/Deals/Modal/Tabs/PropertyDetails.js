import React, { useState } from "react";
import { Row, Col, Collapse } from "reactstrap";
import AllButton, { EditButtonSolid } from "pages/utils/allButton";
import { Link } from "react-router-dom";
import { dealsPropertyDetails, dealsPartyList, dealsAdditionalInformation } from "AllDummyData/DealsDummyData";
import { InputField } from "pages/InputFields/InputFields";

const PropertyDetails = ({ collapseToggle, collapseOpen, editMode, setEditMode, formData, handleChange, }) => {

    return (
        <Row>
            <Col xs="12" md="6">
                <Row>
                    <Col md="12">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="fw-bolder mb-0 text-primary">Property Details</h5>
                            <EditButtonSolid className={editMode ? "active" : ""} iconMarginRight="0px" iconFontSize="20px"
                                title={`Edit Mode ${editMode ? "Active" : "Disabled"}`} width="40px" onClick={() => setEditMode(!editMode)}
                            />
                        </div>

                        {dealsPropertyDetails.map((item, index) => (
                            <Row className="g-0" key={index}>
                                <Col xs="5">
                                    <div style={{ border: "1px solid #dcdcdc", padding: "8px 12px", borderRadius: "6px" }} >
                                        {item.value}
                                    </div>
                                </Col>

                                <Col xs="7" className="position-relative">
                                    <div style={{
                                        border: "1px solid #dcdcdc", padding: "8px 12px", borderRadius: "6px", background: "#fff", display: "flex",
                                        justifyContent: "space-between", alignItems: "center"
                                    }} >
                                        {editMode ? (
                                            <input defaultValue={item.label} className="form-control border-0 p-0" />
                                        ) : (
                                            <span>{item.label}</span>
                                        )}
                                    </div>
                                </Col>
                            </Row>
                        ))}
                        <div className="d-flex justify-content-end mt-3">
                            <AllButton label="Approve" outline={false} />
                        </div>
                    </Col>
                </Row>

                {/* <Row>
                    <div className="d-flex justify-content-between align-items-center mb-3 mt-3">
                        <h5 className="fw-bolder mb-0 text-primary">Parties</h5>
                        <EditButtonSolid className={editMode ? "active" : ""} iconMarginRight="0px" iconFontSize="20px"
                            title={`Edit Mode ${editMode ? "Active" : "Disabled"}`} width="40px" onClick={() => setEditMode(!editMode)}
                        />
                    </div>
                    {dealsPartyList.map((item, index) => (
                        <Col md="6" key={index}>
                            <div className="list-unstyled categories-list mt-1 p-2 mb-2"
                                style={{ border: "1px solid #dcdcdc", borderRadius: "6px" }}>

                                <div className="custom-accordion">
                                    <Link
                                        className="text-body fw-bold py-1 d-flex align-items-center"
                                        onClick={() => collapseToggle(index)}
                                        to="#"
                                    >
                                        <div className="d-flex flex-column ms-2 mb-2">
                                            <p className="font-size-15 fw-bolder mb-0">{item.title}</p>
                                            <p className="font-size-12 fw-bolder mb-0 mt-2">{item.name}</p>
                                        </div>

                                        <i
                                            className={
                                                collapseOpen === index
                                                    ? "mdi mdi-chevron-up accor-down-icon ms-auto"
                                                    : "mdi mdi-chevron-down accor-down-icon ms-auto"
                                            }
                                            style={{ fontSize: "22px" }}
                                        />
                                    </Link>


                                    <Collapse isOpen={collapseOpen === index}>
                                        <div className="card border-0 shadow-none ms-2 mb-0">
                                            <ul className="list-unstyled mb-0">
                                                <li>
                                                    {item.company && <p className="fw-bold">{item.company}</p>}
                                                    <p>{item.phone}</p>
                                                    <p>{item.email}</p>
                                                    {item.Website && (
                                                        <p className="text-info" style={{ cursor: "pointer" }}>
                                                            {item.Website}
                                                        </p>
                                                    )}
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
                            title={`Edit Mode ${editMode ? "Active" : "Disabled"}`} width="40px" onClick={() => setEditMode(!editMode)}
                        />
                    </div>
                    <Col>
                        {dealsAdditionalInformation.map((item, index) => (
                            <Row className="g-0 mb-2" key={index}>
                                <Col md="3" className="d-flex align-items-center">
                                    <label className="fw-bold me-2">{item.value}</label>
                                </Col>
                                <Col>
                                    <InputField
                                        type="text"
                                        name={item.value}
                                        className="form-control"
                                        placeholder={item.label}
                                        value={formData?.[item.value]}
                                        onChange={handleChange}
                                    />
                                </Col>
                            </Row>
                        ))}
                        <div className="d-flex justify-content-end mt-3">
                            <AllButton label="Approve" outline={false} />
                        </div>
                    </Col>
                </Row> */}
            </Col>

        </Row >
    );
};

export default PropertyDetails;




{/* <Col xs="6">
    <div className="d-flex justify-content-between align-items-center mb-2">
        <h5 className="text-start fw-bolder mb-0">Contract Details</h5>
        <EditButtonSolid className={dateChangeMode ? "active" : ""} iconMarginRight="0px" iconFontSize="20px"
            title={`Edit Mode ${dateChangeMode ? "Active" : "Disabled"}`} width="40px" onClick={() => setDateChangeMode(!dateChangeMode)} />
    </div>
</Col> */}