import React, { useEffect, useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import "./App.css";
import { handleSubmit } from "./utils/handleSubmite";
import axios from "axios";
import Users from "./pages/users";

const App = () => {
  const [apiResponse, setApiResponse] = useState();
  const [userData,setUserdata]=useState()
  const [file, setFile] = useState(null);
  const formRecord = [
    {
      type: "text",
      placeholder: "enter your name",
      label: "Name",
      inputfor: "name",
    },
    {
      type: "text",
      placeholder: "enter your email",
      label: "Email",
      inputfor: "email",
    },
    {
      type: "phone",
      placeholder: "enter your phone number",
      label: "Phone Number",
      inputfor: "phone",
    },
    // { type: "file", label: "upload your image",name:"image_uri", inputfor: "image_uri" },
  ];
  // console.log('apiResponse',apiResponse)
 useEffect(()=>{
  axios
  .get("http://localhost:4000")
  .then((res) => setApiResponse(res.data.data))
  .catch((error) => console.log(error.message));
 },[])

 const handleFileChange = (e) => {
  setFile(e.target.files[0]);
};

console.log(" ==== file", file)



 console.log('userData',userData)
  return (
    <div>
      <form enctype="multipart/form-data" onSubmit={(event) => handleSubmit(event,userData, file)} >
        {formRecord.map((value, index) => (
          <div key={index} className={`form-fields ${value.inputfor}`}>
            <label htmlFor="">{value?.label}</label>
            <Input data={value} setUserdata={setUserdata} />
          </div>
        ))}
        <p>Fileeeee ===== </p>
        <input type="file" onChange={handleFileChange} />
        <Button value='Submit'/>
      </form>
      <Users apiResponse={apiResponse} />
    </div>
  );
};

export default App;
