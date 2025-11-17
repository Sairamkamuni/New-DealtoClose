import React, { useState, useEffect } from "react";
import { Row, Col, Card, CardBody, TabContent, TabPane } from "reactstrap";

import DealsTabs from "./DealsTabs";
import KeyDatesTab from "./Tabs/KeyDatesTab";
import EmailTab from "./Tabs/EmailTab";
import TaskTab from "./Tabs/TaskTab";
import DocumentsTab from "./Tabs/DocumentsTab";
import ContactTabs from "./Tabs/ContactTab";
import ComplianceTab from "./Tabs/ComplianceTab";

const NavsHeader = ({ activeTags, toggleTags }) => {
    return (
        <Row className="mt-4">
            <Col>
                <DealsTabs activeTags={activeTags} toggleTags={toggleTags} />

                <Card style={{ border: "1px solid #dad1e0", }} >
                    <CardBody>
                        <TabContent activeTab={activeTags} className=" text-muted">
                            <TabPane tabId={1}>
                                <KeyDatesTab />
                            </TabPane>

                            <TabPane tabId={2}>
                                <EmailTab />
                            </TabPane>

                            <TabPane tabId={3}>
                                <TaskTab />
                            </TabPane>

                            <TabPane tabId={4}>
                                <DocumentsTab />
                            </TabPane>

                            <TabPane tabId={5}>
                                <ContactTabs />
                            </TabPane>

                            <TabPane tabId={6}>
                                <ComplianceTab />
                            </TabPane>


                        </TabContent>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default NavsHeader;