import { Flex, Heading } from '@chakra-ui/layout';
import OpenOrder from '../components/OpenOrder';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <Heading fontSize="lg">Open Order List</Heading>
        <h1>Jakarta</h1>

        <Flex flexDirection="column" marginTop="16px">
          <OpenOrder />
          <OpenOrder />
          <OpenOrder />
        </Flex>
      </main>
    </div>
  )
}
