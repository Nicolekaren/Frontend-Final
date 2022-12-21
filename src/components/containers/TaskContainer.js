import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTaskThunk, deleteTaskThunk } from "../../store/thunks";
import { TaskView } from "../views";
import { useParams } from "react-router";

const withRouter = (MyComponent) => (props) => {
    const params = useParams();
    return (
      <MyComponent
        {...props}
        params={params}/>
    );
  };

class TaskContainer extends Component {
  componentDidMount() {
    this.props.fetchTask(this.props.params.id);
  }

  render() {
    return <TaskView 
    task={this.props.task}
    deleteTask={this.props.deleteTask} />;

  }
}
const mapState = (state) => {
  return {
    task: state.task,
  };
};
const mapDispatch = (dispatch) => {
  return {
    fetchTask: (id) => dispatch(fetchTaskThunk(id)),
    deleteTask: (taskId) => dispatch(deleteTaskThunk(taskId)),
  };
};

export default withRouter(connect(mapState, mapDispatch)(TaskContainer));