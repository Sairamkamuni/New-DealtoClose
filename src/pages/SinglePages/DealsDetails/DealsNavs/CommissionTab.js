import React, { useState } from "react";
import { Row, Col, } from "reactstrap";
import AllButton from "pages/utils/allButton";
import { referralTypes } from "AllDummyData/DealsDummyData";
import { InputField, SelectField, AsyncSelectField, DatePickerField } from "pages/InputFields/InputFields";
import { FormHandlers } from "pages/InputFields/FormHandlers";

const formattedData = [
    { key: "sales_price", label: "Sales Price", value: "450,000.00" },
    { key: "listing_commission", label: "Listing Commission", value: "3%" },
    { key: "sale_commission", label: "Sale Commission", value: "2,000.00" },
    { key: "transaction_fee", label: "Transaction Fee", value: "495.00" },
    { key: "other_deduction", label: "Other Deduction", value: "250.00" },
    { key: "holdEarnestMoney", label: "Hold Earnest Money", value: "Yes" },
    { key: "personal_deal", label: "Personal Deal", value: "No" },
    { key: "office_gross", label: "Office Gross", value: "15,000.00" },
    { key: "admin_broker_commission", label: "TC Fee / Admin Broker Commission", value: "300.00" },
    { key: "transaction_coordinator", label: "Transaction Coordinator Name", value: "Steve Kamuni" },
    { key: "seller_creatid_buyer", label: "Seller Credited Buyer", value: "2,000.00" },
    { key: "broker_credit", label: "Broker Credit", value: "500.00" },
    { key: "lender_credit", label: "Lender Credit", value: "750.00" },
    { key: "additional_comments", label: "Additional Comments", value: "This is a sample comment for demo purposes." },
    { key: "deposit_amount", label: "Deposit Amount", value: "1,0000.00" },
    { key: "date_of_check", label: "Date Of Check", value: new Date() },
    { key: "date_posted_log", label: "Date Posted Log", value: new Date() },
    { key: "referral_type", label: "Referral Type", value: "Buyer Referral" },
    { key: "referral_amount", label: "Referral Amount", value: "25%" },
    { key: "referral_agent", label: "Referral Agent", value: "Raj Kamuni" },
    { key: "referral_brokerage_name", label: "Referral Brokerage Name", value: "ABC Realty Group" },
];

const CommissionTab = () => {
    const [listingType, setListingType] = useState("%");
    const [saleType, setSaleType] = useState("$");
    const [referralType, setReferralType] = useState("%");

    // const [formData, setFormData] = useState(InitialFormatData);
    const [editMode, setEditMode] = useState(false);

    const [inputFields, setInputFields] = useState([{ agent_name: "Michael Smith", percentage: "50%", commission: "7,500.00" }]);


    const { formData, setFormData, handleChange, handleSubmit, handleSelectChange, handleDateChange } =
        FormHandlers({ apiUrl: "/api/deals", entity: "Commission Info", });

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
                <Col>
                    <h5 className="fw-bold mb-3">Commission Info</h5>

                    <Row className="g-3">
                        <Col md={12}>
                            <label>Sales Price:</label>
                            <InputField showDollar dollarStop="50%" type="text" name="sales_price" value={formData?.sales_price} onChange={handleChange} readOnly={!editMode} />
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
                                        <div style={{ width: "384px" }}>
                                            <InputField type="text" name="listing_commission" value={formData?.listing_commission} onChange={handleChange}
                                                readOnly={!editMode} />
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
                                        <div style={{ width: "384px" }}>
                                            <InputField type="text" name="sale_commission" value={formData?.sale_commission} onChange={handleChange}
                                                readOnly={!editMode} />
                                        </div>
                                    </Col>
                                </div>
                            </Row>
                        </Col>

                        <Col md={12}>
                            <label>Transaction Fee:</label>
                            <InputField showDollar dollarStop="50%" type="text" name="transaction_fee" value={formData?.transaction_fee} onChange={handleChange}
                                readOnly={!editMode} />
                        </Col>
                        <Col md={12}>
                            <label>Other Deduction:</label>
                            <InputField showDollar dollarStop="50%" type="text" name="other_deduction" value={formData?.other_deduction} onChange={handleChange}
                                readOnly={!editMode} />
                        </Col>
                    </Row>
                </Col>

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
                            <InputField showDollar dollarStop="50%" type="text" name="office_gross" value={formData?.office_gross} onChange={handleChange}
                                readOnly={!editMode} />
                        </Col>

                        <Col md={12}>
                            <label>TC Fee/Admin Brokerage Commission:</label>
                            <InputField showDollar dollarStop="50%" type="text" name="admin_broker_commission" value={formData?.admin_broker_commission}
                                onChange={handleChange} readOnly={!editMode} />
                        </Col>

                        <Col md={12}>
                            <label>Transaction Coordinator Name:</label>
                            <InputField showDollar dollarStop="50%" type="text" name="transaction_coordinator" value={formData?.transaction_coordinator}
                                onChange={handleChange} readOnly={!editMode} />
                        </Col>
                    </Row>
                </Col>

                <Col>
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


                                            <Col md={1} className="d-flex flex-column justify-content-end" style={{ marginBottom: "18px" }}>
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
                        <InputField type="textarea" rows="4" name="additional_comments" value={formData?.additional_comments}
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

                                <div className="form-check form-check-inline">
                                    <input type="radio" id="holdEarnestYes" name="holdEarnestMoney" className="form-check-input" value="Yes"
                                        checked={formData.holdEarnestMoney === "Yes"} onChange={handleRadioChange} disabled={!editMode} />
                                    <label className="form-check-label" htmlFor="holdEarnestYes">Yes</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input type="radio" id="holdEarnestNo" name="holdEarnestMoney" className="form-check-input" value="No"
                                        checked={formData.holdEarnestMoney === "No"} onChange={handleRadioChange} disabled={!editMode} />
                                    <label className="form-check-label" htmlFor="holdEarnestNo">No</label>
                                </div>

                            </div>
                        </Col>


                        <Col md={12}>
                            <label>Deposit Amount:</label>
                            <InputField showDollar dollarStop="50%" type="text" name="deposit_amount" value={formData?.deposit_amount}
                                onChange={handleChange} readOnly={!editMode} />
                        </Col>

                        <Col md={12}>
                            <DatePickerField label="Date of Check: " name="date_of_check" value={formData?.date_of_check}
                                onChange={handleDateChange} placeholder="MM, DD, YYYY" readOnly={false} />
                        </Col>

                        <Col md={12}>
                            <DatePickerField label="Date Posted to Log Book" name="date_posted_log" value={formData?.date_posted_log}
                                onChange={handleDateChange} placeholder="MM, DD, YYYY" readOnly={!editMode} />
                        </Col>
                    </Row>
                </Col>

                <Col>
                    <h5 className="fw-bold ">Referral Details</h5>
                    <Row className="g-3">
                        <Col md={12}>
                            <SelectField label="Referral Type" name="referral_type" options={referralTypes} value={formData?.referral_type}
                                onChange={handleSelectChange} placeholder="Select Type..." readOnly={!editMode} />
                        </Col>

                        <Col md={12}>
                            <label>Referral Amount:</label>
                            <Row>
                                <div className="d-flex  gap-2 ">
                                    <Col md={2} className="d-flex align-items-center"
                                        style={{
                                            border: "1px solid #dad1e0", height: "36px", borderRadius: "8px", padding: "0",
                                            opacity: !editMode ? "0.6" : "1", pointerEvents: !editMode ? "none" : "auto"
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
                                        <div style={{ width: "592px" }}>
                                            <InputField type="text" name="referral_amount" value={formData?.referral_amount} onChange={handleChange}
                                                readOnly={!editMode} />
                                        </div>
                                    </Col>

                                </div>
                            </Row>
                        </Col>

                        <Col md={12}>
                            <label>Referral Agent:</label>
                            <Row >
                                <div className="d-flex gap-2">
                                    <Col md={11}>
                                        <InputField type="text" name="referral_agent" value={formData?.referral_agent}
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
                                    <Col md={11}>
                                        <InputField type="file" name="w9_form" value={formData?.w9_form} onChange={handleChange} readOnly={!editMode} />
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
                            <InputField type="text" name="referral_brokerage_name" value={formData?.referral_brokerage_name}
                                onChange={handleChange} readOnly={!editMode} />
                        </Col>
                    </Row>
                </Col>

            </Row >
        </>
    );
};

export default CommissionTab;


// const commissionSection = formattedData.slice(0, 5);
// const dealSection = formattedData.slice(6, 10);
// const CreditSection = formattedData.slice(10, 13);

{/* <Row>
                <Col>
                    <h5 className="fw-bolder mb-3">Commission Info</h5>
                    {commissionSection.map((item, index) => (
                        <Row key={index}>
                            <Col>
                                <label className="fw-bold mt-3">{item.label}</label>
                                <InputField type="text" name={item.key} className="form-control mb-0"
                                    placeholder={item.label} value={formData?.[item.key] ?? item.value} onChange={handleChange} readOnly={!editMode}
                                    style={{ borderRadius: "6px", marginLeft: "6px" }} />
                            </Col>
                        </Row>
                    ))}
                </Col>
                <Col>
                    <h5 className="fw-bolder mb-3">Commission Info</h5>
                    {dealSection.map((item, index) => (
                        <Row key={index}>
                            <Col>
                                <label className="fw-bold mt-3">{item.label}</label>
                                <InputField type="text" name={item.key} className="form-control mb-0"
                                    placeholder={item.label} value={formData?.[item.key] ?? item.value} onChange={handleChange} readOnly={!editMode}
                                    style={{ borderRadius: "6px", marginLeft: "6px" }} />
                            </Col>
                        </Row>
                    ))}
                </Col>
                <Col>
                    <h5 className="fw-bolder mb-3">Commission Info</h5>
                    {CreditSection.map((item, index) => (
                        <Row key={index}>
                            <Col>
                                <label className="fw-bold mt-3">{item.label}</label>
                                <InputField type="text" name={item.key} className="form-control mb-0"
                                    placeholder={item.label} value={formData?.[item.key] ?? item.value} onChange={handleChange} readOnly={!editMode}
                                    style={{ borderRadius: "6px", marginLeft: "6px" }} />
                            </Col>
                        </Row>
                    ))}
                </Col>
            </Row> */}