import React from "react";
import { Row, Col } from "reactstrap";
import AllButton, { EditButtonSolid } from "pages/utils/allButton";
import { dealsAdditionalInformation } from "AllDummyData/DealsDummyData";

const AdditionalInformation = ({ editMode, setEditMode }) => {
    return (
        <Row>
            <div className="d-flex justify-content-between align-items-center mb-3 mt-3">
                <h5 className="fw-bolder mb-0 text-primary">Additional Informations</h5>
                <EditButtonSolid className={editMode ? "active" : ""} iconMarginRight="0px" iconFontSize="20px"
                    title={`Edit Mode ${editMode ? "Active" : "Disabled"}`} width="40px" onClick={() => setEditMode(!editMode)} />
            </div>
            <Col>
                {dealsAdditionalInformation.map((item, index) => (
                    <Row key={index}>
                        <Col md="4">
                            <label className="fw-bold">{item.label}</label>
                        </Col>
                        <Col xs="auto" style={{ borderRight: "1px solid #a4a2a2ff" }}> </Col>
                        <Col md="4" style={{ cursor: "pointer" }}>
                            <label className="fw-bold ms-5">{item.values}</label>
                        </Col>
                    </Row>
                ))}
                <div className="d-flex justify-content-end mt-3">
                    <AllButton label="Approve" outline={false} />
                </div>
            </Col>
        </Row>
    )
};

export default AdditionalInformation;