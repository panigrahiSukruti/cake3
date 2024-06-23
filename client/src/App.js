import './App.css';
import Layout from './components/shared/Layout';
import AllCakes from './components/pages/AllCakes';
import AddCake from './components/pages/AddCake';
import { Route, Routes } from 'react-router-dom';
import EditCake from './components/pages/EditCake';
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllCakes />} ></Route>
        <Route path="/add-cake" element={<AddCake />} ></Route>
        <Route path="/edit-cake/:id" element={<EditCake />} ></Route>
      </Routes>
    </Layout>
  );
}

export default App;
