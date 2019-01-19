import track1 from '../static/blueprint/track_1.png';
import track2 from '../static/blueprint/track_2.svg';
import tracksLogo from '../static/blueprint/tracks_logo.png';
import arrow2x from '../static/blueprint/arrow@2x.svg';
import roundArrow2x from '../static/blueprint/round_arrow@2x.svg';
import '../scss/blueprint.styl';

export default () => (
  <>
    <div className="track-container">
      <img src={track1} id="header-track" />
    </div>
    <div className="content">
      <img src={tracksLogo} className="logo" />
      <div className="page-title">
        <h1>Blueprint Project</h1>
        <div className="page-subtitle">
          A masterclassName aimed at empowering diverse founders.
          <p id="DRFsubtext">by Dorm Room Fund</p>
        </div>
      </div>

      <div className="description">
        Born out of a desire to scale the impact of minority founders in the
        startup ecosystem, Dorm Room Fund’s Blueprint Project is a 9-week
        program in New York City supporting underrepresented founders of color.
      </div>
      <div className="description d2">
        We’re looking for talented Black, Latinx, and Native American students
        and recent grads with an entrepreneurial mindset and a big idea. Sounds
        like you? Apply below.
      </div>
    </div>

    <div className="apply">
      <div className="content">
        <div className="title-section">
          <span className="subheading">
            The Blueprint Project is now accepting applications on a rolling
            basis.{' '}
            <a
              href="https://dormroomfund.typeform.com/to/qYBtPu"
              target="_blank"
            >
              {' '}
              Apply here
            </a>
            .
          </span>
        </div>
      </div>
    </div>

    <div className="content">
      <div className="more">
        <h3>...Heart Of The City</h3>
        <p>
          Leveraging the Silicon Alley resources, the Blueprint Project gives
          underrepresented minority founders an edge through:
        </p>
        <ol>
          <li>
            <span className="heavyWeight">
              Access to tech leaders that have walked in your shoes.
            </span>{' '}
            Founders and venture capitalists of color offering candid advice in
            a safe environment.
          </li>
          <li>
            <span className="heavyWeight">
              A curriculum crafted around the needs of today’s diverse
              entrepreneur.
            </span>{' '}
            Including sessions on scaling profitably, finding your first
            customer, navigating the venture capital space, and more.
          </li>
          <li>
            <span className="heavyWeight">
              Mentors that are dedicated to your success.
            </span>{' '}
            Technical operators, masters of scale, and growth hackers are on
            standby to help shape your business.
          </li>
          <li>
            <span className="heavyWeight">
              A community that catapults your little black book.
            </span>{' '}
            A value-rich community of your peers, Dorm Room Fund, and the
            prominent First Round Capital.
          </li>
        </ol>
      </div>
    </div>

    <div className="content">
      <div className="testimonials">
        <h3>Featured Speakers</h3>
        <p>Industry leaders with experience scaling big ideas.</p>
        <div className="track-container">
          <img src={track2} id="body-track" />
        </div>
        <div className="container">
          <div className="image-container">
            <img className="person" id="testimonial-image" />
            <div className="pager">
              <button id="previous-testimonial">
                <img src={roundArrow2x} className="pager-arrow left-arrow" />
              </button>
              <button id="next-testimonial">
                <img src={roundArrow2x} className="pager-arrow right-arrow" />
              </button>
            </div>
          </div>
          <div className="copy">
            <div className="header">
              <div className="name" id="testimonial-name" />
              <div className="title" id="testimonial-title" />
            </div>
          </div>
        </div>
      </div>

      <div className="curriculum">
        <h3>Curriculum</h3>
        <p>Blank pitch deck? We’ve got you covered.</p>
        <div className="line" />
        <div className="list-container">
          <div className="list">
            <div className="list-item">
              <img src={arrow2x} className="arrow" />
              Finding Product/Market Fit
            </div>
            <div className="list-item">
              <img src={arrow2x} className="arrow" />
              Valuing Your Potential Market
            </div>
            <div className="list-item">
              <img src={arrow2x} className="arrow" />
              Building Your Team
            </div>
          </div>
          <div className="list">
            <div className="list-item">
              <img src={arrow2x} className="arrow" />
              Customer Acquisition
            </div>
            <div className="list-item">
              <img src={arrow2x} className="arrow" />
              Developing a Path to Profitability
            </div>
            <div className="list-item">
              <img src={arrow2x} className="arrow" />
              Term Sheets and Cap Tables
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="black">
      <div className="content">
        <div className="faq">
          <h3>FAQ</h3>
          <div className="faq-list">
            <div className="faq-item">
              <div className="question">1. When should I apply?</div>
              <div className="answer">
                Applications are reviewed on a rolling basis until February
                15th. We encourage you to apply as soon as possible!
              </div>
            </div>
            <div className="faq-item">
              <div className="question">2. Who are you looking for?</div>
              <div className="answer">
                You must be an underrepresented minority student or recent grad
                (5 years or less out of an undergraduate or graduate program),
                have an idea you are actively working on, and have not raised
                more than 500K in institutional capital. We’re looking for smart
                entrepreneurs that have identified a critical problem and
                devised a unique solution.
              </div>
            </div>
            <div className="faq-item">
              <div className="question">3. What is the selection process?</div>
              <div className="answer">
                After reviewing your application, a member of our team may reach
                out to you to learn more via a phone interview. If selected,
                you’ll be invited to meet our team in person. We will notify all
                applicants of their status by February 24th.
              </div>
            </div>
            <div className="faq-item">
              <div className="question">4. What is the time commitment?</div>
              <div className="answer">
                From March 25 to May 19, participants will meet once a week for
                nine weeks on Thursday evenings. The application lists the dates
                of the sessions and we’ll need you to commit to attending every
                session. It’ll be worth it!
              </div>
            </div>
            <div className="faq-item">
              <div className="question">
                5. I have co-founders. How many of us can participate in the
                program?
              </div>
              <div className="answer">
                We will only accept one person per company. Your founder will be
                poised to share the wealth of knowledge after each session.
              </div>
            </div>
            <div className="faq-item">
              <div className="question">6. What is Dorm Room Fund?</div>
              <div className="answer">
                We're a student-run venture fund backed by First Round Capital.
                We invest in startups where at least one person on the founding
                team is a student (undergraduate or graduate). Our investment
                team is run by student leaders, entrepreneurs, and innovators
                across the country.
              </div>
            </div>
          </div>
          <div className="line" />
          <div className="about">
            <span className="copyright">Copyright January 2019</span>
          </div>
        </div>
      </div>
    </div>
  </>
);
