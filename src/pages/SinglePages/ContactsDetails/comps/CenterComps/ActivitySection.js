import React, { useState } from "react";
import { Card, CardBody, TabContent, TabPane } from "reactstrap";
import TabsNav from "./TabsNav";
import AllButton from "pages/utils/allButton";

import AllTab from "./Tabs/AllTab";
import NotesTab from "./Tabs/NotesTab";
import EmailTab from "./Tabs/EmailTab";

const sampleData = [
    { note: "Call client for update", date: "Nov 6, 2025, 3:20 PM" },
    { note: "Welcome to our service!", date: "Aug 6, 2025, 5:40 AM" },
    { note: "Send follow-up email", date: "Oct 25, 2025, 11:10 AM" },
];


const ActivitySection = () => {
    const [activeTab, setActiveTab] = useState(1);

    const toggleTab = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };



    return (
        <Card className="shadow-sm" style={{ border: "1px solid #dad1e0", borderRadius: "12px" }}>
            <CardBody>
                <h3 className="fw-bold mb-4 text-dark">Activity</h3>

                {/* Tabs */}
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 fs-5">
                    <TabsNav activeTab={activeTab} toggleTab={toggleTab} />
                </div>

                {/* Tab Content */}
                <TabContent activeTab={activeTab} className="mt-4">
                    {/* All */}
                    <div className="mb-3">
                        <textarea rows="4" className="form-control" placeholder="Write your note here..." style={{ borderRadius: "8px" }} />
                        <AllButton width="140px" outline={false} label="Add Note" className="mt-3" />
                    </div>
                    <hr />
                    <h5 className="fw-bolder mb-3">History</h5>

                    <TabPane tabId={1}>
                        <AllTab initialData={sampleData} />
                    </TabPane>

                    <TabPane tabId={2}>
                        <NotesTab />
                    </TabPane>

                    <TabPane tabId={3}>
                        <EmailTab />
                    </TabPane>
                </TabContent>
            </CardBody>
        </Card>
    );
};

export default ActivitySection;
