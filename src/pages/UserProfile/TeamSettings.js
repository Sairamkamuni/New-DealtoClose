import React, { useState } from "react";
import MetaTags from "react-meta-tags";
import { Container, Row, Col, Card, CardBody, Modal } from "reactstrap";
import { AddPlusCircleButton } from "pages/utils/allButton";
import { userTeamTableData, UserTeamTitle, UserTeamRole } from "AllDummyData/UserProfileDummyData";
import Datatables from "pages/table/datatable";
import { UserTeamTableColumns } from "pages/TableColumns/UserProfileTableColumns";
import Select from "react-select";

const TeamSettings = () => {
    const [sourceInput, setSourceInput] = useState("");
    const [tagInput, setTagInput] = useState("");
    const [sources, setSources] = useState(["Sphere of Influence", "Personal Referral", "Office Lead"]);
    const [tags, setTags] = useState(["Hot Lead", "Past Client", "Investor", "Needs Follow-up", "VIP"]);
    const [modalOpen, setModalOpen] = useState(false);
    const [teamMembers, setTeamMembers] = useState(userTeamTableData);
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", title: null, role: null, });

    const toggleModal = () => {
        setModalOpen(prev => !prev);
    };

    const handleAddSource = () => {
        if (sourceInput.trim() !== "") {
            setSources([...sources, sourceInput.trim()]);
            setSourceInput("");
        }
    };

    const handleRemoveSource = (index) => {
        setSources(sources.filter((_, i) => i !== index));
    };

    const handleAddTag = () => {
        if (tagInput.trim() !== "") {
            setTags([...tags, tagInput.trim()]);
            setTagInput("");
        }
    };

    const handleRemoveTag = (index) => {
        setTags(tags.filter((_, i) => i !== index));
    };

    // Handle text inputs
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle react-select
    const handleSelectChange = (value, actionMeta) => {
        console.log(formData)
        setFormData({
            ...formData,
            [actionMeta.name]: value,
        });
    };

    const handleSaveMember = () => {
        const newMember = {
            id: teamMembers.length + 1, name: formData.name, email: formData.email, phone: formData.phone, title: formData.title?.label || "",
            role: formData.role?.label || ""
        };
        setTeamMembers([...teamMembers, newMember]);
        setFormData({ name: "", email: "", phone: "", title: null, role: null, });

        toggleModal();
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Team Settings | {process.env.REACT_APP_TITLE}</title>
                </MetaTags>

                <Container fluid>
                    {/* Header */}
                    <Row>
                        <Col className="text-center">
                            <h3 className="fw-bolder">Team Settings</h3>
                        </Col>
                    </Row>

                    {/* Sources Manage */}
                    <Card className="mt-4" style={{ border: "1px solid #dad1e0", borderRadius: "12px" }}>
                        <CardBody>
                            <Row>
                                <Col>
                                    <div className="d-flex mb-0 gap-2">
                                        <i className="bx bx-data mt-2" style={{ fontSize: "2rem", color: "#243d78" }} />
                                        <div>
                                            <h3 className="mb-0 fw-bold">Manage Sources</h3>
                                            <p className="mt-1 mb-0"> Add or remove contact sources for your team. </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="mt-3 d-flex align-items-center justify-content-between">
                                <Col md={10}>
                                    <input type="text" name="source" className="form-control" placeholder="Enter new source"
                                        value={sourceInput} onChange={(e) => setSourceInput(e.target.value)} />
                                </Col>
                                <Col md={2} className="d-flex justify-content-end">
                                    <AddPlusCircleButton label="Add Source" outline={false} onClick={handleAddSource} />
                                </Col>
                            </Row>

                            <div style={{ border: "1px solid #dad1e0", borderRadius: "8px", marginTop: "10px" }}>
                                {sources.map((item, index) => (
                                    <Row key={index}
                                        className={`align-items-center g-0 px-3 py-2 ${index !== sources.length - 1 ? "border-2 border-bottom" : ""}`}>
                                        <Col className="font-size-14 text-dark">{item}</Col>
                                        <Col xs="auto">
                                            <button type="button" className="btn btn-link p-0 text-dark"
                                                onClick={() => handleRemoveSource(index)}>
                                                <i className="mdi mdi-close" />
                                            </button>
                                        </Col>
                                    </Row>
                                ))}
                            </div>

                            <p className="mt-3 mb-0"> These sources will be available when adding contacts or deals. </p>
                        </CardBody>
                    </Card>

                    {/* Manage Tags */}
                    <Card className="mt-4" style={{ border: "1px solid #dad1e0", borderRadius: "12px" }}>
                        <CardBody>
                            <Row>
                                <Col>
                                    <div className="d-flex mb-0 gap-2">
                                        <i className="bx bx-purchase-tag-alt mt-2" style={{ fontSize: "2rem", color: "#243d78" }} />
                                        <div>
                                            <h3 className="mb-0 fw-bold">Manage Tags</h3>
                                            <p className="mt-1 mb-0"> Add or remove tags for organizing contacts and deals. </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="mt-4 d-flex align-items-center justify-content-between">
                                <Col md={10}>
                                    <input type="text" className="form-control" placeholder="Enter new tag"
                                        value={tagInput} onChange={(e) => setTagInput(e.target.value)} />
                                </Col>
                                <Col md={2} className="d-flex justify-content-end">
                                    <AddPlusCircleButton label="Add Tag" outline={false} onClick={handleAddTag} />
                                </Col>
                            </Row>

                            <div className="rounded border border-2 mt-4 p-3 d-flex flex-wrap gap-2">
                                {tags.map((item, index) => (
                                    <div key={index}
                                        className="d-flex align-items-center rounded-pill mb-1 px-3 py-1"
                                        style={{ backgroundColor: "#f2e5ff", color: "#243d78", fontWeight: "600", fontSize: "14px" }}>
                                        <span>{item}</span>
                                        <button type="button" className="btn btn-link p-0 ms-2"
                                            style={{ color: "#243d78", textDecoration: "none" }}
                                            onClick={() => handleRemoveTag(index)}>
                                            <i className="mdi mdi-close" />
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-3 mb-0">
                                Note: Tags added during contact/deal creation will need to be synced here (future enhancement).
                            </p>
                        </CardBody>
                    </Card>

                    {/* Manage Team */}
                    <Card className="mt-4">
                        <CardBody>
                            <Row>
                                <Col>
                                    <div className="d-flex mb-0 gap-2">
                                        <i className="bx bx-group mt-1" style={{ fontSize: "2rem", color: "#243d78" }} />
                                        <div>
                                            <h3 className="mb-0 fw-bold">Manage Your Team</h3>
                                            <p className="mt-1 mb-0"> Invite new members, manage roles, and oversee team access. </p>
                                        </div>
                                    </div>
                                </Col>

                                <Col md={2} className="d-flex justify-content-end">
                                    <AddPlusCircleButton label="Add Team Member" width="170px" outline={false}
                                        onClick={toggleModal} />
                                </Col>
                            </Row>

                            <Row>
                                <Col style={{ border: "1px solid #dad1e0", borderRadius: "10px", marginTop: "15px" }}>
                                    <Datatables
                                        columns={UserTeamTableColumns()}
                                        showTableOnly={true}
                                        rows={teamMembers}
                                        keyField={"id"}
                                        loading={false}
                                        ssr={() => { }}
                                    />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Container>
            </div>

            {/* Modal */}
            <Modal style={{ maxWidth: "600px" }} isOpen={modalOpen} toggle={toggleModal} className="custom-modal">
                <div className="modal-header d-block">
                    <h5 className="modal-title fw-bold mb-1">Team Members</h5>
                    <button type="button" onClick={toggleModal} className="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div className="modal-body">
                    <Row>
                        <Col md={12}>
                            <label>Name</label>
                            <input className="form-control" name="name" type="text" placeholder="Enter Name"
                                value={formData.name} onChange={handleChange} />
                        </Col>

                        <Col md={12} className="mt-3">
                            <label>Email</label>
                            <input className="form-control" name="email" type="email" placeholder="Enter Email"
                                value={formData.email} onChange={handleChange} />
                        </Col>

                        <Col md={12} className="mt-3">
                            <label>Phone</label>
                            <input className="form-control" name="phone" type="text" placeholder="Enter Phone"
                                value={formData.phone} onChange={handleChange} />
                        </Col>

                        <Col md={12} className="mt-3">
                            <label>Title / Designation</label>
                            <Select
                                name="title"
                                isClearable
                                classNamePrefix="select"
                                options={UserTeamTitle}
                                value={formData.title}
                                onChange={handleSelectChange}
                            />
                        </Col>

                        <Col md={12} className="mt-3">
                            <label>User Type / Role</label>
                            <Select
                                name="role"
                                isClearable
                                classNamePrefix="select"
                                options={UserTeamRole}
                                value={formData.role}
                                onChange={handleSelectChange}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col className="d-flex justify-content-end mt-3 gap-2">
                            <button className="btn btn-primary" style={{ width: "80px" }}
                                onClick={handleSaveMember}>
                                Save
                            </button>

                            <button className="btn btn-danger" style={{ width: "100px" }}
                                onClick={toggleModal}>
                                Cancel
                            </button>
                        </Col>
                    </Row>
                </div>
            </Modal>
        </React.Fragment>
    );
};

export default TeamSettings;
