import { Navigate, Route, Routes } from 'react-router-dom';
import UsersTable from './components/UsersTable';
import Photos from "./components/Photos"
import Header from './components/Header.jsx'
import UsersDetail from './components/table/UsersDetail';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/users' element={<UsersTable />} /> 
        <Route path="/users/:userId" element={<UsersDetail />} />
        <Route path='/photos' element={<Photos />}/>
        <Route path="/" element={<Navigate to="/users" />} />
      </Routes>
    </>
  )
}

export default App
