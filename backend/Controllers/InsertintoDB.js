
import User from '../models/User.js'

export const Insert = async (req, res)=>{
    console.log(req.body);
try{
    
    const {name , address , phone} = req.body;

    if(!name) return res.status(400).json("name is required");
    if(!address) return res.status(400).json("adress is required");
    if(!phone) return res.status(400).json("phone is required");

    const user = new User({name,address,phone});
    await user.save();
    res.json({success : true})

}catch(err){
    console.log(err)
}

}



export const GetData = async (req , res)=>{
    try{

       const getdata = await User.find({});
       res.send(getdata);

    }catch(err){
        console.log(err);
    }
}