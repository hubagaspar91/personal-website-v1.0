import Image from 'next/image';
import { ReactElement } from 'react';
import utilsStyles from '../../../styles/utils.module.css';
import InfiniteSlideshow from '../../misc/InfiniteSlideshow/InfiniteSlideshow';

function MainSlideshow(): ReactElement {
  const numbers = new Array(12);
  return (
    <div className={utilsStyles.section}>
      <InfiniteSlideshow>
        {numbers.map((_, index) => (
          <Image
            key={index}
            src={`/images/slide${index}.jpg`}
            width={450}
            height={600}
            layout="responsive"
          />
        ))}
      </InfiniteSlideshow>
    </div>
  );
}

export default MainSlideshow;
