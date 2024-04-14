import { getUsers } from "../service/index.js";

const viewUsers = async (req, res) => {
    try {
      const allUsers = await getUsers();
      return res.status(200).json(allUsers);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

export default viewUsers