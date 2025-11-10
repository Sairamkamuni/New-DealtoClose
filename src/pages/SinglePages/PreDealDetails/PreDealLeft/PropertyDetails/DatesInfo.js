import React from "react";
import { Row, Col } from "reactstrap";
import AccordionSection from "./AccordionSection";
import { OfferExpiryDate, CloseDate } from "AllDummyData/PreDealDummyData";

const DatesInfo = ({ isOpen, toggle }) => {
    const data = { offerExpiry: OfferExpiryDate[0], closeDate: CloseDate[0] };

    const infoItems = [
        { label: "Offer Expiry Date", value: data.offerExpiry },
        { label: "Close Date", value: data.closeDate },
    ];


    return (
        <AccordionSection title="Dates" isOpen={isOpen} toggle={toggle}>
            <div className="px-1 py-1">
                <Row className="mb-1">
                    <Col>
                        <p className="mb-0 fw-semibold  ">{data.address}</p>
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col>
                        <p className="mb-0  ">{data.city}</p>
                    </Col>
                </Row>

                {infoItems.map((item, index) => (
                    <Row key={index} className="align-items-center mb-1">
                        <Col xs="auto">
                            <p className="fw-bold mb-0">{item.label}:</p>
                        </Col>
                        <Col className="ps-0 text-muted">{item.value}</Col>
                    </Row>
                ))}
            </div>
        </AccordionSection>
    );
};

export default DatesInfo;
