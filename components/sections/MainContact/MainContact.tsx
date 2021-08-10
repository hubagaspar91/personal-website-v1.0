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
        <form name="contact" action="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <input
            className={style.input}
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className={style.input}
            type="email"
            name="email"
            placeholder="Email"
          />
          <textarea
            name="message"
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
