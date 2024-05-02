import mongoose,{Schema,model} from "mongoose";

const courseSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    teacher:{
        type:Schema.Types.ObjectId,
        ref:"teacher"
    },
    students:[{
        type:Schema.Types.ObjectId,
        ref:"student"
    }],
},{timestamps:true});


const courseModel = model("course",courseSchema);

export default courseModel;