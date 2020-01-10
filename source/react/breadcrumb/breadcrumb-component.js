import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import BreadcrumbItem from './elements/breadcrumb-item';
//styles
import { styles as styl } from '@togakure/styles';
const styles = styl.breadcrumb;

/**
 * Breadcrumb component
 * @extends { PureComponent }
 * @class
 */
class Breadcrumb extends PureComponent {
  /**
   * defaultProps
   * @property {String} styleType
   */
  static defaultProps = {
    styleType: 'default',
  };

  /**
   * propTypes
   * @property {String} styleType
   * @property {String} className
   * @property {Node} children
   * @property {Array} items
   */
  static propTypes = {
    styleType: PropTypes.oneOf(['default', 'dark']),
    className: PropTypes.string,
    children: PropTypes.node,
    items: PropTypes.array,
  };

  getKey(slug) {
    return slug ? `breadcrumb-item-${slug}` : `breadcrumb-item-${Math.random()}`;
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    const { children, className, items, styleType, ...others } = this.props;

    return (
      <ol data-testid="breadcrumb" {...others} className={classnames(styles['breadcrumb-list'], className)}>
        {children
          ? children
          : items.map(item => (
              <BreadcrumbItem
                styleType={styleType}
                key={this.getKey(item.slug)}
                text={item.text}
                url={item.url}
                handleClick={item.handleClick}
              />
            ))}
      </ol>
    );
  }
}

/**
 * @example <Breadcrumb />
 */
export default Breadcrumb;
