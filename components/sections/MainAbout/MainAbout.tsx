import style from './MainAbout.module.css';
import { ReactElement } from 'react';
import Section from '../../layout/Section/Section';
import BodyText from '../../typography/BodyText/BodyText';
import { SectionTitles } from '../../../constants/SectionTitles';

function MainAbout(): ReactElement {
  return (
    <Section title={SectionTitles.SECTION01}>
      <BodyText tag="div" className={style.body}>
        <p>
          I spent the first half of my twenties attending two universities at
          once, studying journalism and economics. Only to find out later that
          coding is what I really enjoy. Ever since, I’ve been spending an
          enormous chunk of my waking hours (one could argue, even too much)
          practicing or learning about this one activity.
        </p>
        <p>
          I am a full-stack developer with extensive experience in creating
          complex web applications. On top of a strong technical skillset, I
          have an affinity for translating business requirements into technical
          solutions and clearly articulating and documenting my work and ideas.
          I am mainly active in the web3/EVM ecosystem for the past ~2 years.
        </p>
        <p>
          After looking at screens for 8+ hours a day, I like to spend my free
          time with stuff that’s easy on the brain, like being outdoors or doing
          sports, but I also enjoy trashy horror/sci-fi movies and everything by
          Nicolas Cage.
        </p>
      </BodyText>
    </Section>
  );
}

export default MainAbout;
