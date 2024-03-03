import { Box, Container, Flex, Heading, Text, Button, VStack, Image, IconButton, Stack, useColorModeValue, Divider, HStack } from "@chakra-ui/react";
import { FaPlay, FaRobot, FaChartLine, FaHandsHelping } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Index = () => {
  const Feature = ({ title, icon, text }) => {
    return (
      <Stack align={"center"}>
        <Flex w={16} h={16} align={"center"} justify={"center"} color={"white"} rounded={"full"} bg={useColorModeValue("gray.100", "gray.700")} mb={1}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{title}</Text>
        <Text color={useColorModeValue("gray.600", "gray.400")} textAlign={"center"}>
          {text}
        </Text>
      </Stack>
    );
  };

  return (
    <Container maxW={"5xl"} p={4}>
      <Flex align={"center"} justify={"center"} direction={{ base: "column", md: "row" }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }} py={{ base: 10, md: 28 }}>
          <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              AI-Powered
            </Text>
            <br />
            <Text as={"span"} color={"blue.400"}>
              Video Production
            </Text>
          </Heading>
          <Text color={useColorModeValue("gray.700", "gray.200")}>Create stunning branded content with the power of AI. Our agency specializes in producing high-quality videos that captivate and engage your audience.</Text>
          <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: "column", sm: "row" }} align={"center"}>
            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6} colorScheme={"blue"} bg={"blue.400"} _hover={{ bg: "blue.500" }}>
              Get started
            </Button>
            <Button rounded={"full"} size={"lg"} fontWeight={"normal"} px={6} leftIcon={<FaPlay fontSize={"2xl"} />}>
              How It Works
            </Button>
          </Stack>
        </Stack>
        <Flex flex={1} justify={"center"} align={"center"} position={"relative"} w={"full"}>
          <Image alt={"Hero Image"} align={"center"} w={"100%"} h={"100%"} src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhaSUyMHZpZGVvJTIwcHJvZHVjdGlvbnxlbnwwfHx8fDE3MDk0NjA5NzV8MA&ixlib=rb-4.0.3&q=80&w=1080" />
        </Flex>
      </Flex>

      <Divider my={10} />

      <VStack spacing={10}>
        <Heading as="h2" size="xl" textAlign="center">
          Why Choose Us?
        </Heading>
        <Box>
          <HStack spacing={10} justify="center">
            <Feature icon={<FaRobot size={"3em"} />} title={"Innovative AI Technology"} text={"We use the latest AI technology to create videos that are not only impressive but also tailored to your brand."} />
            <Feature icon={<FaChartLine size={"3em"} />} title={"Data-Driven Strategies"} text={"Our approach is grounded in data, ensuring that your video content reaches the right audience and makes an impact."} />
            <Feature icon={<FaHandsHelping size={"3em"} />} title={"Dedicated Support"} text={"Our team is committed to providing you with the support you need to bring your vision to life."} />
          </HStack>
        </Box>
      </VStack>

      <Divider my={10} />

      <VStack spacing={8}>
        <Heading as="h2" size="xl" textAlign="center">
          Contact Us
        </Heading>
        <Text fontSize="lg" color={useColorModeValue("gray.700", "gray.200")}>
          Ready to start your project? Get in touch with us today to discuss your video production needs.
        </Text>
        <IconButton variant="solid" colorScheme="blue" aria-label="Send email" fontSize="20px" icon={<AiOutlineMail />} isRound />
      </VStack>
    </Container>
  );
};

export default Index;
