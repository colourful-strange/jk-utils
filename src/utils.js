// @flow
/**
 * 睡眠函数
 * @param {number} ms 睡眠时间 毫秒
 * @returns {Promise<void>}
 */
export const sleep = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * 移除字符串前后空格
 * @param {string} str 字符串
 * @returns {string} 移除空格后的字符串
 */
export const strTrim = (str: string): string => str.replace(/(^\s*)|(\s*$)/g, '');

/**
 * 两数之间的随机小数
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @returns {number} 随机小数
 */
export const randomFloat = (min: number, max: number): number => Math.random() * (max - min) + min;

/**
 * 两数之间的随机整数
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @returns {number} 随机整数
 */
export const randomInt = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * 阻止事件冒泡
 * @param {MouseEvent | React.MouseEvent} e
 */
export const stopEvent = (e: any): boolean => {
    e.stopPropagation();
    if ('nativeEvent' in e) {
        e.nativeEvent.stopImmediatePropagation();
    }
    e.preventDefault();
    return false;
};

/**
 * 计算字符串的长度 假定ASCLL范围内0-128为单字节 其他为双字节
 * 场景 字符总长计算 前端表单长度控制
 * @param {string} str 字符串
 * @returns {number} 字节数
 */
export const getStrLen = (str: string): number => {
    if (typeof str === 'string') {
        let len = 0;
        for (let i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128) {
                len++;
            } else {
                len += 2;
            }
        }
        return len;
    }
    return 0;
};

// const ua = navigator.userAgent;  ie11 及以上版本不包含mise标识
export const isIE = (): boolean => !!window.ActiveXObject || 'ActiveXObject' in window;

/**
 * 将一个数从一个范围映射到另一个范围
 * @param {number} num 需要映射的数
 * @param {number} in_min 输入范围的最小值
 * @param {number} in_max 输入范围的最大值
 * @param {number} out_min 输出范围的最小值
 * @param {number} out_max 输出范围的最大值
 * @returns {number} 映射后的数
 */
export const scale = (num: number, in_min: number, in_max: number, out_min: number, out_max: number): number => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

/**
 * 组合函数
 * @param {...Function} fnnc 函数
 * @returns {Function} 组合后的函数
 */
export const combination = (...fnnc: Function[]) => {
    return (args: any) => {
        return fnnc.reduce((acc, cur) => {
            return cur(acc);
        }, args);
    };
};
