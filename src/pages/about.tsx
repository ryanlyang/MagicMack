import { Box, Text, Image, Flex, Heading, VStack } from "@chakra-ui/react";
import '../styles/about.css';

const About = () => {
  return (
    <Box bg="black" p={8} color="white">
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="center">
        <Box w={{ base: "100%", md: "50%" }} mb={{ base: 8, md: 0 }}>
          <Image 
            src="/No PFP.jpg" 
            alt="Magic Mack"
            borderRadius="8px" 
            boxShadow="lg"
          />
        </Box>
        <VStack spacing={4} w={{ base: "100%", md: "50%" }} pl={{ md: 8 }}>
          <Heading as="h2" size="lg" color="gold">
            Meet Magic Mack
          </Heading>
          <Text fontSize="lg" color="gray.200">
            Magic Mack, the master behind our car detailing magic, has over 20 years of experience in the industry.
            His passion for cars began at a young age, and he’s been perfecting his craft ever since. Mack’s meticulous 
            attention to detail and unwavering commitment to excellence has earned him a loyal following of car enthusiasts.
          </Text>
          <Text fontSize="lg" color="gray.200">
            Whether it’s a classic car or a modern masterpiece, Magic Mack treats every vehicle as if it were his own.
            His secret? A combination of cutting-edge techniques, premium products, and an artist’s touch. With Magic Mack, 
            your car is in the hands of a true professional.
          </Text>
        </VStack>
      </Flex>
      <Box mt={12}>
        <Heading as="h2" size="lg" color="gold" textAlign="center" mb={6}>
          About Our Shop
        </Heading>
        <Text fontSize="lg" color="gray.200" mb={4}>
          Located in the heart of the city, our shop is equipped with state-of-the-art facilities and staffed by a team of 
          passionate car care experts. From exterior detailing to interior restoration, we offer a full range of services to 
          keep your vehicle looking its best.
        </Text>
        <Text fontSize="lg" color="gray.200" mb={4}>
          We believe in using only the finest products and latest techniques to ensure every car receives the royal treatment. 
          Our commitment to quality and customer satisfaction is second to none.
        </Text>
        <Text fontSize="lg" color="gray.200" mb={4}>
          Come visit us and experience the difference. Whether you’re preparing for a car show or just want your daily driver 
          to shine, we’ve got you covered.
        </Text>
        <Text fontSize="lg" color="gray.200" mb={4} fontStyle="italic">
          "Quality is not just our standard, it’s our passion."
        </Text>
      </Box>
    </Box>
  );
};

export default About;
