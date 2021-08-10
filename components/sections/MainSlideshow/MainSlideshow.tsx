import Image from 'next/image';
import { ReactElement } from 'react';
import utilsStyles from '../../../styles/utils.module.css';
import InfiniteSlideshow from '../../misc/InfiniteSlideshow/InfiniteSlideshow';

export type MainSlideShowProps = {
  slidePlaceholders: string[];
};

function MainSlideshow({
  slidePlaceholders
}: MainSlideShowProps): ReactElement {
  return (
    <div className={utilsStyles.section}>
      <InfiniteSlideshow>
        {Array.from({ length: 12 }, (v, i) => i).map((i) => (
          <Image
            key={i}
            src={`/images/slide${i}.jpg`}
            width={450}
            height={600}
            quality={65}
            sizes="20vw"
            layout="responsive"
            placeholder="blur"
            blurDataURL={slidePlaceholders[i]}
          />
        ))}
      </InfiniteSlideshow>
    </div>
  );
}

export default MainSlideshow;
