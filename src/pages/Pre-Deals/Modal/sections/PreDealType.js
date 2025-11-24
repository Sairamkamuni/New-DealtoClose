import React from "react";
import { Row, Col } from "reactstrap";

const PreDealType = ({ formType, setFormType, formData, handleChange }) => {
    return (
        <div>
            <h3 className="fw-bold mb-3">Pre-Deal Type</h3>
            <div className="mb-4">
                <button className={`btn me-3 w-25 ${formType === "Buyer" ? "btn-primary" : "btn-outline-primary"}`}
                    role="button" onClick={() => setFormType("Buyer")} >Buyer / Tenant</button>
                <button className={`btn w-25 ${formType === "Seller" ? "btn-primary" : "btn-outline-primary"}`}
                    role="button" onClick={() => setFormType("Seller")}>Seller / Landlord</button>
            </div>
            <div id="section-1" >
                <Row>
                    <Col md="6" className="mb-3">
                        <label>Transaction Owner</label>
                        <input type="text" name="transaction_owner" className="form-control" placeholder="Search team Member..."
                            value={formData.transaction_owner || ""} onChange={handleChange} />
                    </Col>
                    <Col md="6" className="mb-3">
                        <label>Type</label>
                        <input type="text" name="type" className="form-control" placeholder="Select Type..."
                            value={formData.type || ""} onChange={handleChange} />
                    </Col>
                    <Col md="6" className="mb-3">
                        <label>Buyer / Tenant</label>
                        <input type="text" name="buyer_tenant" className="form-control" placeholder="Search Contact..."
                            value={formData.buyer_tenant || ""} onChange={handleChange} />
                    </Col>
                    <Col md="6" className="mb-3">
                        <label>Seller / Landlord</label>
                        <input type="text" name="seller_landlord" className="form-control" placeholder="Search Contact..."
                            value={formData.seller_landlord || ""} onChange={handleChange} />
                    </Col>
                    <Col md="12" className="mb-3">
                        <label>Template</label>
                        <input type="text" name="template" className="form-control" placeholder="Search Template..."
                            value={formData.template || ""} onChange={handleChange} />
                    </Col>
                </Row>
            </div>
        </div>
    )
};

export default PreDealType;
