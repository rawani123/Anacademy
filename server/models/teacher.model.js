import mongoose,{model,Schema} from "mongoose";

const teacherSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    notifications:{
        type:Array,
        default:[]
    },
    studentEnrolled:[{
        type:Schema.Types.ObjectId,
        ref:"student"
    }]
},{timestamps:true});

const teacherModel = model("teacher",teacherSchema);

export default teacherModel;