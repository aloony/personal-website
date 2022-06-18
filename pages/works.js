import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbB2B from '../public/images/works/b2b_eyecatch.png'
import thumbCryptoFarm from '../public/images/works/crypto-farm_eyecatch.png'
import thumbDiscord from '../public/images/works/discord_eyecatch.png'
import thumbPortfolio from '../public/images/works/portfolio_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="crypto-farm" title="Crypto Farm" thumbnail={thumbCryptoFarm}>
            A Crypto Farm based on multi-accounting
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="discord" title="Discord bots" thumbnail={thumbDiscord}>
            Discord bots for nft collection, PUBG match manager, game-bot and much more!
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="b2b" title="B2B marketplace" thumbnail={thumbB2B}>
            A B2B marketplace app with chat and personal pricings for each buyer
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="portfolio" title="Portfolio Website" thumbnail={thumbPortfolio}>
            This exact website)
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
