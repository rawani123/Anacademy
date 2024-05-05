import teacherModel from "../models/teacher.model.js";
import bcrypt from "bcryptjs";

const teacherSignup = async(req,res)=>{
    try{
        const {name,email,password,phone,address} = req.body;
        if(!name || !email || !password || !phone || !address){
            return res.status(400).send({message:"All fields are required",success:false})
        }
        console.log(email);
        const existingTeacher = await teacherModel.findOne({email});
        if(existingTeacher){
            return res.status(400).send({message:"Teacher already exists",success:false});
        }
        const hashedPassword = await bcrypt.hash(password,10);

        const verificationToken= generateverificationToken(email);
        console.log(verificationToken)
    

        await sendVerificationEmail(email.toLowerCase(),verificationToken , name);
        const teacher = await teacherModel.create({
            name,
            email,
            password:hashedPassword,
            phone,
            address
        });
        if(teacher){
            return res.status(201).send({message:"Teacher created successfully",success:true});
        }
    }catch(error){
        console.log(error)
        return res.status(500).send({message:"Error in teacher signup",success:false,error:error.message});
    }
}

export {teacherSignup};

