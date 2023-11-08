// ==UserScript==
// @name         识典任务检测
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       TheodoreChan
// @match        https://shidian.baike.com/task_center/hotTask?subPage=hot_doc_create
// @match        https://shidian.baike.com/task_center/hotTask?subPage=hot_doc_optimize
// @icon         https://www.google.com/s2/favicons?sz=64&domain=jianshu.com
// @grant        GM_notification
// ==/UserScript==

(function() {
    'use strict';
    // // 获取当前的URL
    // var current = location.href;

    // // 时间间隔大于0，timeout秒之后执行reload函数
    // setInterval(function(){
    //     location.replace(current);
    // }, 1000 * 20);
    // setInterval(checkA,1000*15);

    var flag = prompt("say 8: ");
    if(flag == "8")
    {
        console.log("2333333333333333333");
        GM_notification({

            title: "识典",

            image: "",

            text: "有A/S辣！",

            highlight: true,                   // 布尔值，是否突出显示发送通知的选项卡

            silent: true,                     // 布尔值，是否播放声音

            timeout: 500,                    // 设置通知隐藏时间

            onclick: function () {             // 在单击通知时调用

                GM_openInTab("url", true)      // 使用此 URL打开一个新标签页

                //or

                GM_setClipboard("text")        // 将数据复制到剪贴板

            },

            ondone() {}                        // 在通知关闭（无论这是由超时还是单击触发）或突出显示选项卡时调用
        })
    }

})();


function checkA()
{
    var list = document.getElementsByClassName("arco-list-content")[0];
    if(list == null)
    {
        console.log("NULL LIST");
        return;
    }


    var listRow = list.children[0];

    var card = listRow.children[0];
    var type = card.getAttribute('class');
        console.log(type+'\n');
        if(type.includes("cardA") || type.includes("cardS"))
        {
             GM_notification({

                 title: "识典",

                 image: "",

                 text: "有A/S辣！",

                 highlight: true,                   // 布尔值，是否突出显示发送通知的选项卡

                 silent: true,                     // 布尔值，是否播放声音

                 timeout: 500,                    // 设置通知隐藏时间

                 onclick: function () {             // 在单击通知时调用

                     GM_openInTab("url", true)      // 使用此 URL打开一个新标签页

                     //or

                     GM_setClipboard("text")        // 将数据复制到剪贴板

                 },

                 ondone() {}                        // 在通知关闭（无论这是由超时还是单击触发）或突出显示选项卡时调用
             })
        }
        else
            console.log("No A");
}




