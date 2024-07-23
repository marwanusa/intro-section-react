// import "./Header.css";
// import image from "../assets/logo.svg";
// import todo_img from "../assets/icon-todo.svg";
// import calendar_img from "../assets/icon-calendar.svg";
// import remainders_img from "../assets/icon-reminders.svg";
// import planning_img from "../assets/icon-planning.svg";
// import { useState } from "react";

// const Header = () => {
//   const [downClicked, setDownClicked] = useState(false);
//   const [compDownClicked, setCompDownClicked] = useState(false);
//   const [menuState, setMenuState] = useState(false);

//   function handleFeaturesClick() {
//     setDownClicked((prevState) => !prevState);
//   }

//   function handleCompanyClick() {
//     setCompDownClicked((prevState) => !prevState);
//   }
//   function handleMenuClick() {
//     setMenuState((prevState) => !prevState);
//   }

//   return (
//     <div className="header">
//       <div className="left">
//         <img src={image} alt="logo-image" />
//         <ul>
//           <li>
//             <button
//               className={`arrow ${downClicked ? "changed" : ""}`}
//               onClick={handleFeaturesClick}
//             >
//               Features
//             </button>
//             <ul
//               className="down_bar"
//               style={{ display: downClicked ? "flex" : "none" }}
//             >
//               <li>
//                 <img src={todo_img} alt="" /> Todo List
//               </li>
//               <li>
//                 <img src={calendar_img} alt="" /> Calendar
//               </li>
//               <li>
//                 <img src={remainders_img} alt="" /> Remainders
//               </li>
//               <li>
//                 <img src={planning_img} alt="" /> Planning
//               </li>
//             </ul>
//           </li>
//           <li>
//             <button
//               className={`arrow ${compDownClicked ? "changed" : ""}`}
//               onClick={handleCompanyClick}
//             >
//               Company
//             </button>
//             <ul
//               className="comp_down_bar"
//               style={{ display: compDownClicked ? "flex" : "none" }}
//             >
//               <li>History</li>
//               <li>Our Team</li>
//               <li>Blog</li>
//             </ul>
//           </li>
//           <li>
//             <a href="">Careers</a>
//           </li>
//           <li>
//             <a href="">About</a>
//           </li>
//         </ul>
//       </div>
//       <div className="right">
//         <a href="">Login</a>
//         <a href="" className="reg">
//           Register
//         </a>
//         {menuState ? (
//           <svg
//             width="26"
//             height="26"
//             onClick={handleMenuClick}
//             xmlns="http://www.w3.org/2000/svg"
//             className={`menu-icon ${menuState ? "rotate" : ""}`}

//           >
//             <g fill="#151515">
//               <path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z" />
//               <path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z" />
//             </g>
//           </svg>
//         ) : (
//           <svg
//             onClick={handleMenuClick}
//             className={`menu-icon ${menuState ? "rotate" : ""}`}
//             width="32"
//             height="18"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <g fill="#151515">
//               <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
//             </g>
//           </svg>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;
import "./Header.css";
import image from "../assets/logo.svg";
import todo_img from "../assets/icon-todo.svg";
import calendar_img from "../assets/icon-calendar.svg";
import remainders_img from "../assets/icon-reminders.svg";
import planning_img from "../assets/icon-planning.svg";
import { useState } from "react";

const Header = () => {
  const [downClicked, setDownClicked] = useState(false);
  const [compDownClicked, setCompDownClicked] = useState(false);
  const [menuState, setMenuState] = useState(false);

  function handleFeaturesClick() {
    setDownClicked((prevState) => !prevState);
  }

  function handleCompanyClick() {
    setCompDownClicked((prevState) => !prevState);
  }
  function handleMenuClick() {
    setMenuState((prevState) => !prevState);
  }

  return (
    <div className="header">
      <div className="left">
        <img src={image} alt="logo-image" />
        <ul>
          <li>
            <button
              className={`arrow ${downClicked ? "changed" : ""}`}
              onClick={handleFeaturesClick}
            >
              Features
            </button>
            <ul
              className="down_bar"
              style={{ display: downClicked ? "flex" : "none" }}
            >
              <li>
                <img src={todo_img} alt="" /> Todo List
              </li>
              <li>
                <img src={calendar_img} alt="" /> Calendar
              </li>
              <li>
                <img src={remainders_img} alt="" /> Remainders
              </li>
              <li>
                <img src={planning_img} alt="" /> Planning
              </li>
            </ul>
          </li>
          <li>
            <button
              className={`arrow ${compDownClicked ? "changed" : ""}`}
              onClick={handleCompanyClick}
            >
              Company
            </button>
            <ul
              className="comp_down_bar"
              style={{ display: compDownClicked ? "flex" : "none" }}
            >
              <li>History</li>
              <li>Our Team</li>
              <li>Blog</li>
            </ul>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>
      </div>
      <div className="right">
        <a href="">Login</a>
        <a href="" className="reg">
          Register
        </a>
        {menuState ? (
          <svg
            width="26"
            height="26"
            onClick={handleMenuClick}
            xmlns="http://www.w3.org/2000/svg"
            className={`menu-icon ${menuState ? "rotate" : ""}`}
          >
            <g fill="#151515">
              <path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z" />
              <path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z" />
            </g>
          </svg>
        ) : (
          <svg
            onClick={handleMenuClick}
            className={`menu-icon ${menuState ? "rotate" : ""}`}
            width="32"
            height="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#151515">
              <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
            </g>
          </svg>
        )}
      </div>

      <div className={`side-menu ${menuState ? "open" : ""}`}>
        <div className="menu-content">
          <ul>
            <li>
              Features
              <ul>
                <li>
                  <img src={todo_img} alt="" /> Todo List
                </li>
                <li>
                  <img src={calendar_img} alt="" /> Calendar
                </li>
                <li>
                  <img src={remainders_img} alt="" /> Remainders
                </li>
                <li>
                  <img src={planning_img} alt="" /> Planning
                </li>
              </ul>
            </li>
            <li>
              Company
              <ul>
              <li>History</li>
              <li>Our Team</li>
              <li>Blog</li>
              </ul>
            </li>
            <li>Careers</li>
            <li>About</li>
          </ul>
          <div className="menu-footer">
            <button className="login-button">Login</button>
            <button className="register-button">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
