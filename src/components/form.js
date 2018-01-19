import React, { Component } from 'react';

import WorkflowTracker from './workflowTracker';
import User from './user';
import Manager from './manager';
import BusinessOwner from './businessOwner';
import SubmitButton from './submitButton';


class Form extends Component {
  constructor(){
    super();

    this.state= { data: [] };
  }

  render(){

    return(
      <div className="container">
        <div className="table-row row">
          <div className="col-xs-8 col-md-8">
            <div className="form-row">
              <form method="post">
                <User />
                <Manager />
                <BusinessOwner />
                <SubmitButton />
              </form>
            </div>
          </div>
          <div className="col-xs-4 col-md-4">
            <WorkflowTracker />
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
