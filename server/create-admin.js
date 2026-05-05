const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'student' }
}, { strict: false });

const User = mongoose.model('User', UserSchema);

async function createAdmin() {
    try {
        await mongoose.connect('mongodb://localhost:27017/zenflow');
        console.log("Connected to DB");
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash("A4X167sr@23one", salt);
        
        // Use findOneAndUpdate with upsert to avoid duplicate key errors if run multiple times
        const user = await User.findOneAndUpdate(
            { email: "Abhinavbharti827@gmail.com" }, 
            { 
                name: "Abhinav Bharti",
                password: hashedPassword,
                role: "admin"
            },
            { new: true, upsert: true }
        );
        
        console.log(`Success! Admin user created/updated: ${user.name} (${user.email})`);
        
        await mongoose.disconnect();
    } catch (err) {
        console.error("Error:", err);
    }
}

createAdmin();
