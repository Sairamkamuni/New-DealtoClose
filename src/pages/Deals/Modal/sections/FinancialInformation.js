import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import Select from "react-select"
import { financeTypes, acceptableFinanceTypes } from "AllDummyData/DealsDummyData";

const FinancialInformation = ({ formType, handleChange, handleSelectChange, formData }) => {
    const [compBuyer, setCompBuyer] = useState("%");
    const [compList, setCompList] = useState("$");
    const [teamLeaderSplit, setTeamLeaderSplit] = useState("%");
    const [brokerageSplit, setBrokerageSplit] = useState("$");

    return (
        <div id="section-2">
            <div className="d-block mb-3 mt-3">
                <h3 className="modal-title fw-bolder mb-1">Financial Information</h3>
            </div>

            <Row className="g-3">
                {formType === "Buyer" && (
                    <Col md="6">
                        <label>Finance Types</label>
                        <Select
                            name="finance_types"
                            isClearable={true}
                            className="basic-single"
                            classNamePrefix="select"
                            options={financeTypes}
                            onChange={handleSelectChange}
                            value={financeTypes.find(
                                (opt) => opt.label === formData?.finance_types
                            )}
                        />
                    </Col>
                )}

                {formType === "Seller" && (
                    <Col md="6">
                        <label>Acceptable Finance Types</label>
                        <Select
                            name="acceptable_finance_types"
                            isClearable={true}
                            className="basic-single"
                            classNamePrefix="select"
                            options={acceptableFinanceTypes}
                            onChange={handleSelectChange}
                            value={acceptableFinanceTypes.find(
                                (opt) => opt.label === formData?.acceptable_finance_types
                            )}
                        />
                    </Col>
                )}

                {formType === "Buyer" && (
                    <Col md="6">
                        <div className="mb-2 position-relative">
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

                <Col md="6">
                    <div className="mb-2 position-relative">
                        <label>Transaction Fee</label>
                        <span className="position-absolute"
                            style={{ top: "70%", left: "8px", transform: "translateY(-50%)", color: "#6c757d", fontSize: "18px" }} > $ </span>
                        <input type="text" name="transaction_fee"
                            className="form-control ps-4"
                            value={formData?.transaction_fee || ""}
                            onChange={handleChange}
                            placeholder="Enter Transaction Fee" />
                    </div>
                </Col>

                {formType === "Buyer" && (
                    <>
                        <Col md="6">
                            <div className="mb-2 position-relative">
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
                            <div className="mb-2 position-relative">
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
                    </>
                )}

                <Col md="6">
                    <label>Compensation to Buyer&apos;s Agent</label>
                    <Row>
                        <Col md="2" className=" d-flex align-items-center"
                            style={{ marginLeft: "12px", border: "1px solid #dad1e0", height: "36px", borderRadius: "6px", padding: "0" }} >
                            <div onClick={() => setCompBuyer("%")} style={{
                                background: compBuyer === "%" ? "#243e79" : "transparent", color: compBuyer === "%" ? "white" : "#231f20",
                                padding: "6px 14px", borderRadius: "6px", cursor: "pointer", fontWeight: 600, width: "50%"
                            }}  >
                                %
                            </div>

                            <div onClick={() => setCompBuyer("$")} style={{
                                background: compBuyer === "$" ? "#243e79" : "transparent",
                                color: compBuyer === "$" ? "white" : "#231f20",
                                padding: "6px 14px", borderRadius: "6px", marginLeft: "4px", cursor: "pointer", fontWeight: 600, width: "50%"
                            }} >
                                $
                            </div>
                        </Col>
                        <Col>
                            <input type="text" name="compensation_buyer_agent" className="form-control"
                                value={formData?.compensation_buyer_agent || ""}
                                onChange={handleChange} placeholder="Enter value" />
                        </Col>
                    </Row>
                </Col>

                <Col md="6">
                    <label>Compensation to Listing&apos;s Agent</label>
                    <Row>
                        <Col md="2" className=" d-flex align-items-center"
                            style={{ marginLeft: "12px", border: "1px solid #dad1e0", height: "36px", borderRadius: "6px", padding: "0" }} >
                            <div onClick={() => setCompList("%")} style={{
                                background: compList === "%" ? "#243e79" : "transparent", color: compList === "%" ? "white" : "#231f20",
                                padding: "6px 14px", borderRadius: "6px", cursor: "pointer", fontWeight: 600, width: "50%"
                            }}  >
                                %
                            </div>

                            <div onClick={() => setCompList("$")} style={{
                                background: compList === "$" ? "#243e79" : "transparent",
                                color: compList === "$" ? "white" : "#231f20",
                                padding: "6px 14px", borderRadius: "6px", marginLeft: "4px", cursor: "pointer", fontWeight: 600, width: "50%"
                            }} >
                                $
                            </div>
                        </Col>
                        <Col>
                            <input type="text" name="compensation_listing_agent" className="form-control"
                                value={formData?.compensation_listing_agent || ""}
                                onChange={handleChange} placeholder="Enter value" />
                        </Col>
                    </Row>
                </Col>

                <Col md="6">
                    <label>Team Leader Split</label>
                    <Row>
                        <Col md="2" className=" d-flex align-items-center"
                            style={{ marginLeft: "12px", border: "1px solid #dad1e0", height: "36px", borderRadius: "6px", padding: "0" }} >
                            <div onClick={() => setTeamLeaderSplit("%")} style={{
                                background: teamLeaderSplit === "%" ? "#243e79" : "transparent", color: teamLeaderSplit === "%" ? "white" : "#231f20",
                                padding: "6px 14px", borderRadius: "6px", cursor: "pointer", fontWeight: 600, width: "50%"
                            }}  >
                                %
                            </div>

                            <div onClick={() => setTeamLeaderSplit("$")} style={{
                                background: teamLeaderSplit === "$" ? "#243e79" : "transparent",
                                color: teamLeaderSplit === "$" ? "white" : "#231f20",
                                padding: "6px 14px", borderRadius: "6px", marginLeft: "4px", cursor: "pointer", fontWeight: 600, width: "50%"
                            }} >
                                $
                            </div>
                        </Col>
                        <Col>
                            <input type="text" name="team_leader_split" className="form-control"
                                value={formData?.team_leader_split || ""}
                                onChange={handleChange} placeholder="Enter value" />
                        </Col>
                    </Row>
                </Col>

                <Col md="6">
                    <label>Brokerage Split</label>
                    <Row>
                        <Col md="2" className=" d-flex align-items-center"
                            style={{ marginLeft: "12px", border: "1px solid #dad1e0", height: "36px", borderRadius: "6px", padding: "0" }} >
                            <div onClick={() => setBrokerageSplit("%")} style={{
                                background: brokerageSplit === "%" ? "#243e79" : "transparent", color: brokerageSplit === "%" ? "white" : "#231f20",
                                padding: "6px 14px", borderRadius: "6px", cursor: "pointer", fontWeight: 600, width: "50%"
                            }}  >
                                %
                            </div>

                            <div onClick={() => setBrokerageSplit("$")} style={{
                                background: brokerageSplit === "$" ? "#243e79" : "transparent",
                                color: brokerageSplit === "$" ? "white" : "#231f20",
                                padding: "6px 14px", borderRadius: "6px", marginLeft: "4px", cursor: "pointer", fontWeight: 600, width: "50%"
                            }} >
                                $
                            </div>
                        </Col>
                        <Col>
                            <input type="text" name="brokerage_split" className="form-control"
                                value={formData?.brokerage_split || ""}
                                onChange={handleChange} placeholder="Enter value" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div >
    )
};

export default FinancialInformation;
