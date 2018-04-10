import FoundersFeature from '../components/FoundersFeature';

export default () => (
  <FoundersFeature
    name="Muneeb Ali"
    photo="/static/img/founders_compressed/blockstack2.jpg"
    company="Blockstack"
    summary="A new internet for decentralized apps."
    founders={['Muneeb Ali, Princeton', 'Ryan Shea, Princeton']}
    milestones={[
      'Y Combinator - 2014',
      '$4M Series A led by USV - Jan. 2017',
      '$25M Signature Fund - Aug. 2017',
      'ICO - coming soon.'
    ]}
    bio={
      'Over 20 years ago as a child in Pakistan, Muneeb was offered a challenge by his mom: excel on your exams, and you’ll receive a computer.\nLittle did he know, that challenge would change his life. In his TEDx talk, Muneeb told the audience that the day he first accessed the Internet, he fell in love.\n20 years later, he set out to build a new internet.\nToday, the world’s most influential entrepreneurs, investors, and engineers are raving about the world-changing impact that blockchain will have on our society—furthermore, they’ve all got their sights set on Muneeb and co-founder Ryan Shea.\nLeading the pack of the decentralized revolution, the Blockstack founders have gotten backed by some of the world’s most prominent VCs, built a platform for thousands of developers to build technology off of, and have raised a $25M fund to keep supporting the blockchain ecosystem.\nBy turning a PhD dissertation into perhaps one of the most important companies in decades to come, Muneeb embodies the true meaning of a dorm room entrepreneur.'
    }
  />
);
