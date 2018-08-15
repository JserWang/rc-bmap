'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @fileoverview 百度地图的测距工具类，对外开放。
 * 允许用户在地图上点击完成距离的测量。
 * 使用者可以自定义测距线段的相关样式，例如线宽、颜色、测距结果所用的单位制等等。
 * 主入口类是<a href="symbols/BMapLib.DistanceTool.html">DistanceTool</a>，
 * 基于Baidu Map API 1.2。
 *
 * @author Baidu Map Api Group 
 * @version 1.2
 */
(function (root, factory) {
    if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
        var instance = factory();
        root.BMapLib = root.BMapLib || {};
        root.BMapLib.TrafficControl = root.BMapLib.TrafficControl || instance;
        module.exports = instance;
    } else if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        root.BMapLib = root.BMapLib || {};
        root.BMapLib.TrafficControl = root.BMapLib.TrafficControl || factory();
    }
})(window, function () {
    //声明baidu包
    var T,
        baidu = T = baidu || {
        version: "1.3.9"
    };
    //提出guid，防止在与老版本Tangram混用时
    //在下一行错误的修改window[undefined]
    baidu.guid = "$BAIDU$";
    //闭包，里边是所用到的tangram的方法
    (function () {
        /** @ignore
         * @namespace baidu.dom 操作dom的方法。
         */
        baidu.dom = baidu.dom || {};

        /* @ignore
        * @namespace baidu.event 屏蔽浏览器差异性的事件封装。
        * @property target 	事件的触发元素
        * @property pageX 		鼠标事件的鼠标x坐标
        * @property pageY 		鼠标事件的鼠标y坐标
        * @property keyCode 	键盘事件的键值
        */
        baidu.event = baidu.event || {};

        /* @ignore
        * @namespace baidu.lang 对语言层面的封装，包括类型判断、模块扩展、继承基类以及对象自定义事件的支持。
        */
        baidu.lang = baidu.lang || {};

        /* @ignore
        * @namespace baidu.browser 判断浏览器类型和特性的属性。
        */
        baidu.browser = baidu.browser || {};
        /**
         * 为目标元素添加className
         * @name baidu.dom.addClass
         * @function
         * @grammar baidu.dom.addClass(element, className)
         * @param {HTMLElement|string} element 目标元素或目标元素的id
         * @param {string} className 要添加的className，允许同时添加多个class，中间使用空白符分隔
         * @remark
         * 使用者应保证提供的className合法性，不应包含不合法字符，className合法字符参考：http://www.w3.org/TR/CSS2/syndata.html。
         * @shortcut addClass
         * @meta standard
         * @see baidu.dom.removeClass
         *
         *
         * @returns {HTMLElement} 目标元素
         */
        baidu.dom.addClass = function (element, className) {
            element = baidu.dom.g(element);
            var classArray = className.split(/\s+/),
                result = element.className,
                classMatch = " " + result + " ",
                i = 0,
                l = classArray.length;

            for (; i < l; i++) {
                if (classMatch.indexOf(" " + classArray[i] + " ") < 0) {
                    result += (result ? ' ' : '') + classArray[i];
                }
            }

            element.className = result;
            return element;
        };

        // 声明快捷方法
        baidu.addClass = baidu.dom.addClass;
        /**
         * 移除目标元素的className
         * @name baidu.dom.removeClass
         * @function
         * @grammar baidu.dom.removeClass(element, className)
         * @param {HTMLElement|string} element 目标元素或目标元素的id
         * @param {string} className 要移除的className，允许同时移除多个class，中间使用空白符分隔
         * @remark
         * 使用者应保证提供的className合法性，不应包含不合法字符，className合法字符参考：http://www.w3.org/TR/CSS2/syndata.html。
         * @shortcut removeClass
         * @meta standard
         * @see baidu.dom.addClass
         *
         * @returns {HTMLElement} 目标元素
         */
        baidu.dom.removeClass = function (element, className) {
            element = baidu.dom.g(element);

            var oldClasses = element.className.split(/\s+/),
                newClasses = className.split(/\s+/),
                lenOld,
                lenDel = newClasses.length,
                j,
                i = 0;
            //考虑到同时删除多个className的应用场景概率较低,故放弃进一步性能优化
            // by rocy @1.3.4
            for (; i < lenDel; ++i) {
                for (j = 0, lenOld = oldClasses.length; j < lenOld; ++j) {
                    if (oldClasses[j] == newClasses[i]) {
                        oldClasses.splice(j, 1);
                        break;
                    }
                }
            }
            element.className = oldClasses.join(' ');
            return element;
        };

        // 声明快捷方法
        baidu.removeClass = baidu.dom.removeClass;

        /**
         * 获取目标元素的computed style值。如果元素的样式值不能被浏览器计算，则会返回空字符串（IE）
         *
         * @author berg
         * @name baidu.dom.getComputedStyle
         * @function
         * @grammar baidu.dom.getComputedStyle(element, key)
         * @param {HTMLElement|string} element 目标元素或目标元素的id
         * @param {string} key 要获取的样式名
         *
         * @see baidu.dom.getStyle
         *
         * @returns {string} 目标元素的computed style值
         */

        baidu.dom.getComputedStyle = function (element, key) {
            element = baidu.dom._g(element);
            var doc = baidu.dom.getDocument(element),
                styles;
            if (doc.defaultView && doc.defaultView.getComputedStyle) {
                styles = doc.defaultView.getComputedStyle(element, null);
                if (styles) {
                    return styles[key] || styles.getPropertyValue(key);
                }
            }
            return '';
        };
        /**
         * 获取目标元素的样式值
         * @name baidu.dom.getStyle
         * @function
         * @grammar baidu.dom.getStyle(element, key)
         * @param {HTMLElement|string} element 目标元素或目标元素的id
         * @param {string} key 要获取的样式名
         * @remark
         *
         * 为了精简代码，本模块默认不对任何浏览器返回值进行归一化处理（如使用getStyle时，不同浏览器下可能返回rgb颜色或hex颜色），也不会修复浏览器的bug和差异性（如设置IE的float属性叫styleFloat，firefox则是cssFloat）。<br />
         * baidu.dom._styleFixer和baidu.dom._styleFilter可以为本模块提供支持。<br />
         * 其中_styleFilter能对颜色和px进行归一化处理，_styleFixer能对display，float，opacity，textOverflow的浏览器兼容性bug进行处理。
         * @shortcut getStyle
         * @meta standard
         * @see baidu.dom.setStyle,baidu.dom.setStyles, baidu.dom.getComputedStyle
         *
         * @returns {string} 目标元素的样式值
         */

        baidu.dom.getStyle = function (element, key) {
            var dom = baidu.dom;

            element = dom.g(element);
            var value = element.style[key] || (element.currentStyle ? element.currentStyle[key] : "") || dom.getComputedStyle(element, key);

            return value;
        };

        // 声明快捷方法
        baidu.getStyle = baidu.dom.getStyle;

        /**
         * 获取目标元素所属的document对象
         * @name baidu.dom.getDocument
         * @function
         * @grammar baidu.dom.getDocument(element)
         * @param {HTMLElement|string} element 目标元素或目标元素的id
         * @meta standard
         * @see baidu.dom.getWindow
         *
         * @returns {HTMLDocument} 目标元素所属的document对象
         */
        baidu.dom.getDocument = function (element) {
            element = baidu.dom.g(element);
            return element.nodeType == 9 ? element : element.ownerDocument || element.document;
        };

        /**
         * 从文档中获取指定的DOM元素
         * @name baidu.dom.g
         * @function
         * @grammar baidu.dom.g(id)
         * @param {string|HTMLElement} id 元素的id或DOM元素
         * @shortcut g,T.G
         * @meta standard
         * @see baidu.dom.q
         *
         * @returns {HTMLElement|null} 获取的元素，查找不到时返回null,如果参数不合法，直接返回参数
         */
        baidu.dom.g = function (id) {
            if ('string' == typeof id || id instanceof String) {
                return document.getElementById(id);
            } else if (id && id.nodeName && (id.nodeType == 1 || id.nodeType == 9)) {
                return id;
            }
            return null;
        };
        // 声明快捷方法
        baidu.g = baidu.G = baidu.dom.g;
        /**
         * 从文档中获取指定的DOM元素
         * **内部方法**
         *
         * @param {string|HTMLElement} id 元素的id或DOM元素
         * @meta standard
         * @return {HTMLElement} DOM元素，如果不存在，返回null，如果参数不合法，直接返回参数
         */
        baidu.dom._g = function (id) {
            if (baidu.lang.isString(id)) {
                return document.getElementById(id);
            }
            return id;
        };

        // 声明快捷方法
        baidu._g = baidu.dom._g;

        /**
         * 判断目标参数是否string类型或String对象
         * @name baidu.lang.isString
         * @function
         * @grammar baidu.lang.isString(source)
         * @param {Any} source 目标参数
         * @shortcut isString
         * @meta standard
         * @see baidu.lang.isObject,baidu.lang.isNumber,baidu.lang.isArray,baidu.lang.isElement,baidu.lang.isBoolean,baidu.lang.isDate
         *
         * @returns {boolean} 类型判断结果
         */
        baidu.lang.isString = function (source) {
            return '[object String]' == Object.prototype.toString.call(source);
        };

        // 声明快捷方法
        baidu.isString = baidu.lang.isString;

        /**
         * 事件监听器的存储表
         * @private
         * @meta standard
         */
        baidu.event._listeners = baidu.event._listeners || [];
        /**
         * 为目标元素添加事件监听器
         * @name baidu.event.on
         * @function
         * @grammar baidu.event.on(element, type, listener)
         * @param {HTMLElement|string|window} element 目标元素或目标元素id
         * @param {string} type 事件类型
         * @param {Function} listener 需要添加的监听器
         * @remark
         *
        1. 不支持跨浏览器的鼠标滚轮事件监听器添加<br>
        2. 改方法不为监听器灌入事件对象，以防止跨iframe事件挂载的事件对象获取失败
          * @shortcut on
        * @meta standard
        * @see baidu.event.un
        *
        * @returns {HTMLElement|window} 目标元素
        */
        baidu.event.on = function (element, type, listener) {
            type = type.replace(/^on/i, '');
            element = baidu.dom._g(element);

            var realListener = function realListener(ev) {
                // 1. 这里不支持EventArgument,  原因是跨frame的事件挂载
                // 2. element是为了修正this
                listener.call(element, ev);
            },
                lis = baidu.event._listeners,
                filter = baidu.event._eventFilter,
                afterFilter,
                realType = type;
            type = type.toLowerCase();
            // filter过滤
            if (filter && filter[type]) {
                afterFilter = filter[type](element, type, realListener);
                realType = afterFilter.type;
                realListener = afterFilter.listener;
            }

            // 事件监听器挂载
            if (element.addEventListener) {
                element.addEventListener(realType, realListener, false);
            } else if (element.attachEvent) {
                element.attachEvent('on' + realType, realListener);
            }

            // 将监听器存储到数组中
            lis[lis.length] = [element, type, listener, realListener, realType];
            return element;
        };

        // 声明快捷方法
        baidu.on = baidu.event.on;

        /**
         * 为目标元素移除事件监听器
         * @name baidu.event.un
         * @function
         * @grammar baidu.event.un(element, type, listener)
         * @param {HTMLElement|string|window} element 目标元素或目标元素id
         * @param {string} type 事件类型
         * @param {Function} listener 需要移除的监听器
         * @shortcut un
         * @meta standard
         * @see baidu.event.on
         *
         * @returns {HTMLElement|window} 目标元素
         */
        baidu.event.un = function (element, type, listener) {
            element = baidu.dom._g(element);
            type = type.replace(/^on/i, '').toLowerCase();

            var lis = baidu.event._listeners,
                len = lis.length,
                isRemoveAll = !listener,
                item,
                realType,
                realListener;

            //如果将listener的结构改成json
            //可以节省掉这个循环，优化性能
            //但是由于un的使用频率并不高，同时在listener不多的时候
            //遍历数组的性能消耗不会对代码产生影响
            //暂不考虑此优化
            while (len--) {
                item = lis[len];

                // listener存在时，移除element的所有以listener监听的type类型事件
                // listener不存在时，移除element的所有type类型事件
                if (item[1] === type && item[0] === element && (isRemoveAll || item[2] === listener)) {
                    realType = item[4];
                    realListener = item[3];
                    if (element.removeEventListener) {
                        element.removeEventListener(realType, realListener, false);
                    } else if (element.detachEvent) {
                        element.detachEvent('on' + realType, realListener);
                    }
                    lis.splice(len, 1);
                }
            }

            return element;
        };

        // 声明快捷方法
        baidu.un = baidu.event.un;

        ///import baidu.browser;
        if (/msie (\d+\.\d)/i.test(navigator.userAgent)) {
            //IE 8下，以documentMode为准
            //在百度模板中，可能会有$，防止冲突，将$1 写成 \x241
            /**
             * 判断是否为ie浏览器
             * @property ie ie版本号
             * @grammar baidu.browser.ie
             * @meta standard
             * @shortcut ie
             * @see baidu.browser.firefox,baidu.browser.safari,baidu.browser.opera,baidu.browser.chrome,baidu.browser.maxthon
             */
            baidu.browser.ie = baidu.ie = document.documentMode || +RegExp['\x241'];
        }

        /**
         * @namespace baidu.platform 判断平台类型和特性的属性。
         */
        baidu.platform = baidu.platform || {};

        /**
         * 判断是否为iphone平台
         * @property iphone 是否为iphone平台
         * @grammar baidu.platform.iphone
         * @meta standard
         * @see baidu.platform.x11,baidu.platform.windows,baidu.platform.macintosh,baidu.platform.ipad,baidu.platform.android
         */
        baidu.platform.isIphone = /iphone/i.test(navigator.userAgent);

        /**
         * 判断是否为android平台
         * @property android 是否为android平台
         * @grammar baidu.platform.android
         * @meta standard
         * @see baidu.platform.x11,baidu.platform.windows,baidu.platform.macintosh,baidu.platform.iphone,baidu.platform.ipad
         * @author jz
         */
        baidu.platform.isAndroid = /android/i.test(navigator.userAgent);
        /*
        * Tangram
        * Copyright 2009 Baidu Inc. All rights reserved.
        */

        ///import baidu.platform;

        /**
         * 判断是否为ipad平台
         * @property ipad 是否为ipad平台
         * @grammar baidu.platform.ipad
         * @meta standard
         * @see baidu.platform.x11,baidu.platform.windows,baidu.platform.macintosh,baidu.platform.iphone,baidu.platform.android   
         * @author jz
         */
        baidu.platform.isIpad = /ipad/i.test(navigator.userAgent);

        /**
         * 是否为移动平台
         * @returns {Boolean}
         */
        baidu.isMobile = function () {
            return !!(baidu.platform.isIphone || baidu.platform.isIpad || baidu.platform.isAndroid);
        };
    })();

    var stylePrefix = baidu.isMobile() ? "_mobile" : "_deskTop";

    /**
     * @exports TrafficControl as BMapLib.TrafficControl
     */
    var TrafficControl =
    /**
     * TrafficControl类的构造函数
     * @class 交通流量控件 <b>入口</b>。
     * 实例化该类后，通过addControl()方法，将控件添加到地图上
      * @constructor
    * @example <b>参考示例：</b><br />
    * var map = new BMap.Map("container");<br />map.centerAndZoom(new BMap.Point(116.404, 39.915), 15);<br />var ctrl = new BMapLib.TrafficControl();<br />map.addControl(ctrl);
    */

    function TrafficControl(options) {
        // 默认停靠位置和偏移量
        this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT;
        this.defaultOffset = new BMap.Size(10, 10);
        this.showPanel = options && options.showPanel;
    };
    // 继承Control
    TrafficControl.prototype = new BMap.Control();
    /**
     * 实现父类的initialize方法
     * @ignore
     * @param {Map} map Baidu map的实例对象
      * @example <b>参考示例：</b><br />
    * var traffic = new BMapLib.TrafficControl.initialize(map);
    */
    TrafficControl.prototype.initialize = function (map) {
        var btn = create("div", {
            "title": "显示交通流量",
            "id": "tcBtn",
            "class": "maplibTcBtn" + stylePrefix + " maplibTcBtnOff" + stylePrefix
        });
        map.getContainer().appendChild(btn);
        this._map = map;

        this._popUpDiv(this, btn);
        var me = this;
        this.btn = btn;
        //将创建的dom元素返回
        return btn;
    };

    /**
     * popUpDiv 类的构造函数
     * @class 私有类，创建交通流量控制面板。
     * 实例化该类后，即可调用该类提供的show
     * 方法打开控制面板。
     *
     * @constructor
     * @param {TrafficControl} TrafficControl的实例对象
     * @param {DOM} button 创建的DOM按钮
      * @example <b>参考示例：</b><br />
    * var pop = new BMapLib.TrafficControl._popUpDiv(map);<br/>pop.show();
    */
    TrafficControl.prototype._popUpDiv = function (me, btn) {
        var me = this;
        var arrRealTimeTxt = ["查看实时路况", "流量预测"];
        var arrPredictionTxt = ["查看流量预测", "实时路况"];
        //是否是实时路况
        var bRealTime = true;
        //该弹出层是打开还是关闭状态
        this.bShow = false;
        var thisPop = this;
        //重置绑定状态
        thisPop._bind = false;

        //将弹出div的HTML插入到dom中
        insertHTML(btn, "afterEnd", genHtml());
        insertHTML(btn, "afterEnd", genHtml_mobile());

        //将用到的dom元素都存到变量中
        var viewPreDom = baidu.g("tcViewPrediction");
        var dvPredition = baidu.g("tcPredition");
        var dvTcTitle = baidu.g("tcTitle");
        var dvTcDay = baidu.g("maplibTcDay");
        var dvTcNow = baidu.g("tcNow");
        var dvTcWrap = baidu.g("tcWrap");
        var dvTcTimeBox = baidu.g("tcTimeBox");
        var dvTcUpdate = baidu.g("tcUpdate");

        var weekName = ["一", "二", "三", "四", "五", "六", "日"];

        //处理拖动时间条动作
        var timeline = new setBar(me);
        /**
         * 显示控制面板             *
         * @return 无返回值
         *
         * @example <b>参考示例：</b><br />
         * pop.show();
         */
        this.show = function () {
            initialize();
            me.bShow = true;
            baidu.dom.removeClass(btn, "maplibTcBtnOff" + stylePrefix);
        };
        /**
         * 隐藏控制面板             *
         * @return 无返回值
         *
         * @example <b>参考示例：</b><br />
         * pop.hide();
         */
        this.hide = function () {
            me.bShow = false;
            baidu.dom.addClass(btn, "maplibTcBtnOff" + stylePrefix);
            if (baidu.isMobile()) {
                baidu.dom.addClass("tcWrap_mobile", "maplibTfctrHide");
            } else {
                baidu.dom.addClass("tcWrap", "maplibTcHide");
                baidu.dom.addClass("tcPredition", "maplibTcHide");
            }
            me.hideTraffic();
        };
        /**
         * 返回该控制面板的状态             *
         * @return {Boolean} bShow 返回该控制面板的状态
         *
         * @example <b>参考示例：</b><br />
         * pop.show();
         */
        this.isbShow = function () {
            return me.bShow;
        };
        /**
         * 定位控制面板
         * @param {Size} size 百度地图基础类size
         * @return 无返回值
         *
         * @example <b>参考示例：</b><br />
         * pop.setPopOffset();
         */
        this.setPopOffset = function (size) {
            var controlHeight = 24;
            //弹出层的offset
            var offsetH = size.height + controlHeight + "px";
            var offsetW = size.width + "px";

            switch (me.getAnchor()) {
                //左上
                case BMAP_ANCHOR_TOP_LEFT:
                    dvTcWrap.style.top = offsetH;
                    dvTcWrap.style.left = offsetW;
                    break;
                //右上
                case BMAP_ANCHOR_TOP_RIGHT:
                    dvTcWrap.style.top = offsetH;
                    dvTcWrap.style.right = offsetW;
                    break;
                //右下
                case BMAP_ANCHOR_BOTTOM_RIGHT:
                    dvTcWrap.style.bottom = offsetH;
                    dvTcWrap.style.right = offsetW;
                    break;
                //左下
                case BMAP_ANCHOR_BOTTOM_LEFT:
                    dvTcWrap.style.bottom = offsetH;
                    dvTcWrap.style.left = offsetW;
                    break;
            }
        };
        var eventName = baidu.isMobile() ? "ontouchend" : "onclick";
        //绑定事件，控制弹出层的显示跟隐藏
        baidu.event.on(btn, eventName, function () {
            showOrHidePopDiv();
        });
        baidu.event.on("tcClose", "click", function (e) {
            showOrHidePopDiv();
        });
        //控制弹出层跟trafficLayer的隐藏或者显示。
        function showOrHidePopDiv() {
            if (!thisPop.isbShow()) {
                thisPop.setPopOffset(me.getOffset());
                thisPop.show();
            } else {

                thisPop.hide();
            }
        }
        //初始化面板的状态
        function initialize() {
            dvTcDay.innerHTML = "更新时间";
            dvTcTitle.innerHTML = arrPredictionTxt[1];
            viewPreDom.innerHTML = arrPredictionTxt[0];
            baidu.dom.addClass(dvPredition, "maplibTcHide");
            dvTcUpdate.style.display = "block";

            bRealTime = true;
            if (baidu.isMobile()) {
                if (me.showPanel) {
                    baidu.dom.removeClass("tcWrap_mobile", "maplibTfctrHide");
                }
            } else {
                baidu.dom.removeClass("tcWrap", "maplibTcHide");
            }

            //初始化a的状态
            var arrA = baidu.g("tcWeek").getElementsByTagName("a");
            for (var i = 0; i < 7; i++) {
                arrA[i].className = '';
            }

            //获取服务器时间
            var curTimeUrl = "http://its.map.baidu.com:8002/traffic/GetCurrentTime?callback=BMapLib.TrafficControl.getTime&";
            scriptRequest(curTimeUrl + new Date().getTime(), callback);
            //3分钟刷新一次,先清除之前可能存在的timer
            if (me.timer) clearInterval(me.timer);
            me.timer = setInterval(function () {
                scriptRequest(curTimeUrl + new Date().getTime(), function () {
                    if (me.bShow) {
                        var t = TrafficControl.curTime;
                        var tHour = t.getHours();
                        var time = (tHour < 10 ? "0" + tHour : tHour) + ":" + (t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes());
                        dvTcNow.innerHTML = time;
                        me.hideTraffic();
                        me.showTraffic();
                    }
                });
            }, 1000 * 3 * 60);

            function callback() {
                var t = TrafficControl.curTime;
                var tHour = t.getHours();

                //是否绑定了事件，防止重复绑定
                if (!thisPop._bind) {
                    bindEventToPopDiv(me);
                    //私有方法 绑定点击周一到周日事件
                    bindEventToWeek(me);
                    thisPop._bind = true;
                }
                var time = (tHour < 10 ? "0" + tHour : tHour) + ":" + (t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes());
                dvTcNow.innerHTML = time;
                me.hour = tHour;
                //0为周日，6为周六，转换成1-7对应周一到周日
                me.weekday = t.getDay() == 0 ? 7 : t.getDay();
                me.time = time;
                timeline.setBarTime(tHour);
            }
        }

        //生成手机下的弹出html
        function genHtml_mobile() {
            return '<div class="maplibTfctr maplibTfctrHide" id="tcWrap_mobile" style="position: absolute; z-index: 10; -webkit-text-size-adjust: none; bottom: 17px; right: auto; top: auto; left:50%;margin-left:-4.5em;"><div class="maplibTfctr_l"></div><div class="maplibTfctr_c">实时路况</div><div class="maplibTfctr_status"><span class="maplibR">堵</span><span class="maplibY">缓</span><span class="maplibG">畅</span></div></div>';
        }

        //生成弹出div中的html
        function genHtml() {
            var html = ['<div class="maplibTc maplibTcHide" id="tcWrap">'];
            html.push('<div class="maplibTcColor" id="tcTitle">实时路况</div>');
            html.push('<div id="tcRealTime">');
            html.push('<div class="maplibTcTime"><span id="maplibTcDay" class="maplibTcCurTime">更新时间</span><span><span class="maplibTcColon">：&nbsp;</span><span class="maplibTcCurTime" id="tcNow"></span><span title="更新" id="tcUpdate" class="maplibTcUpdate"></span> <a href="javascript:void(0)" class="maplibTcView" id="tcViewPrediction">查看流量预测</a><button class="maplibTcClose" id="tcClose"></button></div></div>');
            html.push('<div id="tcPredition" class="maplibTcHide">');
            html.push('<div class="maplibTcWeekDay"><span>星期</span><ul id="tcWeek"><li><a lang="1" href="javascript:void(0)">一</a></li><li><a lang="2" href="javascript:void(0)">二</a></li><li><a lang="3" href="javascript:void(0)">三</a></li><li><a lang="4" href="javascript:void(0)">四</a></li><li><a lang="5" href="javascript:void(0)">五</a></li><li><a lang="6" href="javascript:void(0)">六</a></li><li><a lang="7" href="javascript:void(0)">日</a></li></ul></div>');
            html.push('<div><div class="maplibTcRuleTxt">时间</div>');
            html.push('<div class="maplibTcRule">');
            html.push('<div><div class="maplibTcTimeBox" id="tcTimeBox">20:00</div></div>');
            html.push('<div class="maplibTcTimeline" >');
            html.push('<div class="maplibTcTimelinePrev" id="tcPrev"></div>');
            html.push('<div class="maplibTcTimeMove" id="tcMove"></div>');
            html.push('<div class="maplibTcTimelineNext" id="tcNext"></div>');
            html.push('</div></div></div>');
            html.push('<div class="maplibTcClear" style="text-align: center; color: #ccc;">（基于历史流量统计预测 仅供参考）</div>');
            html.push('</div></div></div>');

            return html.join("");
        }

        //给弹出层中的按钮绑定事件
        function bindEventToPopDiv(me) {

            baidu.event.on("tcViewPrediction", "click", function () {
                //如果当前是实时流量，就显示预测流量，相当于toggle
                if (bRealTime) {
                    //显示预测交通流量
                    showPrediction();
                } else {
                    //实时路况
                    initialize();
                }
            });

            //显示预测流量
            function showPrediction() {
                //清除 每3分钟调用1次实时流量的timer
                if (me.timer) clearInterval(me.timer);
                dvTcTitle.innerHTML = arrRealTimeTxt[1];
                viewPreDom.innerHTML = arrRealTimeTxt[0];
                baidu.dom.removeClass(dvPredition, "maplibTcHide");
                dvTcUpdate.style.display = "none";
                bRealTime = false;
                dvTcDay.innerHTML = "星期" + weekName[me.weekday - 1];
                //设置预测流量的时间
                dvTcNow.innerHTML = dvTcTimeBox.innerHTML;
                me.showTraffic({
                    predictDate: {
                        hour: me.hour,
                        weekday: me.weekday
                    }
                });
            }
            baidu.event.on("tcUpdate", "click", function () {
                initialize();
            });
        }

        //更新文字，只在预测流量中调用
        function updateTimeTxt() {
            dvTcDay.innerHTML = "星期" + weekName[me.weekday - 1];
            dvTcNow.innerHTML = dvTcTimeBox.innerHTML;
        }

        //绑定预测流量点击事件,周一到周日
        function bindEventToWeek(me) {
            baidu.event.on("tcWeek", "onclick", function (e) {
                var elem = e.target || e.srcElement;
                if (elem.tagName.toLowerCase() == "a") {
                    var arrA = baidu.g("tcWeek").getElementsByTagName("a");
                    for (var i = 0; i < 7; i++) {
                        arrA[i].className = '';
                    }
                    baidu.dom.addClass(elem, "maplibTcOn");
                    me.weekday = parseInt(attr(elem, "lang"), 10);
                    updateTimeTxt();
                    me.showTraffic({
                        predictDate: {
                            hour: me.hour,
                            weekday: me.weekday
                        }
                    });
                }
            });
        }

        //时间条相关类
        function setBar(me) {
            var hour;
            var bt = baidu.g("tcMove");

            //开始拖动
            function dragStart(e) {
                baidu.on(document, "onmousemove", dragIng);
                baidu.on(document, "onmouseup", dragEnd);
                if (e && e.preventDefault) {
                    e.preventDefault();
                } else {
                    window.event.returnValue = false;
                }
                return false;
            }

            //拖动进行中
            function dragIng(e) {
                var x = e.clientX || e.x;
                var left = getPosition(baidu.G("tcPrev")).left + 9;
                var margin = x - left - 4;
                if (margin < 0) margin = 0;
                if (margin > 165) margin = 165;
                if (baidu.browser.ie <= 6) {
                    bt.style.marginLeft = margin * 0.53 + "px";
                } else {
                    bt.style.marginLeft = margin + "px";
                }
                dvTcTimeBox.style.marginLeft = margin + "px";
                setTimeBox();
            }

            //完成拖动
            function dragEnd() {
                baidu.un(document, "onmousemove", dragIng);
                baidu.un(document, "onmouseup", dragEnd);
                //完成拖动后显示图层
                me.showTraffic({
                    predictDate: {
                        hour: me.hour,
                        weekday: me.weekday
                    }
                });
            }
            baidu.on(bt, "onmousedown", dragStart);

            //绑定时间条中向前的箭头
            baidu.on("tcPrev", "click", function () {
                setBarBtn("prev");
            });
            //绑定时间条中向后的箭头
            baidu.on("tcNext", "click", function () {
                setBarBtn("next");
            });

            //设置前进后退按钮
            function setBarBtn(key) {
                var box = dvTcTimeBox;
                var margin = parseInt(baidu.dom.getStyle("tcTimeBox", "marginLeft"));
                var n = Math.ceil((margin - 4) * 24 / 165);
                setBarTime(key == 'next' ? n + 1 : n - 1);
            }

            /**
             * 设置时间条上的时间
             * @param {Number} n 小时从0到24
             * @return 无返回值
             *
             * @example <b>参考示例：</b><br />
             * timeBar.setBarTime(10);
             */
            this.setBarTime = function (n) {
                setBarTime(n);
            };

            //设置时间条的时间
            function setBarTime(n) {
                if (n < 0) n = 0;
                if (n > 24) n = 24;
                hour = n;
                var margin = n * (165 / 24);
                dvTcTimeBox.style.marginLeft = margin + "px";
                var bt = baidu.g("tcMove");
                if (baidu.browser.ie <= 6 && baidu.browser.ie > 0) {
                    bt.style.marginLeft = margin * 0.53 + "px";
                } else {
                    bt.style.marginLeft = margin + "px";
                }
                me.hour = hour;
                if (bRealTime) {
                    me.showTraffic();
                } else {
                    me.showTraffic({
                        predictDate: {
                            hour: me.hour,
                            weekday: me.weekday
                        }
                    });
                }
                setTimeBox();
            }

            //设置时间条上里边的内容
            function setTimeBox() {
                var margin = parseInt(dvTcTimeBox.style.marginLeft);
                var n = Math.ceil((margin - 4) * 24 / 165);
                hour = n;
                me.hour = n;
                if (n < 10) n = "0" + n;
                if (bRealTime) {
                    //更新时间跟预测的交通流量不一样
                    dvTcNow.innerHTML = me.time;
                    dvTcTimeBox.innerHTML = n + ":00";
                } else {
                    dvTcNow.innerHTML = dvTcTimeBox.innerHTML = n + ":00";
                }
            }
        }
    };
    /**
     * 添加交通流量图层
     * @param {Json} predictDate  {weekday:预测日期，取值1到7，表示周一到周日 ,hour: 预测小时数，取值0到23，表示当日的0点到23点} 表示交通流量的预测日期
     * @return 无返回值
     *
     * @example <b>参考示例：</b><br />
     * ctrl.showTraffic({predictDate:{hour:15, weekday: 5}});
     */
    TrafficControl.prototype.showTraffic = function (predictDate) {
        var trafficLayer;
        if (this._trafficLayer) {
            this._map.removeTileLayer(this._trafficLayer);
        }
        if (predictDate) {
            //如果weekday不在1到7之间，则返回；
            if (predictDate.predictDate.weekday > 7 || predictDate.predictDate.weekday < 1) {
                return;
            }
            trafficLayer = new BMap.TrafficLayer(predictDate);
        } else {
            trafficLayer = new BMap.TrafficLayer();
        }
        this.bShow = true;
        if (baidu.isMobile()) {
            baidu.dom.removeClass(this.btn, "maplibTcBtnOff" + stylePrefix);
        }
        this._map.addTileLayer(trafficLayer);
        this._trafficLayer = trafficLayer;
    };
    /**
     * 隐藏交通流量图层
     * @return 无返回值
     *
     * @example <b>参考示例：</b><br />
     * ctrl.hideTraffic();
     */
    TrafficControl.prototype.hideTraffic = function () {
        this.bShow = false;
        if (this._trafficLayer) {
            this._map.removeTileLayer(this._trafficLayer);
            this._trafficLayer = null;
        }

        if (baidu.isMobile()) {
            baidu.dom.addClass(this.btn, "maplibTcBtnOff" + stylePrefix);
        }
    };

    /**
     * 重新父类的remove()方法，确保当移除控件的时候，与此控件相关的overlay等都会被去掉
     * 当使用removeControl()的方法的时候，会自动调用这个方法。
     * @return 无返回值
     *
     * @example <b>参考示例：</b><br />
     * map.removeControl(ctrl);
     */
    TrafficControl.prototype.remove = function () {
        this.hideTraffic();
        var dvWrap = baidu.g("tcWrap");
        //移除在dom中添加的html
        dvWrap.parentNode.removeChild(dvWrap);
        BMap.Control.prototype.remove.call(this);
        //移除每3秒调用一次的实时流量
        if (this.timer) clearInterval(this.timer);
    };
    /**
     * 设置获取属性
     * @ignore
     * @param {String} 标签名称
     * @param {Object} 元素属性
     */

    function attr(elem, name, value) {
        if (!name || name.constructor != String) return '';
        name = {
            'for': 'htmlFor',
            'class': 'className'
        }[name] || name;
        if (typeof value != 'undefined') {
            elem[name] = value;
            if (elem.setAttribute) {
                elem.setAttribute(name, value);
            }
        }
        return elem[name] || elem.getAttribute(name) || '';
    }
    /**
     * 创建DOM对象
     * @ignore
     * @param {String} 标签名称
     * @param {Object} 元素属性
     */

    function create(tag, attr) {
        var e = document.createElement(tag);
        var attr = attr || {};
        var value;
        // 设置属性
        for (var name in attr) {
            value = attr[name];
            name = result()[name] || name;
            if (name == "style") {
                e.style.cssText = value;
                continue;
            }
            if (e.setAttribute) {
                e.setAttribute(name, value);
            } else {
                try {
                    e[name] = value;
                } catch (e) {}
            }
        }
        return e;

        function result() {
            var attrName = {
                'cellpadding': 'cellPadding',
                'cellspacing': 'cellSpacing',
                'colspan': 'colSpan',
                'rowspan': 'rowSpan',
                'valign': 'vAlign'
            };
            if (baidu.browser.ie < 8) {
                //ie低版本，只认className
                attrName['for'] = 'htmlFor';
                attrName['class'] = 'className';
            } else {
                attrName['htmlFor'] = 'for';
                attrName['className'] = 'class';
            }
            return attrName;
        }
    }
    /**
     * 获取对象元素在页面中的位置
     * @ignore
     * @param {Object} Html元素对象
     * @return {Object} 位置对象
     */

    function getPosition(obj) {
        var pos = {
            left: 0,
            top: 0
        };
        while (obj && obj.offsetParent) {
            pos.left += obj.offsetLeft;
            pos.top += obj.offsetTop;
            obj = obj.offsetParent;
        };
        return pos;
    }
    /**
     * 在目标元素的指定位置插入HTML代码，
     * 闭包，对外不暴露
     * @ignore
     * @param {HTMLElement|string} element 目标元素或目标元素的id
     * @param {String} position 插入html的位置信息
     *     取值为beforeBegin、afterBegin、beforeEnd或afterEnd，大小写不敏感
     * @param {String} html 要插入的html
     * @return {HTMLElement} 目标元素
     */

    function insertHTML(element, position, html) {
        var range, begin;
        if (element.insertAdjacentHTML) {
            element.insertAdjacentHTML(position, html);
        } else {
            range = element.ownerDocument.createRange();
            // FF下range的位置设置错误可能导致创建出来的fragment在插入dom树之后html结构乱掉
            // 改用range.insertNode来插入html
            position = position.toUpperCase();
            if (position == 'AFTERBEGIN' || position == 'BEFOREEND') {
                range.selectNodeContents(element);
                range.collapse(position == 'AFTERBEGIN');
            } else {
                begin = position == 'BEFOREBEGIN';
                range[begin ? 'setStartBefore' : 'setEndAfter'](element);
                range.collapse(begin);
            }
            range.insertNode(range.createContextualFragment(html));
        }
        return element;
    }
    /**
     * script异步请求
     * @param {String}  url
     * @param {Function} callback
     * @returns none
     */
    function scriptRequest(url, callback) {
        var script = document.createElement('script');
        script.setAttribute('src', url);
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('charset', 'gbk');
        // 脚本加载完成后进行移除
        if (script.addEventListener) {
            script.addEventListener('load', function (e) {
                var t = e.target;
                t.parentNode.removeChild(t);
                if (callback) callback();
            }, false);
        } else if (script.attachEvent) {
            script.attachEvent('onreadystatechange', function (e) {
                var t = window.event.srcElement;
                if (t && (t.readyState == 'loaded' || t.readyState == 'complete')) {
                    t.parentNode.removeChild(t);
                    if (callback) callback();
                }
            });
        }
        // 使用setTimeout解决ie6无法发送问题
        setTimeout(function () {
            document.getElementsByTagName('head')[0].appendChild(script);
            script = null;
        }, 1);
    }
    /**
     * 将服务器更新时间设置为类的属性
     * @param {Date}  dtNow 服务器更新时间
     * @param {Function} callback
     * @returns none
     */
    TrafficControl.getTime = function (dtNow) {
        this.curTime = isNaN(dtNow) ? new Date() : new Date(dtNow);
    };
    return TrafficControl;
});