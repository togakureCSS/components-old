import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 * Icon component
 * @extends { PureComponent }
 * @class
 */
class Icon extends PureComponent {
  /**
   * @constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.IconPathLoader = this.IconPathLoader.bind(this);
  }

  /**
   * defaultProps
   * @property {String} styleType
   * @property {Number} size
   * @property {String} name
   */
  static defaultProps = {
    styleType: 'default',
    size: 24,
    name: 'plus',
  };

  /**
   * propTypes
   * @property {String} name
   * @property {String} size
   * @property {String/Number} size
   * @property {String/Number} width
   * @property {String/Number} height
   * @property {Object} style
   */
  static propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    styleType: PropTypes.oneOf(['default', 'small', 'large']),
    style: PropTypes.object,
  };

  IconPathLoader(name) {
    if (name) {
      try {
        return require(`!!babel-loader!svg-react-loader!../../../node_modules/@togakure/styles/lib/images/svg/icon/${name}.svg`);
      } catch (e) {
        return false;
      }
    }
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    let styles = {
      fill: this.props.color,
      verticalAlign: 'middle',
      width: this.props.size, // CSS instead of the width attr to support non-pixel units
      height: this.props.size, // Prevents scaling issue in IE
    };

    if (this.props.styleType === 'small') {
      styles.width = 16;
      styles.height = 16;
    }

    if (this.props.styleType === 'large') {
      styles.width = 48;
      styles.height = 48;
    }

    const { name, ...others } = this.props;
    const Component = this.IconPathLoader(name);

    if (!Component) {
      return null;
    }

    return <Component style={styles} {...others} />;
  }
}

/**
 * @example <Icon />
 */
export default Icon;
