import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Button, Box, Flex, Text, Divider, Heading, Input, Spacer } from '@chakra-ui/react';
import { IconButton } from "@chakra-ui/button";
import Image from 'next/image';
// import styles from './OpenOrder.module.css';

export default function OrderItem({title, limit, price, image, quantity}) {
  return (
    <Box>
      <Flex >
        <Box marginRight={4} borderRadius="lg" overflow="hidden" height="60px" width="60px">
          <Image src={image} width={60} height={60} />
        </Box>
        <Box>
          <Heading fontSize="xs">
            {title}
          </Heading>
          <Text fontSize="sm">
            Limit: {limit}
          </Text>
          <Text fontSize="sm">
            {price}
          </Text>
        </Box>
      </Flex>
      <Flex justifyContent="flex-end" paddingTop="4px">
        {quantity ? (
          <Flex>
            <Input placeholder="Add notes..." size="xs" maxWidth="150px" variant="flushed"/>
            <Spacer />
            <IconButton icon={<MinusIcon />} size="xs" />
            <Box 
              as="span" 
              paddingRight={2} 
              paddingLeft={2} 
            >
              {quantity}
            </Box>
            <IconButton icon={<AddIcon />} size="xs" />
          </Flex>
        ) : (
          <Button fontSize="xs">Add item</Button>
        )}
        
      </Flex>
      <Divider marginTop={2} marginBottom={2}/>
    </Box>
  )
}
