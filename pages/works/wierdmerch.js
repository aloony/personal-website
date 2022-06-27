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
    <Layout title="Discord">
      <Container>
        <Title>
          Weird Merch <Badge>2021</Badge>
        </Title>
        <P>
        A Project, that provides an opportunity to create custom clothing, in other words, you choose a thing from the catalog or send your own.<br/>
        Then you use the editor to apply drawings and photos as you want, and complete the order.
        Then, our creative team enters the work, which will apply a drawing on the clothes according to your layout, all the work is done
        manually by our artists.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, Typescript, MongoDB, API&apos;s, React, Express</span>
          </ListItem>
          <ListItem>
            <Meta>Team</Meta>
            <span><Link href="https://github.com/aloony">aloony</Link> && <Link href="https://github.com/IATNAOD">IATNAOD</Link></span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/works/wierdmerch_01.jpg" alt="wierdmerch" />
        <WorkImage src="/images/works/wierdmerch_02.jpg" alt="wierdmerch" />
        <WorkImage src="/images/works/wierdmerch_03.jpg" alt="wierdmerch" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  