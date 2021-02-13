import React, { Component, Fragment, useState } from 'react';
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import MyButtonComponent from '../elements/MyButtonComponent';
import MyAutocomplete from '../elements/MyAutocomplete';
// Import React Table
import ReactTable, { ReactTableDefaults } from 'react-table';
import MyReactTable from '../elements/MyReactTable';
import axios from "axios";
import moment from 'moment';

class StudentList extends Component {
    state = {
        students: []
    };

      constructor(props) {
        super();
        this.state = {
          data: makeData()
        };
      }

    componentDidMount() {
        const { students } = this.state;

        try {
                axios.all([axios.get('http://localhost:9090/students')]).then(axios.spread((...responses) => {
                  this.setState({ students: responses[0].data });
                })).catch(errors => {

                })
        } catch (error) { }

    }

  render() {
      const { data, students } = this.state;
      const query = "/students";

      const columns=[
        {
          Header: "Name",
          columns: [
            {
              Header: "First Name",
              accessor: "firstName",
            },
            {
              Header: "Last Name",
              accessor: "lastName",
            }
          ]
        },
        {
          Header: "Info",
          columns: [
            {
              Header: "Birth Date",
              accessor: "birthDate",
              Cell : (props)=>{
                  const custom_date = new Date(props.value).toLocaleDateString();
                  return <span>{custom_date}</span>
              }
            },
            {
              Header: "Internal",
              accessor: "internal"
            },
            {
              Header: "Gender",
              accessor: "gender",
              Filter: ({filter, onChange}) =>
                <select onChange={e => onChange(e.target.value)} style={{ width: '100%' }} value={filter ? filter.value : ''}>
                    <option key="All" value="">All</option>
                    <option value="M">M</option>
                    <option value="F">F</option>
                </select>
            },
            {
              Header: "Address",
              accessor: "address",
              Cell: props => <div>{props.value.city}</div>
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
            <h1>Student List</h1>
                <MyReactTable query={query} data={students} columns={columns} defaultSorted={defaultSorted}/>
        </div>
    )
  }
}

export default StudentList;

