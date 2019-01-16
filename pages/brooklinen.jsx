import FoundersFeature from '../components/FoundersFeature';
import React from 'react';
import brooklinen_founder from '../static/img/founders_compressed/brooklinen.jpg';

export default () => (
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
);
