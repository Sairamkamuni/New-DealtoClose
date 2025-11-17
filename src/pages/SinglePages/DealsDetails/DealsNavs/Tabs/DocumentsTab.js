import React, { useState } from "react";
import { Card, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Table, Input, Badge } from "reactstrap";
import classnames from "classnames";
import AllButton, { AddPlusCircleButton, } from "pages/utils/allButton";
import Searchbar from "pages/utils/search_bar";
import AddDocumentModal from "pages/AllModals/AddDocumentModal";
import DocButtons from "./DocButtons";

import Datatables from "pages/table/datatable";
import { DealDockTableColumns } from "pages/TableColumns/DealTableColumns";

import { dealsDocumentsTabs, foldersRows } from "AllDummyData/DealsDummyData";

const DocumentsTab = ({ callback }) => {
    const [docTags, setDocTags] = useState(1)
    const [docModalOpen, setDocModalOpen] = useState(false);

    const toggleDoc = (tab) => {
        if (docTags !== tab) setDocTags(tab);
    };


    return (
        <>
            <Row>
                <Col className="d-flex justify-content-between align-items-center" style={{ borderRadius: "12px", padding: "5px", backgroundColor: "#ece4f1", gap: "5px" }}>
                    <Nav pills>
                        {
                            dealsDocumentsTabs.map((tab) => (
                                <NavItem key={tab.id}>
                                    <NavLink
                                        style={{
                                            border: "1px solid #dad1e0",
                                            borderRadius: "6px", fontWeight: "500", color: docTags === tab.id ? "#fff" : "#000000ff",
                                            backgroundColor: docTags === tab.id ? "#7f5fbbff" : "transparent", transition: "all 0.3s ease",
                                        }}
                                        className={classnames({ active: docTags === tab.id })} onClick={() => toggleDoc(tab.id)} >
                                        <span className="d-none d-sm-block">{tab.label}</span>
                                    </NavLink>
                                </NavItem>
                            ))
                        }
                    </Nav>
                    <AddPlusCircleButton width="36px" borderless={true} onClick={() => console.log("clicked")} className="ms-2" />
                </Col>
                <Col md={7} className="d-flex justify-content-end align-item-center">
                    <Searchbar style={{ width: "300px", height: "36px" }} />
                    <AddPlusCircleButton label="Add Document" width="150px" height="36px" borderless={true} onClick={(e) => { e.stopPropagation(); setDocModalOpen(true) }} className="ms-2" />
                    <AllButton label="Archive" width="100px" height="36px" borderless={true} onClick={() => console.log("clicked")} className="ms-2" />
                </Col>
            </Row >

            <TabContent activeTab={docTags} className="p-2 text-muted">
                <TabPane tabId={1} >
                    <DocButtons />
                    <div style={{ border: "1px solid #dad1e0", borderRadius: "10px", marginTop: "15px" }} >
                        <Datatables
                            columns={DealDockTableColumns(callback)}
                            showTableOnly={true}
                            rows={foldersRows}
                            keyField={"id"}
                            isCheckbox={true}
                            loading={false}
                            ssr={() => { }}
                        />
                    </div>
                </TabPane>


            </TabContent>

            <AddDocumentModal isOpen={docModalOpen} toggle={() => setDocModalOpen(!docModalOpen)} />
        </>
    )
}

export default DocumentsTab;