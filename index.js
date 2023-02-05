import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cartRoutes from './routes/cart.js';
import orderRoutes from './routes/order.js';
import couponRoutes from './routes/coupon.js';
import checkoutRoutes from './routes/checkout.js';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('App is running..');
});
app.use('/cart', cartRoutes);
app.use('/order', orderRoutes);
app.use('/coupon', couponRoutes);
app.use('/checkout', checkoutRoutes);

const CONNECTION_URL = "mongodb+srv://isahilsachdev2002:sahilsachdev1029@cluster0.rnkg0g6.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5001;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));