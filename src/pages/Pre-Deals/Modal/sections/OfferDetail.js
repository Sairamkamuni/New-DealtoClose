import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import Select from "react-select"
import { financeTypes } from "constants/config";
import "../../../../assets/custom.css"

const OfferDetail = ({ formType, handleChange, formData, handleSelectChange }) => {

    const [loanValue, SetLoanValue] = useState("%");
    const [compensationBuyer, SetCompensationBuyer] = useState("$");
    const [compensationSeller, SetCompensationSeller] = useState("%");

    return (
        <div id="section-3">
            <div className="d-block mt-3">
                <h3 className="modal-title fw-bold mb-1">Offer Detail&apos;s</h3>
            </div>
            <Row className="mt-1 g-3">
                {formType === "Buyer" && (
                    <Col md="6">
                        <div className=" position-relative">
                            <label>Purchase Price</label>
                            <span className="position-absolute"
                                style={{ top: "70%", left: "8px", transform: "translateY(-50%)", color: "#6c757d", fontSize: "18px" }} > $ </span>
                            <input type="text" name="purchase_price"
                                className="form-control ps-4"
                                value={formData?.purchase_price || ""}
                                onChange={handleChange}
                                placeholder="Enter Purchase Price" />
                        </div>
                    </Col>
                )}

                {formType === "Seller" && (
                    <Col md="6">
                        <div className="mb-2 position-relative">
                            <label>Listing Price</label>
                            <span className="position-absolute"
                                style={{ top: "70%", left: "8px", transform: "translateY(-50%)", color: "#6c757d", fontSize: "18px" }} > $ </span>
                            <input type="text" name="listing_price"
                                className="form-control ps-4"
                                value={formData?.listing_price || ""}
                                onChange={handleChange}
                                placeholder="Enter Listing Price" />
                        </div>
                    </Col>
                )}

                {formType === "Buyer" && (
                    <>
                        <Col md="6">
                            <div className=" position-relative">
                                <label>1st Initial Deposit (EMD)</label>
                                <span className="position-absolute"
                                    style={{ top: "70%", left: "8px", transform: "translateY(-50%)", color: "#6c757d", fontSize: "18px" }} > $ </span>
                                <input type="text" name="initial_deposit"
                                    className="form-control ps-4"
                                    value={formData?.initial_deposit || ""}
                                    onChange={handleChange}
                                    placeholder="Enter 1st Initial Deposit (EMD)" />
                            </div>
                        </Col>

                        <Col md="6">
                            <label>1st Escrow Due (Days)</label>
                            <input name="first_escrow_days"
                                className="form-control"
                                type="number"
                                value={formData?.first_escrow_days || ""}
                                onChange={handleChange}
                            />
                        </Col>

                        <Col md="6">
                            <div className=" position-relative">
                                <label>2nd Initial Deposit (EMD)</label>
                                <span className="position-absolute"
                                    style={{ top: "70%", left: "8px", transform: "translateY(-50%)", color: "#6c757d", fontSize: "18px" }} > $ </span>
                                <input
                                    type="text"
                                    name="additional_deposit"
                                    className="form-control ps-4"
                                    value={formData?.additional_deposit || ""}
                                    onChange={handleChange}
                                    placeholder="Enter 2nd Initial Deposit (EMD)"
                                />
                            </div>
                        </Col>

                        <Col md="6">
                            <label>2nd Escrow Due (Days)</label>
                            <input name="second_escrow_days"
                                className="form-control"
                                type="number"
                                value={formData?.second_escrow_days || ""}
                                onChange={handleChange}
                            />
                        </Col>
                    </>
                )}
                {formType === "Buyer" && (
                    <Col md="6">
                        <label>Loan Value</label>
                        <Row>
                            <div className="d-flex  gap-2 ">
                                <Col md={2} className="d-flex align-items-center"
                                    style={{ border: "1px solid #dad1e0", height: "36px", borderRadius: "8px", padding: "0" }} >
                                    <div onClick={() => SetLoanValue("%")}
                                        style={{
                                            background: loanValue === "%" ? "#243e79" : "transparent",
                                            color: loanValue === "%" ? "white" : "#231f20", display: "flex", alignItems: "center", justifyContent: "center",
                                            padding: "6px 14px", borderRadius: "6px", cursor: "pointer", fontWeight: 600, width: "50%"
                                        }} >
                                        %
                                    </div>
                                    <div onClick={() => SetLoanValue("$")}
                                        style={{
                                            background: loanValue === "$" ? "#243e79" : "transparent",
                                            color: loanValue === "$" ? "white" : "#231f20", display: "flex", alignItems: "center", justifyContent: "center",
                                            padding: "6px 14px", borderRadius: "6px", marginLeft: "4px", cursor: "pointer", fontWeight: 600, width: "50%"
                                        }} >
                                        $
                                    </div>
                                </Col>

                                <Col md={10}>
                                    <div className="d-flex">
                                        <input type="text" name="loan_value" className="form-control fixed-width"
                                            value={formData.loan_value || ""} onChange={handleChange} />
                                    </div>
                                </Col>
                            </div>
                        </Row>
                    </Col>
                )}

                {formType === "Seller" && (
                    <Col md="6">
                        <label>Compensation to Listing Agent</label>
                        <Row>
                            <div className="d-flex  gap-2 ">
                                <Col md={2} className="d-flex align-items-center"
                                    style={{ border: "1px solid #dad1e0", height: "36px", borderRadius: "8px", padding: "0" }} >
                                    <div onClick={() => SetCompensationSeller("%")}
                                        style={{
                                            background: compensationSeller === "%" ? "#243e79" : "transparent",
                                            color: compensationSeller === "%" ? "white" : "#231f20", display: "flex",
                                            alignItems: "center", justifyContent: "center",
                                            padding: "6px 14px", borderRadius: "6px", cursor: "pointer", fontWeight: 600, width: "50%"
                                        }} >
                                        %
                                    </div>
                                    <div onClick={() => SetCompensationSeller("$")}
                                        style={{
                                            background: compensationSeller === "$" ? "#243e79" : "transparent",
                                            color: compensationSeller === "$" ? "white" : "#231f20", display: "flex",
                                            alignItems: "center", justifyContent: "center",
                                            padding: "6px 14px", borderRadius: "6px", marginLeft: "4px", cursor: "pointer", fontWeight: 600, width: "50%"
                                        }} >
                                        $
                                    </div>
                                </Col>

                                <Col md={10}>
                                    <div className="d-flex">
                                        <input
                                            type="text"
                                            name="compensation_to_listing_agent"
                                            className="form-control fixed-width"
                                            onChange={handleChange}
                                            value={formData.compensation_to_listing_agent || ""}
                                            style={{ width: "322px !important" }}
                                        />
                                    </div>
                                </Col>
                            </div>
                        </Row>
                    </Col>
                )}

                <Col md="6">
                    <label>Compensation to Buyer&apos;s Agent</label>
                    <Row>
                        <div className="d-flex  gap-2 ">
                            <Col md={2} className="d-flex align-items-center"
                                style={{ border: "1px solid #dad1e0", height: "36px", borderRadius: "8px", padding: "0" }} >
                                <div onClick={() => SetCompensationBuyer("%")}
                                    style={{
                                        background: compensationBuyer === "%" ? "#243e79" : "transparent",
                                        color: compensationBuyer === "%" ? "white" : "#231f20", display: "flex", alignItems: "center", justifyContent: "center",
                                        padding: "6px 14px", borderRadius: "6px", cursor: "pointer", fontWeight: 600, width: "50%"
                                    }} >
                                    %
                                </div>
                                <div onClick={() => SetCompensationBuyer("$")}
                                    style={{
                                        background: compensationBuyer === "$" ? "#243e79" : "transparent",
                                        color: compensationBuyer === "$" ? "white" : "#231f20", display: "flex", alignItems: "center", justifyContent: "center",
                                        padding: "6px 14px", borderRadius: "6px", marginLeft: "4px", cursor: "pointer", fontWeight: 600, width: "50%"
                                    }} >
                                    $
                                </div>
                            </Col>

                            <Col md="10">
                                <div className="d-flex">
                                    <input type="text" name="compensation_to_buyer" className="form-control fixed-width"
                                        value={formData.compensation_to_buyer || ""} onChange={handleChange} />
                                </div>
                            </Col>
                        </div>
                    </Row>
                </Col>
                <Col md="6"  >
                    <label>Transaction Fee</label>
                    <input type="text" name="transaction_fee" className="form-control" placeholder="Enter Transaction Fee"
                        value={formData.transaction_fee || ""} onChange={handleChange} />
                </Col>

                {formType === "Buyer" && (
                    <Col md="6">
                        <label>Cash to Close (Auto Caluculated)</label>
                        <input type="text" name="cash_to_close" className="form-control" placeholder="Auto Caluculated"
                            value={formData.cash_to_close || ""} onChange={handleChange} />
                    </Col>
                )}

                {formType === "Buyer" && (
                    <Col md="6"  >
                        <label>Loan Commitment Period (Days)</label>
                        <input type="text" name="loan_commitment_period" className="form-control" placeholder="Auto Caluculated"
                            value={formData.loan_commitment_period || ""} onChange={handleChange} />
                    </Col>
                )}

                {formType === "Buyer" && (
                    <Col md="6" className="mb-3">
                        <label>Inspection Period (Days)</label>
                        <input type="text" name="inspection_period" className="form-control" placeholder="Enter Inspection Period (Days)"
                            value={formData.inspection_period || ""} onChange={handleChange} />
                    </Col>
                )}

                {formType === "Buyer" && (
                    <Col md="6"  >
                        <label>Finance Type</label>
                        <Select
                            name="finance_type"
                            isClearable={true}
                            className="basic-single"
                            classNamePrefix="select"
                            options={financeTypes}
                            onChange={handleSelectChange}
                            value={financeTypes.find((opt) => opt.label === formData?.finance_type)}
                        />
                    </Col>
                )}
            </Row>
        </div>
    )
};

export default OfferDetail;
