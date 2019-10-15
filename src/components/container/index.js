import cn from "classnames";
import PropTypes from "prop-types";
import React from "react";
import styles from "./index.module.css";

const Container = ({ children, className }) => (
  <div className={cn("container", styles.maxWidthContainer, className)}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Container.defaultProps = {
  className: "",
};

export default Container;
