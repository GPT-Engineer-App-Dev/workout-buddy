import { Container, Text, VStack, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading>Welcome to Fitness Tracker</Heading>
        <Text fontSize="lg" textAlign="center">
          Track your workouts, set your fitness goals, and monitor your progress with our easy-to-use fitness tracking app.
        </Text>
      </VStack>
    </Container>
  );
};

export default Index;