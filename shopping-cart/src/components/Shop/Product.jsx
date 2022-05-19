import { Container, Flex, VStack, Image, Text, Heading, Button } from '@chakra-ui/react'
import mini from '../../assets/air_mini.png';
import pro from '../../assets/air_pro.png';

const Home = () => {
    return (
        <Container maxW='container.lg' p={0}>
            <Flex maxH='80%' mt={40} align='flex-end' justify='center' gap={40}>
                <VStack>
                    <Image src={mini} />
                    <Heading as='h4' size='lg'>
                        Air Mini+
                    </Heading>
                    <Text align='center'>
                        For small rooms up to 250 sq ft
                    </Text>
                    <Text align='center'>
                        Auto Protect mode
                    </Text>
                    <Text align='center'>
                        Particle sensor
                    </Text>
                    <Text fontSize='xl' fontWeight='bold' py={5}>
                        $42/Month | $499.99
                    </Text>
                    <Button colorScheme='gray' size='md' borderRadius='5px'>
                        Add to cart
                    </Button>
                </VStack>
                <VStack>
                    <Image src={pro} />
                    <Heading as='h4' size='lg'>
                        Air Pro+
                    </Heading>
                    <Text align='center'>
                        Day View
                    </Text>
                    <Text align='center'>
                        Senses Chemicals (VOCs), humidity, CO2
                    </Text>
                    <Text align='center'>
                        Auto Protect reacts to VOCs
                    </Text>
                    <Text align='center'>
                        For spaces up to 1000 sq ft
                    </Text>
                    <Text fontSize='xl' fontWeight='bold' py={5}>
                        $63/Month | $999.99
                    </Text>
                    <Button colorScheme='gray' size='md' borderRadius='5px'>
                        Add to cart
                    </Button>
                </VStack>
            </Flex>
        </Container>
    )

}

export default Home
