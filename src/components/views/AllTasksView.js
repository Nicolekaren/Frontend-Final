import { Link } from "react-router-dom";

const AllTasksView = (props) => {
  let { tasks, deleteTask } = props;
  if (!tasks.length) {
    return (
      <div>
        <p>There are no tasks.</p>
        <Link to={`/newtask`}>
          <button className="stlbut2">Add New Task</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {tasks.map((task) => {
        let description = task.description;
        return (
          <div key={task.id}>
            <Link to={`/task/${task.id}`}>
              <h1>{description}</h1>
            </Link>
            <button className="stlbut2" onClick={() => deleteTask(task.id)}>X</button>
          </div>
        );
      })}
      <br></br>
      <Link to={`/newtask`}>
        <button className="stlbut2">Add New Task</button>
      </Link>
      <Link to={"/"}>
        <button className="stlbut2">Home Page</button>
      </Link>
    </div>
  );
};

export default AllTasksView;