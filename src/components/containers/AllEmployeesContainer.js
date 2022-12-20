import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllEmployeesThunk, deleteEmployeeThunk } from "../../store/thunks";
import { AllEmployeesView } from "../views";

class AllEmployeesContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllEmployees();
  }

  render() {
    return (
      <AllEmployeesView
        allEmployees={this.props.allEmployees}
        deleteEmployee={this.props.deleteEmployee}
      />
    );
  }
}

const mapState = (state) => {
  return {
    allEmployees: state.allEmployees,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchAllEmployees: () => dispatch(fetchAllEmployeesThunk()),
    deleteEmployee: (employeeId) => dispatch(deleteEmployeeThunk(employeeId)),
  };
};

AllEmployeesContainer.propTypes = {
  allEmployees: PropTypes.array.isRequired,
  fetchAllEmployees: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(AllEmployeesContainer);