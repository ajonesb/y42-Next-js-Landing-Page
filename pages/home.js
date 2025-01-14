import React from "react";
import Head from "next/head";
import styles from "./styles.module.scss";
import homeData from "./api/homeData";

// Components
import Nav from "../components/Nav/Nav";
import View from "../components/View/View";
import Button from "../components/Buttons/Button/Button";
import CheckboxYellow from "../components/Checkboxes/CheckboxYellow/CheckboxYellow";
import CheckboxPink from "../components/Checkboxes/CheckboxPink/CheckboxPink";
import CheckboxBlue from "../components/Checkboxes/CheckboxBlue/CheckboxBlue";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>Y42 - Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <View>
        <div className={styles.home__intro}>
          <img
            className={styles.home_cubes_left}
            src="./assets/home-cubes-left.svg"
          ></img>
          <img
            className={styles.home_cubes_right}
            src="./assets/home-cubes-top.svg"
          ></img>
          <div className={styles.home_mobile__background}></div>
          <div className={styles.home}>
            <div className={styles.title__container}>
              <h1 className={styles.title}>
                Choose the plan that fits your needs!
              </h1>
            </div>
            <div className={styles.intro__container}>
              <p className={styles.intro}>
                Lorem ipsum dolor sit amet, dolores antiopam argumentum ea pro,
                eu iuvaret legendos sententiae ius, pri dicit oporteat
                efficiendi an.
              </p>
            </div>

            {/* Plans Sections */}
            <div className={styles.plans_section__row}>
              <div
                className={`${styles.plans__section__flex} ${styles.plan__section__spacing}`}
              >
                <div className={styles.full_height}>
                  {/* Developer */}
                  <div className={styles.plan__section}>
                    <div className={styles.plan__title}>Developer</div>
                    <div className={styles.plan__description}>starting at</div>
                    <div
                      className={`${styles.plan__price} ${styles.price__orange}`}
                    >
                      49€
                    </div>
                    <div className={styles.plan__sub_price}>per month</div>
                    <div className={styles.plan__button}>
                      <Link href="https://www.y42.com/">
                        <a>
                          <Button variant="yellow">Get Plan</Button>
                        </a>
                      </Link>
                    </div>
                    <div className={styles.plan__details}>
                      <div className={styles.plan__details__list__item}>
                        <div className={styles.plan__details__checkbox}>
                          <CheckboxYellow />
                        </div>
                        <div className={styles.plan__detail}>
                          Automatic Product Tours
                        </div>
                      </div>
                      <div className={styles.plan__details__list__item}>
                        <div className={styles.plan__details__checkbox}>
                          <CheckboxYellow />
                        </div>
                        <div className={styles.plan__detail}>
                          GDPR (Highest Level Data Security)
                        </div>
                      </div>
                      <div className={styles.plan__details__list__item}>
                        <div className={styles.plan__details__checkbox}>
                          <CheckboxYellow />
                        </div>
                        <div className={styles.plan__detail}>
                          Developer Support
                        </div>
                      </div>
                      <div className={styles.plan__details__list__item}>
                        <div className={styles.plan__details__checkbox}>
                          <CheckboxYellow />
                        </div>
                        <div className={styles.plan__detail}>
                          Unlimited Datasources up to 1GB
                        </div>
                      </div>
                    </div>
                    <div className={styles.plan__see_all}>See All</div>
                  </div>
                </div>
              </div>

              <div className={styles.plans__section__flex}>
                <div className={styles.full_height}>
                  {/* Business */}
                  <div className={styles.plan__section}>
                    <div className={styles.plan__title}>Business</div>
                    <div className={styles.plan__description}>starting at</div>
                    <div
                      className={`${styles.plan__price} ${styles.price__pink}`}
                    >
                      49€
                    </div>
                    <div className={styles.plan__sub_price}>per month</div>
                    <div className={styles.plan__button}>
                      <Link href="https://www.y42.com/">
                        <a>
                          <Button variant="pink">Get Plan</Button>
                        </a>
                      </Link>
                    </div>
                    <div className={styles.plan__details}>
                      <div className={styles.plan__details__list__item}>
                        <div className={styles.plan__details__checkbox}>
                          <CheckboxPink />
                        </div>
                        <div className={styles.plan__detail}>
                          Automatic Product Tours
                        </div>
                      </div>
                      <div className={styles.plan__details__list__item}>
                        <div className={styles.plan__details__checkbox}>
                          <CheckboxPink />
                        </div>
                        <div className={styles.plan__detail}>
                          GDPR (Highest Level Data Security)
                        </div>
                      </div>
                      <div className={styles.plan__details__list__item}>
                        <div className={styles.plan__details__checkbox}>
                          <CheckboxPink />
                        </div>
                        <div className={styles.plan__detail}>
                          Developer Support
                        </div>
                      </div>
                      <div className={styles.plan__details__list__item}>
                        <div className={styles.plan__details__checkbox}>
                          <CheckboxPink />
                        </div>
                        <div className={styles.plan__detail}>
                          Unlimited Datasources up to 1GB
                        </div>
                      </div>
                    </div>
                    <div className={styles.plan__see_all}>See All</div>
                  </div>
                </div>
              </div>

              <div
                className={`${styles.plans__section__flex} ${styles.plan__section__spacing}`}
              >
                <div className={styles.full_height}>
                  {/* Enterprise */}
                  <div className={styles.plan__section}>
                    <div className={styles.plan__title}>Enterprise</div>
                    <div className={styles.plan__description}>
                      For Data Driven Companies
                    </div>
                    <div
                      className={`${styles.plan__price} ${styles.price__blue}`}
                    >
                      On Request
                    </div>
                    <div
                      className={`${styles.plan__sub_price} ${styles.price__hidden}`}
                    >
                      per month
                    </div>
                    <div className={styles.plan__button}>
                      <Link href="https://www.y42.com/">
                        <a>
                          <Button variant="blue">Get Plan</Button>
                        </a>
                      </Link>
                    </div>
                    <div className={styles.plan__details}>
                      <div className={styles.plan__details__list__item}>
                        <div className={styles.plan__details__checkbox}>
                          <CheckboxBlue />
                        </div>
                        <div className={styles.plan__detail}>
                          Automatic Product Tours
                        </div>
                      </div>
                      <div className={styles.plan__details__list__item}>
                        <div className={styles.plan__details__checkbox}>
                          <CheckboxBlue />
                        </div>
                        <div className={styles.plan__detail}>
                          GDPR (Highest Level Data Security)
                        </div>
                      </div>
                      <div className={styles.plan__details__list__item}>
                        <div className={styles.plan__details__checkbox}>
                          <CheckboxBlue />
                        </div>
                        <div className={styles.plan__detail}>
                          Developer Support
                        </div>
                      </div>
                      <div className={styles.plan__details__list__item}>
                        <div className={styles.plan__details__checkbox}>
                          <CheckboxBlue />
                        </div>
                        <div className={styles.plan__detail}>
                          Unlimited Datasources up to 1GB
                        </div>
                      </div>
                    </div>
                    <div className={styles.plan__see_all}>See All</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.home__features}>
          <div className={styles.grow_early_stage__module}>
            <div className={styles.grow_early_stage__module__content}>
              <h4 className={styles.grow_early_stage__content__title}>
                Grow your early stage startup
              </h4>
              <p className={styles.grow_early_stage__content__text}>
                Startups that are less then 2 years old with up to $5M in total
                funding receive $50,000 in credits towards the Datos growth
                plan.
              </p>
            </div>

            <div className={styles.grow_early_stage__content__button}>
              <Button variant="teal">Contact Us</Button>
            </div>
          </div>
        </div>
      </View>
    </>
  );
};

export default Home;
