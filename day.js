// 定义time函数
function time(){
    // 创建一个日期对象
    date = new Date();
    // 获取当前年 需要加上1900
    var year = date.getYear() + 1900;
    // 当前月 需要加上1
    var month = date.getMonth() + 1;
    // 当前日
    var day = date.getDate();

    // 当前星期
    // 说明：getDay返回一个数字，这个数字就是在下方列表的其中一个索引
    var weekdayList = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
    var weekday = weekdayList[date.getDay()];
    // 当前时
    var hours = date.getHours();
    // 当前分
    var minutes = date.getMinutes();
    // 当前秒
    var seconds = date.getSeconds();
    
    // 由于字符串太长 分为两段来写，效果是一样的
    var write_content = "现在的时间为：" + year + "年" + month + "月" + day + "日" + weekday;
    // 说明：" "是空格，用来隔开星期和小时
    write_content = write_content +  " " + hours + "时" + minutes + "分" + seconds + "秒";
    
    // 将id为timeShow的标签 文本内容设置为write_content字符串的内容
    document.getElementById("timeShow").innerHTML = write_content;
}
// 设置运行间隔 每1000毫秒，也就是1秒运行一次time函数
setInterval(time,1000);
