import {
  Container,
  Badge,
  List,
  ListItem,
  Link
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Crypto Farm">
    <Container>
      <Title>
        Crypto Farm <Badge>2021-winter</Badge>
      </Title>
      <P>
        A Crypto Farm based on Metamask multi-accounting, browser automation and machine learning for object detection. <br />
        Game is currently out of date, so im not able to retrieve many screenshots out of it. Source code can be found on my github.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Python/OpenCV, Metamask, Browser Automation</span>
        </ListItem>
        <ListItem>
          <Meta>Repo</Meta>
          <Link href="https://github.com/aloony/crypto-farm">aloony</Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/crypto-farm_01.png" alt="crypto-farm" />
      <WorkImage src="/images/works/crypto-farm_02.png" alt="crypto-farm" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
