import './App.css';
import CreatePage from './views/CreatePage'
import DetailsPage from './views/DetailsPage'
import UpdatePage from './views/UpdatePage'
import Main from './views/Main';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>

      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/Products/new" element={<CreatePage />} />
        <Route path="/Products/:id" element={<DetailsPage />} />
        <Route path="/Products/:id/edit" element={<UpdatePage />} />

      </Routes>
    </div>
  );
}

export default App;
