import { Box, VStack, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const OrderSummary = () => {
    const location = useLocation();

    return (
        <Box bg="white" w="60%" h="60vh" align="center">
            <VStack align="left" spacing={20} w="90%" mt="10">
                <Flex justify="space-between">
                    <Heading size="lg">Order Summary</Heading>
                </Flex>
                <Flex justify="space-between">
                    <Text>Subtotal</Text>
                    <Text>${location.state.total}</Text>
                </Flex>
                <Flex justify="space-between">
                    <Text>Shipping</Text>
                    <Text>Free ground</Text>
                </Flex>
                <Flex justify="space-between">
                    <Text fontWeight="800">Order total</Text>
                    <Text fontWeight="800">${location.state.total}</Text>
                </Flex>
                <Button colorScheme="teal" h="50px">
                    Place order
                </Button>
            </VStack>
        </Box>
    );
};

export default OrderSummary;
