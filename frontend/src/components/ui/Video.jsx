import { Image, Box } from '@chakra-ui/react';

const Video = () => {
  return (
    <Box
      position="absolute"
      top="50px" // distance from the top of the screen
      left="50%" // center horizontally
      transform="translateX(-50%)" // actually center it (offset 50% of its width)
    >
      <Image
        src="https://wallpapercave.com/wp/wp10388866.jpg" // change this to your actual image path
        alt="ZA Autos"
        maxW="1280px"
        borderRadius="md"
      />
    </Box>
  );
};

export default Video;