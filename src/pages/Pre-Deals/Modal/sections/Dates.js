import React from "react";
import { Row, Col } from "reactstrap";
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";
import { DatePickerField } from "pages/InputFields/InputFields"
const Dates = ({ formType, formData, handleDateChange }) => {
    return (
        <div id="section-5">
            <div className="d-block mb-3 mt-3">
                <h3 className="modal-title fw-bold mb-1">Date&apos;s</h3>
            </div>

            <Row className="g-3">
                {formType === "Buyer" && (
                    <Col md="6">
                        <DatePickerField label="Acceptance Date" name="acceptance_date" value={formData?.acceptance_date}
                            onChange={handleDateChange} placeholder="MM, DD, YYYY" />
                    </Col>
                )}

                {formType == "Buyer" && (
                    <Col md="6">
                        <DatePickerField label="Closing Date" name="closing_date" value={formData?.closing_date}
                            onChange={handleDateChange} placeholder="MM, DD, YYYY" />
                    </Col>
                )}

                {formType == "Seller" && (
                    <Col md="6">
                        <DatePickerField label="Listing Date" name="listing_date" value={formData?.listing_date}
                            onChange={handleDateChange} placeholder="MM, DD, YYYY" />
                    </Col>
                )}

                {formType == "Seller" && (
                    <Col md="6">
                        <DatePickerField label="Expiry Date" name="expiry_date" value={formData?.expiry_date}
                            onChange={handleDateChange} placeholder="MM, DD, YYYY" />
                    </Col>
                )}
            </Row>
        </div>
    );
};

export default Dates;