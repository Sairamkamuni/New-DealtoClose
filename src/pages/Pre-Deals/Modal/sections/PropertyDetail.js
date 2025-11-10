import React from "react";
import { Row, Col, CardTitle } from "reactstrap";

const PropertyDetail = ({ formType }) => {
    return (
        <div id="section-2">
            <div className="d-block mt-2">
                <h3 className="modal-title fw-bold mb-1">Property Detail</h3>
            </div>
            <Row>
                <Col>
                    <div className="mb-2">
                        <label>Property Address</label>
                        <input type="text" name="template" className="form-control" placeholder="Search address from MLS or Google Maps..."
                        />
                    </div>
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
            <Row className="mt-2">
                <Col md={6}>
                    <div className="mb-2" >
                        <label>County</label>
                        <input type="text" name="county" className="form-control" placeholder="Enter County"
                        />
                    </div>
                </Col>
                {formType === "Buyer" && (
                    <Col md={6}>
                        <div className="mb-2">
                            <label>MLS Number</label>
                            <input type="text" name="mls_number" className="form-control" placeholder="Enter MLS Number"
                            />
                        </div>
                    </Col>
                )}
                <Col md={6}>
                    <div className="mb-2">
                        <label>Parcel ID</label>
                        <input type="text" name="parcel_ID" className="form-control" placeholder="Enter Parcel ID"
                        />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="mt-2">
                        <label>Subdivision Name</label>
                        <input type="text" name="subdivision_name" className="form-control" placeholder="Enter Subdivision Name"
                        />
                    </div>
                </Col>

                <Col md={6}>
                    <div className="mt-2">
                        <label>Legal Description</label>
                        <input type="text" name="legal_description" className="form-control" placeholder="Enter Legal Description"
                        />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="mt-2">
                        <label>HOA Fee</label>
                        <input type="text" name="hoa_fee" className="form-control" placeholder="Enter HOA Fee"
                        />
                    </div>
                </Col>
                <Col >
                    <div className="mt-2">
                        <label>Equipment&apos;s Included</label>
                        <input type="text" name="template" className="form-control" placeholder="Search address from MLS or Google Maps..."
                        />
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default PropertyDetail;
