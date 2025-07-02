import { useState } from "react";
import { NavLink } from "react-router-dom";

function Register() {
    const[fullname, setFullName] = useState("");
    const[userName, setUserName] = useState("");
    const[password, setPassword] = useState("");
    

    const submitHandler = async (e) => {
        e.preventDefault();
        // send request from FE to BE
        const res = await fetch("http://localhost:5001/users/register", {
          method: 'POST',
          body: JSON.stringify({userName, password})
        });
        if(res.ok){
            const data = await res.json();
            alert(data.msg);
        }else{
            alert("Something is wrong!")
        }
    }
  return (
    <div className="text-center p-4">
        <h2 className="text-2xl">Register Page</h2>
        <p className="text-sm">Please enter your creadentials here!</p>
      <form className="flex flex-col items-center gap-y-2 sm:w-2/3 border mx-auto mt-12" onSubmit={submitHandler}>
       <input type="fullname" name="fullname" placeholder="Fullname" className="border border-gray-300 w-4/5" onChange={(e) => setFullName(e.target.value)} value={fullname}/>
        <input type="username" name="username" placeholder="Username" className="border border-gray-300 w-4/5" onChange={(e) => setUserName(e.target.value)} value={userName}/>
        <input type="password" name="password" placeholder="Password" className="border border-gray-300 w-4/5" onChange={(e) => setPassword(e.target.value)} value={password}/>
        <input type="submit" value="Register" className="border border-gray-300 w-4/5 bg-blue-400 text-white rounded"/>
      </form>
      <p className="text-sm w-46 mx-auto mt-6 "> if you don't have an account please
        <NavLink to="/register" className="text-blue-500"> register</NavLink> here!
      </p>
    </div>
  );
}

export default Register;
