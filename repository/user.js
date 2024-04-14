import {User} from "../model/index.js";

export const create = async (payload) => {
    return await User.create(payload)

}
export const getAllUsers = async () => {
    return await User.findAll()
};

export const getUserById = async (id) =>{
    return await User.findByPk(id)
}

export const updateUser = async(id, payload) => {
    return await User.update(payload,{where:{id}})
}

export const deleteUserById = async (id) => {
    const user = await User.destroy(id)
    
  };



