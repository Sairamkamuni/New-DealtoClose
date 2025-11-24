import React from "react";
import { Row, Col } from "reactstrap";

const AdditionalTerms = ({ formData, handleChange }) => {
    return (
        <div id="section-6">
            <div className="d-block mt-3">
                <h3 className="modal-title fw-bold mb-1">Additional Term</h3>
            </div>
            <Row className="mt-2">
                <Col>
                    <div className="mb-2">
                        <label>Additional Terms</label>
                        <input type="text" name="additional_terms" className="form-control" placeholder="Search for additional terms..."
                            value={formData.additional_terms || ""} onChange={handleChange} />
                    </div>
                </Col>
            </Row>

            <Row>
                <Col className="mt-3">
                    <label>Custom Terms</label>
                    <textarea name="custom_terms" className="form-control" placeholder="Or type custom terms here..." rows="4"
                        value={formData.custom_terms || ""} onChange={handleChange} />
                </Col>
            </Row>
        </div>
    )
};

export default AdditionalTerms;
