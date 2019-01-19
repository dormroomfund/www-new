import { Component } from 'react';
import ramp from '../static/img/ramp.svg?original';
import ramp_mobile from '../static/img/ramp-mobile.svg?original';
import investor_firstround from '../static/img/investor-firstround.svg';
import investor_gv from '../static/img/investor-gv.svg';
import investor_sequoia from '../static/img/investor-sequoia.svg';
import investor_yc from '../static/img/investor-yc.svg';

export default class Hero extends Component {
  render() {
    return (
      <div>
        <div className="hero-container">
          <div className="content">
            <div className="hero-wrapper">
              <h1 className="hero-header">
                Hi. We&#39;re Dorm Room Fund—the best way for student founders
                to grow their startup.
              </h1>
              <p className="hero-subheader">
                Built by students and powered by First Round, we provide
                founders with a strong network of investors, world-class
                mentors, and a $20,000 check.
              </p>
            </div>
          </div>
          <object className="ramp" data={ramp} type="image/svg+xml" />
          <object
            className="ramp-mobile"
            data={ramp_mobile}
            type="image/svg+xml"
          />
        </div>
        <div className="section-logos">
          <div className="content">
            <div className="col-12">
              <div className="logos-wrapper">
                <h1>
                  We&#39;ve invested in 200 startups who&#39;ve raised $400
                  million from:
                </h1>
                <div className="logos">
                  <div className="content">
                    <div className="col-10 col-centered m-col-12">
                      <div className="content">
                        <div className="col-3 m-col-6">
                          <object
                            className="logo"
                            data={investor_firstround}
                            type="image/svg+xml"
                          />
                        </div>
                        <div className="col-3 m-col-6">
                          <object
                            className="logo"
                            data={investor_gv}
                            type="image/svg+xml"
                          />
                        </div>
                        <div className="col-3 m-col-6">
                          <object className="logo" data={investor_sequoia} />
                        </div>
                        <div className="col-3 m-col-6">
                          <object
                            className="logo"
                            data={investor_yc}
                            type="image/svg+xml"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
