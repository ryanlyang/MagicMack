import { useState, useEffect } from 'react';
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
    review_text: "Super impressed with my Edge! She was lookin’ rough and is now sparkling. Can’t wait to come back again.",
    platform: "Facebook",
    rating: 5,
  },
  {
    review_text: "Mack recently detailed my truck. He had great communication and was quickly able to fit me into his busy schedule. I was impressed with the result and he had my truck looking new! Will definitely use him again in the future. Thank you Magic Macks!",
    platform: "Facebook",
    rating: 5,
  },
  {
    review_text: "This was the 4th year I've had Mack detail my Grand Cherokee. I won't go to anyone else. Every time I get it back, it's like having a brand new car again. Thanks Mack!",
    platform: "Facebook",
    rating: 5,
  },
  {
    review_text: "Mack detailed my car and did an excellent job! I’ll have him do my truck as well!  He got a stain out that another detailer that wasn’t able too.  5 stars!!!",
    platform: "Facebook",
    rating: 5,
  },
  {
    review_text: "There was a sparkle in my Yukon again.  I am so impressed with how shiny it looked.  Then I looked inside and was utterly shocked. He does amazing work! I never knew it could look like that again. Spotless and so clean. He definitely puts the Magic in his work!",
    platform: "Facebook",
    rating: 5,
  },
  {
    review_text: "Car looks better than I expected! He definitely puts lots of effort into his work! Even does the engine bay for a small add on. Loved the end result!!",
    platform: "Facebook",
    rating: 5,
  },
  {
    review_text: "Beautiful! Like New! A wonderful gift for Mother's Day and I'm very impressed with the end result. Exactly what the VW needed!",
    platform: "Facebook",
    rating: 5,
  },
  {
    review_text: "Mack did great work on our Jeep!  Looks BRAND NEW!  Will definitely be back!",
    platform: "Facebook",
    rating: 5,
  },
  {
    review_text: "Mack does an incredible  job. it's not just a job to him. He takes incredible  pride in the work he does. He works equally  hard on every job. He was able to get a stain out on my seat that I tried and failed at and it has never resurfaced either ."
    + "He has all the right equipment to do the right."
    + "You can trust him with your most prized possession. You won't  regret this hard working young man working on your vehical.",
    platform: "Facebook",
    rating: 5,
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
    if (!isAnimating) {
      setDirection('left');
      setPendingIndex(currentIndex === 0 ? Math.max(reviews.length - 3, 0) : currentIndex - 3);
      setIsAnimating(true);
    }
  };

  const handleNextClick = () => {
    if (!isAnimating) {
      setDirection('right');
      setPendingIndex(currentIndex >= reviews.length - 3 ? 0 : currentIndex + 3);
      setIsAnimating(true);
    }
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <Box bg="black" color="white" py={10} px={5} mb = {140}>
      <VStack spacing={4} align="center">
        <Heading as="h2" size="xl" mb={2} color="white">Highly Recommended</Heading>
        <Box maxW="800px" textAlign="center">
          <Text>We focus on quality and the care of your vehicle. Attention to detail and premium quality is what our clients receive every time! Check out our reviews below, to see what our clients say about us!</Text>
        </Box>
        <HStack spacing={2} mt={8}>
          <IconButton
            aria-label="Previous review"
            icon={<ArrowBackIcon color="white" />} // Arrow icon white
            onClick={handlePrevClick}
            disabled={isAnimating}
            sx={{
              height: '60px',
              minHeight: '60px',
              backgroundColor: 'gray.800',
              _hover: {
                backgroundColor: '#d4af37',
                color: 'black',
              },
            }}
          />
          <Box position="relative" width="900px" height="300px" overflow="hidden">
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
                  {reviews.slice(currentIndex, currentIndex + 3).map((review, index) => (
                    <Box
                      key={index}
                      p={4}
                      borderWidth="4px" // Thicker border
                      borderRadius="lg"
                      boxShadow="sm"
                      width="300px" // Fixed width
                      height="300px"
                      minHeight="280px"
                      bg="black"
                      borderColor="gray" // White border
                      overflowY="auto"
                    >
                      <HStack justifyContent="space-between">
                        <Text color="gold">{'⭐'.repeat(review.rating)}</Text>
                        <Text fontSize={14}>
                          Posted on <Text as="span" color="gray.400">{review.platform}</Text>
                        </Text>
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
            icon={<ArrowForwardIcon color="white" />} // Arrow icon white
            onClick={handleNextClick}
            disabled={isAnimating}
            sx={{
              height: '60px',
              minHeight: '60px',
              backgroundColor: 'gray.800',
              _hover: {
                backgroundColor: '#d4af37',
                color: 'black',
              },
            }}
          />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Reviews;
