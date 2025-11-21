import React, { useState } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import { DealDummyData, } from "AllDummyData/DashboardDummyData";
import { DashboardDealTableColumns } from "pages/TableColumns/DashboardTableColumns";
import Datatables from "pages/table/datatable";

const DealBar = ({ callbacks }) => {


    return (
        <Card style={{ border: "1px solid #dad1e0", borderRadius: "12px" }}>
            <CardBody>
                <Row className="align-items-center mt-1">
                    <Col>
                        <h3 className="mb-3 fw-bold">Deals</h3>
                    </Col>
                </Row>

                <Row style={{ border: "1px solid #dad1e0", borderRadius: "10px" }}>
                    <Col>
                        <Datatables
                            columns={DashboardDealTableColumns(callbacks)}
                            showTableOnly
                            rows={DealDummyData}
                            keyField="id"
                            loading={false}
                            ssr={() => { }}
                        />
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
};

export default DealBar;
