import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { SelectField } from "pages/InputFields/InputFields";
import { BigDropzone } from "helpers/Dropzone";
import AllButton from "pages/utils/allButton";
import { transactionOwner } from "AllDummyData/DealsDummyData";

const CreateNewDeal = ({ handleFilesData, formData, handleRadioChange, handleSelectChange }) => {
    const [activeSeller, setActiveSeller] = useState("Seller");
    const [activeLandlord, setActiveLandlord] = useState("Landlord");

    return (
        <>
            <Row>
                <Col md="3" className="mb-2">
                    <div className="sale-lease-toggle gap-2">
                        <label className={`sale-lease-option ${formData.type === "sale" ? "active" : ""}`}>
                            <input type="radio" name="type" value="sale" className="sale-lease-radio"
                                checked={formData.type === "sale"} onChange={handleRadioChange} />
                            <div className="sale-lease-indicator"></div>
                            Sale
                        </label>

                        <label className={`sale-lease-option ${formData.type === "lease" ? "active" : ""}`}>
                            <input type="radio" name="type" value="lease" className="sale-lease-radio"
                                checked={formData.type === "lease"} onChange={handleRadioChange} />
                            <div className="sale-lease-indicator"></div>
                            Lease
                        </label>
                    </div>
                </Col>
            </Row>

            {formData.type == 'sale' && (
                <Row>
                    <Col>
                        <div className="d-flex align-items gap-3 mb-2">
                            <AllButton label="Seller" className={activeSeller === "Seller" ? "allbutton-wrapper active" : "allbutton-wrapper"}
                                onClick={() => setActiveSeller("Seller")} />
                            <AllButton label="Buyer" className={activeSeller === "Buyer" ? "allbutton-wrapper active" : "allbutton-wrapper"}
                                onClick={() => setActiveSeller("Buyer")} />
                            <AllButton label="Both" className={activeSeller === "Both" ? "allbutton-wrapper active" : "allbutton-wrapper"}
                                onClick={() => setActiveSeller("Both")} />
                        </div>
                    </Col>
                </Row>
            )}
            {formData.type == 'lease' && (
                <Row>
                    <Col>
                        <div className="d-flex align-items gap-3 mb-2">
                            <AllButton label="Landlord" className={activeLandlord === "Landlord" ? "allbutton-wrapper active" : "allbutton-wrapper"}
                                onClick={() => setActiveLandlord("Landlord")} />
                            <AllButton label="Tenant" className={activeLandlord === "Tenant" ? "allbutton-wrapper active" : "allbutton-wrapper"}
                                onClick={() => setActiveLandlord("Tenant")} />
                            <AllButton label="Both" className={activeLandlord === "Both" ? "allbutton-wrapper active" : "allbutton-wrapper"}
                                onClick={() => setActiveLandlord("Both")} />
                        </div>
                    </Col>
                </Row>
            )}

            <Row>
                <Col>
                    <BigDropzone callback={handleFilesData} showExtras={false} />
                </Col>
            </Row>

            <Row>
                <Col md="6" className="mt-3">
                    <SelectField label="Transaction Owner" name="transaction_owner" options={transactionOwner} value={formData?.transaction_owner}
                        onChange={handleSelectChange} placeholder="Select Type..." />
                </Col>
            </Row>
        </>
    );
};

export default CreateNewDeal;