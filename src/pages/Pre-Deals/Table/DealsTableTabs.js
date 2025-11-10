import React from "react";
import { Row, Col, Card, TabContent, TabPane } from "reactstrap";
import Datatables from "pages/table/datatable";
import { PreDealTableColumns } from "pages/TableColumns/PreDealTableColumns";

const DealsTableTabs = ({ activeTab, allRows, buyerRows, sellerRows, callback }) => {
    return (
        <Row>
            <Col>
                <Card>
                    <TabContent activeTab={activeTab} className="border border-primary-subtle">
                        <TabPane tabId={1}>
                            <Datatables
                                columns={PreDealTableColumns(callback)}
                                rows={allRows}
                                keyField="id"
                                showTableOnly
                                isCheckbox
                                loading={false}
                                ssr={() => { }}
                            />
                        </TabPane>
                        <TabPane tabId={2}>
                            <Datatables
                                columns={PreDealTableColumns(callback)}
                                rows={buyerRows}
                                keyField="id"
                                showTableOnly
                                isCheckbox
                                loading={false}
                                ssr={() => { }}
                            />
                        </TabPane>
                        <TabPane tabId={3}>
                            <Datatables
                                columns={PreDealTableColumns(callback)}
                                rows={sellerRows}
                                keyField="id"
                                showTableOnly
                                isCheckbox
                                loading={false}
                                ssr={() => { }}
                            />
                        </TabPane>
                    </TabContent>
                </Card>
            </Col>
        </Row>
    );
};

export default DealsTableTabs;
