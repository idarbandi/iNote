import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import NotelistsPage from './pages/NotelistsPage'
import { NotePage } from './pages/NotePage';

function App() {
  return (
    <div className="container dark">
      <div className="app">
        <>
          <Header />
          <Router>
            <Switch>
              <Route path='/' exact Component={NotelistsPage} />
              <Route path='/note/:id' Component={NotePage} />
              Inote
            </Switch>
          </Router>
        </>
      </div>
  </div>
  );
}

export default App;
