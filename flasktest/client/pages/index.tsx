import React, { useEffect, useState } from "react";
import Head from 'next/head'
import { 
  Button,
  Flex, FormControl, FormLabel, Heading, Input, Text, Box, Select, chakra, Divider, Grid, GridItem
} from '@chakra-ui/react'
import DataRow from '@/components/DataRow'
import CSVReader from 'react-csv-reader'
import Typewriter from "typewriter-effect"

function Home() {

  const [message, setMessage] = useState([]);
  const [onLandingPage, setOnLandingPage] = useState(true);
  const emptyArray : Array<any> = [];
  const [csvData, setCSVData] = useState<Array<any>>(emptyArray);

  const uploadCSV = ()=>{
    setOnLandingPage(!onLandingPage);
  }

  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header : any) =>
      header
        .toLowerCase()
        .replace(/\W/g, '_')
  }

  const CustomTypewriterEffect = (props : any) => {
    const { strings, emojis, typeSpeed, pauseDelay, overallIterations } = props;
    return (
      <Typewriter
        onInit={(tw) => {
          tw.changeDelay(typeSpeed)
          tw.changeDeleteSpeed(typeSpeed * 2)
          // We want to revert to the first item after the last item, so we end with i=0
          for (let i = 0; i <= strings.length * 1; i++) {
            const index = i % strings.length
  
            // Restart
            tw.deleteAll()
            tw.typeString(strings[index])
            tw.typeString(" ")
            tw.pauseFor(pauseDelay)
          }
          tw.start()
        }}
      />
    )
  }

  const onSubmit = () => {
    fetch("https://hardhatcare-41d6dcab4c90.herokuapp.com/api/home", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: csvData }),
    }).then(
      response => response.json()
    ).then(
      (data) => {
        console.log(data.result)

        const copyData = [...csvData]
        for (let i = 0; i < csvData.length; i++) {
          copyData[i].SCORE = data.result[i][1].toFixed(4);
        }
        setCSVData(copyData);
      }
    );
  }

  const setData = (data : Array<any>)=>{
    for (let i = 0; i < data.length; i++) {
      data[i].SCORE = "";
    }
    setCSVData(data)
  }

  return(
    <>
      <Head>
        <title>Hard Hat Care</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {onLandingPage && 
          <Flex bg="black" direction="column" height="100vh" width="100vw" color="white" align="center" justify="center" textAlign="center">
            <Heading fontSize="9xl">Hard Hat Care</Heading>
            <Box fontSize="5xl" width="75vw" color="pink">
              <CustomTypewriterEffect
                  strings={[
                    "The Mental Hard Hat for Your Employees",
                    "Examine the Well-Being of Your Employees",
                    "Use Artificial Intelligence to Uncover Insights",
                  ]}
                  fontSize={"9xl"}
                  emojis={["🎣", "🐠", "🚢"]}
                  typeSpeed={40}
                  pauseDelay={1250}
                  overallIterations={10}
                />
            </Box>
            <Button colorScheme='purple' fontSize={"3xl"} mt="30px" height="50px" width="400px" onClick={uploadCSV}>Start Analysis</Button>
          </Flex>
      }

      {!onLandingPage && 
        <Flex direction="column" bg="whitesmoke" height="100vh" p="20px" width="100vw" align="center">
          <Flex direction="column" width="50%" color="black" textAlign="center" align="center">
            <Heading fontSize="9xl">Upload CSV</Heading>
            <Text fontSize="lg" width="75vw">Upload a CSV file here to begin the process</Text>
            
            <Box width="100%" mt="20px">
              <CSVReader
                cssClass="csv-reader-input"
                // label="Select CSV with secret Death Star statistics"
                onFileLoaded={(data : any[], fileInfo : any) => setData(data)}
                onError={()=>{}}
                parserOptions={papaparseOptions}
                inputId="ObiWan"
                inputName="ObiWan"
                inputStyle={{color: 'red'}}
              />
            </Box>
    
            <Button colorScheme='purple' mt="20px" width="100%" onClick={()=>{onSubmit()}}>Process Data</Button>
          </Flex>

          <Divider m="20px"/>

          <Flex direction="column" width="90%" bg="whitesmoke" p="20px">
            <Box bg="lightgray" p="10px" border="solid" mb="20px">
              <Grid templateColumns='repeat(7, 1fr)' gap={6}>
                <Flex w='100%' h='10' justify="center" align="center">
                  <Text fontWeight="900" fontSize="lg">ID</Text>
                </Flex>
                <Flex w='100%' h='10' justify="center" align="center">
                  <Text fontWeight="900" fontSize="lg">Date of Joining</Text>
                </Flex>
                <Flex w='100%' h='10' justify="center" align="center">
                  <Text fontWeight="900" fontSize="lg">Gender</Text>
                </Flex>
                <Flex w='100%' h='10' justify="center" align="center">
                  <Text fontWeight="900" fontSize="lg">Designation</Text>
                </Flex>
                <Flex w='100%' h='10' justify="center" align="center">
                  <Text fontWeight="900" fontSize="lg">Resource Allocation</Text>
                </Flex>
                <Flex w='100%' h='10' justify="center" align="center">
                  <Text fontWeight="900" fontSize="lg">Performance</Text>
                </Flex>
                <Flex w='100%' h='10' justify="center" align="center">
                  <Text fontWeight="900" fontSize="lg">Score</Text>
                </Flex>
              </Grid>
            </Box>

            {csvData.map((val: any, key : number)=>{
              return (
                <DataRow key={key} id={key} personIdText={val.id} dateOfJoining={val.date_of_joining} genderText={val.gender} designationText={val.designation} resourceText={val.resource_allocation} mentalText={(Math.abs(10 - val.mental_fatigue_score))}
                isRed={val.SCORE >= 0.6} scoreText={val.SCORE}/>
              )
            })
            }
          </Flex>
        </Flex>
      }
    </>
  );
}

export default Home;