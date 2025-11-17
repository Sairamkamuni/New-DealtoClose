import React, { useState } from "react";
import { Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import classnames from "classnames";
import Searchbar from "pages/utils/search_bar";
import { complianceTabs, complianceOptions } from "AllDummyData/DealsDummyData";
import { FaCheck } from "react-icons/fa";

const ComplianceTab = () => {
    const [complianceTab, setComplianceTab] = useState(2);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleCompliance = (tab) => {
        if (complianceTab !== tab) setComplianceTab(tab);
    };


    return (
        <>
            <Row>
                <Col>
                    <div className="d-flex align-items-center">
                        <Nav pills style={{ borderRadius: "12px", padding: "5px", gap: "5px" }}>
                            {complianceTabs.map((ct) => (
                                <NavItem key={ct.id}>
                                    <NavLink
                                        style={{
                                            border: "1px solid #dad1e0", borderRadius: "6px",
                                            color: complianceTab === ct.id ? "#fff" : "#000000ff",
                                            backgroundColor: complianceTab === ct.id ? "#7f5fbbff" : "transparent",
                                            transition: "all 0.3s ease",
                                        }}
                                        className={classnames({ active: complianceTab === ct.id })}
                                        onClick={() => toggleCompliance(ct.id)}
                                    >
                                        <span className="d-none d-sm-block"> {ct.label} </span>
                                    </NavLink>
                                </NavItem>
                            ))}
                        </Nav>
                    </div>
                </Col>
                <Col className="d-flex justify-content-end align-item-center">
                    <Searchbar style={{ width: "300px", height: "36px" }} />

                </Col>

            </Row>

            <TabContent activeTab={complianceTab} className="mt-3">
                <TabPane tabId={2} style={{ border: "1px solid #dad1e0", borderRadius: "10px", marginTop: "5px", }}>

                </TabPane>
            </TabContent>

        </>
    )
};

export default ComplianceTab;