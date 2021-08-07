import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
//import "bootstrap/dist/css/bootstrap.min.css";
import useStyles from "./styles.js";
import wordsToNumbers from "words-to-numbers";
import Nav from "./components/Navv.js";
import { Typography } from "@material-ui/core";
const alnKey =
  "fd254473c0f36a66e11d2be64c0fcf022e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  const classes = useStyles();
  useEffect(() => {
    alanBtn({
      key: alnKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;

          const article = articles[parsedNumber - 1];
          if (parsedNumber > articles.length) {
            alanBtn().playText("Please try that again...");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          } else {
            alanBtn().playText("Please try that again...");
          }
        }
      },
    });
  }, []);

  return (
    <div>
      <Nav />
      <div className={classes.logoContainer}>
        <img
          src="https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg"
          className={classes.alanLogo}
          alt="logo"
        />

        {newsArticles.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}>
              <Typography variant="h5" component="h2">
                Try saying: <br />
                <br />
                Open article number [4]
              </Typography>
            </div>
            <div className={classes.card}>
              <Typography variant="h5" component="h2">
                Try saying: <br />
                <br />
                Go back
              </Typography>
            </div>
            <div className={classes.card}>
              <Typography variant="h5" component="h2">
                <a
                  className={classes.link}
                  href="https://docs.google.com/document/d/1ZLcIORLOQh1PUr-L9GmnJMQvqYwzVJI_mJkM7qDPH1E/edit?usp=sharing"
                >
                  {" "}
                  <h4 className="linkcolor"> Click Here </h4>
                </a>{" "}
                <br /> To Know more about instructions
              </Typography>
            </div>
          </div>
        ) : null}
      </div>

      <NewsCards articles={newsArticles} activeArticle={activeArticle} />

      {!newsArticles.length ? (
        <div className={classes.footer}>
          <Typography variant="body1" component="h2">
            Created by
            <a
              className={classes.link}
              href="https://www.linkedin.com/in/itashi-pathria-9060761b2/"
            >
              {" "}
              ITASHI @Copyright 2021
            </a>{" "}
          </Typography>
        </div>
      ) : null}
    </div>
  );
};

export default App;
