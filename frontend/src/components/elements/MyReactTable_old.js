import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ReactTable, { ReactTableDefaults } from 'react-table-6';
import 'react-table-6/react-table.css';
import 'react-datepicker/dist/react-datepicker.css';
import "../../index.css";
import axios from "axios";

const renderOptions = (input, label, data, columns, defaultSorted, query) => {
    const aaa = "";

    try {
        axios.all([axios.get('http://localhost:9090'+query)]).then(axios.spread((...responses) => {
          return responses[0].data;
        })).catch(errors => {

        })
    } catch (error) { }
}
const MyReactTable2 = ({ input, label, data, columns, defaultSorted, query }) => (

  <div>
    <ReactTable
      data={renderOptions(query)}
      filterable
      defaultFilterMethod={(filter, row) =>
      String(row[filter.id]) === filter.value}
      columns={columns}
      defaultSorted={defaultSorted}
      defaultPageSize={10}
      className="-striped -highlight"
      column={{
      							...ReactTableDefaults.column,
      							style: {
      								borderLeft: 'none',
      								borderRight: 'none',
      							}
      						}
      						}
    />
  </div>
)

export default MyReactTable;