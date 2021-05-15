import React, { Component, Fragment, useState } from 'react';
import StarIcon from "@material-ui/icons/Star";
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
import { Link } from "react-router-dom";
import { TextField } from '@material-ui/core'
import { makeStyles, withStyles, createStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import authHeader from '../../services/auth-header';
import { useTable, userFilters } from "react-table";

class StudentList extends Component {

    state = {
        students: [],
    };

      constructor(props) {
        super();
        this.state = {
          data: makeData(),
          registrationDate: null
        };
      }



    componentDidMount() {
        const { students } = this.state;


        try {/*
                axios.all([axios.get('http://localhost:9090/students', { headers: authHeader() })]).then(axios.spread((...responses) => {
                  this.setState({ students: responses[0].data });
                })).catch(
                    errors => {
                })*/
/*
                axios.get('http://localhost:9090/students', { headers: authHeader() })
                      .then(res => {
                        this.setState({ students: res.data });
                      }).catch(
                        errors => {
                        console.log("TESTIK " + errors)
                    })
                    fetch("http://api.example.com:9090/students", { headers: authHeader() })
                          .then(res => {this.setState({
                                                                      students: res.data
                                                                    });
                                                                     console.log("tu som")},
                            error => { console.log("error") }



                                                                     )*/

/*
                    var aaa = get('http://localhost:9090/students', {})
*/
                    axios.get('http://localhost:9090/students', { headers: authHeader() }).then(
                          response => {
                            this.setState({
                              students: response.data
                            });
                          },
                          error => {
                            this.setState({
                              content:
                                (error.response &&
                                  error.response.data &&
                                  error.response.data.message) ||
                                error.message ||
                                error.toString()
                            });
                          }
                        );


        } catch (error) {
            console.log(error);
        }

    }

    calculateAge = (birthday) => {
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    changeDate = (birthday, filter) => {
        const { registrationDate } = this.state;

       birthday = new Date(Date.parse(birthday));
       //var bbb =
       var bbb = birthday.getFullYear()  + "-" + String((birthday.getMonth()+1)).padStart(2, '0') +"-"+String((birthday.getDate()-1)).padStart(2, '0');
       //this.setState({ registrationDate: bbb });
       return bbb;
    }

    prepareDate = (birthday) => {
        return String((birthday.getDate())).padStart(2, '0') + "/" + String((birthday.getMonth()+1)).padStart(2, '0') + "/" + birthday.getFullYear();
    }

    addStudent = (student) => {
        let newStudent = student;
        newStudent.age = this.calculateAge(new Date(student.birthDate));
        return newStudent;
    }

    deleteDate = (aaa) => {
       // const { ...setAllFilters } = useTable({ }, userFilters)
        const { registrationDate } = this.state;
        console.log("testik");
        window.location.reload(false);
        this.setState({ registrationDate: "2021-05-03" }); // "2021-05-07" '02/05/2021'
        return "2021-05-03";
        //return String((birthday.getDate())).padStart(2, '0') + "/" + String((birthday.getMonth()+1)).padStart(2, '0') + "/" + birthday.getFullYear();
    }

  render() {
      const { data, students, registrationDate } = this.state;
      const query = "/students";
      const dateValue = null;

      //MuiInputBase-input MuiInput-input
      const theme = createMuiTheme({
        overrides: {

          MuiInputBase: {

            input: {
              paddingTop: '0px',
              paddingRight: '0px',
              paddingBottom: '0px',
              paddingLeft: '0px',
              height: '17px',
              backgroundColor: 'black'
            },
          },
        },
      });

/*
       let studentsData = [];

           if(students){
               studentsData = students.map((student) =>
                   student = this.addStudent(student)
             );
           }*/
      var d = new Date();
        var aaa = d.getFullYear() + "-" + String((d.getMonth()+1)).padStart(2, '0') + "-" + String((d.getDate())).padStart(2, '0');

      const columns=[
        {
          Header: "Name",
          columns: [
            {
              Header: "First Name",
              accessor: "firstName",
              minWidth: 150
            },
            {
              Header: "Last Name",
              accessor: "lastName",
              minWidth: 150
            }
          ]
        },
        {
          Header: "Info",
          columns: [
          /*
            {
              Header: "Age",
              accessor: "birthDate",
              width: 50,
              Cell : (props)=>{
                  return <span>{this.calculateAge(new Date(props.value))}</span>
              },
              filterMethod: (filter, row) => String(this.calculateAge(new Date(row[filter.id]))).startsWith(filter.value)
            },*/
            {
              Header: "Registration Date",
              accessor: "registrationDate",
              width: 150,
              Cell : (props)=>{
                  return <span>{this.prepareDate(new Date(props.value))}</span>
              },
              Filter: ({filter, onChange}) =>
                <ThemeProvider theme={theme}>
                    <div>
                  <TextField
                        onChange={e =>
                            onChange(this.changeDate(e.target.value, filter))
                        }
                        id="dateTest"
                        disableunderline={true}
                        type="date"
                        style = {{width: 120}}

                        value= {registrationDate}
                        InputProps={{
                                disableunderline: true
                        }}

                      />
                    <DeleteIcon onClick={e => this.deleteDate(e.target.value)} style={{'width': '30px', 'height': '25px', 'padding-top': '5px'}}/>
                    </div>
                </ThemeProvider>

            },
            {
              Header: "Internal",
              accessor: "internal",
              width: 100,
              Cell: row => {
                return(
                  <div style={{'text-align':'center'}}>
                    <input type="checkbox"
                        disabled
                      checked={row.value == true ? true : false}
                       />
                  </div>)},
              Filter: ({filter, onChange}) =>
                  <select onChange={e => onChange(e.target.value)} style={{ width: '100%' }} value={filter ? filter.value : ''}>
                      <option key="All" value="">All</option>
                      <option value="true">Internal</option>
                      <option value="false">External</option>
                  </select>
            },
            {
              Header: "Gender",
              accessor: "gender",
              width: 100,
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
        },
        {
          Header: "Action",
          columns: [
            {
              Header: 'Edit',
              accessor: 'id',
              filterable: false,
              width: 70,
              Cell: ({ row }) => (<Link to={{ pathname: `student/${row.id}` }}>View</Link>)
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

        <div id="testik">

            <span class="material-icons">
            search
            </span>

            <h1>Student List</h1>
                <MyReactTable query={query} data={students} columns={columns} defaultSorted={defaultSorted}/>
        </div>
    )
  }
}

export default StudentList;

