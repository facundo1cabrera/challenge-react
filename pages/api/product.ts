import { db } from '@/database';
import ProductModel from '@/models/Product';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = 
| { message: string }

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch( req.method ) {
        case 'GET':
            return getProducts( req, res )

        case 'POST':
            return postProducts( req, res)
        
        default:
            return res.status(400).json({
                message: 'Bad request'
            })
    }
}

const postProducts = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await db.connect();
        
        const product = new ProductModel( req.body );
        await product.save();
        await db.disconnect();

        res.status(201).json( product );
    } catch (error) {
        console.log(error);
        await db.disconnect();
        return res.status(400).json({ message: 'Review server logs' });
     }
}

const getProducts = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        await db.connect();
        // We destructure the req.query object to get the page and limit variables from url 
        const { page = 1, limit = 10, type } = req.query;

        const condition: { type?: string } = {};

        if (type === 'bike' || type === 'accesorie' || type === 'apparel') {
            condition['type'] = type;
        }

        const parsedLimit = parseInt(limit as string, 10);

        const products = await ProductModel.find(condition)
            .limit(parsedLimit)
            .skip((parseInt(page as string, 10) - 1) * parsedLimit)

        // Getting the numbers of products stored in database
        const count = await ProductModel.countDocuments();
        await db.disconnect();

        return res.status(200).json({
            products,
            totalPages: Math.ceil(count / parsedLimit),
            currentPage: page,
        });
    } catch (err) {
        console.log("Error")
        await db.disconnect();
    }
};