import mongoose,{model,Schema} from "mongoose";

const studentSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    phone:{
        type:String
    },
    address:{
        type:String
    },
    password:{
        type:String,
        required:true
    },
    notifications:{
        type:Array,
        default:[]
    },
    courses:[{
        type:Schema.Types.ObjectId,
        ref:"course"
    }],
    enrolledToTeacher:[{
        type:Schema.Types.ObjectId,
        ref:"teacher" 
    }],
    isVerified:{
        type:Boolean,
        default:false
    },
    verificationToken:{
        type:String
    }
},{timestamps:true});

const studentModel = model("student",studentSchema);

export default studentModel;