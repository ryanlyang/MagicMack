import React, { useState } from 'react';
import { Box, Text, HStack, VStack, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

interface Review {
  review_text: string;
  reviewer: {
    name: string;
  };
  rating: number;
}

const reviews: Review[] = [
  {
    review_text: "Great service, highly recommend!",
    reviewer: {
      name: "John Doe",
    },
    rating: 5,
  },
  {
    review_text: "Good quality but a bit expensive.",
    reviewer: {
      name: "Jane Smith",
    },
    rating: 4,
  },

  {
    review_text: "Godly Quality beautifully done.",
    reviewer: {
      name: "Joe Kerry",
    },
    rating: 5,
  },
  // Add more reviews as needed
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <VStack spacing={4} align="center" mt={8}>
      <HStack spacing={4}>
        <IconButton
          aria-label="Previous review"
          icon={<ArrowBackIcon />}
          onClick={handlePrevClick}
        />
        <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="sm" minWidth="300px">
          <Text fontWeight="bold">{reviews[currentIndex].reviewer.name}</Text>
          <Text>{'⭐'.repeat(reviews[currentIndex].rating)}</Text>
          <Text>{reviews[currentIndex].review_text}</Text>
        </Box>
        <IconButton
          aria-label="Next review"
          icon={<ArrowForwardIcon />}
          onClick={handleNextClick}
        />
      </HStack>
    </VStack>
  );
};

export default Reviews;