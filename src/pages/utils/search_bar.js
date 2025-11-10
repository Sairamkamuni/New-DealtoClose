import React from 'react';
import { Input } from 'reactstrap';

const Searchbar = ({ callback, style = {} }) => {
    return (
        <div className="search-box" style={style}>
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
};

export default Searchbar;
