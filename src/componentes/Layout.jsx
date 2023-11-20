import { Link, Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/pelicula">Movie</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet></Outlet>
    </div>
  )
}
