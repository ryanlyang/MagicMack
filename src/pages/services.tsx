import React from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel, Flex, Image, Heading } from '@chakra-ui/react';

const Services: React.FC = () => {
  return (
    <Flex direction="column" align="center" justify="center" minH="100vh">
      <Heading as="h1" mb={6} color={'whitesmoke'}>Services</Heading>
      <Tabs variant="soft-rounded" colorScheme="yellow" align="center">
        <TabList justifyContent="center">
        <Tab sx={{ color: 'whitesmoke'}}>Interior</Tab>
          <Tab sx={{ color: 'whitesmoke'}}>Exterior</Tab>
          <Tab sx={{ color: 'whitesmoke'}}>Ceramic Coatings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex align="center" justify="center" height="1000px">
              <Image src="/Services/interior_page.jpg" alt="Image 1" maxWidth="100%" maxHeight="100%" objectFit="contain" />
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex align="center" justify="center" height="1000px">
              <Image src="/Services/exterior_page.jpg" alt="Image 2" maxWidth="100%" maxHeight="100%" objectFit="contain" />
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex align="center" justify="center" height="1000px">
              <Image src="/Services/Ceramic_Coatings.jpg" alt="Image 3" maxWidth="100%" maxHeight="100%" objectFit="contain" />
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default Services;