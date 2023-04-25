import "./Nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from 'react-bootstrap/Dropdown';

const Nav = () => {
  return (
    <div className="nav-box">
      <div className="sub-nav1 justify-content-start ">
      <img src={process.env.PUBLIC_URL + "logo.png" } className="logo" />
      </div>
      <div
        className="sub-nav2 flex-column justify-content-end " >
        <span className="name">BYC</span>
        <span className="name1">BARATH YOUTH CENTER</span>
      </div>
      <div className="sub-nav3 justify-content-end">
        <div className="sub-nav-in">
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" style={{backgroundColor:"transparent", color:"black"}}>
        MENU
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Home</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Blood Bank</Dropdown.Item>
        <Dropdown.Item href="#/action-3">About</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

        </div>
      </div>
    </div>
  );
};
export default Nav;
