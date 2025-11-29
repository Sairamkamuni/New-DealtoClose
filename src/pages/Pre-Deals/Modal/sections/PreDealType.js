import React from "react";
import { Row, Col } from "reactstrap";
import AllButton from "pages/utils/allButton";
import { buyerTypeOptions, sellerTypeOptions, BuyersOrTenants, SellersOrLandlords, Templates } from "AllDummyData/DealsDummyData";
import { AsyncSelectField, SelectField } from "pages/InputFields/InputFields";


const PreDealType = ({ formType, setFormType, formData, handleSelectChange, handleAsyncSelectChange }) => {
    return (
        <div>
            <h3 className="fw-bold mb-3">Pre-Deal Type</h3>
            <div className="mb-4 d-flex gap-2">
                <AllButton label="Buyer / Tenant" outline={formType !== "Buyer"} width="240px" onClick={() => setFormType("Buyer")} />
                <AllButton label="Seller / Landlord" outline={formType !== "Seller"} width="240px" onClick={() => setFormType("Seller")} />
            </div>

            <div id="section-1" >
                <Row className="g-3">
                    <Col md="6">
                        <AsyncSelectField label="Transaction Owner" name="transaction_owner" optionsList={BuyersOrTenants}
                            value={formData?.transaction_owner} onChange={handleAsyncSelectChange} />
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
                        <AsyncSelectField label="Buyer / Tenant" name="buyer_tenant" optionsList={BuyersOrTenants} value={formData?.buyer_tenant}
                            onChange={handleAsyncSelectChange} />
                    </Col>

                    <Col md="6">
                        <AsyncSelectField label="Seller / Landlord" name="seller_landlord" optionsList={SellersOrLandlords} value={formData?.seller_landlord}
                            onChange={handleAsyncSelectChange} />
                    </Col>

                    <Col md="12">
                        <AsyncSelectField label="Template" name="template" optionsList={Templates} value={formData?.template}
                            onChange={handleAsyncSelectChange} />

                    </Col>
                </Row>
            </div>
        </div>
    )
};

export default PreDealType;
