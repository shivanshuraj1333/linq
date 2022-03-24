/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'components/link';
import Image from 'components/image';
import tranparentLogo from '../assets/images/logo/logo-transparent.png';
// import logo from '../assets/images/logo/logo.jpg';

// import LogoSvg from 'components/icons/logo';

export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      {/* <LogoSvg white={!isSticky} />
       */}
      <Image src={tranparentLogo} />
    </Link>
  );
}

const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    Img: {
      height: '40px',
      width: [128, null, '100%']
    },
  },
};
