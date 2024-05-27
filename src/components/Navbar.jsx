import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.700" px={4} py={2}>
      <Flex align="center">
        <Text fontSize="xl" color="white" fontWeight="bold">
          Fitness Tracker
        </Text>
        <Spacer />
        <Flex>
          <Link as={NavLink} to="/" px={2} color="white" _hover={{ textDecoration: "none", color: "brand.300" }}>
            Home
          </Link>
          <Link as={NavLink} to="/track-workout" px={2} color="white" _hover={{ textDecoration: "none", color: "brand.300" }}>
            Track Workout
          </Link>
          <Link as={NavLink} to="/profile" px={2} color="white" _hover={{ textDecoration: "none", color: "brand.300" }}>
            Profile
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;