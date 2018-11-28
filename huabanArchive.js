// tiny-pinyin@https://github.com/creeperyang/pinyin
!function (N, A) { "object" == typeof exports && "object" == typeof module ? module.exports = A() : "function" == typeof define && define.amd ? define([], A) : "object" == typeof exports ? exports.Pinyin = A() : N.Pinyin = A() }(this, function () { return function (N) { function A(I) { if (t[I]) return t[I].exports; var U = t[I] = { i: I, l: !1, exports: {} }; return N[I].call(U.exports, U, U.exports, A), U.l = !0, U.exports } var t = {}; return A.m = N, A.c = t, A.i = function (N) { return N }, A.d = function (N, t, I) { A.o(N, t) || Object.defineProperty(N, t, { configurable: !1, enumerable: !0, get: I }) }, A.n = function (N) { var t = N && N.__esModule ? function () { return N.default } : function () { return N }; return A.d(t, "a", t), t }, A.o = function (N, A) { return Object.prototype.hasOwnProperty.call(N, A) }, A.p = "", A(A.s = 3) }([function (N, A, t) { "use strict"; function I(N) { N && ("function" == typeof N && (N = [N]), N.forEach && N.forEach(function (N) { "function" == typeof N && N(o) })) } function U(N) { return N || null === i ? ("object" === ("undefined" == typeof Intl ? "undefined" : n(Intl)) && Intl.Collator ? (f = new Intl.Collator(["zh-Hans-CN", "zh-CN"]), i = 1 === Intl.Collator.supportedLocalesOf(["zh-CN"]).length) : i = !1, i) : i } function e(N) { var A = o.UNIHANS, t = o.PINYINS, I = o.EXCEPTIONS, U = { source: N }; if (N in I) return U.type = E, U.target = I[N], U; var e = -1, r = void 0; if (N.charCodeAt(0) < 256) return U.type = H, U.target = N, U; if ((r = f.compare(N, G)) < 0) return U.type = u, U.target = N, U; if (0 === r) U.type = E, e = 0; else { if ((r = f.compare(N, O)) > 0) return U.type = u, U.target = N, U; 0 === r && (U.type = E, e = A.length - 1) } if (U.type = E, e < 0) for (var n = 0, i = A.length - 1; n <= i;) { e = ~~((n + i) / 2); var S = A[e]; if (0 === (r = f.compare(N, S))) break; r > 0 ? n = e + 1 : i = e - 1 } return r < 0 && e-- , U.target = t[e], U.target || (U.type = u, U.target = U.source), U } function r(N) { if ("string" != typeof N) throw new Error("argument should be string."); if (!U()) throw new Error("not support Intl or zh-CN language."); return N.split("").map(function (N) { return e(N) }) } var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (N) { return typeof N } : function (N) { return N && "function" == typeof Symbol && N.constructor === Symbol && N !== Symbol.prototype ? "symbol" : typeof N }, o = t(2), G = "阿", O = "鿿", H = 1, E = 2, u = 3, i = null, f = void 0; N.exports = { isSupported: U, parse: r, patchDict: I, genToken: e, convertToPinyin: function (N, A, t) { return r(N).map(function (N) { return t && N.type === E ? N.target.toLowerCase() : N.target }).join(A || "") } } }, function (N, A, t) { "use strict"; A = N.exports = function (N) { N.EXCEPTIONS = { "嗲": "DIA", "碡": "ZHOU", "聒": "GUO", "炔": "QUE", "蚵": "KE", "砉": "HUA", "嬷": "MO", "蹊": "XI", "丬": "PAN", "霰": "XIAN", "豉": "CHI", "饧": "XING", "帧": "ZHEN", "芎": "XIONG", "谁": "SHUI", "钶": "KE" }, N.UNIHANS[91] = "伕", N.UNIHANS[347] = "仚", N.UNIHANS[393] = "诌", N.UNIHANS[39] = "婤", N.UNIHANS[50] = "腠", N.UNIHANS[369] = "攸", N.UNIHANS[123] = "乯", N.UNIHANS[171] = "刕", N.UNIHANS[102] = "佝", N.UNIHANS[126] = "犿", N.UNIHANS[176] = "列", N.UNIHANS[178] = "刢", N.UNIHANS[252] = "娝", N.UNIHANS[330] = "偸" }, A.shouldPatch = function (N) { return "function" == typeof N && ("FOU" === N("伕").target && "XIA" === N("仚").target && "ZHONG" === N("诌").target && "CHONG" === N("婤").target && "CONG" === N("腠").target && "YONG" === N("攸").target && "HOU" === N("乯").target && "LENG" === N("刕").target && "GONG" === N("佝").target && "HUAI" === N("犿").target && "LIAO" === N("列").target && "LIN" === N("刢").target && "E" === N("钶").target) } }, function (N, A, t) { "use strict"; var I = ["阿", "哎", "安", "肮", "凹", "八", "挀", "扳", "邦", "勹", "陂", "奔", "伻", "屄", "边", "灬", "憋", "汃", "冫", "癶", "峬", "嚓", "偲", "参", "仓", "撡", "冊", "嵾", "曽", "叉", "芆", "辿", "伥", "抄", "车", "抻", "阷", "吃", "充", "抽", "出", "欻", "揣", "巛", "刅", "吹", "旾", "逴", "呲", "匆", "凑", "粗", "汆", "崔", "邨", "搓", "咑", "呆", "丹", "当", "刀", "嘚", "扥", "灯", "氐", "甸", "刁", "爹", "丁", "丟", "东", "吺", "厾", "耑", "垖", "吨", "多", "妸", "诶", "奀", "鞥", "儿", "发", "帆", "匚", "飞", "分", "丰", "覅", "仏", "紑", "夫", "旮", "侅", "甘", "冈", "皋", "戈", "给", "根", "刯", "工", "勾", "估", "瓜", "乖", "关", "光", "归", "丨", "呙", "哈", "咍", "佄", "夯", "茠", "诃", "黒", "拫", "亨", "噷", "叿", "齁", "乎", "花", "怀", "欢", "巟", "灰", "昏", "吙", "丌", "加", "戋", "江", "艽", "阶", "巾", "坕", "冂", "丩", "凥", "姢", "噘", "军", "咔", "开", "刊", "忼", "尻", "匼", "肎", "劥", "空", "抠", "扝", "夸", "蒯", "宽", "匡", "亏", "坤", "扩", "垃", "来", "兰", "啷", "捞", "肋", "勒", "崚", "哩", "俩", "奁", "良", "撩", "毟", "拎", "伶", "溜", "囖", "龙", "瞜", "噜", "驴", "娈", "掠", "抡", "罗", "呣", "妈", "埋", "嫚", "牤", "猫", "么", "呅", "门", "甿", "咪", "宀", "喵", "乜", "民", "名", "谬", "摸", "哞", "毪", "嗯", "拏", "腉", "囡", "囔", "孬", "疒", "娞", "恁", "能", "妮", "拈", "娘", "鸟", "捏", "囜", "宁", "妞", "农", "羺", "奴", "女", "奻", "疟", "黁", "挪", "喔", "讴", "妑", "拍", "眅", "乓", "抛", "呸", "喷", "匉", "丕", "囨", "剽", "氕", "姘", "乒", "钋", "剖", "仆", "七", "掐", "千", "呛", "悄", "癿", "亲", "靑", "卭", "丘", "区", "峑", "缺", "夋", "呥", "穣", "娆", "惹", "人", "扔", "日", "茸", "厹", "邚", "挼", "堧", "婑", "瞤", "捼", "仨", "毢", "三", "桒", "掻", "閪", "森", "僧", "杀", "筛", "山", "伤", "弰", "奢", "申", "升", "尸", "収", "书", "刷", "衰", "闩", "双", "脽", "吮", "说", "厶", "忪", "捜", "苏", "狻", "夊", "孙", "唆", "他", "囼", "坍", "汤", "夲", "忑", "熥", "剔", "天", "旫", "帖", "厅", "囲", "偷", "凸", "湍", "推", "吞", "乇", "穵", "歪", "弯", "尣", "危", "昷", "翁", "挝", "乌", "夕", "虲", "仙", "乡", "灱", "些", "心", "星", "凶", "休", "吁", "吅", "削", "坃", "丫", "恹", "央", "幺", "倻", "一", "囙", "应", "哟", "佣", "优", "扜", "囦", "曰", "晕", "帀", "災", "兂", "匨", "傮", "则", "贼", "怎", "増", "扎", "捚", "沾", "张", "佋", "蜇", "贞", "争", "之", "中", "州", "朱", "抓", "拽", "专", "妆", "隹", "宒", "卓", "乲", "宗", "邹", "租", "钻", "厜", "尊", "昨", "兙"], U = ["A", "AI", "AN", "ANG", "AO", "BA", "BAI", "BAN", "BANG", "BAO", "BEI", "BEN", "BENG", "BI", "BIAN", "BIAO", "BIE", "BIN", "BING", "BO", "BU", "CA", "CAI", "CAN", "CANG", "CAO", "CE", "CEN", "CENG", "CHA", "CHAI", "CHAN", "CHANG", "CHAO", "CHE", "CHEN", "CHENG", "CHI", "CHONG", "CHOU", "CHU", "CHUA", "CHUAI", "CHUAN", "CHUANG", "CHUI", "CHUN", "CHUO", "CI", "CONG", "COU", "CU", "CUAN", "CUI", "CUN", "CUO", "DA", "DAI", "DAN", "DANG", "DAO", "DE", "DEN", "DENG", "DI", "DIAN", "DIAO", "DIE", "DING", "DIU", "DONG", "DOU", "DU", "DUAN", "DUI", "DUN", "DUO", "E", "EI", "EN", "ENG", "ER", "FA", "FAN", "FANG", "FEI", "FEN", "FENG", "FIAO", "FO", "FOU", "FU", "GA", "GAI", "GAN", "GANG", "GAO", "GE", "GEI", "GEN", "GENG", "GONG", "GOU", "GU", "GUA", "GUAI", "GUAN", "GUANG", "GUI", "GUN", "GUO", "HA", "HAI", "HAN", "HANG", "HAO", "HE", "HEI", "HEN", "HENG", "HM", "HONG", "HOU", "HU", "HUA", "HUAI", "HUAN", "HUANG", "HUI", "HUN", "HUO", "JI", "JIA", "JIAN", "JIANG", "JIAO", "JIE", "JIN", "JING", "JIONG", "JIU", "JU", "JUAN", "JUE", "JUN", "KA", "KAI", "KAN", "KANG", "KAO", "KE", "KEN", "KENG", "KONG", "KOU", "KU", "KUA", "KUAI", "KUAN", "KUANG", "KUI", "KUN", "KUO", "LA", "LAI", "LAN", "LANG", "LAO", "LE", "LEI", "LENG", "LI", "LIA", "LIAN", "LIANG", "LIAO", "LIE", "LIN", "LING", "LIU", "LO", "LONG", "LOU", "LU", "LV", "LUAN", "LVE", "LUN", "LUO", "M", "MA", "MAI", "MAN", "MANG", "MAO", "ME", "MEI", "MEN", "MENG", "MI", "MIAN", "MIAO", "MIE", "MIN", "MING", "MIU", "MO", "MOU", "MU", "N", "NA", "NAI", "NAN", "NANG", "NAO", "NE", "NEI", "NEN", "NENG", "NI", "NIAN", "NIANG", "NIAO", "NIE", "NIN", "NING", "NIU", "NONG", "NOU", "NU", "NV", "NUAN", "NVE", "NUN", "NUO", "O", "OU", "PA", "PAI", "PAN", "PANG", "PAO", "PEI", "PEN", "PENG", "PI", "PIAN", "PIAO", "PIE", "PIN", "PING", "PO", "POU", "PU", "QI", "QIA", "QIAN", "QIANG", "QIAO", "QIE", "QIN", "QING", "QIONG", "QIU", "QU", "QUAN", "QUE", "QUN", "RAN", "RANG", "RAO", "RE", "REN", "RENG", "RI", "RONG", "ROU", "RU", "RUA", "RUAN", "RUI", "RUN", "RUO", "SA", "SAI", "SAN", "SANG", "SAO", "SE", "SEN", "SENG", "SHA", "SHAI", "SHAN", "SHANG", "SHAO", "SHE", "SHEN", "SHENG", "SHI", "SHOU", "SHU", "SHUA", "SHUAI", "SHUAN", "SHUANG", "SHUI", "SHUN", "SHUO", "SI", "SONG", "SOU", "SU", "SUAN", "SUI", "SUN", "SUO", "TA", "TAI", "TAN", "TANG", "TAO", "TE", "TENG", "TI", "TIAN", "TIAO", "TIE", "TING", "TONG", "TOU", "TU", "TUAN", "TUI", "TUN", "TUO", "WA", "WAI", "WAN", "WANG", "WEI", "WEN", "WENG", "WO", "WU", "XI", "XIA", "XIAN", "XIANG", "XIAO", "XIE", "XIN", "XING", "XIONG", "XIU", "XU", "XUAN", "XUE", "XUN", "YA", "YAN", "YANG", "YAO", "YE", "YI", "YIN", "YING", "YO", "YONG", "YOU", "YU", "YUAN", "YUE", "YUN", "ZA", "ZAI", "ZAN", "ZANG", "ZAO", "ZE", "ZEI", "ZEN", "ZENG", "ZHA", "ZHAI", "ZHAN", "ZHANG", "ZHAO", "ZHE", "ZHEN", "ZHENG", "ZHI", "ZHONG", "ZHOU", "ZHU", "ZHUA", "ZHUAI", "ZHUAN", "ZHUANG", "ZHUI", "ZHUN", "ZHUO", "ZI", "ZONG", "ZOU", "ZU", "ZUAN", "ZUI", "ZUN", "ZUO", ""], e = { "曾": "ZENG", "沈": "SHEN", "嗲": "DIA", "碡": "ZHOU", "聒": "GUO", "炔": "QUE", "蚵": "KE", "砉": "HUA", "嬤": "MO", "嬷": "MO", "蹒": "PAN", "蹊": "XI", "丬": "PAN", "霰": "XIAN", "莘": "XIN", "豉": "CHI", "饧": "XING", "筠": "JUN", "长": "CHANG", "帧": "ZHEN", "峙": "SHI", "郍": "NA", "芎": "XIONG", "谁": "SHUI" }; N.exports = { PINYINS: U, UNIHANS: I, EXCEPTIONS: e } }, function (N, A, t) { "use strict"; var I = t(0), U = t(1); I.isSupported() && U.shouldPatch(I.genToken) && I.patchDict(U), N.exports = I }]) });

// get request
function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.setRequestHeader("X-Request", 'JSON');
    xmlHttp.setRequestHeader("X-Requested-With", 'XMLHttpRequest');
    xmlHttp.setRequestHeader("Accept", 'application/json');
    xmlHttp.send(null);
}
function strcomp(strA, strB) {
    return strA.toLowerCase().localeCompare(strB.toLowerCase());
}
function boardComp(boardA,boardB){
    let strA = boardA.title;
    let strB = boardB.title;
    return strcomp(strA,strB)
}
function getBoardHtml(board){
    let pins = board.pins;
    let pinHTML = '';
    let clearStyle = ''
    for(let i=0;i<pins.length;i++){
        let pin = pins[i]
        if(i == 0){
            clearStyle = 'style="clear:both"'
            pinHTML += '<img src="//img.hb.aicdn.com/'+ pin.file.key +'" data-baiduimageplus-ignore="1" class="large">'
        }
        else{
            pinHTML += '<img src="//img.hb.aicdn.com/'+ pin.file.key +'" data-baiduimageplus-ignore="1">'
        }
    }

    return '<div data-id="'+ board.board_id +'" data-seq="'+ board.board_id + clearStyle +'"\
    class="Board wfc inited">\
    <div class="draglay"></div>\
    <div title="拖动改变排序" class="drag-icon"></div><a href="/boards/'+ board.board_id +'/" target="_blank" class="link  x">' + pinHTML +'\
        <div class="shadows">\
            <div class="large-shadow"></div>\
            <div class="shadow"></div>\
            <div class="shadow"></div>\
            <div class="shadow"></div>\
        </div>\
        <div class="over ">\
            <h3>'+ board.title +'</h3>\
            <h4></h4>\
            <div class="pin-count">'+ board.pins.length +'</div>\
        </div>\
        <div class="board-cover-edit">\
            <div href="#" class="btn btn12"><span class="text">设置封面</span></div>\
        </div>\
    </a><span class="attr-mark"></span>\
    <div class="FollowBoard"><a href="#" onclick="return false;" class="edit btn btn14 wbtn"><strong> 编辑</strong><span></span></a></div>\
</div>'
}
function getBoardsHTML(boards){
    let html = ''
    for(let board of boards){
        html += getBoardHtml(board)
    }
    return html
}
function genHTML(keyList,map){
    let html = '<div onclick="app.requireLogin(function() {app.showDialogBox(\'create_board\');});" class="wfc add-board"><div class="inner"><i></i><span>创建画板</span></div></div>'
    for(let key of keyList){
        html += '</br><h1 style="clear:both">'+key+'</h1></br>'
        let boards = map[key]
        html += getBoardsHTML(boards)
    }
    html = '<div id="archived-boards" class="sort-lists clearfix sortable">' + html + '</div>'
    return html
}
// get request url
// window.addEventListener('load', function(){
    max = window.app.page.user.boards.getLast().board_id
    url = window.app.page.$url + '?' + String.uniqueID() + '&limit=100&wfl=1'
    httpGetAsync(url, (data) => {
        // handle boards data
        let parsed = JSON.parse(data)
        let boards = parsed.user.boards;
        let inta = 97;
        let intz = 122;
        let map = {}
        let keyList = []
        for(let board of boards){
            let title = board.title;
            board.sortFlag = '_'
            if(title.length > 0){
                let parsed = Pinyin.parse(title[0])
                if(parsed.length > 0 && parsed[0].target){
                    board.sortFlag = Pinyin.parse(title[0])[0].target[0].toLowerCase()
                }
            }
            let key = board.sortFlag
            if(map[key]){
                map[key].push(board)
            }
            else{
                map[key] = [board]
                keyList.push(key)
            }
        }
        keyList.sort(strcomp)
        for(let key of keyList){
            let boards = map[key]
            boards.sort(boardComp)
        }
        document.getElementById("waterfall").style.display = "none";
        document.querySelector('#user_page .wrapper').innerHTML += genHTML(keyList,map)
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = "\
        #archived-boards {\
            position: relative;\
            min-height: 500px;\
            margin: 16px auto 0;\
        }\
        #archived-boards .add-board {\
            position: relative;\
            float: left;\
            margin: 0 0 15px 16px;\
            left: auto;\
            top: auto;\
            width: 236px;\
            height: 350px;\
            background: #f6f5f5;\
            background: rgba(255,255,255,.5);\
            box-shadow: 0 1px 3px rgba(0,0,0,.02), 0 4px 8px rgba(0,0,0,.02);\
            border-radius: 3px;\
            overflow: hidden;\
            -webkit-transition: transform .15s ease-in-out,box-shadow .15s ease-in-out;\
            cursor: pointer;\
        }";
        document.body.appendChild(css);
        
    })
// });