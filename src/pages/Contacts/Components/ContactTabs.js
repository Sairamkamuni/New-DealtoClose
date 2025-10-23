import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";

const ContactTabs = ({ activeTab, setActiveTab }) => {

    const Tabs = [
        { id: 1, label: "All" },
        { id: 2, label: "Clients" },
        { id: 3, label: "Collaborators" },
    ];

    return (
        <Nav pills justified style={{ border: "1px solid #dad1e0", borderRadius: "12px", padding: "5px", backgroundColor: "#ece4f1" }} >
            {Tabs.map((tab) => (
                <NavItem key={tab.id}>
                    <NavLink
                        className={classnames({ active: activeTab === tab.id })}
                        onClick={() => setActiveTab(tab.id)}
                        style={{
                            borderRadius: "6px",
                            fontWeight: "500",
                            color: activeTab === tab.id ? "#fff" : "#000000ff",
                            backgroundColor: activeTab === tab.id ? "#7f5fbbff" : "transparent",
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

export default ContactTabs;
