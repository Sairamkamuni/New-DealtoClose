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
    const selectedRepresenting = Representing[0];
    const selectedType = Type[0];
    const [modalOpen, setModalOpen] = useState(false);
    const [cols, setCols] = useState({ col1: true, col2: true, col3: true, col4: true });

    const toggleCol = (colName) => {
        setCols((prev) => ({ ...prev, [colName]: !prev[colName], }));
    };


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

                <Row className="align-items-center">
                    <Col xs="auto">
                        <p className="fw-bold mb-0">Representing:</p>
                    </Col>
                    <Col style={{ marginLeft: "-18px" }}>{selectedRepresenting}</Col>
                </Row>

                <Row className="align-items-center mt-2">
                    <Col xs="auto">
                        <p className="fw-bold mb-0">Type:</p>
                    </Col>
                    <Col style={{ marginLeft: "-18px" }}>{selectedType}</Col>
                </Row>

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
