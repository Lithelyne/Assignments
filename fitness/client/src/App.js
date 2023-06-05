import './App.css';
import { Routes, Route } from "react-router-dom";
import {Box} from '@mui/material'
//https://mui.com/material-ui/react-box/
import ExerciseDetail from './views/ExerciseDetail'
import Home from './views/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box m="auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </Box>
    </div>
  );
}

export default App;
