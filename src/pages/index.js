import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import Linqapi from 'sections/linqapi';
import Qr from 'sections/qrsupport';
import Scan from 'sections/inappscan';
import Useroffer from 'sections/useroffer';
import Merchantapp from 'sections/merchantapp';
import Merchantoffers from 'sections/merchantoffers';
import PremiumFeature from 'sections/premium-feature';
import UltimateFeatures from 'sections/ultimate-feature';
import YoutubeEmbed from 'sections/youtube';
import CustomerSupport from 'sections/customer-support';
import Pricing from 'sections/pricing';
import Testimonials from 'sections/testimonials';
import Blog from 'sections/blog';
import Faq from 'sections/faq';
import Support from 'sections/support';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="LinQ"
          description="LinQ facilitates payments from buy now, pay later solutions at offline and online stores through QR"
        />
        <Banner />
        {/* <Services /> */}
        <YoutubeEmbed />
        <Linqapi />
        <Qr />
        <Scan />
        <Useroffer />
        <Merchantapp />
        <Merchantoffers />
        {/* <PremiumFeature /> */}
        <UltimateFeatures />
        {/* <CustomerSupport /> */}
        {/* <Pricing /> */}
        {/* <Testimonials /> */}
        {/* <Blog /> */}
        {/* <Faq /> */}
        {/* <Support /> */}
      </Layout>
    </ThemeProvider>
  );
}
