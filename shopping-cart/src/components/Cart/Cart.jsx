import Shipping from "./Shipping";
import OrderSummary from "./OrderSummary";
import {
    Box,
    VStack,
    Container,
    Flex,
    Image,
    Spacer,
    Icon,
} from "@chakra-ui/react";
import { BiHomeAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

const Cart = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Container maxW="100%">
                <Flex align="center" justify="flex-end">
                    <Spacer />
                    <Image
                        src={logo}
                        h={50}
                        onClick={() => {
                            navigate("/");
                        }}
                    />
                    <Spacer />
                    <Icon
                        as={BiHomeAlt}
                        w={8}
                        h={6}
                        onClick={() => {
                            navigate("/");
                        }}
                    ></Icon>
                </Flex>
            </Container>
            <Box bg="#F4F2F2" w="100%" maxH="100%">
                <VStack spacing={10} align="center" pb="20">
                    <Shipping></Shipping>
                    <OrderSummary></OrderSummary>
                </VStack>
            </Box>
        </div>
    );
};

export default Cart;
