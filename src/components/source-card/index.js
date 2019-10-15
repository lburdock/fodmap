import cn from "classnames";
import React from "react";
import PropTypes from "prop-types";
import { capitalize } from "../../utils/string";
import ExternalLink from "../external-link";
import Subtitle from "./subtitle";
import styles from "./index.module.css";

const iconMap = {
  journal: "fa-newspaper",
  website: "fa-laptop",
};

const SourceCard = ({ author, publisher, title, type, url }) => (
  <article className={cn("card", styles.sourceCard)}>
    <div className="card-content">
      <div className={cn("has-text-centered", styles.sourceIcon)}>
        <span className="icon is-medium">
          <i
            className={cn("fas fa-2x", iconMap[type])}
            title={capitalize(type)}
          />
        </span>
      </div>

      <h2 className="title is-5">{title}</h2>

      <Subtitle list={author} prefix="By" />

      <Subtitle list={publisher} />

      <ExternalLink to={url} className="button is-black is-fullwidth">
        Read more
      </ExternalLink>
    </div>
  </article>
);

SourceCard.propTypes = {
  author: PropTypes.arrayOf(PropTypes.string),
  publisher: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

SourceCard.defaultProps = {
  author: [],
  publisher: [],
};

export default SourceCard;
