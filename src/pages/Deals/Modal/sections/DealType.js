import React from "react";
import { Row, Col } from "reactstrap";
import { transactionOwner, propertyStatus, buyerTypeOptions, sellerTypeOptions, BuyersOrTenants, SellersOrLandlords } from "AllDummyData/DealsDummyData";
import AllButton from "pages/utils/allButton";
import { InputField, SelectField, AsyncSelectField } from "pages/InputFields/InputFields";

const DealType = ({ formType, setFormType, formData, handleChange, handleSelectChange, handleAsyncSelectChange }) => {

    return (
        <div>
            <h3 className="fw-bolder mb-3">Deal Type</h3>
            <div className="mb-4 d-flex gap-2">
                <AllButton label="Buyer / Tenant" outline={formType !== "Buyer"} width="240px" onClick={() => setFormType("Buyer")} />
                <AllButton label="Seller / Landlord" outline={formType !== "Seller"} width="240px" onClick={() => setFormType("Seller")} />
            </div>

            <Row>
                <Col>
                    <InputField label="Property Address" type="text" name="property_address" placeholder="Search address from MLS or Google..."
                        value={formData?.property_address} onChange={handleChange} />
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
                    <SelectField label="Transaction Owner" name="transaction_owner" options={transactionOwner} value={formData?.transaction_owner}
                        onChange={handleSelectChange} placeholder="Select Type..." />
                </Col>

                {formType === "Buyer" && (
                    <Col md="6">
                        <SelectField label="Type" name="buyer_type" options={buyerTypeOptions} value={formData?.buyer_type}
                            onChange={handleSelectChange} placeholder="Select Type..." />
                    </Col>
                )}

                {formType === "Seller" && (
                    <Col md="6">
                        <SelectField label="Type" name="seller_type" options={sellerTypeOptions} value={formData?.seller_type}
                            onChange={handleSelectChange} placeholder="Select Type..." />
                    </Col>
                )}

                <Col md="6">
                    <SelectField label="Status" name="property_status" options={propertyStatus} value={formData?.property_status}
                        onChange={handleSelectChange} placeholder="Select Type..." />
                </Col>

                <Col md="6">
                    <AsyncSelectField label="Buyer / Tenant" name="buyer_tenant" optionsList={BuyersOrTenants} value={formData?.buyer_tenant}
                        onChange={handleAsyncSelectChange} />
                </Col>
                <Col md="6">
                    <AsyncSelectField label="Seller / Landlord" name="seller_landlord" optionsList={SellersOrLandlords} value={formData?.seller_landlord}
                        onChange={handleAsyncSelectChange} />
                </Col>
            </Row>
        </div>
    )
};

export default DealType;
