import React, { useState } from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import { PencilButton } from "pages/utils/allButton";
import PropertyInfo from "./PropertyDetails/PropertyInfo";
import OfferDetails from "./PropertyDetails/OfferDetails";
import DatesInfo from "./PropertyDetails/DatesInfo";
import AdditionalInfo from "./PropertyDetails/AdditionalInfo";
import PreDealsModal from "pages/Pre-Deals/Modal";

import { Representing, Type } from "AllDummyData/PreDealDummyData";

const PreDealLeft = () => {
    const data = { representing: Representing[0], type: Type[2] };
    const [modalOpen, setModalOpen] = useState(false);
    const [cols, setCols] = useState({ col1: true, col2: true, col3: true, col4: true });

    const toggleCol = (colName) => {
        setCols((prev) => ({ ...prev, [colName]: !prev[colName], }));
    };

    const infoItems = [
        { label: "Representing", value: data.representing },
        { label: "Type #", value: data.type },
    ];

    return (
        <Card className="mt-4" style={{ border: "1px solid #dad1e0", borderRadius: "12px" }}>
            <CardBody>

                <Row className="d-flex justify-content-between align-items-center mb-3">
                    <Col>
                        <h4 className="text-start fw-bolder mb-0"> Pre-Deal Overview </h4>
                    </Col>
                    <Col xs="auto">
                        <PencilButton label="Edit" width="86px" onClick={() => setModalOpen(true)} />
                    </Col>
                </Row>

                {infoItems.map((item, index) => (
                    <Row key={index} className="align-items-center mb-1">
                        <Col xs="auto">
                            <p className="mb-0 fw-bold text-muted">{item.label}:</p>
                        </Col>
                        <Col className="ps-0" style={{ marginLeft: "-5px" }}>
                            <span className="text-underline-after">{item.value}</span>
                        </Col>

                    </Row>
                ))}

                <Row className="mt-4">
                    <Col>
                        <PropertyInfo isOpen={cols.col1} toggle={() => toggleCol("col1")} />
                        <hr />
                        <OfferDetails isOpen={cols.col2} toggle={() => toggleCol("col2")} />
                        <hr />
                        <DatesInfo isOpen={cols.col3} toggle={() => toggleCol("col3")} />
                        <hr />
                        <AdditionalInfo isOpen={cols.col4} toggle={() => toggleCol("col4")} />
                    </Col>
                </Row>
            </CardBody>
            <PreDealsModal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)} />
        </Card>
    );
};

export default PreDealLeft;
