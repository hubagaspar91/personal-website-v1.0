import style from './MainAbout.module.css';
import { ReactElement } from 'react';
import Section from '../../layout/Section/Section';
import BodyText from '../../typography/BodyText/BodyText';

function MainAbout(): ReactElement {
  return (
    <Section title="01. About">
      <BodyText tag="div" className={style.body}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at
          velit vitae diam gravida lobortis. Etiam hendrerit, justo in placerat
          molestie, sem ligula tincidunt turpis, tempor vestibulum quam justo eu
          augue.
        </p>
        <p>
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Suspendisse venenatis risus quis purus
          venenatis, at feugiat purus ultricies. Nulla interdum enim ut risus
          condimentum faucibus.
        </p>
        <p>
          Cras aliquam hendrerit magna id volutpat. Maecenas tellus diam,
          tincidunt quis urna volutpat, bibendum convallis sapien. Aenean
          tincidunt, ex molestie gravida efficitur, est tellus ornare dui, vitae
          mollis risus orci et arcu. Nam elementum sagittis libero vitae
          convallis.
        </p>
      </BodyText>
    </Section>
  );
}

export default MainAbout;
