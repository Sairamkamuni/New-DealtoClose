import React from "react";
import { Row, Col } from "reactstrap";
import AllButton, { EditButtonSolid } from "pages/utils/allButton";
import { keyWithDates } from "AllDummyData/DealsDummyData";
import { DatePickerField, } from "pages/InputFields/InputFields"

const ImportantDays = ({ editMode, setEditMode, formData, handleDateChange }) => {
    return (
        <Row>
            <div className="d-flex justify-content-between align-items-center mb-3 mt-3">
                <h5 className="fw-bolder mb-0 text-primary">Important Details</h5>
                <EditButtonSolid className={editMode ? "active" : ""} iconMarginRight="0px" iconFontSize="20px"
                    title={`Edit Mode ${editMode ? "Active" : "Disabled"}`} width="40px" onClick={() => setEditMode(!editMode)} />
            </div>
            <Col>
                {keyWithDates.map((item, index) => (
                    <Row className="g-0" key={index}>
                        <Col md="5" className="d-flex align-items-center" style={{ border: "1px solid #dcdcdc", padding: "0px 12px", borderRadius: "6px" }}>
                            <label className="fw-bold" style={{ marginTop: "6px" }}>{item.label}</label>
                        </Col>
                        <Col>
                            <DatePickerField
                                name={item.key}
                                onChange={handleDateChange}
                                value={formData?.[item.key] ?? item.date}
                                readOnly={!editMode}
                            />
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

export default ImportantDays;