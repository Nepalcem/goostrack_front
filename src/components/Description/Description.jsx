import DescriptionItem from 'components/DescriptionItem/DescriptionItem';
import { DescriptionBlock, DescriptionContainer } from './Description.styled';

const listOfDescriptions = [
  {
    number: '1',
    mark: 'Calendar',
    fieldname: 'view',
    review:
      "GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.",
    image: 'DescriptionImage1',
  },
  {
    number: '2',
    fieldname: 'SIDEBAR',
    review:
      'GooseTrack offers easy access to your account settings, calendar, and filters. The "My Account" section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.',
    image: 'DescriptionImage2',
  },
  {
    number: '3',
    mark: 'all in',
    fieldname: 'one',
    review:
      'GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.',
    image: 'DescriptionImage3',
  },
];

const Description = () => {
  return (
    <DescriptionBlock>
      <DescriptionContainer>
        <DescriptionItem listOfDescriptions={listOfDescriptions[0]} />
        <DescriptionItem listOfDescriptions={listOfDescriptions[1]} />
        <DescriptionItem listOfDescriptions={listOfDescriptions[2]} />
      </DescriptionContainer>
    </DescriptionBlock>
  );
};

export default Description;
