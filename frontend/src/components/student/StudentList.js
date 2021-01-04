import React, { Component, Fragment } from 'react';
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MyButtonComponent from '../elements/MyButtonComponent';
import MyAutocomplete from '../elements/MyAutocomplete';
// Import React Table
import ReactTable, { ReactTableDefaults } from 'react-table';
import MyReactTable from '../elements/MyReactTable';

class StudentList extends Component {
  constructor(props) {
    super();
    this.state = {
      data: makeData()
    };
  }

  render() {
      const { data } = this.state;
      const columns=[
        {
          Header: "Name",
          columns: [
            {
              Header: "First Name",
              accessor: "firstName"
            },
            {
              Header: "Last Name",
              accessor: "lastName"
            }
          ]
        },
        {
          Header: "Info",
          columns: [
            {
              Header: "Age",
              accessor: "age"
            }
          ]
        }
      ];
      const defaultSorted=[
        {
          id: "age",
          desc: true
        }
      ];

    return (

        <div>
            <h1>Teacher Form 1</h1>
                <MyAutocomplete/>
                <MyReactTable data={data} columns={columns} defaultSorted={defaultSorted}/>
        </div>
    )
  }
}

//export default connect(null, null)(StudentList);
export default StudentList;

//render(<App />, document.getElementById("root"));
