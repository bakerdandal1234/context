import {useContext } from "react";
import ThemeContext from "./context/Datacontext";
import { Link } from "react-router-dom";

const Page2 = () => {
  const {name,theme} = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <h2>Welcome to page2</h2>
      <h2>I'am {name}</h2>
      <Link to="/">Go to Page1</Link>

    </div>
  );
}

export default Page2;
