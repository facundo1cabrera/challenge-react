import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
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

    function handleSubmitLeadForm(event: any) {
        axios.post("http://localhost:3000/api/lead", {
            name: event.target.name.value,
            lastName: event.target.surname.value,
            email: event.target.email.value,
            phone: event.target.phone.value
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
                    handleSumbit={handleSubmitLeadForm} 
                    price={item.price} 
                    title={item.title}
                    imageUrl={item.imageUrl}
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