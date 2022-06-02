import Shipping from "./Shipping";
import OrderSummary from "./OrderSummary";
import { Box, VStack } from "@chakra-ui/react";

const Cart = () => {
    return (
        <Box bg="#F4F2F2" w="100%" maxH="100%">
            <VStack spacing={10} align="center" pb="20">
                <Shipping></Shipping>
                <OrderSummary></OrderSummary>
            </VStack>
        </Box>
    );
};

export default Cart;
