import { LoaderWrapper } from './Loader.styled';
import { Hourglass } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <Hourglass
        height="80"
        width="80"
        colors={['#306cce', '#72a1ed']}
        ariaLabel="loader"
      />
    </LoaderWrapper>
  );
};