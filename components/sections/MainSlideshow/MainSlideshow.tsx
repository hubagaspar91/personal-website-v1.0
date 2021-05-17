import Image from 'next/image';
import { ReactElement } from 'react';
import utilsStyles from '../../../styles/utils.module.css';
import InfiniteSlideshow from '../../misc/InfiniteSlideshow/InfiniteSlideshow';

function MainSlideshow(): ReactElement {
  return (
    <div className={utilsStyles.section}>
      <InfiniteSlideshow>
        <Image
          src="/images/slide0.jpg"
          width={450}
          height={600}
          layout="responsive"
        />
        <Image
          src="/images/slide1.jpg"
          width={450}
          height={600}
          layout="responsive"
        />
        <Image
          src="/images/slide2.jpg"
          width={450}
          height={600}
          layout="responsive"
        />
        <Image
          src="/images/slide3.jpg"
          width={450}
          height={600}
          layout="responsive"
        />
        <Image
          src="/images/slide4.jpg"
          width={450}
          height={600}
          layout="responsive"
        />
        <Image
          src="/images/slide5.jpg"
          width={450}
          height={600}
          layout="responsive"
        />
        <Image
          src="/images/slide6.jpg"
          width={450}
          height={600}
          layout="responsive"
        />
        <Image
          src="/images/slide7.jpg"
          width={450}
          height={600}
          layout="responsive"
        />
        <Image
          src="/images/slide8.jpg"
          width={450}
          height={600}
          layout="responsive"
        />
        <Image
          src="/images/slide9.jpg"
          width={450}
          height={600}
          layout="responsive"
        />
        <Image
          src="/images/slide10.jpg"
          width={450}
          height={600}
          layout="responsive"
        />
        <Image
          src="/images/slide11.jpg"
          width={450}
          height={600}
          layout="responsive"
        />
      </InfiniteSlideshow>
    </div>
  );
}

export default MainSlideshow;
