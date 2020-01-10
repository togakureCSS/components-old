import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
// components
import Button from '../button';
import Icon from '../icon';
//styles
import { styles as styl } from '@togakure/styles';
const styles = styl.tag;

/**
 * Tag component
 * @extends { PureComponent }
 * @class
 */
class Tag extends PureComponent {
  /**
   * @constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * defaultProps
   * @property {Any} children
   */
  static defaultProps = {
    children: false,
  };

  /**
   * propTypes
   * @property {Any} children
   * @property {Function} onRemove
   * @property {Function} onClick
   * @property {String} className
   */
  static propTypes = {
    children: PropTypes.any.isRequired,
    onRemove: PropTypes.func,
    onClick: PropTypes.func,
    className: PropTypes.string,
  };

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    const { children, onRemove, className, ...others } = this.props;

    if (!children) {
      return null;
    }

    return (
      <div data-testid="tag" {...others} className={classnames(styles.tag, className)}>
        {children}
        {onRemove && (
          <span className={styles['tag-close']}>
            <Button onClick={onRemove}>
              <Icon name="close" size={8} />
            </Button>
          </span>
        )}
      </div>
    );
  }
}

/**
 * @example <Tag />
 */
export default Tag;
