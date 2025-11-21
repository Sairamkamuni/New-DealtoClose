import React, { useState } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import { TaskDummyData, TaskAssignedTo, TaskStatus } from "AllDummyData/DashboardDummyData";
import { DashboardTaskTableColumns } from "pages/TableColumns/DashboardTableColumns";
import Datatables from "pages/table/datatable";

const TaskBar = () => {
    const [rows, setRows] = useState(TaskDummyData);

    const callbacks = {
        handleAssignedAgent: (id, field, value) => {
            setRows(prev =>
                prev.map(row =>
                    row.id === id ? { ...row, [field]: value } : row
                )
            );
        },
        handleTask: (id, field, value) => {
            setRows(prev =>
                prev.map(row =>
                    row.id === id ? { ...row, [field]: value } : row
                )
            );
        }
    };

    return (
        <Card style={{ border: "1px solid #dad1e0", borderRadius: "12px" }}>
            <CardBody>
                <Row className="align-items-center mt-1">
                    <Col>
                        <h3 className="mb-3 fw-bold">Tasks</h3>
                    </Col>
                </Row>

                <Row style={{ border: "1px solid #dad1e0", borderRadius: "10px" }}>
                    <Col>
                        <Datatables
                            columns={DashboardTaskTableColumns(
                                callbacks,
                                TaskAssignedTo,
                                TaskStatus
                            )}
                            showTableOnly
                            rows={rows}
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

export default TaskBar;
