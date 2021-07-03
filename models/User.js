import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name'],
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, 'Please provide your email'],
  },
  photo: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    // select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    // validate: {
    //   validator: function (el) {
    //     return el === this.password;
    //   },
    //   message: 'Password are not the same',
    // },
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
