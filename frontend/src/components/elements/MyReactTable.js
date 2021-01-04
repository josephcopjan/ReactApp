import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ReactTable from 'react-table-6';

const MyReactTable = ({ input, label, data, columns, defaultSorted }) => (
  <div>
    <ReactTable
      data={data}
      columns={columns}
      defaultSorted={defaultSorted}
      defaultPageSize={10}
      className="-striped -highlight"
    />
  </div>
)

export default MyReactTable;