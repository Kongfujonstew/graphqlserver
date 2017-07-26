import React from 'react';
import {render} from 'react-dom';


export class Client extends React.Component {
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
      <div className="flexOneofTwo blackBackground">
        <div style={{backgroundColor: this.props.color}}
          className="fullHeight"
        >
          <h1>{this.state.name ? this.state.name : this.props.color + ": Please log in"}</h1>




        </div>

      </div>
    )
  }
}