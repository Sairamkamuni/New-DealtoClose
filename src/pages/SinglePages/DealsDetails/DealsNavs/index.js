import React from "react";
import { Row, Col, Card, CardBody, TabContent, TabPane } from "reactstrap";

import DealsTabs from "./DealsTabs";
import KeyDatesTab from "./Tabs/KeyDatesTab";
import EmailTab from "./Tabs/EmailTab";
import TaskTab from "./Tabs/TaskTab";
import DocumentsTab from "./Tabs/DocumentsTab";
import ContactTabs from "./Tabs/ContactTab";
import ComplianceTab from "./Tabs/ComplianceTab";
import CommissionTab from "./CommissionTab";
import NoteTab from "./Tabs/NoteTab";

import { FormHandlers } from "pages/InputFields/FormHandlers";

const NavsHeader = ({ activeTags, toggleTags }) => {

    const { formData, setFormData, handleChange, handleSubmit, handleSelectChange, handleDateChange, handleContactChange } =
        FormHandlers({ apiUrl: "/api/deals", entity: "Deal", });


    return (
        <Row className="mt-4">
            <Col>
                <DealsTabs activeTags={activeTags} toggleTags={toggleTags} />

                <Card style={{ border: "1px solid #dad1e0", }} >
                    <CardBody>
                        <TabContent activeTab={activeTags} className=" text-muted">
                            <TabPane tabId={1}>
                                <KeyDatesTab

                                />
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

                            <TabPane tabId={7}>
                                <CommissionTab
                                    handleDateChange={handleDateChange}
                                    handleSelectChange={handleSelectChange}
                                />
                            </TabPane>

                            <TabPane tabId={8}>
                                <NoteTab />
                            </TabPane>


                        </TabContent>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default NavsHeader;