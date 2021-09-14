import React from "react";
import "./Readme.sass";

export default function Readme() {
  return (
    <div className="readme-section">
      <div className="readme">
        <br />
        <p>
          <a href="https://github.com/shake-lang/parse-utils/graphs/contributors">
            <img
              src="https://img.shields.io/github/contributors/shake-lang/parse-utils.svg?style=for-the-badge"
              alt="Contributors"
            />
          </a>
          <a href="https://github.com/shake-lang/parse-utils/network/members">
            <img
              src="https://img.shields.io/github/forks/shake-lang/parse-utils.svg?style=for-the-badge"
              alt="Forks"
            />
          </a>
          <a href="https://github.com/shake-lang/parse-utils/stargazers">
            <img
              src="https://img.shields.io/github/stars/shake-lang/parse-utils.svg?style=for-the-badge"
              alt="Stargazers"
            />
          </a>
          <a href="https://github.com/shake-lang/parse-utils/issues">
            <img
              src="https://img.shields.io/github/issues/shake-lang/parse-utils.svg?style=for-the-badge"
              alt="Issues"
            />
          </a>
          <a href="https://github.com/shake-lang/parse-utils/blob/master/LICENSE.txt">
            <img
              src="https://img.shields.io/github/license/shake-lang/parse-utils.svg?style=for-the-badge"
              alt="BSD-2-Clause"
            />
          </a>
        </p>
        <br />
        <p>
          <a href="https://github.com/shake-lang/parse-utils">
            <img
              src="https://raw.githubusercontent.com/shake-lang/parse-utils/master/.github/assets/parse-utils-header-x1024.png"
              alt="header-image"
            />
          </a>
          <a href="https://shake-lang.github.io/">
            <img
              src="https://raw.githubusercontent.com/shake-lang/parse-utils/master/.github/assets/parse-utils-by-shake-x1024.png"
              alt="sub-header-image"
            />
          </a>
        </p>
        <p style={{ textAlign: "center" }}>
          <p style={{ textAlign: "center" }}>
            <i>
              This package provides tools for some tools for parsing code
              <br />
              these tools are for example used by the shake compiler &amp;
              interpreter
            </i>
            <br />
            <a href="https://github.com/shake-lang/parse-utils">
              <strong>Explore the docs »</strong>
            </a>
            <br />
            <br />
            <a href="https://github.com/shake-lang/parse-utils">View Demo</a>·
            <a href="https://github.com/shake-lang/parse-utils/issues">
              Report Bug
            </a>
            ·
            <a href="https://github.com/shake-lang/parse-utils/issues">
              Request Feature
            </a>
          </p>
        </p>

        <details open>
          <summary>
            <h2 style={{ display: "inline-block" }}>Table of Contents</h2>
          </summary>
          <ol>
            <li>
              <a href="#about-the-project">About The Project</a>
              <ul>
                <li>
                  <a href="#built-with">Built With</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#getting-started">Getting Started</a>
              <ul>
                <li>
                  <a href="#prerequisites">Prerequisites</a>
                </li>
                <li>
                  <a href="#installation">Installation</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#usage">Usage</a>
            </li>
            <li>
              <a href="#building">Building</a>
            </li>
            <li>
              <a href="#roadmap">Roadmap</a>
            </li>
            <li>
              <a href="#contributing">Contributing</a>
            </li>
            <li>
              <a href="#license">License</a>
            </li>
          </ol>
        </details>

        <h2 id="about-the-project">About The Project</h2>
        <h3 id="built-with">Built With</h3>
        <ul>
          <li>
            <a href="https://kotlinlang.org/">Kotlin</a>
          </li>
          <li>
            <a href="https://gradle.org/">Gradle</a>
          </li>
        </ul>
        <h2 id="getting-started">Getting Started</h2>
        <p>To get a local copy up and running follow these simple steps.</p>
        <h3 id="prerequisites">Prerequisites</h3>
        <p>
          You should be using <a href="https://gradle.org/">Gradle</a>,{" "}
          <a href="https://maven.apache.org/">Maven</a> or something similar to
          import this as a dependency, or you can download a release from{" "}
          <a href="https://github.com/nsc-de/js-database/releases/">here</a> and
          link manually inside your IDE
        </p>
        <h3 id="installation">Installation</h3>
        <p>Add the dependency using gradle</p>
        <pre>
          <code className="lang-groovy">
            <span className="hljs-section">dependencies</span> {"{"}
            <br />
            &nbsp;&nbsp;<span className="hljs-attribute">
              implementation
            </span>{" "}
            <span className="hljs-string">
              'com.github.shakelang.parseutils:lib:0.1.0'
            </span>
            <br />
            {"}"}
          </code>
        </pre>
        <p>if you use a kotlin build script</p>
        <pre>
          <code className="lang-kotlin">
            dependencies {"{"}
            <br />
            &nbsp;&nbsp;<span className="hljs-keyword">implementation</span>(
            <span className="hljs-string">
              "com.github.shakelang.parseutils:lib:0.1.0"
            </span>
            )
            <br />
            {"}"}
          </code>
        </pre>
        <h2 id="usage">Usage</h2>
        <p>...</p>
        <p>
          <em>
            For more examples, please refer to the{" "}
            <a href="https://shake-lang.github.io/parse-utils">Documentation</a>
          </em>
        </p>
        <h2 id="building">Building</h2>
        <p>
          First clone the repository using{" "}
          <code>git clone https://shake-lang.github.io/parse-utils</code>
        </p>
        <p>
          If you are on linux you need to make the build script executable using
        </p>
        <pre>
          <code className="lang-sh">
            <span className="hljs-keyword">chmod</span> +
            <span className="hljs-keyword">x</span> gradlew
          </code>
        </pre>
        <p>now just build the project using</p>
        <pre>
          <code className="lang-sh">./gradlew build</code>
        </pre>
        <h2 id="roadmap">Roadmap</h2>
        <p>
          See the{" "}
          <a href="https://github.com/shake-lang/parse-utils/issues">
            open issues
          </a>{" "}
          for a list of proposed features (and known issues).
        </p>
        <h2 id="contributing">Contributing</h2>
        <p>
          Contributions are what make the open source community such an amazing
          place to learn, inspire, and create. Any contributions you make are{" "}
          <strong>greatly appreciated</strong>.
        </p>
        <ol>
          <li>Fork the Project</li>
          <li>
            Create your Feature Branch (
            <code>git checkout -b feature/AmazingFeature</code>)
          </li>
          <li>
            Commit your Changes (
            <code>git commit -m &#39;Add some AmazingFeature&#39;</code>)
          </li>
          <li>
            Push to the Branch (
            <code>git push origin feature/AmazingFeature</code>)
          </li>
          <li>Open a Pull Request</li>
        </ol>
        <h2 id="license">License</h2>
        <p>
          Distributed under the BSD-2-Clause License. See{" "}
          <a href="LICENSE">
            <code>LICENSE</code>
          </a>{" "}
          for more information.
        </p>
      </div>
    </div>
  );
}
