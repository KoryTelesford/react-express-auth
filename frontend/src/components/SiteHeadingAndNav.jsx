import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import './Navbar.css'

export default function SiteHeadingAndNav({setSearchTerm}) {
  const { currentUser } = useContext(CurrentUserContext);

  const handleChange = e => {
    e.preventDefault();
    setSearchTerm(e.target.elements.searchWords.value);
    console.log("submit", e.target.elements.searchWords.value)
  };

  return <header>
    <a id='logo' href='/'>Anime List</a>
    <nav>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/users' end={true}>Users</NavLink></li>
     
        {
          currentUser
            ? <li><NavLink to={`/users/${currentUser.id}`}>{currentUser.username}</NavLink></li>
            : <>
              <li><NavLink to='/login'>Login</NavLink></li>
              <li><NavLink to='/sign-up'>Sign Up</NavLink></li>
            </>
        }
        <form onSubmit={handleChange}>
          <input 
            name="searchWords"  
            className="search" 
            type="search" 
            placeholder="Search.."
          />
        </form>
      </ul>
    </nav>
  </header>;
}
