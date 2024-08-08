document.onkeydown = function (e) {
    // 检查是否按下了F12键或者使用了快捷键组合
    if (123 === e.key || (e.ctrlKey && e.shiftKey && ('J' === e.key || 'I' === e.key || 'C' === e.key)) || (e.ctrlKey && 'U' === e.key)) {
        // 显示警告信息
        btf.snackbarShow("你干嘛~哈哈，哎呦!");
        // 阻止默认行为
        e.preventDefault();
        return false;
    }
};
