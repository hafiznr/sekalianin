import { Button, Box, Flex, Image as Img, IconButton, Icon, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { useRouter } from 'next/router'; 
import styles from './OpenOrder.module.css';

export default function OpenOrder() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/open-order/1')
  }

  return (
    <div className={styles.card} onClick={handleClick}>
      <Box marginBottom={2}>
        <Heading size="sm">Dwi Nanda Susanto</Heading>
      </Box>
      <Flex>
        <Box minWidth={100}>
          <Box textAlign="center">
            <Image src="/profile.jpg" width={50} height={50} />
          </Box>
          <Box fontSize={12}>
            <Flex marginBottom="4px" alignItems="center"><Icon as={FaMapMarkerAlt} marginRight="6px"/>
              Jakarta Timur, Bekasi
            </Flex>
            <Flex marginBottom="4px" alignItems="center"><Icon as={FaRegCalendarAlt} marginRight="6px"/>
              Senin, 15.00-20.00
            </Flex>
          </Box>
        </Box>
        <Flex minWidth={140} marginLeft={4} overflowX="auto" gridGap={4} boxSizing="border-box">
          <Box minWidth={100} height={160} borderWidth="1px" borderRadius="lg" overflow="hidden" >
            <Image src="/batagor.jpg" width={100} height={100}/>
            <Box paddingRight={4} paddingLeft={4} fontSize={12}>
              Batagor Kang Budi
            </Box>
          </Box>
          <Box minWidth={100} height={160} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/dimsum.jpg" width={100} height={100}/>
            <Box paddingRight={4} paddingLeft={4} fontSize={12}>
              Dimsum Legendaris
            </Box>
          </Box>
          <Box minWidth={100} height={160} borderWidth="1px" borderRadius="lg" overflow="hidden" >
            <Image src="/batagor.jpg" width={100} height={100}/>
            <Box paddingRight={4} paddingLeft={4} fontSize={12}>
              Batagor Kang Budi
            </Box>
          </Box>
          <Box minWidth={100} height={160} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/dimsum.jpg" width={100} height={100} />
            <Box paddingRight={4} paddingLeft={4} fontSize={12}>
              Dimsum Legendaris
            </Box>
          </Box>
        </Flex>

      </Flex>
    </div>
  )
}
