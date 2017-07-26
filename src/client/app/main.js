import React from 'react';
import {render} from 'react-dom';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';
import axios from 'axios';

import {Admin} from './admin';
import {Client} from './client';

var url = 'http://localhost:3000/graphql';

function graphQLFetcher(graphQLParams) {
  return fetch(window.location.origin + '/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

export class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colorClient1: "yellow",
      colorClient2: "grey"
    }
  }

  componentWillMount() {
    this.getAllUsers();
  }

  getAllUsers () {
    let query = `{
      allUsers {
        username
      }
    }`;

    axios({
      method: 'post',
      url: url,
      headers:  {'Content-Type': 'application/json'},
      data: JSON.stringify({query})
    }).then(data => {console.log(data)});
  }


































  render () {
    return (
      <div>
        <div id="topWindow" className="windowSize">
 
          <Admin/>



          <div id="clients" className="flexContainer threeQuarterHeight">
            <Client 
              color={this.state.colorClient1}




            />

            <Client 
              color={this.state.colorClient2}





            />

          </div>
        </div>

        <GraphiQL fetcher={graphQLFetcher} />

      </div>
    )
  }
}