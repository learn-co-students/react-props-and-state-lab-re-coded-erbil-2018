import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name (gender: ♂ or ♀)</a>
          <div className="meta">
            <span className="date">Pet type {this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted 
          ?  <button className="ui disabled button">Already adopted</button>
          :<button onClick={this.props.onAdoptPet()}
          className="ui primary button">Adopt pet</button>
            
          }
        </div>
      </div>
    );
  }
}

export default Pet;
