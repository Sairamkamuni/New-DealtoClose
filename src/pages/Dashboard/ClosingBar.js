import React, { useState } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import { ClosingDummydata, } from "AllDummyData/DashboardDummyData";
import { DashboardClosingsTableColumns } from "pages/TableColumns/DashboardTableColumns";
import Datatables from "pages/table/datatable";

const ClosingBar = ({ callbacks }) => {


    return (
        <>
            <div className="align-items-center mt-1">
                <h3 className="mb-3 fw-bold">Closings in 7 Days</h3>
            </div>

            <div style={{ border: "1px solid #dad1e0", borderRadius: "10px" }}>
                <Datatables
                    columns={DashboardClosingsTableColumns(callbacks)}
                    showTableOnly
                    rows={ClosingDummydata}
                    keyField="id"
                    loading={false}
                    ssr={() => { }}
                />
            </div>
        </>

    );
};

export default ClosingBar;
