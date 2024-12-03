import React from "react";
import axios from "axios";

const Users = ({ apiResponse, setReload, id, setId, userData, setUserdata}) => {
  const handleDelete = (e, id) => {
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
    setId(id)
    apiResponse.map((value,index)=>{
      if(value._id===id){
        setUserdata({name:`${value.name}`,email:`${value.email}`,phone:`${value.phone}`})
      }
  })
  };

  return (
    <>
      {apiResponse?.map((value, index) => {
        // {console.log("=============",value?.imagePath[0])}
        return (
          <div key={value._id}
            className="border-2 w-[400px] m-auto flex gap-2 p-5 my-1 justify-between"
          >
            {/* <img src={`http://localhost:4000/public/temp/${value?.imagePath[0]}`} alt="img" /> */}
            <img className="w-[35%] max-h-28 rounded-full" src={`http://localhost:4000/file/${value?.imagePath}`} alt="img" />
            <div className="w-[60%]">
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
