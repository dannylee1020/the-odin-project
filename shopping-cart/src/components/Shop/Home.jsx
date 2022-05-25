import Product from "./Product";
import Header from "./Header";
import ShowModal from "./Modal";
import { useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import mini from "../../assets/air_mini.png";
import pro from "../../assets/air_pro.png";

//* prevent negative quantity
//* format float points
//* make add to cart to add quantity to the cart

const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [product, setProduct] = useState({});

    const handleProduct = (e) => {
        if (e.currentTarget.id === "air-mini") {
            setProduct({
                name: "Molekule Air Mini+",
                src: mini,
                price: 499.99,
                quantity: 1,
            });
        } else {
            setProduct({
                name: "Molekule Air Pro",
                src: pro,
                price: 999.99,
                quantity: 1,
            });
        }
    };

    const handleQuantity = (e) => {
        if (e.currentTarget.id === "subtract") {
            setProduct((prev) => ({
                ...prev,
                quantity: prev.quantity - 1,
            }));
        } else if (e.currentTarget.id === "add") {
            setProduct((prev) => ({
                ...prev,
                quantity: prev.quantity + 1,
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
                product={product}
                handleQuantity={handleQuantity}
            ></ShowModal>
        </div>
    );
};

export default Home;
