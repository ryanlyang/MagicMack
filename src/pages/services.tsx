import React from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel, Flex, Image, Heading } from '@chakra-ui/react';
import { useSearchParams } from 'react-router-dom';
import '../styles/services.css';

const Services: React.FC = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab');

  const getTabIndex = () => {
    switch (tab) {
      case 'interior':
        return 0;
      case 'exterior':
        return 1;
      case 'ceramic':
        return 2;
      default:
        return 0;
    }
  };

  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" className='services-container'>
      <Heading as="h1" mb={6} color={'whitesmoke'}>Services</Heading>
      <Tabs variant="soft-rounded" align="center" defaultIndex={getTabIndex()}>
        <TabList justifyContent="center">
          <Tab
            _selected={{ bg: '#F1CC5F', color: 'black' }}
            sx={{
              borderRadius: 'md',
              color: 'whitesmoke',
              transition: 'background-color 0.5s ease, color 0.5s ease',
            }}
          >
            Interior
          </Tab>
          <Tab
            _selected={{ bg: '#F1CC5F', color: 'black' }}
            sx={{
              borderRadius: 'md',
              color: 'whitesmoke',
              transition: 'background-color 0.5s ease, color 0.5s ease',
            }}
          >
            Exterior
          </Tab>
          <Tab
            _selected={{ bg: '#F1CC5F', color: 'black' }}
            sx={{
              borderRadius: 'md',
              color: 'whitesmoke',
              transition: 'background-color 0.5s ease, color 0.5s ease',
            }}
          >
            Ceramic Coatings
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex align="center" justify="center" height="1000px">
              <Image
                src="/Services/interior_page.jpg"
                alt="Image 1"
                maxWidth="100%"
                maxHeight="100%"
                objectFit="contain"
                sx={{ animation: 'fadeIn 0.5s forwards' }}
              />
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex align="center" justify="center" height="1000px">
              <Image
                src="/Services/exterior_page.jpg"
                alt="Image 2"
                maxWidth="100%"
                maxHeight="100%"
                objectFit="contain"
                sx={{ animation: 'fadeIn 0.5s forwards' }}
              />
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex align="center" justify="center" height="1000px">
              <Image
                src="/Services/Ceramic_Coatings.jpg"
                alt="Image 3"
                maxWidth="100%"
                maxHeight="100%"
                objectFit="contain"
                sx={{ animation: 'fadeIn 0.5s forwards' }}
              />
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default Services;