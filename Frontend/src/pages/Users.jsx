import React from "react";
import Button from "../components/Button";

const Users = ({ apiResponse }) => {
  console.log("apiResponse", apiResponse);
  return (
    <>
      {apiResponse?.map((value, index) => {
        return (
          <div id={value._id}>
            <img src={value.imagePath[0]} alt="img" />      
            <div>
              <div className="content">
                <div>{value.name}</div>
                <div>{value.email}</div>
                <div>{value.phone}</div>
              </div>
              <div>
                <Button value="edit"/>
                <Button value="delete" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Users;
