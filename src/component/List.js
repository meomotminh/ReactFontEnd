import React from 'react';
import axios from 'axios';

class List extends React.Component {
   constructor(props){
      super(props);

      this.handleClickGet = this.handleClickGet.bind(this);
      this.state = {dateSaved : []};
   }


   handleClickGet (){
     axios.get('http://localhost:5000/dates')
     .then(response => {
         console.log(response.data);
         this.setState({dateSaved : response.data});

     }
     );
   }

   render(){
      const dateSaved = this.state.dateSaved;
      const listDate = dateSaved.map((date) =>
          <li>{date.IDate}</li>
      );
      return (
        <div>
          <h2 className = 'list-head'>Added Dates</h2>
          <button className = 'button' onClick={this.handleClickGet}>Load</button>
          <ul>{listDate}</ul>
        </div>
      )
   }
}

export default List;
