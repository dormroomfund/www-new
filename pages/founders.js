import Link from 'next/link';

import Layout from '../components/Layout';
import company_data from '../lib/companies.json';

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

export default () => (
  <Layout lightColor={true}>
    <div className="founders">
      <div className="founders-hero-photo">
        <div className="content">
          <div className="founders-hero-wrapper">
            <h1 className="founders-header light-text">
              Dorm Room Fund has invested in 305 founders from 40 universities.
            </h1>
            <div className="founders-hero-grid">
              <div className="left-part">
                <div className="left-first-row">
                  <div className="left-first-row-first-half tile">
                    <Link href="/muneeb-ali">
                      <a>
                        <img
                          className="tile-img"
                          src="/static/img/founders_compressed/blockstack2.jpg"
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
                    <Link href="/chris-gray">
                      <a>
                        <img
                          className="tile-img"
                          src="/static/img/founders_compressed/scholly.jpg"
                        />
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
                        src="/static/img/founders_compressed/brooklinen.jpg"
                      />
                      <div className="overlay-text card-text">
                        <div className="mobile-only">Vicki Fulop</div>
                        <div className="mobile-only">NYU &#39;07</div>
                        <div>
                          Rich Fulop (NYU &#39;14) & Vicki Fulop (NYU &#39;07)
                        </div>
                        <div>Brooklinen</div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="right-part tile">
                <Link href="/tim-hwang">
                  <a>
                    <img
                      className="tile-img fiscalnote"
                      src="/static/img/founders_compressed/fiscalnote.jpg"
                    />
                    <div className="overlay-text card-text">
                      <div className="mobile-only">Tim Hwang</div>
                      <div className="mobile-only">Princeton &#39;14</div>
                      <div>Tim Hwang (Princeton &#39;14)</div>
                      <div>FiscalNote</div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="founders-hero-grid-mobile" />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="founders-grid-wrapper">
          <h1 className="team-divider-title">Our Founders</h1>
          <hr className="team-divider" />
          <div className="founders-grid-container">
            <div className="founders-grid" data-column="3">
              {company_data
                .sort(
                  (a, b) =>
                    a.companyName < b.companyName
                      ? -1
                      : a.companyName > b.companyName ? 1 : 0
                )
                .map(c => <Company key={c.companyName} company={c} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
