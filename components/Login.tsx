import { Box, Button, Flex, Image, Input, Text } from '@chakra-ui/react';
import React from 'react';

export default function Login() {
  return (
    <Flex w='100%' h='100vh'>
      <Box w={{base: '100%', lg:'50%'}} bg='white' h='100%' bgGradient='linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(85,195,255,1) 70%, rgba(1,198,246,1) 95%, rgba(0,212,255,1) 100%);'>
      <Flex boxShadow='md' rounded='md' maxW='500px' mx='auto' mt='90px' bg='#3b9ae3' direction='column' p='10' gap='4'>
        <Text fontSize='SubHeader.lg' textAlign='start'>
          Login
        </Text>
        <Input placeholder='Username' bg='white' type='text'/>
        <Input placeholder='Password' bg='white' type='password'/>
        <Button bg='blue' borderRadius='20px' border='none'>Login</Button>
      </Flex>
      </Box>
      <Box w={{base: '0%', lg:'50%'}} bg='gray' h='100%'>
      <Image src='images/login.webp' alt='login' w='100%' h='100vh'/>
      </Box>
    </Flex>
  );
}
