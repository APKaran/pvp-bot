import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/LoginPage/LoginPage';
import PlanInquiry from './components/PlanInquiry/PlanInquiry';
import ErrorPage from './components/ErrorPage/ErrorPage';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PlanInquiry isPlanInquiry/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/plan-inquiry" element={<PlanInquiry isPlanInquiry/>}/>
        <Route path="/participant-inquiry" element={<PlanInquiry isPlanInquiry={false}/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;
