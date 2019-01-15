import React, { Component } from 'react';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import smoothscroll from 'smoothscroll-polyfill';

import Privacy from '../pages/privacy';
// Home page assets
// Medium article previews
// Social
// Founder on home page
// Founder features
import blockstack_founder from './img/founders_compressed/blockstack2.jpg';
import brooklinen_founder from './img/founders_compressed/brooklinen.jpg';
import fiscalnote_founder from './img/founders_compressed/fiscalnote.jpg';
import scholly_founder from './img/founders_compressed/scholly.jpg';
import './css/App.css';
import { CompaniesPage } from 'pages/companies';
import { ApplyPage } from 'pages/apply';
import { NoMatchPage } from 'pages/_error';

// Team and company data is dynamically loaded

function blockMove(e) {
  e.preventDefault();
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            <Route path="/apply" component={ApplyPage} />
            <Route exact path="/privacy" component={Privacy} />
            <Route path="/companies" component={CompaniesPage} />
            <Route
              path="/team"
              render={() => <TeamPage showCurrent={true} />}
            />
            <Route
              path="/alumni"
              render={() => <TeamPage showCurrent={false} />}
            />

            <Route
              path="/muneeb-ali"
              render={() => (
                <FoundersFeature
                  name="Muneeb Ali"
                  photo={blockstack_founder}
                  company="Blockstack"
                  summary="A new internet for decentralized apps."
                  founders={['Muneeb Ali, Princeton', 'Ryan Shea, Princeton']}
                  milestones={[
                    'Y Combinator - 2014',
                    '$4M Series A led by USV - Jan. 2017',
                    '$25M Signature Fund - Aug. 2017',
                    'ICO - coming soon.',
                  ]}
                  bio={
                    'Over 20 years ago as a child in Pakistan, Muneeb was offered a challenge by his mom: excel on your exams, and you’ll receive a computer.\nLittle did he know, that challenge would change his life. In his TEDx talk, Muneeb told the audience that the day he first accessed the Internet, he fell in love.\n20 years later, he set out to build a new internet.\nToday, the world’s most influential entrepreneurs, investors, and engineers are raving about the world-changing impact that blockchain will have on our society—furthermore, they’ve all got their sights set on Muneeb and co-founder Ryan Shea.\nLeading the pack of the decentralized revolution, the Blockstack founders have gotten backed by some of the world’s most prominent VCs, built a platform for thousands of developers to build technology off of, and have raised a $25M fund to keep supporting the blockchain ecosystem.\nBy turning a PhD dissertation into perhaps one of the most important companies in decades to come, Muneeb embodies the true meaning of a dorm room entrepreneur.'
                  }
                />
              )}
            />
            <Route
              path="/chris-gray"
              render={() => (
                <FoundersFeature
                  name="Chris Gray"
                  photo={scholly_founder}
                  company="Scholly"
                  summary="No more finding scholarships. Let the scholarships find you."
                  founders={[
                    'Christopher Gray, Drexel',
                    'Nicholas Pirollo, Drexel',
                    'Bryson Alef, Amherst',
                  ]}
                  milestones={[
                    'Viral Shark Tank Episode',
                    '$70M in scholarships raised',
                    'Featured in 40+ press outlets',
                  ]}
                  bio={
                    '8 years ago, Christopher Gray was on the verge of not attending college. Coming from a low-income background, he couldn’t afford the insane price tags associated with most American universities.\nHundreds of scholarship applications and $1.3 million in winnings later, Chris was headed to school.\nAfter realizing first-hand how horrible it is to apply to so many scholarships, Chris realized something: many scholarships go unnoticed and un-awarded, and students blindly apply to tons of scholarships that aren’t specific to their profile.\nScholarships can’t find applicants, and students can’t find the right scholarships for them.\nBy building Scholly, Chris set out on a mission to help students easily find scholarships for college.\nWith over 1 million users and over $70 million in scholarships raised, it’s safe to say that Chris has delivered on that mission.\nOn top of the countless students whose lives have been changed because of Scholly, Chris has been recognized as 2015 Ernst & Young Entrepreneur of the Year for Social Entrepreneurship, 2016 Forbes 30 Under 30, Oprah’s Inaugural Super Soul 100 Honorees, and a place on Oprah’s list of her favorite people.'
                  }
                />
              )}
            />
            <Route
              path="/brooklinen"
              render={() => (
                <FoundersFeature
                  name="Rich Fulop & Vicki Fulop"
                  photo={brooklinen_founder}
                  company="Brooklinen"
                  summary="Luxury we can all afford to sleep in."
                  founders={['Rich Fulop, NYU Stern', 'Vicki Fulop, NYU']}
                  milestones={[
                    'Launch at NYU Stern - 2014',
                    '$236,888 raised on Kickstarter - 2014',
                    '$10M venture round - 2017',
                  ]}
                  bio={
                    'They weren’t textile industry experts, they weren’t supply chain veterans, and they didn’t know much about ecommerce.\nWhat Rich & Vicki Fulop did know was, people should be able to buy ridiculously comfortable sheets without having to spend an entire paycheck.\nThat conviction paid off, big time.\nIn 3 years, Brooklinen surpassed a $50M annual run rate and raised a $10M venture round from First Mark Capital.\nWhat started off as a Kickstarter project in an NYU dorm room is now a rapidly growing ecommerce powerhouse that has grown 10x every year since launch.'
                  }
                />
              )}
            />
            <Route
              path="/tim-hwang"
              render={() => (
                <FoundersFeature
                  name="Tim Hwang"
                  photo={fiscalnote_founder}
                  company="FiscalNote"
                  summary="Reinventing government influence."
                  founders={['Tim Hwang, Princeton']}
                  milestones={[
                    'World Economic Forum Technology Pioneer',
                    '$10M Series C — Feb. 2016',
                    'Acquired VoterVoice — July 2017',
                  ]}
                  bio={
                    'As a field organizer for the Obama ’08 campaign and later elected to the Montgomery County Board of Education to oversee a $4B budget, Tim learned a thing or two about politics.\nSitting in a Motel 6 in Silicon Valley during his time as a student at Harvard Business School, Tim launched FiscalNote to improve the way organizations engage with government. By empowering organizations to have maximum impact on legislation and regulation, global powerhouses all around the world rely on FiscalNote.\nTo date, the team has raised over $40M in funding from prominent investors and has been recognized as a Technology Pioneer by the World Economic Forum. Tim has been profiled in countless publications and has been recognized as a Forbes 30 Under 30 & Inc. 30 Under 30.'
                  }
                />
              )}
            />
            <Route component={NoMatchPage} status={404} />
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
