import "./App.css"; 
import { Routes, Route } from "react-router-dom";

import {
  HomePageContainer,
  EmployeeContainer,
  TaskContainer,
  AllEmployeesContainer,
  AllTasksContainer,
  NewTaskContainer,
  NewEmployeeContainer,
  EditTaskContainer
} from './components/containers';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePageContainer/>} />
        <Route path="/employees" element={<AllEmployeesContainer/>} />
        <Route path="/newemployee" element={<NewEmployeeContainer/>} />
        <Route path="/employee/:id" element={<EmployeeContainer/>} /> 
        <Route path="/tasks" element={<AllTasksContainer/>} />
        <Route path="/newtask" element={<NewTaskContainer/>} />
        <Route path="/task/:id" element={<TaskContainer/>} />  
        <Route path="/edittask/:id" element={<EditTaskContainer/>} /> 

      </Routes>        
    </div>
  );
}

export default App;
