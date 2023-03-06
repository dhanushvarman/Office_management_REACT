import logo from './logo.svg';
import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Addemployee from './Addemployee';
import Editemployee from './Editemployee';
import Deleteemployee from './Deleteemployee';
import Assign from './Assign';
import Unassign from './Unassign';
import Work from './Work';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}>
          <Route path='/edit/:id' element={<Editemployee/>}></Route>
          <Route path='/create' element={<Addemployee/>}></Route>
          <Route path='/delete/:id' element={<Deleteemployee/>}></Route>
          <Route path='/assign/:id' element={<Assign/>}></Route>
          <Route path='/work' element={<Work/>}></Route>
          <Route path='/unassign/:id' element={<Unassign/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
