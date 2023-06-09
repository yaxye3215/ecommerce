import Users from "../models/usermodel.js";
import generaltoen from "../utils/generaltoken.js";


export const register = async(req, res)=>{
  try {
    const {name, email, password, phone, address} =  req.body;

    const userExists =await Users.findOne({email})
    if (userExists) {
        res.status(400).json({message : "User already exists"})
        
    }else{
        

    const user= await Users.create({
        name, email, password, address, phone,
    })
    if (user) {
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            password:user.password,
            phone:user.phone,
            address:user.address,
            token:generaltoen(user._id),
            
         
        })
        
    } else {
        res.status(401).json({message : "Invalid User data"})
        
    }
    }
    
  } catch (error) {
    res.status(500).json({error: error.Message})

    
  }

}

export const login = async(req, res)=>{
    const {email , password} =  req.body;

    const user = await Users.findOne({email})
    
    if (email && password == user.password) {
        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            password:user.password,
            phone:user.phone,
            address:user.address,
            isAdmin:user.isAdmin,
            token:generaltoen(user._id),
         
        })
        
    } else {
        res.status(404).json({message : "Invalid Email or Password"})
        
    }
}

 export const getuserprofile = async( req, res)=>{

    const { token, id } = req.body;
    const user = await Users.findById(id);
    if(user){
        res.status(200).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            password:user.password,
            phone:user.phone,
            address:user.address,
            isAdmin:user.isAdmin,
            token
         
        })

    } else {
        res.status(404).json({message : "user not found"})
        
    }

}

