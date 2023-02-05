import mongoose from 'mongoose';

//Shopping order Schema
const DetailsSchema = new mongoose.Schema({
    coupon_codes: [{
      type: String
    }],
    total_amount: Number,
    total_discount: Number,
    total_orders: Number, 
});

const Details = mongoose.model("Details", DetailsSchema);

export default Details;