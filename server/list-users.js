const mongoose = require('mongoose');
require('dotenv').config();

const UserSchema = new mongoose.Schema({}, { strict: false });
const User = mongoose.model('User', UserSchema);

async function listUsers() {
    try {
        await mongoose.connect('mongodb://localhost:27017/zenflow');
        const users = await User.find({});
        console.log("All Users in DB:");
        users.forEach(u => {
            console.log(`- ${u.name} (${u.email}) | Role: ${u.role} | Active: ${u.subscription?.isActive}`);
        });
        await mongoose.disconnect();
    } catch (err) {
        console.error(err);
    }
}

listUsers();
