import React, { Component } from 'react';

class Manager extends Component {
  constructor(){
    super();

    this.state= { data: [] };
  }

  render(){
    var Style = {
      label: {
        paddingLeft: "1em"
      }
    }

    return(
      <div>
        <div className="col-xs-12"><br />
          <h3>Select an option</h3>
          <div className="form-check">
            <input id="approve" type="radio" name="option" defaultValue="yes" defaultChecked className="form-check-input" />
            <label style={Style.label} htmlFor="approve" className="form-check-label">Approve</label>
          </div>
          <div className="form-check">
            <input id="deny" type="radio" name="option" defaultValue="no" className="form-check-input" />
            <label style={Style.label} htmlFor="deny" className="form-check-label">Deny</label>
          </div><br />
        </div>
      </div>
    );
  }
}

export default Manager;
