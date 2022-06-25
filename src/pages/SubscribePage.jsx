import React from "react";
import { Box, Link, Heading, Text } from "@chakra-ui/react";

import NEON_STYLE from "../theme/styles";

const SubscribePage = () => {
  return (
    <Box pos="relative" h="100%">
      <Heading>Хотите знать первыми, когда помощник будет доступен?</Heading>
      <Text variant="neon" mt={[30, 100]}>
        Оставьте почту и мы вам сообщим!
      </Text>
      <Link
        pos="absolute"
        bottom={40}
        borderRadius={12}
        width={330}
        p={2}
        textAlign="center"
        isExternal
        href="https://docs.google.com/forms/d/e/1FAIpQLSfxMPi-awNM1nZRRlsbiZbmnpZWYsXlE7c1Yzcz3pauMvK-mQ/viewform"
        _hover={{ textDecor: "none" }}
        fontSize="xl"
        background="#00A1F1"
        boxShadow="0px 0px 20px #00A1F1"
        colorScheme="blue"
      >
        Перейти к форме
      </Link>
      <Heading pos="absolute" bottom={20}>
        Спасибо за интерес!
      </Heading>
    </Box>
  );
};

export default SubscribePage;
