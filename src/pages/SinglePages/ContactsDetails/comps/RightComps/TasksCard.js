import React, { useState } from "react";
import { Card, CardBody } from "reactstrap";
import AddTaskModal from "./AddTaskModal";
import { FaPlusButton } from "pages/utils/allButton";

const TasksCard = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Follow up with Alice", completed: false, date: "2025-08-29", addedBy: "Raj" },
        { id: 2, text: "Send property brochure", completed: true, date: "2025-08-28", addedBy: "Raj" },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    // ✅ Add task with date + addedBy
    const addTask = (text, addedBy = "Raj") => {
        if (text) {
            const today = new Date().toISOString().split("T")[0];
            setTasks([
                ...tasks,
                { id: Date.now(), text, completed: false, date: today, addedBy }
            ]);
        }
    };

    return (
        <Card className="shadow-sm" style={{ border: "1px solid #dad1e0", borderRadius: "12px" }}>
            <CardBody>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="fw-bold mb-0">Tasks</h4>
                    <FaPlusButton label="Add" width="60px" onClick={() => setIsModalOpen(true)} outline={false} />
                </div>

                {tasks.length === 0 ? (
                    <p className="text-muted">No tasks yet.</p>
                ) : (
                    <ul className="list-unstyled">
                        {tasks.map((task) => (
                            <li key={task.id} className="d-flex align-items-start mb-2" >
                                <input type="checkbox" className="form-check-input me-2 mt-1" checked={task.completed} onChange={() => toggleTask(task.id)} />
                                <div>
                                    <span className="mb-1" style={{ textDecoration: task.completed ? "line-through" : "none" }} > {task.text} </span>
                                    <div className="text-muted small mt-1">
                                        {task.date} || Added by {task.addedBy}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}

                {/* ✅ AddTaskModal usage */}
                <AddTaskModal isOpen={isModalOpen} toggle={() => setIsModalOpen(!isModalOpen)} onSave={addTask} />
            </CardBody>
        </Card>
    );
};

export default TasksCard;
