import { Box, Button, FormControl, FormLabel, Input, Select, VStack } from "@chakra-ui/react";

const TrackWorkout = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <FormControl id="workout-type">
          <FormLabel>Workout Type</FormLabel>
          <Select placeholder="Select workout type">
            <option value="cardio">Cardio</option>
            <option value="strength">Strength</option>
            <option value="flexibility">Flexibility</option>
            <option value="balance">Balance</option>
          </Select>
        </FormControl>
        <FormControl id="duration">
          <FormLabel>Duration (minutes)</FormLabel>
          <Input type="number" />
        </FormControl>
        <FormControl id="calories-burned">
          <FormLabel>Calories Burned</FormLabel>
          <Input type="number" />
        </FormControl>
        <Button colorScheme="blue">Track Workout</Button>
      </VStack>
    </Box>
  );
};

export default TrackWorkout;