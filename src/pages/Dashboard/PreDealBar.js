import React, { useState } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import { PreDealDummyData, } from "AllDummyData/DashboardDummyData";
import { DashboardPreDealTableColumns } from "pages/TableColumns/DashboardTableColumns";
import Datatables from "pages/table/datatable";

const PreDealBar = ({ callbacks }) => {


    return (
        <>
            <div className="align-items-center mt-1">
                <h3 className="mb-3 fw-bold">Pre-Deals</h3>
            </div>

            <div style={{ border: "1px solid #dad1e0", borderRadius: "10px" }}>
                <Datatables
                    columns={DashboardPreDealTableColumns(callbacks)}
                    showTableOnly
                    rows={PreDealDummyData}
                    keyField="id"
                    loading={false}
                    ssr={() => { }}
                />
            </div>
        </>

    );
};

export default PreDealBar;
