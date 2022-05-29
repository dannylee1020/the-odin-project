import {
    Container,
    Flex,
    Divider,
    Icon,
    Spacer,
    Image,
} from "@chakra-ui/react";
import { BiShoppingBag } from "react-icons/bi";
import logo from "../../assets/logo.png";

const Header = (props) => {
    return (
        <Container maxW="100%">
            <Flex align="center" justify="flex-end">
                <Spacer />
                <Image src={logo} h={50} />
                <Spacer />
                <Icon as={BiShoppingBag} w={8} h={6} onClick={props.onOpen} />
            </Flex>
            <Divider />
        </Container>
    );
};

export default Header;
