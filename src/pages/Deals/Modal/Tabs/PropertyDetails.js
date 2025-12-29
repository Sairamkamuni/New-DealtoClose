import React from "react";
import { Row, Col } from "reactstrap";
import AllButton, { EditButtonSolid } from "pages/utils/allButton";
import { dealFields, keyWithDates, Templates } from "AllDummyData/DealsDummyData";
import { InputField, DatePickerField, AsyncSelectField } from "pages/InputFields/InputFields"

import PropertyDetails from "./Comps/PropertyDetails";
import Parties from "./Comps/Parties";
import AdditionalInformation from "./Comps/AdditionalInfo";
import ContractDetails from "./Comps/ContractDetails";
import ImportantDays from "./Comps/ImportantDays";
import CheklistTemplate from "./Comps/CheklistTemplate";

const index = ({ collapseToggle, collapseOpen, editMode, setEditMode, formData, handleChange, handleDateChange, handleSelectChange }) => {
    return (
        <Row>
            <Col md="6">
                <PropertyDetails
                    editMode={editMode}
                    setEditMode={setEditMode}
                    formData={formData}
                    handleChange={handleChange}
                />
                <Parties
                    editMode={editMode}
                    setEditMode={setEditMode}
                    collapseToggle={collapseToggle}
                    collapseOpen={collapseOpen}
                />
                <AdditionalInformation
                    editMode={editMode}
                    setEditMode={setEditMode}
                />
            </Col>

            <Col md="6">
                <ContractDetails
                    editMode={editMode}
                    setEditMode={setEditMode}
                    formData={formData}
                    handleChange={handleChange}
                />
                <ImportantDays
                    editMode={editMode}
                    setEditMode={setEditMode}
                    formData={formData}
                    handleChange={handleDateChange}
                />
                <CheklistTemplate
                    editMode={editMode}
                    setEditMode={setEditMode}
                    formData={formData}
                    handleChange={handleSelectChange}
                />
            </Col>
        </Row >
    );
};

export default index;