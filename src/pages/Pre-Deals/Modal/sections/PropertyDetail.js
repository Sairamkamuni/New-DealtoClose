import React from "react";
import { Row, Col, } from "reactstrap";

const PropertyDetail = ({ formType, formData, handleChange }) => {
    return (
        <div id="section-2">
            <div className="d-block mt-3 mb-2">
                <h3 className="modal-title fw-bold mb-1">Property Detail</h3>
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
                    <label>County</label>
                    <input type="text" name="county" className="form-control" placeholder="Enter County"
                        value={formData?.county || ""} onChange={handleChange} />
                </Col>
                {formType === "Buyer" && (
                    <Col md="6">
                        <label>MLS Number</label>
                        <input type="text" name="mls_number" className="form-control" placeholder="Enter MLS Number"
                            value={formData?.mls_number || ""} onChange={handleChange} />
                    </Col>
                )}
                <Col md="6">
                    <label>Parcel ID</label>
                    <input type="text" name="parcel_id" className="form-control" placeholder="Enter Parcel ID"
                        value={formData?.parcel_id || ""} onChange={handleChange} />
                </Col>
                <Col md="6">
                    <label>Subdivision Name</label>
                    <input type="text" name="subdivision_name" className="form-control" placeholder="Enter Subdivision Name"
                        value={formData?.subdivision_name || ""} onChange={handleChange} />
                </Col>
                <Col md="6">
                    <label>HOA Fee</label>
                    <span className="position-absolute"
                        style={{ top: "70%", left: "15px", transform: "translateY(-50%)", color: "#6c757d", fontSize: "18px" }} > $ </span>
                    <input
                        type="text"
                        name="hoa_fee"
                        className="form-control ps-4"
                        value={formData?.hoa_fee || ""}
                        onChange={handleChange}
                        placeholder="Enter HOA Fee"
                    />
                </Col>
                <Col md="6">
                    <label>Legal Description</label>
                    <input type="text" name="legal_description" className="form-control" placeholder="Enter Legal Description"
                        value={formData?.legal_description || ""} onChange={handleChange} />
                </Col>
                <Col md="12">
                    <label>Equipment&apos;s Included</label>
                    <textarea type="textarea" rows="4" name="equipments_Included" className="form-control" placeholder="Enter Equipment from MLS..."
                        value={formData?.equipments_Included || ""} onChange={handleChange} />
                </Col>
            </Row>

        </div>
    )
};

export default PropertyDetail;
