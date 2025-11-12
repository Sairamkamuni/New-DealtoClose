import React from "react";
import { Row, Col, Card, TabContent, TabPane } from "reactstrap";
import Datatables from "pages/table/datatable";
import { DealTableColumns } from "pages/TableColumns/DealTableColumns";

const DealsTable = ({ activeTab, allRows, buyerRows, sellerRows, callback }) => {
    return (
        <Row>
            <Col>
                <Card>
                    <TabContent activeTab={activeTab} >
                        <TabPane tabId={1}>
                            <Datatables
                                columns={DealTableColumns(callback)}
                                showTableOnly
                                rows={allRows}
                                keyField="id"
                                loading={false}
                                isCheckbox={true}
                                ssr={() => { }}
                            />
                        </TabPane>

                        <TabPane tabId={2}>
                            <Datatables
                                columns={DealTableColumns(callback)}
                                showTableOnly
                                rows={buyerRows}
                                keyField="id"
                                loading={false}
                                isCheckbox={true}
                                ssr={() => { }}
                            />
                        </TabPane>

                        <TabPane tabId={3}>
                            <Datatables
                                columns={DealTableColumns(callback)}
                                showTableOnly
                                rows={sellerRows}
                                keyField="id"
                                loading={false}
                                isCheckbox={true}
                                ssr={() => { }}
                            />
                        </TabPane>
                    </TabContent>
                </Card>
            </Col>
        </Row>
    );
};

export default DealsTable;
