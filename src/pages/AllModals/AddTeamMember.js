import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, Card, CardBody, Row, Col } from "reactstrap";
import Select from "react-select";
import { checklistAssignedTableData } from "constants/config";
import { UserPlusButton } from "pages/utils/allButton";
import { showSuccessAlert } from "helpers/alert_helper";

const AddTeamMember = ({ isOpen, toggle, style }) => {
    const [selectedMember, setSelectedMember] = useState(null);

    const handleSelectChange = (member) => {
        setSelectedMember(member);
        if (member) {
            console.log("Selected team member:", member);
            showSuccessAlert(`${member.label} selected successfully!`);
        }
    };

    return (
        <Dropdown isOpen={isOpen} toggle={toggle} className="d-inline-block">
            <DropdownToggle tag="span" role="button" onClick={toggle} style={{ cursor: "pointer" }}>
                <UserPlusButton label="Add Team Member" width="200px" />
            </DropdownToggle>

            <div style={{ position: "absolute", left: "-40px", style }}>
                <DropdownMenu className="mt-2 p-0" style={{ width: "300px", borderRadius: "12px" }}>
                    <Card className="m-0 border-0">
                        <CardBody>
                            <Row>
                                <Col>
                                    <Select name="team_member" isClearable classNamePrefix="select" options={checklistAssignedTableData} value={selectedMember}
                                        onChange={handleSelectChange} placeholder="Select a team member..." />
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </DropdownMenu>
            </div>
        </Dropdown>
    );
};

export default AddTeamMember;
