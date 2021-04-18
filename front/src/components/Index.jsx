import React from 'react';
import axios from 'axios';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: []
    };
  }
  
  componentWillMount() {
    axios
      .get("http://192.168.3.5:8080/items-json")
      // .then(res => console.log(res))
      .then(res => this.setState({ listData: res.data }))
      .catch(err => alert(err));
  };
  
  render() {
    return (
      <>
        <div class="card card-primary mb-3">
          <div class="card-header">
            <h5 class="card-title">商品リスト<a href="/items/new" class="btn btn-success float-right">新規</a></h5>
          </div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>商品名</th>
                <th>価格</th>
                <th>ベンダー</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {this.state.listData.map(val => (
              <tr>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.price}</td>
                <td>{val.vendor}</td>
                <td class="float-right">
                  <a class="btn btn-primary" href={`/items/${val.id}`} >詳細</a>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Index;
