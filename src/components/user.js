import React, { Component } from 'react';

class User extends Component {
  constructor(){
    super();

    this.state= { data: [] };
  }

  render(){

    return(
      <div>
        <div className="col-xs-12">
          <h1>Form</h1>
          <p>Fill out all fields.</p>
        </div>
        <div className="form-group col-xs-6">
          <label htmlFor="bscid">BSC ID</label>
          <input id="bscid" type="text" name="bscid" className="form-control" />
        </div>
        <div className="form-group col-xs-6">
          <label htmlFor="email">Email</label>
          <input id="email" type="text" name="email" className="form-control" />
        </div>
        <div className="form-group col-xs-6">
          <label htmlFor="firstName">First name</label>
          <input id="firstName" type="text" name="firstName" className="form-control" />
        </div>
        <div className="form-group col-xs-6">
          <label htmlFor="lastName">Last name</label>
          <input id="lastName" type="text" name="lastName" className="form-control" />
        </div>
        <div className="form-group col-xs-12">
          <label htmlFor="managerEmail">Manager Email</label>
          <input id="managerEmail" type="text" name="managerEmail" className="form-control" />
        </div>
        <div className="form-group col-xs-12">
          <label htmlFor="request">Request</label>
          <textarea id="request" rows={3} name="request" className="form-control" defaultValue={""} />
        </div>
      </div>
    );
  }
}

export default User;
