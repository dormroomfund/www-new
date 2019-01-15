import Head from 'next/head';
import Apply from '../components/Apply';
import Resources from '../components/Resources';
import CustomFooter from '../components/Footer';
import Menu from '../components/Menu';
import Hero from '../components/Hero';
import Community from '../components/Community';
import Value from '../components/Value';
import FoundersSection from '../components/FoundersSection';

export default () => (
  <div className="App">
    <Head>
      <title>Dorm Room Fund</title>
    </Head>
    <Menu lightColor={false} />
    <Hero />
    <Community />
    <Value />
    <FoundersSection />
    <Apply />
    <Resources />
    <CustomFooter />
  </div>
);
