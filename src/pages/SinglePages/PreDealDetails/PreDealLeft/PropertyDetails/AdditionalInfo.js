import React from "react";
import { Row, Col } from "reactstrap";
import AccordionSection from "./AccordionSection";
import { LinkedDealTitle, LinkedWebLinks } from "AllDummyData/PreDealDummyData";

const AdditionalInfo = ({ isOpen, toggle }) => {
    const data = {
        title: LinkedDealTitle[0],
        links: LinkedWebLinks,
    };

    return (
        <AccordionSection title="Additional" isOpen={isOpen} toggle={toggle}>
            <div className="px-1 py-1">
                <Row>
                    <Col>
                        <p className="fw-semibold mb-1">{data.title}</p>
                    </Col>
                </Row>
                {data.links.map((link, index) => (
                    <Row key={index}>
                        <Col>
                            <p className="mb-0 text-primary" style={{ cursor: "pointer" }}>
                                {link}
                            </p>
                        </Col>
                    </Row>
                ))}
            </div>
        </AccordionSection>
    );
};

export default AdditionalInfo;
