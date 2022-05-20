import {
    Modal,
    ModalContent,
    ModalOverlay,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Container,
    Flex,
    Heading,
    VStack,
    HStack,
    Text,
    Icon,
    Image,
    Divider
} from '@chakra-ui/react'

import { HiMinusSm, HiPlusSm  } from 'react-icons/hi';


//! use Drawer component instead of Modal

const ShowModal = (props) => {

    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose} motionPreset='slideInRight'>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Your cart</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <VStack>
                        <Heading as='h4'>The clean air you deserve.</Heading>
                        <Flex>
                            <Image src='' alt='placeholder'></Image>
                            <Flex direction='column' justify='left'>
                                <Heading as='h4'>Molekule Air Mini+</Heading>
                                <HStack>
                                    <Icon as={HiMinusSm}></Icon>
                                    <Text>1</Text>
                                    <Icon as={HiPlusSm}></Icon>
                                </HStack>
                            </Flex>
                            <Text>$499.99</Text>
                        </Flex>
                        <Divider/>
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )

}

export default ShowModal;