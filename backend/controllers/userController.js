import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";
import userModel from "../models/userModel.js";

//create token
const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}

//login usuario
const loginUser = async (req,res) => {
    const {email, password} = req.body;
    try{
        const user = await userModel.findOne({email})

        if(!user){
            return res.json({success:false,message: "El usuario no existe"})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            return res.json({success:false,message: "Credenciales inválidas"})
        }

        const token = createToken(user._id)
        res.json({success:true,token})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//registrar usuario
const registerUser = async (req,res) => {
    const {name, email, password} = req.body;
    try{
        //check si usuario  existe
        const exists = await userModel.findOne({email})
        if(exists){
            return res.json({success:false,message: "El usuario ya existe"})
        }

        // validating email format & strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message: "Por favor, introduzca un correo electrónico válido"})
        }
        if(password.length<8){
            return res.json({success:false,message: "Por favor, introduzca una contraseña segura"})
        }

        // Hashing de la contraseña del usuario
        const salt = await bcrypt.genSalt(10); // Cuanto mayor sea el número de rondas, más tiempo tardará.
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({name, email, password: hashedPassword})
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token})

    } catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {loginUser, registerUser}