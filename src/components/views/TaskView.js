import { Link } from "react-router-dom";

const TaskView = (props) => {
  const { task, deleteTask } = props;
  return (
    <div>
      <h1>{task.description}</h1>
      <h2>Priority: {task.prioritylevel}</h2>
      <h2>Completion Status: {task.completionstatus ? "Done": "Not Done"}</h2>
      {task.employee ? (
      <Link to={`/employee/${task.employee.id}`}> <h3>{task.employee.firstname + " " + task.employee.lastname}</h3></Link>
      ) : (
        <h3>Unassigned</h3>
      )}

      <Link to={`/edittask/${task.id}`}>Edit task information</Link>
      <br></br>
      <br></br>
      
      <Link to={`/tasks`}>View all tasks</Link>
      <br></br>
      <br></br>
      <button className="stlbut2" onClick={() => deleteTask(task.id)}>Delete Task</button>
    </div>
  );
};

export default TaskView;