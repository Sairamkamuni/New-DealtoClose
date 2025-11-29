import React from "react";
import { Row, Col } from "reactstrap";
import { additionalTerms } from "AllDummyData/DealsDummyData";
import { AsyncSelectField, InputField } from "pages/InputFields/InputFields";

const AdditionalTerms = ({ formData, handleChange, handleAsyncSelectChange }) => {
    return (
        <div id="section-6">
            <div className="d-block mb-3 mt-3">
                <h3 className="modal-title fw-bold mb-1">Additional Term</h3>
            </div>
            <Row className="g-3">
                <Col md="12">
                    <AsyncSelectField label="Additional Terms" name="additional_terms" optionsList={additionalTerms}
                        value={formData?.additional_terms} onChange={handleAsyncSelectChange} placeholder="Search Additional Terms..." />
                </Col>

                <Col md="12">
                    <InputField label="Custom Terms" type="textarea" rows="4" name="custom_terms" placeholder="Or type custom terms here..."
                        value={formData?.custom_terms} onChange={handleChange} />
                </Col>
            </Row>
        </div>
    )
};

export default AdditionalTerms;
