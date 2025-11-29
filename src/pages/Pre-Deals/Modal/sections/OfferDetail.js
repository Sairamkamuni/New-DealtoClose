import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { financeTypes } from "AllDummyData/DealsDummyData";
import "../../../../assets/custom.css"
import { InputField, SelectField, ToggleSelector } from "pages/InputFields/InputFields";

const OfferDetail = ({ formType, handleChange, formData, handleSelectChange }) => {

    const [loanValue, SetLoanValue] = useState("%");
    const [compensationBuyer, SetCompensationBuyer] = useState("fixed");
    const [compensationSeller, SetCompensationSeller] = useState("%");

    return (
        <div id="section-3">
            <div className="d-block mt-3">
                <h3 className="modal-title fw-bold mb-1">Offer Detail&apos;s</h3>
            </div>
            <Row className="mt-1 g-3">
                {formType === "Buyer" && (
                    <Col md="6">
                        <InputField label="Purchase Price" type="text" name="purchase_price" showDollar={true}
                            value={formData?.purchase_price} onChange={handleChange} />
                    </Col>
                )}

                {formType === "Seller" && (
                    <Col md="6">
                        <InputField label="Listing Price" type="text" name="listing_price" showDollar={true}
                            value={formData?.listing_price} onChange={handleChange} />
                    </Col>
                )}

                {formType === "Buyer" && (
                    <>
                        <Col md="6">
                            <InputField label="1st Initial Deposit (EMD)" type="text" name="initial_deposit" showDollar={true}
                                value={formData?.initial_deposit} onChange={handleChange} />
                        </Col>

                        <Col md="6">
                            <InputField label="1st Escrow Due (Days)" type="text" name="initial_escrow_days"
                                value={formData?.initial_escrow_days} onChange={handleChange} />
                        </Col>

                        <Col md="6">
                            <InputField label="2nd Initial Deposit (EMD)" type="text" name="additional_deposit"
                                value={formData?.additional_deposit} onChange={handleChange} />

                        </Col>

                        <Col md="6">
                            <InputField label="2nd Escrow Due (Days)" type="text" name="additional_escrow_days"
                                value={formData?.additional_escrow_days} onChange={handleChange} />
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
                    <Row>
                        <label>Compensation to Buyer&apos;s Agent</label>
                        <Col md="2">
                            <ToggleSelector options={[{ label: "%", value: "percentage" }, { label: "$", value: "fixed" }]}
                                value={compensationBuyer} onChange={SetCompensationBuyer} />
                        </Col>

                        <Col md="10">
                            <InputField type="text" name="compensation_to_buyer" width={true} value={formData?.compensation_to_buyer} onChange={handleChange} />
                        </Col>
                    </Row>
                </Col>
                <Col md="6"  >
                    <InputField label="Transaction Fee" type="text" name="transaction_fee" value={formData?.transaction_fee} onChange={handleChange} />
                </Col>

                {
                    formType === "Buyer" && (
                        <Col md="6">
                            <InputField label="Cash to Close (Auto Caluculated)" type="text" name="cash_to_close" value={formData?.cash_to_close} onChange={handleChange} />
                        </Col>
                    )
                }

                {
                    formType === "Buyer" && (
                        <Col md="6"  >
                            <InputField label="Loan Commitment Period (Days)" type="text" name="loan_commitment_period"
                                value={formData?.loan_commitment_period} onChange={handleChange} />
                        </Col>
                    )
                }

                {
                    formType === "Buyer" && (
                        <Col md="6" className="mb-3">
                            <InputField label="Inspection Period (Days)" type="text" name="inspection_period" value={formData?.inspection_period}
                                onChange={handleChange} />
                        </Col>
                    )
                }

                {
                    formType === "Buyer" && (
                        <Col md="6"  >
                            <SelectField label="Finance Type" name="finance_type" options={financeTypes} value={formData?.finance_type}
                                onChange={handleSelectChange} placeholder="Select Type..." />
                        </Col>
                    )
                }
            </Row >
        </div >
    )
};

export default OfferDetail;
