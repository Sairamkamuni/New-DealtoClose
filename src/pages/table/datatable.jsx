import React, { useEffect, useState } from "react";
import {
  Button,
  CardTitle,
  Col,
  Row,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import "./datatables.scss";
import { Filter } from "react-feather";

// datatable related plugins
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { CSVExport } from "react-bootstrap-table2-toolkit";

const { ExportCSVButton } = CSVExport;

const Datatables = ({
  showTableOnly = false,
  filename = "",
  isSearch = false,
  placeholder = "Search",
  rowsLength = 0,
  rows = [],
  handleAddButton,
  title,
  columns,
  loading,
  selectField,
  defaultSorted,
  keyField = "id",
  btnTitle = "Add",
  isAdd = false,
  isTableHead = false,
  isDisabled = false,
  fas = false,
  isCheckbox = false,
  is_remote = false,
  ssr = () => { },
  showPagination = true, // ✅ Added new prop
}) => {
  const [page, setPage] = useState(1);
  const [sizePerPage, setSizePerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const [selectedRows, setSelectedRows] = useState([]);
  const [filters, setFilters] = useState({});
  const [dropdownOpen, setDropdownOpen] = useState(null);

  // Debounce search
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 800);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  // Trigger SSR when search term changes
  useEffect(() => {
    if (debouncedSearchTerm !== "") {
      ssr({ page, sizePerPage, searchTerm: debouncedSearchTerm });
    }
  }, [debouncedSearchTerm]);

  // Handle pagination change
  const handleTableChange = (type, { page, sizePerPage }) => {
    setPage(page);
    setSizePerPage(sizePerPage);
    ssr({ page, sizePerPage, searchTerm });
  };

  // Pagination options
  const pageOptions = {
    sizePerPage,
    totalSize: rowsLength || rows.length,
    page: page || 1,
    hideSizePerPage: false,
    sizePerPageList: [
      { text: "10", value: 10 },
      { text: "25", value: 25 },
      { text: "50", value: 50 },
      { text: "100", value: 100 },
      { text: "All", value: rowsLength || rows.length },
    ],
  };

  // Checkbox selection config
  const selectRow = isCheckbox
    ? {
      mode: "checkbox",
      clickToSelect: true,
      bgColor: "#f1f3f5",
      selected: selectedRows,
      onSelect: (row, isSelect) => {
        if (isSelect) {
          setSelectedRows([...selectedRows, row[keyField]]);
        } else {
          setSelectedRows(selectedRows.filter((id) => id !== row[keyField]));
        }
      },
      onSelectAll: (isSelect, rows) => {
        if (isSelect) {
          setSelectedRows(rows.map((r) => r[keyField]));
        } else {
          setSelectedRows([]);
        }
      },
    }
    : undefined;

  // Toggle dropdown
  const toggleDropdown = (key) =>
    setDropdownOpen(dropdownOpen === key ? null : key);

  // Handle filter checkbox change
  const handleFilterChange = (columnKey, value) => {
    const current = filters[columnKey] || [];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    setFilters({ ...filters, [columnKey]: updated });
  };

  // Handle text search in filter dropdown
  const handleSearchFilter = (columnKey, value) => {
    if (!value) {
      const updated = { ...filters };
      delete updated[columnKey];
      setFilters(updated);
      return;
    }
    setFilters({ ...filters, [columnKey]: [value] });
  };

  // Apply filters to rows
  const filteredRows = rows.filter((item) =>
    Object.keys(filters).every((key) => {
      const values = filters[key];
      if (!values || values.length === 0) return true;
      return values.some((v) =>
        String(item[key]).toLowerCase().includes(String(v).toLowerCase())
      );
    })
  );

  // Format columns with filter dropdown for filterable columns
  const formattedColumns = columns.map((col) => {
    if (!col.filterable) return col;

    return {
      ...col,
      headerFormatter: (column) => (
        <div className="d-flex align-items-center justify-content-between">
          <span>{column.text}</span>
          <Dropdown
            isOpen={dropdownOpen === column.dataField}
            toggle={() => toggleDropdown(column.dataField)}
            className="d-inline-block"
            container="body"
          >
            <DropdownToggle color="link" className="p-0">
              <Filter size={15} />
            </DropdownToggle>
            <DropdownMenu style={{ width: "220px", padding: "10px" }}>
              <Input
                type="text"
                placeholder={`Filter ${column.text.toLowerCase()}...`}
                bsSize="sm"
                className="mb-2"
                onChange={(e) =>
                  handleSearchFilter(column.dataField, e.target.value)
                }
              />
              {column.filterOptions?.map((opt, idx) => (
                <div key={idx} className="form-check mb-1">
                  <Input
                    type="checkbox"
                    id={`${column.dataField}-${idx}`}
                    checked={filters[column.dataField]?.includes(opt) || false}
                    onChange={() =>
                      handleFilterChange(column.dataField, opt)
                    }
                  />
                  <label
                    htmlFor={`${column.dataField}-${idx}`}
                    className="form-check-label ms-1"
                  >
                    {opt}
                  </label>
                </div>
              ))}
              <div className="text-center mt-2">
                <Button
                  size="sm"
                  color="primary"
                  onClick={() => toggleDropdown(column.dataField)}
                >
                  Apply
                </Button>
              </div>
            </DropdownMenu>
          </Dropdown>
        </div>
      ),
    };
  });

  return (
    <Row>
      <Col className="col-12">
        {loading ? (
          <div style={{ height: "160px" }}>
            <div id="status" style={{ height: "100vh", width: "auto" }}>
              <div className="spinner-chase">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="chase-dot"></div>
                ))}
              </div>
              <div style={{ margin: "30px auto", textAlign: "center" }}>
                Loading Please Wait...
              </div>
            </div>
          </div>
        ) : (
          <ToolkitProvider
            keyField={keyField}
            data={filteredRows}
            columns={formattedColumns}
            search
            exportCSV={{ fileName: filename }}
          >
            {(props) => (
              <div>
                {isTableHead && (
                  <Row className="align-items-center">
                    <Col sm="7">
                      <CardTitle className="h2 m-3">{title}</CardTitle>
                    </Col>

                    {selectField}

                    <Col className="d-flex justify-content-end">
                      {isSearch && (
                        <div className="search-box me-2 d-inline-block" style={{ width: "100%" }} >
                          <div className="position-relative">
                            <Input className="form-control" placeholder={placeholder} value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value.trim())}
                            />
                            <i className="bx bx-search-alt search-icon" />
                          </div>
                        </div>
                      )}

                      {isAdd && (
                        <Button disabled={isDisabled} color="primary" style={{ width: "160px" }} onClick={handleAddButton} >
                          <i className={`fas ${fas ? fas : "fa-plus"} me-2`} ></i>
                          {btnTitle}
                        </Button>
                      )}
                    </Col>
                  </Row>
                )}

                {filteredRows.length === 0 ? (
                  <div className="text-center">No data available</div>
                ) : (
                  <BootstrapTable
                    {...props.baseProps}
                    keyField={keyField}
                    data={filteredRows}
                    responsive
                    bordered={false}
                    striped
                    hover
                    classes="table align-middle table-nowrap"
                    headerWrapperClasses="thead-light"
                    remote={is_remote}
                    sort={defaultSorted}
                    pagination={paginationFactory(pageOptions)}
                    onTableChange={handleTableChange}
                    selectRow={selectRow}
                  />
                )}
              </div>
            )}
          </ToolkitProvider>
        )}
      </Col>
    </Row>
  );
};

export default Datatables;
