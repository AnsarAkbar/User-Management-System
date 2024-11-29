import axios from "axios";

export const handleSubmit = async (event, userData, file) => {
  event.preventDefault();

  // Create a new FormData object
  const formData = new FormData();
  formData.append("name", userData.name);      // text field
  formData.append("email", userData.email);    // text field
  formData.append("phone", userData.phone);    // text field
  formData.append("image_uri", file); // Ensure this is the file object
//   console.log(" ==== userData", userData)
  try {
    // POST request with form data
    await axios.post("http://localhost:4000/add-users", formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
          },
    });
  } catch (error) {
    console.log(error.message);
  }
};
