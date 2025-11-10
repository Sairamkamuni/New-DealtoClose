import React from "react";
import { Row, Col } from "reactstrap";
import AccordionSection from "./AccordionSection";
import { PropertyAddress, PropertyCity, County, MLS, Subdivision, HOAFee } from "AllDummyData/PreDealDummyData";

const PropertyInfo = ({ isOpen, toggle }) => {
    const data = { address: PropertyAddress[0], city: PropertyCity[0], county: County[0], mls: MLS[0], subdivision: Subdivision[0], hoaFee: HOAFee[0] };

    const infoItems = [
        { label: "County", value: data.county },
        { label: "MLS #", value: data.mls },
        { label: "Subdivision", value: data.subdivision },
        { label: "HOA Fee", value: data.hoaFee },
    ];

    return (
        <AccordionSection title="Property Information" isOpen={isOpen} toggle={toggle}>
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

export default PropertyInfo;
