import Product from './Product';
import Header from './Header';
import ShowModal from './Modal';
import { useDisclosure } from '@chakra-ui/react';

const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div>
            <Header></Header>
            <Product onOpen={onOpen}></Product>
            <ShowModal isOpen={isOpen} onClose={onClose}></ShowModal>
        </div>
    )
}

export default Home;