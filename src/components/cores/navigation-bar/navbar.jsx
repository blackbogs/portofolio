import "../navigation-bar/navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div class="navbar fixed shadow-md">

    
      <ul class='justify-center'>
        <Link to="/">
          <li class="hover:text-white">Home</li>
        </Link>
        <Link to="/about">
          <li class="hover:text-white">About</li>
        </Link>
        <Link to="/portofolio">
          <li class="hover:text-white">Portofolio</li>
        </Link>
        <Link to="/contact">
          <li class="hover:text-white">Contact</li>
        </Link>
      </ul>
   

    </div>
  );
}
