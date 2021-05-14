import style from './MainWork.module.css';
import Section from '../../layout/Section/Section';
import { ReactElement } from 'react';
import List from '../../ui/List/List';
import Accordion from '../../ui/Accordion/Accordion';
import BodyText from '../../typography/BodyText/BodyText';
import Lettuce from '../../misc/Lettuce/Lettuce';

function MainWork(): ReactElement {
  return (
    <Section title="00. Work">
      <Accordion>
        <Accordion.Item>
          <Accordion.ItemHeader>
            <div>
              <BodyText tag="div" className={style.accordionTitle}>
                Full Stack Developer - Cleverclip
              </BodyText>
              <div className={style.accordionDate}>01.06.2020 - 28.05.2021</div>
            </div>
          </Accordion.ItemHeader>
          <Accordion.ItemBody>
            <List>
              <li>
                Full remote role in a design agency based in Bern, Switzerland,
                with mainly Swiss and German clients
              </li>
              <li>
                Plan, implement and deploy internal and client projects
                (webapps, websites)
              </li>
              <li>
                Technologies used: <u>Vue</u>, <u>Nuxt</u>, <u>Webpack</u>,{' '}
                <u>Jest</u>, <u>Tailwindcss</u>, <u>SCSS</u>, <u>Node</u>,{' '}
                <u>Express</u>, <u>Mongodb</u>, <u>Postgres</u>,{' '}
                <u>Strapi CMS</u>, <u>Netlify</u>, <u>Docker</u>,{' '}
                <u>docker-compose</u>, <u>Github actions</u>, etc.
              </li>
            </List>
          </Accordion.ItemBody>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.ItemHeader>
            <div>
              <BodyText tag="div" className={style.accordionTitle}>
                Freelance Developer
              </BodyText>
              <div className={style.accordionDate}>01.01.2016 - present</div>
            </div>
          </Accordion.ItemHeader>
          <Accordion.ItemBody>
            <List>
              <li>
                Over the years took part in an array of projects as a contractor
              </li>
              <li>
                Technologies used: <u>Vue</u>, <u>Webpack</u>, <u>Typescript</u>
                , <u>Jest</u>, <u>React</u>, <u>Wordpress</u>, <u>Magento 2</u>,{' '}
                <u>Mysql</u>, <u>Mongodb</u>, <u>Python</u>, etc.
              </li>
            </List>
          </Accordion.ItemBody>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.ItemHeader>
            <div>
              <BodyText tag="div" className={style.accordionTitle}>
                Full Stack Developer - Yusp
              </BodyText>
              <div className={style.accordionDate}>01.03.2019 - 01.04.2020</div>
            </div>
          </Accordion.ItemHeader>
          <Accordion.ItemBody>
            <List>
              <li>
                Global machine learning solutions and recommendation engine
                vendor
              </li>
              <li>Frontend focus, with considerable backend work as well</li>
              <li>
                Creating interfaces, tools and services for both internal
                personnel (solution engineers) and end users
              </li>
              <li>
                Serve as a subject matter expert in the team, in specifying and
                implementing integration related features, building on my
                previous experience as a solution engineer
              </li>
              <li>
                I have extensively used the following frameworks, languages and
                technologies: <u>Javascript</u>,{' '}
                <u>Vue (Vue Router, Vuex, Vue-CLI)</u>, <u>SCSS</u>, <u>LESS</u>
                , <u>Webpack</u>, <u>.NET Core</u>, <u>C#</u>, <u>Python</u>,{' '}
                <u>SQL</u>
              </li>
            </List>
          </Accordion.ItemBody>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.ItemHeader>
            <div>
              <BodyText tag="div" className={style.accordionTitle}>
                Solution Engineer - Yusp
              </BodyText>
              <div className={style.accordionDate}>01.03.2017 - 01.03.2019</div>
            </div>
          </Accordion.ItemHeader>
          <Accordion.ItemBody>
            <List>
              <li>
                Global machine learning solutions and recommendation engine
                vendor
              </li>
              <li>
                Setting up and configuring the recommendation engine in
                co-operation with our clients from all over the world
              </li>
              <li>
                Create customized recommendation logics using our proprietary
                framework
              </li>
              <li>
                Custom-tailor and complement the recommender system&#39;s
                functionalities by writing scripts and services
              </li>
              <li>
                I had the opportunity to work on one of the largest and most
                exciting projects of the company, the content personalization of
                Hotstar, India&#39;s largest video streaming platform.
              </li>
              <li>
                During this time, Hotstar broke several online streaming world
                records
              </li>
              <li>
                Technologies used: <u>Javascript</u>, <u>Python</u>, <u>bash</u>
                , <u>SQL</u>
              </li>
            </List>
          </Accordion.ItemBody>
        </Accordion.Item>
      </Accordion>
    </Section>
  );
}

export default MainWork;
