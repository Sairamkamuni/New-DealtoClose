import React from "react";
import { Row, Col } from "reactstrap";
import { DatePickerField, InputField } from "pages/InputFields/InputFields";

const ImportantDates = ({ formType, handleChange, formData, handleDateChange }) => {

    return (
        <div id="section-3">
            <div className="d-block mb-3 mt-3">
                <h3 className="modal-title fw-bolder mb-1">Important Due Date</h3>
            </div>

            <Row className="g-3">
                {formType === "Buyer" && (
                    <Col md="6">
                        <DatePickerField label="Effective Date" name="effective_date" value={formData?.effective_date}
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

                {formType === "Buyer" && (
                    <>
                        <Col md="6">
                            <InputField label="1st Escrow Due (Days)" type="text" name="first_escrow_days"
                                value={formData?.first_escrow_days} onChange={handleChange} />
                        </Col>
                        <Col md="6">
                            <InputField label="2nd Escrow Due (Days)" type="text" name="additional_escrow_days"
                                value={formData?.additional_escrow_days} onChange={handleChange} />
                        </Col>
                        <Col md="6">
                            <InputField label="Loan Application Due (Days)" type="text" name="loan_application_days"
                                value={formData?.loan_application_days} onChange={handleChange} />
                        </Col>
                        <Col md="6">
                            <InputField label="HOA Application Due (Days)" type="text" name="hoa_application_days"
                                value={formData?.hoa_application_days} onChange={handleChange} />
                        </Col>
                        <Col md="6">
                            <InputField label="Inspection Period Due (Days)" type="text" name="inspection_period_days"
                                value={formData?.inspection_period_days} onChange={handleChange} />
                        </Col>
                        <Col md="6">
                            <InputField label="Loan Commitment Due (Days)" type="text" name="loan_commitment_days"
                                value={formData?.loan_commitment_days} onChange={handleChange} />
                        </Col>
                    </>
                )}
            </Row>
        </div>
    )
};

export default ImportantDates;
