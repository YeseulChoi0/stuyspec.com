import React from "react";
import { Grid } from "react-bootstrap/lib";
import injectSheet from "react-jss";

import ArticleRow from "./ArticleRow";

const styles = {
  ArticleList: {
    padding: 0,
    width: "100%",
  },
  title: {
    color: "#000",
    fontFamily: "Canela",
    fontSize: "48px",
    fontWeight: 500,
    lineHeight: 1,
    marginBottom: "11px",
  },
  label: {
    borderBottom: "solid 1px #ddd",
    borderTop: "solid 1px #000",
    color: "#000",
    fontFamily: "Circular Std",
    fontSize: "13px",
    fontWeight: 300,
    padding: "4px 0",
    marginBottom: "22px",
  },
  voicesBanner: {
    marginBottom: "18px",
    width: "100%",
    "& img": {
      width: "100%",
      // styles for alt-text
      color: "#000",
      fontFamily: "Canela",
      fontSize: "48px",
      fontWeight: 500,
      lineHeight: 1,
    },
  },
};

const ArticleList = ({ classes, articles, title, label }) => {
  if (title !== "Recommended") {
    articles = articles.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at);
    });
  }
  return (
    <Grid className={classes.ArticleList}>
      {title &&
        (title === "VOICES" ? (
          // voices is the only section with art
          <figure className={classes.voicesBanner}>
            <img
              src="/img/voices_banner.png"
              alt="VOICES Banner by Vivian Lin (Class of '18)"
              title="Art by Vivian Lin (Class of '18)"
            />
          </figure>
        ) : (
          <p className={classes.title}>{title}</p>
        ))}
      {label && <p className={classes.label}>{label}</p>}
      {articles.map(article => {
        return <ArticleRow article={article} key={article.id} />;
      })}
    </Grid>
  );
};

export default injectSheet(styles)(ArticleList);
