import style from './MainWork.module.css';
import Section from '../../layout/Section/Section';
import { ReactElement } from 'react';
import List from '../../ui/List/List';
import Accordion from '../../ui/Accordion/Accordion';
import BodyText from '../../typography/BodyText/BodyText';
import { SectionTitles } from '../../../constants/SectionTitles';

function MainWork(): ReactElement {
  return (
    <Section title={SectionTitles.SECTION00}>
      <Accordion>
        <Accordion.Item>
          <Accordion.ItemHeader>
            <div>
              <BodyText tag="div" className={style.accordionTitle}>
                Tech Lead, Co-Founder - Omnimorphs
              </BodyText>
              <div className={style.accordionDate}>04.2021 - present</div>
            </div>
          </Accordion.ItemHeader>
          <Accordion.ItemBody>
            <List>
              <li>
                Co-founded an NFT collectible project based on the work of
                digital artist{' '}
                <a
                  target="_blank"
                  href="https://twitter.com/DanielTaylorArt"
                  rel="noreferrer"
                >
                  Daniel Taylor
                </a>
              </li>
              <li>
                Architected and implemented an array of EVM dApps, such as a
                successful, highly anticipated NFT drop, a unique, gamified NFT
                customization tool, and much more
              </li>
              <li>
                Wrote a suite of smart contracts with extensive unit testing and
                third-party security audits
              </li>
              <li>
                Technologies used: <u>Solidity</u>, <u>Hardhat</u>,{' '}
                <u>Node.js</u>, <u>TypeScript</u>, <u>Web3.js</u>,{' '}
                <u>Ethers.js</u>, <u>React</u>, <u>Next.js</u>, <u>MongoDB</u>,{' '}
                <u>Netlify</u>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://omnimorphs.com"
                  rel="noreferrer"
                >
                  omnimorphs.com
                </a>
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
              <div className={style.accordionDate}>01.2016 - present</div>
            </div>
          </Accordion.ItemHeader>
          <Accordion.ItemBody>
            <List>
              <li>
                Over the years took part in an array of projects as a contractor
              </li>
              <li>
                Advised and created smart contracts for multiple dApp projects
              </li>
              <li>
                Technologies used: <u>Solidity</u>, <u>Hardhat</u>, <u>Vue</u>,{' '}
                <u>React</u>, <u>Webpack</u>, <u>Node.js</u>, <u>Typescript</u>,{' '}
                <u>Jest</u>, <u>PHP</u>, <u>Magento 2</u>, <u>Mysql</u>,{' '}
                <u>MongoDB</u>, <u>Python</u>, etc.
              </li>
            </List>
          </Accordion.ItemBody>
        </Accordion.Item>
        <Accordion.Item>
          <Accordion.ItemHeader>
            <div>
              <BodyText tag="div" className={style.accordionTitle}>
                Full Stack Developer - Cleverclip
              </BodyText>
              <div className={style.accordionDate}>06.2020 - 05.2021</div>
            </div>
          </Accordion.ItemHeader>
          <Accordion.ItemBody>
            <List>
              <li>
                Full remote role in a design agency based in Bern, Switzerland,
                with mainly Swiss and German clients
              </li>
              <li>
                Plan, implement and deploy internal and client projects (web
                apps, websites)
              </li>
              <li>
                Technologies used: <u>Vue</u>, <u>Nuxt</u>, <u>Webpack</u>,{' '}
                <u>Jest</u>, <u>Tailwindcss</u>, <u>SCSS</u>, <u>Node</u>,{' '}
                <u>Express</u>, <u>MongoDB</u>, <u>Postgres</u>,{' '}
                <u>Strapi CMS</u>, <u>Netlify</u>, <u>Docker</u>,{' '}
                <u>docker-compose</u>, <u>Github actions</u>, etc.
              </li>
              <li className={style.linkListElement}>
                <a
                  target="_blank"
                  href="https://cleverclipstudios.com/en-ch/"
                  rel="noreferrer"
                >
                  cleverclipstudios.com
                </a>
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
              <div className={style.accordionDate}>03.2019 - 04.2020</div>
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
                Creating interfaces, tools, and services for both internal
                personnel (solution engineers) and end-users
              </li>
              <li>
                Serve as a subject matter expert in the team, in specifying and
                implementing integration-related features, building on my
                previous experience as a solution engineer
              </li>
              <li>
                I have extensively used the following frameworks, languages, and
                technologies: <u>Javascript</u>,{' '}
                <u>Vue (Vue Router, Vuex, Vue-CLI)</u>, <u>SCSS</u>, <u>LESS</u>
                , <u>Webpack</u>, <u>.NET Core</u>, <u>C#</u>, <u>Python</u>,{' '}
                <u>SQL</u>
              </li>
              <li className={style.linkListElement}>
                <a
                  target="_blank"
                  href="https://www.yusp.com/"
                  rel="noreferrer"
                >
                  yusp.com
                </a>
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
              <div className={style.accordionDate}>03.2017 - 03.2019</div>
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
                During this time (and since then too), Hotstar broke{' '}
                <a
                  target="_blank"
                  href="https://techcrunch.com/2019/05/12/hotstar-disneys-indian-streaming-service-sets-new-global-record-for-live-viewership"
                  rel="noreferrer"
                >
                  several online streaming world records
                </a>
              </li>
              <li>
                Technologies used: <u>Javascript</u>, <u>Python</u>, <u>Bash</u>
                , <u>SQL</u>
              </li>
              <li className={style.linkListElement}>
                <a
                  target="_blank"
                  href="https://www.yusp.com/"
                  rel="noreferrer"
                >
                  yusp.com
                </a>
              </li>
            </List>
          </Accordion.ItemBody>
        </Accordion.Item>
      </Accordion>
    </Section>
  );
}

export default MainWork;
