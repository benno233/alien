

define(function (require, exports, module) {
    /**
     * @module ui/Prettify/
     * @reuqires core/dom/selector
     * @reuqires core/dom/attribute
     * @reuqires core/dom/modification
     * @reuqires ui/base
     */
    "use strict";

    var selector = require('../../core/dom/selector.js');
    var attribute = require('../../core/dom/attribute.js');
    var modification = require('../../core/dom/modification.js');
    var style = require('css!./style.css');
    var ui = require('../');
    var prettify = require('../../3rd/prettify.js');




    modification.importStyle(style);

    /**
     * 语法高亮
     * @param $pre {Element|Node|String} 节点或节点选择器
     * @example
     * var Prettify = require('ui/Prettify/');
     * var pf = new Prettify('pre');
     */
    module.exports = ui.create(function ($pre) {
        var the = this;

        the._options = {};
        the._$pres = selector.query($pre);
        attribute.addClass(the._$pres, 'prettyprint');
        prettify.prettyPrint(function () {
            /**
             * 代码美化完毕后
             * @event done
             */
            the.emit('done');
        });
    });
});