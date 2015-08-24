/*

scopepoupCSSBegin defines the start of the JS file for including the ScopePopup CSS
The contents of var css is added at build time using nmake

*/

var sc_attachPopStyles = function()
{
    /*
        **** WARNING! ****
        If you add quotes to the CSS, they must be single quotes or this script will break!
    */
    var css = ".sc_pc{position:absolute;padding:0;top:14px;font-size:92%;margin:.82em 0 0 -18px;visibility:hidden;min-width:16em;width:auto}.sc_pc .sc_hl1{margin-right:0;color:#acacac}.sc_pc>.sc_hl1{padding:10px 8px}.sw_tb .sc_hl1 li .sc_hl1 li{margin:0}.hp_hor_hdr .sw_tb .sc_pc .sc_hl1 li a{margin:0 9px}.sc_pc .sc_pcC a{word-wrap:break-word;white-space:normal;width:14.5em}.sc_pc .sc_hl1 li a{white-space:normal}.sc_pc .sc_hl1 a:hover{text-decoration:none;color:#fff}#hp_sw_hdr .sc_pc h3{display:block}.sc_pc li{padding:.15em}.sc_sct{background:#000;left:0;top:0;position:absolute;z-index:-1;width:100%;height:100% !important}#hp_sw_hdr .sw_tb .sc_pc,#hp_sw_hdr .sw_tb .sc_pc div,#hp_sw_hdr .sw_tb .sc_pc li{display:block}.sc_sct{filter:alpha(opacity=70);opacity:.7}.sc_pcC{float:left;width:16.6em}.sc_pc h3,.sc_pc .scphdr{font-size:18px;color:#fff;margin:0 .8em;color:#fff;font-weight:normal;padding:.3em .2em}.sc_pcA{padding:2.1em .2em 0;padding-left:5px;clear:both}.sc_pcA A{margin:0 .75em}.sc_pc a{display:inline-block;padding:0}.sc_pc a:hover{text-decoration:underline}.sc_pc .sc_hl1 a,.sc_pc a,.sc_pcA{color:#acacac;font-family:Arial,Helvetica,Sans-Serif;font-size:12px;text-transform:none}#history.sc_C2{width:34em}#history li a{margin:0 18px}";
    sj_ic( css );
};/*

modulesCSSBegin defines the start of the JS file for including the HomepageModules CSS
The contents of var css is added at build time using nmake

*/

var sc_attachModStyles = function()
{
    /*
        **** WARNING! ****
        If you add quotes to the CSS, they must be single quotes or this script will break!
    */
    var css = "#hp_tbar{width:100%;min-width:900px;max-width:1366px;height:0;overflow:hidden;background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.55)),to(rgba(0,0,0,.55)));background-image:-moz-linear-gradient(rgba(0,0,0,.55) 0,rgba(0,0,0,.55) 100%);background-image:-ms-linear-gradient(rgba(0,0,0,.55) 0,rgba(0,0,0,.55) 100%);background-image:-o-linear-gradient(rgba(0,0,0,.55) 0,rgba(0,0,0,.55) 100%);background-image:linear-gradient(rgba(0,0,0,.55) 0,rgba(0,0,0,.55) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#8C000000',endColorstr='#8C000000')}#hp_tbar .sc_mdi{float:left}#hp_tbar .sc_mdi a{color:#fff;font-size:13px;line-height:27px;height:27px;text-decoration:none;overflow:hidden}#hp_tbar .sc_mdi a:hover{text-decoration:underline}#carouselControls{overflow:hidden;position:absolute;top:16px;left:33px;margin-top:4px}#carouselControls a{display:none}#carouselControls #sc_interests_edit{width:31px;font-size:13px;color:#f00;background-position:-248px 0}#carouselControls #interests_edit:hover{text-decoration:none}#carouselControls.personalization a{width:31px;height:30px;background-image:url(/s/a/hpc14.png)}#carouselControls.personalization a#sc_closer,#carouselControls.personalization a#sc_hide{background-position:-96px -54px}#carouselControls.personalization a#sc_opener{background-position:-128px -54px}#carouselControls.personalization a#sc_closer,#carouselControls.personalization a#sc_hide,#carouselControls.personalization a#sc_opener,#carouselControls.personalization a#sc_interests_edit{margin-right:10px}#carouselControls.personalization .rms_rmsanswersHomepageCarouselCollapse,#carouselControls.personalization .rms_rmsanswersHomepageCarouselExpand{display:none}#sc_title{display:inline;position:relative;bottom:7px;left:5px;margin-right:15px}.crs_hidden #sc_title{bottom:11px}.rms_rmsanswersHomepageCloseIconBlack{margin:10px 8px 3px 8px}#sc_mdc,#sc_mdc .sc_mdi{overflow:hidden;position:relative}#sc_md,#sc_mdClps{display:none}#sc_mdc #sc_mdPnOnly{width:auto;height:40px;margin-left:40px}#sc_mdPnOnly .pane a{display:inline-block}#sc_mdPopP{margin:0;padding:0;list-style:none}#sc_mdPopP,#sc_mdPopP li{height:31px}#sc_mdPopP li{width:auto;float:left;list-style:none;display:inline-block;margin-right:8px}#sc_mdPopP li a{text-align:left;font-family:Segoe UI,Segoe,Tahoma,Verdana,Arial,sans-serif;font-weight:400;color:#fff;height:31px;line-height:31px}#sc_mdPnOnly .pane a.first span.spl{display:none}#sc_mdPnOnly .spl{display:inline-block;vertical-align:middle;margin:-3px 8px 0 0;color:#999 !important;background:none;line-height:2px;height:2px;width:2px}#sc_mdCrs{width:1090px;height:111px;margin:0;padding:0;-ms-scroll-snap-points-x:snapInterval(0,150px);background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.1)),to(rgba(0,0,0,.05)));background-image:-moz-linear-gradient(rgba(0,0,0,.1) 0,rgba(0,0,0,.05) 100%);background-image:-ms-linear-gradient(rgba(0,0,0,.1) 0,rgba(0,0,0,.05) 100%);background-image:-o-linear-gradient(rgba(0,0,0,.1) 0,rgba(0,0,0,.05) 100%);background-image:linear-gradient(rgba(0,0,0,.1) 0,rgba(0,0,0,.05) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#0D000000',endColorstr='#0D000000')}#sc_mdCrs li,#sc_mdCrs img,#sc_mdCrs .crs_item_prm_bg{width:150px}#sc_mdCrs span.crs_item_prm_bg{display:block}#sc_mdCrs li.crs_wide{width:225px !important}#sc_mdCrs h2,#sc_mdCrs div.hp_text{padding:6px 0 5px 0;color:#fff;margin:0}#sc_mdCrs img,#sc_mdCrs .crs_item_prm_bg{height:75px}#sc_mdCrs li{margin-left:2px !important;margin-right:2px !important}#crs_wrap{position:relative;overflow:hidden;width:100%}#crs_scroll{overflow-x:scroll;overflow-y:hidden;-webkit-overflow-scrolling:touch;-ms-scroll-snap-points-x:snapInterval(0,160px);-ms-scroll-snap-type:proximity;-ms-scroll-chaining:none;position:relative;min-height:185px;margin:0 40px 0 40px}#crs_pane{position:relative;overflow:hidden;left:0;margin:0;padding:0;list-style:none}#crs_pane li{display:inline-block;float:left;cursor:pointer;overflow:hidden}#crs_pane li a,#crs_pane li a:hover{border:none;display:inline-block;text-decoration:none !important;width:inherit;height:inherit;position:relative;overflow:hidden;zoom:1}#crs_pane li a img{border:none}.crs_item h2,.crs_item div.hp_text{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;margin-top:0}.crs_item .segoe_light{font-family:'Segoe UI Semilight','Segoe UI',Segoe,Arial,Helvetica,sans-serif}.crs_item .segoe_reg{font-family:'Segoe UI',Segoe,Arial,Helvetica,sans-serif}.crs_item_content{top:0;left:0;right:0;bottom:0;position:absolute;-ms-transition:margin-top 500ms;-webkit-transition:margin-top 500ms;-moz-transition:margin-top 500ms;-o-transition:margin-top 500ms;transition:margin-top 500ms}.crs_item_qry{position:absolute;left:0;top:0;width:160px;height:100%}.crs_item_prm{position:relative}.crs_item_prm_desc{position:absolute;cursor:pointer;font-family:'Segoe UI',Arial,Helvetica,sans-serif;font-size:14px;color:#fff;line-height:125%;white-space:normal;z-index:1}.crs_item_prm_txt{padding:8px 14px 16px 12px;width:124px}.crs_item_prm_txtimg{padding:8px 55px 16px 12px;width:83px}.prm_dark_purple .crs_item_prm_bg{background-color:#5e256d}.prm_light_purple .crs_item_prm_bg{background-color:#9b0b89}.prm_pink .crs_item_prm_bg{background-color:#c80b7b}.crs_bt{position:absolute;top:0;bottom:0;width:40px;background-color:#111;z-index:2;cursor:pointer;background-color:transparent;height:111px}.hpcCaroNavRight,.hpcCaroNavLeft{top:43px;left:12px}.hpcCaroNavLeft{right:12px}#crs_btRight{border-left:none;display:block}#crs_btLeft{display:block;border-right:none}.ltr #crs_btLeft{left:0}.ltr #crs_btRight{right:0}.crs_bt_disabled{-moz-opacity:.3;filter:alpha(opacity=30);opacity:.3;cursor:default}#sc_imagecreditslink{display:none;float:left;top:20px;color:#666;margin-left:18px !important;height:32px;line-height:32px}#sc_imagecreditslink:hover{text-decoration:none;cursor:default}.crs_breaking{position:absolute;width:100%;left:0;bottom:0;line-height:13px;padding:1px 0 3px 6px;color:#fff;cursor:inherit;background:#e81123 transparent;background:rgba(232,17,35,.7);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#b3e81123,endColorstr=#b3e81123);-ms-filter:'progid:DXImageTransform.Microsoft.gradient(startColorstr=#b3e81123, endColorstr=#b3e81123)'}#wpb{border:1px solid #333;padding:12px;background-color:#333;font-family:Arial;width:330px;position:absolute;bottom:40px;right:0;display:none;z-index:7}#hp_bottomCell{z-index:5}.wpbTitle{margin:5px 0 5px;color:#fff;font-size:16px;margin-left:5px}.wpbMessage{padding-top:12px;padding-bottom:12px;font-size:14px;color:#ccc;overflow:hidden;margin-left:5px}.wpbMessage2{padding-bottom:12px;font-size:11px;color:#ccc;overflow:hidden;margin-left:5px}.wpbConnectNow{padding:5px 10px;background-color:#36b;font-size:13px;font-weight:bold;color:#fff;text-decoration:none;text-align:center;cursor:pointer;margin-left:5px}.wpbConnectNow:hover{background:#5886d1}.wpbConnectNow:active{background:#666}.wpbClose{display:block;position:absolute;top:12px;right:12px;cursor:pointer}#crs_break_news{color:#fff;font-family:Segoe UI,Segoe,Tahoma,Verdana,Arial,sans-serif;font-size:13px;left:64px;top:8px;display:none;position:absolute}#crs_break_title{display:inline-block}#crs_break_news,#crs_break_news a{color:#fff;text-decoration:none}#crs_break_title:first-letter,#crs_break_title::first-letter {text-transform:capitalize}";
    sj_ic( css );
};sc_PopupFetcher = function () {
    var _transpDivScopeClassname = "sc_sct";
    var _triggerIdPrefix = "scpt";
    var _containerIdPrefix = "scpc";
    var _div = "div";
    var _px = "px";
    var _activeScope = null;
    var HOVER_DELAY = 200;

    // detect RTL
    var isRtl = (_G && _G.RTL === true);

    var visible = "visible";
    var hidden = "hidden";
    var block = "block";
    var left = "Left";
    var hpContainer = "hp_container";

    var moreMenu = _ge("seeall");
    
    this.Init = function () {
        sc_attachPopStyles();

        // Attach each popup in the response to the corresponding scope
        if (_w._scopeRef) {
            for (var scopeName in _scopeRef) {
                var ref = _scopeRef[scopeName];
                var scopeItem = _ge(_triggerIdPrefix + ref);
                var popupHtml = _ge(scopeName);
                if (scopeItem && popupHtml) {
                    var transpDiv = sj_ce(_div, 0, _transpDivScopeClassname);
                    popupHtml.appendChild(transpDiv);

                    scopeItem.pop = popupHtml;

                    var container = _ge(_containerIdPrefix + ref);
                    if (container) {
                        container.appendChild(popupHtml);
                        transpDiv.style.height = scopeItem.pop.offsetHeight + _px;
                    }

                    scopeItem.onmouseover = function (evt) { triggerOver(this, evt); };
                    scopeItem.onmouseout = function (evt) { triggerOut(this, evt); };
                }
            }
        }

        if (moreMenu)
        {
            moreMenu.style.display = block;
        }
    };

    function triggerOver(item) {
        clearFadeInterval(item, false);
        if (_activeScope && _activeScope != item) {
            hidePopup(_activeScope);
        }
        _activeScope = item;

        // Adjust the height and position for popup and transparent divs
        var c = item.pop;
        var goLeft = sj_go(item, left), posVal;
        var elmContainer = _ge(hpContainer);
        var posDiff = _d.body.clientWidth - elmContainer.offsetWidth;
        // Compute the li and a elements offset left different. Chrome and Safari will return 0, IE and FF will return margin of a elemnts
        var edgeDiff = (item.firstChild && (item.firstChild.offsetLeft - item.offsetLeft)) || 0;
        // IE7 will return a nagative number, the offsetLeft itself is the expected value
        if (edgeDiff < 0) {
            edgeDiff = item.firstChild.offsetLeft;
            // reset the position diff between body and container if scroll bar is showing
            if (posDiff < 0) {
                posDiff = 0;
            }
        }
        if (isRtl) {
            // for Chrome and Safari
            if (edgeDiff === 0 && item.firstChild) {
                edgeDiff = item.offsetWidth - item.firstChild.offsetWidth;
            }

            var schdu = sj_go(_ge("sc_hdu"), left);
            posVal = goLeft - schdu;
            c.style.left = (posVal + item.offsetWidth - c.offsetWidth - edgeDiff) + _px;
        } else {
            posVal = goLeft - (posDiff > 0 ? posDiff / 2 : 0);
            c.style.left = (posVal + edgeDiff) + _px;
        }

        // used for client instrumentation (see static\log\HomePage_r.js)
        sj_evt.fire("onSPHover", "scPop" + _scopeRef[c.id]);

        if (sb_i6) {
            showPopup(item);
        } else {
            item.delayfadeInInt = sb_st(sj_wf(showPopup, item, true), HOVER_DELAY);
        }
    };

    function triggerOut(item, e) {
        var evtTarget = sj_mo(e);
        if (!sj_we(evtTarget, item)) {
            clearFadeInterval(item, true);
            item.delayfadeOutInt = sb_st(sj_wf(hidePopup, item), HOVER_DELAY);
        }
    };

    function hidePopup(item) {
        item.pop.style.visibility = hidden;
    };

    function showPopup(item) {
        item.pop.style.visibility = visible;
    };
    
    function clearFadeInterval(elem, bFadeIn) {
        if (elem.delayfadeInInt && bFadeIn) {
            sb_ct(elem.delayfadeInInt);
            elem.delayfadeInInt = null;
        } else if (elem.delayfadeOutInt && !bFadeIn) {
            sb_ct(elem.delayfadeOutInt);
            elem.delayfadeOutInt = null;
        }
    }
};
(function (_) {
    var NONE = 'none';
    var BLOCK = 'block';
    var INLINEBLOCK = 'inline-block';
    var CLICK = 'click';
    var SCROLL = 'scroll';
    var UNIT_PX = 'px';
    var USER_COOKIE = "_UR";
    var USER_COOKIE_CRUMB = "TC";
    var USER_COOKIE_VALUE_OPENED = "C0";
    var USER_COOKIE_VALUE_CLOSED = "C1";
    var USER_COOKIE_VALUE_HIDDEN = "C2";
    var EVT_ANIM_DONE = 'HPTBD';
    var EVT_TB_START = 'EVT_TB_START';
    var EVT_CRS_SETUPDONE = 'EVT_CRS_SETUPDONE';
    var EVT_CRS_SCROLLDONE = 'EVT_CRS_SCROLLDONE';
    var HEIGHT = 'height';
    var ANIMATION_DURATION = 500;
    var TASKBAR_ANIMATION_DURATION = 300;
    var TASKBAR_COLLAPSED_ANIMATION_DURATION = 150;

    var CAROUSEL_MAX_WIDTH = 1366;
    var CAROUSEL_REFRESH_OPEN_STYLE = "crs_open";
    var CAROUSEL_REFRESH_COLLAPSED_STYLE = "crs_collaps";
    var CAROUSEL_REFRESH_HIDDEN_STYLE = "crs_hidden";
    var CAROUSEL_REFRESH_NAVDISABLED_STYLE = "crs_bt_disabled";
    var CAROUSEL_NAV_RIGHT = "crs_btRight";
    var CAROUSEL_NAV_LEFT = "crs_btLeft";

    var fullTaskbarAnim;
    var collapsedTaskbarAnim;
    var justCall = function (callBack) { callBack && callBack(); };
    var emptyAnim = { start: justCall, revert: justCall, updateDur: function () { } };

    var isTaskbarHidden;
    var carouselCanHide;
    var usingCarouselBasicControls;
    var carouselBreakingNewsTitleElement;
    var isCarouselMinimized;
    var isCarouselAvailable;
    var currentState;

    var taskbarModel = new TaskbarModel(111, 31, 154, 111, 75, 40);

    // as the style code has been loaded, apply it at the very beginning
    !!sc_attachModStyles && sc_attachModStyles();

    function TaskbarModel(height, collapsedHeight, tileWidth, tileHeight, proactiveNewsThumbnailWidth, navigationWidth) {
        this.Height = height;
        this.CollapsedHeight = collapsedHeight;
        this.TileWidth = tileWidth;
        this.TileHeight = tileHeight;
        this.ThumbWidth = proactiveNewsThumbnailWidth;
        this.NavigationButtonWidth = navigationWidth;
    }

    function showHide(elem, hide) {
        elem && elem.style && (elem.style.display = hide ? NONE : BLOCK);
    }

    function showHideInline(elem, hide) {
        elem && elem.style && (elem.style.display = hide ? NONE : INLINEBLOCK);
    }

    function hideShowTaskbar(hide) {
        _.elmMdAll && showHide(_.elmTbar, hide);
    }

    function getTaskbarAnimation() {
        if (_.elmMdAll) {
            return (_.elmMdAll.style.display === BLOCK) ? fullTaskbarAnim : collapsedTaskbarAnim;
        }
        return emptyAnim; // Used when taskbar is not loaded.
    }

    function setCloseCookie(value) {
        sj_cook.set(USER_COOKIE, USER_COOKIE_CRUMB, value, 1, "/");
    };

    function isCloseCookieSet() {
        return sj_cook.get(USER_COOKIE, USER_COOKIE_CRUMB) === USER_COOKIE_VALUE_CLOSED;
    };

    function isTaskbarHiddenCookieSet() {
        return sj_cook.get(USER_COOKIE, USER_COOKIE_CRUMB) === USER_COOKIE_VALUE_HIDDEN;
    };

    _.init = function () {
        _.elmMdC = _ge('sc_mdc');
        _.elmTbar = _ge('hp_tbar');
        _.elmClps = _ge('carouselControls');
        _.elmOpener = _ge('sc_opener');
        _.elmCloser = _ge('sc_closer');
        _.elmEdit = _ge('sc_interests_edit');
        _.elmHide = _ge('sc_hide');
        _.elmCaroHover = _ge('cs_hover');
        _.elmCarousel = _ge('sc_mdCrs');
        _.elmFooter = _ge('sb_foot');
        _.elmImageCredits = _ge('sc_imagecreditslink');
        _.elmCarouselPane = _ge('crs_pane');
        _.elmMdClps = _ge('sc_mdClps');
        _.elmMdAll = _ge('sc_md');

        isCarouselAvailable = !!_.elmCarousel && _.elmCarouselPane && _.elmCarouselPane.children.length > 0;
        isCarouselMinimized = isCarouselAvailable && _.elmCarousel.className.indexOf(CAROUSEL_REFRESH_COLLAPSED_STYLE) != -1;;
        carouselCanHide = isCarouselAvailable && _.elmHide;
        usingCarouselBasicControls = _.elmClps && _.elmClps.className.indexOf('basicControls') > -1;
        carouselBreakingNewsTitleElement = carouselCanHide && _ge('crs_break_news');
        isTaskbarHidden = true;

        // do nothing if any of the containers are missing
        if (!_.elmMdC || !_.elmTbar || !_.elmClps || !_.elmOpener || !_.elmCloser) {
            return;
        }

        if (_.elmTbar && _.elmTbar.className.indexOf('hp_cnCarousel') > -1) {
            taskbarModel.CollapsedHeight = 40;
            taskbarModel.Height = 115;
            taskbarModel.TileHeight = 115;
        }

        initWallpaperBubble();

        if (isCarouselAvailable) {
            initCarousel();
        } else {
            return;
        }

        if (_w._anim) {
            fullTaskbarAnim = _anim.animE(_.elmTbar, HEIGHT, 0, taskbarModel.Height, { duration: TASKBAR_ANIMATION_DURATION, unit: UNIT_PX });
            collapsedTaskbarAnim = _anim.animE(_.elmTbar, HEIGHT, 0, taskbarModel.CollapsedHeight, { duration: TASKBAR_COLLAPSED_ANIMATION_DURATION, unit: UNIT_PX });
            _.tbarAnim = _anim.animE(_.elmTbar, HEIGHT, taskbarModel.CollapsedHeight, taskbarModel.Height, { duration: ANIMATION_DURATION, unit: UNIT_PX });
        }

        _.elmTbar.appendChild(_.elmMdC);

        _.elmHusb = _ge('hp_husb');
        _.elmHusbC = _ge('sc_husb');

        if (_.elmHusb && _.elmHusbC) {
            _.elmHusb.appendChild(_.elmHusbC);
            showHide(_.elmHusb, false);
        }
        else {
            showHide(_.elmHusb, true);
        }

        sj_be(_.elmOpener, CLICK, _.tbarOpen);
        sj_be(_.elmCloser, CLICK, _.tbarClose);

        if (carouselCanHide) {
            sj_be(_.elmHide, CLICK, _.tbarHide);

            // Add breaking news title to the hp controls element.
            var breakingNewsTitle = _ge("crs_break_news");
            var hpControls = _ge("hp_ctrls");
            if (hpControls && breakingNewsTitle) {
                hpControls.appendChild(breakingNewsTitle);
            }
        }

        // do nothing before init() is done
        if (!_.elmMdC || !_.elmTbar || !_.elmClps || !_.elmOpener || !_.elmCloser) {
            return;
        }

        checkTaskbarInitialStateAndLoad();
    };

    /* Check for the taskbar sticky state stored in the user cookie and load the taskbar */
    function checkTaskbarInitialStateAndLoad() {
        var initialState = carouselCanHide && isTaskbarHiddenCookieSet() ? 2 : isCloseCookieSet() ? 1 : 0;
        if (isCarouselMinimized) {
            initialState = 1;
        }

        if (usingCarouselBasicControls && initialState == 1) {
            // When using basic controls, carousel in collapsed mode should resolve to hidden mode
            initialState = 2;
        }

        switch (initialState) {
            case 1: /* Start Collapsed */
                showHide(_.elmMdClps, false); //show collapsed carousel titles
                showHide(_.elmMdAll, true); // hide expanded carousel tiles
                showHideInline(_.elmCloser, true); // hide close button if carousel can be hidden
                showHideInline(_.elmEdit, true); // hide manage button if carousel can be hidden
                showHideInline(_.elmOpener, isCarouselMinimized ? true : carouselCanHide); // hide expand button if carousel can be hidden
                carouselCanHide && showHide(_.elmHide, isCarouselMinimized); // show hide button
                _.elmTbar.style.height = taskbarModel.CollapsedHeight;
                _.addStyleClass(sj_b, CAROUSEL_REFRESH_COLLAPSED_STYLE);
                _.addStyleClass(_.elmMdC, CAROUSEL_REFRESH_COLLAPSED_STYLE);
                _.show(null, onTaskbarLoadComplete);
                break;
            case 2:
                /* Start Hidden */
                showHide(_.elmMdClps, true); // hide collapsed carousel titles
                showHide(_.elmMdAll, true); // hide expanded carousel tiles 
                showHideInline(_.elmCloser, true); // hide close button
                showHideInline(_.elmEdit, true); // hide manage button
                showHideInline(_.elmOpener, false); // show the expand button
                carouselCanHide && showHide(_.elmHide, true); // hide the hide button
                showHide(_.elmTbar, false);
                _.addStyleClass(sj_b, CAROUSEL_REFRESH_HIDDEN_STYLE);
                onTaskbarLoadComplete();
                carouselBreakingNewsTitleElement && showHide(carouselBreakingNewsTitleElement, false);
                break;
            default:
                /* Start Expanded */
                showHide(_.elmMdClps, true); // hide collapsed items
                showHide(_.elmMdAll, false); // show expanded carousel tiles
                showHideInline(_.elmOpener, true); // hide expand button
                if (usingCarouselBasicControls) {
                    showHideInline(_.elmCloser, true); // hide close button
                    showHideInline(_.elmEdit, true); // hide manage button
                    carouselCanHide && showHideInline(_.elmHide, false); // show the hide button
                }
                else {
                    showHideInline(_.elmCloser, false); // show close button
                    showHideInline(_.elmEdit, false); // show manage button
                    carouselCanHide && showHide(_.elmHide, true); // hide the hide button
                }
                _.addStyleClass(sj_b, CAROUSEL_REFRESH_OPEN_STYLE);
                _.show(null, onTaskbarLoadComplete);
        }

        currentState = initialState;
    }

    function onTaskbarLoadComplete() {
        sj_evt.fire(EVT_TB_START);
        // Log that the taskbar load is complete
        if (_w.Log && _w.Log.Log && _w.g_crsInst) {
            _w.Log.Log("Load", "HP", "Carousel", false, null);
        }
    }

    function initWallpaperBubble() {
        // wallpaper bubble
        var wpBubble = _ge('wpb');
        var rDiv = _ge('sh_rdiv');
        if (rDiv && wpBubble) {
            rDiv.appendChild(wpBubble);
        }
    }

    _.tbarOpen = function () {
        showHide(_.elmMdClps, true);
        showHide(_.elmMdAll, false);

        _.removeStyleClass(sj_b, CAROUSEL_REFRESH_HIDDEN_STYLE);
        _.addStyleClass(sj_b, CAROUSEL_REFRESH_OPEN_STYLE);
        _.elmMdC && _.removeStyleClass(_.elmMdC, CAROUSEL_REFRESH_COLLAPSED_STYLE);
        var backNav = _G && _G.RTL === true ? _ge(CAROUSEL_NAV_RIGHT) : _ge(CAROUSEL_NAV_LEFT);
        var forwardNav = _G && _G.RTL === true ? _ge(CAROUSEL_NAV_LEFT) : _ge(CAROUSEL_NAV_RIGHT);
        backNav && _.addStyleClass(backNav, CAROUSEL_REFRESH_NAVDISABLED_STYLE);
        forwardNav && _.removeStyleClass(forwardNav, CAROUSEL_REFRESH_NAVDISABLED_STYLE);

        if (usingCarouselBasicControls) {
            showHideInline(_.elmOpener, true); // hide open button
            showHideInline(_.elmCloser, true); // hide close button
            showHideInline(_.elmEdit, true); // hide edit button
            showHideInline(_.elmHide, false); // show hide button
        }
        else {
            showHideInline(_.elmOpener, true); // hide open button
            showHideInline(_.elmCloser, false); // show close button
            showHideInline(_.elmEdit, false); // show edit button
            showHideInline(_.elmHide, true); // hide hide button
        }

        _.tbarAnim.start(sj_wf(sj_evt.fire, EVT_ANIM_DONE));

        setCloseCookie(USER_COOKIE_VALUE_OPENED);
        carouselBreakingNewsTitleElement && showHide(carouselBreakingNewsTitleElement, true);
    };

    _.tbarClose = function () {
        _.removeStyleClass(sj_b, CAROUSEL_REFRESH_OPEN_STYLE);
        _.addStyleClass(sj_b, CAROUSEL_REFRESH_COLLAPSED_STYLE);
        _.elmMdC && _.addStyleClass(_.elmMdC, CAROUSEL_REFRESH_COLLAPSED_STYLE);
        if (carouselCanHide) {
            showHideInline(_.elmOpener, true);
            showHideInline(_.elmCloser, true);
            showHideInline(_.elmEdit, true);
            showHide(_.elmHide, false);
        } else {
            showHideInline(_.elmOpener, false);
            showHideInline(_.elmCloser, true);
            showHideInline(_.elmEdit, true);
        }

        showHide(_.elmMdClps, false);
        showHide(_.elmMdAll, true);

        _.tbarAnim.revert(sj_wf(sj_evt.fire, EVT_ANIM_DONE));
        setCloseCookie(USER_COOKIE_VALUE_CLOSED);
    };

    _.tbarHide = function () {
        showHideInline(_.elmOpener, false);
        showHideInline(_.elmCloser, true);
        showHideInline(_.elmEdit, true);
        showHide(_.elmHide, true);

        collapsedTaskbarAnim.revert(sj_wf(sj_evt.fire, EVT_ANIM_DONE));
        setCloseCookie(USER_COOKIE_VALUE_HIDDEN);
        if (usingCarouselBasicControls) {
            _.removeStyleClass(sj_b, CAROUSEL_REFRESH_OPEN_STYLE); // previous state was open
        }
        else {
            _.removeStyleClass(sj_b, CAROUSEL_REFRESH_COLLAPSED_STYLE); // previous state was collapsed
        }
        _.addStyleClass(sj_b, CAROUSEL_REFRESH_HIDDEN_STYLE);
        carouselBreakingNewsTitleElement && showHide(carouselBreakingNewsTitleElement, false);
    };

    _.show = function (duration, callback) {
        if (isTaskbarHidden) {
            var animation = getTaskbarAnimation();

            hideShowTaskbar(false);
            duration && animation.updateDur(duration);
            animation.start(callback);
            isTaskbarHidden = false;
        } else {
            callback && callback();
        }
    };

    _.hide = function (duration, callback) {
        if (!isTaskbarHidden) {
            var animation = getTaskbarAnimation();

            duration && animation.updateDur(duration);
            animation.revert(function () {
                hideShowTaskbar(true);
                callback && callback();
            });
            isTaskbarHidden = true;
        } else {
            callback && callback();
        }
    };

    _.addStyleClass = function (element, className) {
        if (!element || !className)
            return;
        element.className += " " + className;
    };

    _.removeStyleClass = function (element, className) {
        if (!element || !className)
            return;

        var newClassName = element.className.replace(className, "").replace(/^\s+|\s+$/g, '');
        element.className = newClassName;
    };

    _.containsStyleClass = function (element, className) {
        if (!element || !className)
            return false;

        return element.className.indexOf(className) != -1;
    };

    _.resizePane = function () {
        var carouselPane = _ge("crs_pane");

        if (carouselPane) {
            var caroTiles = carouselPane.getElementsByTagName("li");

            // Take into account news tiles that have thumbnails
            var newsThumbnailCount = hp_getelemsbyclass(carouselPane, "img", "crs_newsthmb").length;

            carouselPane.style.width = (caroTiles.length * taskbarModel.TileWidth + newsThumbnailCount * taskbarModel.ThumbWidth) + UNIT_PX;
        }
    }

    _.isCollapsedOrHidden = function () {
        return currentState != 0;
    }

    /* Carousel */
    function initCarousel() {
        var isModernIe = sb_i9p || _w.navigator.msPointerEnabled;
        var leftNav = _ge(CAROUSEL_NAV_LEFT),
            leftParentStyle = leftNav.style,
            rightNav = _ge(CAROUSEL_NAV_RIGHT),
            rightParentStyle = rightNav.style,
            carouselPane = _ge("crs_pane"),
            scrollPane = _ge("crs_scroll"),
            isWebkit = document.body.className.indexOf('wkit') != -1,
            isSliding = false,
            isRightToLeft = _G && _G.RTL === true,
            scrollDir = (isRightToLeft && (isModernIe || sb_i8l)) ? -1 : 1;

        function onCarouselResize(init) {
            var hpContainer = _ge("hp_container");
            var carouselContainer = _ge("sc_mdCrs");

            if (hpContainer && carouselContainer && scrollPane) {
                var carouselWidth = Math.min(hpContainer.clientWidth, CAROUSEL_MAX_WIDTH);
                carouselContainer.style.width = carouselWidth + UNIT_PX;

                if (!init) {
                    verifyScrollControls();
                }
            }
        }

        function onRightNav() {
            var destPosition;
            if (scrollPane) {
                destPosition = scrollPane.scrollLeft + (scrollPane.clientWidth * scrollDir);
                if (isRightToLeft && isModernIe && destPosition < 0) {
                    destPosition = 0;
                }
                else {
                    destPosition = Math.floor(destPosition / taskbarModel.TileWidth);
                    destPosition *= taskbarModel.TileWidth;
                    destPosition += (taskbarModel.NavigationButtonWidth * -scrollDir);
                }
                slideCarousel(scrollPane.scrollLeft, destPosition);
            }
        }

        function onLeftNav() {
            var destPosition;
            if (scrollPane) {
                destPosition = scrollPane.scrollLeft - (scrollPane.clientWidth * scrollDir);
                if ((!isRightToLeft || sb_i8l) && destPosition < 0) {
                    destPosition = 0;
                }
                slideCarousel(scrollPane.scrollLeft, destPosition);
            }
        }

        function slideCarousel(from, to) {
            if (from == to)
                return;

            isSliding = true;
            var navAnim = _anim.animE(scrollPane, updateScroll, from, to, { duration: ANIMATION_DURATION });
            navAnim.start(verifyScrollControls);
        }

        function verifyScrollControls() {
            leftParentStyle.display = BLOCK;
            rightParentStyle.display = BLOCK;

            _.removeStyleClass(_ge(CAROUSEL_NAV_LEFT), CAROUSEL_REFRESH_NAVDISABLED_STYLE);
            _.removeStyleClass(_ge(CAROUSEL_NAV_RIGHT), CAROUSEL_REFRESH_NAVDISABLED_STYLE);

            if (scrollPane.scrollLeft == 0) {
                _.addStyleClass(_ge(isRightToLeft && !isWebkit ? CAROUSEL_NAV_RIGHT : CAROUSEL_NAV_LEFT), CAROUSEL_REFRESH_NAVDISABLED_STYLE);
            }

            if (Math.abs(scrollPane.scrollLeft) + scrollPane.clientWidth >= scrollPane.scrollWidth - taskbarModel.NavigationButtonWidth) {
                _.addStyleClass(_ge(isRightToLeft && !isWebkit ? CAROUSEL_NAV_LEFT : CAROUSEL_NAV_RIGHT), CAROUSEL_REFRESH_NAVDISABLED_STYLE);
            }

            // Fire an event to indicate that scrolling is complete
            sj_evt.fire(EVT_CRS_SCROLLDONE);

            isSliding = false;
        }

        function updateScroll(element, value) {
            if (element) {
                element.scrollLeft = value;
            }
        }

        function carouselSetup() {
            // Add image credits link
            if (!!_.elmImageCredits && !!_.elmFooter) {
                _.elmImageCredits.style.display = "inline";
                _.elmFooter.appendChild(_.elmImageCredits);
            }

            var hpControls = _ge("hp_ctrls");
            var controls = _ge("carouselControls");

            if (hpControls && controls) {
                // hide caro controls when carousel is hidden
                if (hpControls.getAttribute('data-tbarhidden')) {
                    controls.className += ' hidden';
                }

                hpControls.appendChild(controls);
            }

            var caroPane = _ge('sc_mdCrs');
            if (caroPane) {
                _.addStyleClass(caroPane, isRightToLeft ? "rtl" : "ltr");

                var firstNavElement = isRightToLeft ? _ge(CAROUSEL_NAV_RIGHT) : _ge(CAROUSEL_NAV_LEFT);
                if (firstNavElement) {
                    _.addStyleClass(firstNavElement, CAROUSEL_REFRESH_NAVDISABLED_STYLE);
                }

                // If tile filters are enabled, set back button opacity to 0
                if (tileFiltersEnabled()) {
                    sj_so(firstNavElement, 0);
                }
            }

            sj_be(rightNav, CLICK, onRightNav);
            sj_be(leftNav, CLICK, onLeftNav);

            sj_be(_w, "resize", sj_wf(onCarouselResize, false));
            onCarouselResize(true);

            if (scrollPane) {
                sj_be(scrollPane, SCROLL, verifyScrollControls);

                _.resizePane();
            }

            sj_evt.fire(EVT_CRS_SETUPDONE);
        }

        function tileFiltersEnabled() {
            return _.elmMdC.getAttribute("data-crsfilt") === "1";
        }

        carouselSetup();
    }
})(_w.bhptb = _w.bhptb || {});

// a place to store state of homepage modules call.
(function (_) {
    _.hpmRequestCallStarted = false;
})(_w.hpmst = _w.hpmst || {});

var hpmRequest = (function (isRefresh) {
    if (!isRefresh && _w.hpmst && _w.hpmst.hpmRequestCallStarted) {
        // do not execute further if we already making a call to hpm
        return;
    }

    _w.hpmst.hpmRequestCallStarted = true;

    var requestStart = sb_gt();

    if (_H.startTm) {
        _w.hp_llog && hp_llog("CarouselStart", requestStart - _H.startTm);
    }

    var request = sj_gx();
    var urlParams = hp_pushparams([]);

    var appendCssToHead = function (css) {
        var headElement = _d.head || _d.getElementsByTagName("head")[0];

        for (var i = 0, l = css.length; i < l; i++) {
            var styleElement = sj_ce("style");
            styleElement.setAttribute("type", "text/css");

            if (styleElement.textContent !== undefined) {
                styleElement.textContent = css[i];
            }
            else {
                styleElement.styleSheet.cssText = css[i];
            }

            headElement.appendChild(styleElement);
        }
    };

    var parseCssFromResponseText = function(text) {
        var css = [];

        var filteredText = text.replace(/<style\s+[^>]+>([^<]*)<\/style>/g,
                        function (m, cssContent) {
                            css.push(cssContent);
                            return '';
                        });

        appendCssToHead(css);

        return filteredText;
    }

    // Instrumetation values - insertion point
    _w._scpIID && urlParams.push("IID=" + _scpIID);

    // Add additional parameters to the URL
    _G && _G.IG && urlParams.push("IG=" + _G.IG);

    // Add url parameter when request is initiated by Chrome New Tab
    var popNowDiv = _ge("cnt_popnow");
    if (popNowDiv) {
        urlParams.push("feature=cnt");
    }

    var requestUrl = "/hpm?" + urlParams.join("&");
    request.open("GET", requestUrl, true);
    request.onreadystatechange = function () {
        if (4 == request.readyState) {
            if (200 == request.status && request.responseText) {
                var response = sj_ce("div");

                // initialize or refresh taskbar
                if (!isRefresh) {
                    sj_b.appendChild(response);
                    response.style.display = "none";

                    // Remove and process CSS
                    var text = parseCssFromResponseText(request.responseText);

                    response.innerHTML = text;

                    _w.sc_Popup = 0;

                    // initialize scope popup
                    if (typeof sc_PopupFetcher == 'function') {
                        var fetcherSCP = new sc_PopupFetcher();
                        fetcherSCP.Init();
                    }

                    _w.bhptb.init();

                    _w.hp_llog && hp_llog("Carousel", sb_gt() - requestStart);

                    // Reduce the remaining post load events and fire RBComplete if we have finished all the post load events being tracked. 
                    if (_w.g_NPLE && !--_w.g_NPLE) {
                        sj_evt.fire("onRBComplete");
                    }
                } else {
                    // Remove and process CSS
                    var text = parseCssFromResponseText(request.responseText);

                    // Replace the contents of the existing carousel
                    response.innerHTML = text;

                    var ulElements = response.getElementsByTagName("ul");
                    var newCarouselPane = null;
                    var newCarouselMin = null;

                    for (var i = 0; i< ulElements.length; i++) {
                        if (ulElements[i].id === "crs_pane") {
                            newCarouselPane = ulElements[i];
                        } else if (ulElements[i].id === "sc_mdPopP") {
                            newCarouselMin = ulElements[i];
                        }
                    }

                    // Couldn't find the list of carousel items, so bail out
                    if (!newCarouselPane || !newCarouselMin) {
                        return;
                    }

                    var replaceSucceeded = false;

                    var scrollDiv = _ge("crs_scroll");
                    if (scrollDiv) {
                        var currentCarouselPane = scrollDiv.children && scrollDiv.children[0];

                        if (currentCarouselPane) {
                            scrollDiv.replaceChild(newCarouselPane, currentCarouselPane);
                            replaceSucceeded = true;
                        }
                    }

                    var minCarouselDiv = _ge('sc_mdPnOnly');
                    if (minCarouselDiv) {
                        var currentMinCarousel = minCarouselDiv.children && minCarouselDiv.children[0];

                        if (currentMinCarousel) {
                            minCarouselDiv.replaceChild(newCarouselMin, currentMinCarousel);
                            replaceSucceeded = true;
                        }
                    }

                    if (replaceSucceeded) {
                        _w.bhptb.resizePane();
                        sj_evt.fire("EVT_CRS_REFRESHDONE");
                    }
                }
            }
            try { request.onreadystatechange = null; } catch (e) { }
        }
    };

    request.send(null);
});

sj_evt.bind("onInvokeHpm", sj_wf(hpmRequest, false), 1);

// it is possible during the rollout for this file to get served to the client
// with older version of HomepageLarge.spark that will not fire "onInvokeHpm".
// so in order to ensure that a carousel is loaded, we still bind with "onBgSet"
// but with a delay of 2000ms. This also acts as an upper limit, in case auth
// takes more time.
_w.setTimeout(
    function () {
        if (_H.crsEL) {
            hpmRequest(false);
        } else {
            sj_evt.bind(
            "onBgSet",
            sj_wf(hpmRequest, false)
            , 1);
        }
    },
    2000);
