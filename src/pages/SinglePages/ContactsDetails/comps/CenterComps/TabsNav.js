import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const TabsNav = ({ activeTab, toggleTab }) => {
    const tabs = [
        { id: 1, label: "All" },
        { id: 2, label: "Notes" },
        { id: 3, label: "Emails" },
    ];

    return (
        <Nav pills className="navtab-bg me-auto">
            {tabs.map((tab) => (
                <NavItem key={tab.id} className="me-2">
                    <NavLink
                        onClick={() => toggleTab(tab.id)}
                        style={{
                            cursor: "pointer",
                            padding: "8px 24px",
                            backgroundColor: activeTab === tab.id ? "#243e79" : "#ffffff",
                            color: activeTab === tab.id ? "#ffffff" : "#243e79",
                            border: "1px solid #243e79",
                            borderRadius: "6px",
                            fontWeight: 550,
                            transition: "all 0.3s ease",
                        }}
                    >
                        {tab.label}
                    </NavLink>
                </NavItem>
            ))}
        </Nav>
    );
};

export default TabsNav;
