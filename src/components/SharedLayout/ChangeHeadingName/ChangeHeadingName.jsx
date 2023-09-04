import { useSelector } from 'react-redux';

const { Heading } = require('./ChangeHeadingName.styled');

const ChangeHeadingName = () => {
  //витягаємо зі стейту заголовок
  const title = useSelector(state => state.title);

  return <Heading>{title}</Heading>;
};
export default ChangeHeadingName;
