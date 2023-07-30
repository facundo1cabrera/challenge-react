import type { NextApiRequest, NextApiResponse } from 'next'
import { ILead } from '@/interfaces'
import { db } from '@/database'
import LeadModel from '@/models/Lead'


type Data = 
| { message: string }
| ILead

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch( req.method ) {
        case 'POST':
            return saveLead( req, res )

        default:
            return res.status(400).json({
                message: 'Bad request'
            })
    }
}

const saveLead = async(req: NextApiRequest, res: NextApiResponse<Data>) => {
    
    const { email, lastName, name, phone } = req.body as ILead;
    
    try {
        await db.connect();
        const leadInDB = await LeadModel.findOne({ email: email });
        if ( leadInDB ) {
            await db.disconnect();
            return res.status(400).json({ message: `A lead with email:${email} already exists.` });
        }
        
        const lead = new LeadModel( req.body );
        await lead.save();
        await db.disconnect();

        res.status(201).json( lead );


    } catch (error) {
        console.log(error);
        await db.disconnect();
        return res.status(400).json({ message: 'Review server logs' });
     }

}