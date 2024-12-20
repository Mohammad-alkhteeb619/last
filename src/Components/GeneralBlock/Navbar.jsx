import { Link, NavLink } from "react-router-dom";
// import logo from "/public/IMG_9452.png";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#1F316F" }}>
      <div className="container-fluid">
        {/* Logo */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" width={50} className="me-2" />
          <span className="fs-5 fw-bold">Path2Health</span>
        </NavLink>

        {/* Toggler for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            {/* Home */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>

            {/* Dropdowns */}
            {[ 
              { name: "Doctor", links: [ { label: "Display Doctors", path: "/doctors" }, { label: "Add Doctor", path: "/create-doctor" } ] },
              { name: "Drugs", links: [ { label: "Drug Warehouse", path: "/drugs" }, { label: "Warehouse Orders", path: "/ReceiverDrug" }, { label: "Order Drugs", path: "/order-drugs" } ] },
              { name: "Nurse", links: [ { label: "Display Nurses", path: "/nurses" }, { label: "Add Nurse", path: "/create-nurse" }] },
              { name: "Patient", links: [ { label: "Display Patients", path: "/patients" }, { label: "Add Patient", path: "/create-patient" } ] },
              { name: "Management Staff", links: [ { label: "Display Management Staff", path: "/staff-card" }, { label: "Add Management Staff", path: "/add-staff" } ] },
              { name: "Pharmacist", links: [ { label: "Display Pharmacists", path: "/Pharmacist-card" }, { label: "Add Pharmacist", path: "/add-pharmacist" } ] }
            ].map((menu, index) => (
              <li key={index} className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  id={`${menu.name}Dropdown`}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {menu.name}
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby={`${menu.name}Dropdown`}>
                  {menu.links.map((link, idx) => (
                    <li key={idx}>
                      <NavLink className="dropdown-item" to={link.path}>
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          {/* Profile and login section */}
          <div className="d-flex align-items-center">
            <img
              src="https://via.placeholder.com/40" // Replace with actual image URL
              alt="Profile"
              className="rounded-circle me-2"
              style={{ width: "40px", height: "40px" }}
            />
            <span className="text-light me-3">John Doe</span>
            <NavLink className="btn btn-outline-light btn-sm" to="/login">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
