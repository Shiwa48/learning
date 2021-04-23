import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Show(props) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const result = await axios("http://localhost:8080/items-json/" + props.match.params.id)
      setData(result.data);
    };
    fetchData();
  }, [props.match.params.id]);
  
  return (
    console.log(data),
    <>
      <div className="container">
        <div className="card card-primary mb-3">
          <div className="card-header">
            <h5 className="card-title">商品詳細</h5>
          </div>
          <div className="card-body">
              <div className="form-group row">
                <label className="col-md-2 control-label">ID</label>
                <div className="col-md-10">
                  <p>{data.id}</p>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-2 control-label">商品名</label>
                <div className="col-md-10">
                  <p>{data.name}</p>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-2 control-label">価格</label>
                <div className="col-md-10">
                  <p>{data.price}</p>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-2 control-label">ベンダー</label>
                <div className="col-md-10">
                  <p>{data.vendor}</p>
                </div>
              </div>
              <div className="form-group row">
                <div className="offset-md-2 col-md-10">
                  <Link className="btn btn-primary" to="/items/">戻る</Link>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Show;
