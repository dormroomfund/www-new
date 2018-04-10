import FoundersFeature from '../components/FoundersFeature';

export default () => (
  <FoundersFeature
    name="Tim Hwang"
    photo="/static/img/founders_compressed/fiscalnote.jpg"
    company="FiscalNote"
    summary="Reinventing government influence."
    founders={['Tim Hwang, Princeton']}
    milestones={[
      'World Economic Forum Technology Pioneer',
      '$10M Series C — Feb. 2016',
      'Acquired VoterVoice — July 2017'
    ]}
    bio={
      'As a field organizer for the Obama ’08 campaign and later elected to the Montgomery County Board of Education to oversee a $4B budget, Tim learned a thing or two about politics.\nSitting in a Motel 6 in Silicon Valley during his time as a student at Harvard Business School, Tim launched FiscalNote to improve the way organizations engage with government. By empowering organizations to have maximum impact on legislation and regulation, global powerhouses all around the world rely on FiscalNote.\nTo date, the team has raised over $40M in funding from prominent investors and has been recognized as a Technology Pioneer by the World Economic Forum. Tim has been profiled in countless publications and has been recognized as a Forbes 30 Under 30 & Inc. 30 Under 30.'
    }
  />
);
