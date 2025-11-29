import React from "react";
import { Row, Col, } from "reactstrap";
import { InputField } from "pages/InputFields/InputFields";

const PropertyDetail = ({ formType, formData, handleChange }) => {
    return (
        <div id="section-2">
            <div className="d-block mt-3 mb-2">
                <h3 className="modal-title fw-bold mb-1">Property Detail</h3>
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
                    <InputField label="County" type="text" name="county" value={formData?.county} onChange={handleChange} />
                </Col>
                {formType === "Buyer" && (
                    <Col md="6">
                        <InputField label="MLS Number" type="text" name="mls_number" value={formData?.mls_number} onChange={handleChange} />
                    </Col>
                )}
                <Col md="6">
                    <InputField label="Parcel ID" type="text" name="parcel_id" value={formData?.parcel_id} onChange={handleChange} />
                </Col>
                <Col md="6">
                    <InputField label="Subdivision Name" type="text" name="subdivision_name" value={formData?.subdivision_name} onChange={handleChange} />
                </Col>
                <Col md="6">
                    <InputField label="HOA Fee" type="text" name="hoa_fee" showDollar={true} value={formData?.hoa_fee} onChange={handleChange} />
                </Col>
                <Col md="6">
                    <InputField label="Legal Description" type="text" name="legal_description" value={formData?.legal_description} onChange={handleChange} />
                </Col>
                <Col md="12">
                    <InputField label="Equipment's Included" type="textarea" rows="4" name="equipments_Included"
                        value={formData?.equipments_Included} onChange={handleChange} />
                        
                </Col>
            </Row>

        </div>
    )
};

export default PropertyDetail;
