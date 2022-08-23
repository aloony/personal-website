import { Container, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PlayerGridItem } from '../components/grid-item'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Topics
      </Heading>
      <Text mb={2} mt={2} fontSize={16} opacity={0.5}>
        Everything shown below isn&apos;t my content, they are just some topics
        i&apos;ve found interesting made by other people
      </Text>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <PlayerGridItem
            videoId={'XThL0LP3RjY'}
            opts={{
              height: 280,
              width: 506
            }}
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
