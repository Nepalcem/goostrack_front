import {
  DescriptionItemBlock,
  DescriptionItemTextBlock,
  ItemNumber,
  ItemMarkBlock,
  ItemMark,
  ItemHeader,
  ItemText,
  ImageThumb,
  Img,
} from './DescriptionItem.styled';

//ПОЧАТОК ІМПОРТУ КАРТИНОК (відрефакторити в майбутньому отримання з бекенду)

//MOBILE
import DescriptionImageMobile1 from '../../images/mainPageImg/mobile/mobile_calendar.png';
import DescriptionImageMobile2 from '../../images/mainPageImg/mobile/mobile_sidebar.png';
import DescriptionImageMobile3 from '../../images/mainPageImg/mobile/mobile_all.png';

import DescriptionImageMobile1_2x from '../../images/mainPageImg/mobile/mobile_calendar@2x.png';
import DescriptionImageMobile2_2x from '../../images/mainPageImg/mobile/mobile_sidebar@2x.png';
import DescriptionImageMobile3_2x from '../../images/mainPageImg/mobile/mobile_all@2x.png';

//TABLET
import DescriptionImageTablet1 from '../../images/mainPageImg/tablet/tablet_calendar.png';
import DescriptionImageTablet2 from '../../images/mainPageImg/tablet/tablet_sidebar.png';
import DescriptionImageTablet3 from '../../images/mainPageImg/tablet/tablet_all.png';

import DescriptionImageTablet1_2x from '../../images/mainPageImg/tablet/tablet_calendar@2x.png';
import DescriptionImageTablet2_2x from '../../images/mainPageImg/tablet/tablet_sidebar@2x.png';
import DescriptionImageTablet3_2x from '../../images/mainPageImg/tablet/tablet_all@2x.png';

//DESKTOP
import DescriptionImageDesktop1 from '../../images/mainPageImg/desktop/desktop_calendar.png';
import DescriptionImageDesktop2 from '../../images/mainPageImg/desktop/desktop_sidebar.png';
import DescriptionImageDesktop3 from '../../images/mainPageImg/desktop/desktop_all.png';

import DescriptionImageDesktop1_2x from '../../images/mainPageImg/desktop/desktop_calendar@2x.png';
import DescriptionImageDesktop2_2x from '../../images/mainPageImg/desktop/desktop_sidebar@2x.png';
import DescriptionImageDesktop3_2x from '../../images/mainPageImg/desktop/desktop_all@2x.png';

//КІНЕЦЬ ІМПОРТУ КАРТИНОК (відрефакторити в майбутньому отримання з бекенду)

const DescriptionItem = ({ listOfDescriptions }) => {
  // console.log('listOfDescriptions', listOfDescriptions);

  //ВИЗНАЧЕННЯ ЛІНКІВ КАРТИНОК
  //(відрефакторити в майбутньому отримання з бекенду)
  let imageUrlMobile,
    imageUrlMobile_2x,
    imageUrlTablet,
    imageUrlTablet_2x,
    imageUrlDesktop,
    imageUrlDesktop_2x;

  if (listOfDescriptions.image === 'DescriptionImage1') {
    imageUrlMobile = DescriptionImageMobile1;
    imageUrlMobile_2x = DescriptionImageMobile1_2x;
    imageUrlTablet = DescriptionImageTablet1;
    imageUrlTablet_2x = DescriptionImageTablet1_2x;
    imageUrlDesktop = DescriptionImageDesktop1;
    imageUrlDesktop_2x = DescriptionImageDesktop1_2x;
  } else if (listOfDescriptions.image === 'DescriptionImage2') {
    imageUrlMobile = DescriptionImageMobile2;
    imageUrlMobile_2x = DescriptionImageMobile2_2x;
    imageUrlTablet = DescriptionImageTablet2;
    imageUrlTablet_2x = DescriptionImageTablet2_2x;
    imageUrlDesktop = DescriptionImageDesktop2;
    imageUrlDesktop_2x = DescriptionImageDesktop2_2x;
  } else if (listOfDescriptions.image === 'DescriptionImage3') {
    imageUrlMobile = DescriptionImageMobile3;
    imageUrlMobile_2x = DescriptionImageMobile3_2x;
    imageUrlTablet = DescriptionImageTablet3;
    imageUrlTablet_2x = DescriptionImageTablet3_2x;
    imageUrlDesktop = DescriptionImageDesktop3;
    imageUrlDesktop_2x = DescriptionImageDesktop3_2x;
  }

  // КІНЕЦЬ ВИЗНАЧЕННЯ ЛІНКІВ КАРТИНОК

  return (
    <DescriptionItemBlock>
      <DescriptionItemTextBlock>
        <ItemNumber>{listOfDescriptions.number}.</ItemNumber>

        {listOfDescriptions.mark && (
          <ItemMarkBlock>
            <ItemMark>{listOfDescriptions.mark}</ItemMark>
          </ItemMarkBlock>
        )}

        <ItemHeader>{listOfDescriptions.fieldname}</ItemHeader>
        <ItemText>{listOfDescriptions.review}</ItemText>
      </DescriptionItemTextBlock>

      <ImageThumb>
        <picture>
          <source
            srcset={`${imageUrlDesktop}    1x,
                    ${imageUrlDesktop_2x}  2x`}
            media="(min-width: 1440px)"
          />
          <source
            srcset={`${imageUrlMobile}    1x,
                    ${imageUrlMobile_2x}  2x`}
            media="(max-width: 767px)"
          />
          <source
            srcset={`${imageUrlTablet}    1x,
                    ${imageUrlTablet_2x}  2x`}
            media="(min-width: 768px)"
          />

          <Img
            src="./images/worker-1-desktop.jpg"
            alt={listOfDescriptions.fieldname}
          />
        </picture>
        {/* <img src={imageUrl} alt="view" /> */}
      </ImageThumb>
    </DescriptionItemBlock>
  );
};

export default DescriptionItem;
