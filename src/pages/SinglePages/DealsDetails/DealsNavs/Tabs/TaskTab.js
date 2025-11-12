import React, { useState, useEffect } from "react";
import { Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, Table, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import classnames from "classnames";
import AddTaskModal from "pages/AllModals/AddTaskModal";

import { AddPlusCircleButton, ArchiveButton, SideDotsButton, CalendarButton, CheckButton } from "pages/utils/allButton";
import { dealsTaskTabs, dealsTasksTemplateOptions, DocumentAgentUser, DocumentStatus, dealsTableTasksData } from "AllDummyData/DealsDummyData";

const TaskTab = () => {
    const [taskTags, setTaskTags] = useState(1)
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("all_tasks");
    const [tasks, setTasks] = useState(dealsTableTasksData);
    const [modalOpen, setModalOpen] = useState(false);

    const toggleTask = (tab) => {
        if (taskTags !== tab) setTaskTags(tab);
    };

    const handleAssignedChange = (id, value) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, assignedTo: value } : task));
    };

    const handleStatusChange = (id, value) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, status: value } : task));
    };

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const handleCheckboxChange = (taskId) => {
        setTasks(prevTasks => prevTasks.map(task => task.id === taskId ? { ...task, status: task.status === "Completed" ? "Pending" : "Completed" } : task));
    };

    return (
        <>
            <Row>
                <Col>
                    <div className="d-flex align-items-center">
                        <Nav pills style={{ borderRadius: "12px", padding: "5px", gap: "5px", }}>
                            {dealsTaskTabs.map((tab) => (
                                <NavItem key={tab.id}>
                                    <NavLink
                                        style={{
                                            border: "1px solid #dad1e0",
                                            borderRadius: "6px", fontWeight: "500", color: taskTags === tab.id ? "#fff" : "#000000ff",
                                            backgroundColor: taskTags === tab.id ? "#7f5fbbff" : "transparent", transition: "all 0.3s ease",
                                        }}
                                        className={classnames({ active: taskTags === tab.id })} onClick={() => toggleTask(tab.id)} >
                                        <span className="d-none d-sm-block">{tab.label}</span>
                                    </NavLink>
                                </NavItem>
                            ))}
                        </Nav>
                    </div>
                </Col>

                <Col md={5}>
                    <div className="d-flex align-items-center justify-content-end gap-2">
                        <div className="d-flex align-items-center justify-content-end gap-2">
                            <Dropdown isOpen={dropdownOpen} toggle={toggle} className="custom-dropdown">
                                <DropdownToggle caret style={{
                                    width: "150px", height: "36px", textAlign: "center", backgroundColor: "#243e79",
                                    border: "1px solid #243e79", color: "#243e79"
                                }} >
                                    {dealsTasksTemplateOptions.find((opt) => opt.value === selectedOption)?.label}
                                </DropdownToggle>

                                <DropdownMenu style={{ textAlign: "center" }}>
                                    {dealsTasksTemplateOptions.map((opt) => (
                                        <DropdownItem key={opt.value} onClick={() => setSelectedOption(opt.value)}
                                            style={{
                                                display: "flex", justifyContent: "center", alignItems: "center", gap: "5px",
                                                transition: "all 0.2s ease",
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = "#243e79";
                                                e.target.style.color = "white";
                                            }}
                                            onMouseLeave={(e) => { e.target.style.backgroundColor = ""; e.target.style.color = ""; }}
                                        >
                                            {selectedOption === opt.value && <CheckButton asIconOnly />}
                                            {opt.label}
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>

                            <AddPlusCircleButton label="Add Task" width="120px" onClick={setModalOpen} />
                            <AddPlusCircleButton label="Add Template" width="140px" onClick={() => console.log("Add Template clicked")} />
                            <ArchiveButton label="Archive" width="100px" onClick={() => console.log("Archive clicked")} />
                        </div>
                    </div>
                </Col>
            </Row>

            <TabContent activeTab={taskTags} className="p-2 text-muted">
                <TabPane tabId={1} style={{ border: "1px solid #dad1e0", borderRadius: "10px", marginTop: "5px" }} >
                    <Table >
                        <thead>
                            <tr >
                                <th></th>
                                <th>Task</th>
                                <th>Due Date</th>
                                <th>Assigned To</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map(task => (
                                <tr key={task.id} style={{ backgroundColor: task.status === "Completed" ? "#f6f9f6" : "white" }}>
                                    <td>
                                        <Input type="checkbox" checked={task.status === "Completed"}
                                            onChange={() => handleCheckboxChange(task.id)} />
                                    </td>
                                    <td style={{ textDecoration: task.status === "Completed" ? "line-through" : "none" }}>
                                        {task.task}
                                    </td>
                                    <td style={{ color: new Date(task.dueDate) < new Date() ? "red" : "black" }}>
                                        <span className="d-flex align-items-center">
                                            <CalendarButton asIconOnly className="me-2 mb-1 text-danger" />
                                            {new Date(task.dueDate).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric",
                                            })}

                                        </span>
                                    </td>
                                    <td>
                                        <Input type="select" value={task.assignedTo}
                                            onChange={(e) => handleAssignedChange(task.id, e.target.value)}
                                        >
                                            {DocumentAgentUser.map(user => <option key={user} value={user}>{user}</option>)}
                                        </Input>
                                    </td>
                                    <td>
                                        <Input type="select" value={task.status}
                                            onChange={(e) => handleStatusChange(task.id, e.target.value)}
                                        >
                                            {DocumentStatus.map(status => <option key={status} value={status}>{status}</option>)}
                                        </Input>
                                    </td>
                                    <td> <SideDotsButton width={28} onClick={() => console.log("Side Dots Button clicked")} /> </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </TabPane>


            </TabContent>

            <AddTaskModal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)} formTask={true} />
        </>
    )
}

export default TaskTab;