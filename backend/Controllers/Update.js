import User from '../models/User.js'

export const UpdateUSer = async(req , res)=>{
    
    console.log(req.body);
    const { name , address , phone } = req.body ;
        try{
        const userId = req.params.id;
        console.log(userId);
        

        const updateuser = await User.findByIdAndUpdate(userId , { name , address , phone } , {new:true});
        res.json(updateuser);

    }catch(err){
        console.log(err)
    }
}