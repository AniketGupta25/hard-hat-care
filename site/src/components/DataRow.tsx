import Head from 'next/head'
import React, { useEffect } from 'react' 
import NextLink from 'next/link'

import { 
    Button,
    Flex, FormControl, FormLabel, Heading, Input, Text, Box, Select, chakra, Divider, Grid, GridItem
  } from '@chakra-ui/react'

export default function DataRow(props : any) {

    const {genderText, hoursText, soberText, lateText, data} = props;

    return (
        <Box bg="white" p="10px" border="solid" borderTop="none">
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                <Flex w='100%' h='10' justify="center" align="center">
                    <Text fontSize="xl">{genderText}</Text>
                </Flex>
                <Flex w='100%' h='10' justify="center" align="center">
                    <Text fontSize="xl">{hoursText}</Text>
                </Flex>
                <Flex w='100%' h='10' justify="center" align="center">
                    <Text fontSize="xl">{soberText}</Text>
                </Flex>
                <Flex w='100%' h='10' justify="center" align="center">
                    <Text fontSize="xl">{lateText}</Text>
                </Flex>
                <Flex w='100%' h='10' justify="center" align="center">
                    <Text fontSize="xl">{data}</Text>
                </Flex>
            </Grid>
        </Box>
    )
}