import React from "react";
import { Row, Col } from "reactstrap";
import AsyncSelect from 'react-select/async';
import Select, { components } from "react-select"
import { transactionOwner, propertyStatus, buyerTypeOptions, sellerTypeOptions, BuyersOrTenants, SellersOrLandlords } from "AllDummyData/DealsDummyData";
import AllButton, { FaPlusButton } from "pages/utils/allButton";
import { SelectField } from "pages/InputFields/InputFields";

const DealType = ({ formType, setFormType, formData, handleChange, handleSelectChange, handleAsyncSelectChange }) => {
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
        <div>
            <h3 className="fw-bolder mb-3">Deal Type</h3>
            <div className="mb-4 d-flex gap-2">
                <AllButton label="Buyer / Tenant" outline={formType !== "Buyer"} width="240px" onClick={() => setFormType("Buyer")} />
                <AllButton label="Seller / Landlord" outline={formType !== "Seller"} width="240px" onClick={() => setFormType("Seller")} />
            </div>

            <Row>
                <Col>
                    <label>Property Address</label>
                    <input name="property_address"
                        className="form-control"
                        type="text"
                        placeholder="Search address from MLS or Google..."
                        value={formData?.property_address || ""}
                        onChange={handleChange}
                    />
                </Col>
            </Row>

            <Row>
                <Col className="mt-3">
                    <div className="p-3" style={{ border: "1px solid #dad1e0", borderRadius: "5px", backgroundColor: "#ece4f1" }}>
                        <p className="modal-title mb-2">MLS# A125613</p>
                        <h2 className="fw-bolder mb-2" style={{ fontSize: "16px" }}> 123 Main St, City Name, FL 333414 </h2>
                        <div className="d-flex">
                            <p className="modal-title me-4">Listed By: Full Name</p>
                            <p className="modal-title">Brokerage: ABC Realty</p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="mt-1 g-3">
                <Col md="6">
                    <label>Transaction Owner</label>
                    <Select
                        name="transaction_owner"
                        isClearable={true}
                        className="basic-single"
                        classNamePrefix="select"
                        options={transactionOwner}
                        onChange={handleSelectChange}
                        value={transactionOwner.find((opt) => opt.value === formData?.transaction_owner?.value
                        )}
                    />
                </Col>

                {formType === "Buyer" && (
                    <Col md="6">
                        <label>Type</label>
                        <Select
                            name="buyer_type"
                            isClearable={true}
                            className="basic-single"
                            classNamePrefix="select"
                            options={buyerTypeOptions}
                            onChange={handleSelectChange}
                            value={buyerTypeOptions.find(
                                (opt) => opt.label === formData?.buyer_type
                            )}
                        />
                    </Col>
                )}

                {formType === "Seller" && (
                    <Col md="6">
                        <label>Type</label>
                        <Select
                            name="seller_type"
                            isClearable={true}
                            className="basic-single"
                            classNamePrefix="select"
                            options={sellerTypeOptions}
                            onChange={handleSelectChange}
                            value={sellerTypeOptions.find(
                                (opt) => opt.label === formData?.seller_type
                            )}
                        />
                    </Col>
                )}

                <Col md="6">
                    <label>Status</label>
                    <Select
                        name="property_status"
                        isClearable={true}
                        className="basic-single"
                        classNamePrefix="select"
                        options={propertyStatus}
                        onChange={handleSelectChange}
                        value={propertyStatus.find(
                            (opt) => opt.label === formData?.property_status
                        )}
                    />
                </Col>

                <Col md="6">
                    <label>Buyer / Tenant</label>
                    <AsyncSelect
                        loadOptions={loadOptions(BuyersOrTenants)}
                        defaultOptions
                        name="buyer_tenant"
                        isClearable={true}
                        components={{ MenuList: CustomMenuList }}
                        placeholder="Select an option"
                        onChange={(option) => handleAsyncSelectChange("buyer_tenant", option)}
                        value={BuyersOrTenants.find(
                            (opt) => opt.label === formData?.buyer_tenant
                        )}
                    />
                </Col>
                <Col md="6">
                    <label>Seller / Landlord</label>
                    <AsyncSelect
                        loadOptions={loadOptions(SellersOrLandlords)}
                        defaultOptions
                        name="seller_landlord"
                        isClearable={true}
                        components={{ MenuList: CustomMenuList }}
                        placeholder="Select an option"
                        onChange={(option) => handleAsyncSelectChange("seller_landlord", option)}
                        value={SellersOrLandlords.find(
                            (opt) => opt.label === formData?.seller_landlord
                        )}
                    />
                </Col>
            </Row>
        </div>
    )
};

export default DealType;
