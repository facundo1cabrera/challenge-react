import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ItemPreselected from './ItemPreselected';
import LeadForm from './LeadForm';
import LeadObtained from './LeadObtained';
import { IProduct } from '@/interfaces';

const ItemSelected = ({id}: {id: string}) => {
    const [item, setItem] = useState<IProduct | null>(null);
    const [state, setState] = useState('itemPreselected');
    function handlePurchase(){
        setState('leadForm');
    }

    function handleGetItemQuotation(event: React.FormEvent<HTMLFormElement>) {

        console.log(event.target);
        axios.post("http://localhost:3000/api/lead", {
            name: "Facundo",
            lastName: "Smith",
            email: "facucabrera@gmail.com",
            phone: "111111"
        })

        event.preventDefault();
        setState('leadObtained')
    }

    useEffect(() => {
        const fetchItem = async () => {
            const response = await axios.get<{products: IProduct[]}>(`http://localhost:3000/api/product?_id=${id}`);
            setItem(response.data.products[0])
        }
        fetchItem();
    }, [])

    if (!item) {
        // TODO: Add loading state
        return (<></>);
    }

    return (
        <>
            {
                state === 'itemPreselected' 
                &&
                <ItemPreselected 
                    handleSumbit={handlePurchase} 
                    price={item.price} 
                    title={item.title} 
                    description={item.description}
                    imageUrl={item.imageUrl}
                />
            }
            {
                state === 'leadForm'
                &&
                <LeadForm 
                    handleSumbit={handleGetItemQuotation} 
                    price={item.price} 
                    title={item.title}
                />
            }
            {
                state === 'leadObtained'
                && 
                <LeadObtained/>
            }
        </>
    )
}

export default ItemSelected;