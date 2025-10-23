import React, { useState } from "react";
import { Row, Col, Card } from "reactstrap";
import { FilterDropdown } from "pages/utils/filterDropdown";
import { DashboardOptions } from "pages/Options/DropdownOptions";

const CountCardBar = () => {
    const [selectedOption, setSelectedOption] = useState("all_team_members");

    // Dummy data
    const reportData = {
        currentMonth: {
            sales: { value: 10, change: "+2 (25.0%) vs Prev." },
            volume: { value: "$500,000", change: "+50,000 (11.1%) vs Prev." },
            gci: { value: "$15,000", change: "+1,500 (11.1%) vs Prev." },
        },
        ytd: {
            sales: { value: 50, change: "+5 (11.1%) vs Prev." },
            volume: { value: "$2,500,000", change: "+200,000 (8.7%) vs Prev." },
            gci: { value: "$75,000", change: "+6,000 (8.7%) vs Prev." },
        },
    };

    const renderMetric = (label, data) => (
        <Col>
            <Card style={{ border: "1px solid #dad1e0", borderRadius: "12px" }} >
                <div className="text-center p-3 text-muted fw-semibold" style={{ fontSize: "14px" }}>
                    {label}
                    <h4 className="fw-bold mt-3 text-dark">{data.value}</h4>
                    <div className="text-success small mt-1">{data.change}</div>
                </div>
            </Card>
        </Col>
    );

    return (
        <Col>
            <Card style={{ border: "1px solid #dad1e0", borderRadius: "12px" }} >
                <Row className="p-3 align-items-center mt-3">
                    <Col>
                        <h3 className="mb-0 fw-bold">Reports</h3>
                    </Col>
                    <Col xs="auto">
                        <FilterDropdown dropdownFilterOptions={DashboardOptions} selectedOption={selectedOption} setSelectedOption={setSelectedOption} width="160px" />
                    </Col>
                </Row>

                <Row className="ps-3 pe-3">
                    {/* Current Month */}
                    <Col md="6" >
                        <Card className="p-3" style={{ border: "1px solid #dad1e0", borderRadius: "12px" }} >
                            <div className="mt-2">
                                <h5 className="text-start fw-bold mb-3 ms-2">Current Month vs. Prev. Year</h5>
                                <Row>
                                    {renderMetric("Sales #", reportData.currentMonth.sales)}
                                    {renderMetric("Volume", reportData.currentMonth.volume)}
                                    {renderMetric("GCI", reportData.currentMonth.gci)}
                                </Row>
                            </div>
                        </Card>
                    </Col>

                    {/* Year-to-Date */}
                    <Col md="6">
                        <Card className="p-3" style={{ border: "1px solid #dad1e0", borderRadius: "12px" }} >
                            <div className="mt-2">
                                <h5 className="text-start fw-bold mb-3 ms-2">Year-to-Date vs. Prev. YTD</h5>
                                <Row>
                                    {renderMetric("Sales #", reportData.ytd.sales)}
                                    {renderMetric("Volume", reportData.ytd.volume)}
                                    {renderMetric("GCI", reportData.ytd.gci)}
                                </Row>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Card>
        </Col>

    );
};

export default CountCardBar;
