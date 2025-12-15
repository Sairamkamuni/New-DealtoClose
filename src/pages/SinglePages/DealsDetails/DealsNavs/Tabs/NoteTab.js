import React, { useState } from "react";
import { Row, Col, Card } from "reactstrap";
import AllButton from "pages/utils/allButton";
import { noteText1, noteText2, noteAgentUser, noteDate, noteTime } from "AllDummyData/DealsDummyData";
import { InputField } from "pages/InputFields/InputFields";

const NoteTab = () => {
    const [notes, setNotes] = useState([
        { text: noteText1, user: noteAgentUser, dateTime: `${noteDate} | ${noteTime}` },
        { text: noteText2, user: noteAgentUser, dateTime: `${noteDate} | ${noteTime}` }
    ]);
    const [inputText, setInputText] = useState("");

    const formatDateTime = (dateObj) => {
        const date = dateObj.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
        const time = dateObj.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
        return `${date} | ${time}`;
    };

    const currentUser = noteAgentUser;

    const handleAddNote = () => {
        console.log("New note added:", inputText);
        if (!inputText.trim()) return;
        const now = new Date();
        const formatted = formatDateTime(now);
        setNotes([...notes, { text: inputText, user: currentUser, dateTime: formatted }]);
        setInputText("");
    };

    return (
        <Row>
            <Col>
                <Card className="p-3">

                    <div className="mb-3">
                        <InputField type="textarea" rows="4" placeholder="Write your note here..."
                            value={inputText} onChange={(e) => setInputText(e.target.value)} />
                        <AllButton outline={false} className="mt-3 mb-2" label="Add Note" width="120px" onClick={handleAddNote} />
                    </div>

                    {notes.map((note, index) => (
                        <div key={index} className="p-2 rounded mb-3" style={{ border: "1px solid #c0c8d1ff" }} >
                            <p className="mb-2 ms-4">{note.text}</p>

                            <div className="d-flex justify-content-between align-items-center px-4">
                                <p className="mb-0 text-primary fw-medium">{note.user}</p>
                                <p className="mb-0">{note.dateTime}</p>
                            </div>
                        </div>
                    ))}
                </Card>
            </Col>
        </Row>
    );
};

export default NoteTab;
