import {
  DescriptionItemBlock,
  ItemText,
  ImageThumb,
} from './DescriptionItem.styled';

import DescriptionImage1 from '../../images/description-image-1.svg';
import DescriptionImage2 from '../../images/description-image-2.svg';
import DescriptionImage3 from '../../images/description-image-3.svg';

const DescriptionItem = ({ listOfDescriptions }) => {
  console.log('listOfDescriptions', listOfDescriptions);
  let imageUrl;

  if (listOfDescriptions.image === 'DescriptionImage1') {
    imageUrl = DescriptionImage1;
  } else if (listOfDescriptions.image === 'DescriptionImage2') {
    imageUrl = DescriptionImage2;
  } else if (listOfDescriptions.image === 'DescriptionImage3') {
    imageUrl = DescriptionImage3;
  }

  return (
    <DescriptionItemBlock>
      <span>1.</span>
      <span>{listOfDescriptions.mark}</span>
      <h2>{listOfDescriptions.fieldname}</h2>
      <ItemText>{listOfDescriptions.review}</ItemText>
      <ImageThumb>
        <img src={imageUrl} alt="view" />
      </ImageThumb>
    </DescriptionItemBlock>
  );
};

export default DescriptionItem;
