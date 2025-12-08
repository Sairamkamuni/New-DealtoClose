import React from "react";
import { Row, Col } from "reactstrap";
import AccordionSection from "./AccordionSection";
import { LinkedDealTitle, LinkedWebLinks } from "AllDummyData/PreDealDummyData";

const AdditionalInfo = ({ isOpen, toggle }) => {
    const data = { title: LinkedDealTitle[0], links: LinkedWebLinks };

    return (
        <AccordionSection title="Additional" isOpen={isOpen} toggle={toggle}>
            <Row>
                <Col>
                    <p className="mb-2">{data.title}</p>
                </Col>
            </Row>
            {data.links.map((link, index) => (
                <Row key={index}>
                    <Col>
                        <p className="mb-0 text-primary text-underline-after" style={{ cursor: "pointer" }}>
                            {link}
                        </p>
                    </Col>
                </Row>
            ))}
        </AccordionSection>
    );
};

export default AdditionalInfo;
