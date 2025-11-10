import React from "react";
import { Row, Col } from "reactstrap";

const AdditionalTerms = ({ formType, setFormType }) => {
    return (
        <div id="section-6">
            <div className="d-block mt-3">
                <h3 className="modal-title fw-bold mb-1">Additional Term</h3>
            </div>
            <Row className="mt-2">
                <Col>
                    <div className="mb-2">
                        <label>Additional Terms</label>
                        <input
                            type="text"
                            name="additional_terms"
                            className="form-control"
                            placeholder="Search for additional terms..."
                        />
                    </div>
                    <div className="mb-2 mt-4">
                        <label>Custom Terms</label>
                        <textarea
                            name="custom_terms"
                            className="form-control"
                            placeholder="Or type custom terms here..."
                            rows={4}
                        ></textarea>
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default AdditionalTerms;
