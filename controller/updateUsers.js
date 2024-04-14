
import { updateTheUser} from "../service/index.js";


const representUsers = async (req, res) => {
    try {
      const {id} = req.params; // Retrieve userId from request parameters
      // Get user by id, and update their data
      const user = await updateTheUser(id,req.body);

      return res.status(200).json(user);
      
    } catch (error) {
      console.log("Error: ", error);
      return res.status(500).json({ error: "Failed to retrieve users" }); // Send a server error response
    }
  };
  
  export default representUsers;