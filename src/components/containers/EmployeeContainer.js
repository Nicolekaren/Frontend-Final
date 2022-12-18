import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchEmployeeThunk,
  fetchAllTasksThunk,
  editTaskThunk,
} from "../../store/thunks";

import { useParams } from "react-router";
import { EmployeeView } from "../views";

const withRouter = MyComponent => (props) => {
  const params = useParams();
  return (
    <MyComponent
      {...props}
      params={params}/>
  );
};

class EmployeeContainer extends Component {
  componentDidMount() {
    this.props.fetchEmployee(this.props.id);
    this.props.fetchTasks();
  }

  render() {
    return (
      <EmployeeView
        employee={this.props.employee}
        editTask={this.props.editTask}
        allTasks={this.props.allTasks}
      />
    );
  }
}
const mapState = (state) => {
  return {
    employee: state.employee,
    allTasks: state.allTasks,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchEmployee: (id) => dispatch(fetchEmployeeThunk(id)),
    editTask: (task) => dispatch(editTaskThunk(task)),
    fetchTasks: () => dispatch(fetchAllTasksThunk()),
  };
};

export default withRouter(connect(mapState, mapDispatch)(EmployeeContainer));
