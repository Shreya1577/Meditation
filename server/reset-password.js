const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const UserSchema = new mongoose.Schema({
    name: String,
    password: { type: String, required: true },
    role: String
}, { strict: false });

const User = mongoose.model('User', UserSchema);

async function resetPassword() {
    try {
        await mongoose.connect('mongodb://localhost:27017/zenflow');
        console.log("Connected to DB");
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash("aura123", salt);
        
        const user = await User.findOneAndUpdate(
            { name: "shreya dey" }, 
            { password: hashedPassword },
            { new: true }
        );
        
        if (user) {
            console.log(`Success! Password for ${user.name} has been reset to: aura123`);
        } else {
            console.log("User 'shreya dey' not found.");
        }
        
        await mongoose.disconnect();
    } catch (err) {
        console.error("Error:", err);
    }
}

resetPassword();
