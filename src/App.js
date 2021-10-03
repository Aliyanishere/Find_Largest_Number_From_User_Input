import { Component } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


class App extends Component {

  constructor() {
    super();
    this.state = {
      userInputArray: [],
      userInput: "",
      largestNum: "0",
      emptyarray: []
    }
  }

  updatingArray = (e) => {
    e.preventDefault();
    this.state.userInputArray.push(this.state.userInput);
    this.setState({
      largestNum: Math.max(...this.state.userInputArray),
      userInput: ""
    })
  }

  inputHandleChange = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }

  clearAll =() => {
    this.setState({
      userInput: "",
      userInputArray: [],
      largestNum: "0"      
    })
  }

  render() {
    return (
      <div className="App" >
        <br />
        <h2 className="heading">Largest No :</h2>
        <h2 className="LargestNoField">{this.state.largestNum}</h2>
        <br /><br /><br /><br />
        <Box
          component="form"
          onSubmit={this.updatingArray}
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            display: "inline"
          }}
          noValidate
          autoComplete="off"
        >
          <TextField value={this.state.userInput} id="standard" onChange={(e) => this.inputHandleChange(e)} label="Enter Number" color="warning" type="number" variant="standard" />
        </Box>
        <i className="fas fa-plus-circle fa-3x" onClick={this.updatingArray}></i>
        <div className="listDiv">
          <ul className="unorderList">{this.state.userInputArray.map((val, ind) => {
            return <li key={ind}>{val}</li>
          })}</ul>
        </div>

        <Stack direction="row" spacing={2} display="flex" justifyContent="center" marginTop="50px" marginRight="48px">
          <Button variant="contained" color="warning" onClick={this.clearAll}>
            Clear All
          </Button>
        </Stack>
      </div>
    );
  }
}

export default App;
