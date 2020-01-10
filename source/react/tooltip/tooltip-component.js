import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
//styles
import { styles as styl } from '@togakure/styles';
const styles = styl.tooltip;

/**
 * Tooltip Component
 * @extends { PureComponent }
 * @class
 */
class Tooltip extends PureComponent {
  /**
   * defaultProps
   * @property {Boolean} active
   * @property {String} position
   * @property {Number} arrowSize
   * @property {Number} width
   */
  static defaultProps = {
    active: false,
    position: 'top',
    arrowSize: 8,
    width: 200
  };
  /**
   * propTypes
   * @property {Boolean} active
   * @property {Object} children
   * @property {String/Node} content
   * @property {String} position
   * @property {Number} arrowSize
   * @property {Number/String} width
   */
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node.isRequired,
    content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
    position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    arrowSize: PropTypes.number,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };
  /**
   * @constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      active: props.active,
      position: props.position,
      width: props.width,
    };

    this.sourceRef = React.createRef();

    this.bind([
      'handleShow',
      'handleHide'
    ]);
  }

  bind (array) {
    array.forEach(method => {
      this[method] = this[method].bind(this);
    })
  }

  fixLeft() {
    const sourceRef = this.sourceRef.current.getBoundingClientRect();
    const tooltipSize = this.props.width + this.props.arrowSize;

    if (sourceRef.left < tooltipSize) {
      this.setState({
        position: 'top'
      });
    }
  }

  fixRight() {
    const sourceRef = this.sourceRef.current.getBoundingClientRect();
    const totalSize = sourceRef.right + this.props.width + this.props.arrowSize;
    const { clientWidth } = document.body;

    if (totalSize > clientWidth) {
      this.setState({
        position: 'top'
      });
    }
  }

  handleShow() {
    const { position } = this.state;
    switch(position) {
      case 'left':
        this.fixLeft();
        break;
      case 'right':
        this.fixRight();
        break;
    }

    this.setState({
      active: true
    });
  };

  handleHide() {
    this.setState({
      active: false,
    });
  };

  leftBottomTop() {
    const sourceRef = this.sourceRef.current.getBoundingClientRect();
    const { width } = this.state;
    const leftLess = sourceRef.left + sourceRef.width / 2 <= width / 2;
    const rightLess = sourceRef.right <= width / 2;
    const center = sourceRef.width / 2 - width / 2;
    const left = - sourceRef.left;
    const right = - sourceRef.right;

    if (leftLess) {
      return left;
    } else if (rightLess) {
      return right;
    }

    return center;
  }

  getPosition() {
    const { position, width } = this.state;
    const { arrowSize } = this.props;
    const { clientWidth } = document.body;
    const height = this.sourceRef.current.offsetHeight;
    let tooltip = {};

    // tooltip > width of document
    if (width > clientWidth) {
      this.setState({
        width: clientWidth,
      });
    }

    switch(position) {
      case 'left':
        tooltip.top = 0;
        tooltip.left = -(width + arrowSize);
        break;
      case 'right':
        tooltip.top = 0;
        tooltip.right = -(width + arrowSize);
        break;
      case 'bottom':
        tooltip.top = height + arrowSize;
        tooltip.left = this.leftBottomTop();
        break;
      default:
        tooltip.bottom = height + arrowSize;
        tooltip.left = this.leftBottomTop();
        break;
    }

    return tooltip;
  }

  renderContent() {
    const { active, position, width } = this.state;
    const { content } = this.props;

    if(!active) {
      return null;
    }

    return (
      <div className={classnames(styles.tooltip, {
        [styles['tooltip--top']] : position === 'top',
        [styles['tooltip--bottom']] : position === 'bottom',
        [styles['tooltip--left']] : position === 'left',
        [styles['tooltip--right']] : position === 'right'
      })} style={{...this.getPosition(), width }} id="tooltip-content" role="tooltip">
        <div className={styles['tooltip-content']}>{content}</div>
      </div>
    );
  };
  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    const { children } = this.props;

    return (
      <span
        onMouseEnter={this.handleShow}
        onMouseLeave={this.handleHide}
        role="button"
        onFocus={this.handleShow}
        onBlur={this.handleHide}
        ref={this.sourceRef}
        aria-describedby="tooltip-content"
        className={styles.wrap}
      >
        {this.renderContent()}
        {children}
      </span>
    );
  }
}

export default Tooltip;
