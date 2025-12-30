import React from "react";
import { Row, Col } from "reactstrap";
import { omplianceTableData, DealsComplianceOptions, ComplianceComments } from "AllDummyData/DealsDummyData";
import Select from "react-select";
import { OptionsDropdown } from "pages/utils/filterDropdown";
import AllButton from "pages/utils/allButton";

const ComplianceComp = () => {
    return (
        <div className="w-100">
            <Row className="align-items-center fw-semibold py-3"
                style={{ border: "1px solid #e6dff0", borderRadius: "8px", background: "#faf7fd" }} >
                <Col md="1" className="text-center">View Doc</Col>
                <Col md="1" className="text-center">Sr. No.</Col>
                <Col md="2">Checklist Name</Col>
                <Col md="5">Comments</Col>
                <Col md="2" className="text-center">Attach</Col>
                <Col md="1" className="text-center">Actions</Col>
            </Row>

            {/* Data Rows */}
            {omplianceTableData.map((comps, index) => (
                <Row key={comps.id ?? index} className="align-items-center py-3"
                    style={{ border: "1px solid #e6dff0", borderRadius: "8px", background: "#f4fbf6" }} >
                    <Col md="1" className="text-center">
                        <AllButton label="View" width="70px" />
                    </Col>

                    <Col md="1" className="text-center">
                        {comps.sr_no}
                    </Col>

                    <Col md="2">
                        {comps.checklist_name}
                    </Col>

                    <Col md="5">
                        <Select value={{ label: comps.comments, value: comps.comments }} options={ComplianceComments.map(s => ({ label: s, value: s }))}
                            menuPortalTarget={document.body} classNamePrefix="react-select"
                            styles={{
                                control: (base) => ({ ...base, minHeight: 38, eight: 38, borderRadius: 8, backgroundColor: "#f1f7ff" }),
                                valueContainer: (base) => ({ ...base, height: 38, padding: "0 8px" }),
                                indicatorsContainer: (base) => ({ ...base, height: 38 }),
                                menuPortal: (base) => ({ ...base, zIndex: 9999 })
                            }}
                        />
                    </Col>

                    <Col md="2" className="d-flex justify-content-center align-items-center">
                        <AllButton label="Upload" width="70px" />
                    </Col>

                    <Col md="1" className="text-center">
                        <OptionsDropdown options={DealsComplianceOptions} leftMargin="-100px" />
                    </Col>
                </Row>
            ))}
        </div>
    );
};

export default ComplianceComp;
