//给button增加监听器
document.querySelector('#rollButton').addEventListener("click",event => {
    //把骰子动画
    const images = document.querySelectorAll('#gameboard img');
    images.forEach(image => {
        //将 src 切换为掷骰子 GIF 动画
        if(isDieUnlocked(image)) {
            image.src = "assets/die_rolling.gif";  
        }
});

//随机改变每个骰子的值
    //更改src图片

    setTimeout(() => {
        //在 x 毫秒后运行这里的内容
        images.forEach(image => {
            if(isDieUnlocked(image)) {
                const randomNumber = Math.floor(Math.random() * 6) + 1;
            //把图片设置成随机骰子
            //Math.random()返回到0-1随机数字
                image.src = `assets/white_dice_${randomNumber}.gif`;
            }
        });

    }, 2000);

});

function isDieUnlocked(dieImage) {
    const checkboxes = document.querySelectorAll('#gameboard input');
    const unchecked = Array.from(checkboxes).filter(checkboxes => !checkboxes.checked);
    return unchecked.find(unchecked => unchecked.className === dieImage.className);
}