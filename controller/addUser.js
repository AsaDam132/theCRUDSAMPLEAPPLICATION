import {createUser} from "../service/index.js"

const addUser = async (req, res) => {
    try {
        const data = await createUser(req.body)
        return res.status(200).json(data)
    } catch (error) {
        console.log("err: ", error)
    }
}
export default addUser