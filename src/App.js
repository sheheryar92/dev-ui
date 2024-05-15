


import SocialMedia from "./components/SocialMedia";
import FormComponent from "./components/FormComponent";
import "./App.css";
function App() {
  return (
    <div className="container">

      {/* LEFT SIDE */}
      <div className="left">
        <img src="/images/amico.png" alt="girl" className="image_g" />
      </div>
       {/* LEFT SIDE */}
      {/* RIGHT SIDE */}
      <div className="right">

        {/* FORM CONTAINER */}
      <div className="form_container">
          <img src="/images/logo.png" alt="logo" className="logo" />
          <img src="/images/amico.png" alt="girl" className="image_g_m" />
         <h1 className="Creat_account">Create Account</h1>
            <FormComponent />
            <h1 className="or">- OR -</h1>
            <SocialMedia />

        {/* ALREDY HAVE ACCOUNT */}
          <div className="alredy_have">
            <p>Already have an account?</p>{" "}
            <span className="social_hover">
            Login
            </span>
          </div>
          {/* ALREDY HAVE ACCOUNT */}
        </div>
         {/* FORM CONTAINER */}
      </div>
        {/* RIGHT SIDE */}
    </div>
  );
}

export default App;
