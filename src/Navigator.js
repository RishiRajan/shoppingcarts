let Navigationbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container px-4 px-lg-5">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
          <button className="btn btn-outline-dark">
            Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill">
              {props.cart}
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navigationbar;
