import Product from "./Product";
import Header from "./Header";
import ShowModal from "./Modal";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

import assetMini from "../../assets/air_mini.png";
import assetPro from "../../assets/air_pro.png";

//? use nested state for scaling? if we have n products, we cannot create state for every product.
//! have cart empty when first rendered

const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [pro, setPro] = useState({ quantity: 0, displayPro: false });
    const [mini, setMini] = useState({ quantity: 0, displayMini: false });
    const [cart, setCart] = useState(false);

    const handleProduct = (e) => {
        setCart(true);

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

    const handleMiniQuantity = (e) => {
        if (e.currentTarget.id === "mini-subtract") {
            setMini((prev) => ({
                ...prev,
                quantity: Math.max(prev.quantity - 1, 0),
            }));
        } else if (e.currentTarget.id === "mini-add") {
            setMini((prev) => ({
                ...prev,
                quantity: Math.max(prev.quantity + 1, 0),
            }));
        } else {
            return;
        }
    };

    const handleProQuantity = (e) => {
        if (e.currentTarget.id === "pro-subtract") {
            setPro((prev) => ({
                ...prev,
                quantity: Math.max(prev.quantity - 1, 0),
            }));
        } else if (e.currentTarget.id === "pro-add") {
            setPro((prev) => ({
                ...prev,
                quantity: Math.max(prev.quantity + 1, 0),
            }));
        } else {
            return;
        }
    };

    return (
        <div>
            <Header onOpen={onOpen}></Header>
            <Product onOpen={onOpen} handleProduct={handleProduct}></Product>
            <ShowModal
                isOpen={isOpen}
                onClose={onClose}
                pro={pro}
                mini={mini}
                cart={cart}
                handleMiniQuantity={handleMiniQuantity}
                handleProQuantity={handleProQuantity}
            ></ShowModal>
        </div>
    );
};

export default Home;
