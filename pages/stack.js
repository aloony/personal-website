import { Container, Heading, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const stack = [
  'Python',
  'Django',
  'PostgreSQL',
  'Celery',
  'Rabbitmq',
  'Redis',
  'Elasticsearch',
  'Django Rest Framework (DRF)',
  'Django channels',
  'Pika',
  'Aiohttp',
  'Asyncio',
  'Flask',
  'Docker',
  'Docker-compose',
  'Nginx',
  'Javascript',
  'Typescript',
  'Node.js',
  'MongoDB',
  'Express.js',
  'Fastify.js',
  'Next.js',
  'React.js',
  'Redux',
  'Redux saga',
  'React Native',
  'Puppeteer',
  'Tailwindcss',
  'Linux',
  'Design Patterns',
  'Browser Automation',
  'OpenCV'
].join(' • ')

const Stack = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Stack
      </Heading>
      <Box mb="4">{stack}</Box>
    </Container>
  </Layout>
)

export default Stack
export { getServerSideProps } from '../components/chakra'
