import { Component } from 'react';

import Head from 'next/head';
import Apply from '../components/Apply';
import Banner from '../components/Banner';
import Resources from '../components/Resources';
import CustomFooter from '../components/Footer';
import Menu from '../components/Menu';
import Hero from '../components/Hero';
import Community from '../components/Community';
import Value from '../components/Value';
import FoundersSection from '../components/FoundersSection';
import axios from 'axios';

export default class Index extends Component {
  static async getInitialProps() {
    try {
      const mediumRssFeed = 'https://medium.com/feed/@dormroomfund';
      const rssToJsonApi = 'https://api.rss2json.com/v1/api.json';
      const data = { params: { rss_url: mediumRssFeed } };
      const articles = (await axios.get(rssToJsonApi, data)).data.items.slice(
        0,
        3
      ); // take first 3 articles
      return { articles };
    } catch (error) {
      console.log(error);
      return { articles: [] };
    }
  }

  render() {
    return (
      <div className="App">
        <Head>
          <title>Dorm Room Fund</title>
        </Head>
        <Banner />
        <Menu lightColor={false} />
        <Hero />
        <Community />
        <Value />
        <FoundersSection />
        <Apply />
        <Resources articles={this.props.articles} />
        <CustomFooter />
      </div>
    );
  }
}
