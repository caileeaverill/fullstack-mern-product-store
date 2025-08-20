import express from 'express';
import dotenv from 'dotenv';

import Product from './models/Product.js';
import { connectDB } from './db.js';
import productRoutes from './routes/productRoutes.js';


dotenv.config();

const app = express();

app.use(express.json());
app.use('/api/products', productRoutes);

connectDB().then(() => {
    app.listen(5000, () => {
        console.log('Server connected successfully at http://localhost:5000');
    });
});


