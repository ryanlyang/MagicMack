import { Box, Text, Stack, VStack, Link, HStack } from '@chakra-ui/react';

const ContactInfo = () => {
  return (
    <Box width="100%" bg="black" color="white" py={10} px={5} textAlign="center">
      <VStack spacing={6} align="center">
        <Text fontSize="3xl" fontWeight="bold">CONTACT INFO</Text>
        <Text fontSize="xl" maxWidth="800px" color="white">
          If you have any questions or want to book an appointment, feel free to reach out on any of these platforms!
        </Text>

        <HStack width="100%" justify="center" align="flex-start" maxWidth="1200px" spacing={10}>
          <VStack align="flex-start" spacing={2} textAlign="left">
            <Box>
              <Text fontSize="2xl" color="gold" mb={2}>Address:</Text>
              <Text fontSize="lg">6327 Skyline Dr</Text>
              <Text fontSize="lg">Houston TX 77057</Text>
            </Box>
          </VStack>
          <VStack align="flex-start" spacing={2} textAlign="left">
            <Box>
              <Text fontSize="2xl" color="gold" mb={2}>Contact:</Text>
              <Text fontSize="lg">Tel: 832-219-1775</Text>
              <Text fontSize="lg">Email: info@vive-houston.com</Text>
              <Text fontSize="lg">
                Facebook: <Link href="https://www.facebook.com/carshinesinme/" color="blue.500" isExternal>Facebook</Link>
              </Text>
              <Text fontSize="lg">
                Instagram: <Link href="https://www.instagram.com/magicmacksautodetailing/" color="blue.500" isExternal>Instagram</Link>
              </Text>
            </Box>
          </VStack>
        </HStack>

        <Box textAlign="center" width="100%" maxWidth="800px">
          <Text fontSize="2xl" color="gold" mb={4}>Store Hours:</Text>
          <Stack spacing={2} align="center">
            <HStack justify="space-between" width="100%" maxWidth="400px">
              <Text fontSize="lg">Monday:</Text>
              <Text fontSize="lg">Closed</Text>
            </HStack>
            <HStack justify="space-between" width="100%" maxWidth="400px">
              <Text fontSize="lg">Tuesday:</Text>
              <Text fontSize="lg">9:00am - 6:00pm</Text>
            </HStack>
            <HStack justify="space-between" width="100%" maxWidth="400px">
              <Text fontSize="lg">Wednesday:</Text>
              <Text fontSize="lg">9:00am - 6:00pm</Text>
            </HStack>
            <HStack justify="space-between" width="100%" maxWidth="400px">
              <Text fontSize="lg">Thursday:</Text>
              <Text fontSize="lg">9:00am - 6:00pm</Text>
            </HStack>
            <HStack justify="space-between" width="100%" maxWidth="400px">
              <Text fontSize="lg">Friday:</Text>
              <Text fontSize="lg">9:00am - 6:00pm</Text>
            </HStack>
            <HStack justify="space-between" width="100%" maxWidth="400px">
              <Text fontSize="lg">Saturday:</Text>
              <Text fontSize="lg">9:00am - 6:00pm</Text>
            </HStack>
            <HStack justify="space-between" width="100%" maxWidth="400px">
              <Text fontSize="lg">Sunday:</Text>
              <Text fontSize="lg">Closed</Text>
            </HStack>
          </Stack>
        </Box>
      </VStack>
    </Box>
  );
};

export default ContactInfo;
