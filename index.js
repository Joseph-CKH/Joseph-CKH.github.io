// 點選換div 和內容

function show_hidden(obj) {

    　　
    if (obj.style.display == 'flex') {　　
        obj.style.display = 'none';

    } else {　　　　　
        obj.style.display = 'flex';
    }

}

var sh = document.getElementById("showHidden");

sh.onclick = function() {

    var div1 = document.getElementById("FEWD_Project");

    var div2 = document.getElementById("MM_Project");

    show_hidden(div1);

    show_hidden(div2);

    return false;

}

// 圖片自動播放和點選頁數

window.onload = function() {
    //獲取按鈕事件
    var bt1 = document.getElementById("pre");
    var bt2 = document.getElementById("next");
    // 建立一個calss
    // var div = document.getElementsByClassName("MM_Project");
    //獲取img標籤中的第一個元素結點
    var img = document.getElementById("fullproject").getElementsByTagName("img")[0];
    //建立一個數組用來儲存圖片的路徑（即src屬性）
    var imga = ["./Joseph_Portfolio/MM/portfolio_01.jpg", "./Joseph_Portfolio/MM/portfolio_02.jpg", "./Joseph_Portfolio/MM/portfolio_03.jpg", "./Joseph_Portfolio/MM/portfolio_04.jpg", "./Joseph_Portfolio/MM/portfolio_05.jpg", "./Joseph_Portfolio/MM/portfolio_06.jpg", "./Joseph_Portfolio/MM/portfolio_07.jpg", "./Joseph_Portfolio/MM/portfolio_08.jpg", "./Joseph_Portfolio/MM/portfolio_09.jpg", "./Joseph_Portfolio/MM/portfolio_10.jpg", "./Joseph_Portfolio/MM/portfolio_11.jpg", "./Joseph_Portfolio/MM/portfolio_12.jpg", "./Joseph_Portfolio/MM/portfolio_13.jpg", "./Joseph_Portfolio/MM/portfolio_14.jpg", "./Joseph_Portfolio/MM/portfolio_15.jpg", "./Joseph_Portfolio/MM/portfolio_16.jpg", "./Joseph_Portfolio/MM/portfolio_17.jpg", "./Joseph_Portfolio/MM/portfolio_18.jpg", "./Joseph_Portfolio/MM/portfolio_19.jpg", "./Joseph_Portfolio/MM/portfolio_20.jpg", "./Joseph_Portfolio/MM/portfolio_21.jpg", "./Joseph_Portfolio/MM/portfolio_22.jpg", "./Joseph_Portfolio/MM/portfolio_23.jpg", "./Joseph_Portfolio/MM/portfolio_24.jpg", "./Joseph_Portfolio/MM/portfolio_25.jpg", "./Joseph_Portfolio/MM/portfolio_26.jpg", "./Joseph_Portfolio/MM/portfolio_27.jpg", "./Joseph_Portfolio/MM/portfolio_28.jpg", "./Joseph_Portfolio/MM/portfolio_29.jpg", "./Joseph_Portfolio/MM/portfolio_30.jpg", "./Joseph_Portfolio/MM/portfolio_31.jpg", "./Joseph_Portfolio/MM/portfolio_32.jpg", "./Joseph_Portfolio/MM/portfolio_33.jpg", "./Joseph_Portfolio/MM/portfolio_34.jpg", "./Joseph_Portfolio/MM/portfolio_35.jpg", "./Joseph_Portfolio/MM/portfolio_36.jpg", "./Joseph_Portfolio/MM/portfolio_37.jpg", "./Joseph_Portfolio/MM/portfolio_38.jpg", "./Joseph_Portfolio/MM/portfolio_39.jpg", "./Joseph_Portfolio/MM/portfolio_40.jpg", "./Joseph_Portfolio/MM/portfolio_41.jpg", "./Joseph_Portfolio/MM/portfolio_42.jpg", "./Joseph_Portfolio/MM/portfolio_43.jpg", "./Joseph_Portfolio/MM/portfolio_44.jpg", "./Joseph_Portfolio/MM/portfolio_45.jpg", "./Joseph_Portfolio/MM/portfolio_46.jpg", "./Joseph_Portfolio/MM/portfolio_47.jpg", "./Joseph_Portfolio/MM/portfolio_48.jpg", "./Joseph_Portfolio/MM/portfolio_49.jpg", "./Joseph_Portfolio/MM/portfolio_50.jpg", "./Joseph_Portfolio/MM/portfolio_51.jpg", "./Joseph_Portfolio/MM/portfolio_52.jpg", "./Joseph_Portfolio/MM/portfolio_53.jpg", "./Joseph_Portfolio/MM/portfolio_54.jpg", "./Joseph_Portfolio/MM/portfolio_55.jpg", "./Joseph_Portfolio/MM/portfolio_56.jpg", "./Joseph_Portfolio/MM/portfolio_57.jpg", "./Joseph_Portfolio/MM/portfolio_58.jpg", "./Joseph_Portfolio/MM/portfolio_59.jpg", "./Joseph_Portfolio/MM/portfolio_60.jpg", "./Joseph_Portfolio/MM/portfolio_61.jpg", "./Joseph_Portfolio/MM/portfolio_62.jpg", "./Joseph_Portfolio/MM/portfolio_63.jpg", "./Joseph_Portfolio/MM/portfolio_64.jpg", "./Joseph_Portfolio/MM/portfolio_65.jpg", "./Joseph_Portfolio/MM/portfolio_66.jpg", "./Joseph_Portfolio/MM/portfolio_67.jpg", "./Joseph_Portfolio/MM/portfolio_68.jpg", "./Joseph_Portfolio/MM/portfolio_69.jpg"];
    //設定陣列的索引下標
    var index = 0;
    //獲取p標籤
    var pbq = document.getElementById("pid");
    //設定提醒文字
    pbq.innerHTML = "Total &nbsp" + img.length + "&nbsp Sheets, Now" + (index + 1) + "&nbsp Sheets";
    //繫結事件
    bt1.onclick = function() {
        //書寫事件驅動程式
        index--; //切換到上一張索引自減
        //判斷索引是否小於0
        if (index < 0) {
            index = imga.length - 1; //目的是可以實現迴圈切換
        }
        //修改img的src屬性
        img.src = imga[index];
        //當點選按鈕以後，重新設定p標籤中的顯示內容
        pbq.innerHTML = "Total &nbsp" + imga.length + "&nbsp Sheets, Now" + (index + 1) + "&nbsp Sheets";
    };
    //繫結事件
    bt2.onclick = function() {
        //書寫事件驅動程式
        index++; //切換到下一張索引自加
        //判斷索引是否大於4
        if (index > imga.length - 1) {
            index = 0; //目的是可以實現迴圈切換
        }
        //修改img的src屬性
        img.src = imga[index];
        //當點選按鈕以後，重新設定p標籤中的顯示內容
        pbq.innerHTML = "Total &nbsp" + imga.length + "&nbsp Sheets, Now" + (index + 1) + "&nbsp Sheets";
    };
};