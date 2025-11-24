import React from "react";
import { Row, Col } from "reactstrap";
import "flatpickr/dist/themes/material_blue.css"
import Flatpickr from "react-flatpickr"

const ImportantDates = ({ formType, handleChange, formData, setFormData }) => {

    const handleDateChange = (selectedDates, name) => {
        setFormData(prev => ({
            ...prev,
            [name]: selectedDates[0] || ""
        }));
    };

    return (
        <div id="section-3">
            <div className="d-block mb-3">
                <h3 className="modal-title fw-bold mb-1">Important Due Date</h3>
            </div>
            <Row>
                {formType === "Buyer" && (
                    <Col md="6" className="mb-3">
                        <label>Effective Date</label>
                        <div className="input-group">
                            <span className="input-group-text"><i className="mdi mdi-calendar" ></i></span>
                            <Flatpickr
                                name="effective_date"
                                className="form-control d-block"
                                options={{ altInput: true, time_24hr: false, altFormat: "F j, Y" }}
                                placeholder="MM, DD, YYYY"
                                onChange={(dates) => handleDateChange(dates)}
                            />
                        </div>
                    </Col>
                )}

                {formType === "Buyer" && (
                    <Col md="6" className="mb-2">
                        <label>Closing Date</label>
                        <div className="input-group">
                            <span className="input-group-text"><i className="mdi mdi-calendar" ></i></span>
                            <Flatpickr
                                name="closing_date"
                                className="form-control d-block"
                                options={{ altInput: true, time_24hr: false, altFormat: "F j, Y" }}
                                placeholder="MM, DD, YYYY"
                                onChange={(dates) => handleDateChange(dates)}
                            />
                        </div>
                    </Col>
                )}

                {formType === "Seller" && (
                    <Col md="6" className="mb-2">
                        <label>Listing Date</label>
                        <div className="input-group">
                            <span className="input-group-text"><i className="mdi mdi-calendar" ></i></span>
                            <Flatpickr
                                name="listing_date"
                                className="form-control d-block"
                                options={{ altInput: true, time_24hr: false, altFormat: "F j, Y" }}
                                placeholder="MM, DD, YYYY"
                                onChange={(dates) => handleDateChange(dates)}
                            />
                        </div>
                    </Col>
                )}

                {formType === "Seller" && (
                    <Col md="6" className="mb-2">
                        <label>Expiry Date</label>
                        <div className="input-group">
                            <span className="input-group-text"><i className="mdi mdi-calendar" ></i></span>
                            <Flatpickr
                                name="expiry_date"
                                className="form-control d-block"
                                options={{ altInput: true, time_24hr: false, altFormat: "F j, Y" }}
                                placeholder="MM, DD, YYYY"
                                onChange={(dates) => handleDateChange(dates)}
                            />
                        </div>
                    </Col>
                )}

                {formType === "Buyer" && (
                    <>
                        <Col md="6" className="mb-2">
                            <label>1st Escrow Due (Days)</label>
                            <input type="number" name="first_escrow" className="form-control" value={formData.first_escrow || ""} onChange={handleChange} />
                        </Col>
                        <Col md="6" className="mb-2">
                            <label>2nd Escrow Due (Days)</label>
                            <input type="number" name="second_escrow" className="form-control" value={formData.second_escrow || ""} onChange={handleChange} />
                        </Col>

                        <Col md="6" className="mb-2">
                            <label>Loan Application Due (Days)</label>
                            <input type="number" name="loan_application" className="form-control" value={formData.loan_application || ""} onChange={handleChange} />
                        </Col>
                        <Col md="6" className="mb-2">
                            <label>HOA Application Due (Days)</label>
                            <input type="number" name="hoa_application" className="form-control" value={formData.hoa_application || ""} onChange={handleChange} />
                        </Col>

                        <Col md="6" className="mb-2">
                            <label>Inspection Period Due (Days)</label>
                            <input type="number" name="inspection_period" className="form-control" value={formData.inspection_period || ""} onChange={handleChange} />
                        </Col>
                        <Col md="6" className="mb-2">
                            <label>Loan Commitment Due (Days)</label>
                            <input type="number" name="loan_commitment" className="form-control" value={formData.loan_commitment || ""} onChange={handleChange} />
                        </Col>
                    </>
                )}
            </Row>
        </div>
    )
};

export default ImportantDates;
