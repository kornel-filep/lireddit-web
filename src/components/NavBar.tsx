import { Box, Flex, Link } from "@chakra-ui/layout";
import React from "react";
import NextLink from "next/link";
import { useMeQuery } from "../generated/graphql";
import { Button } from "@chakra-ui/button";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery();
  let body = null;

  if (!fetching) {
    if (!data?.me) {
      body = (
        <>
          <NextLink href="/login">
            <Link mr={2}>login</Link>
          </NextLink>
          <NextLink href="/register">
            <Link>register</Link>
          </NextLink>
        </>
      );
    } else {
      body = (
        <Flex>
          <Box mr={2}>{data.me.username}</Box>
          <Button variant="link">logout</Button>
        </Flex>
      );
    }
  }
  return (
    <Flex bg="tan" p={4}>
      <Box ml={"auto"}>{body}</Box>
    </Flex>
  );
};
