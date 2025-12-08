import React, { useState } from "react";
import { Row, Col, Card } from "reactstrap";
import AllButton, { EditButton } from "pages/utils/allButton";
import Flatpickr from "react-flatpickr";
import moment from "moment";

const keyWithDates = [
    { label: "Effective Date", date: "Nov 12, 2025" },
    { label: "1st Escrow Due", date: "Nov 15, 2025" },
    { label: "Loan Application Due", date: "Nov 17, 2025" },
    { label: "Association App Due", date: "Nov 17, 2025" },
    { label: "2nd Escrow Due", date: "Nov 12, 2025" },
    { label: "Inspection Due", date: "Nov 12, 2025" },
    { label: "Loan Commitment Due", date: "Nov 30, 2025" },
    { label: "Closing Date", date: "Dec 12, 2025" },
];

const keyDetails = [
    { label: "Status", value: "Under Contract" },
    { label: "Office Name", value: "Jupiter" },
    { label: "Seller Credit to Buyer", value: "$5,000" },
    { label: "Purchase Price", value: "$520,000" },
    { label: "File ID", value: "259452" },
    { label: "Broker Credit", value: "$0.00" },
    { label: "Representing", value: "Seller" },
    { label: "Office Lead Yes/No", value: "No" },
    { label: "Lender Credit", value: "$0.00" },
    { label: "Source", value: "Zillow" },
    { label: "Team Agent Name", value: "Ashley Niemela" },
    { label: "Tags", value: "Seller, 2025" },
    { label: "TC Name", value: "Raj Kamuni" },
    { label: "Listing Price", value: "$550,000" },
    { label: "Property Type", value: "Single Family Detached" },
    { label: "Beds", value: "3" },
    { label: "MLS#", value: "A1256421" },
    { label: "Year Built", value: "1990" },
    { label: "Baths", value: "2" },
    { label: "Parcel ID", value: "12564785476582" },
    { label: "SqFt", value: "2,985" },
    { label: "County Name", value: "Broward" },
];

const KeyDatesTab = () => {
    const [dateChangeMode, setDateChangeMode] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

    const topSection = keyDetails.slice(0, 13)
    const bottomSection = keyDetails.slice(13)

    return (
        <Row className="pe-3" >
            <Col md={4}>
                <Card className="p-3" style={{ borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.2)" }} >
                    {/* Header */}
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <h5 className="text-start fw-bolder mb-0">Key Dates</h5>
                        <EditButton className={dateChangeMode ? "active" : ""} iconMarginRight="0px" iconFontSize="20px"
                            title={`Edit Mode ${dateChangeMode ? "Active" : "Disabled"}`} width="40px" onClick={() => setDateChangeMode(!dateChangeMode)} />
                    </div>


                    <div className="mt-3  ">
                        {keyWithDates.map((item, index) => (
                            <Row key={index} >
                                <Col className="d-flex">
                                    <span className="me-3 mb-3 mb-0">o</span>
                                    <p className="mb-4">{item.label} :</p>
                                </Col>
                                <Col>
                                    {dateChangeMode ? (
                                        <div className="w-100 mt-1">
                                            <Flatpickr className="form-control" value={moment(`Nov ${index + 1}, 2025`).format("YYYY-MM-DD")}
                                                options={{ altInput: true, altFormat: "F j, Y", dateFormat: "Y-m-d", }} placeholder="MM, DD, YYYY" />
                                        </div>
                                    ) : (
                                        <h6 className="ms-5 mb-2 fw-bold">{item.date}</h6>
                                    )}
                                </Col>
                            </Row>
                        ))}
                    </div>
                </Card>
            </Col>

            <Col md={8}>
                <div className="d-flex justify-content-end align-items-end mb-3">
                    <AllButton label="Edit" width="60px" color="primary" className={isEditMode ? "active" : ""} outline={false}
                        title={`Edit Mode ${isEditMode ? "Active" : "Disabled"}`} onClick={() => setIsEditMode(!isEditMode)} />
                </div>

                <Row>
                    {topSection.map((item, index) => (
                        <Col md={4} key={index} className="mb-3">
                            <p className="mb-0" style={{ fontSize: "14px" }}>
                                {item.label}
                            </p>
                            {isEditMode ? (
                                <input type="text" defaultValue={item.value} className="form-control mt-1" />
                            ) : (
                                <h6 className="fw-bold mt-1">{item.value}</h6>
                            )}
                        </Col>
                    ))}
                </Row>
                <hr />
                <Row>
                    {bottomSection.map((item, index) => (
                        <Col md={4} key={index} className="mb-3">
                            <p className="mb-0" style={{ fontSize: "14px" }}>
                                {item.label}
                            </p>
                            {isEditMode ? (
                                <input type="text" defaultValue={item.value} className="form-control mt-1" />
                            ) : (
                                <h6 className="fw-bold mt-1">{item.value}</h6>
                            )}
                        </Col>
                    ))}
                </Row>
            </Col>

        </Row>
    );
};

export default KeyDatesTab;
