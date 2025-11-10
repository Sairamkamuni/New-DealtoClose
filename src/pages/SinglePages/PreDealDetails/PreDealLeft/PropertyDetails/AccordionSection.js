import React from "react";
import { Collapse } from "reactstrap";
import classnames from "classnames";

const AccordionSection = ({ title, isOpen, toggle, children }) => {
    return (
        <div className="accordion border-0 bg-transparent">
            <h2 className="accordion-header">
                <div onClick={toggle} className={classnames("d-flex justify-content-between align-items-center", "fw-bolder", { collapsed: !isOpen })}
                    style={{ cursor: "pointer", fontSize: "18px", padding: "10px 0" }} >
                    <h5 className="fw-bolder mb-0">{title}</h5>
                    <i className={classnames("bx", { "bx-chevron-down": isOpen, "bx-chevron-right": !isOpen, })}
                        style={{ transition: "transform 0.3s ease", transform: isOpen ? "rotate(0deg)" : "rotate(90deg)", fontSize: "22px" }} ></i>
                </div>
            </h2>

            <Collapse isOpen={isOpen}>
                <div className="accordion-body text-black" style={{ backgroundColor: "transparent", padding: "10px 0" }} >
                    {children}
                </div>
            </Collapse>
        </div>
    );
};

export default AccordionSection;
