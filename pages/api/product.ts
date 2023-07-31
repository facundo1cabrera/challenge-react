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
        const { page = 1, limit = 10, type, _id } = req.query;

        const condition: { type?: string, _id?: string } = {};

        if (type === 'bike' || type === 'accessorie' || type === 'apparel') {
            condition['type'] = type;
        }

        if (_id != null || _id != undefined) {
            condition['_id'] = _id as string;
        }

        const parsedLimit = parseInt(limit as string, 10);
        const parsedPage = parseInt(page as string, 10) - 1;

        const products = await ProductModel.find(condition)
            .limit(parsedLimit)
            .skip(parsedPage * parsedLimit)

        const count = await ProductModel.countDocuments(condition);
        await db.disconnect();

        return res.status(200).json({
            products,
            totalPages: Math.ceil(count / parsedLimit),
            currentPage: parsedPage,
            totalItems: count
        });
    } catch (err) {
        console.log("Error")
        await db.disconnect();
    }
};