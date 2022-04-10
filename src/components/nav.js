// Used code from https://levelup.gitconnected.com/create-a-responsive-navigation-bar-using-chakraui-6489473e933
// Created by: Michael Juarez

import {  Image, Flex, Button,  HStack , chakra } from '@chakra-ui/react';
import Logo from '../images/logo.png';
// import {Link} from 'react-scroll'
import React from "react";
import MobileDrawer from './mobile/drawer';

const resume = "Resume"

const navItems = ['About', 'Projects', 'Contact'];

// export default function Header() {
export const Nav = props => {
  return (
    <chakra.header id="header">
      <Flex
        w="100%"
        px="6"
        py="5"
        align="center"
        justify="space-between"
      >
        <Image src={Logo.src} h="50px" />
        <HStack as="nav" spacing="5">
          {navItems.map((item, i) => (
            // <Link key={i}>
              <Button variant="nav"> {item} </Button>
            // </Link>
          ))}
        </HStack>
        <HStack>
          <Button>
            {resume}
          </Button>
          {/* <MobileDrawer/> */}
        </HStack>
        
      </Flex>
    </chakra.header>
  );
}