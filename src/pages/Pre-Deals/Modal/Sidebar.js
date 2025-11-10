import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import { preDealTabs } from "AllDummyData/PreDealDummyData";

const Sidebar = ({ activeTabVartical, setoggleTabVertical }) => {
    const handleClick = (id) => {
        setoggleTabVertical(id);

        const section = document.getElementById(`section-${id}`);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div style={{ position: "sticky", top: "0px" }}>
            <Nav pills vertical style={{ padding: "8px" }}>
                {preDealTabs.map((step) => (
                    <NavItem key={step.id} style={{ marginBottom: "6px" }}>
                        <NavLink onClick={() => handleClick(step.id)} className={classnames("w-100", { active: activeTabVartical === step.id })}
                            style={{
                                display: "flex", alignItems: "center", padding: "10px 14px", fontSize: "14px", marginTop: "6px", cursor: "pointer", transition: "all 0.2s ease-in-out", backgroundColor: activeTabVartical === step.id ? "#243e79" : "transparent", color: activeTabVartical === step.id ? "#fff" : "", borderRadius: "6px",
                            }}
                        >
                            {step.label}
                        </NavLink>
                    </NavItem>
                ))}
            </Nav>
        </div>
    );
};

export default Sidebar;
