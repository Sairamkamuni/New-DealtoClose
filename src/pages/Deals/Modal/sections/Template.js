import React from "react";
import { Row, Col } from "reactstrap";

const Template = ({ handleChange, formData }) => {
    return (
        <div id="section-5">
            <div className="d-block mb-3 mt-3">
                <h3 className="modal-title fw-bolder mb-1">Template</h3>
            </div>
            <Row>
                <Col >
                    <label>Template</label>
                    <input type="text" name="template" className="form-control" placeholder="Search Template..."
                        value={formData?.template || ""} onChange={handleChange} />

                </Col>
            </Row>
        </div>
    )
};

export default Template;
