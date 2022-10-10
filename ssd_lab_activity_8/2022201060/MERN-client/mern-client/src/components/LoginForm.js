import "../common.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
  'Student', 'TA'
];
const defaultOption = options[0];
const BACKEND_URI = "http://localhost:3000/api/";

// functional component
function LoginForm(props) {
    const [roll, setRoll] = useState("");
    const [password, setPassword] = useState("");   
    const [role, setRole] = useState(""); 
    const navigate = useNavigate();

    const navigateToProfile = () => {
        navigate('/profile');
    }

    return (
    <div className="center-div">
        <h1 className='text-center'>Login</h1>
        <form className='form-group'>
            <label className='m-2 form-label'>roll Id : </label>
            <br/>
            <input className='m-2 form-control' type="text" name="roll" value={roll} onChange={(e) => setRoll(e.target.value)}/>
            <br/>roll
            <label className='m-2 form-label'>Password : </label>
            <br/>
            <input className='m-2 form-control' type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            <label className='m-2 form-label'>role : </label>
            <br/> 
           <select className='m-2 form-control' name="role" id="role" onChange={(e) => setRole(e.target.value)}>
              <option value="Student">Student</option>
               <option value="TA">TA</option>
         </select> 
         <br/>   
        </form>
        <button className='btn btn-primary position-relative start-50 translate-middle-x' onClick={async (e) =>  {
                // send fetch (POST) request to server
                const requestOptions = {
                    credentials : 'include',
                    method : 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body : JSON.stringify({ roll : roll, password : password,role : role})
                };

                var res = await fetch(BACKEND_URI + "login", requestOptions);
                alert((await res.json())["msg"]);
                setRoll("");
                setPassword("");
                setRole("");
                if(res.status == 200) {
                    sessionStorage.setItem("curr_roll", roll);
                    navigateToProfile();
                }
            }}>Login</button>
            <br/>
            <p className='m-4'>Do not have an account ? <Link to='/signup'> Sign Up Here</Link> </p> 
    </div>);
}

export default LoginForm;