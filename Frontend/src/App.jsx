import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Users from "./pages/users";
import AddUser from "./pages/AddUser";

const App = () => {
  const [apiResponse, setApiResponse] = useState();
  const [userData, setUserdata] = useState();
  const [reload,setReload]=useState(false)
  const [showform,setShowform]=useState(true)
  const [id,setId]=useState("")
 
  useEffect(() => {
    setReload(false)
    axios
      .get("http://localhost:4000")
      .then((res) => setApiResponse(res.data.data))
      .catch((error) => console.log(error.message));
  },[reload]);
 
  return (
    <div>
      <AddUser setReload={setReload} setUserdata={setUserdata} userData={userData} showform={showform} setShowform={setShowform} id={id} setId={setId}/>
      <Users apiResponse={apiResponse} setReload={setReload} id={id} setId={setId} userData={userData} setUserdata={setUserdata} />
    </div>
  );
};

export default App;
