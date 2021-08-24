import "./style.css";
import { useState } from "react";
function App() {
  const [users, setUsers] = useState();
  const [isLoading,setLoading]= useState(false);
  const loadUsers = async () => {
    setLoading(true);
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    setUsers(data.data);
    setTimeout( () => {
      setLoading(false);
    },1500)
  }
  return (
    <>
      <header className="app">
        <h2>TheTechClass</h2>
        <input type="checkbox" id="toggle" class="toggle" name="toggle"/>
        <label for= "toggle">
          <div className="btnn" onClick={loadUsers} >
            Get Users
          </div>        
          </label>
          <div id="container"></div>
        </header>
      {isLoading ? "" : ( 
        <div>
        <div className="card">
          {users?.map((pos, i) => {
            return (
              <div className="details" key={i}>
              <br/><br/>
                <img src={pos.avatar}/>
                <div>
                <br/>
                  <h3>
                    {pos.first_name} {pos.last_name}
                  </h3>
                  <br/><br/>
                  <p>{pos.email}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      )}
    </>
  )
}
export default App;