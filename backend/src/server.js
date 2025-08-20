import express from 'express';
import dotenv from 'dotenv';

import { connectDB } from './db.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/products', productRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server connected successfully at http://localhost:${PORT}`);
    });
});


