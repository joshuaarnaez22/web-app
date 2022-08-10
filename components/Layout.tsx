import { Flex, Text, Button, Box, Container } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
  return (
    <Flex
      position='sticky'
      direction='row'
      h='10vh'
      w='100%'
      bg='primary.black'
      justifyContent='space-between'
      alignItems='center'
      px='4'
      pos='absolute'
    >
      <Text color='primary.main'>Demo</Text>
      <Box>
        <Button>Login</Button>
        <Button>Register</Button>
      </Box>
    </Flex>
  );
};
const Footer = () => {
  return (
    <Flex
      position='fixed'
      direction='row'
      h='10vh'
      w='100%'
      bg='primary.black'
      justifyContent='space-between'
      alignItems='center'
      px='4'
      bottom='0'
      pos='absolute'
    >
      <Text color='primary.main'>Demo</Text>
    </Flex>
  );
};
export default function Layout({ children }) {
  return (
    <>
      <Container p='0' m='0' maxW='none' h='100vh'>
        <Header />
        <Container p={0} h='100vh' maxW='none' overflowY='auto' scrollSnapType={{ lg: 'y mandatory' }} scrollBehavior='smooth'>
          {children}
          <Footer />
        </Container>
      </Container>
    </>
  );
}
