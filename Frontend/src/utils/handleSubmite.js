import axios from "axios";

export const handleSubmit = async (
  event,
  userData,
  setUserdata,
  file,setFile,
  setReload,
  id,
  setId
) => {
  event.preventDefault();

  const formData = new FormData();
  formData.append("name", userData.name);
  formData.append("email", userData.email);
  formData.append("phone", userData.phone);
  formData.append("image_uri", file);

  setUserdata({
    name: "",
    email: "",
    phone: "",
  });
  setFile(null)
  setReload(true);

  // Reset userData state
  try {
    if (id) {
      // setReload(true);
      // console.log("Editing user with ID:", id, "userData", userData);
      await axios.put(`http://localhost:4000/${id}`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setId(null);
    } else {
      await axios.post("http://localhost:4000/add-users", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Adding new user");
    }
  } catch (error) {
    console.log("Error in submission", error.message);
  } finally {
    setReload(false); // Optionally, reset loading state
  }
};
