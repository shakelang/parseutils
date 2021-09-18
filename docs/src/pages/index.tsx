import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.sass";
import HomepageFeatures from "../components/HomepageFeatures";
import Readme from "../components/Readme";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            ParseUtils documentation &nbsp;🚀
          </Link>
          &nbsp;
          <iframe
            src="https://ghbtns.com/github-btn.html?user=shakelang&repo=parseutils&type=star&count=true&size=large"
            frameBorder="0"
            scrolling="0"
            width="170"
            height="30"
            title="GitHub"
          />
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Documentation of ParseUtils API"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Readme />
      </main>
    </Layout>
  );
}
