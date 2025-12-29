import React, { useState } from "react";
import { Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import EmailCompose from "pages/AllModals/EmailCompose";
import MailsList from "pages/Inbox/email-list"
import EmailSideBar from "pages/Inbox/email-sidebar";
import Searchbar from "pages/utils/search_bar";
import { AdvancedSearchDropdown } from "pages/utils/filterDropdown";

import { EmailButton, PrintButton } from "pages/utils/allButton";
import { dealsEmailTabs } from "AllDummyData/DealsDummyData";

const EmailTab = () => {
    const [emailTags, setEmailTags] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);

    const toggleEmail = (tab) => {
        if (emailTags !== tab) setEmailTags(tab);
    };

    return (
        <>
            <Row>
                <Col>
                    <div className="d-flex align-items-center">
                        <Nav pills style={{ borderRadius: "12px", padding: "5px", gap: "5px", }}>
                            {dealsEmailTabs.map((tab) => (
                                <NavItem key={tab.id}>
                                    <NavLink
                                        style={{
                                            border: "1px solid #dad1e0",
                                            borderRadius: "6px", fontWeight: "500", color: emailTags === tab.id ? "#fff" : "#000000ff",
                                            backgroundColor: emailTags === tab.id ? "#7f5fbbff" : "transparent", transition: "all 0.3s ease",
                                        }}
                                        className={classnames({ active: emailTags === tab.id })} onClick={() => toggleEmail(tab.id)} >
                                        <span className="d-none d-sm-block">{tab.label}</span>
                                    </NavLink>
                                </NavItem>
                            ))}
                        </Nav>
                        <EmailButton label="Compose Email" width="160px" height="36px" onClick={(e) => { e.stopPropagation(); setModalOpen(true) }} className="me-2" />
                    </div>
                </Col>

                <Col>
                    <div className="d-flex align-items-center justify-content-end gap-2 mt-2">
                        <Searchbar style={{ width: "400px", height: "36px" }} />
                        <AdvancedSearchDropdown style={{ height: "36px", marginRight: "200px" }} />
                        <PrintButton width="40px" height="36px" iconMarginRight="0px" onClick={() => window.print()} />
                    </div>
                </Col>
            </Row>

            <TabContent activeTab={emailTags} className="mt-3">
                <TabPane tabId={1}>
                    <Row className="g-0">
                        <Col md={2}>
                            <EmailSideBar />
                        </Col>

                        <Col md={10}>
                            <MailsList showToolbar={false} />
                        </Col>
                    </Row>
                </TabPane>


                <TabPane tabId={2}>
                    <div className="p-3">
                        <h5>Starred Emails</h5>
                    </div>
                </TabPane>

                <TabPane tabId={3}>
                    <div className="p-3">
                        <h5>Trash / Archived Emails</h5>
                        <p>No deleted emails yet 🎉</p>
                    </div>
                </TabPane>
            </TabContent>

            <EmailCompose isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)} />
        </>
    )
}

export default EmailTab;