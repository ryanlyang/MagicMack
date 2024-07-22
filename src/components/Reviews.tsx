import React, { useState, useEffect } from 'react';
import { Box, Text, HStack, VStack, IconButton, Heading } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../styles/Reviews.css'; // Ensure this CSS file is imported

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
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [pendingIndex, setPendingIndex] = useState<number>(currentIndex);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (pendingIndex !== currentIndex) {
      setCurrentIndex(pendingIndex);
    }
  }, [direction, pendingIndex, currentIndex]);

  const handlePrevClick = () => {
    if(!isAnimating){
      setDirection('left');
      setPendingIndex(currentIndex === 0 ? Math.max(reviews.length - 2, 0) : currentIndex - 2);
      setIsAnimating(true);
    }
    
  };

  const handleNextClick = () => {
    if(!isAnimating){
      setDirection('right');
      setPendingIndex(currentIndex >= reviews.length - 2 ? 0 : currentIndex + 2);
      setIsAnimating(true);  
    }
    
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <Box bg="black" color="white" py={10} px={5}>
      <VStack spacing={4} align="center">
        <Heading as="h2" size="xl" mb={2} color="white">Highly Recommended</Heading>
        <Text>We focus on quality and the care of your vehicle. Attention to Detail and Premium Quality is what our clients receive every time! Check out our Reviews below, to see what our clients say about us!</Text>
        <HStack spacing={4} mt={8}>
          <IconButton
            aria-label="Previous review"
            icon={<ArrowBackIcon />}
            onClick={handlePrevClick}
            disabled={isAnimating}
            sx={{
              height: '60px',
              minHeight: '60px',
              backgroundColor: 'gray.700',
              _hover: {
                backgroundColor: '#545454',
                color: 'white',
              },
            }}
          />
          <Box position="relative" width="900px" height="250px" overflow="hidden">
            <TransitionGroup component={null}>
              <CSSTransition
                key={currentIndex}
                timeout={750}
                classNames={`slide-${direction}`}
                onExited={handleAnimationEnd}
              >
                <HStack
                  spacing={4}
                  className="reviews-slider"
                  position="absolute"
                  width="100%"
                  height="100%"
                  alignItems="center"
                  justifyContent="center"
                >
                  {reviews.slice(currentIndex, currentIndex + 2).map((review, index) => (
                    <Box
                      key={index}
                      p={4}
                      borderWidth="1px"
                      borderRadius="lg"
                      boxShadow="sm"
                      minWidth="350px"
                      height="250px"
                      minHeight="250px"
                      bg="gray.800"
                      overflowY="auto"
                    >
                      <HStack justifyContent="space-between">
                        <Text>{'⭐'.repeat(review.rating)}</Text>
                        <Text fontWeight="bold">{review.platform}</Text>
                      </HStack>
                      <Text mt={2}>{review.review_text}</Text>
                    </Box>
                  ))}
                </HStack>
              </CSSTransition>
            </TransitionGroup>
          </Box>
          <IconButton
            aria-label="Next review"
            icon={<ArrowForwardIcon />}
            onClick={handleNextClick}
            disabled={isAnimating}
            sx={{
              height: '60px',
              minHeight: '60px',
              backgroundColor: 'gray.700',
              _hover: {
                backgroundColor: '#545454',
                color: 'white',
              },
            }}
          />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Reviews;
