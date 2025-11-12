import React from "react";
import { Row, Col } from "reactstrap";
import "flatpickr/dist/themes/material_blue.css"
import Flatpickr from "react-flatpickr"

const ImportantDates = ({ formType, handleChange }) => {
    return (
        <div id="section-3">
            <div className="d-block mb-3">
                <h3 className="modal-title fw-bold mb-1">Important Due Date</h3>
            </div>
            <Row>
                <Col md={6}>
                    <div className="mb-2">
                        <label>{formType === "Buyer" ? "Effective Date" : "Listing Date"}</label>
                        <div className="input-group">
                            <span className="input-group-text"><i className="mdi mdi-calendar" ></i></span>
                            <Flatpickr
                                className="form-control d-block"
                                options={{ altInput: true, time_24hr: false, altFormat: "F j, Y" }}
                                placeholder="MM, DD, YYYY"
                                onChange={(e) => handleChange('effective_date', moment(...e).format("YYYY-DD-MM"))}
                            />
                        </div>
                    </div>

                </Col>
                <Col md={6}>
                    <div className="mb-2">
                        <label>{formType === "Buyer" ? "Closing Date" : "Expiry Date"}</label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="mdi mdi-calendar"></i>
                            </span>
                            <Flatpickr
                                className="form-control d-block"
                                options={{ altInput: true, time_24hr: false, altFormat: "F j, Y" }}
                                placeholder="MM, DD, YYYY"
                                onChange={(e) => handleChange('closing_date', moment(...e).format("YYYY-DD-MM"))}
                            />
                        </div>
                    </div>
                </Col>
                {formType === "Buyer" && (
                    <>
                        <Col md={6} className="mt-2">
                            <div className="mb-2">
                                <label>1st Escrow Due (Days)</label>
                                <input type="number" name="first_escrow" onChange={(e) => handleChange('first_escrow', e.target.value)} className="form-control" />
                            </div>
                        </Col>
                        <Col md={6} className="mt-2">
                            <div className="mb-2">
                                <label>2nd Escrow Due (Days)</label>
                                <input type="number" name="second_escrow" onChange={(e) => handleChange('2nd_escrow', e.target.value)} className="form-control" />
                            </div>
                        </Col>

                        <Col md={6} className="mt-2">
                            <div className="mb-2">
                                <label>Loan Application Due (Days)</label>
                                <input type="number" name="loan_application" onChange={(e) => handleChange('loan_application', e.target.value)} className="form-control" />
                            </div>
                        </Col>
                        <Col md={6} className="mt-2">
                            <div className="mb-2">
                                <label>HOA Application Due (Days)</label>
                                <input type="number" name="hoa_application" onChange={(e) => handleChange('hoa_application', e.target.value)} className="form-control" />
                            </div>
                        </Col>

                        <Col md={6} className="mt-2">
                            <div className="mb-2">
                                <label>Inspection Period Due (Days)</label>
                                <input type="number" name="inspection_period" onChange={(e) => handleChange('inspection_period', e.target.value)} className="form-control" />
                            </div>
                        </Col>
                        <Col md={6} className="mt-2">
                            <div className="mb-2">
                                <label>Loan Commitment Due (Days)</label>
                                <input type="number" name="loan_commitment" onChange={(e) => handleChange('loan_commitment', e.target.value)} className="form-control" />
                            </div>
                        </Col>
                    </>
                )}
            </Row>
        </div>
    )
};

export default ImportantDates;
