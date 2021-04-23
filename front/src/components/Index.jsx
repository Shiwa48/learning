import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Index() {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const result = await axios("http://localhost:8080/items-json");
      setData(result.data);
      setLoaded(true);
    }
    fetchData();
  }, []);

  function deleteDataApi(d) {
    setLoading(true);
    const udata = data.slice();
    const n = udata.indexOf(d);
    if (n >= 0){
      udata.splice(n, 1);
    }
    axios.delete(`http://localhost:8080/items-json/${d.id}`)
    .then(() => {
      setData(udata);
      setLoading(false);
    })
    .catch(error => {
      alert(error);
      setLoading(false);
    });
  }

  return (
    <>
      <div className="card card-primary mb-3">
        <div className="card-header">
          <h5 className="card-title">商品リスト<Link className="btn btn-success float-right" to="/items/new">新規</Link></h5>
        </div>
        {!loaded &&
          <p>loading...</p>
        }
        <table className="table table-striped">
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
          {data.map(val => (
            <tr key={val.id}>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.price}</td>
              <td>{val.vendor}</td>
              <td className="float-right">
                <Link className="btn btn-primary" to={`/items/${val.id}/detail`} >詳細</Link>
                <Link className="btn btn-primary" to={`/items/${val.id}/edit`} >変更</Link>
                <button className="btn btn-primary" disabled={loading} onClick={() => deleteDataApi(val)}>削除</button>
              </td>
            </tr>            
          ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Index;
