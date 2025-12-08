import React from "react";
import { Row, Col, Progress } from "reactstrap";
import { Link } from "react-router-dom";

const milestones = [
    { label: "Effective Date", date: "Jun 20, 2025", done: true },
    { label: "1st Initial Deposit", date: "Jun 20, 2025", done: true },
    { label: "Loan & Association Apply", date: "Jun 25, 2025", done: true },
    { label: "Inspection Due", date: "Jun 29, 2025", done: true },
    { label: "Loan Commitment", date: "Jul 15, 2025", done: true },
    { label: "Closing Date", date: "Jul 20, 2025", done: false },
];

const DealsHeader = () => {

    const progressPercent = (milestones.filter((m) => m.done).length / milestones.length) * 100;

    return (
        <>
            <Row className="mb-3 d-flex align-items-center justify-content-between">
                <Col md={3}>
                    <Link to="/deals" className="d-flex align-items-center gap-2" style={{ cursor: "pointer" }} >
                        <i className="bx bx-chevron-left" style={{ fontSize: "24px", marginBottom: "1px" }}></i>
                        <h5 className="mb-0 text-underline-after" style={{ borderBottom: "2px solid transparent", transition: "border-color 0.2s ease" }}>
                            Back
                        </h5>
                    </Link>
                </Col>

                <Col md={9}>
                    <Row>
                        <Col xs="auto" className="d-flex flex-wrap gap-2">
                            <i className="bx bx-home-alt" style={{ fontSize: "20px", marginTop: "-2px" }}></i>
                            <h5 className="mb-0"> 2650 SW 76th Ave #101, Miami, FL 33155, USA </h5>
                        </Col>
                        <Col xs="auto">
                            <h5 className="mb-0 text-muted">|</h5>
                        </Col>
                        <Col className="d-flex flex-wrap gap-2">
                            <i className="bx bx-home-alt" style={{ fontSize: "20px", marginTop: "-2px" }}></i>
                            <h5 className="mb-0"> 2650 SW 76th Ave #101, Miami, FL 33155, USA </h5>
                        </Col>
                    </Row>

                </Col>
            </Row>

            <div className="p-3">
                <div className="position-relative" style={{ height: "40px", marginLeft: "20px", marginRight: "20px" }}>
                    <Progress value={progressPercent} style={{ height: "4px", backgroundColor: "#d4d9de", position: "absolute", top: "18px", width: "100%" }}
                        color="success" />
                    {milestones.map((m, i) => (
                        <div key={i} className="text-center position-absolute"
                            style={{ left: `${(i / (milestones.length - 1)) * 100}%`, transform: "translateX(-50%)", top: 0 }}
                        >
                            <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: m.done ? "#34c38f" : "#ccc", margin: "0 auto" }}></div>
                            <div style={{ fontSize: "14px", marginTop: "8px", color: "#243e79", }} >
                                {m.label}
                            </div>
                            <div style={{ fontSize: "12px", color: "#555" }}>{m.date}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default DealsHeader;