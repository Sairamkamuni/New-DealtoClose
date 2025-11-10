import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const PreDealsHeader = () => {
    return (
        <Row>
            <Col md={3}>
                <Link to="/pre-deals" className="d-flex align-items-center gap-2" style={{ cursor: "pointer" }} >
                    <i className="bx bx-chevron-left" style={{ fontSize: "24px" }}></i>
                    <h5 className="mb-0" style={{ borderBottom: "2px solid transparent", transition: "border-color 0.2s ease" }}
                        onMouseEnter={(e) => (e.currentTarget.style.borderBottom = "2px solid #000")}
                        onMouseLeave={(e) => (e.currentTarget.style.borderBottom = "2px solid transparent")}
                    >
                        Back
                    </h5>
                </Link>
            </Col>

            <Col md={9}>
                <div className="d-flex flex-wrap gap-2 " >
                    <i className="bx bx-home-alt" style={{ fontSize: "20px" }}></i>
                    <h5 className="mb-0">
                        2650 SW 76th Ave #101, Miami, FL 33155, USA
                    </h5>
                    <h5 className="mb-0 text-muted">|</h5>
                    <i className="fas fa-user-alt" style={{ fontSize: "20px" }}></i>
                    <h5 className="mb-0">
                        Client 1 First, Last Name & Client 2 First, Last Name
                    </h5>
                </div>

            </Col>
        </Row>
    );
};

export default PreDealsHeader;
