import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './MainRoom/Main'
import ChatRoom from './ChatRoom/ChatRoom'

function App() {

  return (
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/EnterRoom' element={<ChatRoom />} />
          <Route render={() => (alert("이게 뭐임?"))} />
        </Routes>
      </Router>
  );
}

export default App;
