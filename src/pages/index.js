import React from "react";
import fakeData from "../Component/MOCK_DATA.json";


import {
  useTable,
  usePagination,
  useRowSelect,
  useGlobalFilter,
  useFilters,
  useSortBy,
} from "react-table";
import { Checkbox } from "../Component/Checkbox";
import GlobalFilter from "../Component/GlobalFilter";
import ColumnFilter from "../Component/ColumnFilter";
import EditableCell from "../Component/EditableCell";
import Example from "../Component/DatePicker";

function Table() {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
        Filter: ColumnFilter,
      },
      {
        Header: "First Name",
        accessor: "first_name",
        Filter: ColumnFilter,
        Cell: EditableCell,
      },
      {
        Header: "Last Name",
        accessor: "last_name",
        Filter: ColumnFilter,
        Cell: EditableCell,
      },
      {
        Header: "Email",
        accessor: "email",
        Filter: ColumnFilter,
        Cell: EditableCell,
      },
      {
        Header: "Gender",
        accessor: "gender",
        Filter: ColumnFilter,
        Cell: EditableCell,
      },
      {
        Header: "University",
        accessor: "university",
        Filter: ColumnFilter,
        Cell: EditableCell,
      },
      {
        Header: "New Column",
        accessor: "new_column",
        Cell: ({ row }) => <button className="button">Edit</button>,
         disableFilters: true,
         disableGlobalFilter: true,
      },
      {
        Header: "Date",
        accessor: "date",
        disableFilters: true,
        disableGlobalFilter: true,
        Cell: ({row}) => <Example />
      }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    setPageSize,
    pageCount,
    selectedFlatRows,
    setGlobalFilter,
  } = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
        },
        ...columns,
      ]);
    }
  );
  const { pageIndex, pageSize, globalFilter } = state;
  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <div className="App">
        <div className="container">
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? "\u2193"
                            : "\u2191"
                          : " "}
                      </span>
                      <div>
                        {column.canFilter ? column.render("Filter") : null}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {selectedFlatRows.length > 0 &&
        alert(
          JSON.stringify(
            {
              selectedFlatRows: selectedFlatRows.map((row) => row.original),
            },
            null,
            2
          )
        )}
      <div className="container1">
        <span className="button">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span className="button">
          Go To Page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: "50px" }}
          />
        </span>
        <span className="button">
          Show-rows:{" "}
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 25, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </span>
        <button
          className="button"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {"<<"}
        </button>
        <button
          className="button"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </button>
        <button
          className="button"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </button>
        <button
          className="button"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {">>"}
        </button>
      </div>
    </>
  );
}

export default Table;
