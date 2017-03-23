import React from "react";
import axios from 'axios';
import {Table, Column, Cell} from 'fixed-data-table';
import Listcolumns from './Listcolumn.jsx';

class Tablereport extends React.Component {
  constructor() {
       super();
       this.state = {
         data: []
       };
   }

componentDidMount() {
//  var url = 'http://localhost:9000/api/product';
 axios.get('http://localhost:8100/report.json')
      .then(response => {
        this.setState ({
          data: response.data.data
        });       
          this.state.data = response.data.data;        
      })
      .catch(error => {
        console.log(error);
      });
}

render() {    
    const currency = this.state.data.currency;   
    const columns = this.state.data.column;
    return (      
      <div className="row">
        <div className="col-md-12">
          <div className="col-sm-3">
            <div className="card-block">
                <h4 className="card-title">{currency}</h4>
                <Listcolumns listColum={currency} />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Tablereport;
