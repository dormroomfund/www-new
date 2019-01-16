import { Component } from 'react';
import Head from 'next/head';
import Menu from '../components/Menu';
import Link from 'next/link';
import CustomFooter from '../components/Footer';
import brooklinen_founder from '../static/img/founders_compressed/brooklinen.jpg';
import blockstack_founder from '../static/img/founders_compressed/blockstack2.jpg';
import scholly_founder from '../static/img/founders_compressed/scholly.jpg';
import fiscalnote_founder from '../static/img/founders_compressed/fiscalnote.jpg';
import company_data from '../static/data/companies';
import ActiveLink from '../components/ActiveLink';

export default class CompaniesPage extends Component {
  render() {
    return (
      <div className="App">
        <Head>
          <title>Dorm Room Fund - Companies</title>
        </Head>
        <div className="founders">
          <Menu lightColor={true} />
          <div className="founders-hero-photo">
            <div className="content">
              <div className="founders-hero-wrapper">
                <h1 className="founders-header light-text">
                  Our companies are built by over 300 founders from 40
                  universities.
                </h1>
                <div className="founders-hero-grid">
                  <div className="left-part">
                    <div className="left-first-row">
                      <div className="left-first-row-first-half tile">
                        <Link to="/muneeb-ali">
                          <a>
                            <img
                              className="tile-img"
                              src={blockstack_founder}
                            />
                            <div className="overlay-text card-text">
                              <div className="mobile-only">Muneeb Ali</div>
                              <div className="mobile-only">Princeton PhD</div>
                              <div>Muneeb Ali (Princeton PhD &#39;17)</div>
                              <div>Blockstack</div>
                            </div>
                          </a>
                        </Link>
                      </div>
                      <div className="left-first-row-second-half tile">
                        <Link to="/chris-gray">
                          <a>
                            <img className="tile-img" src={scholly_founder} />
                            <div className="overlay-text card-text">
                              <div className="mobile-only">Chris Gray</div>
                              <div className="mobile-only">Drexel &#39;13</div>
                              <div>Chris Gray (Drexel &#39;13)</div>
                              <div>Scholly</div>
                            </div>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="left-second-row tile">
                      <Link href="/brooklinen">
                        <a>
                          <img
                            className="tile-img brooklinen"
                            src={brooklinen_founder}
                          />
                          <div className="overlay-text card-text">
                            <div className="mobile-only">Vicki Fulop</div>
                            <div className="mobile-only">NYU &#39;07</div>
                            <div>
                              Rich Fulop (NYU &#39;14) & Vicki Fulop (NYU
                              &#39;07)
                            </div>
                            <div>Brooklinen</div>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="right-part tile">
                    <ActiveLink href="/tim-hwang">
                      <a>
                        <img
                          className="tile-img fiscalnote"
                          src={fiscalnote_founder}
                        />
                        <div className="overlay-text card-text">
                          <div className="mobile-only">Tim Hwang</div>
                          <div className="mobile-only">Princeton &#39;14</div>
                          <div>Tim Hwang (Princeton &#39;14)</div>
                          <div>FiscalNote</div>
                        </div>
                      </a>
                    </ActiveLink>
                  </div>
                </div>
                <div className="founders-hero-grid-mobile" />
              </div>
            </div>
          </div>
          <div className="content">
            <div className="founders-grid-wrapper">
              <h1 className="team-divider-title">All Companies</h1>
              <hr className="team-divider" />
              <div className="founders-grid-container">
                <div className="founders-grid" data-column="3">
                  {company_data
                    .sort((a, b) =>
                      a.companyName < b.companyName
                        ? -1
                        : a.companyName > b.companyName
                        ? 1
                        : 0
                    )
                    .map((c) => (
                      <Company key={c.companyName} company={c} />
                    ))}
                </div>
              </div>
            </div>
          </div>
          <CustomFooter />
        </div>
      </div>
    );
  }
}

const Company = ({ company }) => (
  <div className="founders-column">
    <div className="founders-card-container">
      <a href={company.url} className="founders-card-link">
        <div className="founders-card">
          <div className="card-text">
            <div className="">
              <h5>{company.companyName}</h5>
            </div>
            <div className="founders-card-school">{company.school}</div>
            <div className="founders-card-bio">{company.people}</div>
          </div>
        </div>
      </a>
    </div>
  </div>
);
