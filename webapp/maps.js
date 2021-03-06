var G_INCOMPAT = false;
function GScript(src) 
 {
  document.write('<' + 'script src="' + src + '"' +' type="text/javascript"><' + '/script>');
 }
function GBrowserIsCompatible(setBodyClass) 
 {
  if (G_INCOMPAT) return false;
  if (!window.RegExp) return false;
  var AGENTS = ["opera","msie","safari","firefox","netscape","mozilla"];
  var agent = navigator.userAgent.toLowerCase();
  for (var i = 0; i < AGENTS.length; i++) 
   {
    var agentStr = AGENTS[i];
    if (agent.indexOf(agentStr) != -1)
     {
      if (setBodyClass && document.body) 
       {
        document.body.className = agentStr;
       }
      var versionExpr = new RegExp(agentStr + "[ \/]?([0-9]+(\.[0-9]+)?)");
      var version = 0;
      if (versionExpr.exec(agent) != null) 
       {
        version = parseFloat(RegExp.$1);
       }
      if (agentStr == "opera") return version >= 7;
      if (agentStr == "safari") return version >= 125;
      if (agentStr == "msie") return (version >= 5.5 &&agent.indexOf("powerpc") == -1);
      if (agentStr == "netscape") return version > 7;
      if (agentStr == "firefox") return version >= 0.8;
     }
   }
  return !!document.getElementById;
 }
function GVerify() {}
function GLoad() 
 {
  GAddMessages(
   {
    1415: '.',1416: ',',10037: '開始地址',10038: '結束地址',10093: '使用條款',10095: '若要檢視所有可在螢幕上顯示的詳細資料，請使用地圖旁邊的\x22列印\x22連結。',10096: '',10049: '地圖',10111: '地圖',10120: '很抱歉，我們沒有該區域這個縮放層級的地圖。\x3cp\x3e請試著縮小地圖，以檢視更大的區域\x3c/p\x3e。',10050: '衛星',10112: '衛星',10121: '很抱歉，我們沒有該區域這個縮放層級的圖片。\x3cp\x3e請試著縮小圖片，以檢視更大的區域\x3c/p\x3e。',10116: '混合地圖',10117: '混合',10021: '放大',10022: '縮小',10023: '按一下設定縮放層級',10024: '拖曳以縮放',10507: '向左捲動',10508: '向右捲動',10509: '向上捲動',10510: '向下捲動',10029: '返回上一個結果',10511: '顯示街道地圖',10512: '顯示衛星圖',10513: '顯示包含街道名稱的衛星圖',10806: '按一下以在 Google 地圖上檢視此區域',1616: '公里',1547: '哩',10109: '公尺',10110: '英呎',11259: '全螢幕',10130: '地址',10131: '詳細資料',10908: '無標題',10937: '我儲存的位置',10938: '建立新地圖...',10940: '建立地圖時發生錯誤',10941: '已儲存至 %1$s',10942: '儲存地圖標記時發生錯誤',10943: '儲存中...',10945: '新增地圖標記',10946: '繪製線條',10947: '繪製形狀',10948: '加入圖片',11371: '儲存自 \x3ca href\x3d\x22%1$s\x22\x3e%2$s\x3c/a\x3e',10985: '放大',10986: '縮小',11047: '將地圖於此置中',10983: '清除搜尋結果',10935: '儲存至我的地圖',11271: '路線起點',11272: '路線終點',0: ''
   }
              );
 GAddMessages(
  {
   10807: '路況',10808: '顯示路況',10809: '隱藏路況',11089: '\x3ca href\x3d\x22javascript:void(0);\x22\x3e放大\x3c/a\x3e以檢視此區域的路況',10293: '新增',10294: '儲存',10295: '取消',10296: '刪除',10296: '刪除',10297: '新位置：',10298: '啟用位置的自動儲存功能',10299: '選取：',10299: '選取：',10300: '所有',10300: '所有',10301: '無',10301: '無',10302: '編輯',10303: '預設',10304: '標籤',10304: '標籤',10304: '標籤',10305: '位置',10305: '位置',10305: '位置',10307: '沒有儲存的位置。',10308: '使用此位置做為初始地圖檢視',10309: '不要使用此位置做為初始地圖檢視',11298: '街景視圖',11303: '街景視圖說明',11300: '隱藏街景視圖',540: '新功能！',11274: '若要使用街景視圖，您必須擁有 Adobe Flash Player 第 %1$d 版或更新版本。',11299: '顯示街景視圖',11302: '將我拖曳到標有藍色邊框的街道上。\x3cbr\x3e 您也可以直接點選標有藍色邊框的街道。',11382: '取得最新版的快閃記憶體播放器。',11304: '返回街景視圖',11305: '使用街景視圖',11306: '在某些特定的位置中，您可以在街道層級的圖片中進行檢視和瀏覽。 方法如下：',11307: '藍色邊框表示該路段中有街景視圖可供檢視。',11308: '此圖示可顯示您在地圖上的位置。 綠色箭頭表示您要前往的方向。 您可以拖曳此圖示來瀏覽其他位置， 也可以直接按下標有藍色邊框的路段直接前往。',11309: '拖曳街景視圖，可循 360\x26deg; 檢視。 您可以使用箭頭按鈕仔細瀏覽街道， 也可以使用鍵盤上的方向鍵。',11314: '很抱歉，由於使用需求龐大，街景視圖目前無法使用。\x3cbr\x3e請稍後再試！',11315: '此為約略的地址',1559: '北',1560: '南',1561: '西',1562: '東',1608: '西北',1591: '東南',1605: '西南',1606: '東南',11298: '街景視圖',11301: '\x3ca href\x3d\x22javascript:void(0);\x22\x3e放大\x3c/a\x3e以選取街景視圖位置',11302: '將我拖曳到標有藍色邊框的街道上。\x3cbr\x3e 您也可以直接點選標有藍色邊框的街道。',11304: '返回街景視圖',11305: '使用街景視圖',11306: '在某些特定的位置中，您可以在街道層級的圖片中進行檢視和瀏覽。 方法如下：',11307: '藍色邊框表示該路段中有街景視圖可供檢視。',11308: '此圖示可顯示您在地圖上的位置。 綠色箭頭表示您要前往的方向。 您可以拖曳此圖示來瀏覽其他位置， 也可以直接按下標有藍色邊框的路段直接前往。',11309: '拖曳街景視圖，可循 360\x26deg; 檢視。 您可以使用箭頭按鈕仔細瀏覽街道， 也可以使用鍵盤上的方向鍵。',11310: '回報不適當的圖片',11311: 'Google 對於本身所提供的服務非常重視。 請使用下列連結來提出您對於不當之街景視圖的疑慮。',11312: '目前的街景視圖：',11313: '回報不適當的圖片',10001: 'Google 地圖',10018: '載入中...',10317: '覆蓋至此地圖上的內容是由第三方提供，Google 對此概不負責。',11068: '建立新地圖',11112: '%1$s 已移除。',11113: '復原',11154: '重新載入',11166: '關閉',11169: '與伺服器連線時發生問題，請在 1 分鐘以後再試一次。',11170: '重試',11210: '新增小工具',11230: '無法載入...',11242: '編輯設定',11251: '推薦的小工具',11255: '建立者： \x3cspan class\x3d\x22mmauthor\x22\x3e%1$s\x3c/span\x3e',11265: '某些內容已經隱藏',11266: '放大以檢視更多',11341: '由我建立',11342: '由他人建立',11365: '個人化 %1$s',11366: '\x3cb\x3e新增\x3c/b\x3e其他人建立的互動地圖及工具。',11367: '\x3cb\x3e建立\x3c/b\x3e個人化地圖及註解，並分享給朋友、家人或其他網友。',11368: 'http://maps.google.com/support/bin/answer.py?answer\x3d67842\x26hl\x3dzh-TW',11369: 'http://maps.google.com/support/bin/answer.py?answer\x3d68480\x26hl\x3dzh-TW',11370: '詳細內容 \x26raquo;',11684: '此功能並非由 Google 建立。功能提供者可能會取得您在下方輸入的資料。',10018: '載入中...',160: '\x3cH1\x3e伺服器錯誤\x3c/H1\x3e伺服器發生暫時錯誤，無法完成您的要求。 \x3cp\x3e請在幾分鐘以後再試一次。\x3c/p\x3e',10691: '/',10692: '月日年',10693: '0',11198: '此站最近發車時間：',11655: '...',10917: '按一下將我放在地圖上',10918: '按一下開始繪製線條',10919: '按一下開始繪製形狀',10920: '轉換成純文字會遺失部分格式。 要繼續嗎？',10295: '取消',10921: '確定',10922: '標題',10785: '說明',10923: 'RTF 格式',10926: '線條顏色',10927: '寬度 (像素)',10928: '線條透明度',10929: '刪除這一點',10930: '繼續此線條',10931: '新增一個點',10933: '填入顏色',10934: '填入透明度',10940: '建立地圖時發生錯誤',10941: '已儲存至 %1$s',10942: '儲存地圖標記時發生錯誤',10943: '儲存中...',10908: '無標題',10944: '選取 / 編輯地圖功能',10945: '新增地圖標記',10946: '繪製線條',10947: '繪製形狀',10948: '加入圖片',10949: '儲存',10950: '已儲存',10952: '請輸入圖片的 URL。',11761: '請輸入要覆蓋在地圖上的影像 URL。\n\n例如：%1$s',10959: '編輯',10960: '刪除',10961: '拖曳以重置此線條',10962: '拖曳以重置此形狀',10963: '拖曳以移動這個點',10964: '拖曳以移動這個點',10965: '連按兩下以結束此形狀。',10966: '按一下繼續繪製形狀',10967: '連按兩下以結束此行',10968: '按一下繼續繪製線條',11054: '拖曳以移動此地圖標記',10969: '純文字',10970: '編輯 HTML',10868: '請先選取您要做為連結的文字。',10869: '輸入 URL',10870: '超大型',10871: '大型',10872: '正常',10873: '小',10874: '粗體',10875: '斜體',10876: '底線',10877: '字型',10878: '大小',10879: '文字顏色',10880: '標明顏色',10881: '移除格式',10882: '連結',10883: '編號清單',10884: '項目符號列表',10885: '減少縮排',10886: '增加縮排',10887: '靠左對齊',10888: '置中',10889: '靠右對齊',10890: '插入圖片',11098: '正常',11099: 'Times New Roman',11117: 'Arial',11101: 'Courier New',11102: '喬治亞',11103: 'Trebuchet',11104: 'Verdana',10913: '您確定要刪除此地圖？',10971: '您確定要刪除此地圖標記嗎？',10972: '您確定要刪除此線條？',10973: '您確定要刪除此形狀？',10976: '您確定要放棄地圖上未儲存的變更嗎？',10977: '顏色',10978: '透明度',10979: '已填入？',10980: '進階功能',10981: '基本',10982: '行寬 (像素)',11018: '內容',10914: '此地圖不存在。',11134: '編輯標題 / 設定',11068: '建立新地圖',10529: '我的地圖',11055: '無法與伺服器連線。',11056: '最後儲存於 %1$s',11057: '編輯線條樣式',11059: '轉換以填滿形狀',11058: '編輯形狀樣式',11072: '相片',11110: '超過字元字數的上限。',11124: '您已經登出「Google 帳戶」。',11125: '請登入',11126: '若要儲存地圖，請以 %1$s 登入',11127: '很抱歉，我們遇到技術上的問題。\x3cbr /\x3e(錯誤代碼 %1$d)',11128: '無法儲存。',11129: '僅供檢視',11130: '公開',11131: '不公開',11178: '搜尋結果中包含公開地圖。',11179: '詳細內容',11133: 'javascript:void(0)',11371: '儲存自 \x3ca href\x3d\x22%1$s\x22\x3e%2$s\x3c/a\x3e',10734: 'Internal only',11551: '預設圖示',11552: '我的圖示',11553: '新增圖示',11554: '連結至網路上的 JPG、GIF、BMP 或 PNG 檔案。',11555: '大於 64x64 像素的圖示在地圖上會被縮小。',11556: '輸入新圖示的 URL。',10330: '\x26laquo;上一步',11535: '總距離：',11585: '匯入 KML',11586: '從 KML、KMZ 或 GeoRSS 檔案新增地圖資料至此地圖。 這可能要花幾分鐘時間，視您網路連線的速度而定。',11587: '檔案大小上限： 10MB',11588: '瀏覽您的電腦，選取要上載的地圖資料',11589: '清除',11590: '或是輸入網上地圖資料的 URL',11591: '以上載後的檔案取代地圖上的所有內容',11592: '會刪除所有現有功能！',11593: '上載',11594: '從檔案上載',11595: '從 URL 上載',11596: '匯入 KML...',11597: '請再試一次',11598: '取消',11599: '檔案上載中...',11600: '請稍待 \x26mdash; 這可能要花幾分鐘時間，視您網路連線的速度而定。',11601: '別擔心 \x26mdash; 您的檔案仍在上載中。 請稍待！',11602: '我們無法完成您要上載的檔案。',11603: '地圖還沒有任何變更。',11649: '輸入網上地圖資料的 URL',11714: '完成',11745: '隱私權設定',11746: '其他人可在搜尋結果和您的個人資料中找到這份地圖。',11755: '您確定要刪除此地圖標記嗎？',10985: '放大',10986: '縮小',11047: '將地圖於此置中',10983: '清除搜尋結果',10935: '儲存至我的地圖',11208: '新增目的地',11209: '移除此目的地',11271: '路線起點',11272: '路線終點',11494: '分享此地圖',11495: '送出邀請',11496: '以逗號分隔電子郵件地址',11497: '允許任何人編輯此地圖',11498: '協同作業者',11499: '協同作業者可以邀請其他人',11500: '移除',11501: '您確定要以協同作業者的身分刪除 %1$s？',11502: '以協同作業者的身分邀請他人',11503: '訊息內容：',11504: '我與您共用名為 %1$s 的地圖：',11505: '新增您的訊息 (選擇性)',11506: '傳送此邀請函的副本給我',11507: '進階權限',11509: '刪除全部',11510: '擁有者',11511: '協同作業者可以編輯地圖並邀請其他人。',11512: '協同作業者可以編輯地圖。',11513: '我自己',11514: '您確定要刪除所有協同作業者？',11515: '1 位協同作業者',11516: '%1$d',11517: '',11533: '正在傳送訊息...',11534: '已經邀請協同作業者。',11694: '',11717: '邀請合作者',11718: '管理合作者',11719: '只有擁有者可以變更這些設定',1557: 'Google 地圖',11023: '傳送',11024: '傳送到：',11025: '電子郵件',11026: '汽車',11027: '包含：',11028: '資訊：',11029: '注意：',11030: '取消',11060: '\x3ca href\x3d\x22%1$s\x22\x3e詳細內容\x3c/a\x3e。',11066: '必填欄位',11031: 'Google 地圖支援使用 \x3ca href\x3d\x22%1$s\x22\x3eBMW Assist\x3c/a\x3e 將資訊傳送到汽車上。',11032: 'BMW Assist 帳戶名稱：',11033: '記住我的帳戶名稱',11034: '傳送 \x26raquo;',11062: '傳送到…',11035: '訊息已成功傳送到汽車上！',11036: '很報歉，我們無法傳送您的電子郵件。  請造訪 \x3ca href\x3d\x22%1$s\x22\x3eBMW Assist\x3c/a\x3e 並再試一次。',11039: '收件者：',11040: '寄件者：',11041: '以逗號分隔電子郵件',11042: '傳送副本到我的電子郵件。',11043: '訊息內容：',11044: '包含公司資訊',11045: '傳送 \x26raquo;',11061: '寄送郵件…',11063: '訊息成功寄出！',11064: '很抱歉，我們無法傳送您的電子郵件。 請稍後再試。',11074: '連結： %1$s',11067: '此電子郵件是使用者透過 %1$s (%2$s) 傳送給您的。',11075: '請選取結果…',11076: '搜尋結果',10032: '路線',11077: '\x22%1$s\x22 的搜尋結果',1601: '行車路線',11079: '開始地址： %1$s',11080: '結束地址： %1$s',11081: '旅遊： %1$s',11082: '開始於： %1$s',10118: '抵達於： %1$s',11083: '%1$s連結',11084: '你好，我要與你分享%1$s連結。',11085: '到%1$s的駕駛路線',11086: 'http://www.bmw.com/myinfo',11087: 'http://maps.google.com/support?hl\x3dzh_TW 。',11364: '無效的電子郵件地址',11396: '資料由 %1$s 提供',11393: '「Google 地圖」能將資訊傳送到您的導航系統。',11633: '「Google 地圖」可以將訊息傳送至配有 \x3ca href\x3d\x22%1$s\x22\x3eMercedes-Benz \x26amp; 的汽車，傳送技術由 Tele Aid 提供\x3c/a\x3e。',11417: 'http://maps.google.com/support?hl\x3dzh_TW',11459: 'http://maps.google.com/support/?hl\x3dzh_TW',11383: 'BMW 協助國家 / 地區：',11395: 'BMW 奧地利',11385: 'BMW 德國',11386: 'BMW 英國',11387: 'BMW 義大利',11388: 'Mercedes Tele Aid 電子郵件地址：',11389: '廠牌：',11390: 'BMW',11391: 'Mercedes-Benz',11384: '請選取一個...',11613: '很抱歉，我們現在無法傳送您的電子郵件。 請造訪\x3ca href\x3d\x22%1$s\x22\x3e說明網頁\x3c/a\x3e。',11394: 'http://www.mbusa.com/searchandsend',11455: '「Google 地圖」能將資訊傳送到 \x3ca href\x3d\x22%1$s\x22\x3e%2$s\x3c/a\x3e。',11540: '輸入您在下圖中看到的字元。',11541: '字母不區分大小寫。',11456: 'GPS',11457: '傳送到 GPS ...',1935: '檢視較大的地圖',11014: '今天',11151: '請勿使用不適當的字詞，如： %1$s',10953: '如果您繼續執行，將會遺失未儲存的變更。',11250: '\x3ca href\x3d\x22%1$s\x22\x3e登入\x3c/a\x3e檢視我現有的書籤',11245: '拖曳以變更路線'}
 );
  /* 
   if (!GValidateKey(""))
    {
     G_INCOMPAT = true;
     alert("此網站上使用的 Google 地圖 API 機碼已由另一個網站註冊。 您可以至 http://www.google.com/apis/maps/ 為此網站產生新的機碼。");
     return;
    }
  */

 GLoadApi(["http://mt0.google.com/mt?n\x3d404\x26v\x3dw2.63\x26",
           "http://mt1.google.com/mt?n\x3d404\x26v\x3dw2.63\x26",
           "http://mt2.google.com/mt?n\x3d404\x26v\x3dw2.63\x26",
           "http://mt3.google.com/mt?n\x3d404\x26v\x3dw2.63\x26"],
          ["http://kh0.google.com/kh?n\x3d404\x26v\x3d23\x26",
           "http://kh1.google.com/kh?n\x3d404\x26v\x3d23\x26",
           "http://kh2.google.com/kh?n\x3d404\x26v\x3d23\x26",
           "http://kh3.google.com/kh?n\x3d404\x26v\x3d23\x26"],
          ["http://mt0.google.com/mt?n\x3d404\x26v\x3dw2t.63\x26",
           "http://mt1.google.com/mt?n\x3d404\x26v\x3dw2t.63\x26",
           "http://mt2.google.com/mt?n\x3d404\x26v\x3dw2t.63\x26",
           "http://mt3.google.com/mt?n\x3d404\x26v\x3dw2t.63\x26"],
          "","","",false,"G");
if (window.GJsLoaderInit)
 {
  GJsLoaderInit("http://www.google.com/intl/zh-TW_ALL/mapfiles/90/maps2" +".api/main.js");
 }
}

function GUnload() 
 {
  if (window.GUnloadApi) 
   {
    GUnloadApi();
   }
 }
var _mF = [ 400,200,false,true,true,false,true,100,4096,"bounds_cippppt.txt","cities_cippppt.txt","local/add/flagStreetView",true,true,400,false,true,true,true,true,false,true,true,true,false,true,"/maps/c/ui/HovercardLauncher/dommanifest.js","no" ];
var _mHost = "http://maps.google.com";
var _mUri = "/maps";
var _mDomain = "google.com";
var _mStaticPath = "http://www.google.com/intl/zh-TW_ALL/mapfiles/";
var _mJavascriptVersion = "91";
var _mTermsUrl = "http://www.google.com/intl/zh-TW_ALL/help/terms_maps.html";
var _mHL = "zh-TW";
var _mGL = "";
var _mTrafficEnableApi = true;
var _mTrafficTileServerUrlBase = "http://www.google.com/mapstt";
var _mCityblockLatestFlashUrl = "http://maps.google.com/local_url?q\x3dhttp://www.adobe.com/shockwave/download/download.cgi%3FP1_Prod_Version%3DShockwaveFlash\x26dq\x3d\x26file\x3dapi";
var _mCityblockLogUsage = true;
var _mWizActions = {hyphenSep: 1,breakSep: 2,dir: 3,searchNear: 6,savePlace: 9};
var _mIdcRouterPath = "/maps/mpl/router";
var _mIdcRelayPath = "/maps/mpl/relay";
var _mIGoogleUseXSS = false;
var _mIGoogleServerUntrustedUrl = "http://gmodules.com";
var _mIGoogleEt = "E34Umadp";
var _mMplGGeoXml = 100;
var _mMplGPoly = 1000;
var _mMplMapViews = 100;
var _mMplGeocoding = 100;
var _mMplDirections = 100;
var _mMplEnableGoogleLinks = true;
var _mIGoogleServerTrustedUrl = "";
var _mIGoogleEt = "E34Umadp";
var _mIGoogleUseXSS = false;
var _mMMEnableAddContent = true;
var _mMSEnablePublicView = true;
var _mSatelliteToken = "fzwq2rdijW-se-twQoKPbGkHtQnswDk2iNF71A";
var _mMapCopy = "地圖資料 \x26#169;2007";
var _mSatelliteCopy = "Imagery \x26#169;2007";
var _mGoogleCopy = "\x26#169;2007 Google";
var _mPreferMetric = false;
var _mPanelWidth = 20;
 var _mMapPrintUrl = 'http://www.google.com/mapprint';
var _mAutocompleteFrom = '從';
var _mAutocompleteTo = '到';
var _mAutocompleteNearRe = '^(?:(?:.*?)\\s+)(?:(?:在|靠近|附近|接近):?\\s+)(.+)$';var _mSvgEnabled = true;
var _mSvgForced = false;
var _mLogInfoWinExp = true;
var _mLogPanZoomClks = false;
var _mLogWizard = true;
var _mLogLimitExceeded = true;
var _mLogPrefs = true;
var _mMMLogMyMapViewpoints = true;
var _mCalPopupMonths = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
var _mCalPopupDaysOfWeek = ["南","一","二","西","四","五","南"];
var _mSXBmwAssistUrl = '';
var _mSXCarEnabled = true;
var _mSXServices = {car_bmw_at:{type:1,make:"11390",account:"11032",system:"BMW Assist",link:"11086",group:"11383",name:"11395"},car_bmw_de:{type:1,make:"11390",account:"11032",system:"BMW Assist",link:"11086",group:"11383",name:"11385"},car_bmw_it:{type:1,make:"11390",account:"11032",system:"BMW Assist",link:"11086",group:"11383",name:"11387"},car_bmw_gb:{type:1,make:"11390",account:"11032",system:"BMW Assist",link:"11086",group:"11383",name:"11386"},car_mercedes_us:{type:1,make:"11391",account:"11388",system:"Mercedes-Benz Search\x26amp;Send powered by Tele Aid",link:"11394"}};
var _mMSMarker = '地圖標記';var _mMSLine = '線條';
var _mMSPolygon = '形狀';
var _mMSImage = '圖片';
var _mDirectionsDragging = true;
var _mDirectionsEnableApi = true;
var _mAdSenseForMapsEnable = "true";
var _mAdSenseForMapsFeedUrl = "http://pagead2.googlesyndication.com/afmaps/ads";
function GLoadMapsScript() {if (GBrowserIsCompatible()) {GScript("http://www.google.com/intl/zh-TW_ALL/mapfiles/90/maps2" +".api/main.js");}}
GLoadMapsScript();