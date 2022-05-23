import {
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
    Button
} from '@chakra-ui/react'

import { HiMinusSm, HiPlusSm  } from 'react-icons/hi';
import { useState } from 'react';

const ShowModal = (props) => {

    const {src, name, price} = props.product;
    const [quantity, setQuantity] = useState(1);

    const handleQuantity = (e) => {
        if (e.currentTarget.id === 'subtract') {
            setQuantity(quantity - 1)
        } else if (e.currentTarget.id === 'add') {
            setQuantity(quantity + 1)
        } else {
            return
        }
    }



    return (
        <Drawer isOpen={props.isOpen} onClose={props.onClose} motionPreset='slideInRight' size='md'>
            <DrawerOverlay/>
            <DrawerContent>
                <DrawerHeader>Your cart</DrawerHeader>
                <DrawerCloseButton/>
                <DrawerBody>
                    <VStack align='left' spacing={10}>
                        <Heading size='md'>The clean air you deserve.</Heading>
                        <Flex>
                            <Image src={src} alt='placeholder' boxSize='100px' pr={5}></Image>
                            <Flex direction='column' align='center'>
                                <Text fontSize='lg'>{name}</Text>
                                <HStack>
                                    <Icon as={HiMinusSm} id='subtract' onClick={handleQuantity}></Icon>
                                    <Text>{quantity}</Text>
                                    <Icon as={HiPlusSm} id='add' onClick={handleQuantity}></Icon>
                                </HStack>
                            </Flex>
                            <Spacer/>
                            <Text>{price}</Text>
                        </Flex>
                        <Divider/>
                        <Flex justify='space-between'>
                                <Text fontWeight='bold'>Total</Text>
                                <Text fontWeight='bold'>{parseInt({price}) * parseInt({quantity})}</Text>
                            </Flex>
                        <Button colorScheme='teal'>Checkout</Button>
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )

}

export default ShowModal;