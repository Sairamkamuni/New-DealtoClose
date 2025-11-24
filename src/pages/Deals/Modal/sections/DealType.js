import React from "react";
import { Row, Col } from "reactstrap";
import AsyncSelect from "react-select/async";
import Select, { components } from "react-select";
import { propertyStatus, buyerTypeOptions } from "AllDummyData/DealsDummyData";
import AllButton, { FaPlusButton } from "pages/utils/allButton";

const DealType = ({ formType, setFormType, formData, handleChange }) => {

    // Load options asynchronously
    const loadOptions = (inputValue, callback) => {
        const filtered = buyerTypeOptions.filter((opt) =>
            opt.label.toLowerCase().includes(inputValue.toLowerCase())
        );
        callback(filtered);
    };

    // Custom Add New Button inside the dropdown menu
    const CustomMenuList = (props) => (
        <components.MenuList {...props}>
            {props.children}
            <FaPlusButton
                label="Add New"
                width="100%"
                outline
                onClick={(e) => e.stopPropagation()}
                className="mt-2"
            />
        </components.MenuList>
    );

    return (
        <div>
            <h3 className="fw-bold mb-3">Pre-Deal Type</h3>

            {/* BUTTON TO SELECT TYPE */}
            <div className="mb-4 d-flex gap-2">
                <AllButton
                    label="Buyer / Tenant"
                    outline={formType !== "Buyer"}
                    width="240px"
                    onClick={() => setFormType("Buyer")}
                />
                <AllButton
                    label="Seller / Landlord"
                    outline={formType !== "Seller"}
                    width="240px"
                    onClick={() => setFormType("Seller")}
                />
            </div>

            <div id="section-1" className="mb-3">

                {/* PROPERTY ADDRESS */}
                <Row>
                    <Col className="mb-2">
                        <label>Property Address</label>
                        <input
                            type="text"
                            name="property_address"
                            className="form-control"
                            value={formData.property_address || ""}
                            onChange={handleChange}
                            placeholder="Search address from MLS or Google Maps..."
                        />
                    </Col>
                </Row>

                {/* SUMMARY BOX */}
                <Row>
                    <Col className="mt-2">
                        <div className="mt-2 mb-4 bg-light p-3 rounded border border-dark">
                            <p className="fw-normal mb-1">Property Address</p>
                            <h2
                                className="fw-bolder"
                                style={{ fontSize: "16px" }}
                            >
                                123 Main St, City Name, FL 333414
                            </h2>
                            <div className="d-flex gap-4">
                                <p className="fw-normal mb-1">Listed By: Full Name</p>
                                <p className="fw-normal mb-1">Brokerage: ABC Realty</p>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* OWNER + TYPE */}
                <Row>
                    <Col className="mb-2">
                        <label>Transaction Owner</label>
                        <input
                            type="text"
                            name="transaction_owner"
                            className="form-control"
                            value={formData.transaction_owner || ""}
                            onChange={handleChange}
                            placeholder="Search team Member..."
                        />
                    </Col>

                    <Col className="mb-2">
                        <label>Type</label>
                        <AsyncSelect
                            loadOptions={loadOptions}
                            defaultOptions
                            isClearable
                            name="type"
                            value={buyerTypeOptions.find(
                                (x) => x.value === formData.type
                            ) || null}
                            onChange={(selected) =>
                                handleChange("type", selected ? selected.value : "")
                            }
                            components={{ MenuList: CustomMenuList }}
                            placeholder="Select an option"
                        />
                    </Col>
                </Row>

                {/* STATUS + BUYER + SELLER */}
                <Row>
                    <Col className="mb-2">
                        <label>Status</label>
                        <Select
                            name="property_status"
                            isClearable
                            options={propertyStatus.map((item) => ({
                                value: item.id,
                                label: item.label,
                            }))}
                            value={
                                propertyStatus
                                    .map((item) => ({
                                        value: item.id,
                                        label: item.label,
                                    }))
                                    .find(
                                        (opt) =>
                                            opt.value === formData.property_status
                                    ) || null
                            }
                            onChange={(option) =>
                                handleChange(
                                    "property_status",
                                    option ? option.value : ""
                                )
                            }
                            placeholder="Select Status"
                        />
                    </Col>

                    <Col className="mb-2">
                        <label>Buyer / Tenant</label>
                        <input
                            type="text"
                            name="buyer"
                            className="form-control"
                            value={formData.buyer || ""}
                            onChange={handleChange}
                            placeholder="Search Contact..."
                        />
                    </Col>

                    <Col className="mb-2">
                        <label>Seller / Landlord</label>
                        <input
                            type="text"
                            name="seller"
                            className="form-control"
                            value={formData.seller || ""}
                            onChange={handleChange}
                            placeholder="Search Contact..."
                        />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default DealType;
