import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar"

import Index from './components/Index';
import Show from './components/Show';
import New from './components/New';
import Edit from './components/Edit';

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/items">商品管理デモ</Navbar.Brand>
      </Navbar>
      <Route path="/items" exact component={Index} />
      <Route path="/items/new" exact component={New} />
      <Route path="/items/:id/detail" component={Show} />
      <Route path="/items/:id/edit" component={Edit} />
    </Router>
  );
}

export default App;
