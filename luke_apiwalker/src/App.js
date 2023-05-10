import './App.css';
import People from './components/people';
import Planets from './components/planets';
import HeaderForm from './components/HeaderForm';
import { Route, Routes } from 'react-router-dom';






function App() {
  return (
    <div className="App">
      <HeaderForm />

      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets/:id" element={<Planets />} />

      </Routes>
    </div>
  );
}

export default App;
