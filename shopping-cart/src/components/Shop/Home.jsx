import Product from './Product';
import Header from './Header';
import ShowModal from './Modal';
import { useDisclosure } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

import mini from '../../assets/air_mini.png'
import pro from '../../assets/air_pro.png'

const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [product, setProduct] = useState({});

    const handleProduct = (e) => {
        let productData = {}

        if (e.currentTarget.id === 'air-mini') {
            productData = {
                name: 'Molekule Air Mini+',
                src: mini,
                price: '$499.99'
            }
        } else {
            productData = {
                name: 'Molekule Air Pro',
                src: pro,
                price: '$999.99'
            }
        }

        setProduct(productData)
    }


    return (
        <div>
            <Header></Header>
            <Product onOpen={onOpen} handleProduct={handleProduct}></Product>
            <ShowModal isOpen={isOpen} onClose={onClose} product={product}></ShowModal>
        </div>
    )
}

export default Home;