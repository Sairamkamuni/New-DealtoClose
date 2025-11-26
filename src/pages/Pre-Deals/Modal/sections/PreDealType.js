import React from "react";
import { Row, Col } from "reactstrap";
import AsyncSelect from 'react-select/async';
import Select, { components } from "react-select"
import AllButton, { FaPlusButton } from "pages/utils/allButton";
import { buyerTypeOptions, sellerTypeOptions, BuyersOrTenants, SellersOrLandlords, Templates } from "AllDummyData/DealsDummyData";


const PreDealType = ({ formType, setFormType, formData, handleSelectChange, handleAsyncSelectChange }) => {

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
            <h3 className="fw-bold mb-3">Pre-Deal Type</h3>
            <div className="mb-4 d-flex gap-2">
                <AllButton label="Buyer / Tenant" outline={formType !== "Buyer"} width="240px" onClick={() => setFormType("Buyer")} />
                <AllButton label="Seller / Landlord" outline={formType !== "Seller"} width="240px" onClick={() => setFormType("Seller")} />
            </div>

            <div id="section-1" >
                <Row className="g-3">
                    <Col md="6">
                        <label>Transaction Owner</label>
                        <AsyncSelect
                            loadOptions={loadOptions(BuyersOrTenants)}
                            defaultOptions
                            name="transaction_owner"
                            isClearable={true}
                            components={{ MenuList: CustomMenuList }}
                            placeholder="Select an option"
                            onChange={(option) => handleAsyncSelectChange("transaction_owner", option)}
                            value={BuyersOrTenants.find((opt) => opt.label === formData?.transaction_owner)}
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

                    <Col md="12">
                        <label>Template</label>
                        <AsyncSelect
                            loadOptions={loadOptions(Templates)}
                            defaultOptions
                            name="template"
                            isClearable={true}
                            components={{ MenuList: CustomMenuList }}
                            placeholder="Select an option"
                            onChange={(option) => handleAsyncSelectChange("template", option)}
                            value={Templates.find(
                                (opt) => opt.label === formData?.template
                            )}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
};

export default PreDealType;
