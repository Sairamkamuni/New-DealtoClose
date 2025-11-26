import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const MenuTabs = ({ menus = [], activeTab, setActiveTab, isCustomStyle = false }) => {

    const toggleTab = (tab) => { setActiveTab(tab) };

    return (
        <Nav pills className="navtab-bg justify-content-between" style={{ backgroundColor: "#e1e7f6", padding: "6px", borderRadius: "10px" }} >
            {menus.map((tab, index) => (
                <React.Fragment key={tab.id}>
                    <NavItem className="me-2">
                        <NavLink onClick={() => toggleTab(index)}
                            style={{
                                cursor: "pointer",
                                backgroundColor: activeTab !== tab.id ? "#ffffff" : "#243e79",
                                color: activeTab !== tab.id ? "#243e79" : "#ffffff",
                                border: "1px solid #bfc9e0",
                                borderRadius: "6px",
                            }}
                        >
                            {tab.label}
                        </NavLink>
                    </NavItem>
                    {
                        isCustomStyle ?
                            index !== menus.length - 1 && (
                                <span
                                    style={{
                                        alignSelf: "center",
                                        color: "#243e79",
                                        fontWeight: "bold",
                                        marginRight: "8px",
                                        fontSize: "18px"
                                    }}
                                >
                                    <i className="fas fa-arrow-right" />
                                </span>
                            ) : ''
                    }
                </React.Fragment>
            ))}
        </Nav>

    );
};

export default MenuTabs;
