import React from "react";
import { Row, Col, CardTitle } from "reactstrap";

const PropertyDetail = ({ formType, formData, handleChange }) => {
    return (
        <div id="section-2">
            <div className="d-block mt-2">
                <h3 className="modal-title fw-bold mb-1">Property Detail</h3>
            </div>
            <Row>
                <Col>
                    <label>Property Address</label>
                    <input type="text" name="property_address" className="form-control" placeholder="Search address from MLS or Google Maps..."
                        value={formData.property_address || ""} onChange={handleChange} />
                </Col>
            </Row>
            <div className="mt-4 mb-3 bg-light p-3 rounded border border-dark">
                <p className="modal-title fw-normal mb-1">Property Address</p>
                <CardTitle tag="h2" className="mb-3 mt-2 fw-bolder" style={{ fontSize: "20px" }}>
                    123 Main St, City Name, FL 333414
                </CardTitle>
                <div className="d-flex gap-4">
                    <p className="modal-title fw-normal mb-1">Listed By: Full Name</p>
                    <p className="modal-title fw-normal mb-1">Brokerage: ABC Realty</p>
                </div>
            </div>
            <Row className="mt-4">
                <Col md="6" className="mb-3">
                    <label>County</label>
                    <input type="text" name="county" className="form-control" placeholder="Enter County"
                        value={formData.county || ""} onChange={handleChange} />
                </Col>
                {formType === "Buyer" && (
                    <Col md="6" className="mb-3">
                        <label>MLS Number</label>
                        <input type="text" name="mls_number" className="form-control" placeholder="Enter MLS Number"
                            value={formData.mls_number || ""} onChange={handleChange} />
                    </Col>
                )}
                <Col md="6" className="mb-3">
                    <label>Parcel ID</label>
                    <input type="text" name="parcel_id" className="form-control" placeholder="Enter Parcel ID"
                        value={formData.parcel_id || ""} onChange={handleChange} />
                </Col>
                <Col md="6" className="mb-3">
                    <label>Subdivision Name</label>
                    <input type="text" name="subdivision_name" className="form-control" placeholder="Enter Subdivision Name"
                        value={formData.subdivision_name || ""} onChange={handleChange} />
                </Col>

                <Col md="6" className="mb-3">
                    <label>Legal Description</label>
                    <input type="text" name="legal_description" className="form-control" placeholder="Enter Legal Description"
                        value={formData.legal_description || ""} onChange={handleChange} />
                </Col>
                <Col md="6" className="mb-3">
                    <label>HOA Fee</label>
                    <input type="text" name="hoa_fee" className="form-control" placeholder="Enter HOA Fee"
                        value={formData.hoa_fee || ""} onChange={handleChange} />
                </Col>
                <Col md="12" className="mb-3">
                    <label>Equipment&apos;s Included</label>
                    <textarea type="textarea" rows="4" name="equipments_Included" className="form-control" placeholder="Enter Equipment from MLS..."
                        value={formData.equipments_Included || ""} onChange={handleChange} />
                </Col>
            </Row>
        </div>
    )
};

export default PropertyDetail;
