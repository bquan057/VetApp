
import React from "react";
import { useNavigate} from "react-router-dom";


const Login = ({forgotPassword}) => {

    let navigate = useNavigate();
    function handleClick() {
        navigate('/search');
    };

    return (
        // <div>
        <div className="column is-one-fifth is-centered ml-5">
            <div class="card">
               
                <div class="card-content login">
                <h2 className = "title is-3 has-text-primary-dark ml-5">Sign In</h2>

            <div className="field ml-5">
                <p class = "control has-iconsleft">
                <label className = "has-text-primary-dark">Email address: </label>
                <input type="email" className="form-control " placeholder="Enter email" />
                {/* <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span> */}
                </p>
            </div>

            <div className="form-group ml-5">
                <label className = "has-text-primary-dark">Password: </label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group is-centered ml-5">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label has-text-primary-dark" htmlFor="customCheck1"> Remember me</label>
                </div>
            </div>
            <button onClick = {handleClick} className = "button mx-6 is-primary is-light is-centered">Submit</button>
            
            <p className="forgot-password text-right ml-5">
                <a onClick={forgotPassword}> Forgot password?</a>
            </p>
            </div>
        </div>
        </div>

    );
}
 
export default Login;