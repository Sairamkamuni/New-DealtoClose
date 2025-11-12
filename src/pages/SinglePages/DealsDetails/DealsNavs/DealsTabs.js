import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import { DealsDeatailsTabs } from "AllDummyData/DealsDummyData";

const DealsTabs = ({ activeTags, toggleTags }) => {
    return (
        <Nav pills className="navtab-bg nav-justified">
            {DealsDeatailsTabs.map((tab) => (
                <NavItem key={tab.id} style={{ border: "1px solid #dad1e0", borderRadius: "5px" }}>
                    <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({ active: activeTags === tab.id })}
                        onClick={() => toggleTags(tab.id)}
                    >
                        <span className="d-none d-sm-block fw-bold">{tab.label}</span>
                    </NavLink>
                </NavItem>
            ))}
        </Nav>
    )
}
export default DealsTabs;