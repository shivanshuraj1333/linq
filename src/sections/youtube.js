/** @jsx jsx */
import { jsx, Box, Container, Grid, Button, Heading, Text } from 'theme-ui';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import Image from 'components/image';
// import support from 'assets/images/qrflow.png';

const YoutubeEmbed = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <Box sx={styles.grid}>
          <Box sx={styles.videoresponsive}>
		  <iframe
			width="850"
			height="480"
			src={`https://www.youtube.com/embed/tc2_5sz9Mqw?rel=0`}
			frameBorder="0"
			allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
			title="Embedded youtube"
			/>
          </Box>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
              Watch our product demo
            </Heading>
            <Text as="p" sx={styles.summary}>
			LinQ, links merchants and Buy now pay later apps via QR

            </Text>
          </Box>
		  <Box></Box>
        </Box>
      </Container>
    </Box>
  );
};

export default YoutubeEmbed;

const styles = {
  section: {
	backgroundColor: '#68ebff70',
    pt: [8, null, null, 6, null, 14, 16],
    pb: [null, null, null, 8, 16],
  },
  grid: {
    gap: [null, null, null, null, '0 100px'],
    display: ['flex', null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'unset'],
    alignItems: 'center',
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      '1fr',
      '470px 1fr',
      '600px 1fr',
      '650px 1fr',
    ],
  },
  content: {
    marginTop: [null, null, null, null, null, -5],
    maxWidth: [null, null, null, 560, 'none'],
    m: [null, null, null, '0 auto', 'unset'],
  },
  title: {
    color: 'heading',
    fontWeight: 500,
    fontSize: [5, null, null, 10, null, null, 11],
    lineHeight: 1.53,
    letterSpacing: ['-0.5px', null, null, '-1px'],
    textAlign: ['center', null, null, null, 'left'],
    span: {
      backgroundSize: 'cover',
      px: 2,
    },
  },
  summary: {
    color: 'textSecondary',
    fontSize: [1, null, null, 2, '15px', 2],
    lineHeight: [1.86, null, null, null, 1.86, 2.25],
    maxWidth: 470,
    m: [null, null, null, '20px auto 0', '15px 0 0', null, 'unset'],
    textAlign: ['center', null, null, null, 'left'],
  },
  list: {
    gap: '0 18px',
    gridTemplateColumns: ['repeat(2, 142px)', null, null, 'repeat(2, 300px)'],
    justifyContent: [null, null, null, 'center', 'unset'],
    listStyle: 'none',
    mt: [4, null, null, 5, 4, 5],
    p: 0,
    li: {
      fontSize: [0, 1, null, 2, '15px', 2],
      fontWeight: 500,
      alignItems: 'center',
      color: 'textSecondary',
      display: 'flex',
      lineHeight: [2.81, null, null, null, 2.2, 2.81],
    },
  },
  videoresponsive: {
	overflow: 'hidden',
	paddingBottom: '56.25%',
	position: 'relative',
	height: '0',
	iframe: {
		left: '0',
		top: '0',
		height: '100%',
		width: '100%',
		position: 'absolute',
	}
  
  },
};
