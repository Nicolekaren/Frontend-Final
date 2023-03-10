import { Link } from "react-router-dom";


const EmployeeView = (props) => {
  const { employee, editTask, allTasks, deleteEmployee } = props;
  let assignedTasks = allTasks.filter(
    (task) => task.employeeId === employee.id
  );
  let availableTasks = allTasks.filter(
    (task) => task.employeeId !== employee.id
  );

  if (assignedTasks==0) {
    return (
      <div>
         <h1>{employee.firstname}</h1>
         <h3>{employee.department}</h3>
        <p>There are no tasks assigned for this employee</p>

        <div>
          Available tasks:
          {availableTasks.map((task) => {
            return (
              <div key={task.id}>
                <Link to={`/task/${task.id}`}>
                  <h4>{task.description}</h4>
                </Link>
                <button
                className="stlbut2"
                  onClick={() =>
                    editTask({ id: task.id, employeeId: employee.id })
                  }
                >
                  +
                </button>
              </div>
            );
          })}
        </div>
         
        <br></br>
        <button className="stlbut2" onClick={() => deleteEmployee(employee.id)}>Delete Employee</button> 
        <Link to={"/"}> <button className="stlbut2">Home Page</button></Link>
        <Link to={'/employees'}> <button className="stlbut2"> All Employees </button></Link>
      </div>
      
    );
  }


  return (
    <div>
      <h1>{employee.firstname}</h1>
      <h3>{employee.department}</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          Assigned tasks:
          {assignedTasks.map((task) => {
            return (
              <div key={task.id}>
                <Link to={`/task/${task.id}`}>
                  <h4>{task.description}</h4>
                </Link>
                <button
                  onClick={() => editTask({ id: task.id, employeeId: null })}
                >
                  x
                </button>
              </div>
            );
          })}
        </div>
        <div>
          Available tasks:
          {availableTasks.map((task) => {
            return (
              <div key={task.id}>
                <Link to={`/task/${task.id}`}>
                  <h4>{task.description}</h4>
                </Link>
                <button className="stlbut2"
                  onClick={() =>
                    editTask({ id: task.id, employeeId: employee.id })
                  }
                >
                  +
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <br></br>
       <button className="stlbut2" onClick={() => deleteEmployee(employee.id)}>Delete Employee</button> 
      <Link to={"/"}> <button className="stlbut2">Home Page</button></Link>
      <Link to={'/employees'}> <button className="stlbut2"> All Employees </button></Link>

    </div>
  );
};

export default EmployeeView;