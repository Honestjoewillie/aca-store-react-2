function Header(props) {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#" onClick={() => props.changView(0)}>
                Products
              </a>
            </li>
            <li>
              <a href="#" oncClick={() => props.changeView(1)}>
                Items In Cart ({props.cart.length})
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
ProductDetail.propTypes = {
  cart: PropTypes.array.isRequired,
  changeView: PropeTypes.number.isRequired
};
