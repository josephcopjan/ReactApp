import React, { Component } from "react";
import MyButtonComponent from '../elements/MyButtonComponent';
import Button from '@material-ui/core/Button'
import MyDialog from '../elements/MyDialog';
import HookTest from "../elements/HookTest";

class TestPage extends React.Component {

  constructor() {
    super()
    this.state = {
        openDialog: false,
        inputValue: 'aaaa'
    }
  }

  handleClickOpenModal = () => {
    const {inputValue} = this.state;

    this.setState({openDialog: true})
    console.log("handleClickOpenModal " + inputValue);
  }

  onClose = () => {
    this.setState({openDialog: false})
  }

  handleChange (e, a) {
    this.setState({inputValue: e.target.value})
    console.log('handle change called')
  }

  onClose = () => {
      this.setState({openDialog: false})
    }

  render() {
    const {openDialog} = this.state;
    return(
        <div>
        <h2>Hi, I am a Car!</h2>
        <input value={this.state.inputValue} onChange={(e) => {this.handleChange(e)}} />
        <Button style={{ float: 'right' }} variant="contained" color="primary" onClick={this.handleClickOpenModal}>
          Confirm
        </Button>
        <HookTest/>
        { openDialog &&
        <MyDialog open={openDialog} onDecline={this.onClose}/>
        }
        </div>
        )
  }
}

export default TestPage