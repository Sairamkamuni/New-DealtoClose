import React from "react";
import { Row, Col } from "reactstrap";
import AllButton, { EditButtonSolid } from "pages/utils/allButton";
import { dealsAdditionalInformation } from "AllDummyData/DealsDummyData";
import { InputField } from "pages/InputFields/InputFields";

const AdditionalInformation = ({ editMode, setEditMode, handleChange, formData }) => {
    return (
        <Row>
            <div className="d-flex justify-content-between align-items-center mb-3 mt-3">
                <h5 className="fw-bolder mb-0 text-primary">Additional Informations</h5>
                <EditButtonSolid className={editMode ? "active" : ""} iconMarginRight="0px" iconFontSize="20px"
                    title={`Edit Mode ${editMode ? "Active" : "Disabled"}`} width="40px" onClick={() => setEditMode(!editMode)} />
            </div>
            <Col>
                {dealsAdditionalInformation.map((item, index) => (
                    <Row className="g-0 align-items-center" key={index}>
                        <Col md="5" className="d-flex align-items-center mb-3">
                            <label className="fw-bold">{item.label}</label>
                        </Col>
                        <Col>
                            {editMode ? (
                                <InputField type="text" name={item.key} className="form-control mb-0 p-0" placeholder={item.label}
                                    value={formData?.[item.key] ?? item.values} onChange={handleChange} style={{ borderRadius: "6px", marginLeft: "6px" }} />
                            ) : (
                                <p className="mb-0" style={{ marginLeft: "6px", padding: "0px 12px", color: "#374151", cursor: "default" }}>
                                    {(formData?.[item.key] ?? item.values) || "-"}
                                </p>
                            )}
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
