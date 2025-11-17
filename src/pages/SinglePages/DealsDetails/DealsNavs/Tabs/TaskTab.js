import React, { useState } from "react";
import { Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import classnames from "classnames";
import AddTaskModal from "pages/AllModals/AddTaskModal";

import { AddPlusCircleButton, ArchiveButton, CheckButton } from "pages/utils/allButton";

import { dealsTaskTabs, dealsTasksTemplateOptions, DocumentAgentUser, DocumentStatus, dealsTableTasksData } from "AllDummyData/DealsDummyData";

import Datatables from "pages/table/datatable";
import { DealTaskTableColumns } from "pages/TableColumns/DealTableColumns";

const TaskTab = () => {
    const [taskTags, setTaskTags] = useState(1);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("all_tasks");
    const [tasks, setTasks] = useState(dealsTableTasksData);
    const [modalOpen, setModalOpen] = useState(false);

    const toggleTask = (tab) => {
        if (taskTags !== tab) setTaskTags(tab);
    };

    const toggle = () => setDropdownOpen((prev) => !prev);

    const handleCheckboxChange = (taskId) => {
        setTasks((prevTasks) => prevTasks.map((task) =>
            task.id === taskId ? { ...task, status: task.status === "Completed" ? "Pending" : "Completed", }
                : task
        )
        );
    };

    const handleAssignedChange = (id, value) => {
        setTasks((tasks) =>
            tasks.map((task) => task.id === id ? { ...task, assigned_to: value } : task)
        );
    };

    const handleStatusChange = (id, value) => {
        setTasks((tasks) => tasks.map((task) => task.id === id ? { ...task, status: value } : task)
        );
    };

    const callback = {
        handleCheckboxChange,
        handleAssignedChange,
        handleStatusChange,
        onActionClick: (row) => console.log("Side Dots clicked", row),
    };

    const rowStyle = (row) => ({
        backgroundColor: row.status === "Completed" ? "#f6f9f6" : "white",
    });

    return (
        <>
            <Row>
                <Col>
                    <div className="d-flex align-items-center">
                        <Nav pills style={{ borderRadius: "12px", padding: "5px", gap: "5px" }}>
                            {dealsTaskTabs.map((tab) => (
                                <NavItem key={tab.id}>
                                    <NavLink
                                        style={{
                                            border: "1px solid #dad1e0", borderRadius: "6px",
                                            color: taskTags === tab.id ? "#fff" : "#000000ff",
                                            backgroundColor: taskTags === tab.id ? "#7f5fbbff" : "transparent",
                                            transition: "all 0.3s ease",
                                        }}
                                        className={classnames({ active: taskTags === tab.id })}
                                        onClick={() => toggleTask(tab.id)}
                                    >
                                        <span className="d-none d-sm-block"> {tab.label} </span>
                                    </NavLink>
                                </NavItem>
                            ))}
                        </Nav>
                    </div>
                </Col>

                <Col md={5}>
                    <div className="d-flex align-items-center justify-content-end gap-2">
                        <Dropdown isOpen={dropdownOpen} toggle={toggle} className="custom-dropdown" >
                            <DropdownToggle caret style={{ width: "150px", height: "36px", textAlign: "center", backgroundColor: "#243e79", border: "1px solid #243e79", color: "#243e79", }} >
                                {dealsTasksTemplateOptions.find((opt) => opt.value === selectedOption)?.label}
                            </DropdownToggle>

                            <DropdownMenu style={{ textAlign: "center" }}>
                                {dealsTasksTemplateOptions.map((opt) => (
                                    <DropdownItem key={opt.value} onClick={() => setSelectedOption(opt.value)}
                                        style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5px", transition: "all 0.2s ease" }}
                                        onMouseEnter={(e) => { e.target.style.backgroundColor = "#243e79"; e.target.style.color = "white" }}
                                        onMouseLeave={(e) => { e.target.style.backgroundColor = ""; e.target.style.color = "" }}
                                    >
                                        {selectedOption === opt.value && (<CheckButton asIconOnly />)}{opt.label}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>

                        <AddPlusCircleButton label="Add Task" width="120px" onClick={setModalOpen} />
                        <AddPlusCircleButton label="Add Template" width="140px" onClick={() => console.log("Add Template clicked")} />
                        <ArchiveButton label="Archive" width="100px" onClick={() => console.log("Archive clicked")} />
                    </div>
                </Col>
            </Row>

            <TabContent activeTab={taskTags} className="p-2 text-muted">
                <TabPane tabId={1} style={{ border: "1px solid #dad1e0", borderRadius: "10px", marginTop: "5px", }}>
                    <Datatables
                        columns={DealTaskTableColumns(callback, DocumentAgentUser, DocumentStatus)}
                        showTableOnly={true}
                        rows={tasks}
                        keyField={"id"}
                        loading={false}
                        rowStyle={rowStyle}
                        showPagination={true}
                        ssr={() => { }}
                    />
                </TabPane>
            </TabContent>

            <AddTaskModal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)} formTask={true} />
        </>
    );
};

export default TaskTab;
