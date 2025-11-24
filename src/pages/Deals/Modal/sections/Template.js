import React from "react";
import { Row, Col } from "reactstrap";

const Template = ({ handleChange, formData }) => {
    return (
        <div id="section-5">
            <div className="d-block">
                <h3 className="modal-title fw-bold mb-1">Template</h3>
            </div>
            <Row>
                <Col className="mt-2" >
                    <label>Template</label>
                    <input type="text" name="template" className="form-control" placeholder="Search Template..."
                        value={formData.template || ""} onChange={handleChange} />

                </Col>
            </Row>
        </div>
    )
};

export default Template;
