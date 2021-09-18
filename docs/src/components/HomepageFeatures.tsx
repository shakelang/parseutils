/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.sass";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
  sizeClass?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Character Processing",
    image: `/img/undraw_utils_letter_factory_cloud.svg`,
    description: <>Parse Utils provides tools for parsing Strings</>,
  },
  /*
  {
    title: 'Easy to Use',
    image: '/img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    image: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    image: '/img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },*/
];

function Feature({ title, image, description, sizeClass }: FeatureItem) {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={clsx("col", sizeClass || "col--4", styles.feature)}>
      <div className="text--center">
        <img
          className={styles.featureSvg}
          alt={title}
          src={
            image.startsWith("/") ? siteConfig.baseUrl + image.substr(1) : image
          }
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx("row", styles.featuresContainer)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} sizeClass={`col--4`} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
