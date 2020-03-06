// ==UserScript==
// @name         知乎剪贴板杀手
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  去掉复制知乎答案时的版权提示和字数限制（注意：仅用于个人笔记用途，请遵守版权协议，如果您认为侵犯了您的权益，请通知我删除）
// @author       bugparty    
// @home-url     https://github.com/bugparty/zhihu-killer
// @license      MIT License
// @match        https://www.zhihu.com/question/*
// @grant        unsafeWindow
// @require      https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// @require      https://greasyfork.org/scripts/5392-waitforkeyelements/code/WaitForKeyElements.js?version=19641
// @note         
// ==/UserScript==


// 选取回答正文外部的span标签
var targetSelector = ".QuestionAnswer-content  span.RichText"

// need to wait for article content loaded after ajax request
waitForKeyElements (targetSelector, cleanClipboard);

function cleanClipboard() {
    'use strict';

    // 由于在 div[id=article-content] 处监听所有冒泡到此处的 copy 事件，所有可以在下一个子节点拦截。
    // 参考：https://ghoulmind.com/2016/02/remove-zhihu-copyright-on-copy/

    $(targetSelector).on('copy', function(evt) {
        evt.stopPropagation();
    });
}
