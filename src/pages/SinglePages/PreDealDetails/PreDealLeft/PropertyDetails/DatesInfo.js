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
            <Row className="mb-1">
                <Col>
                    <p className="mb-0">{data.address}</p>
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
                        <p className="mb-0 fw-bold text-muted">{item.label}:</p>
                    </Col>
                    <Col className="ps-0 ">
                        <span className="text-underline-after">{item.value}</span>
                    </Col>
                </Row>
            ))}
        </AccordionSection>
    );
};

export default DatesInfo;
