import React from "react";
import { Row, Col } from "reactstrap";
import { AsyncSelectField } from "pages/InputFields/InputFields";
import { Templates } from "AllDummyData/DealsDummyData";

const Template = ({ formData, handleAsyncSelectChange }) => {
    return (
        <div id="section-5">
            <div className="d-block mb-3 mt-3">
                <h3 className="modal-title fw-bolder mb-1">Template</h3>
            </div>
            <Row>
                <Col>
                    <AsyncSelectField label="Buyer / Tenant" name="templates" optionsList={Templates} value={formData?.templates}
                        onChange={handleAsyncSelectChange} />
                </Col>
            </Row>
        </div>
    )
};

export default Template;
