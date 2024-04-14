import {create} from "../repository/index.js";
import {getAllUsers} from "../repository/index.js";
import {updateUser} from "../repository/index.js";
import {getUserById} from "../repository/index.js";
import {deleteUserById} from "../repository/index.js";


export const createUser = async(payload)=>{
    const user = await create(payload)
    return {
        message:"You've successfully registered",
        status:"Success",
        details:user
    }
}

export const getUsers = async()=>{
  const allUsers = await getAllUsers(); 
    return {
            message:"You've successfully fetched all Users",
            status:"Success",
            details:allUsers
    }; 
};

export const updateTheUser = async(id,payload) => {
        try {
            const user = await getUserById(id)
            if (!user) {
                return {
                    message: 'User not found',
                    status: 'Failed'
                };
            }
            await updateUser(id, payload);
            //Go into the Model/Db to fetch the updated data for us
            const updatedData = await getUserById(id);
            return {
                message:"You've successfully updated the User",
                status:'Success',
                details:updatedData
            };

        } catch (error) {

            return {
                  message:'An error occurred while updating the User',
                  status:'Failed',
                  details:error.message
            };
          }
        };
        
export const deleteUser = async(id)=>{
const user = await getUserById(id);
            if (!user) {
                throw new Error('User not found');
         }
         await deleteUserById(id)
            return {
              message: "User successfully deleted",
              status: "Success",
              deletedUser: user
            };
          };
    
  