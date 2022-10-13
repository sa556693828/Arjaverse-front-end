import React, { useState } from 'react';
// import Image from 'next/dist/client/image';
import { useRouter } from 'next/router';
import { Box, Button, ButtonGroup, Center, Flex, Spacer } from '@chakra-ui/react';

export default function Header() {
  const router = useRouter();
  const goPage = (page) => {
    router.push(page);
  };


  return (
    <>
      <Flex justify='space-between' align='center' py='1rem' bg='transparent'>
        <Center m={1}>
          Logo
        </Center>
        <Spacer />
        <ButtonGroup gap='2'>
          <Button colorScheme='teal'>IG</Button>
          <Button colorScheme='teal'>Twitter</Button>
          <Button colorScheme='teal'>Medium</Button>
          <Button colorScheme='teal'>Discord</Button>
        </ButtonGroup>
      </Flex>
    </>
  );
}
