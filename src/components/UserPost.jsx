import { Avatar, Box, Flex, Image, Text } from '@chakra-ui/react'
import { BsThreeDots } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Actions from './Actions'
import { useState } from 'react'

const UserPost = () => {
    // state for like/heart button
    const [liked,setLiked] = useState(false);
  return (
    <Link to={'/markzuckerberg/post/1'}>
      <Flex gap={3} mb={4} py={5}>
        <Flex flexDirection={'column'} alignItems={'center'}>
            {/* user picture alongside post */}
          <Avatar size={'md'} name="Mark Zuckerberg" src="/zuck-avatar.png" />
          {/* below acts as the vertical line */}
          <Box w={'1px'} bg={'gray.light'} my={2}></Box>
          <Box position={'relative'} w={'full'}>
            <Avatar
              size={'xs'}
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
              position={'absolute'}
              top={'0px'}
              left={'15px'}
              padding={'2px'}
            />
            <Avatar
              size={'xs'}
              name="Kent Dodds"
              src="https://bit.ly/kent-c-dodds"
              position={'absolute'}
              bottom={'0px'}
              right={'-5px'}
              padding={'2px'}
            />
            <Avatar
              size={'xs'}
              name="Ryan Florence"
              src="https://bit.ly/ryan-florence"
              position={'absolute'}
              bottom={'0px'}
              left={'4px'}
              padding={'2px'}
            />
          </Box>
        </Flex>
        <Flex flex={1} flexDirection={'column'} gap={2}>
          <Flex justifyContent={"space-between"} w={"full"}>
            <Flex w={"full"} alignItems={"center"}>
                {/* username div */}
                {/* username above post */}
                <Text fontSize={"sm"} fontWeight={"bold"}>markzuckerberg</Text>
                <Image src='verified.png' w={4} h={4} ml={1}/>
            </Flex>
            <Flex gap={4} alignItems={"center"}>
                {/* top-right flex div */}
                {/* post date */}
                <Text fontSize={"sm"} color={'gray.light'}>1d</Text>
                <BsThreeDots/>
            </Flex>
          </Flex>

          <Text fontSize={"sm"}>This is my first post</Text>
          <Box
          borderRadius={6}
          overflow={"hidden"}
          border={"1px solid"}
          borderColor={"gray.light"}
          >
            <Image src='/post1.png' w={"full"}/>
          </Box>
          <Actions liked={liked} setLiked={setLiked}/>
        </Flex>
      </Flex>
    </Link>
  )
}
export default UserPost
