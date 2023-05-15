import './App.css';
import CreatePage from './views/CreatePage'
import DetailsPage from './views/DetailsPage'
import UpdatePage from './views/UpdatePage'
import Main from './views/Main';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <h1 style={{ borderBottom: '1px solid black', paddingBottom: '10px', borderTop: '1px solid black', paddingTop: '10px' }}>Favorite Authors</h1>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/authors/new" element={<CreatePage />} />
        <Route path="/authors/:id" element={<DetailsPage />} />
        <Route path="/authors/:id/edit" element={<UpdatePage />} />
      </Routes>

    </div>
  );
}

export default App;
