import React from "react";
import { Row, Col } from "reactstrap";
import { components } from "react-select"
import AsyncSelect from 'react-select/async';
import { FaPlusButton } from "pages/utils/allButton";
import { Templates } from "AllDummyData/DealsDummyData";

const AdditionalTerms = ({ formData, handleChange, handleAsyncSelectChange }) => {
    const loadOptions = (optionsList) => (inputValue, callback) => {
        const filtered = optionsList.filter((opt) =>
            opt.label.toLowerCase().includes(inputValue.toLowerCase())
        );
        callback(filtered);
    };

    const CustomMenuList = (props) => {
        return (
            <components.MenuList {...props}>
                {props.children}
                <FaPlusButton label="Add New" width="100%" outline={false} onClick={(e) => { e.stopPropagation() }} className="mt-2" />
            </components.MenuList>
        );
    };

    return (
        <div id="section-6">
            <div className="d-block mb-3 mt-3">
                <h3 className="modal-title fw-bold mb-1">Additional Term</h3>
            </div>
            <Row className="g-3">
                <Col md="12">
                    <label>Additional Terms</label>
                    <AsyncSelect
                        loadOptions={loadOptions(Templates)}
                        defaultOptions
                        name="additional_terms"
                        isClearable={true}
                        components={{ MenuList: CustomMenuList }}
                        placeholder="Search Additional Terms..."
                        onChange={(option) => handleAsyncSelectChange("additional_terms", option)}
                        value={Templates.find((opt) => opt.label === formData?.additional_terms)}
                    />
                </Col>

                <Col md="12">
                    <label>Custom Terms</label>
                    <textarea name="custom_terms" className="form-control" placeholder="Or type custom terms here..." rows="4"
                        value={formData.custom_terms || ""} onChange={handleChange} />
                </Col>
            </Row>
        </div>
    )
};

export default AdditionalTerms;
