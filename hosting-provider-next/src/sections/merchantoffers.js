/** @jsx jsx */
import { jsx, Box, Container, Grid, Button, Heading, Text } from 'theme-ui';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import Image from 'components/image';
import support from 'assets/images/merchantoffers.png';

const list = [
  'Easy access to all offers',
  'Get personalised discounts',
];

const CustomerSupport = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <Box sx={styles.grid}>
          <Box sx={styles.illustration}>
            <Image src={support} loading="lazy" alt="support" />
          </Box>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
              Avail offers made just for you
            </Heading>
            <Text as="p" sx={styles.summary}>
              Get the best deals from merchants right in your BNPL app
            </Text>

            <Grid sx={styles.list} as="ul">
              {list.map((item, i) => (
                <Text as="li" key={i}>
                  <IoIosCheckmarkCircle
                    sx={{ color: 'blue', mr: 2 }}
                    size="20px"
                  />
                  {item}
                </Text>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CustomerSupport;

const styles = {
  section: {
	backgroundColor: '#68ebff70',
    pt: [8, null, null, 6, null, 14, 16],
    pb: [null, null, null, 8, 0],
  },
  grid: {
    gap: [null, null, null, null, '0 10px'],
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
      '760px 1fr',
    ],
  },
  illustration: {
    textAlign: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    mt: [2, null, null, 0, 4, 0],
    img: {
      maxWidth: ['100%', null, null, null, null, '100%'],
    },
  },
  content: {
    marginTop: [null, null, null, null, null, -16],
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
};