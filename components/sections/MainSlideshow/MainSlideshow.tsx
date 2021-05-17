import Image from 'next/image';
import { ReactElement } from 'react';
import utilsStyles from '../../../styles/utils.module.css';
import InfiniteSlideshow from '../../misc/InfiniteSlideshow/InfiniteSlideshow';

function MainSlideshow(): ReactElement {
  return (
    <div className={utilsStyles.section}>
      <InfiniteSlideshow>
        <Image src="/images/slide00.jpg" width={1536} height={2048} layout="responsive" />
        <Image src="/images/slide01.jpg" width={1536} height={2048} layout="responsive" />
        <Image src="/images/slide02.jpg" width={1536} height={2048} layout="responsive" />
        <Image src="/images/slide03.jpg" width={1536} height={2048} layout="responsive" />
        <Image src="/images/slide04.jpg" width={1536} height={2048} layout="responsive" />
        <Image src="/images/slide05.jpg" width={1536} height={2048} layout="responsive" />
        <Image src="/images/slide06.jpg" width={1536} height={2048} layout="responsive" />
        <Image src="/images/slide07.jpg" width={1536} height={2048} layout="responsive" />
        <Image src="/images/slide08.jpg" width={1536} height={2048} layout="responsive" />
        <Image src="/images/slide09.jpg" width={1536} height={2048} layout="responsive" />
        <Image src="/images/slide10.jpg" width={1536} height={2048} layout="responsive" />
        <Image src="/images/slide11.jpg" width={1536} height={2048} layout="responsive" />
      </InfiniteSlideshow>
    </div>
  );
}

export default MainSlideshow;
