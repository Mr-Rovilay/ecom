
import "./Css/loginSignup.css"
const LoginSignup = () => {
  return (
    <div className="loginSignup">
      <div className="loginSignup-container">
        <h1>Sign up</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
        </div>
        <button>Continue</button>
        <p className="loginSignup-login">Already have an account? <span>Login</span></p>
        <div className="loginSignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing you agree to the terms if use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup