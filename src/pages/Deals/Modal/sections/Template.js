import React from "react";
import { Row, Col } from "reactstrap";

const Template = ({ handleChange }) => {
    return (
        <div id="section-5">
            <div className="d-block">
                <h3 className="modal-title fw-bold mb-1">Template</h3>
            </div>
            <Row>
                <Col className="mt-2">
                    <div >
                        <label>Template</label>
                        <input type="text" name="template" className="form-control" onChange={(e) => handleChange('template', e.target.value)} placeholder="Search Template..." />
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default Template;
