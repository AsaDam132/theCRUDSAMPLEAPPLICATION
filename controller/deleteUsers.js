import { deleteUser } from "../service/index.js";

const deleteAUser = async (req, res) => {
  try {
    const userId = req.params.id; // Assuming the user ID is passed in the request parameters
    const deletedUser = await deleteUserById(userId);
    
    return res.status(200).json({
      message: "User successfully deleted",
      status: "Success",
      deletedUser
    });
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({
      message: "An error occurred while deleting the user",
      status: "Error"
    });
  }
};

export default deleteAUser;
