
import React from "react";
import { useNavigate} from "react-router-dom";


const Login = () => {

    let navigate = useNavigate();
    function handleClick() {
        navigate('/search');
    };

    return (
        // <div>
        <div className="column is-one-fifth is-centered">
            <div class="card">
                <div class="card-content login ">
                    <h2 className = "title is-2 has-text-primary-dark">Sign In</h2>

            <div className="form-group">
                <label>Email address: </label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password: </label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group is-centered">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1"> Remember me</label>
                </div>
            </div>
            <button onClick = {handleClick} className = "button mx-6 is-primary is-light is-centered">Submit</button>
            <p className="forgot-password text-right">
                <a href="#"> Forgot password?</a>
            </p>
            </div>
        </div>
        </div>

    );
}
 
export default Login;