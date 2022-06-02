import {
    Box,
    VStack,
    FormControl,
    Heading,
    FormLabel,
    Input,
    FormErrorMessage,
    FormHelperText,
} from "@chakra-ui/react";

//* configure responsive layout

const Shipping = () => {
    return (
        <Box bg="white" w="60%" h="80vh" mt="20" align="center">
            <FormControl>
                <VStack spacing={10} w="90%" align="left">
                    <Heading size="lg" align="left" mt={5}>
                        Shipping
                    </Heading>
                    <Input
                        id="first-name"
                        placeholder="First Name"
                        variant="flushed"
                    ></Input>
                    <Input placeholder="Last Name" variant="flushed"></Input>
                    <Input placeholder="Address 1" variant="flushed"></Input>
                    <Input placeholder="City" variant="flushed"></Input>
                    <Input placeholder="State" variant="flushed"></Input>
                    <Input placeholder="Zip Code" variant="flushed"></Input>
                    <Input placeholder="Country" variant="flushed"></Input>
                    <Input placeholder="Phone Number" variant="flushed"></Input>
                </VStack>
            </FormControl>
        </Box>
    );
};

export default Shipping;
