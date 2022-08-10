import { Box, Button, Flex, Image, Input, Text } from '@chakra-ui/react';
import React from 'react';

export default function Login() {
  return (
    <Flex w='100%' h='100vh'>
      <Flex
        w={{ base: '100%', lg: '50%' }}
        bg='white'
        h='100%'
        alignItems='center'
      >
        <Flex boxShadow='md' rounded='md' w={{base:'90%', md: '80%'}} maxW='500px' mx='auto' bg='#3b9ae3' direction='column' p='10' gap='4'>
          <Text fontSize='SubHeader.lg' textAlign='start'>
            Login
          </Text>
          <Input placeholder='Username' bg='white' type='text' />
          <Input placeholder='Password' bg='white' type='password' />
          <Button bg='blue' borderRadius='20px' border='none' color='white' _hover={{color: 'blue', bg:'white'}}>
            Login
          </Button>
        </Flex>
      </Flex>
      <Box w={{ base: '0%', lg: '50%' }} bg='gray' h='100%'>
      </Box>
    </Flex>
  );
}
