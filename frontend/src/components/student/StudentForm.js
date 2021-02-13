import React, { Component, Fragment } from 'react';
import { change, Field, Form, stopSubmit, reduxForm  } from 'redux-form';
import BootForm from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Nav from 'react-bootstrap/Nav';
import { Grid } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MyTextField from '../elements/MyTextField';
import MySelect from '../elements/MySelect';
import MySelectTest from '../elements/MySelectTest';
import MySelectTest2 from '../elements/MySelectTest2';
import MyAutocomplete from '../elements/MyAutocomplete';
import MySelectWithInput from '../elements/MySelectWithInput';
import MyCheckbox from '../elements/MyCheckbox';
import MyReactTable from '../elements/MyReactTable';
import MyCheckboxList from '../elements/MyCheckboxList';
import MyDatePicker from '../elements/MyDatePicker';
import MyRadioGroup from '../elements/MyRadioGroup';
import MyButtonComponent from '../elements/MyButtonComponent';
import MyTabPanel from '../elements/MyTabPanel';
import MyTransferList from '../elements/MyTransferList';
import MyDialog from '../elements/MyDialog';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { useForm, FormProvider } from "react-hook-form";
import Checkbox from '@material-ui/core/Checkbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Radio from '@material-ui/core/Radio'
import Button from '@material-ui/core/Button'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import ReactTooltip from 'react-tooltip';
import "./index.css";
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import { makeData, Logo, Tips } from "./Utils";


const submit = values => {
  console.log(values);
};

class StudentForm extends Component {

    state = {
        isSubmitOpened: 'true',
        stat: 'aaar',
        title: '',
        message: '',
        age: '',
        tabIndex: 0,
        data: makeData(),
        open: false
    };

    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }

    componentDidMount() {
        const { fetch, match: { params: { id } } } = this.props;
        fetch(id);
    }

    getCountry = id => {
        const { dispatch, countries } = this.props;
        const countryId = parseInt(id, 10);
        let result = null;

        countries.forEach(country => {
            if (country.id === countryId) {
                result = country;
            }
        });
        /*
        if (country !== null) {
            dispatch(change('businessGroupForm', 'bgReqCountry', country));
        }*/
        return result;
    };

    submitForm = (values, action, notificatinFlag) => {
        const { student } = this.state;
        const { onSubmit, history, setStatus, saveStudentSuccess, countries, dispatch } = this.props;

        this.setState({ open: false });
        setStatus(false);
        dispatch(change('student', 'country', countries[1]));
        ///values.country = countries[2];
       // saveStudentSuccess(true);
        values.country =  this.getCountry(values.country);
        console.log(values.firstName);
        //onSubmit(false);
        return new Promise(() => { onSubmit({ ...values, student }, history); });
    };

    handleApproveProgress = ({ action, confirm = false }) => () => {
        const { student } = this.state;
        this.submitForm(student, action, confirm);
    };



           // const methods = null; //useForm();

      render() {
      const { data } = this.state;
        let allCountries = [{name: 'Bhutan', code: 'BT'}, {name: 'Slovakia', code: 'SK'}];
        const gender = [{name: 'Male', code: 'male'}, {name: 'Female', code: 'female'}];
        const { error, handleSubmit, pristine, reset, submitting, valid } = this.props;
        const { status, setStatus, countries } = this.props;
        allCountries = countries.map(country => ({id:country.id, name: country.country, code: country.id}))
        //const availableOwnerCodes = ownerCodes.map(code => ({ id: code.fldValue, text: code.descrip }));
        const { isSubmitOpened, stat, open } = this.state;
        const age = 'aa';
        const handleChange = (event) => {
            const { dispatch } = this.props;
            const { student } = this.state;
            console.log(event.target.value);
            dispatch(change('student', 'status', event.target.value));
            //setAge(event.target.value);
        };
        const value = 0;
        const { tabIndex } = this.state;
        //const [value, setValue] = React.useState(2);

        const handleChangeTab = (event, newValue) => {
           // setValue(newValue);
            this.setState({ tabIndex: newValue });
        };



const classes = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


  const handleClickOpenDialog = () => {
    const { open } = this.state;
    console.log(open);
    this.setState({ open: true });
   // setOpen(true);
  };

  const handleCloseDialog = () => {
    const { open } = this.state;
    console.log(open);
    this.setState({ open: false });
    //setOpen(false);
  };

        return (
<div>
<h3>Tu bude Title</h3>
    <br/>
    <Paper square>
      <Tabs
        value={tabIndex}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChangeTab}
        aria-label="disabled tabs example"
      >
        <Tab label="Main"/>
        <Tab label="Address" />
        <Tab label="Other" />
      </Tabs>
    </Paper>
    <br/>

    <form onSubmit={handleSubmit}>


        <div className={classes.root}>
            <MyTabPanel value={tabIndex} index={0}>
              <Grid container spacing={3} item xs={10}>
                <Grid item xs={4}>
                  First Name
                </Grid>
                <Grid item xs={8}>
                  <Field name="firstName" component={MyTextField} label="First Name"/>
                </Grid>
                <Grid item xs={4}>
                  Last Name
                </Grid>
                <Grid item xs={8}>
                  <Field name="lastName" component={MyTextField} label="Last Name"/>
                </Grid>
                <Grid item xs={4}>
                  Gender
                </Grid>
                <Grid item xs={8}>
                  <Field name="gender" component={MyRadioGroup} options={gender} />
                </Grid>
                <Grid item xs={4}>
                  Internal
                </Grid>
                <Grid item xs={8}>
                    <Field name="internal" component={MyCheckbox} label="Is Student internal ?"/>
                </Grid>
                <Grid item xs={4}>
                  Birth Date
                </Grid>
                <Grid item xs={8}>
                    <Field name="birthDate" component={MyDatePicker} label="Start date"/>
                </Grid>
              </Grid>
              </MyTabPanel>
              <MyTabPanel value={tabIndex} index={1}>
               <Grid container spacing={3} item xs={10}>
                <Grid item xs={4}>
                  Country
                </Grid>
                <Grid item xs={8}>
                  <Field name="country" component={MySelectTest} options={allCountries} label="Country"/>
                </Grid>

                  <Grid item xs={4}>
                    City
                  </Grid>
                  <Grid item xs={8}>
                    <Field name="city" component={MyTextField} label="City"/>
                  </Grid>
                  <Grid item xs={4}>
                    Street
                  </Grid>
                  <Grid item xs={8}>
                    <Field name="street" component={MyTextField} label="Street"/>
                  </Grid>
                   <Grid item xs={4}>
                     Number
                   </Grid>
                   <Grid item xs={8}>
                     <Field name="number" component={MyTextField} label="Number"/>
                   </Grid>
                   <Grid item xs={4}>
                     ZIP
                   </Grid>
                   <Grid item xs={8}>
                     <Field name="zip" component={MyTextField} label="ZIP"/>
                   </Grid>


               </Grid>
              </MyTabPanel>
              <MyTabPanel value={tabIndex} index={2}>
              <MyAutocomplete/>


              </MyTabPanel>
              <br/>
        </div>

        <Grid container spacing={3} item xs={10}>
            <Grid item xs={4}></Grid>
            <Grid item xs={8}>
                <Button disabled={!valid || pristine || submitting} style={{ float: 'right' }} variant="contained" color="primary" onClick={handleClickOpenDialog}>
                    Confirm
                </Button>
                <MyButtonComponent label="Cancel" color="secondary" method={handleClickOpenDialog}/>
            </Grid>
        </Grid>
        <br/>
        <MyDialog
            open={open}
            keepMounted
            onClose={handleCloseDialog}
            onAccept={handleSubmit(values => this.submitForm(values, 'Approve'))}
            onDecline={this.handleApproveProgress({ action: 'Approve' })}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          />
          <ReactTooltip />
          <p data-tip="hello world">Tooltip</p>
    </form>
</div>
        )
      }
}

export default StudentForm;