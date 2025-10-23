import React from 'react';
import { Col, Input } from 'reactstrap'

const Searchbar = ({ callback }) => {
    return (
        <div className="search-box" style={{ width: "600px" }}>
            <div className="position-relative">
                <Input
                    type="text"
                    className="form-control rounded-0"
                    placeholder="Search..."
                    aria-label="Search contacts"
                    onChange={(e) => callback(e.target.value)}
                />
                <i className="bx bx-search-alt search-icon" />
            </div>
        </div>
    );
}

export default Searchbar;