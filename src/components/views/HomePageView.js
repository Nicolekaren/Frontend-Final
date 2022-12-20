import { Link } from 'react-router-dom';
import './views.css';

const HomePageView = () => {

  return (
    <div>
      <h6 className="myStyle">Employee Management System</h6>

      <div className="parent'">
      <div className="child">
      <Link to={'/employees'} > <button className="stlbut">All Employees </button></Link>
      </div>

      <div className='child'>
      <Link to={'/tasks'} > <button className="stlbut">All Tasks </button></Link>
      </div>
      </div>
      
    </div>
  );    
}

export default HomePageView;