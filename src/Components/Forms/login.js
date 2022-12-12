import React,{ useState } from 'react'

function Login() {
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    const[error,setError]=useState(false);
    const formHandler=(event)=>
    {   
        event.preventDefault();
        if(UserName.length==0 && Password.length==0)
        {
            setError(true);
        }
        if(UserName && Password)
        {
        const loginObj={
            name:UserName,
            pwd:Password
        }
        console.log(loginObj);
        alert(JSON.stringify(loginObj));
      //  axios.post(url/obj)
       }  
    }
    return (
    <div>
    <h3>Login Page</h3>
    <form onSubmit={formHandler}>
    Username : <input type="text" value={UserName} placeholder="UserName" onChange={(e)=>setUserName(e.target.value)} ></input><br/>
    <div>
    {error && UserName.length ==0?
    <label style={{color:'red'}}>UserName is required</label> :""}
    </div>
    Password : <input type="password" value={Password} placeholder="password" onChange={(e)=>setPassword(e.target.value)} ></input><br/>
    <div>
     {error && Password.length ==0? <label style={{color:'red'}}>Password is required</label> :""}
    </div>
     <button>Login</button>
    </form>
    </div>
  )
}

export default Login