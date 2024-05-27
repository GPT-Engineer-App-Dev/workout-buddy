import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Select, VStack, List, ListItem, Text } from "@chakra-ui/react";

const TrackWorkout = () => {
  const [workoutType, setWorkoutType] = useState("");
  const [duration, setDuration] = useState("");
  const [caloriesBurned, setCaloriesBurned] = useState("");
  const [workouts, setWorkouts] = useState([]);

  const handleSubmit = () => {
    const newWorkout = { workoutType, duration, caloriesBurned };
    setWorkouts([...workouts, newWorkout]);
    setWorkoutType("");
    setDuration("");
    setCaloriesBurned("");
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <FormControl id="workout-type">
          <FormLabel>Workout Type</FormLabel>
          <Select value={workoutType} onChange={(e) => setWorkoutType(e.target.value)} placeholder="Select workout type">
            <option value="Running">Running</option>
            <option value="Cycling">Cycling</option>
            <option value="Swimming">Swimming</option>
            <option value="Cardio">Cardio</option>
            <option value="Strength">Strength</option>
            <option value="Flexibility">Flexibility</option>
            <option value="Balance">Balance</option>
          </Select>
        </FormControl>
        <FormControl id="duration">
          <FormLabel>Duration (minutes)</FormLabel>
          <Input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
        </FormControl>
        <FormControl id="calories-burned">
          <FormLabel>Calories Burned</FormLabel>
          <Input type="number" value={caloriesBurned} onChange={(e) => setCaloriesBurned(e.target.value)} />
        </FormControl>
        <Button colorScheme="blue" onClick={handleSubmit}>Track Workout</Button>
      </VStack>
      <Box mt={8}>
        <Text fontSize="xl" mb={4}>Logged Workouts</Text>
        <List spacing={3}>
          {workouts.map((workout, index) => (
            <ListItem key={index}>
              <Text>Type: {workout.workoutType}</Text>
              <Text>Duration: {workout.duration} minutes</Text>
              <Text>Calories Burned: {workout.caloriesBurned}</Text>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
};

export default TrackWorkout;