import React from "react";
import { Row, Col } from "reactstrap";
import "flatpickr/dist/themes/material_blue.css"
import Flatpickr from "react-flatpickr"

const ImportantDates = ({ formType, handleChange, formData, handleDateChange }) => {

    return (
        <div id="section-3">
            <div className="d-block mb-3 mt-3">
                <h3 className="modal-title fw-bolder mb-1">Important Due Date</h3>
            </div>

            <Row className="g-3">
                {formType === "Buyer" && (
                    <Col md="6">
                        <label>Effective Date</label>
                        <Flatpickr
                            name="effective_date"
                            className="form-control d-block"
                            options={{ altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d" }}
                            value={formData?.effective_date || ""}
                            onChange={(dates) => handleDateChange(dates, "effective_date")}
                            placeholder="MM, DD, YYYY"
                        />
                    </Col>
                )}

                {formType == "Buyer" && (
                    <Col md="6">
                        <label>Closing Date</label>
                        <Flatpickr
                            name="closing_date"
                            className="form-control d-block"
                            options={{ altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d" }}
                            value={formData?.closing_date || ""}
                            onChange={(dates) => handleDateChange(dates, "closing_date")}
                            placeholder="MM, DD, YYYY"
                        />
                    </Col>
                )}

                {formType == "Seller" && (
                    <Col md="6">
                        <label>Listing Date</label>
                        <Flatpickr
                            name="listing_date"
                            className="form-control d-block"
                            options={{ altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d" }}
                            value={formData?.listing_date || ""}
                            onChange={(dates) => handleDateChange(dates, "listing_date")}
                            placeholder="MM, DD, YYYY"
                        />
                    </Col>
                )}

                {formType == "Seller" && (
                    <Col md="6">
                        <label>Expiry Date</label>
                        <Flatpickr
                            name="expiry_date"
                            className="form-control d-block"
                            options={{ altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d" }}
                            value={formData?.expiry_date || ""}
                            onChange={(dates) => handleDateChange(dates, "expiry_date")}
                            placeholder="MM, DD, YYYY"
                        />
                    </Col>
                )}

                {formType === "Buyer" && (
                    <>
                        <Col md="6">
                            <label>1st Escrow Due (Days)</label>
                            <input name="first_escrow_days"
                                className="form-control"
                                type="number"
                                value={formData?.first_escrow_days || ""}
                                onChange={handleChange}
                            />
                        </Col>
                        <Col md="6">
                            <label>2nd Escrow Due (Days)</label>
                            <input name="second_escrow_days"
                                className="form-control"
                                type="number"
                                value={formData?.second_escrow_days || ""}
                                onChange={handleChange}
                            />
                        </Col>
                        <Col md="6">
                            <label>Loan Application Due (Days)</label>
                            <input name="loan_application_days"
                                className="form-control"
                                type="number"
                                value={formData?.loan_application_days || ""}
                                onChange={handleChange}
                            />
                        </Col>
                        <Col md="6">
                            <label>HOA Application Due (Days)</label>
                            <input name="hoa_application_days"
                                className="form-control"
                                type="number"
                                value={formData?.hoa_application_days || ""}
                                onChange={handleChange}
                            />
                        </Col>
                        <Col md="6">
                            <label>Inspection Period Due (Days)</label>
                            <input name="inspection_period_days"
                                className="form-control"
                                type="number"
                                value={formData?.inspection_period_days || ""}
                                onChange={handleChange}
                            />
                        </Col>
                        <Col md="6">
                            <label>Loan Commitment Due (Days)</label>
                            <input name="loan_commitment_days"
                                className="form-control"
                                type="number"
                                value={formData?.loan_commitment_days || ""}
                                onChange={handleChange}
                            />
                        </Col>
                    </>
                )}
            </Row>
        </div>
    )
};

export default ImportantDates;
