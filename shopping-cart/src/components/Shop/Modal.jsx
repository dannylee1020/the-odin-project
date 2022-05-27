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

import { HiMinusSm, HiPlusSm } from "react-icons/hi";

const ShowModal = (props) => {
    const displayMini = () => {
        if (!props.mini.displayMini) {
            return;
        }

        return (
            <Container>
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
                            id="subtract"
                            onClick={(e) => {
                                props.handleQuantity(e);
                            }}
                        ></Icon>
                        <Text>{props.mini.quantity}</Text>
                        <Icon
                            as={HiPlusSm}
                            id="add"
                            onClick={(e) => {
                                props.handleQuantity(e);
                            }}
                        ></Icon>
                    </HStack>
                </Flex>
                <Spacer />
                <Text>{props.mini.price}</Text>
            </Container>
        );
    };

    const displayPro = () => {
        if (!props.pro.displayPro) {
            return;
        }

        return (
            <Container>
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
                            id="subtract"
                            onClick={(e) => {
                                props.handleQuantity(e);
                            }}
                        ></Icon>
                        <Text>{props.pro.quantity}</Text>
                        <Icon
                            as={HiPlusSm}
                            id="add"
                            onClick={(e) => {
                                props.handleQuantity(e);
                            }}
                        ></Icon>
                    </HStack>
                </Flex>
                <Spacer />
                <Text>{props.pro.price}</Text>
            </Container>
        );
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
                        <Heading size="md">The clean air you deserve.</Heading>
                        <Flex>
                            {displayMini()}
                            {displayPro()}
                        </Flex>
                        <Divider />
                        <Flex justify="space-between">
                            <Text fontWeight="bold">Total</Text>
                            <Text fontWeight="bold">
                                {/* ${(price * quantity).toFixed(2)} */}
                            </Text>
                        </Flex>
                        <Button colorScheme="teal">Checkout</Button>
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};

export default ShowModal;
