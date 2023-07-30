import { useEffect, useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import Card from "../presentational/Card";
import Link from 'next/link';
import axios from 'axios';
import { IProduct } from '@/interfaces';

const ListCards = () => {
    // fetch products
    const initialProducts = [
        {
            _id: 1,
            imageUrl: "byke1.png",
            title: "Fat Bob 532",
            price: 12321
        },
        {
            _id: 2,
            imageUrl: "byke2.png",
            title: "Fat Bob 533",
            price: 12321
        },
        {
            _id: 3,
            imageUrl: "byke3.png",
            title: "Fat Bob 534",
            price: 12321
        },
        {
            _id: 4,
            imageUrl: "byke4.png",
            title: "Fat Bob 535",
            price: 12321
        },
        {
            _id: 5,
            imageUrl: "byke1.png",
            title: "Fat Bob 536",
            price: 12321
        }
    ];

    const router = useRouter();

    const { type } = router.query;

    const [products, setProducts] = useState(initialProducts);

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(
                `http://localhost:3000/api/product?type=byke`
            );
            setProducts(response.data.products)
        }
        getData();
    }, [])

    return (
        <>
            {
                products.map(x => (
                    <NextLink href={"products/slug"} passHref prefetch={false} key={x._id}>
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

export default ListCards;
