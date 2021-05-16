import { ReactElement } from 'react';
import Section from '../../layout/Section/Section';
import BodyText from '../../typography/BodyText/BodyText';
import style from './MainContact.module.css';
import classNames from 'classnames';
import { SectionTitles } from '../../../constants/SectionTitles';

function MainContact(): ReactElement {
  return (
    <Section className={style.root} title={SectionTitles.SECTION02}>
      <BodyText tag="div">
        <form action="">
          <input className={style.input} type="text" placeholder="Name" />
          <input className={style.input} type="text" placeholder="Email" />
          <textarea
            className={classNames(style.input, style.textarea)}
            placeholder="Message"
          />
          <button className={style.submit} type="submit">
            Submit
          </button>
        </form>
      </BodyText>
    </Section>
  );
}

export default MainContact;
