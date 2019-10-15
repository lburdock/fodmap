import cn from "classnames";
import PropTypes from "prop-types";
import React from "react";

const Message = ({ children, className, header }) => (
  <article className={cn("message", className.container)}>
    <div className={cn("message-header", className.header)}>
      <p>{header}</p>
    </div>
    <div className={cn("message-body", className.body)}>{children}</div>
  </article>
);

Message.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.shape({
    body: PropTypes.string,
    container: PropTypes.string,
    header: PropTypes.string,
  }),
  header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

Message.defaultProps = {
  className: {},
};

export default Message;
