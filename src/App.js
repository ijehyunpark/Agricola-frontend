import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainRoom from './MainRoom/MainRoom'
import ChatRoom from './ChatRoom/ChatRoom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={MainRoom} />
          <Route path='/chat' Component={ChatRoom} />
          <Route render={() => (alert("omg"))} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
