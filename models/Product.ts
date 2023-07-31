import { IProduct } from '@/interfaces';
import mongoose, { Model, Schema } from 'mongoose';


const productSchema = new Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
    price: { type: Number, required: true},
    type: { 
        type: String,
        enum: {
            values: ['bike', 'accessorie', 'apparel']
        },
        required: true
    },
    imageUrl: { type: String, required: true}
});

const ProductModel: Model<IProduct> = mongoose.models.Product || mongoose.model('Product', productSchema);

export default ProductModel;