import React, { useState } from "react";
import Input from "../components/Input";
import { handleSubmit } from "../utils/handleSubmite";
import Button from "../components/Button";

const AddUser = ({ setReload,setUserdata,userData,showform,setShowform, id, setId  }) => {
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
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

 return (
    <div>
      <form
        encType="multipart/form-data"
        onSubmit={(event) =>handleSubmit(event, userData,setUserdata, file, setReload, id, setId )}
        className="border-2 w-[400px] m-auto flex flex-col gap-2 p-5 "
      >
       
       
       {showform ? (
          <>
            {formRecord.map((value, index) => (
              <div key={index} className={"flex flex-col"} >
                <label htmlFor={value.inputfor} className="text-white text-sm">{value?.label}</label>
                <Input data={value} setUserdata={setUserdata} userData={userData} />
              </div>
            ))}
            <input type="file" onChange={handleFileChange}  className="text-sm text-white border-none rounded-sm focus-visible:outline-none"/>
          </>
        ) : null}

        
        <Button value={!id?"Add User":"Update User"} setShowform={setShowform}
        
         />
      </form>
    </div>
  );
};

export default AddUser;
