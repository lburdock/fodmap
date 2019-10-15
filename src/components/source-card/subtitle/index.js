import PropTypes from "prop-types";
import React from "react";
import { hasItems, joinList } from "../../../utils/list";

const Subtitle = ({ list, prefix }) =>
  hasItems(list) ? (
    <p className="subtitle is-6 is-italic">
      {prefix && `${prefix} `}
      {joinList(list)}
    </p>
  ) : null;

Subtitle.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
  prefix: PropTypes.string,
};

Subtitle.defaultProps = {
  list: [],
  prefix: null,
};

export default Subtitle;
