import scholly_founder from '../static/img/founders_compressed/scholly.jpg';
import FoundersFeature from '../components/FoundersFeature';
import React from 'react';

export default () => (
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
);
