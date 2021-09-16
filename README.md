[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![BSD-2-Clause][license-shield]][license-url]




<!-- PROJECT LOGO -->
<br />

[![header-image][header-image]][header-link]
[![sub-header-image][sub-header-image]][sub-header-link]

<p align="center">

  <p align="center">
    <i>
        This package provides tools for some tools for parsing code
        <br/>
        these tools are for example used by the shake compiler & interpreter 
    </i>
    <br />
    <a href="https://github.com/shakelang/parseutils"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/shakelang/parseutils">View Demo</a>
    ·
    <a href="https://github.com/shakelang/parseutils/issues">Report Bug</a>
    ·
    <a href="https://github.com/shakelang/parseutils/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#building">Building</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->

## About The Project

### Built With

* [Kotlin](https://kotlinlang.org/)
* [Gradle](https://gradle.org/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites
You should be using [Gradle](https://gradle.org/), [Maven](https://maven.apache.org/) or something similar to import 
this as a dependency, or you can download a release from [here](https://github.com/nsc-de/js-database/releases/) and 
link manually inside your IDE


### Installation

Add the dependency using gradle
```groovy
dependencies {
    implementation 'com.github.shakelang.parseutils:lib:0.1.0'
}
```

if you use a kotlin build script
```kotlin
dependencies {
    implementation("com.github.shakelang.parseutils:lib:0.1.0")
}
```


<!-- USAGE EXAMPLES -->

## Usage

...

_For more examples, please refer to the [Documentation](https://shakelang.github.io/parseutils)_


<!-- Building -->

## Building

First clone the repository using `git clone https://shakelang.github.io/parseutils`

If you are on linux you need to make the build script executable using 
```sh
chmod +x gradlew
```

now just build the project using

```sh
./gradlew build
```


<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/shakelang/parseutils/issues) for a list of proposed features (and known
issues).


<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any
contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the BSD-2-Clause License. See [`LICENSE`](LICENSE) for more information.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[header-image]: .github/assets/parseutils-header-x1024.png
[header-link]: https://shakelang.github.io/parseutils
[sub-header-image]: .github/assets/parseutils-by-shake-x1024.png
[sub-header-link]: https://shakelang.github.io/
[contributors-shield]: https://img.shields.io/github/contributors/shakelang/parseutils.svg?style=for-the-badge
[contributors-url]: https://github.com/shakelang/parseutils/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/shakelang/parseutils.svg?style=for-the-badge
[forks-url]: https://github.com/shakelang/parseutils/network/members
[stars-shield]: https://img.shields.io/github/stars/shakelang/parseutils.svg?style=for-the-badge
[stars-url]: https://github.com/shakelang/parseutils/stargazers
[issues-shield]: https://img.shields.io/github/issues/shakelang/parseutils.svg?style=for-the-badge
[issues-url]: https://github.com/shakelang/parseutils/issues
[license-shield]: https://img.shields.io/github/license/shakelang/parseutils.svg?style=for-the-badge
[license-url]: https://github.com/shakelang/parseutils/blob/master/LICENSE.txt


