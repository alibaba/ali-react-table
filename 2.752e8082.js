(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/config-provider/index.js + 5 modules
var config_provider = __webpack_require__(131);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__(127);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(124);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/babel-runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(125);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/babel-runtime/helpers/inherits.js
var inherits = __webpack_require__(126);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/prop-types/index.js
var prop_types = __webpack_require__(7);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/classnames/index.js
var classnames = __webpack_require__(123);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/icon/index.js + 1 modules
var icon = __webpack_require__(136);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/util/index.js + 11 modules
var util = __webpack_require__(129);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
var react_lifecycles_compat_es = __webpack_require__(135);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/locale/zh-cn.js
var zh_cn = __webpack_require__(143);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/input/base.js





var _class, _temp2;










var base_Base = (_temp2 = _class = function (_React$Component) {
    inherits_default()(Base, _React$Component);

    function Base() {
        var _temp, _this, _ret;

        classCallCheck_default()(this, Base);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn_default()(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.saveRef = function (input) {
            _this.inputRef = input;
        }, _temp), possibleConstructorReturn_default()(_this, _ret);
    }

    Base.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
        if ('value' in nextProps && nextProps.value !== prevState.value) {
            var value = nextProps.value;
            return {
                value: value === undefined || value === null ? '' : value
            };
        }

        return null;
    };

    Base.prototype.ieHack = function ieHack(value) {
        return value;
    };

    Base.prototype.onChange = function onChange(e) {
        if ('stopPropagation' in e) {
            e.stopPropagation();
        } else if ('cancelBubble' in e) {
            e.cancelBubble();
        }

        var value = e.target.value;

        if (this.props.trim) {
            value = value.trim();
        }

        value = this.ieHack(value);

        // not controlled
        if (!('value' in this.props)) {
            this.setState({
                value: value
            });
        }

        // Number('') = 0
        if (value && this.props.htmlType === 'number') {
            value = Number(value);
        }

        this.props.onChange(value, e);
    };

    Base.prototype.onKeyDown = function onKeyDown(e) {
        var value = e.target.value;
        var maxLength = this.props.maxLength;

        var len = maxLength > 0 && value ? this.getValueLength(value) : 0;
        var opts = {};

        // has enable trim and has input whitespace
        if (this.props.trim && e.keyCode === 32) {
            opts.beTrimed = true;
        }

        // has defined maxLength and has over max length and has not input backspace and delete
        if (maxLength > 0 && (len > maxLength + 1 || (len === maxLength || len === maxLength + 1) && e.keyCode !== 8 && e.keyCode !== 46)) {
            opts.overMaxLength = true;
        }

        this.props.onKeyDown(e, opts);
    };

    Base.prototype.onFocus = function onFocus(e) {
        this.setState({
            focus: true
        });
        this.props.onFocus(e);
    };

    Base.prototype.onBlur = function onBlur(e) {
        this.setState({
            focus: false
        });
        this.props.onBlur(e);
    };

    Base.prototype.renderLength = function renderLength() {
        var _classNames;

        var _props = this.props,
            maxLength = _props.maxLength,
            hasLimitHint = _props.hasLimitHint,
            prefix = _props.prefix,
            rtl = _props.rtl;

        var len = maxLength > 0 && this.state.value ? this.getValueLength(this.state.value) : 0;

        var classesLenWrap = classnames_default()((_classNames = {}, _classNames[prefix + 'input-len'] = true, _classNames[prefix + 'error'] = len > maxLength, _classNames));

        var content = rtl ? maxLength + '/' + len : len + '/' + maxLength;

        return maxLength && hasLimitHint ? react_default.a.createElement(
            'span',
            { className: classesLenWrap },
            content
        ) : null;
    };

    Base.prototype.renderControl = function renderControl() {
        var lenWrap = this.renderLength();

        return lenWrap ? react_default.a.createElement(
            'span',
            { className: this.props.prefix + 'input-control' },
            lenWrap
        ) : null;
    };

    Base.prototype.getClass = function getClass() {
        var _classNames2;

        var _props2 = this.props,
            disabled = _props2.disabled,
            state = _props2.state,
            prefix = _props2.prefix;


        return classnames_default()((_classNames2 = {}, _classNames2[prefix + 'input'] = true, _classNames2[prefix + 'disabled'] = !!disabled, _classNames2[prefix + 'error'] = state === 'error', _classNames2[prefix + 'warning'] = state === 'warning', _classNames2[prefix + 'focus'] = this.state.focus, _classNames2));
    };

    Base.prototype.getProps = function getProps() {
        var _props3 = this.props,
            placeholder = _props3.placeholder,
            inputStyle = _props3.inputStyle,
            disabled = _props3.disabled,
            readOnly = _props3.readOnly,
            cutString = _props3.cutString,
            maxLength = _props3.maxLength,
            name = _props3.name;

        var props = {
            style: inputStyle,
            placeholder: placeholder,
            disabled: disabled,
            readOnly: readOnly,
            name: name,
            maxLength: cutString ? maxLength : undefined,
            value: this.state.value,
            onChange: this.onChange.bind(this),
            onBlur: this.onBlur.bind(this),
            onFocus: this.onFocus.bind(this)
        };

        // fix accessibility：auto process status of aria disabled
        if (disabled) {
            props['aria-disabled'] = disabled;
        }

        return props;
    };

    Base.prototype.getInputNode = function getInputNode() {
        return this.inputRef;
    };

    Base.prototype.focus = function focus(start, end) {
        this.inputRef.focus();
        if (typeof start === 'number') {
            this.inputRef.selectionStart = start;
        }
        if (typeof end === 'number') {
            this.inputRef.selectionEnd = end;
        }
    };

    return Base;
}(react_default.a.Component), _class.propTypes = extends_default()({}, config_provider["a" /* default */].propTypes, {
    /**
     * 当前值
     */
    value: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),
    /**
     * 初始化值
     */
    defaultValue: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),
    /**
     * 发生改变的时候触发的回调
     * @param {String} value 数据
     * @param {Event} e DOM事件对象
     */
    onChange: prop_types_default.a.func,
    /**
     * 键盘按下的时候触发的回调
     * @param {Event} e DOM事件对象
     * @param {Object} opts 可扩展的附加信息：<br> - opts.overMaxLength: {Boolean} 已超出最大长度<br> - opts.beTrimed: {Boolean} 输入的空格被清理
     */
    onKeyDown: prop_types_default.a.func,
    /**
     * 禁用状态
     */
    disabled: prop_types_default.a.bool,
    /**
     * 最大长度
     */
    maxLength: prop_types_default.a.number,
    /**
     * 是否展现最大长度样式
     */
    hasLimitHint: prop_types_default.a.bool,
    /**
     * 当设置了maxLength时，是否截断超出字符串
     */
    cutString: prop_types_default.a.bool,
    /**
     * 只读
     */
    readOnly: prop_types_default.a.bool,
    /**
     * onChange返回会自动去除头尾空字符
     */
    trim: prop_types_default.a.bool,
    /**
     * 输入提示
     */
    placeholder: prop_types_default.a.string,
    /**
     * 获取焦点时候触发的回调
     * @param {Event} e DOM事件对象
     */
    onFocus: prop_types_default.a.func,
    /**
     * 失去焦点时候触发的回调
     * @param {Event} e DOM事件对象
     */
    onBlur: prop_types_default.a.func,
    /**
     * 自定义字符串计算长度方式
     * @param {String} value 数据
     * @returns {Number} 自定义长度
     */
    getValueLength: prop_types_default.a.func,
    inputStyle: prop_types_default.a.object,
    /**
     * 自定义class
     */
    className: prop_types_default.a.string,
    /**
     * 自定义内联样式
     */
    style: prop_types_default.a.object,
    /**
     * 原生type
     */
    htmlType: prop_types_default.a.string,
    /**
     * name
     */
    name: prop_types_default.a.string,
    rtl: prop_types_default.a.bool,
    state: prop_types_default.a.oneOf(['error', 'loading', 'success', 'warning']),
    locale: prop_types_default.a.object,
    /**
     * 是否为预览态
     */
    isPreview: prop_types_default.a.bool,
    /**
     * 预览态模式下渲染的内容
     * @param {number} value 评分值
     */
    renderPreview: prop_types_default.a.func,
    /**
     * 尺寸
     * @enumdesc 小, 中, 大
     */
    size: prop_types_default.a.oneOf(['small', 'medium', 'large'])
}), _class.defaultProps = {
    disabled: false,
    prefix: 'next-',
    size: 'medium',
    maxLength: null,
    hasLimitHint: false,
    cutString: true,
    readOnly: false,
    isPreview: false,
    trim: false,
    onFocus: util["f" /* func */].noop,
    onBlur: util["f" /* func */].noop,
    onChange: util["f" /* func */].noop,
    onKeyDown: util["f" /* func */].noop,
    getValueLength: util["f" /* func */].noop,
    locale: zh_cn["a" /* default */].Input
}, _temp2);
base_Base.displayName = 'Base';


/* harmony default export */ var base = (Object(react_lifecycles_compat_es["polyfill"])(base_Base));
// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/babel-runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(128);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/input/group.js






var group_class, group_temp;






/**
 * Input.Group
 */
var group_Group = (group_temp = group_class = function (_React$Component) {
    inherits_default()(Group, _React$Component);

    function Group() {
        classCallCheck_default()(this, Group);

        return possibleConstructorReturn_default()(this, _React$Component.apply(this, arguments));
    }

    Group.prototype.render = function render() {
        var _classNames, _classNames2, _classNames3;

        var _props = this.props,
            className = _props.className,
            style = _props.style,
            children = _props.children,
            prefix = _props.prefix,
            addonBefore = _props.addonBefore,
            addonAfter = _props.addonAfter,
            addonBeforeClassName = _props.addonBeforeClassName,
            addonAfterClassName = _props.addonAfterClassName,
            rtl = _props.rtl,
            others = objectWithoutProperties_default()(_props, ['className', 'style', 'children', 'prefix', 'addonBefore', 'addonAfter', 'addonBeforeClassName', 'addonAfterClassName', 'rtl']);

        var cls = classnames_default()((_classNames = {}, _classNames[prefix + 'input-group'] = true, _classNames[className] = !!className, _classNames));

        var addonCls = prefix + 'input-group-addon';
        var beforeCls = classnames_default()(addonCls, (_classNames2 = {}, _classNames2[prefix + 'before'] = true, _classNames2[addonBeforeClassName] = addonBeforeClassName, _classNames2));
        var afterCls = classnames_default()(addonCls, (_classNames3 = {}, _classNames3[prefix + 'after'] = true, _classNames3[addonAfterClassName] = addonAfterClassName, _classNames3));

        var before = addonBefore ? react_default.a.createElement(
            'span',
            { className: beforeCls },
            addonBefore
        ) : null;

        var after = addonAfter ? react_default.a.createElement(
            'span',
            { className: afterCls },
            addonAfter
        ) : null;

        return react_default.a.createElement(
            'span',
            extends_default()({}, others, {
                dir: rtl ? 'rtl' : undefined,
                className: cls,
                style: style
            }),
            before,
            children,
            after
        );
    };

    return Group;
}(react_default.a.Component), group_class.propTypes = {
    /**
     * 样式前缀
     */
    prefix: prop_types_default.a.string,
    className: prop_types_default.a.string,
    style: prop_types_default.a.object,
    children: prop_types_default.a.node,
    /**
     * 输入框前附加内容
     */
    addonBefore: prop_types_default.a.node,
    /**
     * 输入框前附加内容css
     */
    addonBeforeClassName: prop_types_default.a.string,
    /**
     * 输入框后附加内容
     */
    addonAfter: prop_types_default.a.node,
    /**
     * 输入框后额外css
     */
    addonAfterClassName: prop_types_default.a.string,
    /**
     * rtl
     */
    rtl: prop_types_default.a.bool
}, group_class.defaultProps = {
    prefix: 'next-'
}, group_temp);
group_Group.displayName = 'Group';


/* harmony default export */ var group = (config_provider["a" /* default */].config(group_Group));
// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/input/input.js





var input_class, input_temp;









// preventDefault here can stop onBlur to keep focus state
function preventDefault(e) {
    e.preventDefault();
}

/** Input */
var input_Input = (input_temp = input_class = function (_Base) {
    inherits_default()(Input, _Base);

    function Input(props) {
        classCallCheck_default()(this, Input);

        var _this = possibleConstructorReturn_default()(this, _Base.call(this, props));

        _this.handleKeyDown = function (e) {
            if (e.keyCode === 13) {
                _this.props.onPressEnter(e);
            }

            _this.onKeyDown(e);
        };

        _this.handleKeyDownFromClear = function (e) {
            if (e.keyCode === 13) {
                _this.onClear(e);
            }
        };

        var value = void 0;
        if ('value' in props) {
            value = props.value;
        } else {
            value = props.defaultValue;
        }

        _this.state = {
            value: typeof value === 'undefined' ? '' : value
        };
        return _this;
    }

    // `Enter` was considered to be two chars in chrome , but one char in ie.
    // so we make all `Enter` to be two chars


    Input.prototype.getValueLength = function getValueLength(value) {
        var nv = '' + value;
        var strLen = this.props.getValueLength(nv);
        if (typeof strLen !== 'number') {
            strLen = nv.length;
        }

        return strLen;
    };

    Input.prototype.renderControl = function renderControl() {
        var _props = this.props,
            hasClear = _props.hasClear,
            readOnly = _props.readOnly,
            state = _props.state,
            prefix = _props.prefix,
            hint = _props.hint,
            extra = _props.extra,
            locale = _props.locale;


        var lenWrap = this.renderLength();

        var stateWrap = null;
        if (state === 'success') {
            stateWrap = react_default.a.createElement(icon["a" /* default */], {
                type: 'success-filling',
                className: prefix + 'input-success-icon'
            });
        } else if (state === 'loading') {
            stateWrap = react_default.a.createElement(icon["a" /* default */], {
                type: 'loading',
                className: prefix + 'input-loading-icon'
            });
        } else if (state === 'warning') {
            stateWrap = react_default.a.createElement(icon["a" /* default */], {
                type: 'warning',
                className: prefix + 'input-warning-icon'
            });
        }

        var clearWrap = null;
        var showClear = hasClear && !readOnly && !!('' + this.state.value);

        if (hint || showClear) {
            var hintIcon = null;
            if (hint) {
                if (typeof hint === 'string') {
                    hintIcon = react_default.a.createElement(icon["a" /* default */], { type: hint, className: prefix + 'input-hint' });
                } else if (Object(react["isValidElement"])(hint)) {
                    hintIcon = Object(react["cloneElement"])(hint, {
                        className: classnames_default()(hint.props.className, prefix + 'input-hint')
                    });
                } else {
                    hintIcon = hint;
                }
            } else {
                hintIcon = react_default.a.createElement(icon["a" /* default */], {
                    type: 'delete-filling',
                    role: 'button',
                    tabIndex: '0',
                    className: prefix + 'input-hint ' + prefix + 'input-clear-icon',
                    'aria-label': locale.clear,
                    onClick: this.onClear.bind(this),
                    onMouseDown: preventDefault,
                    onKeyDown: this.handleKeyDownFromClear
                });
            }

            clearWrap = react_default.a.createElement(
                'span',
                { className: prefix + 'input-hint-wrap' },
                hasClear && hint ? react_default.a.createElement(icon["a" /* default */], {
                    type: 'delete-filling',
                    role: 'button',
                    tabIndex: '0',
                    className: prefix + 'input-clear ' + prefix + 'input-clear-icon',
                    'aria-label': locale.clear,
                    onClick: this.onClear.bind(this),
                    onMouseDown: preventDefault,
                    onKeyDown: this.handleKeyDownFromClear
                }) : null,
                hintIcon
            );
        }

        if (state === 'loading') {
            clearWrap = null;
        }

        return clearWrap || lenWrap || stateWrap || extra ? react_default.a.createElement(
            'span',
            { className: prefix + 'input-control' },
            clearWrap,
            lenWrap,
            stateWrap,
            extra
        ) : null;
    };

    Input.prototype.renderLabel = function renderLabel() {
        var _props2 = this.props,
            label = _props2.label,
            prefix = _props2.prefix,
            id = _props2.id;

        return label ? react_default.a.createElement(
            'label',
            { className: prefix + 'input-label', htmlFor: id },
            label
        ) : null;
    };

    Input.prototype.renderInner = function renderInner(inner, cls) {
        return inner ? react_default.a.createElement(
            'span',
            { className: cls },
            inner
        ) : null;
    };

    Input.prototype.onClear = function onClear(e) {
        if (this.props.disabled) {
            return;
        }

        // 非受控模式清空内部数据
        if (!('value' in this.props)) {
            this.setState({
                value: ''
            });
        }
        this.props.onChange('', e, 'clear');
        this.focus();
    };

    Input.prototype.render = function render() {
        var _classNames, _classNames2, _classNames3, _classNames4, _classNames5, _classNames6, _classNames7;

        var _props3 = this.props,
            size = _props3.size,
            htmlType = _props3.htmlType,
            htmlSize = _props3.htmlSize,
            autoComplete = _props3.autoComplete,
            autoFocus = _props3.autoFocus,
            disabled = _props3.disabled,
            style = _props3.style,
            innerBefore = _props3.innerBefore,
            innerAfter = _props3.innerAfter,
            innerBeforeClassName = _props3.innerBeforeClassName,
            innerAfterClassName = _props3.innerAfterClassName,
            className = _props3.className,
            hasBorder = _props3.hasBorder,
            prefix = _props3.prefix,
            isPreview = _props3.isPreview,
            renderPreview = _props3.renderPreview,
            addonBefore = _props3.addonBefore,
            addonAfter = _props3.addonAfter,
            addonTextBefore = _props3.addonTextBefore,
            addonTextAfter = _props3.addonTextAfter,
            inputRender = _props3.inputRender,
            rtl = _props3.rtl;


        var hasAddon = addonBefore || addonAfter || addonTextBefore || addonTextAfter;
        var cls = classnames_default()(this.getClass(), (_classNames = {}, _classNames['' + prefix + size] = true, _classNames[prefix + 'hidden'] = this.props.htmlType === 'hidden', _classNames[prefix + 'noborder'] = !hasBorder || this.props.htmlType === 'file', _classNames[prefix + 'input-group-auto-width'] = hasAddon, _classNames[className] = !!className && !hasAddon, _classNames));

        var innerCls = prefix + 'input-inner';
        var innerBeforeCls = classnames_default()((_classNames2 = {}, _classNames2[innerCls] = true, _classNames2[prefix + 'before'] = true, _classNames2[innerBeforeClassName] = innerBeforeClassName, _classNames2));
        var innerAfterCls = classnames_default()((_classNames3 = {}, _classNames3[innerCls] = true, _classNames3[prefix + 'after'] = true, _classNames3[innerAfterClassName] = innerAfterClassName, _classNames3));
        var previewCls = classnames_default()((_classNames4 = {}, _classNames4[prefix + 'form-preview'] = true, _classNames4[className] = !!className, _classNames4));

        var props = this.getProps();
        // custom data attributes are assigned to the top parent node
        // data-类自定义数据属性分配到顶层node节点
        var dataProps = util["j" /* obj */].pickAttrsWith(this.props, 'data-');
        // Custom props are transparently transmitted to the core input node by default
        // 自定义属性默认透传到核心node节点：input
        var others = util["j" /* obj */].pickOthers(extends_default()({}, dataProps, Input.propTypes), this.props);

        if (isPreview) {
            var value = props.value;
            var label = this.props.label;

            if (typeof renderPreview === 'function') {
                return react_default.a.createElement(
                    'div',
                    extends_default()({}, others, { className: previewCls }),
                    renderPreview(value, this.props)
                );
            }
            return react_default.a.createElement(
                'div',
                extends_default()({}, others, { className: previewCls }),
                addonBefore || addonTextBefore,
                label,
                innerBefore,
                value,
                innerAfter,
                addonAfter || addonTextAfter
            );
        }

        var inputEl = react_default.a.createElement('input', extends_default()({}, others, props, {
            height: '100%',
            type: htmlType,
            size: htmlSize,
            autoFocus: autoFocus,
            autoComplete: autoComplete,
            onKeyDown: this.handleKeyDown,
            ref: this.saveRef
        }));

        var inputWrap = react_default.a.createElement(
            'span',
            extends_default()({}, dataProps, {
                dir: rtl ? 'rtl' : undefined,
                className: cls,
                style: hasAddon ? undefined : style
            }),
            this.renderLabel(),
            this.renderInner(innerBefore, innerBeforeCls),
            inputRender(inputEl),
            this.renderInner(innerAfter, innerAfterCls),
            this.renderControl()
        );

        var groupCls = classnames_default()((_classNames5 = {}, _classNames5[prefix + 'input-group-text'] = true, _classNames5['' + prefix + size] = !!size, _classNames5[prefix + 'disabled'] = disabled, _classNames5));

        var addonBeforeCls = classnames_default()((_classNames6 = {}, _classNames6[groupCls] = addonTextBefore, _classNames6));
        var addonAfterCls = classnames_default()((_classNames7 = {}, _classNames7[groupCls] = addonTextAfter, _classNames7));

        if (hasAddon) {
            return react_default.a.createElement(
                group,
                extends_default()({}, dataProps, {
                    className: className,
                    style: style,
                    addonBefore: addonBefore || addonTextBefore,
                    addonBeforeClassName: addonBeforeCls,
                    addonAfter: addonAfter || addonTextAfter,
                    addonAfterClassName: addonAfterCls
                }),
                inputWrap
            );
        }

        return inputWrap;
    };

    return Input;
}(base), input_class.getDerivedStateFromProps = base.getDerivedStateFromProps, input_class.propTypes = extends_default()({}, base.propTypes, {
    /**
     * label
     */
    label: prop_types_default.a.node,
    /**
     * 是否出现clear按钮
     */
    hasClear: prop_types_default.a.bool,
    /**
     * 是否有边框
     */
    hasBorder: prop_types_default.a.bool,
    /**
     * 状态
     * @enumdesc 错误, 校验中, 成功, 警告
     */
    state: prop_types_default.a.oneOf(['error', 'loading', 'success', 'warning']),
    /**
     * 按下回车的回调
     */
    onPressEnter: prop_types_default.a.func,

    onClear: prop_types_default.a.func,
    /**
     * 原生type
     */
    htmlType: prop_types_default.a.string,
    htmlSize: prop_types_default.a.string,
    /**
     * 水印 (Icon的type类型，和hasClear占用一个地方)
     */
    hint: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.node]),
    /**
     * 文字前附加内容
     */
    innerBefore: prop_types_default.a.node,
    /**
     * 文字后附加内容
     */
    innerAfter: prop_types_default.a.node,
    /**
     * 输入框前附加内容
     */
    addonBefore: prop_types_default.a.node,
    /**
     * 输入框后附加内容
     */
    addonAfter: prop_types_default.a.node,
    /**
     * 输入框前附加文字
     */
    addonTextBefore: prop_types_default.a.node,
    /**
     * 输入框后附加文字
     */
    addonTextAfter: prop_types_default.a.node,
    /**
     * (原生input支持)
     */
    autoComplete: prop_types_default.a.string,
    /**
     * 自动聚焦(原生input支持)
     */
    autoFocus: prop_types_default.a.bool,
    inputRender: prop_types_default.a.func,
    extra: prop_types_default.a.node,
    innerBeforeClassName: prop_types_default.a.string,
    innerAfterClassName: prop_types_default.a.string,
    /**
     * 是否为预览态
     */
    isPreview: prop_types_default.a.bool,
    /**
     * 预览态模式下渲染的内容
     * @param {number} value 评分值
     */
    renderPreview: prop_types_default.a.func
}), input_class.defaultProps = extends_default()({}, base.defaultProps, {
    autoComplete: 'off',
    hasBorder: true,
    isPreview: false,
    onPressEnter: util["f" /* func */].noop,
    inputRender: function inputRender(el) {
        return el;
    }
}), input_temp);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/input/password.js






var password_class, password_temp2;







function password_preventDefault(e) {
    e.preventDefault();
}
var password_Password = (password_temp2 = password_class = function (_Input) {
    inherits_default()(Password, _Input);

    function Password() {
        var _temp, _this, _ret;

        classCallCheck_default()(this, Password);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn_default()(this, _Input.call.apply(_Input, [this].concat(args))), _this), _this.state = {
            hint: 'eye',
            htmlType: 'password'
        }, _this.toggleEye = function (e) {
            e.preventDefault();

            var eyeClose = _this.state.hint === 'eye-close';

            _this.setState({
                hint: eyeClose ? 'eye' : 'eye-close',
                htmlType: eyeClose || !_this.props.showToggle ? 'password' : 'text'
            });
        }, _temp), possibleConstructorReturn_default()(_this, _ret);
    }

    Password.prototype.render = function render() {
        var _props = this.props,
            showToggle = _props.showToggle,
            others = objectWithoutProperties_default()(_props, ['showToggle']);

        var _state = this.state,
            hint = _state.hint,
            htmlType = _state.htmlType;


        var extra = showToggle ? react_default.a.createElement(icon["a" /* default */], {
            type: hint,
            onClick: this.toggleEye,
            onMouseDown: password_preventDefault
        }) : null;

        return react_default.a.createElement(input_Input, extends_default()({}, others, { extra: extra, htmlType: htmlType }));
    };

    return Password;
}(input_Input), password_class.getDerivedStateFromProps = input_Input.getDerivedStateFromProps, password_class.propTypes = extends_default()({}, input_Input.propTypes, {
    /**
     * 是否展示切换按钮
     */
    showToggle: prop_types_default.a.bool
}), password_class.defaultProps = extends_default()({}, input_Input.defaultProps, {
    showToggle: true
}), password_temp2);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/babel-runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(175);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/react-dom/index.js
var react_dom = __webpack_require__(20);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/input/textarea.js






var textarea_class, textarea_temp, _initialiseProps;








function onNextFrame(cb) {
    if (window.requestAnimationFrame) {
        return window.requestAnimationFrame(cb);
    }
    return window.setTimeout(cb, 1);
}

function clearNextFrameAction(nextFrameId) {
    if (window.cancelAnimationFrame) {
        window.cancelAnimationFrame(nextFrameId);
    } else {
        window.clearTimeout(nextFrameId);
    }
}

// safari in mac
var isMacSafari = typeof navigator !== 'undefined' && navigator && navigator.userAgent ? navigator.userAgent.match(/^((?!chrome|android|windows).)*safari/i) : false;

var hiddenStyle = {
    visibility: 'hidden',
    position: 'absolute',
    zIndex: '-1000',
    top: '-1000px',
    overflowY: 'hidden',
    left: 0,
    right: 0
};

/**
 * Input.TextArea
 * @order 2
 */
var textarea_TextArea = (textarea_temp = textarea_class = function (_Base) {
    inherits_default()(TextArea, _Base);

    function TextArea(props) {
        classCallCheck_default()(this, TextArea);

        var _this = possibleConstructorReturn_default()(this, _Base.call(this, props));

        _initialiseProps.call(_this);

        var value = void 0;
        if ('value' in props) {
            value = props.value;
        } else {
            value = props.defaultValue;
        }

        _this.state = {
            value: typeof value === 'undefined' ? '' : value
        };
        return _this;
    }

    TextArea.prototype.componentDidMount = function componentDidMount() {
        var autoHeight = this.props.autoHeight;
        if (autoHeight) {
            if ((typeof autoHeight === 'undefined' ? 'undefined' : typeof_default()(autoHeight)) === 'object') {
                /* eslint-disable react/no-did-mount-set-state */
                this.setState(this._getMinMaxHeight(autoHeight, this.state.value));
            } else {
                this.setState({
                    height: this._getHeight(this.state.value),
                    overflowY: 'hidden'
                });
            }
        }
    };

    TextArea.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        if (this.props.autoHeight && this.props.value !== prevProps.value) {
            this._resizeTextArea(this.props.value);
        }
    };

    TextArea.prototype._getMinMaxHeight = function _getMinMaxHeight(_ref, value) {
        var minRows = _ref.minRows,
            maxRows = _ref.maxRows;

        var node = react_dom_default.a.findDOMNode(this.helpRef);
        node.setAttribute('rows', minRows);
        var minHeight = node.clientHeight;

        node.setAttribute('rows', maxRows);
        var maxHeight = node.clientHeight;

        node.setAttribute('rows', '1');
        var height = this._getHeight(value);

        return {
            minHeight: minHeight,
            maxHeight: maxHeight,
            height: height,
            overflowY: height <= maxHeight ? 'hidden' : undefined
        };
    };

    TextArea.prototype._getHeight = function _getHeight(value) {
        var node = react_dom_default.a.findDOMNode(this.helpRef);
        node.value = value;

        return node.scrollHeight;
    };

    TextArea.prototype.ieHack = function ieHack(value) {
        // Fix: textarea dit not support maxLength in ie9
        /* istanbul ignore if */
        if (util["c" /* env */].ieVersion === 9 && this.props.maxLength) {
            var maxLength = parseInt(this.props.maxLength);
            var len = this.getValueLength(value, true);
            if (len > maxLength && this.props.cutString) {
                value = value.replace(/\n/g, '\n\n');
                value = value.substr(0, maxLength);
                value = value.replace(/\n\n/g, '\n');
            }
        }

        this.props.autoHeight && this._resizeTextArea(value);

        return value;
    };

    /**
     * value.length !== maxLength  in ie/safari(mac) while value has `Enter`
     * about maxLength compute: `Enter` was considered to be one char(\n) in chrome , but two chars(\r\n) in ie/safari(mac).
     * so while value has `Enter`, we should let display length + 1
     */


    TextArea.prototype.getValueLength = function getValueLength(value) {
        var _props = this.props,
            maxLength = _props.maxLength,
            cutString = _props.cutString;


        var nv = '' + value;
        var strLen = this.props.getValueLength(nv);
        if (typeof strLen !== 'number') {
            strLen = nv.length;
        }

        /* istanbul ignore if */
        if (util["c" /* env */].ieVersion || isMacSafari) {
            strLen = strLen + nv.split('\n').length - 1;
            if (strLen > maxLength && cutString) {
                strLen = maxLength;
            }
        }

        return strLen;
    };

    TextArea.prototype.saveTextAreaRef = function saveTextAreaRef(textArea) {
        this.inputRef = textArea;
    };

    TextArea.prototype.saveHelpRef = function saveHelpRef(ref) {
        this.helpRef = ref;
    };

    TextArea.prototype.render = function render() {
        var _classNames, _classNames2;

        var _props2 = this.props,
            rows = _props2.rows,
            style = _props2.style,
            className = _props2.className,
            autoHeight = _props2.autoHeight,
            isPreview = _props2.isPreview,
            renderPreview = _props2.renderPreview,
            prefix = _props2.prefix,
            rtl = _props2.rtl,
            hasBorder = _props2.hasBorder,
            size = _props2.size;


        var cls = classnames_default()(this.getClass(), (_classNames = {}, _classNames['' + prefix + size] = size === 'large' || 'size' === 'small', _classNames[prefix + 'input-textarea'] = true, _classNames[prefix + 'noborder'] = !hasBorder, _classNames[className] = !!className, _classNames));

        var props = this.getProps();
        // custom data attributes are assigned to the top parent node
        // data-类自定义数据属性分配到顶层node节点
        var dataProps = util["j" /* obj */].pickAttrsWith(this.props, 'data-');
        // Custom props are transparently transmitted to the core input node by default
        // 自定义属性默认透传到核心node节点：input
        var others = util["j" /* obj */].pickOthers(extends_default()({}, dataProps, TextArea.propTypes), this.props);

        var textareStyle = extends_default()({}, props.style, {
            height: this.state.height,
            minHeight: this.state.minHeight,
            maxHeight: this.state.maxHeight,
            overflowY: this.state.overflowY
        });

        var previewCls = classnames_default()((_classNames2 = {}, _classNames2[prefix + 'input-textarea'] = true, _classNames2[prefix + 'form-preview'] = true, _classNames2[className] = !!className, _classNames2));

        var wrapStyle = autoHeight ? extends_default()({}, style, { position: 'relative' }) : style;

        if (isPreview) {
            var value = props.value;

            if ('renderPreview' in this.props) {
                return react_default.a.createElement(
                    'div',
                    extends_default()({}, others, { className: previewCls }),
                    renderPreview(value, this.props)
                );
            }
            return react_default.a.createElement(
                'div',
                extends_default()({}, others, { className: previewCls }),
                value.split('\n').map(function (data, i) {
                    return react_default.a.createElement(
                        'p',
                        { key: 'p-' + i },
                        data
                    );
                })
            );
        }

        return react_default.a.createElement(
            'span',
            extends_default()({
                className: cls,
                style: wrapStyle,
                dir: rtl ? 'rtl' : undefined
            }, dataProps),
            react_default.a.createElement('textarea', extends_default()({}, others, props, {
                'data-real': true,
                rows: rows,
                style: textareStyle,
                ref: this.saveRef.bind(this),
                onKeyDown: this.onKeyDown.bind(this)
            })),
            autoHeight ? react_default.a.createElement('textarea', {
                'data-fake': true,
                ref: this.saveHelpRef.bind(this),
                style: extends_default()({}, props.style, hiddenStyle),
                rows: '1'
            }) : null,
            this.renderControl()
        );
    };

    return TextArea;
}(base), textarea_class.getDerivedStateFromProps = base.getDerivedStateFromProps, textarea_class.propTypes = extends_default()({}, base.propTypes, {
    /**
     * 是否有边框
     */
    hasBorder: prop_types_default.a.bool,
    /**
     * 状态
     * @enumdesc 错误
     */
    state: prop_types_default.a.oneOf(['error', 'warning']),
    /**
     * 自动高度 true / {minRows: 2, maxRows: 4}
     */
    autoHeight: prop_types_default.a.oneOfType([prop_types_default.a.bool, prop_types_default.a.object]),
    /**
     * 多行文本框高度 <br />(不要直接用height设置多行文本框的高度, ie9 10会有兼容性问题)
     */
    rows: prop_types_default.a.number,
    /**
     * 是否为预览态
     */
    isPreview: prop_types_default.a.bool,
    /**
     * 预览态模式下渲染的内容
     * @param {number} value 评分值
     */
    renderPreview: prop_types_default.a.func
}), textarea_class.defaultProps = extends_default()({}, base.defaultProps, {
    hasBorder: true,
    isPreview: false,
    rows: 4,
    autoHeight: false
}), _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this._resizeTextArea = function (value) {
        if (_this2.nextFrameActionId) {
            clearNextFrameAction(_this2.nextFrameActionId);
        }
        _this2.nextFrameActionId = onNextFrame(function () {
            var height = _this2._getHeight(value);
            var maxHeight = _this2.state.maxHeight ? _this2.state.maxHeight : Infinity;

            _this2.setState({
                height: _this2._getHeight(value),
                overflowY: height <= maxHeight ? 'hidden' : undefined
            });
        });
    };
}, textarea_temp);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/input/index.js






input_Input.Password = config_provider["a" /* default */].config(password_Password, {
    exportNames: ['getInputNode', 'focus']
});

input_Input.TextArea = config_provider["a" /* default */].config(textarea_TextArea, {
    exportNames: ['getInputNode', 'focus']
});
input_Input.Group = group;

// 用来自动生成文档的工具底层依赖的 react-docgen，无法解析生成 HOC 的方法中存在第二个参数的情况
// 所以不能在 input.jsx／textarea.jsx 中生成 HOC
/* harmony default export */ var input = __webpack_exports__["a"] = (config_provider["a" /* default */].config(input_Input, {
    exportNames: ['getInputNode', 'focus']
}));

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/babel-runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(128);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/config-provider/index.js + 5 modules
var config_provider = __webpack_require__(131);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/babel-runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__(175);
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__(127);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(124);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/babel-runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(125);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/babel-runtime/helpers/inherits.js
var inherits = __webpack_require__(126);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/prop-types/index.js
var prop_types = __webpack_require__(7);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/classnames/index.js
var classnames = __webpack_require__(123);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
var react_lifecycles_compat_es = __webpack_require__(135);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/util/index.js + 11 modules
var util = __webpack_require__(129);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/tag/index.js + 4 modules
var tag = __webpack_require__(430);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/input/index.js + 5 modules
var input = __webpack_require__(167);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/icon/index.js + 1 modules
var icon = __webpack_require__(136);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/locale/zh-cn.js
var zh_cn = __webpack_require__(143);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/react-dom/index.js
var react_dom = __webpack_require__(20);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/menu/index.js + 12 modules
var menu = __webpack_require__(157);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/overlay/index.js + 7 modules
var es_overlay = __webpack_require__(158);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/select/util.js





/**
 * util module
 */

/**
 * 是否是单选模式
 * @param {string} mode
 * @return {boolean} is single mode
 */
function util_isSingle(mode) {
    return !mode || mode === 'single';
}

/**
 * 在 Select 中，认为 null 和 undefined 都是空值
 * @param {*} n any object
 * @return {boolean}
 */
function isNull(n) {
    return n === null || n === undefined;
}

/**
 * 将字符串中的正则表达式关键字符添加转义
 * @param {string} str
 * @return {string}
 */
function escapeForReg(str) {
    return str.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}

/**
 * filter by key
 * @param {string} key filter key
 * @param {object} item item object
 * @return {boolean} it's filtered
 */
function util_filter(key, item) {
    var _key = escapeForReg('' + key);
    var regExp = new RegExp('(' + _key + ')', 'ig');

    return regExp.test('' + item.value) || regExp.test('' + item.label);
}

/**
 * loop map
 * @param {Array} dataSource
 * @param {function} callback
 * @return {Array}
 * ----
 * @callback ~loopCallback
 * @param {object} option
 */
function loopMap(dataSource, callback) {
    var result = [];
    dataSource.forEach(function (option) {
        if (option.children) {
            var children = loopMap(option.children, callback);
            result.push(extends_default()({}, option, {
                children: children
            }));
        } else {
            // eslint-disable-next-line callback-return
            var tmp = callback(option);
            tmp && result.push(tmp);
        }
    });

    return result;
}

/**
 * Parse dataSource from MenuItem
 * @static
 * @param {Array<Element>} children
 * @param {number} [deep=0] recursion deep level
 */
function parseDataSourceFromChildren(children) {
    var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var source = [];

    react["Children"].forEach(children, function (child, index) {
        if (!child) {
            return;
        }
        var type = child.type,
            childProps = child.props;

        var item2 = { deep: deep };

        var isOption = false;
        var isOptionGroup = false;

        if (typeof type === 'function' && type._typeMark === 'next_select_option' || type === 'option') {
            isOption = true;
        }
        if (typeof type === 'function' && type._typeMark === 'next_select_option_group' || type === 'optgroup') {
            isOptionGroup = true;
        }

        if (!isOption && !isOptionGroup) {
            return;
        }

        if (isOption) {
            // option
            // If children is a string, it can be used as value
            var isStrChild = typeof childProps.children === 'string';
            // value > key > string children > index
            item2.value = 'value' in childProps ? childProps.value : 'key' in childProps ? childProps.key : isStrChild ? childProps.children : '' + index;

            item2.label = childProps.label || childProps.children || '' + item2.value;
            if ('title' in childProps) {
                item2.title = childProps.title;
            }
            childProps.disabled === true && (item2.disabled = true);
            // You can put your extra data here, and use it in `itemRender` or `labelRender`
            extends_default()(item2, childProps['data-extra'] || {});
        } else if (isOptionGroup && deep < 1) {
            // option group
            item2.label = childProps.label || 'Group';
            // parse children nodes
            item2.children = parseDataSourceFromChildren(childProps.children, deep + 1);
        }

        source.push(item2);
    });

    return source;
}

/**
 * Normalize dataSource
 * @static
 * @param {Array} dataSource
 * @param {number} [deep=0] recursion deep level
 * ----
 * value priority: value > 'index'
 * label priority: label > 'value' > 'index'
 * disabled: disabled === true
 */
function normalizeDataSource(dataSource) {
    var deep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var showDataSourceChildren = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var source = [];

    dataSource.forEach(function (item, index) {
        // enable array of basic type
        if (/string|boolean|number/.test(typeof item === 'undefined' ? 'undefined' : typeof_default()(item))) {
            item = { label: '' + item, value: item };
        }

        // filter off addon item
        if (item.__isAddon) {
            return;
        }

        var item2 = { deep: deep };
        // deep < 1: only 2 level allowed
        if (Array.isArray(item.children) && deep < 1 && showDataSourceChildren) {
            // handle group
            item2.label = item.label || item.value || 'Group ' + index;
            // parse children
            item2.children = normalizeDataSource(item.children, deep + 1);
        } else {
            var _item = item,
                value = _item.value,
                label = _item.label,
                disabled = _item.disabled,
                title = _item.title,
                others = objectWithoutProperties_default()(_item, ['value', 'label', 'disabled', 'title']);

            item2.value = !isNull(value) ? value : '' + index;
            item2.label = label || '' + item2.value;
            if ('title' in item) {
                item2.title = title;
            }
            disabled === true && (item2.disabled = true);

            extends_default()(item2, others);
        }

        source.push(item2);
    });

    return source;
}

/**
 * Get flatten dataSource
 * @static
 * @param  {Array} dataSource structured dataSource
 * @return {Array}
 */
function flattingDataSource(dataSource) {
    var source = [];

    dataSource.forEach(function (item) {
        if (Array.isArray(item.children)) {
            source.push.apply(source, flattingDataSource(item.children));
        } else {
            source.push(item);
        }
    });

    return source;
}

function filterDataSource(dataSource, key, filter, addonKey) {
    if (!Array.isArray(dataSource)) {
        return [];
    }
    if (typeof key === 'undefined' || key === null) {
        return [].concat(dataSource);
    }

    var addKey = true;
    var menuDataSource = loopMap(dataSource, function (option) {
        if (key === '' + option.value) {
            addKey = false;
        }
        return filter(key, option) && !option.__isAddon && option;
    });

    // if key not in menuDataSource, add key to dataSource
    if (addonKey && key && addKey) {
        menuDataSource.unshift({
            value: key,
            label: key,
            __isAddon: true
        });
    }

    return menuDataSource;
}

function getKeyItemByValue(value, valueMap) {
    var item = void 0;

    if ((typeof value === 'undefined' ? 'undefined' : typeof_default()(value)) === 'object' && value.hasOwnProperty('value')) {
        item = value;
    } else {
        item = valueMap['' + value] || {
            value: value,
            label: value
        };
    }

    return item;
}

/**
 * compute valueDataSource by new value
 * @param {Array/String} value 数据
 * @param {Object} mapValueDS   上个value的缓存数据 value => {value,label} 的映射关系表
 * @param {*} mapMenuDS  通过 dataSource 建立 value => {value,label} 的映射关系表
 * @returns {Object} value: [value]; valueDS: [{value,label}]; mapValueDS: {value: {value,label}}
 */
function getValueDataSource(value, mapValueDS, mapMenuDS) {
    if (isNull(value)) {
        return {};
    }

    var newValue = [];
    var newValueDS = [];
    var newMapValueDS = {};
    var _newMapDS = extends_default()({}, mapValueDS, mapMenuDS);

    if (Array.isArray(value)) {
        value.forEach(function (v) {
            var item = getKeyItemByValue(v, _newMapDS);

            newValueDS.push(item);
            newMapValueDS['' + item.value] = item;
            newValue.push(item.value);
        });

        return {
            value: newValue, // [value]
            valueDS: newValueDS, // [{value,label}]
            mapValueDS: newMapValueDS // {value: {value,label}}
        };
    } else {
        var _mapValueDS;

        var item = getKeyItemByValue(value, _newMapDS);

        return {
            value: item.value,
            valueDS: item,
            mapValueDS: (_mapValueDS = {}, _mapValueDS['' + item.value] = item, _mapValueDS)
        };
    }
}

/**
 * Get flatten dataSource
 * @static
 * @param  {any} value structured dataSource
 * @return {String}
 */
function valueToSelectKey(value) {
    var val = void 0;
    if ((typeof value === 'undefined' ? 'undefined' : typeof_default()(value)) === 'object' && value.hasOwnProperty('value')) {
        val = value.value;
    } else {
        val = value;
    }
    return '' + val;
}

/**
 * UP Down 改进双向链表方法
 */
// function DoubleLinkList(element){
//     this.prev = null;
//     this.next = null;
//     this.element = element;
// }
//
// export function mapDoubleLinkList(dataSource){
//
//     const mapDS = {};
//     let doubleLink = null;
//
//     let head = null;
//     let tail = null;
//
//     function  append(element) {
//         if (!doubleLink) {
//             doubleLink = new DoubleLinkList(element);
//             head = doubleLink;
//             tail = doubleLink;
//             return doubleLink;
//         }
//
//         const node = new DoubleLinkList(element);
//         tail.next = node;
//         node.prev = tail;
//         tail = node;
//
//         return tail;
//     }
//
//     dataSource.forEach((item => {
//         if (item.disabled) {
//             return;
//         }
//         mapDS[`${item.value}`] = append(item);
//     }));
//
//     return mapDS;
// }
//
// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/select/data-store.js




/**
 * manage dataSource for menu list
 */

var data_store_DataStore = function () {
    function DataStore(options) {
        classCallCheck_default()(this, DataStore);

        this.options = extends_default()({
            filter: util_filter,
            key: undefined,
            addonKey: false,
            filterLocal: true,
            showDataSourceChildren: true
        }, options);

        // origin data
        this.dataSource = [];
        // current data for menu display
        this.menuDataSource = [];
        // key=>value map for menuDataSource
        this.mapDataSource = {};
        // current data can be select (not disabled) on menu
        this.enabledDataSource = [];
        this.flattenDataSource = [];
    }

    DataStore.prototype.setOptions = function setOptions(options) {
        extends_default()(this.options, options);
    };

    DataStore.prototype.updateByDS = function updateByDS(dataSource) {
        var isChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        this.dataSource = isChildren ? parseDataSourceFromChildren(dataSource) : normalizeDataSource(dataSource, 0, this.options.showDataSourceChildren);
        return this.updateAll();
    };

    DataStore.prototype.updateByKey = function updateByKey(key) {
        if (key === this.options.key) {
            return this.getMenuDS();
        }

        this.options.key = key;
        return this.updateAll();
    };

    DataStore.prototype.getOriginDS = function getOriginDS() {
        return this.dataSource;
    };

    DataStore.prototype.getMenuDS = function getMenuDS() {
        return this.menuDataSource;
    };

    DataStore.prototype.getFlattenDS = function getFlattenDS() {
        return this.flattenDataSource;
    };

    DataStore.prototype.getEnableDS = function getEnableDS() {
        return this.enabledDataSource;
    };

    DataStore.prototype.getMapDS = function getMapDS() {
        return this.mapDataSource;
    };

    DataStore.prototype.updateAll = function updateAll() {
        var _this = this;

        var _options = this.options,
            key = _options.key,
            filter = _options.filter,
            filterLocal = _options.filterLocal,
            showDataSourceChildren = _options.showDataSourceChildren;

        this.menuDataSource = filterDataSource(this.dataSource, filterLocal ? key : '', filter, this.options.addonKey);

        this.flattenDataSource = showDataSourceChildren ? flattingDataSource(this.menuDataSource) : this.menuDataSource;

        this.mapDataSource = {};
        this.flattenDataSource.forEach(function (item) {
            _this.mapDataSource['' + item.value] = item;
        });

        this.enabledDataSource = this.flattenDataSource.filter(function (item) {
            return !item.disabled;
        });

        return this.menuDataSource;
    };

    return DataStore;
}();

/* harmony default export */ var data_store = (data_store_DataStore);
// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/virtual-list/index.js + 1 modules
var virtual_list = __webpack_require__(207);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/select/base.js





var _class, _temp;















var Popup = es_overlay["a" /* default */].Popup;
var MenuItem = menu["a" /* default */].Item,
    MenuGroup = menu["a" /* default */].Group;
var noop = util["f" /* func */].noop,
    bindCtx = util["f" /* func */].bindCtx,
    makeChain = util["f" /* func */].makeChain;


function preventDefault(e) {
    e.preventDefault();
}

var base_Base = (_temp = _class = function (_React$Component) {
    inherits_default()(Base, _React$Component);

    function Base(props) {
        classCallCheck_default()(this, Base);

        var _this = possibleConstructorReturn_default()(this, _React$Component.call(this, props));

        _this.saveSelectRef = function (ref) {
            _this.selectDOM = Object(react_dom["findDOMNode"])(ref);
        };

        _this.saveInputRef = function (ref) {
            if (ref && ref.getInstance()) {
                _this.inputRef = ref.getInstance();
            }
        };

        _this.savePopupRef = function (ref) {
            _this.popupRef = ref;
            if (_this.props.popupProps && typeof _this.props.popupProps.ref === 'function') {
                _this.props.popupProps.ref(ref);
            }
        };

        _this.dataStore = new data_store({
            filter: props.filter,
            filterLocal: props.filterLocal,
            showDataSourceChildren: props.showDataSourceChildren
        });

        _this.state = {
            dataStore: _this.dataStore,
            value: 'value' in props ? props.value : props.defaultValue,
            visible: 'visible' in props ? props.visible : props.defaultVisible,
            dataSource: _this.setDataSource(_this.props),
            width: 100,
            highlightKey: 'highlightKey' in props ? props.highlightKey : props.defaultHighlightKey,
            srReader: ''
        };

        bindCtx(_this, ['handleMenuBodyClick', 'handleVisibleChange', 'focusInput', 'beforeOpen', 'beforeClose', 'afterClose', 'handleResize']);
        return _this;
    }

    Base.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;

        // overlay 还没有完成 mount，所以需要滞后同步宽度
        setTimeout(function () {
            return _this2.syncWidth();
        }, 0);

        util["d" /* events */].on(window, 'resize', this.handleResize);
    };

    Base.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        if (prevProps.label !== this.props.label || prevState.value !== this.state.value) {
            this.syncWidth();
        }
    };

    Base.prototype.componentWillUnmount = function componentWillUnmount() {
        util["d" /* events */].off(window, 'resize', this.handleResize);
        clearTimeout(this.resizeTimeout);
    };

    /**
     * Calculate and set width of popup menu
     * @protected
     */


    Base.prototype.syncWidth = function syncWidth() {
        var _this3 = this;

        var _props2 = this.props,
            popupStyle = _props2.popupStyle,
            popupProps = _props2.popupProps;

        if (popupStyle && 'width' in popupStyle || popupProps && popupProps.style && 'width' in popupProps.style) {
            return;
        }

        var width = util["b" /* dom */].getStyle(this.selectDOM, 'width');
        if (width && this.width !== width) {
            this.width = width;

            if (this.popupRef && this.shouldAutoWidth()) {
                // overy 的 node 节点可能没有挂载完成，所以这里需要异步
                setTimeout(function () {
                    if (_this3.popupRef && _this3.popupRef.getInstance().overlay) {
                        util["b" /* dom */].setStyle(_this3.popupRef.getInstance().overlay.getInstance().getContentNode(), 'width', _this3.width);
                    }
                }, 0);
            }
        }
    };

    Base.prototype.handleResize = function handleResize() {
        var _this4 = this;

        clearTimeout(this.resizeTimeout);
        if (this.state.visible) {
            this.resizeTimeout = setTimeout(function () {
                _this4.syncWidth();
            }, 200);
        }
    };

    /**
     * Get structured dataSource, for cache
     * @protected
     * @param  {Object} [props=this.props]
     * @return {Array}
     */


    Base.prototype.setDataSource = function setDataSource(props) {
        var dataSource = props.dataSource,
            children = props.children;

        // children is higher priority then dataSource

        if (react["Children"].count(children)) {
            return this.dataStore.updateByDS(children, true);
        } else if (Array.isArray(dataSource)) {
            return this.dataStore.updateByDS(dataSource, false);
        }
        return [];
    };

    /**
     * Set popup visible
     * @protected
     * @param {boolean} visible
     * @param {string} type trigger type
     */


    Base.prototype.setVisible = function setVisible(visible, type) {
        if (this.props.disabled || this.state.visible === visible) {
            return;
        }

        if (!('visible' in this.props)) {
            this.setState({
                visible: visible
            });
        }

        this.props.onVisibleChange(visible, type);
    };

    Base.prototype.setFirstHightLightKeyForMenu = function setFirstHightLightKeyForMenu() {
        if (!this.props.autoHighlightFirstItem) {
            return;
        }

        // 设置高亮 item key
        if (this.dataStore.getMenuDS().length && this.dataStore.getEnableDS().length) {
            var highlightKey = '' + this.dataStore.getEnableDS()[0].value;
            this.setState({
                highlightKey: highlightKey
            });
            this.props.onToggleHighlightItem(highlightKey, 'autoFirstItem');
        }
    };

    Base.prototype.handleChange = function handleChange(value) {
        var _props3;

        // 非受控模式清空内部数据
        if (!('value' in this.props)) {
            this.setState({
                value: value
            });
        }

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        (_props3 = this.props).onChange.apply(_props3, [value].concat(args));
    };

    /**
     * Handle Menu body click
     * @param {Event} e click event
     */


    Base.prototype.handleMenuBodyClick = function handleMenuBodyClick(e) {
        this.focusInput(e);
    };

    /**
     * Toggle highlight MenuItem
     * @private
     * @param {number} dir -1: up, 1: down
     */


    Base.prototype.toggleHighlightItem = function toggleHighlightItem(dir) {
        if (!this.state.visible) {
            this.setVisible(true, 'enter');
            return;
        }

        var maxCount = this.dataStore.getEnableDS().length;
        // When there is no enabled item
        if (!maxCount) {
            return false;
        }

        var highlightKey = this.state.highlightKey;

        var highlightIndex = -1;

        // find previous highlight index
        highlightKey !== null && this.dataStore.getEnableDS().some(function (item, index) {
            if ('' + item.value === highlightKey) {
                highlightIndex = index;
            }
            return highlightIndex > -1;
        });

        // toggle highlight index
        highlightIndex += dir;
        if (highlightIndex < 0) {
            highlightIndex = maxCount - 1;
        }
        if (highlightIndex >= maxCount) {
            highlightIndex = 0;
        }

        // get highlight key
        var highlightItem = this.dataStore.getEnableDS()[highlightIndex];
        highlightKey = highlightItem ? '' + highlightItem.value : null;

        this.setState({ highlightKey: highlightKey, srReader: highlightItem.label });

        this.scrollMenuIntoView();

        return highlightItem;
    };

    // scroll into focus item


    Base.prototype.scrollMenuIntoView = function scrollMenuIntoView() {
        var _this5 = this;

        var prefix = this.props.prefix;


        clearTimeout(this.highlightTimer);
        this.highlightTimer = setTimeout(function () {
            try {
                var menuNode = Object(react_dom["findDOMNode"])(_this5.menuRef);
                var itemNode = menuNode.querySelector('.' + prefix + 'select-menu-item.' + prefix + 'focused');
                itemNode && itemNode.scrollIntoViewIfNeeded();
            } catch (ex) {
                // I don't care...
            }
        });
    };

    /**
     * render popup menu header
     * @abstract
     */


    Base.prototype.renderMenuHeader = function renderMenuHeader() {
        var menuProps = this.props.menuProps;


        if (menuProps && 'header' in menuProps) {
            return menuProps.header;
        }

        return null;
    };

    Base.prototype.handleSelect = function handleSelect() {};

    /**
     * render popup children
     * @protected
     * @param {object} props
     */


    Base.prototype.renderMenu = function renderMenu() {
        var _classNames,
            _this6 = this;

        var _props4 = this.props,
            prefix = _props4.prefix,
            mode = _props4.mode,
            locale = _props4.locale,
            notFoundContent = _props4.notFoundContent,
            useVirtual = _props4.useVirtual,
            menuProps = _props4.menuProps;
        var _state = this.state,
            dataSource = _state.dataSource,
            highlightKey = _state.highlightKey;

        var value = this.state.value;
        var selectedKeys = void 0;

        if (isNull(value) || value.length === 0 || this.isAutoComplete) {
            selectedKeys = [];
        } else if (util_isSingle(mode)) {
            selectedKeys = [valueToSelectKey(value)];
        } else {
            selectedKeys = [].concat(value).map(function (n) {
                return valueToSelectKey(n);
            });
        }

        var children = this.renderMenuItem(dataSource);

        var menuClassName = classnames_default()((_classNames = {}, _classNames[prefix + 'select-menu'] = true, _classNames[prefix + 'select-menu-empty'] = !children || !children.length, _classNames));

        if (!children || !children.length) {
            children = react_default.a.createElement(
                'span',
                { className: prefix + 'select-menu-empty-content' },
                notFoundContent || locale.notFoundContent
            );
        }

        var customProps = extends_default()({}, menuProps, {
            children: children,
            role: 'listbox',
            selectedKeys: selectedKeys,
            focusedKey: highlightKey,
            focusable: false,
            selectMode: util_isSingle(mode) ? 'single' : 'multiple',
            onSelect: this.handleMenuSelect,
            onItemClick: this.handleItemClick,
            header: this.renderMenuHeader(),
            onClick: this.handleMenuBodyClick,
            onMouseDown: preventDefault,
            className: menuClassName
        });
        var menuStyle = this.shouldAutoWidth() ? { width: this.width } : { minWidth: this.width };

        return useVirtual && children.length ? react_default.a.createElement(
            'div',
            { className: prefix + 'select-menu-wrapper', style: extends_default()({ position: 'relative' }, menuStyle) },
            react_default.a.createElement(
                virtual_list["a" /* default */],
                {
                    itemsRenderer: function itemsRenderer(items, _ref) {
                        return react_default.a.createElement(
                            menu["a" /* default */],
                            extends_default()({
                                ref: function ref(c) {
                                    _ref(c);
                                    _this6.menuRef = c;
                                },
                                flatenContent: true
                            }, customProps),
                            items
                        );
                    }
                },
                children
            )
        ) : react_default.a.createElement(menu["a" /* default */], extends_default()({}, customProps, { style: menuStyle }));
    };

    /**
     * render menu item
     * @protected
     * @param {Array} dataSource
     */


    Base.prototype.renderMenuItem = function renderMenuItem(dataSource) {
        var _this7 = this;

        var _props5 = this.props,
            prefix = _props5.prefix,
            itemRender = _props5.itemRender,
            showDataSourceChildren = _props5.showDataSourceChildren;
        // If it has.

        var searchKey = void 0;
        if (this.isAutoComplete) {
            // In AutoComplete, value is the searchKey
            searchKey = this.state.value;
        } else {
            searchKey = this.state.searchValue;
        }

        return dataSource.map(function (item, index) {
            if (!item) {
                return null;
            }
            if (Array.isArray(item.children) && showDataSourceChildren) {
                return react_default.a.createElement(
                    MenuGroup,
                    { key: index, label: item.label },
                    _this7.renderMenuItem(item.children)
                );
            } else {
                var itemProps = {
                    role: 'option',
                    key: item.value,
                    className: prefix + 'select-menu-item',
                    disabled: item.disabled
                };

                if ('title' in item) {
                    itemProps.title = item.title;
                }

                return react_default.a.createElement(
                    MenuItem,
                    itemProps,
                    itemRender(item, searchKey)
                );
            }
        });
    };

    /**
     * 点击 arrow 或 label 的时候焦点切到 input 中
     * @override
     */
    Base.prototype.focusInput = function focusInput() {
        this.inputRef.focus();
    };

    Base.prototype.focus = function focus() {
        var _inputRef;

        (_inputRef = this.inputRef).focus.apply(_inputRef, arguments);
    };

    Base.prototype.beforeOpen = function beforeOpen() {
        var _state2 = this.state,
            value = _state2.value,
            highlightKey = _state2.highlightKey;

        if (this.props.mode === 'single' && !value && !highlightKey) {
            this.setFirstHightLightKeyForMenu();
        }
        this.syncWidth();
    };

    Base.prototype.beforeClose = function beforeClose() {};

    Base.prototype.afterClose = function afterClose() {};

    Base.prototype.shouldAutoWidth = function shouldAutoWidth() {
        if (this.props.popupComponent) {
            return false;
        }

        return this.props.autoWidth;
    };

    Base.prototype.render = function render(props) {
        var _classNames2;

        var prefix = props.prefix,
            mode = props.mode,
            popupProps = props.popupProps,
            popupContainer = props.popupContainer,
            popupClassName = props.popupClassName,
            popupStyle = props.popupStyle,
            popupContent = props.popupContent,
            canCloseByTrigger = props.canCloseByTrigger,
            followTrigger = props.followTrigger,
            cache = props.cache,
            popupComponent = props.popupComponent,
            isPreview = props.isPreview,
            renderPreview = props.renderPreview,
            style = props.style,
            className = props.className;


        var cls = classnames_default()((_classNames2 = {}, _classNames2[prefix + 'select-auto-complete-menu'] = !popupContent && this.isAutoComplete, _classNames2[prefix + 'select-' + mode + '-menu'] = !popupContent && !!mode, _classNames2), popupClassName || popupProps.className);

        if (isPreview) {
            if (this.isAutoComplete) {
                return react_default.a.createElement(input["a" /* default */], {
                    style: style,
                    className: className,
                    isPreview: isPreview,
                    renderPreview: renderPreview,
                    value: this.state.value
                });
            } else {
                var valueDS = this.valueDataSource.valueDS;
                if (typeof renderPreview === 'function') {
                    var _classNames3;

                    var previewCls = classnames_default()((_classNames3 = {}, _classNames3[prefix + 'form-preview'] = true, _classNames3[className] = !!className, _classNames3));
                    return react_default.a.createElement(
                        'div',
                        { style: style, className: previewCls },
                        renderPreview(valueDS, this.props)
                    );
                } else {
                    var fillProps = this.props.fillProps;

                    if (mode === 'single') {
                        return react_default.a.createElement(input["a" /* default */], {
                            style: style,
                            className: className,
                            isPreview: isPreview,
                            value: fillProps ? valueDS[fillProps] : valueDS.label
                        });
                    } else {
                        return react_default.a.createElement(input["a" /* default */], {
                            style: style,
                            className: className,
                            isPreview: isPreview,
                            value: valueDS.map(function (i) {
                                return i.label;
                            }).join(', ')
                        });
                    }
                }
            }
        }

        var _props = extends_default()({
            triggerType: 'click',
            autoFocus: !!this.props.popupAutoFocus,
            cache: cache
        }, popupProps, {
            //beforeOpen node not mount, afterOpen too slow.
            // from display:none to block, we may need to recompute width
            beforeOpen: makeChain(this.beforeOpen, popupProps.beforeOpen),
            beforeClose: makeChain(this.beforeClose, popupProps.beforeClose),
            afterClose: makeChain(this.afterClose, popupProps.afterClose),
            canCloseByTrigger: canCloseByTrigger,
            followTrigger: followTrigger,
            visible: this.state.visible,
            onVisibleChange: this.handleVisibleChange,
            shouldUpdatePosition: true,
            container: popupContainer || popupProps.container,
            className: cls,
            style: popupStyle || popupProps.style
        });

        var Tag = popupComponent ? popupComponent : Popup;

        return react_default.a.createElement(
            Tag,
            extends_default()({}, _props, { trigger: this.renderSelect(), ref: this.savePopupRef }),
            popupContent ? react_default.a.createElement(
                'div',
                {
                    className: prefix + 'select-popup-wrap',
                    style: this.shouldAutoWidth() ? { width: this.width } : {}
                },
                popupContent
            ) : this.renderMenu()
        );
    };

    return Base;
}(react_default.a.Component), _class.propTypes = {
    prefix: prop_types_default.a.string,
    /**
     * 选择器尺寸
     */
    size: prop_types_default.a.oneOf(['small', 'medium', 'large']),
    // 当前值，用于受控模式
    value: prop_types_default.a.any, // to be override
    // 初始化的默认值
    defaultValue: prop_types_default.a.any, // to be override
    /**
     * 没有值的时候的占位符
     */
    placeholder: prop_types_default.a.string,
    /**
     * 下拉菜单是否与选择器对齐
     */
    autoWidth: prop_types_default.a.bool,
    /**
     * 自定义内联 label
     */
    label: prop_types_default.a.node,
    /**
     * 是否有清除按钮（单选模式有效）
     */
    hasClear: prop_types_default.a.bool,
    /**
     * 校验状态
     */
    state: prop_types_default.a.oneOf(['error', 'loading']),
    /**
     * 是否只读，只读模式下可以展开弹层但不能选
     */
    readOnly: prop_types_default.a.bool,
    /**
     * 是否禁用选择器
     */
    disabled: prop_types_default.a.bool,
    /**
     * 当前弹层是否显示
     */
    visible: prop_types_default.a.bool,
    /**
     * 弹层初始化是否显示
     */
    defaultVisible: prop_types_default.a.bool,
    /**
     * 弹层显示或隐藏时触发的回调
     * @param {Boolean} visible 弹层是否显示
     * @param {String} type 触发弹层显示或隐藏的来源 fromContent 表示由Dropdown内容触发； fromTrigger 表示由trigger的点击触发； docClick 表示由document的点击触发
     */
    onVisibleChange: prop_types_default.a.func,
    /**
     * 弹层挂载的容器节点
     */
    popupContainer: prop_types_default.a.any,
    /**
     * 弹层的 className
     */
    popupClassName: prop_types_default.a.any,
    /**
     * 弹层的内联样式
     */
    popupStyle: prop_types_default.a.object,
    /**
     * 添加到弹层上的属性
     */
    popupProps: prop_types_default.a.object,
    /**
     * 是否跟随滚动
     */
    followTrigger: prop_types_default.a.bool,
    /**
     * 自定义弹层的内容
     */
    popupContent: prop_types_default.a.node,
    /**
     * 添加到菜单上的属性
     */
    menuProps: prop_types_default.a.object,
    /**
     * 是否使用本地过滤，在数据源为远程的时候需要关闭此项
     */
    filterLocal: prop_types_default.a.bool,
    /**
     * 本地过滤方法，返回一个 Boolean 值确定是否保留
     * @param {String} key 搜索关键字
     * @param {Object} item 渲染节点的item
     * @return {Boolean} 是否匹配
     */
    filter: prop_types_default.a.func,
    /**
     * 默认高亮的 key，不要和 autoHighlightFirstItem 同时使用
     */
    defaultHighlightKey: prop_types_default.a.string,
    /**
     * 高亮 key，不要和 autoHighlightFirstItem 同时使用，用于受控模式
     */
    highlightKey: prop_types_default.a.string,
    /**
     * 键盘上下键切换菜单高亮选项的回调
     */
    onToggleHighlightItem: prop_types_default.a.func,
    /**
     * 自动高亮第一个元素
     */
    autoHighlightFirstItem: prop_types_default.a.bool,
    /**
     * 是否开启虚拟滚动模式
     */
    useVirtual: prop_types_default.a.bool,
    // 自定义类名
    className: prop_types_default.a.any,
    children: prop_types_default.a.any,
    dataSource: prop_types_default.a.array,
    itemRender: prop_types_default.a.func,
    mode: prop_types_default.a.string,
    notFoundContent: prop_types_default.a.node,
    locale: prop_types_default.a.object,
    rtl: prop_types_default.a.bool,
    popupComponent: prop_types_default.a.any,
    /**
     * 是否为预览态
     */
    isPreview: prop_types_default.a.bool,
    /**
     * 预览态模式下渲染的内容
     * @param {number} value 评分值
     */
    renderPreview: prop_types_default.a.func,
    showDataSourceChildren: prop_types_default.a.bool
}, _class.defaultProps = {
    prefix: 'next-',
    size: 'medium',
    autoWidth: true,
    onChange: noop,
    onVisibleChange: noop,
    onToggleHighlightItem: noop,
    popupProps: {},
    filterLocal: true,
    filter: util_filter,
    itemRender: function itemRender(item) {
        return item.label || item.value;
    },
    locale: zh_cn["a" /* default */].Select,
    autoHighlightFirstItem: true,
    showDataSourceChildren: true,
    defaultHighlightKey: null
}, _temp);
base_Base.displayName = 'Base';

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/select/select.js






var select_class, select_temp;

/* eslint-disable valid-jsdoc */













var select_bindCtx = util["f" /* func */].bindCtx,
    select_noop = util["f" /* func */].noop;

var isIE9 = util["c" /* env */].ieVersion === 9;

/**
 * 无障碍化注意事项:
 * 1. Select 无搜索情况下，不应该让 Input 可focus，此时外层wrap必须可focus，并且需要相应focus事件让外边框发生变化
 *
 * TODO: hightLight 后续改造注意点
 * 1. hightLight 跟随点击变化(fixed) 2. 弹窗打开时根据 是否高亮第一个选项的 api开关设置是否hightLight 第一项
 */

// 自定义弹层：1. 不需要关心Menu的点击事件 2. 不需要关心dataSource变化

/**
 * Select
 */
var select_Select = (select_temp = select_class = function (_Base) {
    inherits_default()(Select, _Base);

    function Select(props) {
        classCallCheck_default()(this, Select);

        // because dataSource maybe updated while select a item, so we should cache choosen value's item
        var _this = possibleConstructorReturn_default()(this, _Base.call(this, props));

        _this.handleWrapClick = function (e) {
            // ignore click on input to choose text
            if (e.target.nodeName !== 'INPUT') {
                e.preventDefault();
            }
            _this.focusInput();
        };

        _this.handleArrowClick = function (e) {
            e.preventDefault();
            _this.focusInput();

            // because of can not close Popup by click Input while hasSearch.
            // so when Popup open and hasSearch, we should close Popup intentionally
            _this.state.visible && _this.hasSearch() && _this.setVisible(false);
        };

        _this.handleClear = function (e) {
            e.stopPropagation();
            _this.handleChange(undefined, 'clear');
        };

        _this.valueDataSource = {
            valueDS: [], // [{value,label}]
            mapValueDS: {} // {value: {value,label}}
        };

        var searchValue = 'searchValue' in props ? props.searchValue : '';

        _this.dataStore.setOptions({
            key: searchValue,
            addonKey: props.mode === 'tag' // tag 模式手动输入的数据
        });

        extends_default()(_this.state, {
            searchValue: searchValue,
            dataSource: _this.setDataSource(props)
        });

        // 根据value和计算后的dataSource，更新value对应的详细数据valueDataSource
        if (typeof _this.state.value !== 'undefined') {
            _this.valueDataSource = getValueDataSource(_this.state.value, _this.valueDataSource.mapValueDS, _this.dataStore.getMapDS());
        }

        select_bindCtx(_this, ['handleMenuSelect', 'handleItemClick', 'handleSearch', 'handleSearchKeyDown', 'handleSelectAll', 'maxTagPlaceholder']);
        return _this;
    }

    Select.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
        var state = {};

        if ('value' in nextProps && nextProps.value !== prevState.value) {
            extends_default()(state, {
                value: nextProps.value
            });
        }

        if ('highlightKey' in nextProps && nextProps.highlightKey !== prevState.highlightKey) {
            extends_default()(state, {
                highlightKey: nextProps.highlightKey
            });
        }

        if ('searchValue' in nextProps && nextProps.searchValue !== prevState.searchValue) {
            var searchValue = nextProps.searchValue;
            extends_default()(state, {
                searchValue: searchValue === undefined || searchValue === null ? '' : searchValue
            });
        }

        if ('visible' in nextProps && nextProps.visible !== prevState.visible) {
            extends_default()(state, {
                visible: nextProps.visible
            });
        }

        if (Object.keys(state).length) {
            return state;
        }

        return null;
    };

    Select.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        var props = this.props;
        if ('searchValue' in props && this.state.searchValue !== prevState.searchValue) {
            this.dataStore.setOptions({ key: this.state.searchValue });
        }

        if (props.mode !== prevProps.mode) {
            this.dataStore.setOptions({
                addonKey: props.mode === 'tag'
            });
        }
        if (props.mode !== prevProps.mode) {
            this.dataStore.setOptions({
                addonKey: props.mode === 'tag'
            });
        }
        if (props.filter !== prevProps.filter) {
            this.dataStore.setOptions({
                filter: props.filter
            });
        }
        if (props.filterLocal !== prevProps.filterLocal) {
            this.dataStore.setOptions({
                filterLocal: props.filterLocal
            });
        }

        if (prevProps.children !== props.children || prevProps.dataSource !== props.dataSource) {
            /* eslint-disable react/no-did-update-set-state */
            this.setState({
                dataSource: this.setDataSource(props)
            });

            if (!props.popupContent) {
                this.setFirstHightLightKeyForMenu();
            }
        }

        if ('value' in props) {
            this.valueDataSource = getValueDataSource(props.value, this.valueDataSource.mapValueDS, this.dataStore.getMapDS());
            this.updateSelectAllYet(this.valueDataSource.value);
        } else if ('defaultValue' in props && props.defaultValue === this.valueDataSource.value && (props.children !== prevProps.children || props.dataSource !== prevProps.dataSource)) {
            // has defaultValue and value not changed and dataSource changed
            // fix: set defaultValue first, then update dataSource.
            this.valueDataSource = getValueDataSource(props.defaultValue, this.valueDataSource.mapValueDS, this.dataStore.getMapDS());
        }

        if (prevProps.label !== this.props.label || prevState.value !== this.state.value || props.searchValue !== this.state.searchValue) {
            this.syncWidth();
        }
    };

    Select.prototype.componentDidMount = function componentDidMount() {
        if (isIE9) {
            this.ie9Hack();
        }
        _Base.prototype.componentDidMount.call(this);
    };

    // ie9 下 table-cell 布局不支持宽度超出隐藏


    Select.prototype.ie9Hack = function ie9Hack() {
        try {
            var width = this.selectDOM.currentStyle.width;
            this.setState({
                fixWidth: width !== 'auto'
            });
        } catch (e) {
            //
        }
    };

    Select.prototype.useDetailValue = function useDetailValue() {
        var _props = this.props,
            popupContent = _props.popupContent,
            useDetailValue = _props.useDetailValue,
            dataSource = _props.dataSource;

        return useDetailValue || popupContent && !dataSource;
    };

    Select.prototype.hasSearch = function hasSearch() {
        var _props2 = this.props,
            showSearch = _props2.showSearch,
            mode = _props2.mode;

        return showSearch || mode === 'tag';
    };

    /**
     * Menu.Item onSelect
     * @private
     * @param  {Array<string>} keys
     * @
     */


    Select.prototype.handleMenuSelect = function handleMenuSelect(keys, item) {
        var _props3 = this.props,
            mode = _props3.mode,
            readOnly = _props3.readOnly,
            disabled = _props3.disabled;


        if (readOnly || disabled) {
            return false;
        }

        var isSingle = mode === 'single';

        if (isSingle) {
            // 单选
            return this.handleSingleSelect(keys[0], 'itemClick');
        } else {
            // 正常多选
            return this.handleMultipleSelect(keys, 'itemClick', item.props && item.props._key);
        }
    };

    Select.prototype.handleItemClick = function handleItemClick() {
        if (!this.props.popupAutoFocus) {
            this.focusInput();
        }
    };

    /**
     * 单选模式
     */


    Select.prototype.handleSingleSelect = function handleSingleSelect(key, triggerType) {
        // TODO: 这里 cacheValue=false 有问题，dataSource 更新的时候就应该处理
        var cacheValue = this.props.cacheValue;
        // get data only from dataStore while cacheValue=false

        var itemObj = getValueDataSource(key, cacheValue ? this.valueDataSource.mapValueDS : {}, this.dataStore.getMapDS());
        this.valueDataSource = itemObj;

        this.setVisible(false, triggerType);

        if (this.useDetailValue()) {
            return this.handleChange(itemObj.valueDS, triggerType);
        } else {
            this.handleChange(itemObj.value, triggerType, itemObj.valueDS);
        }

        this.setState({
            highlightKey: key
        });

        // 清空搜索
        if (!('searchValue' in this.props) && this.state.searchValue) {
            this.handleSearchClear(triggerType);
        }
    };

    /**
     * 多选模式 multiple/tag
     */


    Select.prototype.handleMultipleSelect = function handleMultipleSelect(keys, triggerType, key, keepSearchValue) {
        var _this2 = this;

        var itemObj = getValueDataSource(keys, this.valueDataSource.mapValueDS, this.dataStore.getMapDS());

        var _props4 = this.props,
            cacheValue = _props4.cacheValue,
            mode = _props4.mode,
            hiddenSelected = _props4.hiddenSelected;

        // cache those value maybe not exists in dataSource

        if (cacheValue || mode === 'tag') {
            this.valueDataSource = itemObj;
        }

        if (hiddenSelected) {
            this.setVisible(false, triggerType);
        }

        // 因为搜索后会设置 hightLight 为第一个item，menu渲染会自动滚动到 hightLight 的元素上面。
        // 所以设置 hightLight 为当前选中项避免滚动
        key && this.state.visible && this.setState({
            highlightKey: key
        });

        if (this.useDetailValue()) {
            this.handleChange(itemObj.valueDS, triggerType);
        } else {
            this.handleChange(itemObj.value, triggerType, itemObj.valueDS);
        }

        this.updateSelectAllYet(itemObj.value);

        // 清空搜索
        if (!('searchValue' in this.props) && this.state.searchValue && !keepSearchValue) {
            // 因为 SearchValue 被 clear 后会重新渲染 Menu，所以在 Overlay 检测 safeNode 的时候 e.target 可能会找不到导致弹窗关闭
            setTimeout(function () {
                _this2.handleSearchClear(triggerType);
            });
        }
    };

    Select.prototype.updateSelectAllYet = function updateSelectAllYet(value) {
        var _this3 = this;

        // multiple mode
        // is current state select all or not
        this.selectAllYet = false;
        if (this.props.hasSelectAll && Array.isArray(value)) {
            var selectAllValues = this.dataStore.getEnableDS().map(function (item) {
                return item.value;
            });

            if (selectAllValues.length <= value.length) {
                this.selectAllYet = true;

                selectAllValues.forEach(function (val) {
                    if (value.indexOf(val) === -1) {
                        _this3.selectAllYet = false;
                        return;
                    }
                });
            }
        }
    };

    Select.prototype.handleSearchValue = function handleSearchValue(value) {
        if (this.state.searchValue === value) {
            return;
        }

        var filterLocal = this.props.filterLocal;


        if (filterLocal) {
            if (!('searchValue' in this.props)) {
                this.setState({
                    searchValue: value,
                    dataSource: this.dataStore.updateByKey(value)
                });
                this.setFirstHightLightKeyForMenu();
            }
        } else if (!('searchValue' in this.props)) {
            this.setState({
                searchValue: value
            });
        }
    };

    /**
     * Handle search input change event
     * @param {Event} e change Event
     */


    Select.prototype.handleSearch = function handleSearch(value) {
        this.handleSearchValue(value);

        // inputing should trigger popup open
        if (!this.state.visible && value) {
            this.setVisible(true);
        }

        this.props.onSearch(value);
    };

    Select.prototype.handleSearchClear = function handleSearchClear(triggerType) {
        this.handleSearchValue('');
        this.props.onSearchClear(triggerType);
    };

    // 搜索框 keyDown 事件


    Select.prototype.handleSearchKeyDown = function handleSearchKeyDown(e) {
        var _props5 = this.props,
            popupContent = _props5.popupContent,
            onKeyDown = _props5.onKeyDown,
            showSearch = _props5.showSearch,
            mode = _props5.mode,
            hasClear = _props5.hasClear,
            onToggleHighlightItem = _props5.onToggleHighlightItem,
            readOnly = _props5.readOnly,
            disabled = _props5.disabled;


        if (popupContent) {
            return onKeyDown(e);
        }

        var proxy = 'search';
        var hasSearch = this.hasSearch();

        switch (e.keyCode) {
            case util["a" /* KEYCODE */].UP:
                e.preventDefault();
                onToggleHighlightItem(this.toggleHighlightItem(-1, e), 'up');
                break;
            case util["a" /* KEYCODE */].DOWN:
                e.preventDefault();
                onToggleHighlightItem(this.toggleHighlightItem(1, e), 'down');
                break;
            case util["a" /* KEYCODE */].ENTER:
                e.preventDefault();
                if (readOnly || disabled) {
                    break;
                }
                this.chooseHighlightItem(proxy, e);
                break;
            case util["a" /* KEYCODE */].ESC:
                e.preventDefault();
                this.state.visible && this.setVisible(false, 'keyDown');
                break;
            case util["a" /* KEYCODE */].SPACE:
                e.stopPropagation();
                !hasSearch && e.preventDefault();
                break;
            case util["a" /* KEYCODE */].BACKSPACE:
                if (readOnly || disabled) {
                    break;
                }
                if (mode === 'multiple' && showSearch || mode === 'tag') {
                    // 在多选并且有搜索的情况下，删除最后一个 tag
                    var valueDS = this.valueDataSource.valueDS;
                    if (valueDS && valueDS.length && !valueDS[valueDS.length - 1].disabled) {
                        this.handleDeleteTag(e);
                    }
                } else if (mode === 'single' && hasClear && !this.state.visible) {
                    // 单选、非展开、并且可清除的情况，允许按删除键清除
                    this.handleClear(e);
                }
                break;
            default:
                break;
        }

        onKeyDown(e);
    };

    Select.prototype.chooseMultipleItem = function chooseMultipleItem(key) {
        var value = this.state.value || [];
        var keys = value.map(function (v) {
            return valueToSelectKey(v);
        });

        var keepSearchValue = false;

        var index = keys.map(function (v) {
            return '' + v;
        }).indexOf(key);

        if (index > -1) {
            // unselect
            keys.splice(index, 1);
            keepSearchValue = true; // 回车反选保留搜索值
        } else {
            // select
            keys.push(key);
        }

        this.handleMultipleSelect(keys, 'enter', null, keepSearchValue);
    };

    // 回车 选择高亮的 item


    Select.prototype.chooseHighlightItem = function chooseHighlightItem(proxy, e) {
        var mode = this.props.mode;


        if (!this.state.visible) {
            // input tag by itself
            if (mode === 'tag' && this.state.searchValue) {
                this.chooseMultipleItem(this.state.searchValue);
            }
            return false;
        }

        var highlightKey = this.state.highlightKey;

        // 没有高亮选项 或者 没有可选菜单

        if (highlightKey === null || !this.dataStore.getMenuDS().length) {
            return;
        }

        if (mode === 'single') {
            this.handleSingleSelect(highlightKey, 'enter');
        } else {
            this.chooseMultipleItem(highlightKey);
            // 阻止事件冒泡到最外层，让Popup 监听到触发弹层关闭
            e && e.stopPropagation();
        }
    };

    /**
     * Handle Tag close event
     * @param  {Object} item
     * @return {Boolean} false  return false to prevent auto close
     * ----
     * It MUST be multiple mode, needn't additional judgement
     */


    Select.prototype.handleTagClose = function handleTagClose(item) {
        var readOnly = this.props.readOnly;

        if (readOnly) return false;
        if (this.useDetailValue()) {
            var value = this.state.value.filter(function (v) {
                return item.value !== v.value;
            });

            this.handleChange(value, 'tag');
        } else {
            // filter out current item, and then call handleMenuSelect
            var _value = this.state.value.filter(function (v) {
                return item.value !== v;
            });

            this.handleMultipleSelect(_value, 'tag');
        }

        this.props.onRemove(item);

        // prevent tag close
        return false;
    };

    // eslint-disable-next-line valid-jsdoc
    /**
     * Handle BACKSPACE key event
     * @param {Event} e keyDown event
     * ---
     * It MUST be multiple mode
     */


    Select.prototype.handleDeleteTag = function handleDeleteTag(e) {
        var value = this.state.value;
        var searchValue = this.state.searchValue;

        if (searchValue || !value || !value.length) {
            return false;
        }

        e.preventDefault();

        var nextValues = value.slice(0, value.length - 1);
        // 手动调用 handleMenuSelect 时直接传入原生的 value，可以减少 toString 的操作

        if (this.useDetailValue()) {
            this.handleChange(nextValues, 'tag');
        } else {
            this.handleMultipleSelect(nextValues, 'tag');
        }
    };

    /**
     * Handle SelectAll span click event
     * @param {Event} e click event
     */


    Select.prototype.handleSelectAll = function handleSelectAll(e) {
        e && e.preventDefault();
        var nextValues = void 0;

        if (this.selectAllYet) {
            nextValues = [];
        } else {
            nextValues = this.dataStore.getEnableDS().map(function (item) {
                return item.value;
            });
        }

        // 直接传 values，减少 toString 操作
        this.handleMultipleSelect(nextValues, 'selectAll');
    };

    Select.prototype.handleVisibleChange = function handleVisibleChange(visible, type) {
        this.setVisible(visible, type);
    };

    Select.prototype.afterClose = function afterClose() {
        // 关闭的时候清空搜索值
        if (this.hasSearch()) {
            this.handleSearchClear('popupClose');
        }
    };

    Select.prototype.maxTagPlaceholder = function maxTagPlaceholder(selectedValues, totalValues) {
        var locale = this.props.locale;


        return '' + util["k" /* str */].template(locale.maxTagPlaceholder, {
            selected: selectedValues.length,
            total: totalValues.length
        });
    };

    /**
     * 如果用户是自定义的弹层，则直接以 value 为准，不再校验 dataSource
     * @param {object} props
     */


    Select.prototype.renderValues = function renderValues() {
        var _this4 = this;

        var _props6 = this.props,
            prefix = _props6.prefix,
            mode = _props6.mode,
            size = _props6.size,
            valueRender = _props6.valueRender,
            fillProps = _props6.fillProps,
            disabled = _props6.disabled,
            maxTagCount = _props6.maxTagCount,
            maxTagPlaceholder = _props6.maxTagPlaceholder,
            tagInline = _props6.tagInline,
            tagClosable = _props6.tagClosable;

        var value = this.state.value;

        if (isNull(value)) {
            return null;
        }

        // get detail value
        if (!this.useDetailValue()) {
            if (value === this.valueDataSource.value) {
                value = this.valueDataSource.valueDS;
            } else {
                value = getValueDataSource(value, this.valueDataSource.mapValueDS, this.dataStore.getMapDS()).valueDS;
            }
        }

        if (mode === 'single') {
            if (!value) {
                return null;
            }

            var retvalue = fillProps && (typeof value === 'undefined' ? 'undefined' : typeof_default()(value)) === 'object' && fillProps in value ? value[fillProps] : valueRender(value);
            // 0 => '0'
            return typeof retvalue === 'number' ? retvalue.toString() : retvalue;
        } else if (value) {
            var limitedCountValue = value;
            var maxTagPlaceholderEl = void 0;
            var totalValue = this.dataStore.getFlattenDS();
            var holder = 'maxTagPlaceholder' in this.props ? maxTagPlaceholder : this.maxTagPlaceholder;

            if (maxTagCount !== undefined && value.length > maxTagCount && !tagInline) {
                limitedCountValue = limitedCountValue.slice(0, maxTagCount);
                maxTagPlaceholderEl = react_default.a.createElement(
                    tag["a" /* default */],
                    { key: '_count', type: 'primary', size: size === 'large' ? 'medium' : 'small', animation: false },
                    holder(value, totalValue)
                );
            }

            if (value.length > 0 && tagInline) {
                maxTagPlaceholderEl = react_default.a.createElement(
                    'div',
                    { className: prefix + 'select-tag-compact', key: '_count' },
                    holder(value, totalValue)
                );
            }

            value = limitedCountValue;
            if (!Array.isArray(value)) {
                value = [value];
            }

            var selectedValueNodes = value.map(function (v) {
                if (!v) {
                    return null;
                }
                var labelNode = fillProps ? v[fillProps] : valueRender(v);

                return react_default.a.createElement(
                    tag["a" /* default */],
                    {
                        key: v.value,
                        disabled: disabled || v.disabled,
                        type: 'primary',
                        size: size === 'large' ? 'medium' : 'small',
                        animation: false,
                        onClose: _this4.handleTagClose.bind(_this4, v),
                        closable: tagClosable
                    },
                    labelNode
                );
            });

            if (maxTagPlaceholderEl) {
                if (tagInline) {
                    selectedValueNodes.unshift(maxTagPlaceholderEl);
                } else {
                    selectedValueNodes.push(maxTagPlaceholderEl);
                }
            }
            return selectedValueNodes;
        }

        return null;
    };
    /**
     * 1. fix flash while click <label/>
     * 2. fix onBlur while has clear
     * @returns
     */


    Select.prototype.hasClear = function hasClear() {
        var _props7 = this.props,
            hasClear = _props7.hasClear,
            readOnly = _props7.readOnly,
            disabled = _props7.disabled,
            showSearch = _props7.showSearch;
        var _state = this.state,
            value = _state.value,
            visible = _state.visible;


        return typeof value !== 'undefined' && value !== null && hasClear && !readOnly && !disabled && !(showSearch && visible);
    };

    /**
     * render arrow
     * @param {object} props
     * @param {function} [clickHandler]
     */


    Select.prototype.renderExtraNode = function renderExtraNode() {
        var _props8 = this.props,
            hasArrow = _props8.hasArrow,
            hasClear = _props8.hasClear,
            prefix = _props8.prefix;


        var ret = [];

        if (hasArrow) {
            ret.push(react_default.a.createElement(
                'span',
                { key: 'arrow', 'aria-hidden': true, onClick: this.handleArrowClick, className: prefix + 'select-arrow' },
                react_default.a.createElement(icon["a" /* default */], { type: 'arrow-down', className: prefix + 'select-symbol-fold' })
            ));
        }

        // do not use this.hasClear() here, to make sure clear btn always exists, can not influenced by apis like `disabled` `readOnly`
        if (hasClear) {
            ret.push(react_default.a.createElement(
                'span',
                { key: 'clear', 'aria-hidden': true, onClick: this.handleClear, className: prefix + 'select-clear' },
                react_default.a.createElement(icon["a" /* default */], { type: 'delete-filling' })
            ));
        }

        return ret;
    };

    /**
     * 选择器
     * @override
     * @param {object} props
     */


    Select.prototype.renderSelect = function renderSelect() {
        var _classNames,
            _this5 = this;

        var _props9 = this.props,
            prefix = _props9.prefix,
            showSearch = _props9.showSearch,
            placeholder = _props9.placeholder,
            mode = _props9.mode,
            size = _props9.size,
            className = _props9.className,
            style = _props9.style,
            readOnly = _props9.readOnly,
            disabled = _props9.disabled,
            hasBorder = _props9.hasBorder,
            label = _props9.label,
            locale = _props9.locale,
            state = _props9.state,
            onBlur = _props9.onBlur,
            onFocus = _props9.onFocus,
            onMouseEnter = _props9.onMouseEnter,
            onMouseLeave = _props9.onMouseLeave,
            rtl = _props9.rtl;

        var others = util["j" /* obj */].pickOthers(Select.propTypes, this.props);
        var othersData = util["j" /* obj */].pickAttrsWith(others, 'data-');

        var visible = this.state.visible;
        var isSingle = mode === 'single';
        var hasSearch = this.hasSearch();
        var valueNodes = this.renderValues();

        // compatible with selectPlaceHolder. TODO: removed in 2.0 version
        var _placeholder = placeholder || locale.selectPlaceholder || locale.selectPlaceHolder;
        if (valueNodes && valueNodes.length) {
            _placeholder = null;
        }

        // 弹窗展开时将当前的值作为 placeholder，这个功能的前提是 valueNode 必须是一个字符串
        if (showSearch && visible && isSingle && typeof valueNodes === 'string') {
            _placeholder = valueNodes;
        }

        // 下拉箭头
        var extra = this.renderExtraNode();

        var triggerClazz = classnames_default()([prefix + 'select', prefix + 'select-trigger', prefix + 'select-' + mode, '' + prefix + size, className], (_classNames = {}, _classNames[prefix + 'active'] = visible, _classNames[prefix + 'inactive'] = !visible, _classNames[prefix + 'no-search'] = !hasSearch, _classNames[prefix + 'has-search'] = hasSearch, _classNames[prefix + 'select-in-ie'] = isIE9, _classNames[prefix + 'select-in-ie-fixwidth'] = this.state.fixWidth, _classNames[prefix + 'has-clear'] = this.hasClear(), _classNames));

        var valuetext = this.valueDataSource.valueDS ? this.valueDataSource.valueDS.label : '';
        return react_default.a.createElement(
            'span',
            extends_default()({}, othersData, {
                className: triggerClazz,
                style: style,
                dir: rtl ? 'rtl' : undefined,
                ref: this.saveSelectRef,
                onClick: this.handleWrapClick,
                onMouseEnter: onMouseEnter,
                onMouseLeave: onMouseLeave,
                onMouseDown: this.handleWrapClick
            }),
            react_default.a.createElement(input["a" /* default */], extends_default()({
                'aria-valuetext': valuetext
            }, util["j" /* obj */].pickOthers(othersData, others), {
                role: 'combobox',
                tabIndex: 0,
                'aria-expanded': this.state.visible,
                'aria-disabled': disabled,
                state: state,
                label: label,
                extra: extra,
                value: this.state.searchValue,
                size: size,
                readOnly: !this.hasSearch() || readOnly,
                disabled: disabled,
                placeholder: _placeholder,
                hasBorder: hasBorder,
                hasClear: false,
                htmlSize: '1',
                inputRender: function inputRender(inputEl) {
                    return _this5.renderSearchInput(valueNodes, _placeholder, inputEl);
                },
                onChange: this.handleSearch,
                onKeyDown: this.handleSearchKeyDown,
                onFocus: onFocus,
                onBlur: onBlur,
                className: prefix + 'select-inner',
                ref: this.saveInputRef
            })),
            react_default.a.createElement(
                'span',
                { className: prefix + 'sr-only', 'aria-live': 'polite' },
                this.state.srReader
            )
        );
    };

    Select.prototype.renderSearchInput = function renderSearchInput(valueNodes, placeholder, inputEl) {
        var _classNames2;

        var _props10 = this.props,
            prefix = _props10.prefix,
            mode = _props10.mode,
            tagInline = _props10.tagInline;

        var isSingle = mode === 'single';

        var mirrorText = this.state.searchValue;

        var cls = classnames_default()((_classNames2 = {}, _classNames2[prefix + 'select-values'] = true, _classNames2[prefix + 'input-text-field'] = true, _classNames2[prefix + 'select-compact'] = !isSingle && tagInline, _classNames2));

        var searchInput = [isSingle && valueNodes ? react_default.a.createElement(
            'em',
            { key: 'select-value' },
            valueNodes
        ) : valueNodes];
        var triggerSearch = react_default.a.createElement(
            'span',
            { key: 'trigger-search', className: prefix + 'select-trigger-search' },
            inputEl,
            react_default.a.createElement(
                'span',
                { 'aria-hidden': true },
                mirrorText || placeholder,
                '\xA0'
            )
        );

        if (!isSingle && tagInline) {
            searchInput.unshift(triggerSearch);
        } else {
            searchInput.push(triggerSearch);
        }

        return react_default.a.createElement(
            'span',
            { className: cls },
            searchInput
        );
    };

    /**
     * 渲染弹层的 header 内容
     * @override
     * @param {object} props
     */


    Select.prototype.renderMenuHeader = function renderMenuHeader() {
        var _classNames3, _classNames4;

        var _props11 = this.props,
            prefix = _props11.prefix,
            hasSelectAll = _props11.hasSelectAll,
            mode = _props11.mode,
            locale = _props11.locale,
            menuProps = _props11.menuProps;


        if (menuProps && 'header' in menuProps) {
            return menuProps.header;
        }

        var sourceCount = this.dataStore.getEnableDS().length;
        // 多选模式下才有全选
        if (!hasSelectAll || mode === 'single' || !sourceCount) {
            return null;
        }

        var text = typeof hasSelectAll === 'boolean' ? locale.selectAll : hasSelectAll;

        var selectAllYet = this.selectAllYet;

        var cls = classnames_default()((_classNames3 = {}, _classNames3[prefix + 'select-all'] = true, _classNames3[prefix + 'selected'] = selectAllYet, _classNames3));

        var clsInner = classnames_default()((_classNames4 = {}, _classNames4[prefix + 'select-all-inner'] = true, _classNames4));

        // remove style={{'lineHeight': 'unset'}} in next Y
        // remove style={{'display': 'none'}} in next Y
        return react_default.a.createElement(
            'div',
            { key: 'all', onClick: this.handleSelectAll, className: cls, style: { lineHeight: 'unset' } },
            selectAllYet ? react_default.a.createElement(icon["a" /* default */], { className: prefix + 'menu-icon-selected', style: { display: 'none' }, type: 'select' }) : null,
            react_default.a.createElement(
                'span',
                { className: clsInner },
                text
            )
        );
    };

    Select.prototype.render = function render() {
        var mode = this.props.mode;

        var props = extends_default()({}, this.props);

        // forbid to close Popup by click Input while hasSearch
        if (this.hasSearch()) {
            props.canCloseByTrigger = false;
        }
        if (mode === 'single') {
            props.cache = true;
        }
        return _Base.prototype.render.call(this, props);
    };

    return Select;
}(base_Base), select_class.propTypes = extends_default()({}, base_Base.propTypes, {
    /**
     * 选择器模式
     */
    mode: prop_types_default.a.oneOf(['single', 'multiple', 'tag']),
    /**
     * 当前值，用于受控模式
     */
    value: prop_types_default.a.any,
    /**
     * 初始的默认值
     */
    defaultValue: prop_types_default.a.any,
    /**
     * Select发生改变时触发的回调
     * @param {*} value 选中的值
     * @param {String} actionType 触发的方式, 'itemClick', 'enter', 'tag'
     * @param {*} item 选中的值的对象数据 (useDetailValue=false有效)
     */
    onChange: prop_types_default.a.func,
    /**
     * 传入的数据源，可以动态渲染子项，详见 [dataSource的使用](#dataSource的使用)
     */
    dataSource: prop_types_default.a.arrayOf(prop_types_default.a.oneOfType([prop_types_default.a.shape({
        value: prop_types_default.a.any,
        label: prop_types_default.a.any,
        disabled: prop_types_default.a.bool,
        children: prop_types_default.a.array
    }), prop_types_default.a.bool, prop_types_default.a.number, prop_types_default.a.string])),
    /**
     * 是否有边框
     */
    hasBorder: prop_types_default.a.bool,
    /**
     * 是否有下拉箭头
     */
    hasArrow: prop_types_default.a.bool,
    /**
     * 展开后是否能搜索（tag 模式下固定为true）
     */
    showSearch: prop_types_default.a.bool,
    /**
     * 当搜索框值变化时回调
     * @param {String} value 数据
     */
    onSearch: prop_types_default.a.func,
    /**
     * 当搜索框值被(选择、弹窗关闭)导致清空时候的回调
     * @param {String} actionType 触发的方式, 'select'(选择清空), 'popupClose'(弹窗关闭清空)
     */
    onSearchClear: prop_types_default.a.func,
    /**
     * 多选模式下是否有全选功能
     */
    hasSelectAll: prop_types_default.a.oneOfType([prop_types_default.a.bool, prop_types_default.a.string]),
    /**
     * 填充到选择框里的值的 key
     */
    fillProps: prop_types_default.a.string,
    /**
     * value 使用对象类型 `{value, label}`, 同时 onChange 第一个参数返回也修改为 dataSource 中的对象
     */
    useDetailValue: prop_types_default.a.bool,
    /**
     * dataSource 变化的时是否保留已选的内容
     */
    cacheValue: prop_types_default.a.bool,
    /**
     * 渲染 Select 展现内容的方法
     * @param {Object} item 渲染节点的item
     * @return {ReactNode} 展现内容
     * @default item => `item.label || item.value`
     */
    valueRender: prop_types_default.a.func,
    /**
     * 渲染 MenuItem 内容的方法
     * @param {Object} item 渲染节点的item
     * @param {String} searchValue 搜索关键字（如果开启搜索）
     * @return {ReactNode} item node
     */
    itemRender: prop_types_default.a.func,
    /**
     * 弹层内容为空的文案
     */
    notFoundContent: prop_types_default.a.node,
    style: prop_types_default.a.object,
    /**
     * 受控搜索值，一般不需要设置
     * @type {[type]}
     */
    searchValue: prop_types_default.a.string,
    /**
     * 是否一行显示，仅在 mode 为 multiple 的时候生效
     */
    tagInline: prop_types_default.a.bool,
    /**
     * tag 是否可关闭
     */
    tagClosable: prop_types_default.a.bool,
    /**
     * 最多显示多少个 tag
     */
    maxTagCount: prop_types_default.a.number,
    /**
     * 隐藏多余 tag 时显示的内容，在 maxTagCount 生效时起作用
     * @param {object} selectedValues 当前已选中的元素
     * @param {object} totalValues 总待选元素
     */
    maxTagPlaceholder: prop_types_default.a.func,
    /**
     * 选择后是否立即隐藏菜单 (mode=multiple/tag 模式生效)
     */
    hiddenSelected: prop_types_default.a.bool,
    /**
     * tag 删除回调
     * @param {object} item 渲染节点的item
     */
    onRemove: prop_types_default.a.func,
    /**
     * 焦点事件
     */
    onFocus: prop_types_default.a.func,
    /**
     * 是否自动高亮第一个选项
     */
    // highlightFirstItem: PropTypes.bool,
    /**
     * 失去焦点事件
     */
    onBlur: prop_types_default.a.func,
    onMouseEnter: prop_types_default.a.func,
    onMouseLeave: prop_types_default.a.func,
    onKeyDown: prop_types_default.a.func,
    locale: prop_types_default.a.object,
    /**
     * 展开下拉菜单时是否自动焦点到弹层
     */
    popupAutoFocus: prop_types_default.a.bool,
    /**
     * 是否展示 dataSource 中 children
     */
    showDataSourceChildren: prop_types_default.a.bool
}), select_class.defaultProps = extends_default()({}, base_Base.defaultProps, {
    locale: zh_cn["a" /* default */].Select,
    mode: 'single',
    showSearch: false,
    cacheValue: true,
    tagInline: false,
    onSearch: select_noop,
    onSearchClear: select_noop,
    hasArrow: true,
    onRemove: select_noop,
    // highlightFirstItem: true,
    valueRender: function valueRender(item) {
        return item.label || item.value;
    },
    onKeyDown: select_noop,
    onFocus: select_noop,
    onBlur: select_noop,
    onMouseEnter: select_noop,
    onMouseLeave: select_noop,
    popupAutoFocus: false,
    tagClosable: true
}), select_class.displayName = 'Select', select_temp);


/* harmony default export */ var select_select = (Object(react_lifecycles_compat_es["polyfill"])(select_Select));
// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/select/auto-complete.js





var auto_complete_class, auto_complete_temp;











var auto_complete_bindCtx = util["f" /* func */].bindCtx,
    auto_complete_noop = util["f" /* func */].noop;

/**
 * Select.AutoComplete
 */

var auto_complete_AutoComplete = (auto_complete_temp = auto_complete_class = function (_Base) {
    inherits_default()(AutoComplete, _Base);

    function AutoComplete(props) {
        classCallCheck_default()(this, AutoComplete);

        var _this = possibleConstructorReturn_default()(this, _Base.call(this, props));

        _this.handleChange = function (value, proxy, item) {
            var _this$props = _this.props,
                disabled = _this$props.disabled,
                readOnly = _this$props.readOnly,
                filterLocal = _this$props.filterLocal;


            if (disabled || readOnly) {
                return false;
            }

            var actionType = typeof proxy === 'string' ? proxy : 'change';

            _this.isInputing = actionType === 'change';

            if (filterLocal) {
                _this.setState({
                    dataSource: _this.dataStore.updateByKey(value)
                });

                _this.shouldControlPopup(_this.props, actionType);
                _this.setFirstHightLightKeyForMenu();
            }

            // 非受控模式清空内部数据
            if (!('value' in _this.props)) {
                _this.setState({
                    value: value
                });
            }

            _this.props.onChange(value, actionType, item);

            if (actionType === 'itemClick' || actionType === 'enter') {
                // 点击 item 的时候不会触发关闭，需要手动关闭，其它类型比如 keyDown 等都会有其它事件句柄处理
                _this.setVisible(false, actionType);
            }
        };

        _this.isAutoComplete = true;
        _this.isInputing = false;

        _this.dataStore.setOptions({ key: _this.state.value });
        extends_default()(_this.state, {
            dataSource: _this.setDataSource(props)
        });

        auto_complete_bindCtx(_this, ['handleTriggerKeyDown', 'handleMenuSelect', 'handleItemClick']);
        return _this;
    }

    AutoComplete.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
        var state = {};

        if ('value' in nextProps && nextProps.value !== prevState.value) {
            extends_default()(state, {
                value: nextProps.value
            });
        }

        if ('visible' in nextProps && nextProps.visible !== prevState.visible) {
            extends_default()(state, {
                visible: nextProps.visible
            });
        }

        if (Object.keys(state).length) {
            return state;
        }

        return null;
    };

    AutoComplete.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        var props = this.props;

        if ('value' in props) {
            this.dataStore.setOptions({ key: props.value });
        }

        if (props.filter !== prevProps.filter) {
            this.dataStore.setOptions({
                filter: props.filter
            });
        }
        if (props.filterLocal !== prevProps.filterLocal) {
            this.dataStore.setOptions({
                filterLocal: props.filterLocal
            });
        }

        if (prevProps.children !== props.children || prevProps.dataSource !== props.dataSource) {
            /* eslint-disable react/no-did-update-set-state */
            this.setState({
                dataSource: this.setDataSource(props)
            });

            // remote dataSource and focused
            // 因为autoComplete没有下拉数据不展示，搜索并且有数据了需要自动展示下拉
            if (!props.filterLocal && this.isInputing) {
                this.shouldControlPopup(props, 'update');
            }
            if (!props.filterLocal && !props.popupContent) {
                this.setFirstHightLightKeyForMenu();
            }
        }
    };

    AutoComplete.prototype.shouldControlPopup = function shouldControlPopup() {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
        var type = arguments[1];

        var hasPopup = props.popupContent || this.dataStore.getMenuDS().length;
        if (hasPopup) {
            this.setVisible(true, type);
        } else {
            this.setVisible(false, type);
        }
    };

    AutoComplete.prototype.handleMenuSelect = function handleMenuSelect(keys) {
        var key = keys[0];

        var mapDS = this.dataStore.getMapDS();

        if (key in mapDS) {
            var item = mapDS[key];
            this.handleSelectEvent(key, item, 'itemClick');
        }
    };

    AutoComplete.prototype.handleItemClick = function handleItemClick() {
        this.setVisible(false, 'itemClick');
    };

    AutoComplete.prototype.handleSelectEvent = function handleSelectEvent(key, item, triggerType) {
        var value = item && item[this.props.fillProps] || key;

        if (triggerType === 'itemClick' || triggerType === 'enter') {
            // 点击 item 的时候不会触发关闭，需要手动关闭，其它类型比如 keyDown 等都会有其它事件句柄处理
            this.setVisible(false, triggerType);
        }

        this.handleChange(value, triggerType, item);
    };

    AutoComplete.prototype.handleVisibleChange = function handleVisibleChange(visible, type) {
        if (!('visible' in this.props) && visible && !this.props.popupContent && !this.dataStore.getMenuDS().length) {
            return;
        }

        this.setVisible(visible, type);
    };

    AutoComplete.prototype.beforeClose = function beforeClose() {
        this.isInputing = false;
    };

    /**
     * Handle trigger keydown event
     * @param {Event} e
     */


    AutoComplete.prototype.handleTriggerKeyDown = function handleTriggerKeyDown(e) {
        var _props = this.props,
            popupContent = _props.popupContent,
            onToggleHighlightItem = _props.onToggleHighlightItem,
            onKeyDown = _props.onKeyDown;

        if (popupContent) {
            e.stopPropagation(); //stopPropagation can make use onChange triggerd while typing space('') in Input
            return onKeyDown(e);
        }

        switch (e.keyCode) {
            case util["a" /* KEYCODE */].UP:
                e.preventDefault();
                onToggleHighlightItem(this.toggleHighlightItem(-1, e), 'up');
                break;
            case util["a" /* KEYCODE */].DOWN:
                e.preventDefault();
                onToggleHighlightItem(this.toggleHighlightItem(1, e), 'down');
                break;
            case util["a" /* KEYCODE */].ENTER:
                e.preventDefault();
                this.chooseHighlightItem(e);
                break;
            case util["a" /* KEYCODE */].SPACE:
                // stopPropagation can make use onChange triggerd while typing space('') in Input
                e.stopPropagation();
                break;
            case util["a" /* KEYCODE */].ESC:
                e.preventDefault();
                this.state.visible && this.setVisible(false, 'esc');
                break;
            default:
                break;
        }

        onKeyDown(e);
    };

    // 回车 选择高亮的 item


    AutoComplete.prototype.chooseHighlightItem = function chooseHighlightItem() {
        if (!this.state.visible) {
            return false;
        }

        var highlightKey = this.state.highlightKey;

        var highlightItem = this.dataStore.getEnableDS().find(function (item) {
            return highlightKey === '' + item.value;
        });

        if (highlightItem) {
            this.handleSelectEvent(highlightKey, highlightItem, 'enter');
        }
    };

    AutoComplete.prototype.hasClear = function hasClear() {
        var _props2 = this.props,
            hasClear = _props2.hasClear,
            readOnly = _props2.readOnly,
            disabled = _props2.disabled;
        var value = this.state.value;


        return value && hasClear && !readOnly && !disabled;
    };

    /**
     * 选择器
     * @override
     * @param {object} props
     */


    AutoComplete.prototype.renderSelect = function renderSelect() {
        var _classNames;

        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
        var placeholder = props.placeholder,
            size = props.size,
            prefix = props.prefix,
            className = props.className,
            style = props.style,
            label = props.label,
            readOnly = props.readOnly,
            disabled = props.disabled,
            highlightHolder = props.highlightHolder,
            locale = props.locale,
            hasClear = props.hasClear,
            state = props.state,
            rtl = props.rtl;

        var others = util["j" /* obj */].pickOthers(AutoComplete.propTypes, props);
        var othersData = util["j" /* obj */].pickAttrsWith(others, 'data-');

        var value = this.state.value;
        var visible = this.state.visible;

        // // 下拉箭头
        // const arrowNode = this.renderArrowNode(props, () => {
        //     this.focusInput();
        //     this.setVisible(!this.state.visible);
        // });

        // trigger className
        var triggerClazz = classnames_default()([prefix + 'select', prefix + 'select-auto-complete', prefix + 'size-' + size, className], (_classNames = {}, _classNames[prefix + 'active'] = visible, _classNames[prefix + 'disabled'] = disabled, _classNames));

        // highlightKey into placeholder
        // compatible with selectPlaceHolder. TODO: removed in 2.0 version
        var _placeholder = placeholder || locale.autoCompletePlaceholder || locale.autoCompletePlaceHolder;
        if (highlightHolder && visible) {
            _placeholder = this.state.highlightKey || _placeholder;
        }

        // Input props
        var _inputProps = extends_default()({}, util["j" /* obj */].pickOthers(othersData, others), {
            state: state,
            ref: this.saveInputRef,
            hasClear: hasClear,
            value: value,
            size: size,
            disabled: disabled,
            readOnly: readOnly,
            placeholder: _placeholder,
            label: label,
            // extra: arrowNode,
            onChange: this.handleChange,
            onKeyDown: this.handleTriggerKeyDown
        });

        return react_default.a.createElement(
            'span',
            extends_default()({}, othersData, {
                className: triggerClazz,
                style: style,
                dir: rtl ? 'rtl' : undefined,
                ref: this.saveSelectRef,
                onClick: this.focusInput
            }),
            react_default.a.createElement(input["a" /* default */], extends_default()({
                role: 'combobox',
                'aria-autocomplete': 'list',
                'aria-disabled': disabled,
                'aria-expanded': this.state.visible
            }, _inputProps)),
            react_default.a.createElement(
                'span',
                { className: prefix + 'sr-only', 'aria-live': 'polite' },
                this.state.srReader
            )
        );
    };

    AutoComplete.prototype.render = function render() {
        var _this2 = this;

        if (this.hasClear()) {
            // clear 按钮点击后，会在 dom 结构中被删除掉，需要将其额外设置为安全节点，防止触发弹层的显示或隐藏
            var safeNode = this.props.popupProps.safeNode || [];
            var safeNodes = Array.isArray(safeNode) ? safeNode : [safeNode];
            safeNodes.push(function () {
                return _this2.clearNode;
            });
            this.props.popupProps.safeNode = safeNodes;
        }

        return _Base.prototype.render.call(this, extends_default()({}, this.props, { canCloseByTrigger: false }));
    };

    return AutoComplete;
}(base_Base), auto_complete_class.propTypes = extends_default()({}, base_Base.propTypes, {
    /**
     * 当前值，用于受控模式
     */
    value: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),
    /**
     * 初始化的默认值
     */
    defaultValue: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number]),
    /**
     * Select发生改变时触发的回调
     * @param {*} value 选中的值
     * @param {String} actionType 触发的方式, 'itemClick', 'enter', 'change'
     * @param {*} item 选中的值的对象数据
     */
    onChange: prop_types_default.a.func,
    /**
     * 传入的数据源，可以动态渲染子项
     */
    dataSource: prop_types_default.a.arrayOf(prop_types_default.a.oneOfType([prop_types_default.a.shape({
        value: prop_types_default.a.string,
        label: prop_types_default.a.any,
        disabled: prop_types_default.a.bool,
        children: prop_types_default.a.array
    }), prop_types_default.a.string])),
    /**
     * 填充到选择框里的值的 key，默认是 value
     */
    fillProps: prop_types_default.a.string,
    /**
     * 渲染 MenuItem 内容的方法
     * @param {Object} item 渲染节点的 item
     * @return {ReactNode} item node
     */
    itemRender: prop_types_default.a.func,
    // input keydown
    onKeyDown: prop_types_default.a.func,
    // 是否将当前高亮的选项作为 placeholder
    highlightHolder: prop_types_default.a.bool,
    style: prop_types_default.a.object
}), auto_complete_class.defaultProps = extends_default()({}, base_Base.defaultProps, {
    onKeyDown: auto_complete_noop,
    fillProps: 'value'
}), auto_complete_temp);


/* harmony default export */ var auto_complete = (Object(react_lifecycles_compat_es["polyfill"])(auto_complete_AutoComplete));
// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/select/option.js




var option_class, option_temp;




/* istanbul ignore file */

/**
 * Select.Option
 */
var option_Option = (option_temp = option_class = function (_React$Component) {
  inherits_default()(Option, _React$Component);

  function Option() {
    classCallCheck_default()(this, Option);

    return possibleConstructorReturn_default()(this, _React$Component.apply(this, arguments));
  }

  Option.prototype.render = function render() {
    return this.props.children;
  };

  return Option;
}(react_default.a.Component), option_class.propTypes = {
  /**
   * 选项值
   */
  value: prop_types_default.a.any.isRequired,
  /**
   * 是否禁用
   */
  disabled: prop_types_default.a.bool,
  children: prop_types_default.a.any
}, option_class._typeMark = 'next_select_option', option_temp);
option_Option.displayName = 'Option';

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/select/option-group.js




var option_group_class, option_group_temp;




/* istanbul ignore file */

/**
 * Select.OptionGroup
 */
var option_group_OptionGroup = (option_group_temp = option_group_class = function (_React$Component) {
    inherits_default()(OptionGroup, _React$Component);

    function OptionGroup() {
        classCallCheck_default()(this, OptionGroup);

        return possibleConstructorReturn_default()(this, _React$Component.apply(this, arguments));
    }

    OptionGroup.prototype.render = function render() {
        return this.props.children;
    };

    return OptionGroup;
}(react_default.a.Component), option_group_class.propTypes = {
    /**
     * 设置分组的文案
     */
    label: prop_types_default.a.node,
    children: prop_types_default.a.any
}, option_group_class._typeMark = 'next_select_option_group', option_group_temp);
option_group_OptionGroup.displayName = 'OptionGroup';

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/select/index.js







select_select.AutoComplete = config_provider["a" /* default */].config(auto_complete, {
    componentName: 'Select'
});

select_select.Option = option_Option;
select_select.OptionGroup = option_group_OptionGroup;

// compatible with 0.x version
/* istanbul ignore next */
function _transform(props, deprecated) {
    var shape = props.shape,
        container = props.container,
        multiple = props.multiple,
        filterBy = props.filterBy,
        overlay = props.overlay,
        safeNode = props.safeNode,
        noFoundContent = props.noFoundContent,
        others = objectWithoutProperties_default()(props, ['shape', 'container', 'multiple', 'filterBy', 'overlay', 'safeNode', 'noFoundContent']);

    var newprops = others;
    if (shape === 'arrow-only') {
        deprecated('shape=arrow-only', 'hasBorder=false', 'Select');
        newprops.hasBorder = false;
    }
    if (container) {
        deprecated('container', 'popupContainer', 'Select');
        newprops.popupContainer = container;
    }
    if (multiple) {
        deprecated('multiple', 'mode=multiple', 'Select');
        newprops.mode = 'multiple';
    }
    if (filterBy) {
        deprecated('filterBy', 'filter', 'Select');
        newprops.filter = filterBy;
    }
    if (overlay) {
        deprecated('overlay', 'popupContent', 'Select');
        newprops.popupContent = overlay;
        newprops.autoWidth = false;
    }

    if (noFoundContent) {
        deprecated('noFoundContent', 'notFoundContent', 'Select');
        newprops.notFoundContent = noFoundContent;
    }

    if (safeNode) {
        deprecated('safeNode', 'popupProps={safeNode}', 'Select');
        newprops.popupProps = {
            safeNode: safeNode
        };
    }

    return newprops;
}

// compatible with 0.x version: Select.Combobox
select_select.Combobox = config_provider["a" /* default */].config(select_select, {
    transform: /* istanbul ignore next */function transform(props, deprecated) {
        deprecated('Select.Combobox', '<Select showSearch={true}/>', 'Select');

        var newprops = _transform(props, deprecated);
        if (props.onInputUpdate) {
            newprops.onSearch = props.onInputUpdate;
            newprops.showSearch = true;
        }
        return newprops;
    }
});

/* harmony default export */ var es_select = __webpack_exports__["a"] = (config_provider["a" /* default */].config(select_select, {
    transform: _transform,
    exportNames: ['focusInput', 'handleSearchClear']
}));

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/config-provider/index.js + 5 modules
var config_provider = __webpack_require__(131);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(124);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/babel-runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(125);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/babel-runtime/helpers/inherits.js
var inherits = __webpack_require__(126);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/prop-types/index.js
var prop_types = __webpack_require__(7);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/classnames/index.js
var classnames = __webpack_require__(123);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
var react_lifecycles_compat_es = __webpack_require__(135);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/react-dom/index.js
var react_dom = __webpack_require__(20);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/util/index.js + 11 modules
var util = __webpack_require__(129);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/virtual-list/virtual-list.js




var _class, _temp;








var NOOP = function NOOP() {};
var MAX_SYNC_UPDATES = 40;

var isEqualSubset = function isEqualSubset(a, b) {
    for (var key in b) {
        if (a[key] !== b[key]) {
            return false;
        }
    }

    return true;
};

var getOffset = function getOffset(el) {
    var offset = el.clientLeft || 0;
    do {
        offset += el.offsetTop || 0;
        el = el.offsetParent;
    } while (el);
    return offset;
};

var constrain = function constrain(from, size, _ref) {
    var children = _ref.children,
        minSize = _ref.minSize;

    var length = children && children.length;
    size = Math.max(size, minSize);
    if (size > length) {
        size = length;
    }
    from = from ? Math.max(Math.min(from, length - size), 0) : 0;

    return { from: from, size: size };
};
/** VirtualList */
var virtual_list_VirtualList = (_temp = _class = function (_Component) {
    inherits_default()(VirtualList, _Component);

    function VirtualList(props) {
        classCallCheck_default()(this, VirtualList);

        var _this = possibleConstructorReturn_default()(this, _Component.call(this, props));

        var jumpIndex = props.jumpIndex;

        var _constrain = constrain(jumpIndex, 0, props),
            from = _constrain.from,
            size = _constrain.size;

        _this.state = { from: from, size: size };
        _this.cache = {};
        _this.cacheAdd = {};
        _this.scrollTo = _this.scrollTo.bind(_this);
        _this.cachedScroll = null;
        _this.unstable = false;
        _this.updateCounter = 0;
        return _this;
    }

    VirtualList.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
        var from = prevState.from,
            size = prevState.size;


        return constrain(from, size, nextProps);
    };

    VirtualList.prototype.componentDidMount = function componentDidMount() {
        var jumpIndex = this.props.jumpIndex;


        this.updateFrameAndClearCache = this.updateFrameAndClearCache.bind(this);

        util["d" /* events */].on(window, 'resize', this.updateFrameAndClearCache);

        this.updateFrame(this.scrollTo.bind(this, jumpIndex));
    };

    VirtualList.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        var _this2 = this;

        var oldIndex = prevProps.jumpIndex;
        var newIndex = this.props.jumpIndex;

        if (oldIndex !== newIndex) {
            this.updateFrame(this.scrollTo.bind(this, newIndex));
        }

        // If the list has reached an unstable state, prevent an infinite loop.
        if (this.unstable) {
            return;
        }

        if (++this.updateCounter > MAX_SYNC_UPDATES) {
            this.unstable = true;
        }

        if (!this.updateCounterTimeoutId) {
            this.updateCounterTimeoutId = setTimeout(function () {
                _this2.updateCounter = 0;
                delete _this2.updateCounterTimeoutId;
            }, 0);
        }

        this.updateFrame();
    };

    VirtualList.prototype.componentWillUnmount = function componentWillUnmount() {
        util["d" /* events */].off(window, 'resize', this.updateFrameAndClearCache);

        util["d" /* events */].off(this.scrollParent, 'scroll', this.updateFrameAndClearCache);
        util["d" /* events */].off(this.scrollParent, 'mousewheel', NOOP);
    };

    VirtualList.prototype.maybeSetState = function maybeSetState(b, cb) {
        if (isEqualSubset(this.state, b)) {
            return cb();
        }

        this.setState(b, cb);
    };

    VirtualList.prototype.getEl = function getEl() {
        return this.el || this.items || {};
    };

    VirtualList.prototype.getScrollParent = function getScrollParent() {
        var el = this.getEl();
        el = el.parentElement;

        switch (window.getComputedStyle(el).overflowY) {
            case 'auto':
            case 'scroll':
            case 'overlay':
            case 'visible':
                return el;
        }

        return window;
    };

    VirtualList.prototype.getScroll = function getScroll() {
        // Cache scroll position as this causes a forced synchronous layout.
        // if (typeof this.cachedScroll === 'number') {
        //     return this.cachedScroll;
        // }
        var scrollParent = this.scrollParent;

        var scrollKey = 'scrollTop';
        var actual = scrollParent === window ? // Firefox always returns document.body[scrollKey] as 0 and Chrome/Safari
        // always return document.documentElement[scrollKey] as 0, so take
        // whichever has a value.
        document.body[scrollKey] || document.documentElement[scrollKey] : scrollParent[scrollKey];
        var max = this.getScrollSize() - this.getViewportSize();

        var scroll = Math.max(0, Math.min(actual, max));
        var el = this.getEl();
        this.cachedScroll = getOffset(scrollParent) + scroll - getOffset(el);

        return this.cachedScroll;
    };

    VirtualList.prototype.setScroll = function setScroll(offset) {
        var scrollParent = this.scrollParent;

        offset += getOffset(this.getEl());
        if (scrollParent === window) {
            return window.scrollTo(0, offset);
        }

        offset -= getOffset(this.scrollParent);
        scrollParent.scrollTop = offset;
    };

    VirtualList.prototype.getViewportSize = function getViewportSize() {
        var scrollParent = this.scrollParent;

        return scrollParent === window ? window.innerHeight : scrollParent.clientHeight;
    };

    VirtualList.prototype.getScrollSize = function getScrollSize() {
        var scrollParent = this.scrollParent;
        var _document = document,
            body = _document.body,
            documentElement = _document.documentElement;

        var key = 'scrollHeight';
        return scrollParent === window ? Math.max(body[key], documentElement[key]) : scrollParent[key];
    };

    VirtualList.prototype.getStartAndEnd = function getStartAndEnd() {
        var threshold = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.threshold;

        var scroll = this.getScroll();

        var trueScroll = scroll;
        var start = Math.max(0, trueScroll - threshold);
        var end = trueScroll + this.getViewportSize() + threshold;

        return { start: start, end: end };
    };

    // Called by 'scroll' and 'resize' events, clears scroll position cache.


    VirtualList.prototype.updateFrameAndClearCache = function updateFrameAndClearCache(cb) {
        this.cachedScroll = null;
        return this.updateFrame(cb);
    };

    VirtualList.prototype.updateFrame = function updateFrame(cb) {
        this.updateScrollParent();

        if (typeof cb !== 'function') {
            cb = NOOP;
        }

        return this.updateVariableFrame(cb);
    };

    VirtualList.prototype.updateScrollParent = function updateScrollParent() {
        var prev = this.scrollParent;
        this.scrollParent = this.getScrollParent();

        if (prev === this.scrollParent) {
            return;
        }
        if (prev) {
            util["d" /* events */].off(prev, 'scroll', this.updateFrameAndClearCache);
            util["d" /* events */].off(prev, 'mousewheel', NOOP);
        }

        util["d" /* events */].on(this.scrollParent, 'scroll', this.updateFrameAndClearCache);
        util["d" /* events */].on(this.scrollParent, 'mousewheel', NOOP);

        // You have to attach mousewheel listener to the scrollable element.
        // Just an empty listener. After that onscroll events will be fired synchronously.
    };

    VirtualList.prototype.updateVariableFrame = function updateVariableFrame(cb) {
        if (!this.props.itemSizeGetter) {
            this.cacheSizes();
        }

        var _getStartAndEnd = this.getStartAndEnd(),
            start = _getStartAndEnd.start,
            end = _getStartAndEnd.end;

        var _props = this.props,
            pageSize = _props.pageSize,
            children = _props.children;

        var length = children.length;
        var space = 0;
        var from = 0;
        var size = 0;
        var maxFrom = length - 1;

        while (from < maxFrom) {
            var itemSize = this.getSizeOf(from);
            if (itemSize === null || itemSize === undefined || space + itemSize > start) {
                break;
            }
            space += itemSize;
            ++from;
        }

        var maxSize = length - from;

        while (size < maxSize && space < end) {
            var _itemSize = this.getSizeOf(from + size);
            if (_itemSize === null || _itemSize === undefined) {
                size = Math.min(size + pageSize, maxSize);
                break;
            }
            space += _itemSize;
            ++size;
        }

        this.maybeSetState({ from: from, size: size }, cb);
    };

    VirtualList.prototype.getSpaceBefore = function getSpaceBefore(index) {
        var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (!index) {
            return 0;
        }
        if (cache[index] !== null && cache[index] !== undefined) {
            return cache[index] || 0;
        }

        // Find the closest space to index there is a cached value for.
        var from = index;
        while (from > 0 && (cache[from] === null || cache[from] === undefined)) {
            from--;
        }

        // Finally, accumulate sizes of items from - index.
        var space = cache[from] || 0;
        for (var i = from; i < index; ++i) {
            cache[i] = space;
            var itemSize = this.getSizeOf(i);
            if (itemSize === null || itemSize === undefined) {
                break;
            }
            space += itemSize;
        }

        cache[index] = space;

        return cache[index] || 0;
    };

    VirtualList.prototype.cacheSizes = function cacheSizes() {
        var cache = this.cache;
        var from = this.state.from;
        var _items = this.items,
            children = _items.children,
            _items$props = _items.props,
            props = _items$props === undefined ? {} : _items$props;

        var itemEls = children || props.children || [];

        try {
            // <Select useVirtual /> 模式下，在快速点击切换Tab的情况下（Select实例快速出现、消失） 有时会出现this.items不存在，导致页面报错。怀疑是Select的异步timer渲染逻辑引起的
            for (var i = 0, l = itemEls.length; i < l; ++i) {
                var ulRef = Object(react_dom["findDOMNode"])(this.items);
                var height = ulRef.children[i].offsetHeight;
                if (height > 0) {
                    cache[from + i] = height;
                }
            }
        } catch (error) {
            // ...
        }
    };

    VirtualList.prototype.getSizeOf = function getSizeOf(index) {
        var _this3 = this;

        var cache = this.cache;
        var _props2 = this.props,
            itemSizeGetter = _props2.itemSizeGetter,
            jumpIndex = _props2.jumpIndex;

        // Try the cache.

        if (index in cache) {
            return cache[index];
        }
        if (itemSizeGetter) {
            return itemSizeGetter(index);
        }

        var height = Object.keys(this.cache).map(function (key) {
            return _this3.cache[key];
        }).pop();
        if (!this.defaultItemHeight && jumpIndex > -1 && height) {
            this.defaultItemHeight = height;
        }

        if (this.defaultItemHeight) {
            return this.defaultItemHeight;
        }
    };

    VirtualList.prototype.scrollTo = function scrollTo(index) {
        this.setScroll(this.getSpaceBefore(index, this.cacheAdd));
    };

    VirtualList.prototype.renderMenuItems = function renderMenuItems() {
        var _this4 = this;

        var _props3 = this.props,
            children = _props3.children,
            itemsRenderer = _props3.itemsRenderer;
        var _state = this.state,
            from = _state.from,
            size = _state.size;

        var items = [];

        for (var i = 0; i < size; ++i) {
            items.push(children[from + i]);
        }

        return itemsRenderer(items, function (c) {
            _this4.items = c;
            return _this4.items;
        });
    };

    VirtualList.prototype.render = function render() {
        var _cx,
            _this5 = this;

        var _props4 = this.props,
            _props4$children = _props4.children,
            children = _props4$children === undefined ? [] : _props4$children,
            prefix = _props4.prefix,
            className = _props4.className;

        var length = children.length;
        var from = this.state.from;

        var items = this.renderMenuItems();

        var style = { position: 'relative' };

        var size = this.getSpaceBefore(length, this.cacheAdd);

        if (size) {
            style.height = size;
        }
        var offset = this.getSpaceBefore(from, this.cacheAdd);
        var transform = 'translate(0px, ' + offset + 'px)';
        var listStyle = {
            msTransform: transform,
            WebkitTransform: transform,
            transform: transform
        };

        var cls = classnames_default()((_cx = {}, _cx[prefix + 'virtual-list-wrapper'] = true, _cx[className] = !!className, _cx));

        return react_default.a.createElement(
            'div',
            {
                className: cls,
                style: style,
                ref: function ref(c) {
                    _this5.el = c;
                    return _this5.el;
                }
            },
            react_default.a.createElement(
                'div',
                { style: listStyle },
                items
            )
        );
    };

    return VirtualList;
}(react["Component"]), _class.displayName = 'VirtualList', _class.propTypes = {
    prefix: prop_types_default.a.string,
    /**
     * 渲染的子节点
     */
    children: prop_types_default.a.any,
    /**
     * 最小加载数量
     */
    minSize: prop_types_default.a.number,
    /**
     * 一屏数量
     */
    pageSize: prop_types_default.a.number,
    /**
     * 父渲染函数，默认为 (items, ref) => <ul ref={ref}>{items}</ul>
     */
    itemsRenderer: prop_types_default.a.func,
    /**
     * 缓冲区高度
     */
    threshold: prop_types_default.a.number,
    /**
     * 获取item高度的函数
     */
    itemSizeGetter: prop_types_default.a.func,
    /**
     * 设置跳转位置，需要设置 itemSizeGetter 才能生效, 不设置认为元素等高并取第一个元素高度作为默认高
     */
    jumpIndex: prop_types_default.a.number,
    className: prop_types_default.a.string
}, _class.defaultProps = {
    prefix: 'next-',
    itemsRenderer: function itemsRenderer(items, ref) {
        return react_default.a.createElement(
            'ul',
            { ref: ref },
            items
        );
    },
    minSize: 1,
    pageSize: 10,
    jumpIndex: 0,
    threshold: 100
}, _temp);
virtual_list_VirtualList.displayName = 'VirtualList';


/* harmony default export */ var virtual_list = (Object(react_lifecycles_compat_es["polyfill"])(virtual_list_VirtualList));
// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/virtual-list/index.js



/* harmony default export */ var es_virtual_list = __webpack_exports__["a"] = (config_provider["a" /* default */].config(virtual_list));

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _theme_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(788);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function useThemeContext(){const context=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_theme_ThemeContext__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);if(context==null){throw new Error('`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.');}return context;}/* harmony default export */ __webpack_exports__["a"] = (useThemeContext);

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/config-provider/index.js + 5 modules
var config_provider = __webpack_require__(131);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/util/index.js + 11 modules
var util = __webpack_require__(129);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/babel-runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(128);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__(127);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(124);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/babel-runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(125);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/babel-runtime/helpers/inherits.js
var inherits = __webpack_require__(126);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/prop-types/index.js
var prop_types = __webpack_require__(7);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/classnames/index.js
var classnames = __webpack_require__(123);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/animate/index.js + 3 modules
var animate = __webpack_require__(176);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/icon/index.js + 1 modules
var icon = __webpack_require__(136);

// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/locale/zh-cn.js
var zh_cn = __webpack_require__(143);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/tag/tag.js






var _class, _temp;










var noop = util["f" /* func */].noop,
    bindCtx = util["f" /* func */].bindCtx;


var PRESET_COLOR_REG = /blue|green|orange|red|turquoise|yellow/;

/**
 * Tag
 */
var tag_Tag = (_temp = _class = function (_Component) {
    inherits_default()(Tag, _Component);

    function Tag(props) {
        classCallCheck_default()(this, Tag);

        var _this = possibleConstructorReturn_default()(this, _Component.call(this, props));

        _this.onKeyDown = function (e) {
            // 针对无障碍化要求 添加键盘SPACE事件
            var _this$props = _this.props,
                closable = _this$props.closable,
                closeArea = _this$props.closeArea,
                onClick = _this$props.onClick,
                disabled = _this$props.disabled;

            if (e.keyCode !== util["a" /* KEYCODE */].SPACE || disabled) {
                return;
            }

            e.preventDefault();
            e.stopPropagation();

            if (closable) {
                _this.handleClose(closeArea);
            } else {
                typeof onClick === 'function' && onClick(e);
            }
        };

        _this.state = {
            visible: true
        };

        bindCtx(_this, ['handleBodyClick', 'handleTailClick', 'handleAnimationInit', 'handleAnimationEnd', 'renderTailNode']);
        return _this;
    }

    Tag.prototype.componentWillUnmount = function componentWillUnmount() {
        this.__destroyed = true;
    };

    Tag.prototype.handleClose = function handleClose(from) {
        var _this2 = this;

        var _props = this.props,
            animation = _props.animation,
            onClose = _props.onClose;

        var hasAnimation = util["l" /* support */].animation && animation;

        // 先执行回调
        var result = onClose(from, this.tagNode);

        // 如果回调函数返回 false，则阻止关闭行为
        if (result !== false && !this.__destroyed) {
            this.setState({
                visible: false
            }, function () {
                // 如果没有动画，则直接执行 afterClose
                !hasAnimation && _this2.props.afterClose(_this2.tagNode);
            });
        }
    };

    // 标签体点击


    Tag.prototype.handleBodyClick = function handleBodyClick(e) {
        var _props2 = this.props,
            closable = _props2.closable,
            closeArea = _props2.closeArea,
            onClick = _props2.onClick;


        if (closable && closeArea === 'tag') {
            this.handleClose('tag');
        }

        if (typeof onClick === 'function') {
            return onClick(e);
        }
    };

    Tag.prototype.handleTailClick = function handleTailClick(e) {
        e && e.preventDefault();
        e && e.stopPropagation();

        this.handleClose('tail');
    };

    Tag.prototype.handleAnimationInit = function handleAnimationInit(node) {
        this.props.afterAppear(node);
    };

    Tag.prototype.handleAnimationEnd = function handleAnimationEnd(node) {
        this.props.afterClose(node);
    };

    Tag.prototype.renderAnimatedTag = function renderAnimatedTag(children, animationName) {
        return react_default.a.createElement(
            animate["a" /* default */],
            {
                animation: animationName,
                afterAppear: this.handleAnimationInit,
                afterLeave: this.handleAnimationEnd
            },
            children
        );
    };

    Tag.prototype.renderTailNode = function renderTailNode() {
        var _props3 = this.props,
            prefix = _props3.prefix,
            closable = _props3.closable,
            locale = _props3.locale;


        if (!closable) {
            return null;
        }

        return react_default.a.createElement(
            'span',
            {
                className: prefix + 'tag-close-btn',
                onClick: this.handleTailClick,
                role: 'button',
                'aria-label': locale.delete
            },
            react_default.a.createElement(icon["a" /* default */], { type: 'close' })
        );
    };

    Tag.prototype.isPresetColor = function isPresetColor() {
        var color = this.props.color;


        if (!color) {
            return false;
        }

        return PRESET_COLOR_REG.test(color);
    };

    Tag.prototype.getTagStyle = function getTagStyle() {
        var _props4 = this.props,
            _props4$color = _props4.color,
            color = _props4$color === undefined ? '' : _props4$color,
            style = _props4.style;

        var isPresetColor = this.isPresetColor();
        var customColorStyle = {
            backgroundColor: color,
            borderColor: color,
            color: '#fff'
        };

        return extends_default()({}, color && !isPresetColor ? customColorStyle : null, style);
    };

    Tag.prototype.render = function render() {
        var _classNames,
            _this3 = this;

        var _props5 = this.props,
            prefix = _props5.prefix,
            type = _props5.type,
            size = _props5.size,
            color = _props5.color,
            _shape = _props5._shape,
            closable = _props5.closable,
            closeArea = _props5.closeArea,
            className = _props5.className,
            children = _props5.children,
            animation = _props5.animation,
            disabled = _props5.disabled,
            rtl = _props5.rtl;
        var visible = this.state.visible;

        var isPresetColor = this.isPresetColor();
        var others = util["j" /* obj */].pickOthers(Tag.propTypes, this.props);
        // eslint-disable-next-line no-unused-vars

        var style = others.style,
            otherTagProps = objectWithoutProperties_default()(others, ['style']);

        var shape = closable ? 'closable' : _shape;
        var bodyClazz = classnames_default()([prefix + 'tag', prefix + 'tag-' + shape, prefix + 'tag-' + size], (_classNames = {}, _classNames[prefix + 'tag-level-' + type] = !color, _classNames[prefix + 'tag-closable'] = closable, _classNames[prefix + 'tag-body-pointer'] = closable && closeArea === 'tag', _classNames[prefix + 'tag-' + color] = color && isPresetColor && type === 'primary', _classNames[prefix + 'tag-' + color + '-inverse'] = color && isPresetColor && type === 'normal', _classNames), className);

        // close btn
        var tailNode = this.renderTailNode();
        // tag node
        var tagNode = !visible ? null : react_default.a.createElement(
            'div',
            extends_default()({
                className: bodyClazz,
                onClick: this.handleBodyClick,
                onKeyDown: this.onKeyDown,
                tabIndex: disabled ? '' : '0',
                role: 'button',
                'aria-disabled': disabled,
                disabled: disabled,
                dir: rtl ? 'rtl' : undefined,
                ref: function ref(n) {
                    return _this3.tagNode = n;
                },
                style: this.getTagStyle()
            }, otherTagProps),
            react_default.a.createElement(
                'span',
                { className: prefix + 'tag-body' },
                children
            ),
            tailNode
        );

        if (animation && util["l" /* support */].animation) {
            return this.renderAnimatedTag(tagNode, prefix + 'tag-zoom');
        }

        // 未开启或不支持动画
        return tagNode;
    };

    return Tag;
}(react["Component"]), _class.propTypes = {
    /**
     * 标签类名前缀,提供给二次开发者用
     * @default next-
     */
    prefix: prop_types_default.a.string,
    /**
     * 标签的类型
     */
    type: prop_types_default.a.oneOf(['normal', 'primary']),
    /**
     * 标签的尺寸（large 尺寸为兼容表单场景 large = medium）
     */
    size: prop_types_default.a.oneOf(['small', 'medium', 'large']),

    /**
     * 标签颜色, 目前支持：blue、 green、 orange、red、 turquoise、 yellow 和 hex 颜色值 （`color keywords`作为 Tag 组件的保留字，请勿直接使用 ）, `1.19.0` 以上版本生效
     */
    color: prop_types_default.a.string,
    /**
     * 是否开启动效
     */
    animation: prop_types_default.a.bool,
    closeArea: prop_types_default.a.oneOf(['tag', 'tail']),
    closable: prop_types_default.a.bool,
    onClose: prop_types_default.a.func,
    afterClose: prop_types_default.a.func,
    /**
     * 标签出现动画结束后执行的回调
     */
    afterAppear: prop_types_default.a.func,
    className: prop_types_default.a.any,
    children: prop_types_default.a.node,
    /**
     * 点击回调
     */
    onClick: prop_types_default.a.func,
    _shape: prop_types_default.a.oneOf(['default', 'closable', 'checkable']),
    disabled: prop_types_default.a.bool,
    rtl: prop_types_default.a.bool,
    locale: prop_types_default.a.object
}, _class.defaultProps = {
    prefix: 'next-',
    type: 'normal',
    size: 'medium',
    closeArea: 'tail',
    animation: false,
    onClose: noop,
    afterClose: noop,
    afterAppear: noop,
    onClick: noop,
    _shape: 'default',
    disabled: false,
    rtl: false,
    locale: zh_cn["a" /* default */].Tag
}, _temp);
tag_Tag.displayName = 'Tag';


/* harmony default export */ var tag = (config_provider["a" /* default */].config(tag_Tag));
// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/tag/tag-group.js






var tag_group_class, tag_group_temp;





var tag_group_Group = (tag_group_temp = tag_group_class = function (_Component) {
    inherits_default()(Group, _Component);

    function Group() {
        classCallCheck_default()(this, Group);

        return possibleConstructorReturn_default()(this, _Component.apply(this, arguments));
    }

    Group.prototype.render = function render() {
        var _props = this.props,
            className = _props.className,
            prefix = _props.prefix,
            children = _props.children,
            rtl = _props.rtl,
            others = objectWithoutProperties_default()(_props, ['className', 'prefix', 'children', 'rtl']);

        var clazz = classnames_default()((prefix || 'next-') + 'tag-group', className);

        return react_default.a.createElement(
            'div',
            extends_default()({ className: clazz, dir: rtl ? 'rtl' : undefined }, others),
            children
        );
    };

    return Group;
}(react["Component"]), tag_group_class.propTypes = {
    prefix: prop_types_default.a.string,
    className: prop_types_default.a.any,
    children: prop_types_default.a.node,
    rtl: prop_types_default.a.bool
}, tag_group_class.defaultProps = {
    prefix: 'next-',
    rtl: false
}, tag_group_temp);
tag_group_Group.displayName = 'Group';


/* harmony default export */ var tag_group = (tag_group_Group);
// EXTERNAL MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
var react_lifecycles_compat_es = __webpack_require__(135);

// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/tag/selectable.js





var selectable_class, selectable_temp;








var selectable_noop = util["f" /* func */].noop,
    selectable_bindCtx = util["f" /* func */].bindCtx;

/**
 * Tag.Selectable
 */

var selectable_Selectable = (selectable_temp = selectable_class = function (_Component) {
    inherits_default()(Selectable, _Component);

    function Selectable(props) {
        classCallCheck_default()(this, Selectable);

        var _this = possibleConstructorReturn_default()(this, _Component.call(this, props));

        _this.state = {
            checked: 'checked' in props ? props.checked : props.defaultChecked || false
        };

        selectable_bindCtx(_this, ['handleClick']);
        return _this;
    }

    Selectable.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
        if (props.checked !== undefined && props.checked !== state.checked) {
            return {
                checked: props.checked
            };
        }

        return null;
    };

    Selectable.prototype.handleClick = function handleClick(e) {
        e && e.preventDefault();
        // IE9 不支持 pointer-events，还是可能会触发 click 事件
        if (this.props.disabled) {
            return false;
        }

        var checked = this.state.checked;


        this.setState({
            checked: !checked
        });

        this.props.onChange(!checked, e);
    };

    Selectable.prototype.render = function render() {
        var attrFilterTarget = ['checked', 'defaultChecked', 'onChange', 'className',
        // 防止这些额外的参数影响 tag 的类型
        '_shape', 'closable'];

        var others = util["j" /* obj */].pickOthers(attrFilterTarget, this.props);
        var isChecked = 'checked' in this.props ? this.props.checked : this.state.checked;
        var clazz = classnames_default()(this.props.className, {
            checked: isChecked
        });
        return react_default.a.createElement(tag, extends_default()({}, others, {
            role: 'checkbox',
            _shape: 'checkable',
            'aria-checked': isChecked,
            className: clazz,
            onClick: this.handleClick
        }));
    };

    return Selectable;
}(react["Component"]), selectable_class.propTypes = {
    /**
     * 标签是否被选中，受控用法
     * tag checked or not, a controlled way
     */
    checked: prop_types_default.a.bool,
    /**
     * 标签是否默认被选中，非受控用法
     * tag checked or not by default, a uncontrolled way
     */
    defaultChecked: prop_types_default.a.bool,
    /**
     * 选中状态变化时触发的事件
     * @param {Boolean} checked 是否选中
     * @param {Event} e Dom 事件对象
     */
    onChange: prop_types_default.a.func,
    /**
     * 标签是否被禁用
     */
    disabled: prop_types_default.a.bool,
    className: prop_types_default.a.any
}, selectable_class.defaultProps = {
    onChange: selectable_noop
}, selectable_temp);
selectable_Selectable.displayName = 'Selectable';


/* harmony default export */ var selectable = (Object(react_lifecycles_compat_es["polyfill"])(selectable_Selectable));
// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/tag/closeable.js






var closeable_class, closeable_temp;





/**
 * Tag.Closeable
 */
var closeable_Closeable = (closeable_temp = closeable_class = function (_Component) {
    inherits_default()(Closeable, _Component);

    function Closeable() {
        classCallCheck_default()(this, Closeable);

        return possibleConstructorReturn_default()(this, _Component.apply(this, arguments));
    }

    Closeable.prototype.render = function render() {
        var _props = this.props,
            disabled = _props.disabled,
            className = _props.className,
            closeArea = _props.closeArea,
            onClose = _props.onClose,
            afterClose = _props.afterClose,
            onClick = _props.onClick,
            type = _props.type,
            size = _props.size,
            children = _props.children,
            rtl = _props.rtl,
            others = objectWithoutProperties_default()(_props, ['disabled', 'className', 'closeArea', 'onClose', 'afterClose', 'onClick', 'type', 'size', 'children', 'rtl']);

        return react_default.a.createElement(
            tag,
            extends_default()({}, others, {
                rtl: rtl,
                disabled: disabled,
                className: className,
                closeArea: closeArea,
                onClose: onClose,
                afterClose: afterClose,
                onClick: onClick,
                type: type,
                size: size,
                closable: true
            }),
            children
        );
    };

    return Closeable;
}(react["Component"]), closeable_class.propTypes = {
    disabled: prop_types_default.a.bool,
    className: prop_types_default.a.any,
    /**
     * closeable 标签的 onClose 响应区域, tag: 标签体, tail(默认): 关闭按钮
     */
    closeArea: prop_types_default.a.oneOf(['tag', 'tail']),
    /**
     * 点击关闭按钮时的回调
     * @param {String} from 事件来源, tag: 标签体点击, tail: 关闭按钮点击
     * @returns {Boolean} true则关闭, false阻止关闭
     */
    onClose: prop_types_default.a.func,
    /**
     * 标签关闭后执行的回调
     */
    afterClose: prop_types_default.a.func,
    /**
     * 点击回调
     */
    onClick: prop_types_default.a.func,
    type: prop_types_default.a.oneOf(['normal', 'primary']),
    /**
     * 标签的尺寸（large 尺寸为兼容表单场景 large = medium）
     */
    size: prop_types_default.a.oneOf(['small', 'medium', 'large']),
    children: prop_types_default.a.any,
    rtl: prop_types_default.a.bool
}, closeable_class.defaultProps = {
    disabled: false,
    type: 'normal'
}, closeable_temp);
closeable_Closeable.displayName = 'Closeable';


/* harmony default export */ var closeable = (closeable_Closeable);
// CONCATENATED MODULE: /Users/feichao.sfc/code/github/alibaba/ali-react-table/node_modules/@alifd/next/es/tag/index.js







var ConfigTag = config_provider["a" /* default */].config(tag, {
    transfrom: /* istanbul ignore next */function transfrom(props, deprecated) {
        var shape = props.shape,
            type = props.type;

        if (shape === 'selectable') {
            deprecated('shape=selectable', 'Tag.Selectable', 'Tag');
        }

        if (shape === 'deletable') {
            deprecated('shape=deletable', 'Tag.Closeable', 'Tag');
        }

        if (shape === 'link') {
            deprecated('shape=link', '<Tag><a href="x">x</a></Tag>', 'Tag');
        }

        if (shape === 'readonly' || shape === 'interactive') {
            util["i" /* log */].warning('Warning: [ shape=' + shape + ' ] is deprecated at [ Tag ]');
        }

        if (type === 'secondary') {
            util["i" /* log */].warning('Warning: [ type=secondary ] is deprecated at [ Tag ]');
        }

        ['count', 'marked', 'value', 'onChange'].forEach(function (key) {
            if (key in props) {
                util["i" /* log */].warning('Warning: [ ' + key + ' ] is deprecated at [ Tag ]');
            }
        });

        if ('selected' in props || 'defaultSelected' in props) {
            util["i" /* log */].warning('Warning: [ selected|defaultSelected  ] is deprecated at [ Tag ], use [ checked|defaultChecked ] at [ Tag.Selectable ] instead of it');
        }

        if ('closed' in props) {
            util["i" /* log */].warning('Warning: [ closed  ] is deprecated at [ Tag ], use [ onClose ] at [ Tag.Closeable ] instead of it');
        }

        if ('onSelect' in props) {
            deprecated('onSelect', '<Tag.Selectable onChange/>', 'Tag');
        }

        if ('afterClose' in props) {
            util["i" /* log */].warning('Warning: [ afterClose  ] is deprecated at [ Tag ], use [ afterClose ] at [ Tag.Closeable ] instead of it');
        }

        return props;
    }
});

ConfigTag.Group = config_provider["a" /* default */].config(tag_group);

ConfigTag.Selectable = config_provider["a" /* default */].config(selectable);

// 有的地方叫做 Closeable 有的地方用Closeable, 为了保持兼容 文档类出现 Closeable, Closeable可以继续用
ConfigTag.Closable = config_provider["a" /* default */].config(closeable);
ConfigTag.Closeable = ConfigTag.Closable;

/* harmony default export */ var es_tag = __webpack_exports__["a"] = (ConfigTag);

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const ThemeContext=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(undefined);/* harmony default export */ __webpack_exports__["a"] = (ThemeContext);

/***/ })

}]);