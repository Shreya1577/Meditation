const mongoose = require('mongoose');
require('dotenv').config();

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    role: String
}, { strict: false });

const User = mongoose.model('User', UserSchema);

async function promoteAdmin() {
    try {
        await mongoose.connect('mongodb://localhost:27017/zenflow');
        console.log("Connected to DB");
        
        // Find user by name and update role
        const user = await User.findOneAndUpdate(
            { name: "shreya dey" }, 
            { role: "admin" },
            { new: true }
        );
        
        if (user) {
            console.log(`Success! User ${user.name} (${user.email}) is now an Admin.`);
        } else {
            console.log("User 'shreya dey' not found. Please make sure you are registered with this exact name.");
        }
        
        await mongoose.disconnect();
    } catch (err) {
        console.error("Error:", err);
    }
}

promoteAdmin();
