import React, { useState } from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const AttachedDealsCard = () => {

    return (
        <Card className="shadow-sm mb-4" style={{ border: "1px solid #dad1e0", borderRadius: "12px" }}>
            <CardBody>
                <h4 className="mb-3 fw-bolder">Attached Deals</h4>
                <p className="mb-3">No deals attached yet.</p>
                <Row>
                    <Col md="12">
                        <Link to="/deals-details" style={{ borderBottom: "2px solid transparent", transition: "border-color 0.2s ease" }}
                            onMouseEnter={(e) => (e.currentTarget.style.borderBottom = "1px solid #908e93ff")}
                            onMouseLeave={(e) => (e.currentTarget.style.borderBottom = "1px solid transparent")}>
                            123 Main Street Purchase
                        </Link>
                    </Col>
                    <Col className="mt-2">
                        <Link to="/deals-details" style={{ borderBottom: "2px solid transparent", transition: "border-color 0.2s ease" }}
                            onMouseEnter={(e) => (e.currentTarget.style.borderBottom = "1px solid #908e93ff")}
                            onMouseLeave={(e) => (e.currentTarget.style.borderBottom = "1px solid transparent")}>
                            456 Main Street Purchase
                        </Link>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default AttachedDealsCard;
