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
    Button
} from '@chakra-ui/react'

import { HiMinusSm, HiPlusSm  } from 'react-icons/hi';
import mini from '../../assets/air_mini.png'


const ShowModal = (props) => {

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
                            <Image src={mini} alt='placeholder' boxSize='100px' pr={5}></Image>
                            <Flex direction='column' align='center'>
                                <Text fontSize='lg'>Molekule Air Mini+</Text>
                                <HStack>
                                    <Icon as={HiMinusSm}></Icon>
                                    <Text>1</Text>
                                    <Icon as={HiPlusSm}></Icon>
                                </HStack>
                            </Flex>
                            <Spacer/>
                            <Text>$499.99</Text>
                        </Flex>
                        <Divider/>
                        <Flex justify='space-between'>
                                <Text fontWeight='bold'>Total</Text>
                                <Text fontWeight='bold'>$499.99</Text>
                            </Flex>
                        <Button colorScheme='teal'>Checkout</Button>
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )

}

export default ShowModal;