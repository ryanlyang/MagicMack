import { useState } from 'react';
import { Box, Text, HStack, VStack, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

interface Review {
  review_text: string;
  platform: string;
  rating: number;
}

const reviews: Review[] = [
  {
    review_text: "Great service, highly recommend!",
    platform: "Facebook",
    rating: 5,
  },
  {
    review_text: "Good quality but a bit expensive.",
    platform: "Yelp",
    rating: 4,
  },
  {
    review_text: "Satisfactory experience.",
    platform: "Google Reviews",
    rating: 3,
  },
  {
    review_text: "Will visit again.",
    platform: "TripAdvisor",
    rating: 4,
  },
  // Add more reviews as needed
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.max(reviews.length - 2, 0) : prevIndex - 2));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= reviews.length - 2 ? 0 : prevIndex + 2));
  };

  return (
    <VStack spacing={4} align="center" mt={8}>
      <HStack spacing={4}>
        <IconButton
          aria-label="Previous review"
          icon={<ArrowBackIcon />}
          onClick={handlePrevClick}
        />
        {reviews.slice(currentIndex, currentIndex + 2).map((review, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="lg" boxShadow="sm" minWidth="300px">
            <Text fontWeight="bold">Posted on: {review.platform}</Text>
            <Text>{'⭐'.repeat(review.rating)}</Text>
            <Text>{review.review_text}</Text>
          </Box>
        ))}
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