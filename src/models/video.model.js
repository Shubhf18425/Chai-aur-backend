import mongoose , {Schema} from "mongoose";

const VideoSchema = new Schema(
    {
        videoFile : {
            type : String,
            required : true,
        },

    },
    {
        timestamps : true;
    }
)