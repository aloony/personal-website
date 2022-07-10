import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="B2B">
    <Container>
      <Title>
        B2B Marketplace <Badge>2022</Badge>
      </Title>
      <P>
        A B2B marketplace app with personal pricings for each buyer and embedded
        full-featured chat. Website and mobile application for both Android and
        IOS
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web/Android/IOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Django, PostgreSQL, Celery, NodeJS, Fastify, React, React Native
            Expo, MongoDB, Redux Saga
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/b2b_01.png" alt="B2B" />
      <WorkImage src="/images/works/b2b_02.png" alt="B2B" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
