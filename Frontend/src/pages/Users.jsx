import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import axios from "axios";

const Users = ({ apiResponse, setReload, id, setId, userData, setUserdata}) => {
  const handleDelete = (e, id) => {
    console.log("________________", id);
    setReload(true);
    axios
      .delete(`http://localhost:4000/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  const handleEdit = (id) => {
    // console.log('--------------',typeof id)
    setId(id)
    // console.log('__________id',id)
    apiResponse.map((value,index)=>{
      if(value._id===id){
        setUserdata({name:`${value.name}`,email:`${value.email}`,phone:`${value.phone}`})
        // console.log(userData)
      }
  })
  };

  return (
    <>
      {apiResponse?.map((value, index) => {
        return (
          <div id={value._id}
            className="border-2 w-[400px] m-auto flex flex-col gap-2 p-5 my-1"
          >
            <img src={value.imagePath?[0]:null} alt="img" />
            <div>
              <div className="content">
                <div>{value?.name}</div>
                <div>{value?.email}</div>
                <div>{value?.phone}</div>
              </div>
              <div>
                <button type="submit" onClick={() => handleEdit(value._id)}
                  className="bg-red-600 py-1 px-3 text-white rounded-md" 
                  >
                  edit
                </button>
                <button
                  type="submit"
                  onClick={(e) => handleDelete(e, value._id)}
                  className="bg-green-600 py-1 px-3 text-white mx-2 rounded-md" 
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Users;
