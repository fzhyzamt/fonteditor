/**
 * @file CirclePoint.js
 * @author mengke01
 * @date 
 * @description
 * 绘制控制圆
 */


define(
    function(require) {

        var POINT_SIZE = 2;

        var proto = {
            
            type: 'cpoint',

            /**
             * 获取shape的矩形区域
             * 
             * @param {Object} shape shape数据
             * @param {Object} 矩形区域
             */
            getRect: function(shape) {
                return {
                    x: shape.x - POINT_SIZE,
                    y: shape.y - POINT_SIZE,
                    width: 2 * POINT_SIZE,
                    height: 2 * POINT_SIZE
                };
            },

            /**
             * 判断点是否在shape内部
             * 
             * @param {Object} shape shape数据
             * @param {number} x x偏移
             * @param {number} y y偏移
             * @param {boolean} 是否
             */
            isIn: function(shape, x, y) {
                return Math.pow(shape.x - x, 2) + Math.pow(shape.y - y, 2) <= Math.pow(POINT_SIZE * 2, 2);
            },

            /**
             * 绘制一个shape对象
             * 
             * @param {CanvasContext} ctx canvas的context
             * @param {Object} shape shape数据
             */
            draw: function(ctx, shape) {

                ctx.translate(0.5, 0.5);

                var x = Math.round(shape.x);
                var y = Math.round(shape.y);

                ctx.moveTo(x + POINT_SIZE, y);
                ctx.arc(x, y, POINT_SIZE, 0, Math.PI * 2, true);

                ctx.translate(-0.5, -0.5);
            }
        };



        return require('./Shape').derive(proto);
    }
);