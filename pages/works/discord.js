import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Discord">
    <Container>
      <Title>
        Discord Bots <Badge>2020</Badge>
      </Title>
      <P>
        Discord bots for nft collection, PUBG match manager, game-bot and much
        more!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Django, Postgresql, React, NodeJS, Typescript, MongoDB, API&apos;s,
            Google sheets
          </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/discord_01.png" alt="discord" />
      <WorkImage src="/images/works/discord_02.png" alt="discord" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
