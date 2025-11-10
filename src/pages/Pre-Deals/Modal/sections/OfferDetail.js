import React from "react";
import { Row, Col } from "reactstrap";

const OfferDetail = ({ formType, setFormType }) => {
    return (
        <div id="section-3">
            <div className="d-block mt-3">
                <h3 className="modal-title fw-bold mb-1">Offer Detail&apos;s</h3>
            </div>
            <Row className="mt-2">
                <Col>
                    <div className="mb-2">
                        <label>{formType === "Buyer" ? "Purchase Price" : "Listing Price"}</label>
                        <span className="position-absolute" style={{ top: "63%", left: "20px", transform: "translateY(-50%)", color: "#6c757d", fontSize: "18px" }} > $ </span>
                        <input type="text" name={formType === "Buyer" ? "purchase_price" : "listing_price"} className="form-control ps-4"
                            placeholder={formType === "Buyer" ? "Enter Purchase Price..." : "Enter Listing Price..."}
                        />
                    </div>
                </Col>
                <Col>
                    {formType === "Buyer" && (
                        <div className="mb-2">
                            <label>1st Initial Deposit (EMD)</label>
                            <input type="text" name="1st_initial_deposit" className="form-control" placeholder="Enter 1st Initial Deposit (EMD)"
                            />
                        </div>
                    )}
                    {formType === "Seller" && (
                        <div className="mb-2">
                            <label>Compensation too Listing Agent</label>
                            <div className="input-group">
                                <span className="input-group-text">$</span>
                                <input
                                    type="text"
                                    name="compensation_too_listing_agent"
                                    onChange={(e) => handleChange('compensation_too_listing_agent', e.target.value)}
                                    className="form-control" />
                            </div>
                        </div>
                    )}
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    {formType === "Buyer" && (
                        <div className="mb-2">
                            <label>1st EMD Due Days</label>
                            <input type="text" name="1st_md_due_days" className="form-control" placeholder="Enter 1st EMD Due Days"
                            />
                        </div>
                    )}
                    {formType === "Seller" && (
                        <div className="mb-2">
                            <label>Compensation too Buyer Agent</label>
                            <div className="input-group">
                                <span className="input-group-text">$</span>
                                <input
                                    type="text"
                                    name="compensation_too_buyer_agent"
                                    onChange={(e) => handleChange('compensation_too_buyer_agent', e.target.value)}
                                    className="form-control" />
                            </div>
                        </div>
                    )}
                </Col>
                <Col>
                    <div className="mb-2 position-relative">
                        <label>{formType === "Buyer" ? "2nd Initial Deposit (EMD)" : "Transaction Fee"}</label>
                        <span className="position-absolute" style={{ top: "70%", left: "8px", transform: "translateY(-50%)", color: "#6c757d", fontSize: "18px" }} > $ </span>
                        <input
                            type="text"
                            name={formType === "Buyer" ? "2nd_initial_deposit" : "transaction_fee"}
                            className="form-control ps-4"
                            placeholder={formType === "Buyer" ? "Enter 2nd Initial Deposit (EMD)" : "Enter Transaction Fee"}
                        />
                    </div>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    {formType === "Buyer" && (
                        <div className="mb-2">
                            <label>2nd EMD Due Days</label>
                            <input type="text" name="2nd_md_due_days" className="form-control" placeholder="Enter 2nd EMD Due Days"
                            />
                        </div>
                    )}
                </Col>
                <Col>
                    {formType === "Buyer" && (
                        <div className="mb-2">
                            <label>Loan Value</label>
                            <input type="text" name="loan_value" className="form-control" placeholder="Enter Loan Value"
                            />
                        </div>
                    )}
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    {formType === "Buyer" && (
                        <div className="mb-2">
                            <label>Inspection Period (Days)</label>
                            <input type="text" name="inspection_period" className="form-control" placeholder="Enter Inspection Period (Days)"
                            />
                        </div>
                    )}
                </Col>
                <Col>
                    {formType === "Buyer" && (
                        <div className="mb-2">
                            <label>Compensation to Buyer&apos;s Agent</label>
                            <input type="text" name="loan_value" className="form-control" placeholder="Enter Compensation to Buyer's Agent"
                            />
                        </div>
                    )}
                </Col>
            </Row>
        </div>
    )
};

export default OfferDetail;
