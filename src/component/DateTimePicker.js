import React from 'react';
import axios from 'axios';

class DateTimePicker extends React.Component{
   constructor(props){
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleClickPost = this.handleClickPost.bind(this);
      this.state = {dateSelected : ''};
   }

   handleChange(e){
      this.setState({dateSelected: e.target.value});
   }

   handleClickPost (){

     let payload = {
                     IDate : this.state.dateSelected
                   }

     let res = axios.post('http://localhost:5000/dates',payload);

   }

   render(){
      const dateSelected = this.state.dateSelected;
      return (
        <div>
          <input type="datetime-local" onChange={this.handleChange}></input>
          <p> value={dateSelected} </p>
          <button className = 'button' onClick={this.handleClickPost}>Submit</button>
        </div>
      )
   }
}

export default DateTimePicker;
