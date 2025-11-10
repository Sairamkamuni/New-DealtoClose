import React from "react";
import Datatables from "pages/table/datatable";
import { ContactTableColumns } from "../../TableColumns/ContactTableColumns";

const ContactTable = ({ rows, callback }) => {
    return (
        <Datatables
            columns={ContactTableColumns(callback)}
            showTableOnly={true}
            rows={rows}
            keyField={"id"}
            isCheckbox={true}
            loading={false}
            ssr={() => { }}
        />
    );
};

export default ContactTable;
