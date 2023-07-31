import { useEffect, useState } from 'react';
import NextLink from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import Card from "../presentational/Card";
import Link from 'next/link';
import axios from 'axios';
import { IProduct } from '@/interfaces';

const ListCards = () => {
    const router = useRouter();

    const { type = '' } = router.query;

    const searchType = getSearchType(type as string);

    const [products, setProducts] = useState<IProduct[] | []>([]);

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get<{products: IProduct[]}>(
                `http://localhost:3000/api/product?type=${searchType}`
            );
            setProducts(response.data.products)
        }
        getData();
    }, [type])

    return (
        <>
            {
                products.map(x => (
                    <NextLink href={`products/${x._id}`} passHref prefetch={false} key={x._id}>
                        <Card
                            imageUrl={x.imageUrl}
                            title={x.title}
                            price={x.price}
                        />
                    </NextLink>
                ))
            }
        </>
    );
};

const getSearchType = (type: string): string => {
    const posibleTypes = ['bike', 'accessorie', 'apparel'];
    const searchType = posibleTypes.includes(type as string) ? type : 'bike';
    return searchType as string;
}

export default ListCards;
