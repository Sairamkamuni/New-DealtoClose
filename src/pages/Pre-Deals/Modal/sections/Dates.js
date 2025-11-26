import React from "react";
import { Row, Col } from "reactstrap";
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

const Dates = ({ formType, formData, handleDateChange }) => {
    return (
        <div id="section-5">
            <div className="d-block mb-3 mt-3">
                <h3 className="modal-title fw-bold mb-1">Date&apos;s</h3>
            </div>

            <Row className="g-3">
                {formType === "Buyer" && (
                    <Col md="6">
                        <label>Acceptance Date</label>
                        <Flatpickr
                            name="acceptance_date"
                            className="form-control d-block"
                            options={{ altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d" }}
                            value={formData?.acceptance_date || ""}
                            onChange={(dates) => handleDateChange(dates, "acceptance_date")}
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
            </Row>
        </div>
    );
};

export default Dates;