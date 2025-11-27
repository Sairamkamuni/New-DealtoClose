import React, { useState } from "react";
import { Row, Col, } from "reactstrap";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
import AllButton from "pages/utils/allButton";
import { post, put } from "helpers/api_helper"
import { showSuccessAlert } from "pages/utils/Alerts/alertMessages";
import { referralTypes } from "AllDummyData/DealsDummyData";

const InitialFormatData = {
    sales_price: "450,000.00", holdEarnestMoney: "Yes", personal_deal: "No", listing_commission: "3%", sale_commission: "2,000.00", transaction_fee: "495.00",
    other_deduction: "250.00", office_gross: "15,000.00", admin_broker_commission: "300.00", transaction_coordinator: "Steve Kamuni", seller_creatid_buyer: "2,000.00",
    broker_credit: "500.00", lender_credit: "750.00", additional_comments: "This is a sample comment for demo purposes.", deposit_amount: "1,0000.00",
    date_of_check: new Date(), date_posted_log: new Date(), referral_type: "Buyer Referral", referral_amount: "25%", referral_agent: "Raj Kamuni",
    referral_brokerage_name: "ABC Realty Group",
};

const CommissionTab = () => {
    const [listingType, setListingType] = useState("%");
    const [saleType, setSaleType] = useState("$");
    const [referralType, setReferralType] = useState("%");

    const [formData, setFormData] = useState(InitialFormatData);
    const [editMode, setEditMode] = useState(false);

    const [inputFields, setInputFields] = useState([
        { agent_name: "Michael Smith", percentage: "50%", commission: "7,500.00" },
        { agent_name: "Jennifer Wilson", percentage: "50%", commission: "7,500.00" }]
    );

    const handleAddFields = () => {
        setInputFields([...inputFields, { agent_name: "", percentage: "", commission: "" }]);
    };

    const handleRemoveFields = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    };

    const handleRadioChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.files[0],
        });
    };

    // Handle normal input change
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    // Submit function
    const handleSubmit = async () => {
        console.log('Submitting formData:', formData);
        // const url = editMode ? `${BANK_URL}/${editingId}` : BANK_URL;
        // const method = editMode ? put : post;
        // const { success, body } = await method(url, formData); 
        console.log("Edit mode:", editMode);
        console.log("API method call:", editMode ? "PUT" : "POST");
        const success = true;
        if (success) {
            showSuccessAlert(editMode ? 'Commission Info updated successfully!' : 'Commission Info created successfully!');
            setFormData(InitialFormatData);
            setEditMode(false);
        }
    };

    return (
        <>
            {/* SAVE BUTTON */}
            <div className="d-flex justify-content-end mb-3">
                {editMode ? (
                    <AllButton label="Save" width="60px" outline={false} onClick={handleSubmit} />
                ) : (
                    <AllButton label="Edit" width="60px" outline={false} onClick={() => setEditMode(true)} />
                )}
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
                            <input type="text" name="sales_price" className="form-control ps-4" value={formData.sales_price}
                                onChange={handleChange} readOnly={!editMode} />
                        </Col>

                        <Col md={12}>
                            <label>Listing Commission:</label>
                            <Row >
                                <div className="d-flex gap-2">
                                    <Col md={2} className="d-flex align-items-center" style={{
                                        border: "1px solid #dad1e0", height: "36px", borderRadius: "8px", padding: "0",
                                        opacity: !editMode ? "0.6" : "1", pointerEvents: !editMode ? "none" : "auto"
                                    }} >
                                        <div onClick={() => setListingType("%")} style={{
                                            background: listingType === "%" ? "#243e79" : "transparent", color: listingType === "%" ? "white" : "#231f20",
                                            padding: "6px 14px", borderRadius: "6px", cursor: "pointer", fontWeight: 600, width: "50%"
                                        }}  >
                                            %
                                        </div>

                                        <div onClick={() => setListingType("$")} style={{
                                            background: listingType === "$" ? "#243e79" : "transparent",
                                            color: listingType === "$" ? "white" : "#231f20",
                                            padding: "6px 14px", borderRadius: "6px", marginLeft: "4px", cursor: "pointer", fontWeight: 600, width: "50%"
                                        }} >
                                            $
                                        </div>
                                    </Col>


                                    <Col md={10}>
                                        <div className="d-flex">
                                            <input type="text" name="listing_commission" value={formData.listing_commission} className="form-control"
                                                style={{ height: "36px", borderRadius: "8px" }} onChange={handleChange} readOnly={!editMode} />
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
                                        style={{
                                            border: "1px solid #dad1e0", height: "36px", borderRadius: "8px", padding: "0", opacity: !editMode ? "0.6" : "1",
                                            pointerEvents: !editMode ? "none" : "auto"
                                        }} >
                                        <div onClick={() => setSaleType("%")}
                                            style={{
                                                background: saleType === "%" ? "#243e79" : "transparent",
                                                color: saleType === "%" ? "white" : "#231f20",
                                                padding: "6px 14px", borderRadius: "6px", cursor: "pointer", fontWeight: 600, width: "50%",
                                            }} >
                                            %
                                        </div>

                                        <div onClick={() => setSaleType("$")}
                                            style={{
                                                background: saleType === "$" ? "#243e79" : "transparent",
                                                color: saleType === "$" ? "white" : "#231f20",
                                                padding: "6px 14px", borderRadius: "6px", marginLeft: "4px", cursor: "pointer", fontWeight: 600, width: "50%"
                                            }} >
                                            $
                                        </div>
                                    </Col>

                                    <Col md={10}>
                                        <div className="d-flex">
                                            <input type="text" name="sale_commission" value={formData.sale_commission} className="form-control"
                                                style={{ height: "36px", borderRadius: "8px" }} onChange={handleChange} readOnly={!editMode} />
                                        </div>
                                    </Col>
                                </div>
                            </Row>
                        </Col>

                        <Col md={12}>
                            <label>Transaction Fee:</label>
                            <span className="position-absolute" style={{ top: "52%", left: "18px", fontSize: "16px" }} > $ </span>
                            <input type="text" name="transaction_fee" value={formData.transaction_fee} className="form-control ps-4"
                                onChange={handleChange} readOnly={!editMode} />
                            {/*  */}
                        </Col>
                        <Col md={12}>
                            <label>Other Deduction:</label>
                            <span className="position-absolute" style={{ top: "52%", left: "18px", fontSize: "16px" }} > $ </span>
                            <input type="text" name="other_deduction" value={formData.other_deduction} className="form-control ps-4"
                                onChange={handleChange} readOnly={!editMode} />
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
                                <div className="form-check form-check-inline">
                                    <input type="radio" id="personal_dealYes" name="personal_deal" className="form-check-input" value="Yes"
                                        checked={formData.personal_deal === "Yes"}
                                        onChange={handleRadioChange} disabled={!editMode} />
                                    <label className="form-check-label" htmlFor="personal_dealYes">Yes</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input type="radio" id="personal_dealNo" name="personal_deal" className="form-check-input" value="No"
                                        checked={formData.personal_deal === "No"} onChange={handleRadioChange} disabled={!editMode} />
                                    <label className="form-check-label" htmlFor="personal_dealNo">No</label>
                                </div>
                            </div>
                        </Col>


                        <Col md={12}>
                            <label>Office Gross Commission on Sale:</label>
                            <span className="position-absolute" style={{ top: "52%", left: "18px", fontSize: "16px" }} > $ </span>
                            <input type="text" name="office_gross" value={formData.office_gross} className="form-control ps-4"
                                onChange={handleChange} readOnly={!editMode} />
                        </Col>

                        <Col md={12}>
                            <label>TC Fee/Admin Brokerage Commission:</label>
                            <span className="position-absolute" style={{ top: "52%", left: "18px", fontSize: "16px" }} > $ </span>
                            <input type="text" name="admin_broker_commission" value={formData.admin_broker_commission} className="form-control ps-4"
                                onChange={handleChange} readOnly={!editMode} />
                        </Col>

                        <Col md={12}>
                            <label>Transaction Coordinator Name:</label>
                            <input type="text" name="transaction_coordinator" value={formData.transaction_coordinator} className="form-control"
                                onChange={handleChange} readOnly={!editMode} />
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
                            <input type="text" name="seller_creatid_buyer" value={formData.seller_creatid_buyer} className="form-control ps-4"
                                onChange={handleChange} readOnly={!editMode} />
                        </Col>
                        <Col md={12}>
                            <label>Broker Credit:</label>
                            <span className="position-absolute" style={{ top: "52%", left: "18px", fontSize: "16px" }} > $ </span>
                            <input type="text" name="broker_credit" value={formData.broker_credit} className="form-control ps-4"
                                onChange={handleChange} readOnly={!editMode} />
                        </Col>
                        <Col md={12}>
                            <label>Lender Credit:</label>
                            <span className="position-absolute" style={{ top: "52%", left: "18px", fontSize: "16px" }} > $ </span>
                            <input type="text" name="lender_credit" value={formData.lender_credit} className="form-control ps-4"
                                onChange={handleChange} readOnly={!editMode} />
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
                                                        value={field.agent_name}
                                                        onChange={(e) => {
                                                            setInputFields(prev => {
                                                                const updated = [...prev];
                                                                updated[key].agent_name = e.target.value;
                                                                return updated;
                                                            });
                                                        }} readOnly={!editMode}
                                                    />
                                                </div>
                                            </Col>

                                            <Col>
                                                <div style={{ marginTop: "28px" }}>
                                                    <input type="text" name="percentage" className="form-control"
                                                        value={field.percentage}
                                                        onChange={(e) => {
                                                            setInputFields(prev => {
                                                                const updated = [...prev];
                                                                updated[key].percentage = e.target.value;
                                                                return updated;

                                                            });
                                                        }} readOnly={!editMode}
                                                    />
                                                </div>
                                            </Col>
                                            <Col>
                                                <div style={{ marginTop: "28px" }}>
                                                    <input type="text" name="commission" className="form-control"
                                                        value={field.percentage}
                                                        onChange={(e) => {
                                                            setInputFields(prev => {
                                                                const updated = [...prev]; updated[key] = { ...updated[key], commission: e.target.value };
                                                                return updated;
                                                            });
                                                        }} readOnly={!editMode}
                                                    />
                                                </div>
                                            </Col>


                                            <Col md={1} className="d-flex flex-column justify-content-end" style={{ marginBottom: "20px" }}>
                                                {(inputFields.length - 1) === key ? (
                                                    <button type="button" className="btn btn-primary" onClick={handleAddFields} disabled={!editMode} >
                                                        <i className="mdi mdi-plus" />
                                                    </button>
                                                ) : (
                                                    <button type="button" className="btn btn-danger" onClick={() => handleRemoveFields(key)} disabled={!editMode}>
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
                        <textarea rows="4" type="text" name="additional_comments" value={formData.additional_comments} className="form-control" placeholder="Write your note here..."
                            onChange={handleChange} readOnly={!editMode} />
                        <div className="d-flex justify-content-start mt-3">
                            <AllButton width="140px" label="Add Comment" outline={false} onClick={() => console.log("Edit clicked")} disabled={!editMode} />
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
                                        checked={formData.holdEarnestMoney === "Yes"} onChange={handleRadioChange} disabled={!editMode} />
                                    <label className="form-check-label" htmlFor="holdEarnestYes">Yes</label>
                                </div>

                                {/* NO Option */}
                                <div className="form-check form-check-inline">
                                    <input type="radio" id="holdEarnestNo" name="holdEarnestMoney" className="form-check-input" value="No"
                                        checked={formData.holdEarnestMoney === "No"} onChange={handleRadioChange} disabled={!editMode} />
                                    <label className="form-check-label" htmlFor="holdEarnestNo">No</label>
                                </div>

                            </div>
                        </Col>


                        <Col md={12}>
                            <label>Deposit Amount:</label>
                            <span className="position-absolute" style={{ top: "52%", left: "18px", fontSize: "16px" }} > $ </span>
                            <input type="text" name="deposit_amount" value={formData.deposit_amount} className="form-control ps-4"
                                onChange={handleChange} readOnly={!editMode} />
                        </Col>

                        <Col md={12}>
                            <label>Date of Check:</label>
                            <Flatpickr className="form-control d-block" name="date_of_check" value={formData.date_of_check}
                                options={{ altInput: true, time_24hr: false, altFormat: "F j, Y" }}
                                placeholder="MM, DD, YYYY" onChange={(date) => {
                                    setFormData(prev => ({ ...prev, date_of_check: date[0] }));
                                }} disabled={!editMode}
                            />
                        </Col>

                        <Col md={12}>
                            <label>Date Posted to Log Book:</label>
                            <Flatpickr className="form-control d-block" name="date_posted_log" value={formData.date_posted_log}
                                options={{ altInput: true, time_24hr: false, altFormat: "F j, Y" }}
                                placeholder="MM, DD, YYYY" onChange={(date) => {
                                    setFormData(prev => ({ ...prev, date_posted_log: date[0] }));
                                }} disabled={!editMode}
                            />
                        </Col>
                    </Row>
                </Col>

                <Col>
                    <h5 className="fw-bold ">Referral Details</h5>
                    <Row className="g-3">
                        <Col md={12}>
                            <label>Referral Type:</label>
                            <Select className="basic-single" classNamePrefix="select" name="referral_type" isClearable={true} options={referralTypes}
                                defaultValue={referralTypes[0]}
                                onChange={(option) => setFormData(prev => ({ ...prev, referral_type: option ? option.value : "" }))}
                                isDisabled={!editMode}
                            />
                        </Col>

                        <Col md={12}>
                            <label>Referral Amount:</label>
                            <Row>
                                <div className="d-flex  gap-2 ">
                                    <Col md={2} className="d-flex align-items-center"
                                        style={{
                                            border: "1px solid #dad1e0", height: "36px", borderRadius: "8px", padding: "0", opacity: !editMode ? "0.6" : "1",
                                            pointerEvents: !editMode ? "none" : "auto"
                                        }} >
                                        <div onClick={() => setReferralType("%")}
                                            style={{
                                                background: referralType === "%" ? "#243e79" : "transparent",
                                                color: referralType === "%" ? "white" : "#231f20", display: "flex", alignItems: "center", justifyContent: "center",
                                                padding: "6px 14px", borderRadius: "6px", cursor: "pointer", fontWeight: 600, width: "50%"
                                            }} >
                                            %
                                        </div>
                                        <div onClick={() => setReferralType("$")}
                                            style={{
                                                background: referralType === "$" ? "#243e79" : "transparent",
                                                color: referralType === "$" ? "white" : "#231f20", display: "flex", alignItems: "center", justifyContent: "center",
                                                padding: "6px 14px", borderRadius: "6px", marginLeft: "4px", cursor: "pointer", fontWeight: 600, width: "50%"
                                            }} >
                                            $
                                        </div>
                                    </Col>

                                    <Col md={10}>
                                        <div className="d-flex">
                                            <input type="text" name="referral_amount" className="form-control" value={formData.referral_amount}
                                                onChange={handleChange} readOnly={!editMode} />
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
                                        <input type="text" name="referral_agent" className="form-control" value={formData.referral_agent}
                                            onChange={handleChange} readOnly={!editMode} />

                                    </Col>
                                    <Col md={1}>
                                        <div className="d-flex">
                                            <button className="btn btn-primary w-100" role="button" disabled={!editMode} > Add</button>
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
                                        <input type="file" name="w9_form" className="form-control" value={formData.w9_form}
                                            onChange={handleChange} readOnly={!editMode} />
                                    </Col>
                                    <Col md={1}>
                                        <div className="d-flex">
                                            <button className="btn btn-primary w-100" role="button" disabled={!editMode} > Add</button>
                                        </div>
                                    </Col>
                                </div>
                            </Row>
                        </Col>

                        <Col md={12}>
                            <label>Referral Brokerage Name:</label>
                            <input type="text" name="referral_brokerage_name" value={formData.referral_brokerage_name}
                                className="form-control ps-4" onChange={handleChange} readOnly={!editMode} />
                        </Col>
                    </Row>
                </Col>

            </Row >
        </>
    );
};

export default CommissionTab;
