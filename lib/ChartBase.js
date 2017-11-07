import {PropTypes} from 'react';
import {
  View
} from 'react-native';

import {xAxisIface} from './AxisIface'

const descriptionIface = {
  text: PropTypes.string,
  textColor: PropTypes.number,
  textSize: PropTypes.number,

  positionX: PropTypes.number,  // 相对于视图左边的距离
  positionY: PropTypes.number, // 相对于视图顶部的距离

  fontFamily: PropTypes.string,
  fontStyle: PropTypes.number
};

const legendIface = {
  enabled: PropTypes.bool,

  textColor: PropTypes.number,
  textSize: PropTypes.number,
  fontFamily: PropTypes.string,
  fontStyle: PropTypes.number,

  wordWrapEnabled: PropTypes.bool,
  maxSizePercent: PropTypes.number,

  position: PropTypes.string,
  form: PropTypes.string,
  formSize: PropTypes.number,
  xEntrySpace: PropTypes.number,
  yEntrySpace: PropTypes.number,
  formToTextSpace: PropTypes.number,

  custom: PropTypes.shape({
    colors: PropTypes.arrayOf(PropTypes.number),
    labels: PropTypes.arrayOf(PropTypes.string)
  })
};

const chartIface = {
  propTypes: {
    ...View.propTypes,

    animation: PropTypes.shape({ // 入场动画，mutable
      durationX: PropTypes.number, // Millis 图像从X轴的入场动画，每个点入场的动画时间
      durationY: PropTypes.number, // Millis 图像从Y轴升起的动画时间

      easingX: PropTypes.string, // 动画方式
      easingY: PropTypes.string // 动画方式，取自下面枚举值
    //   public enum EasingOption {
    //     Linear,
    //     EaseInQuad,
    //     EaseOutQuad,
    //     EaseInOutQuad,
    //     EaseInCubic,
    //     EaseOutCubic,
    //     EaseInOutCubic,
    //     EaseInQuart,
    //     EaseOutQuart,
    //     EaseInOutQuart,
    //     EaseInSine,
    //     EaseOutSine,
    //     EaseInOutSine,
    //     EaseInExpo,
    //     EaseOutExpo,
    //     EaseInOutExpo,
    //     EaseInCirc,
    //     EaseOutCirc,
    //     EaseInOutCirc,
    //     EaseInElastic,
    //     EaseOutElastic,
    //     EaseInOutElastic,
    //     EaseInBack,
    //     EaseOutBack,
    //     EaseInOutBack,
    //     EaseInBounce,
    //     EaseOutBounce,
    //     EaseInOutBounce,
    // }
    }),

    chartBackgroundColor: PropTypes.number, // 整个Chart View的背景颜色， eg.: processColor('yellow')
    logEnabled: PropTypes.bool,
    noDataText: PropTypes.string, // 当data为空对象{}或者没有设置data属性的时候显示的字符串

    touchEnabled: PropTypes.bool, // 是否处理触摸事件
    dragDecelerationEnabled: PropTypes.bool, // If set to true, chart continues to scroll after touch up default: true 滑动后的减速惯性
    dragDecelerationFrictionCoef: (props, propName, componentName) => { // 摩擦系数 0到1之间，越大摩擦越小 0.99表现不错
      let coef = props[propName];
      if (coef && (typeof coef !== 'number' || coef < 0 || coef > 1)) {
        return new Error(
          `Invalid prop ${propName} supplied to '${componentName}'. Value must be number and between 0 and 1.`
        );
      }
    },

    chartDescription: PropTypes.shape(descriptionIface), // 图表描述文字

    legend: PropTypes.shape(legendIface), // 图例

    xAxis: PropTypes.shape(xAxisIface),

    marker: PropTypes.shape({ // 点击以后弹出的对于某个点的信息
      enabled: PropTypes.bool,
      markerColor: PropTypes.number,
      textColor: PropTypes.number,
      textSize: PropTypes.number,

    }),
  }
};

export default chartIface;
