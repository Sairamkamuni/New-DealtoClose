import React from "react";
import { Row, Col } from "reactstrap";
import AllButton, { EditButtonSolid } from "pages/utils/allButton";
import { Templates } from "AllDummyData/DealsDummyData";
import { AsyncSelectField } from "pages/InputFields/InputFields"

const CheklistTemplate = ({ editMode, setEditMode, formData, handleSelectChange }) => {
    return (
        <Row>
            <Col>
                <div className="d-flex justify-content-between align-items-center mb-3 mt-3">
                    <h5 className="fw-bolder mb-0 text-primary">Cheklist Template</h5>
                    <EditButtonSolid className={editMode ? "active" : ""} iconMarginRight="0px" iconFontSize="20px"
                        title={`Edit Mode ${editMode ? "Active" : "Disabled"}`} width="40px" onClick={() => setEditMode(!editMode)} />
                </div>
                <AsyncSelectField name="templates" optionsList={Templates} value={formData?.templates} readOnly={!editMode}
                    onChange={handleSelectChange} />
                <div className="d-flex justify-content-end mt-3">
                    <AllButton label="Approve" outline={false} />
                </div>
            </Col>


        </Row>
    )
};

export default CheklistTemplate;