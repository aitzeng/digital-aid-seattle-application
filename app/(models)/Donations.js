import mongoose, { Schema } from 'mongoose';

// Connect to database
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise

// Set up schema design
const donationsSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        type: String,
        quantity: Number,
        date: Date,
    }
)

// Create Schema if doesn't exist
const Donations = mongoose.models.Donations || mongoose.model("Donations", donationsSchema)
export default Donations