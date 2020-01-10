import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
//styles
import { styles as styl } from '@togakure/styles';
const styles = styl.breadcrumb;

/**
 * BreadcrumbItem component
 * @extends { PureComponent }
 * @class
 */
class BreadcrumbItem extends PureComponent {
  /**
   * @constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * defaultProps
   * @property {String} styleType
   * @property {Boolean} url
   * @property {Boolean} text
   * @property {Function} handleClick
   */
  static defaultProps = {
    styleType: 'default',
    url: undefined,
    text: undefined,
    handleClick: () => {},
  };

  /**
   * propTypes
   * @property {String} styleType
   * @property {String} className
   * @property {String} url
   * @property {String} text
   * @property {Node} children
   * @property {Function} handleClick
   */
  static propTypes = {
    styleType: PropTypes.oneOf(['default', 'dark']),
    className: PropTypes.string,
    url: PropTypes.string,
    text: PropTypes.string,
    children: PropTypes.node,
    handleClick: PropTypes.func,
  };

  handleClick(event) {
    event.preventDefault();

    const { url } = this.props;
    this.props.handleClick(url);
  }

  renderContent(text, url, handleClick) {
    return url && handleClick ? (
      <a data-testid="breadcrumb-link" onClick={this.handleClick} className={styles['breadcrumb-link']}>
        {text}
      </a>
    ) : (
      <strong data-testid="breadcrumb-text" className={styles['breadcrumb-text']}>
        {text}
      </strong>
    );
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    const { text, children, styleType, className, url, handleClick, ...others } = this.props;

    return (
      <li
        data-testid="breadcrumb-item"
        {...others}
        className={classnames(styles['breadcrumb-item'], { [styles.dark]: styleType === 'dark' }, className)}
      >
        {children ? this.renderContent(children, url, handleClick) : this.renderContent(text, url, handleClick)}
      </li>
    );
  }
}

/**
 * @example <BreadcrumbItem />
 */
export default BreadcrumbItem;
