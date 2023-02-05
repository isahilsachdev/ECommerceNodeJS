import mongoose from 'mongoose';

//Shopping coupon Schema
const CouponSchema = new mongoose.Schema({
    coupon_code: String,
});

const Coupon = mongoose.model("Coupon", CouponSchema);

export default Coupon;