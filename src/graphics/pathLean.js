/**
 * @file pathLean.js
 * @author mengke01
 * @date 
 * @description
 *  path倾斜变换
 */


define(
    function(require) {

        /**
         * path倾斜变换
         * 
         * @param {Object} contour 坐标点
         * @param {number} angle 角度
         * @param {number} offsetX x偏移
         * @param {number} offsetY y偏移
         * @return {number} contour 坐标点
         */
        function pathLean(contour, angle, offsetX, offsetY) {
            var angle = angle == undefined ? 0 : angle;
            var x = offsetX || 0;
            var y = offsetY || 0;
            var tan = Math.tan(angle);
            var px, py;

            // x 平移
            if (x == 0) {
                contour.forEach(function(p) {
                    p.x += tan * (p.y - offsetY);
                });
            }
            // y平移
            else {
                contour.forEach(function(p) {
                   p.y += tan * (p.x - offsetX);
                });
            }

            return contour;
        }

        return pathLean;
    }
);