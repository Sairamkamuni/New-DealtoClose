import React, { useState } from "react";
import { Row, Col, Input } from "reactstrap";
import { dealsTableTasksData, DocumentAgentUser, DocumentStatus, DealsTaskOptions } from "AllDummyData/DealsDummyData";
import Select from "react-select";
import { OptionsDropdown } from "pages/utils/filterDropdown";
import { BiCalendar } from "react-icons/bi";

const TaskComp = () => {
    const [tasks, setTasks] = useState(dealsTableTasksData);

    const handleCheckboxChange = (index) => {
        setTasks((prev) =>
            prev.map((task, i) => {
                if (i !== index) return task;
                return { ...task, status: task.status === "Completed" ? "Pending" : "Completed" };
            })
        );
    };

    const isOverdue = (date) => {
        if (!date) return false;
        return new Date(date) < new Date();
    };

    return (
        <>
            <Row className="align-items-center fw-semibold py-3 px-2" style={{ border: "1px solid #e6dff0", borderRadius: "8px", background: "#faf7fd" }} >
                <Col md="3"><p className="ms-4 mb-0">Task</p></Col>
                <Col md="2"><p className="mb-0 ms-2">Due Date</p></Col>
                <Col md="3"><p className="mb-0 ms-1">Assigned To</p></Col>
                <Col md="3"><p className="mb-0 ms-1">Status</p></Col>
                <Col md="1"><p className="mb-0 text-end">Actions</p></Col>
            </Row>

            {tasks.map((deals, index) => {
                const isCompleted = deals.status === "Completed";
                return (
                    <Row key={deals.id ?? index} className="align-items-center py-3 px-3"
                        style={{ border: "1px solid #e6dff0", borderRadius: "8px", background: isCompleted ? "#f4fbf6" : "#fff" }}>

                        <Col md="3" className="d-flex align-items-center gap-3">
                            <Input type="checkbox" className="mb-1" checked={isCompleted} onChange={() => handleCheckboxChange(index)}
                                style={{ accentColor: "#6f2dbd" }} />
                            <span style={{ textDecoration: isCompleted ? "line-through" : "none", color: isCompleted ? "#6b7280" : "#111827" }}>
                                {deals.task}
                            </span>
                        </Col>

                        <Col md="2" className="d-flex align-items-center">
                            <BiCalendar className="fs-4 me-2 mb-1" color={isCompleted || isOverdue(deals.due_date) ? "#ef4444" : "#6b7280"} />
                            <span style={{
                                color: isCompleted || isOverdue(deals.due_date) ? "#ef4444" : "#6b7280",
                                textDecoration: isCompleted ? "line-through" : "none"
                            }} >
                                {deals.due_date || "-"}
                            </span>
                        </Col>

                        <Col md="3">
                            <Select value={deals.assigned_to ? { label: deals.assigned_to, value: deals.assigned_to } : null}
                                options={DocumentAgentUser.map((u) => ({ label: u, value: u }))}
                                isDisabled={isCompleted} menuPortalTarget={document.body} classNamePrefix="react-select"
                                styles={{
                                    control: (base) => ({ ...base, minHeight: 38, borderRadius: 8, background: "#f1f7ff" }),
                                    menuPortal: (base) => ({ ...base, zIndex: 9999 })
                                }}
                            />
                        </Col>

                        <Col md="3">
                            <Select value={{ label: deals.status, value: deals.status }}
                                options={DocumentStatus.map((s) => ({ label: s, value: s }))}
                                isDisabled menuPortalTarget={document.body} classNamePrefix="react-select"
                                styles={{
                                    control: (base) => ({ ...base, minHeight: 38, orderRadius: 8, background: "#f1f7ff" }),
                                    menuPortal: (base) => ({ ...base, zIndex: 9999 })
                                }}
                            />
                        </Col>

                        <Col md="1" className="text-end">
                            <OptionsDropdown options={DealsTaskOptions} leftMargin="100px" />
                        </Col>
                    </Row>
                );
            })}
        </>
    );
};

export default TaskComp;
