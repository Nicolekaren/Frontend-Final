import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllEmployeesView = (props) => {
  let { employees, deleteEmployee } = props;
  if (!props.allEmployees.length) {
    return (
      <div>
        <p>There are no employees.</p>
        <Link to={"/"}> Home Page </Link>
      </div>
    );
  }
    return (
    <div>
        <Link to={'/'}> 
        <button className="stlbut2" style={{"margin": 10}}> Home Page </button>
        </Link>
        <div>
      {props.allEmployees.map((employee) => {
        let name = employee.firstname + " " + employee.lastname;
        return (
          <div key={employee.id} style={{"margin": "35px"}}>
            <Link to={`/employee/${employee.id}`}>
              <h1 style={{"marginBottom": "8px"}}>{name}</h1>
            </Link>

            <p className="dpt">{employee.department}</p>

            <button onClick={() => deleteEmployee(employee.id)} className="stlbut2">X</button>
          </div>
        );
      })}
      </div>
      <Link to={`/newemployee`}>
        <button className="stlbut2" style={{"margin":20}}>Add New Employee</button>
      </Link>

    </div>
  );
};

AllEmployeesView.propTypes = {
  allEmployees: PropTypes.array.isRequired,
};

export default AllEmployeesView;