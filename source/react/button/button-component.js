import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
//styles
import { styles as styl } from '@togakure/styles';
const styles = styl.button;

/**
 * Button Component
 * @extends { PureComponent }
 * @class
 */
class Button extends PureComponent {
  /**
   * defaultProps
   * @property {Boolean} active
   * @property {Boolean} disabled
   * @property {Boolean} block
   * @property {Boolean} outline
   * @property {Boolean} rounded
   * @property {Boolean} circle
   * @property {Boolean} loading
   * @property {String} styleType
   * @property {String} size
   * @property {String} type
   * @property {Boolean} children
   */
  static defaultProps = {
    active: false,
    disabled: false,
    block: false,
    outline: false,
    rounded: false,
    circle: false,
    loading: false,
    styleType: 'default',
    size: 'medium',
    type: 'button',
    children: false,
  };

  /**
   * propTypes
   * @property {Boolean} active
   * @property {Boolean} disabled
   * @property {Boolean} block
   * @property {Boolean} outline
   * @property {Boolean} rounded
   * @property {Boolean} circle
   * @property {String} styleType
   * @property {String} loading
   * @property {String} size
   * @property {String} type
   * @property {Function} onClick
   * @property {Object} children
   */
  static propTypes = {
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    circle: PropTypes.bool,
    loading: PropTypes.bool,
    type: PropTypes.oneOf(['button', 'reset', 'submit']),
    styleType: PropTypes.oneOf(['default', 'primary', 'secondary', 'transparent', 'facebook', 'google']),
    size: PropTypes.oneOf(['mini', 'small', 'medium', 'large', 'none']),
    onClick: PropTypes.func,
    children: PropTypes.any.isRequired,
  };

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    const {
      active,
      outline,
      rounded,
      circle,
      block,
      styleType,
      size,
      disabled,
      loading,
      onClick,
      children,
      type,
      className,
      ...others
    } = this.props;

    const classes = classnames(
      {
        [`${styles[styleType]}`]: styleType,
        [`${styles[size]}`]: size,
        [`${styles.block}`]: block,
        [`${styles.outline}`]: outline,
        [`${styles.rounded}`]: rounded,
        [`${styles.circle}`]: circle,
        [`${styles.active}`]: active,
        [`${styles.loading}`]: loading,
      },
      className
    );

    if (!children) {
      return null;
    }

    return (
      <button data-testid="button" {...others} type={type} className={classes} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
  }
}

/**
 * @example <Button>Text</Button>
 */
export default Button;
