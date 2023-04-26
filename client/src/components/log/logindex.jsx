import { useState } from "react";
import SingnUpForm from "./SingnUpForm";
import SignInForm from "./SignInForm";
import './logindex.css';

const Logindex =() => {
  const[signUpModal,setsignUpModal] = useState(true);
  const[signInModal,setsignInModal] = useState(false);


  const handleModals = (e) => {
    if (e.target.id === "register") {
      setsignInModal(false);
      setsignUpModal(true);
    }else if (e.target.id === "login"){
      setsignInModal(true);
      setsignUpModal(false);
    }
  }
    return(
        <div className="logindex">
          <ul>
            <li onClick={handleModals} id="register">S'nscrire</li>
            <li onClick={handleModals} id="login">Se connecter</li>
          </ul>
          {signUpModal && < SingnUpForm />}
          {signInModal && < SignInForm />}
        </div>
);
};

export default Logindex;