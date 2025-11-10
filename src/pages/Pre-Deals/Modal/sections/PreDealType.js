import React from "react";
import { Row, Col } from "reactstrap";

const PreDealType = ({ formType, setFormType }) => {
    return (
        <div>
            <h3 className="fw-bold mb-3">Pre-Deal Type</h3>
            <div className="mb-4">
                <button className={`btn me-3 w-25 ${formType === "Buyer" ? "btn-primary" : "btn-outline-primary"}`} role="button" onClick={() => setFormType("Buyer")} >Buyer / Tenant</button>
                <button className={`btn w-25 ${formType === "Seller" ? "btn-primary" : "btn-outline-primary"}`} role="button" onClick={() => setFormType("Seller")}>Seller / Landlord</button>
            </div>
            <div id="section-1" >
                <Row>
                    <Col>
                        <div className="mb-2">
                            <label>Transaction Owner</label>
                            <input type="text" name="transaction_owner" className="form-control" placeholder="Search team Member..." />
                        </div>
                    </Col>
                    <Col>
                        <div className="mb-2">
                            <label>Type</label>
                            <input type="text" name="type" className="form-control" placeholder="Select Type..." />
                        </div>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <div className="mb-2">
                            <label>Buyer / Tenant</label>
                            <input type="text" name="buyer" className="form-control" placeholder="Search Contact..." />
                        </div>
                    </Col>
                    <Col>
                        <div className="mb-2">
                            <label>Seller / Landlord</label>
                            <input type="text" name="seller" className="form-control" placeholder="Search Contact..." />
                        </div>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <div className="mb-2">
                            <label>Template</label>
                            <input type="text" name="template" className="form-control" placeholder="Search Template..." />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
};

export default PreDealType;
