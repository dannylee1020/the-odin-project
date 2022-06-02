import {
    Container,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    DrawerHeader,
    DrawerBody,
    DrawerCloseButton,
    Flex,
    VStack,
    HStack,
    Text,
    Heading,
    Icon,
    Image,
    Divider,
    Spacer,
    Button,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";

const ShowModal = (props) => {
    const navigate = useNavigate();

    const totalMini = isNaN(props.mini.quantity * props.mini.price)
        ? 0
        : props.mini.quantity * props.mini.price;

    const totalPro = isNaN(props.pro.quantity * props.pro.price)
        ? 0
        : props.pro.quantity * props.pro.price;

    const totalPrice = (totalMini + totalPro).toFixed(2);

    const displayMini = () => {
        if (!props.mini.displayMini) {
            return;
        }

        return (
            <Flex>
                <Image
                    src={props.mini.src}
                    alt="placeholder"
                    boxSize="100px"
                    pr={5}
                ></Image>
                <Flex direction="column" align="center">
                    <Text fontSize="lg">{props.mini.name}</Text>
                    <HStack>
                        <Icon
                            as={HiMinusSm}
                            id="mini-subtract"
                            onClick={(e) => {
                                props.handleMiniQuantity(e);
                            }}
                        ></Icon>
                        <Text>{props.mini.quantity}</Text>
                        <Icon
                            as={HiPlusSm}
                            id="mini-add"
                            onClick={(e) => {
                                props.handleMiniQuantity(e);
                            }}
                        ></Icon>
                    </HStack>
                </Flex>
                <Spacer />
                <Text>{props.mini.price}</Text>
            </Flex>
        );
    };

    const displayPro = () => {
        if (!props.pro.displayPro) {
            return;
        }

        return (
            <Flex>
                <Image
                    src={props.pro.src}
                    alt="placeholder"
                    boxSize="100px"
                    pr={5}
                ></Image>
                <Flex direction="column" align="center">
                    <Text fontSize="lg">{props.pro.name}</Text>
                    <HStack>
                        <Icon
                            as={HiMinusSm}
                            id="pro-subtract"
                            onClick={(e) => {
                                props.handleProQuantity(e);
                            }}
                        ></Icon>
                        <Text>{props.pro.quantity}</Text>
                        <Icon
                            as={HiPlusSm}
                            id="pro-add"
                            onClick={(e) => {
                                props.handleProQuantity(e);
                            }}
                        ></Icon>
                    </HStack>
                </Flex>
                <Spacer />
                <Text>{props.pro.price}</Text>
            </Flex>
        );
    };

    const cartHeader = () => {
        if (!props.cart) {
            return <Heading size="md">Your cart is empty.</Heading>;
        }

        return <Heading size="md">The clean air you deserve.</Heading>;
    };

    return (
        <Drawer
            isOpen={props.isOpen}
            onClose={props.onClose}
            motionPreset="slideInRight"
            size="md"
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader>Your cart</DrawerHeader>
                <DrawerCloseButton />
                <DrawerBody>
                    <VStack align="left" spacing={10}>
                        {cartHeader()}
                        <Flex direction="column" gap={20}>
                            {displayMini()}
                            {displayPro()}
                        </Flex>
                        <Divider />
                        <Flex justify="space-between">
                            <Text fontWeight="bold">Total</Text>
                            <Text fontWeight="bold">${totalPrice}</Text>
                        </Flex>
                        <Button
                            colorScheme="teal"
                            onClick={() => {
                                navigate("/checkout", {
                                    state: {
                                        total: totalPrice,
                                    },
                                });
                            }}
                        >
                            Checkout
                        </Button>
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};

export default ShowModal;
