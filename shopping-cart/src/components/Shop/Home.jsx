import Product from "./Product";
import Header from "./Header";
import ShowModal from "./Modal";
import { useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import assetMini from "../../assets/air_mini.png";
import assetPro from "../../assets/air_pro.png";

//! cart should be empty when first rendered
//! fix layout of the cart

const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [pro, setPro] = useState({ quantity: 0, displayPro: false });
    const [mini, setMini] = useState({ quantity: 0, displayMini: false });

    const handleProduct = (e) => {
        if (e.currentTarget.id === "air-mini") {
            setMini((prev) => ({
                name: "Molekule Air Mini+",
                src: assetMini,
                price: 499.99,
                quantity: prev.quantity + 1,
                displayMini: true,
            }));
        } else {
            setPro((prev) => ({
                name: "Molekule Air Pro",
                src: assetPro,
                price: 999.99,
                quantity: prev.quantity + 1,
                displayPro: true,
            }));
        }
    };

    const handleQuantity = (e) => {
        if (e.currentTarget.id === "subtract") {
            setProduct((prev) => ({
                ...prev,
                quantity: Math.max(prev.quantity - 1, 0),
            }));
        } else if (e.currentTarget.id === "add") {
            setProduct((prev) => ({
                ...prev,
                quantity: Math.max(prev.quantity + 1, 0),
            }));
        } else {
            return;
        }
    };

    return (
        <div>
            <Header></Header>
            <Product onOpen={onOpen} handleProduct={handleProduct}></Product>
            <ShowModal
                isOpen={isOpen}
                onClose={onClose}
                pro={pro}
                mini={mini}
                handleQuantity={handleQuantity}
            ></ShowModal>
        </div>
    );
};

export default Home;
