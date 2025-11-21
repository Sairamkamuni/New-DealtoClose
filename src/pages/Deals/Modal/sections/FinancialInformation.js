import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import Select from "react-select"
import { financeTypes } from "AllDummyData/DealsDummyData";

const FinancialInformation = ({ formType, handleChange }) => {
    const [compBuyer, setCompBuyer] = useState("%");
    const [compList, setCompList] = useState("$");
    const [teamLeaderSplit, setTeamLeaderSplit] = useState("%");
    const [brokerageSplit, setBrokerageSplit] = useState("$");

    return (
        <div id="section-2">
            <div className="d-block mb-3">
                <h3 className="modal-title fw-bold mb-1">Financial Information</h3>
            </div>
            <Row>
                <Col md={6} className="mt-2">
                    <div className="mb-2">
                        <label>{formType === "Buyer" ? "Finance Types" : "Acceptable Finance Types"}</label>
                        <Select name="financeTypes" isClearable isMulti classNamePrefix="select" options={financeTypes}
                            onChange={(e) => handleChange('financeTypes', e)}
                            placeholder={formType === "Buyer" ? "Select Finance Type" : "Select Type"} />
                    </div>
                </Col>

                <Col md={6} className="mt-2">
                    <div className="mb-2 position-relative">
                        <label>Purchase Price</label>
                        <span className="position-absolute"
                            style={{ top: "70%", left: "8px", transform: "translateY(-50%)", color: "#6c757d", fontSize: "18px" }} > $ </span>
                        <input type="text" name="purchase_price" className="form-control ps-4" placeholder="Enter Purchase Price" />
                    </div>

                </Col>

                <Col md={6} className="mt-2">
                    <div className="mb-2 position-relative">
                        <label>Transaction Fee</label>
                        <span className="position-absolute"
                            style={{ top: "70%", left: "8px", transform: "translateY(-50%)", color: "#6c757d", fontSize: "18px" }} > $ </span>
                        <input type="text" name="transaction_fee" onChange={(e) => handleChange('transaction_fee', e.target.value)} className="form-control ps-4"
                            placeholder="Enter Transaction Fee" />

                    </div>
                </Col>

                {formType === "Buyer" && (
                    <Col md={6} className="mt-2">
                        <div className="mb-2 position-relative">
                            <label>1st Initial Deposit (EMD)</label>
                            <span className="position-absolute"
                                style={{ top: "70%", left: "8px", transform: "translateY(-50%)", color: "#6c757d", fontSize: "18px" }} > $ </span>
                            <input type="text" name="initial_deposit" onChange={(e) => handleChange('initial_deposit', e.target.value)} className="form-control ps-4"
                                placeholder="Enter 1st Initial Deposit (EMD)" />
                        </div>
                    </Col>
                )}

                {formType === "Buyer" && (
                    <Col md={6} className="mt-2">
                        <div className="mb-2 position-relative">
                            <label>2nd Initial Deposit (EMD)</label>
                            <span className="position-absolute"
                                style={{ top: "70%", left: "8px", transform: "translateY(-50%)", color: "#6c757d", fontSize: "18px" }} > $ </span>
                            <input type="text" name="second_initial_deposit"
                                onChange={(e) => handleChange('second_initial_deposit', e.target.value)} className="form-control ps-4"
                                placeholder="Enter 2nd Initial Deposit (EMD)" />
                        </div>
                    </Col>
                )}

                <Col md={6} className="mt-2">
                    <Row>
                        <label>Compensation to Buyer&apos;s Agent</label>
                        <Col md={2} className="d-flex align-items-center" style={{
                            border: "1px solid #dad1e0", height: "36px", borderRadius: "8px", padding: "0",
                        }} >
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
                            <input type="text" name="compensation_buyer" className="form-control"
                                onChange={(e) => handleChange('compensation_buyer', e.target.value)} placeholder="Enter value" />
                        </Col>
                    </Row>
                </Col>

                <Col md={6} className="mt-2">
                    <Row>
                        <label>Compensation to Listing&apos;s Agent</label>
                        <Col md={2} className="d-flex align-items-center" style={{
                            border: "1px solid #dad1e0", height: "36px", borderRadius: "8px", padding: "0",
                        }} >
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
                            <input type="text" name="compensation_buyer" className="form-control"
                                onChange={(e) => handleChange('compensation_listing', e.target.value)} placeholder="Enter value" />
                        </Col>
                    </Row>
                </Col>

                <Col md={6} className="mt-2">
                    <Row>
                        <label>Team Leader Split</label>
                        <Col md={2} className="d-flex align-items-center" style={{
                            border: "1px solid #dad1e0", height: "36px", borderRadius: "8px", padding: "0",
                        }} >
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
                            <input type="text" name="compensation_buyer" className="form-control"
                                onChange={(e) => handleChange('team_leader_split', e.target.value)} placeholder="Enter value" />
                        </Col>
                    </Row>
                </Col>

                <Col md={6} className="mt-2">
                    <Row className="mb-2">
                        <label>Brokerage Split</label>
                        <Col md={2} className="d-flex align-items-center" style={{
                            border: "1px solid #dad1e0", height: "36px", borderRadius: "8px", padding: "0",
                        }} >
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
                                onChange={(e) => handleChange('brokerage_split', e.target.value)} placeholder="Enter value" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
};

export default FinancialInformation;
