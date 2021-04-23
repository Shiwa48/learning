import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Validation from './Validation';

function New() {
  const [data, setData] = useState({name: null, price: null, vendor: null});
  const [message, setMessage] = useState({name: null, price: null, vendor: null});
  const [loading, setLoading] = useState(false);

  function handleInputChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setData({ ...data, [name]: value });
    setMessage({ ...message, [name]: Validation(name, value) });
  }

  useEffect(() => {
    const umessage = {
      name: Validation("name", null),
      price: Validation("price", null),
      vendor: Validation("vendor", null)
    }
    setMessage(umessage);
  }, []);

  function canSubmit() {
    if(message.name === 'ok' && message.price === 'ok' && message.vendor === 'ok' && !loading) {
      return true
    } else {
      return false
    }
  };

  function createApi() {
    setLoading(true);
    axios.post(`http://localhost:8080/items-json/`, data)
    .then(() => {
      window.location.replace("/items/");
      setLoading(false);
    })
    .catch(error => {
      alert(error);
      setLoading(false);
    });
  }

  return (
    <>
      <div className="container">
        <div className="card card-primary mb-3">
          <div className="card-header">
            <h5 className="card-title">商品新規</h5>
          </div>
          <div className="card-body">
              <div className="form-group row">
                <label className="col-md-2 control-label">商品名</label>
                <div className="col-md-10">
                  <input className="form-control" type="text" name="name" defaultValue={data.name} onChange={handleInputChange} />
                  {message.name !== 'ok' && ( <p className="text-danger" >{message.name}</p> )}
                  {message.name === 'ok' && ( <p className="text-success" >{message.name}</p> )}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-2 control-label">価格</label>
                <div className="col-md-10">
                  <input className="form-control" type="text" name="price" defaultValue={data.price} onChange={handleInputChange} />
                  {message.price !== 'ok' && ( <p className="text-danger" >{message.price}</p> )}
                  {message.price === 'ok' && ( <p className="text-success" >{message.price}</p> )}
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-2 control-label">ベンダー</label>
                <div className="col-md-10">
                  <input className="form-control" type="text" name="vendor" defaultValue={data.vendor} onChange={handleInputChange} />
                  {message.vendor !== 'ok' && ( <p className="text-danger" >{message.vendor}</p> )}
                  {message.vendor === 'ok' && ( <p className="text-success" >{message.vendor}</p> )}
                </div>
              </div>
              <div className="form-group row">
                <div className="offset-md-2 col-md-10">
                  <button className="btn btn-primary" disabled={!canSubmit()} onClick={() => createApi()}>登録</button>
                  <Link className="btn btn-primary" to="/items/">キャンセル</Link>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default New;
