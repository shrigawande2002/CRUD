
import User from '../models/User.js'

export const DeleteUser = async(req , res)=>{
    try{
        const userId = req.params.id;
        await User.findByIdAndDelete(userId)
        res.status(200).send({ message: 'User deleted successfully' });
    }catch(err){
        console.log(err)
    }
}