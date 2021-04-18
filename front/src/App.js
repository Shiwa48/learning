import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar"

import Index from './components/Index';
import Show from './components/Show';

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/items">商品管理デモ</Navbar.Brand>
      </Navbar>
      <Route path="/items" exact component={Index} />
      <Route path="/items/:id" component={Show} />
    </Router>
  );
}

export default App;
