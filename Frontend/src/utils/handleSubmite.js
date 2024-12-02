import axios from "axios";

export const handleSubmit = async (
  event,
  userData,
  file,
  setReload,
  id,
  setUserdata
) => {
  console.log("!!!!!!!!!!!!!!!", id);
  event.preventDefault();
  // console.log("----------id",id)
  // console.log('+++++++++++++', userData);

  const formData = new FormData();
  formData.append("name", userData.name);
  formData.append("email", userData.email);
  formData.append("phone", userData.phone);
  formData.append("image_uri", file);

  console.log("______________", userData);
  // Reset userData state
  setUserdata({
    name: "",
    email: "",
    phone: "",
  });

  try {
    console.log("***********************id", id);
    if (id) {
      setReload(true);
      console.log("Editing user with ID:", id, "userData", userData);
      await axios.put(`http://localhost:4000/${id}`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      console.log("Adding new user");
      setReload(true);
      await axios.post("http://localhost:4000/add-users", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    }

    // console.log("Form data submitted successfully");
  } catch (error) {
    console.log("Error in submission", error.message);
  } finally {
    setReload(false); // Optionally, reset loading state
  }
};
