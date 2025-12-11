import React, { useState } from "react";
import MetaTags from "react-meta-tags";
import { Container } from "reactstrap";
import DealsHeader from "./DealsHeader";
import CenterButtons from "./CenterButtons";
import NavsHeader from "./DealsNavs";

const DealsDetails = () => {
    const [activeTags, setActiveTags] = useState(1);

    const toggleTags = (tab) => {
        if (activeTags !== tab) setActiveTags(tab);
    };

    return (
        <div className="page-content">
            <MetaTags>
                <title>Deals Details | {process.env.REACT_APP_TITLE}</title>
            </MetaTags>

            <Container fluid>
                <DealsHeader />

                <CenterButtons onAddNote={() => toggleTags(8)} />

                <NavsHeader activeTags={activeTags} toggleTags={toggleTags} />
            </Container>
        </div>
    );
};

export default DealsDetails;
