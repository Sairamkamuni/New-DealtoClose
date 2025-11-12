import React from "react";
import { Row, Col } from "reactstrap";
import AsyncSelect from 'react-select/async';
import Select, { components } from "react-select"
import { propertyStatus, buyerTypeOptions } from "AllDummyData/DealsDummyData";
import AllButton, { FaPlusButton } from "pages/utils/allButton";

const DealType = ({ formType, setFormType }) => {
    const loadOptions = (inputValue, callback) => {
        const filtered = buyerTypeOptions.filter((opt) =>
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
        <div>
            <h3 className="fw-bold mb-3">Pre-Deal Type</h3>
            <div className="mb-4 d-flex gap-2">
                <AllButton label="Buyer / Tenant" outline={formType !== "Buyer"} width="240px" onClick={() => setFormType("Buyer")} />
                <AllButton label="Seller / Landlord" outline={formType !== "Seller"} width="240px" onClick={() => setFormType("Seller")} />
            </div>

            <div id="section-1">
                <Row>
                    <Col>
                        <div className="mb-2">
                            <label>Property Address</label>
                            <input type="text" name="property_address" className="form-control" onChange={(e) => handleChange(e.target.name, e.target.value)}
                                placeholder="Search address from MLS or Google Maps..." />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-2">
                        <div className="mt-2 mb-4 bg-light p-3 rounded border border-dark">
                            <p className="modal-title fw-normal mb-1">Property Address</p>
                            <h2 className="mb-3 mt-2 fw-bolder" style={{ fontSize: "16px" }}> 123 Main St, City Name, FL 333414 </h2>
                            <div className="d-flex gap-4">
                                <p className="modal-title fw-normal mb-1">Listed By: Full Name</p>
                                <p className="modal-title fw-normal mb-1">Brokerage: ABC Realty</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="mb-2">
                            <label>Transaction Owner</label>
                            <input type="text" name="transaction_owner" className="form-control" onChange={(e) => handleChange(e.target.name, e.target.value)}
                                placeholder="Search team Member..." />
                        </div>
                    </Col>
                    <Col>
                        <div className="mb-2">
                            <label>Type</label>
                            <AsyncSelect loadOptions={loadOptions} defaultOptions isClearable={true} onChange={(e) => handleChange('_type', e)} components={{ MenuList: CustomMenuList }}
                                placeholder="Select an option" />
                        </div>
                    </Col>
                </Row>
                <Row >
                    <Col className="mt-2">
                        <div className="mb-2">
                            <label>Status</label>
                            <Select name="property_status" isClearable={true} className="basic-single" classNamePrefix="select" options={propertyStatus}
                                onChange={(e) => handleChange("property_status", e)} placeholder="Select Status" />
                        </div>
                    </Col>
                    <Col>
                        <div className="mb-2">
                            <label>Buyer / Tenant</label>
                            <input type="text" name="buyer" className="form-control" onChange={(e) => handleChange(e.target.name, e.target.value)}
                                placeholder="Search Contact..." />
                        </div>
                    </Col>
                    <Col>
                        <div className="mb-2">
                            <label>Seller / Landlord</label>
                            <input type="text" name="seller" className="form-control" onChange={(e) => handleChange(e.target.name, e.target.value)}
                                placeholder="Search Contact..." />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
};

export default DealType;
