import React from 'react';
import {render} from 'react-dom';


export class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }


  }

  componentWillReceiveProps(nextProps) {
    
  }

  render () {
    return (
      <div id="admin" className="flexContainer blackBackGround oneQuarterHeight">
        <h1 className="white">Admin</h1>

      </div>
    )
  }
}