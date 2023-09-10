import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    full_name:{
        type: String,
        unique:true,
        trim: true,
        minlength: 3,
        required:[ true, 'Full Name is required']
    },
   
},
{
    timestamps: true,
    toJSON: { virtuals: true }
  }
);

const User = mongoose.model('User', userSchema);

export default User;
