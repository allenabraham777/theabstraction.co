<p align="center">
  <a href="https://www.theabstraction.co">
    <img alt="Gatsby" src="./src/images/logo.png" width="60" />
  </a>
</p>
<h1 align="center">
  The Abstraction
</h1>

This is the repo containing the source code for the official website for The Abstraction - [theabstraction.co](https://theabstraction.co)

## 🚀 Quick start

1.  **Install NodeJS**

    This website was developed in NodeJS version 13(LTS). If you are having different version of NodeJS, you can use ```nvm```to switch between the versions, follow official [docs](https://github.com/nvm-sh/nvm) to know more.

    ```shell
    nvm install 13
    nvm use 13
    ```

1.  **Install GatsbyJS**

    This website is a static site and is generated using GatsbyJS so you need to install gatsby-cli, follow official [docs](https://www.gatsbyjs.com/docs/tutorial/part-zero/#using-the-gatsby-cli) to install it.

    ```shell
    npm install -g gatsby-cli
    ```

1.  **Clone and start contributing.**

    Clone this repo, we need ```git``` for it and start using it.

    ```shell
    git clone https://github.com/abstractionhere/theabstraction.co.git theabstraction

    cd theabstraction
    
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in the src directory, it's the directory having the website contents.

    .
    ├── attributions
    ├── blogs
    ├── components
    ├── images
    ├── layouts
    ├── pages
    ├── styles
    └── templates

1.  **`attributions`**: Contains the credit page content stored in ```attributions.md```

2.  **`blogs`**: The contents for the blogs page is added here, each new directory created inside will be a new blog.

3.  **`components`**: Contains the website components.

4.  **`images`**: Contains the image assets used in the website.

5.  **`layouts`**: Contains the layout required for various pages.

6.  **`pages`**: Each page in the website is added here, a new ```*.js``` file added will be a new route.

7.  **`styles`**: Contains all stylessheets used in the website. We are using scss.

8.  **`templates`**: Dynamic contents require certain templates to get rendered, this directory contains those templates

## 🗒️ Post a blog

1. You need to create a new directory in the ```src/blogs```

2. Follow the convention ```yyyy-mm-dd_post-name```, if you are creating a folder post 1, create it as ```2021-02-13_post-1```.

3. Create an ```index.md``` file and add your contents to it, and its assets can be added to the same folder.

4. At the top you must add the frontmatter enclosed in 3 hyphens, else your blog will not be published.


```md
path: '/blogs/post-1'
date: '13-Feb-2020'
thumbnail: './thumbnail.jpg'
title: 'A new blog post'
description: 'A small description'
author: 'author_github_username'
name: 'Author name, this is to avoid github api complications'
published: false
```
Value for *published* is to be set as ```false```. Once the content is rviewed it will be set to ```true``` by the reviewers.

`There should not be conflict in the path name so please watchout.`

Visit [Gatsby markdown docs](https://www.gatsbyjs.com/docs/reference/markdown-syntax) to know more.

## Tools

### 💻 Static sit generation
[<img src="https://www.gatsbyjs.com/Gatsby-Logo.svg" height="50" >](https://www.gatsbyjs.com/)

### 🗣️ Comment section
#### 🔮 Utterances
[![Utterances](https://github.com/utterance.png?size=50)](https://utteranc.es/)
### 💫 Deployment
[![Netlify](https://www.netlify.com/img/press/logos/full-logo-light.svg)](https://www.netlify.com/)
