import React from 'react';
import axios from 'axios';

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  componentWillMount() {
    axios
      .get("http://localhost:8080/items-json/" + this.props.match.params.id)
      // .then(res => console.log(res))
      .then(res => this.setState({ data: res.data }))
      .catch(err => alert(err));
  };
  
  render() {
    return(
      <>
        <p>{this.state.data.id}</p>
        <p>{this.state.data.name}</p>
        <p>{this.state.data.price}</p>
        <p>{this.state.data.vendor}</p>
      </>
    )
  };

}

export default Show;
