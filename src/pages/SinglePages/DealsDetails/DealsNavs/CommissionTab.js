import React, { useState } from "react";
import { Row, Col, } from "reactstrap";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
import { referralTypes } from "AllDummyData/DealsDummyData";
import AllButton from "pages/utils/allButton";


const CommissionTab = () => {
    const [activeButton, setActiveButton] = useState("%");
    const [formData, setFormData] = useState({ holdEarnestMoney: "", personal_deal: "", });

    const [inputFields, setInputFields] = useState([{ agent_name: "", pecentage: "", commission: "" }]);

    const handleAddFields = () => {
        setInputFields([...inputFields, { agent_name: "", pecentage: "", commission: "" }]);
    };

    const handleRemoveFields = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            {/* SAVE BUTTON */}
            <div className="d-flex justify-content-end mb-3">
                <AllButton label="Edit" width="80px" outline={false} />
            </div>

            {/* ===================== COMMISSION INFO + DEAL INFO + CREDITS ===================== */}
            <Row className="gy-4">
                {/* COMMISSION INFO */}
                <Col>
                    <h5 className="fw-bold mb-3">Commission Info</h5>

                    <Row className="g-3">
                        <Col md={12}>
                            <label>Sales Price:</label>
                            <span className="position-absolute" style={{ top: "52%", left: "18px", fontSize: "16px" }} > $ </span>
                            <input type="text" name="sales_price" value="520,000.00" className="form-control ps-4" />
                        </Col>

                        <Col md={12}>
                            <label>Listing Commission:</label>
                            <Row >
                                <div className="d-flex gap-2">
                                    <Col md={2} className="d-flex align-items-center"
                                        style={{ border: "1px solid #dad1e0", height: "36px", borderRadius: "8px", padding: "0", }} >
                                        <div onClick={() => setActiveButton("%")}
                                            style={{
                                                background: activeButton === "%" ? "#243e79" : "transparent",
                                                color: activeButton === "%" ? "white" : "#231f20",
                                                padding: "6px 14px", borderRadius: "6px", cursor: "pointer", fontWeight: 600, width: "50%"
                                            }} >
                                            %
                                        </div>

                                        <div onClick={() => setActiveButton("$")}
                                            style={{
                                                background: activeButton === "$" ? "#243e79" : "transparent",
                                                color: activeButton === "$" ? "white" : "#231f20",
                                                padding: "6px 14px", borderRadius: "6px", marginLeft: "4px", cursor: "pointer", fontWeight: 600, width: "50%"
                                            }} >
                                            $
                                        </div>
                                    </Col>

                                    <Col md={10}>
                                        <div className="d-flex">
                                            <input value="3.50" type="text" name="listing_commission" className="form-control"
                                                style={{ height: "36px", borderRadius: "8px" }} />
                                        </div>
                                    </Col>

                                </div>
                            </Row>
                        </Col>
                        <Col md={12}>
                            <label>Sale Commission:</label>
                            <Row >
                                <div className="d-flex gap-2">
                                    <Col md={2} className="d-flex align-items-center"
                                        style={{ border: "1px solid #dad1e0", height: "36px", borderRadius: "8px", padding: "0", }} >
                                        <div onClick={() => setActiveButton("%")}
                                            style={{
                                                background: activeButton === "%" ? "#243e79" : "transparent",
                                                color: activeButton === "%" ? "white" : "#231f20",
                                                padding: "6px 14px", borderRadius: "6px", cursor: "pointer", fontWeight: 600, width: "50%"
                                            }} >
                                            %
                                        </div>

                                        <div onClick={() => setActiveButton("$")}
                                            style={{
                                                background: activeButton === "$" ? "#243e79" : "transparent",
                                                color: activeButton === "$" ? "white" : "#231f20",
                                                padding: "6px 14px", borderRadius: "6px", marginLeft: "4px", cursor: "pointer", fontWeight: 600, width: "50%"
                                            }} >
                                            $
                                        </div>
                                    </Col>

                                    <Col md={10}>
                                        <div className="d-flex">
                                            <input value="3.50" type="text" name="sale_commission" className="form-control"
                                                style={{ height: "36px", borderRadius: "8px" }} />
                                        </div>
                                    </Col>
                                </div>
                            </Row>
                        </Col>

                        <Col md={12}>
                            <label>Transaction Fee:</label>
                            <span className="position-absolute" style={{ top: "52%", left: "18px", fontSize: "16px" }} > $ </span>
                            <input type="text" name="transaction_fee" value="495.00" className="form-control ps-4" />
                            {/*  */}
                        </Col>
                        <Col md={12}>
                            <label>Other Deduction:</label>
                            <span className="position-absolute" style={{ top: "52%", left: "18px", fontSize: "16px" }} > $ </span>
                            <input type="text" name="other_deduction" value="0.00" className="form-control ps-4" />
                        </Col>
                    </Row>
                </Col>

                {/* DEAL INFO */}
                <Col>
                    <h5 className="fw-bold mb-3">Deal Info</h5>
                    <Row className="g-3">
                        <Col md={12}>
                            <label className="form-label d-block">Personal Deal: </label>
                            <div className="d-flex gap-2">
                                {/* YES Option */}
                                <div className="form-check form-check-inline">
                                    <input type="radio" id="personal_dealYes" name="personal_deal" className="form-check-input" value="Yes"
                                        checked={formData.personal_deal === "Yes"} onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="personal_dealYes"> Yes </label>
                                </div>

                                {/* NO Option */}
                                <div className="form-check form-check-inline">
                                    <input type="radio" id="personal_dealNo" name="personal_deal" className="form-check-input" value="No"
                                        checked={formData.personal_deal === "No"} onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="personal_dealNo"> No </label>
                                </div>
                            </div>
                        </Col>

                        <Col md={12}>
                            <label>Office Gross Commission on Sale:</label>
                            <span className="position-absolute" style={{ top: "52%", left: "18px", fontSize: "16px" }} > $ </span>
                            <input type="text" name="office_gross" value="12,500.00" className="form-control ps-4" />
                        </Col>

                        <Col md={12}>
                            <label>TC Fee/Admin Brokerage Commission:</label>
                            <span className="position-absolute" style={{ top: "52%", left: "18px", fontSize: "16px" }} > $ </span>
                            <input type="text" name="admin_broker_commission" value="12,500.00" className="form-control ps-4" />
                        </Col>

                        <Col md={12}>
                            <label>Transaction Coordinator Name:</label>
                            <input type="text" name="transaction_coordinator" value="Steve Kamuni" className="form-control" />
                        </Col>
                    </Row>
                </Col>

                <Col>
                    {/* CREDITS */}
                    <h5 className="fw-bold mb-3">Credits</h5>

                    <Row className="g-3">
                        <Col md={12}>
                            <label>Seller Credit to Buyer:</label>
                            <span className="position-absolute" style={{ top: "52%", left: "18px", fontSize: "16px" }} > $ </span>
                            <input type="text" name="seller_creatid_buyer" value="12,500.00" className="form-control ps-4" />
                        </Col>
                        <Col md={12}>
                            <label>Broker Credit:</label>
                            <span className="position-absolute" style={{ top: "52%", left: "18px", fontSize: "16px" }} > $ </span>
                            <input type="text" name="broker_credit" value="12,500.00" className="form-control ps-4" />
                        </Col>
                        <Col md={12}>
                            <label>Lender Credit:</label>
                            <span className="position-absolute" style={{ top: "52%", left: "18px", fontSize: "16px" }} > $ </span>
                            <input type="text" name="lender_credit" value="12,500.00" className="form-control ps-4" />
                        </Col>
                    </Row>
                </Col>
            </Row>

            <hr />

            {/* ===================== COMMISSION SPLIT BETWEEN AGENTS ===================== */}
            <Row className="gy-4">
                <Col>
                    <h5 className="fw-bold mb-3">Commission Split between Agents</h5>

                    <div className="inner-repeater">
                        <div className="inner form-group mb-0">
                            <div id="repeater">
                                {inputFields.map((field, key) => (
                                    <div key={key} id={`nested${key}`}>
                                        <Row>
                                            <Col>
                                                <div className="mb-3">
                                                    <label>Agent Split</label>
                                                    <input type="text" name="contact" className="form-control" placeholder="Search and Select Agent"
                                                        onChange={(e) => {
                                                            setInputFields(prev => {
                                                                const updated = [...prev]; updated[key] = { ...updated[key], agent_name: e.target.value };
                                                                return updated;
                                                            });
                                                        }}
                                                    />
                                                </div>
                                            </Col>

                                            <Col>
                                                <div style={{ marginTop: "28px" }}>
                                                    <input type="text" name="pecentage" className="form-control" onChange={(e) => {
                                                        setInputFields(prev => {
                                                            const updated = [...prev]; updated[key] = { ...updated[key], contact_name: e.target.value };
                                                            return updated;
                                                        });
                                                    }}
                                                    />
                                                </div>
                                            </Col>
                                            <Col>
                                                <div style={{ marginTop: "28px" }}>
                                                    <input type="text" name="commission" className="form-control" onChange={(e) => {
                                                        setInputFields(prev => {
                                                            const updated = [...prev]; updated[key] = { ...updated[key], contact_name: e.target.value };
                                                            return updated;
                                                        });
                                                    }}
                                                    />
                                                </div>
                                            </Col>


                                            <Col md={1} className="d-flex flex-column justify-content-end" style={{ marginBottom: "20px" }}>
                                                {(inputFields.length - 1) === key ? (
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary"
                                                        onClick={handleAddFields}
                                                    >
                                                        <i className="mdi mdi-plus" />
                                                    </button>
                                                ) : (
                                                    <button
                                                        type="button"
                                                        className="btn btn-danger"
                                                        onClick={() => handleRemoveFields(key)}
                                                    >
                                                        <i className="mdi mdi-delete" />
                                                    </button>
                                                )}
                                            </Col>
                                        </Row>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

            <hr />

            {/* ===================== ADDITIONALL COMMISSION INFORMATION ===================== */}
            <Row className="gy-4">
                <h5 className="fw-bold mb-3">Additional Commission Information</h5>
                <Col md={12}>
                    <div className="mb-3">
                        <textarea rows="4" className="form-control" placeholder="Write your note here..." />
                        <div className="d-flex justify-content-start mt-3">
                            <AllButton width="140px" label="Add Comment" outline={false} onClick={() => console.log("Edit clicked")} />
                        </div>
                    </div>
                </Col>
            </Row>

            <hr />

            {/* ===================== DEPOSITS + REFERRAL DETAILS ===================== */}
            <Row className="gy-4">
                <Col>
                    <h5 className="fw-bold ">Deposits</h5>
                    <Row className="g-3">
                        <Col md={12}>
                            <label className="form-label d-block">Will Your Brokerage Hold Earnest Money: </label>
                            <div className="d-flex gap-2">
                                {/* YES Option */}
                                <div className="form-check form-check-inline">
                                    <input type="radio" id="holdEarnestYes" name="holdEarnestMoney" className="form-check-input" value="Yes"
                                        checked={formData.holdEarnestMoney === "Yes"} onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="holdEarnestYes"> Yes </label>
                                </div>

                                {/* NO Option */}
                                <div className="form-check form-check-inline">
                                    <input type="radio" id="holdEarnestNo" name="holdEarnestMoney" className="form-check-input" value="No"
                                        checked={formData.holdEarnestMoney === "No"} onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="holdEarnestNo"> No </label>
                                </div>
                            </div>
                        </Col>

                        <Col md={12}>
                            <label>Deposit Amount:</label>
                            <span className="position-absolute" style={{ top: "52%", left: "18px", fontSize: "16px" }} > $ </span>
                            <input type="text" name="deposit_amount" value="125,000.00" className="form-control ps-4" />
                        </Col>

                        <Col md={12}>
                            <label>Date of Check:</label>
                            <Flatpickr className="form-control d-block" options={{ altInput: true, time_24hr: false, altFormat: "F j, Y" }} placeholder="MM, DD, YYYY" />
                        </Col>

                        <Col md={12}>
                            <label>Date Posted to Log Book:</label>
                            <Flatpickr className="form-control d-block" options={{ altInput: true, time_24hr: false, altFormat: "F j, Y" }} placeholder="MM, DD, YYYY" />
                        </Col>
                    </Row>
                </Col>

                <Col>
                    <h5 className="fw-bold ">Referral Details</h5>
                    <Row className="g-3">
                        <Col md={12}>
                            <label>Referral Type:</label>
                            <Select className="basic-single" classNamePrefix="select" name="referral_type" isClearable={true} options={referralTypes} />
                        </Col>

                        <Col md={12}>
                            <label>Referral Amount:</label>
                            <Row>
                                <div className="d-flex gap-2">
                                    <Col md={2} className="d-flex align-items-center"
                                        style={{ border: "1px solid #dad1e0", height: "36px", borderRadius: "8px", padding: "0", }} >
                                        <div onClick={() => setActiveButton("%")}
                                            style={{
                                                background: activeButton === "%" ? "#243e79" : "transparent",
                                                color: activeButton === "%" ? "white" : "#231f20",
                                                padding: "6px 14px", borderRadius: "6px", cursor: "pointer", fontWeight: 600, width: "50%"
                                            }} >
                                            %
                                        </div>
                                        <div onClick={() => setActiveButton("$")}
                                            style={{
                                                background: activeButton === "$" ? "#243e79" : "transparent",
                                                color: activeButton === "$" ? "white" : "#231f20",
                                                padding: "6px 14px", borderRadius: "6px", marginLeft: "4px", cursor: "pointer", fontWeight: 600, width: "50%"
                                            }} >
                                            $
                                        </div>
                                    </Col>

                                    <Col md={10}>
                                        <div className="d-flex">
                                            <input value="3.50" type="text" name="referral_agent" className="form-control" />
                                        </div>
                                    </Col>

                                </div>
                            </Row>


                        </Col>

                        <Col md={12}>
                            <label>Referral Agent:</label>
                            <Row >
                                <div className="d-flex gap-2">
                                    <Col md={11} className="d-flex align-items-center"
                                        style={{ border: "1px solid #dad1e0", height: "36px", borderRadius: "8px", padding: "0", }} >
                                        <input value="3.50" type="text" name="referral_agent" className="form-control" />
                                        <div className="d-flex">
                                        </div>
                                    </Col>
                                    <Col md={1}>
                                        <div className="d-flex">
                                            <button className="btn btn-primary w-100" role="button" > Add</button>
                                        </div>
                                    </Col>
                                </div>
                            </Row>
                        </Col>

                        <Col md={12}>
                            <label>W9 Form (PDF Only):</label>
                            <Row >
                                <div className="d-flex gap-2" >
                                    <Col md={11} className="d-flex align-items-center">
                                        <input type="file" name="w9_form" className="form-control" />
                                    </Col>
                                    <Col md={1}>
                                        <div className="d-flex">
                                            <button className="btn btn-primary w-100" role="button" > Add</button>
                                        </div>
                                    </Col>
                                </div>
                            </Row>
                        </Col>

                        <Col md={12}>
                            <label>Referral Brokerage Name:</label>
                            <input type="text" name="referral_brokerage_name" value="520,000.00" className="form-control ps-4" />
                        </Col>
                    </Row>
                </Col>

            </Row >
        </>
    );
};

export default CommissionTab;
