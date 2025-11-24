import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import Select, { components } from "react-select"
import { financeTypes } from "constants/config";

const OfferDetail = ({ formType, handleChange, formData, setFormData }) => {

    const [loanValue, SetLoanValue] = useState("%");
    const [compensationBuyer, SetCompensationBuyer] = useState("$");
    const [compensationSeller, SetCompensationSeller] = useState("%");

    return (
        <div id="section-3">
            <div className="d-block mt-3">
                <h3 className="modal-title fw-bold mb-1">Offer Detail&apos;s</h3>
            </div>
            <Row className="mt-2">
                <Col md="6" className="mb-3">
                    <>
                        <label>{formType === "Buyer" ? "Purchase Price" : "Listing Price"}</label>
                        <span className="position-absolute"
                            style={{ top: "70%", left: "20px", transform: "translateY(-50%)", color: "#6c757d", fontSize: "18px" }} > $ </span>
                        <input type="text" name={formType === "Buyer" ? "purchase_price" : "listing_price"} className="form-control ps-4"
                            placeholder={formType === "Buyer" ? "Enter Purchase Price..." : "Enter Listing Price..."}
                            value={formType === "Buyer" ? formData.purchase_price || "" : formData.listing_price || ""} onChange={handleChange}
                        />
                    </>
                </Col>

                <Col md="6" className="mb-3">
                    {formType === "Buyer" && (
                        <>
                            <label>1st Initial Deposit (EMD)</label>
                            <input type="text" name="initial_deposit" className="form-control" placeholder="Enter 1st Initial Deposit (EMD)"
                                value={formData.initial_deposit || ""} onChange={handleChange} />
                        </>
                    )}

                    {formType === "Seller" && (
                        <>
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
                                                className="form-control"
                                                onChange={handleChange}
                                                value={formData.compensation_to_listing_agent || ""}
                                            />

                                        </div>
                                    </Col>

                                </div>
                            </Row>
                        </>
                    )}
                </Col>

                <Col md="6" className="mb-3">
                    {formType === "Buyer" && (
                        <>
                            <label>1st EMD Due Days</label>
                            <input type="text" name="emd_due_days" className="form-control" placeholder="Enter 1st EMD Due Days"
                                value={formData.emd_due_days || ""} onChange={handleChange} />
                        </>
                    )}
                </Col>

                <Col md="6" className="mb-3">
                    {formType === "Buyer" && (
                        <>
                            <label>2nd Initial Deposit (EMD)</label>
                            <input type="text" name="additional_initial_deposit" className="form-control" placeholder="Enter 2nd Initial Deposit (EMD)"
                                value={formData.additional_initial_deposit || ""} onChange={handleChange} />
                        </>
                    )}
                </Col>

                <Col md="6" className="mb-3">
                    <label>Transaction Fee</label>
                    <input type="text" name="transaction_fee" className="form-control" placeholder="Enter Transaction Fee"
                        value={formData.transaction_fee || ""} onChange={handleChange} />
                </Col>

                <Col md="6" className="mb-3">
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
                                    <input type="text" name="compensation_to_buyer" className="form-control"
                                        value={formData.compensation_to_buyer || ""} onChange={handleChange} />
                                </div>
                            </Col>
                        </div>
                    </Row>
                </Col>

                <Col md="6" className="mb-3">
                    {formType === "Buyer" && (
                        <>
                            <label>2nd EMD Due Days</label>
                            <input type="text" name="additional_emd_due_days" className="form-control" placeholder="Enter 2nd EMD Due Days"
                                value={formData.additional_emd_due_days || ""} onChange={handleChange} />
                        </>
                    )}
                </Col>

                <Col md="6" className="mb-3">
                    {formType === "Buyer" && (
                        <>
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
                                            <input type="text" name="loan_value" className="form-control"
                                                value={formData.loan_value || ""} onChange={handleChange} />
                                        </div>
                                    </Col>
                                </div>
                            </Row>
                        </>
                    )}
                </Col>

                <Col md="6" className="mb-3">
                    {formType === "Buyer" && (
                        <>
                            <label>Cash to Close (Auto Caluculated)</label>
                            <input type="text" name="cash_to_close" className="form-control" placeholder="Auto Caluculated"
                                value={formData.cash_to_close || ""} onChange={handleChange} />
                        </>
                    )}
                </Col>

                <Col md="6" className="mb-3">
                    {formType === "Buyer" && (
                        <>
                            <label>Loan Commitment Period (Days)</label>
                            <input type="text" name="loan_commitment_period" className="form-control" placeholder="Auto Caluculated"
                                value={formData.loan_commitment_period || ""} onChange={handleChange} />
                        </>
                    )}
                </Col>

                {formType === "Buyer" && (
                    <Col md="6" className="mb-3">
                        <label>Inspection Period (Days)</label>
                        <input type="text" name="inspection_period" className="form-control" placeholder="Enter Inspection Period (Days)"
                            value={formData.inspection_period || ""} onChange={handleChange} />
                    </Col>
                )}

                {formType === "Buyer" && (
                    <Col md="6" className="mb-3">
                        <label>Finance Type</label>
                        <Select
                            name="finance_type"
                            isClearable
                            className="basic-single"
                            classNamePrefix="select"
                            options={financeTypes.map(item => ({ value: item.id, label: item.label }))}
                            placeholder="Select a Finance Type"
                            value={financeTypes.map(item => ({ value: item.id, label: item.label }))
                                .find(option => option.value === formData.finance_type) || null}
                            onChange={(selectedOption) => {
                                setFormData(prev => ({
                                    ...prev,
                                    finance_type: selectedOption ? selectedOption.value : ""
                                }));
                            }}
                        />

                    </Col>

                )}

            </Row>
        </div>
    )
};

export default OfferDetail;
