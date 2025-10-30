import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoGoogle, IoLogoLinkedin } from 'react-icons/io5'
import IoLogoTelegram from '../components/icons/telegram'
import IoLogoHackerone from '../components/icons/hackerone'

// const ProfileImage = chakra(Image, {
//   shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
// })

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Here is a cute puppy
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1} mb={5}>
          <Heading as="h2" variant="page-title">
            Georgii Randiuk
          </Heading>
          <p>Software Engineer</p>
        </Box>
        {/* <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/georgiy.png"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box> */}
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          General
        </Heading>
        <Paragraph>
          Hi! I'm a developer of a wide range of skills, but mostly backend, based in Serbia, Belgrade
          with a passion for building digital services. I have a knack for building things
          from the ground-up, starting from general design of the problem to solving it
          with most appropriate for the job services and technologies. I also really like optimizing
          my workflow and life in general with interesting technologies, such as, for example,
          making my own Nixos/Linux system with dotfiles from which I could restore it on any
          desktop/laptop in literal minutes. I think its a cool little project)
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2003</BioYear>
          Born in Kazakhstan, Karaganda.
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Moved to Russia at around 13 y.o,
          changed several cities before
          settling in Kaliningrad untill 18 y.o
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Started mastering art of code and design, making simple programs in compiled languages (c, c++, c#), creating 3d models, games and much more)
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Began putting my skills to use in various hacking platforms (hackerone, integrity, bugcrowd),
          as well earning some money by working as a fullstack freelance developer (I was making website and mobile apps,
          both frontend and backend, as well as deploying them on Linux servers of various distributions)
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          At some point, due to personal reasons I dropped out of school in the 10th out of 11 grades.
          Then, after going to colledge I dropped out yet again, this time with the intent to find
          stable work in the industry. (I was quite busy during all these years in school and colledge
          with learning new skills and generally bettering myself)
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Worked as a Cyber Security Analyst on various hacking platforms,
          found a few vulnarabilities. Honestly, I didn't like the experience very much
          due to it feeling more like a game of finding needle in a haystack and generally doing good enough recon
          of the target product. While that is a good skill to have, I felt it wasn't as rewarding
          as being able to create practically anything I could think of so long as my skills were up to par in
          software development.
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
          Working in fintech at{' '}
          <NextLink href="https://finstar.com" passHref>
            <Link target="_blank">Finstar(DIGITAL FINANCE ITERNATIONAL), IT Expert</Link>
          </NextLink>{' '}
          as a Python Backend Developer
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Other than Software Engineering, I ♥
        </Heading>
        <Paragraph>
          Art, Music, Playing Piano, Cinematography, Learning new languages (Serbian currently)
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://t.me/aloonyyy" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTelegram />}
              >
                telegram
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://linkedin.com/in/aloony" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                linkedin
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/aloony" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                github
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://gmail.com/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGoogle />}
              >
                npp3rzwi@gmail.com
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://hackerone.com/aloony" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoHackerone />}
              >
                hackerone
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
