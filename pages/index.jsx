import Head from 'next/head';
import Menu from 'components/Menu';

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
