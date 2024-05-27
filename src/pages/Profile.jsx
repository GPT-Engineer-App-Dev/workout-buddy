import { Box, FormControl, FormLabel, Input, VStack, Heading } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Profile</Heading>
      <VStack spacing={4} align="stretch">
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="fitness-goal">
          <FormLabel>Fitness Goal</FormLabel>
          <Input type="text" />
        </FormControl>
      </VStack>
    </Box>
  );
};

export default Profile;