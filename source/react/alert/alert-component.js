import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// components
import Button from '../button';
import Icon from '../icon';
//styles
import { styles as styl } from '@togakure/styles';
const styles = styl.alert;

/**
 * Alert component
 * @extends { PureComponent }
 * @class
 */
class Alert extends PureComponent {
  /**
   * @constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.getIcon = this.getIcon.bind(this);
  }

  /**
   * defaultProps
   * @property {String} type
   * @property {Function} onDismiss
   * @property {Boolean} showIcon
   * @property {Boolean} dark
   * @property {String} id
   * @property {String} headline
   * @property {Node} children
   */
  static defaultProps = {
    type: 'info',
    onDismiss: undefined,
    showIcon: false,
    dark: false,
    id: undefined,
    headline: undefined,
    children: undefined,
  };

  /**
   * propTypes
   * @property {String} type
   * @property {Function} onDismiss
   * @property {Boolean} showIcon
   * @property {Boolean} dark
   * @property {String} id
   * @property {String}  headline
   * @property {Node} children
   */
  static propTypes = {
    type: PropTypes.oneOf(['info', 'warning', 'success', 'danger']),
    onDismiss: PropTypes.func,
    showIcon: PropTypes.bool,
    dark: PropTypes.bool,
    id: PropTypes.string,
    headline: PropTypes.string,
    children: PropTypes.any.isRequired,
  };

  getIcon(type) {
    switch (type) {
      case 'info':
        return 'info';
      case 'success':
        return 'check';
      case 'warning':
        return 'warning';
      case 'danger':
        return 'notification';
    }
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    const { onDismiss, children, type, headline, showIcon, dark, className } = this.props;
    const classes = classnames(
      {
        [styles.dismissable]: onDismiss,
        [styles[type]]: type,
        [styles['alert--dark']]: dark,
        [styles['alert--icon']]: showIcon,
      },
      className
    );
    const icon = this.getIcon(type);

    if (!children) {
      return null;
    }

    return (
      <div data-testid="alert" className={classes}>
        {onDismiss && (
          <Button
            data-testid="alert-dismiss"
            styleType="transparent"
            size="none"
            className={styles.close}
            onClick={onDismiss}
          >
            <Icon name="close" size={16} />
          </Button>
        )}

        {showIcon && <Icon className={styles.icon} name={icon} size={24} />}
        <div className={styles.msgContainer}>
          {headline ? (
            <h4 data-testid="alert-title" className={styles.headline}>
              {headline}
            </h4>
          ) : null}
          <div className={styles.body}>{children}</div>
        </div>
      </div>
    );
  }
}

/**
 * @example <Alert />
 */
export default Alert;

