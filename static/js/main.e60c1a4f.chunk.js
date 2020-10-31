(this["webpackJsonpreact-range-picker"]=this["webpackJsonpreact-range-picker"]||[]).push([[0],[,,,,function(e,t,n){e.exports={cell:"DayDefault_cell__3Cgka",hover_start:"DayDefault_hover_start__2HWZM",saturday:"DayDefault_saturday__2MOC7",sunday:"DayDefault_sunday__l1bOy",hover_between:"DayDefault_hover_between__1RPbx",between:"DayDefault_between__biTSD",start:"DayDefault_start__dCWdh",end:"DayDefault_end__11pmu",current:"DayDefault_current__3D-1H",not_current_month:"DayDefault_not_current_month__2fs9Y"}},,,,,function(e,t,n){e.exports={bottom_bar:"BottomBar_bottom_bar__3N7F-",title:"BottomBar_title__36pQ_",button:"BottomBar_button__3bTgI"}},,,function(e,t,n){e.exports={calendar:"CalendarDefault_calendar__1zp1H",title:"CalendarDefault_title__1vqA2",grid:"CalendarDefault_grid__MvV9W"}},function(e,t,n){e.exports={control_left:"Control_control_left__2UKNE",control_right:"Control_control_right__220HR"}},,function(e,t,n){e.exports={button:"Button_button__AH2W4"}},function(e,t,n){e.exports={rangepicker:"RangePicker_rangepicker__1k6C_"}},function(e,t,n){e.exports={"range-picker-variable":"variable_range-picker-variable__1qmYO"}},function(e,t,n){e.exports={time_picker:"TimePicker_time_picker__EoU3k"}},function(e,t,n){e.exports={day_of_week:"WeekLine_day_of_week__2HoGA"}},function(e,t,n){e.exports={calendar_container:"CalendarContainer_calendar_container__1hnJI"}},function(e,t,n){e.exports={title:"CalendarSelector_title__2hTkx"}},function(e,t,n){e.exports=n(31)},,,,,function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),i=(n(27),n(2)),u=n(15),l=n.n(u),s=r.a.forwardRef((function(e,t){var n=e.children,a=e.onClick,c=void 0===a?function(){}:a;return r.a.createElement("button",{ref:t,className:l.a.button,onClick:c},n)})),m=n(6),d=n.n(m),f=n(16),b=n.n(f),p=n(17),g=n.n(p),O=n(9),v=n.n(O),D=n(1),h=n(5),j=function(e){return new Date(e.getFullYear(),e.getMonth()+1,1)},y=function(e){return new Date(e.getFullYear(),e.getMonth()-1,1)},_=function(e){var t=new Date(e.getFullYear(),e.getMonth()).getDay();return 0===t?7:t},k=function(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate())};function C(e,t){var n=function(e,t){var n=Object(a.useMemo)((function(){return e&&k(e).getTime()}),[e]),r=Object(a.useMemo)((function(){return t&&k(t).getTime()}),[t]),c=Object(a.useState)({startDateTimestamp:n,endDateTimestamp:r}),o=Object(i.a)(c,2),u=o[0],l=o[1],s=Object(a.useCallback)((function(e,t){l((function(){return{startDateTimestamp:e,endDateTimestamp:t}}))}),[]);Object(a.useEffect)((function(){return l((function(){return{startDateTimestamp:n,endDateTimestamp:r}}))}),[n,r]);var m=Object(a.useCallback)((function(){return l((function(){return{startDateTimestamp:null,endDateTimestamp:null}}))}),[]);return Object(D.a)(Object(D.a)({},u),{},{setDateTimestampRangeHandler:s,resetHandler:m})}(e,t),r=n.startDateTimestamp,c=n.endDateTimestamp,o=n.setDateTimestampRangeHandler,u=n.resetHandler,l=function(e,t){var n=Object(a.useMemo)((function(){return e&&e.toLocaleTimeString()||""}),[e]),r=Object(a.useMemo)((function(){return t&&t.toLocaleTimeString()||""}),[t]),c=Object(a.useState)({startTimeString:n,endTimeString:r}),o=Object(i.a)(c,2),u=o[0],l=o[1];Object(a.useEffect)((function(){return l((function(){return{startTimeString:n,endTimeString:r}}))}),[n,r]);var s=Object(a.useCallback)((function(e){return l((function(t){return Object(D.a)(Object(D.a)({},t),{},{startTimeString:e})}))}),[]),m=Object(a.useCallback)((function(e){return l((function(t){return Object(D.a)(Object(D.a)({},t),{},{endTimeString:e})}))}),[]),d=Object(a.useCallback)((function(){return l((function(){return{startTimeString:"",endTimeString:""}}))}),[]);return Object(D.a)(Object(D.a)({},u),{},{setStartTimeStringHandler:s,setEndTimeStringHandler:m,resetHandler:d})}(e,t),s=l.startTimeString,m=l.endTimeString,d=l.setStartTimeStringHandler,f=l.setEndTimeStringHandler,b=l.resetHandler,p=Object(a.useCallback)((function(){u(),b()}),[u,b]),g=Object(a.useMemo)((function(){var e=function(e){var t=e.split(":").map(Number),n=Object(i.a)(t,3),a=n[0],r=void 0===a?0:a,c=n[1],o=void 0===c?0:c,u=n[2];return[r,o,void 0===u?0:u]},t=null;if(r&&!s)t=new Date(r);else if(r&&s){var n;t=new Date((n=new Date(r)).setHours.apply(n,Object(h.a)(e(s))))}var a=null;if(c&&!m)a=new Date(c);else if(c&&m){var o;a=new Date((o=new Date(c)).setHours.apply(o,Object(h.a)(e(m))))}return{startDate:t,endDate:a}}),[c,m,r,s]),O=Object(a.useCallback)((function(e){var t=null,n=null;if(!r||c)t=e,f("");else{var a=e;n=Math.max(a,r),t=Math.min(a,r)}o(t,n)}),[c,o,f,r]);return Object(D.a)(Object(D.a)({resetHandler:p},g),{},{startDateTimestamp:r,endDateTimestamp:c,setRangeHandler:O,startTimeString:s,endTimeString:m,setStartTimeStringHandler:d,setEndTimeStringHandler:f})}var T=Object(a.createContext)();T.displayName="RangeContext";var M=function(){return Object(a.useContext)(T)},E=function(e,t){return t.toLocaleString(e,{year:"numeric",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})},w=function(e){var t=e.locales,n=e.applyHandler,c=M(),o=c.startDate,i=c.endDate,u=c.resetHandler,l=Object(a.useMemo)((function(){return o&&i?"".concat(E(t,o)," - ").concat(E(t,i)):o?"".concat(E(t,o)):""}),[o,i,t]);return r.a.createElement("div",{className:v.a.bottom_bar,"data-test-id":"bottom-bar"},l?r.a.createElement("div",{className:v.a.title,"data-test-id":"bottom-bar-title"},l):null,r.a.createElement("div",{className:v.a.button,onClick:n,"data-test-id":"bottom-bar-apply-button"},"\u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"),r.a.createElement("div",{className:v.a.button,onClick:u,"data-test-id":"bottom-bar-clear-button"},"\u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"))};w.defaultProps={locales:"ru",applyHandler:function(){}};var S=w,H=n(18),x=n.n(H),B=function(){var e=M(),t=e.startDateTimestamp,n=e.endDateTimestamp,c=e.startTimeString,o=e.endTimeString,i=e.setStartTimeStringHandler,u=e.setEndTimeStringHandler,l=Object(a.useMemo)((function(){return!Boolean(t)}),[t]),s=Object(a.useMemo)((function(){return!Boolean(n)}),[n]);return r.a.createElement("div",{className:x.a.time_picker,"data-test-id":"time-picker"},r.a.createElement("input",{"data-test-id":"time-picker-start",type:"time",step:"1",disabled:l,onChange:function(e){var t=e.target;return i(t.value)},value:c}),r.a.createElement("input",{"data-test-id":"time-picker-end",type:"time",step:"1",disabled:s,onChange:function(e){var t=e.target;return u(t.value)},value:o}))},R=n(3),N=n(4),W=n.n(N),P=Object(a.createContext)();P.displayName="HoverDayContext";var Y=function(){return Object(a.useContext)(P)},F=function(e){var t,n=e.number,c=e.gridColumnStart,o=e.dateTimestamp,i=e.isStart,u=e.isBetween,l=e.isEnd,s=e.isThisDay,m=e.isHoverStart,f=e.isHoverBetween,b=e.isCurrentMonth,p=Y().setHoverDayTimestamp,g=M().setRangeHandler,O=Object(a.useMemo)((function(){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=null;return function(){for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];n&&(clearTimeout(n),n=null),n=setTimeout((function(){e.apply(void 0,r),clearTimeout(n),n=null}),t)}}(p,80)}),[p]),v=Object(a.useCallback)((function(){return b&&g(o)}),[o,b,g]),D=Object(a.useCallback)((function(){return b&&O(o)}),[o,b,O]),h=!1,j=!1;return b&&(h=6===new Date(o).getDay(),j=0===new Date(o).getDay()),r.a.createElement("button",{type:"button",style:{gridColumnStart:c},className:d()(W.a.cell,(t={},Object(R.a)(t,W.a.start,i),Object(R.a)(t,W.a.between,u),Object(R.a)(t,W.a.end,l),Object(R.a)(t,W.a.current,s),Object(R.a)(t,W.a.saturday,h),Object(R.a)(t,W.a.sunday,j),Object(R.a)(t,W.a.hover_start,m),Object(R.a)(t,W.a.hover_between,f),Object(R.a)(t,W.a.not_current_month,!b),t)),onClick:v,onMouseEnter:D},n)};F.defaultProps={isStart:!1,isBetween:!1,isEnd:!1,isThisDay:!1,isCurrentMonth:!1};var L=F,A=n(19),I=n.n(A),J=function(e){var t=e.locales,n=Object(a.useMemo)((function(){return function(e){for(var t=[],n=5;n<=11;n++)t.push(new Date(1970,0,n).toLocaleString(e,{weekday:"short"}));return t}(t)}),[t]);return r.a.createElement("div",{className:I.a.day_of_week,"data-test-id":"week-line"},n.map((function(e){return r.a.createElement("div",{key:e},e)})))};J.defaultProps={locales:"ru"};var q=J,U=n(12),z=n.n(U),G=function(e){var t=e.date,n=e.days,c=e.locales,o=e.TitleComponentRender,i=Object(a.useMemo)((function(){return t.toLocaleString(c,{month:"long",year:"numeric"})}),[t,c]),u=Object(a.useCallback)((function(e){var t=e.titleClass;return r.a.createElement("div",{className:t,"data-test-id":"calendar-title"},r.a.createElement("time",{dateTime:i},i))}),[i]),l=o||u;return r.a.createElement("div",{className:z.a.calendar},r.a.createElement(l,{titleClass:z.a.title}),r.a.createElement(q,{locales:c}),r.a.createElement("div",{className:z.a.grid,"data-test-id":"calendar-container"},n.map((function(e){return r.a.createElement(L,Object.assign({key:e.index},e))}))))};G.defaultProps={locales:"ru"};var K=G,Q=n(20),V=n.n(Q),Z=n(11),X=n(21),$=n.n(X);function ee(e){var t=Object(a.useMemo)((function(){return function(e){return{year:e.getFullYear(),month:e.getMonth(),date:e.getDate(),hour:e.getHours(),minutes:e.getMinutes(),seconds:e.getSeconds()}}(e)}),[e]);return Object(D.a)({},t)}var te=function(e){var t=e.changeMonthHandler,n=e.changeYearHandler,c=Object(Z.a)(e,["changeMonthHandler","changeYearHandler"]),o=ee(c.date),i=o.year,u=o.month,l=Object(a.useMemo)((function(){return new Array(1031).fill(null).map((function(e,t){return t+1970}))}),[]),s=Object(a.useMemo)((function(){return function(e){for(var t=[],n=0;n<=11;n++)t.push(new Date(1970,n,1).toLocaleString(e,{month:"long"}));return t}(c.locales)}),[c.locales]),m=Object(a.useCallback)((function(e){var n=e.target.options;return t(n[n.selectedIndex].value)}),[t]),f=Object(a.useCallback)((function(e){var t=e.target.options;return n(t[t.selectedIndex].value)}),[n]),b=Object(a.useCallback)((function(e){var t=e.titleClass;return r.a.createElement("div",{className:d()(t,$.a.title)},r.a.createElement("select",{value:u,onChange:m},s.map((function(e,t){return r.a.createElement("option",{key:t,value:t},e)}))),r.a.createElement("select",{value:i,onChange:f},l.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))))}),[m,f,u,s,i,l]);return r.a.createElement(K,Object.assign({},c,{TitleComponentRender:b}))};te.defaultProps={};var ne=te;var ae=Object(a.createContext)();ae.displayName="ShowDateContext";var re=function(){return Object(a.useContext)(ae)};function ce(e,t,n){var r=ee(e),c=r.year,o=r.month,i=Object(a.useMemo)((function(){return _(e)}),[e]),u=Object(a.useCallback)((function(e){return t===e}),[t]),l=Object(a.useCallback)((function(e){return n===e}),[n]),s=Object(a.useCallback)((function(e){return t&&n&&t<e&&e<n}),[t,n]),m=Object(a.useCallback)((function(e){return k(new Date).getTime()===e}),[]);return{firsDayOfWeekByMonth:i,weekCount:Object(a.useMemo)((function(){return function(e){var t=new Date(e.getFullYear(),e.getMonth()+1,0).getDate()-1,n=_(e);return Math.ceil((t+n)/7)}(e)}),[e]),days:Object(a.useMemo)((function(){return new Array((t=e,new Date(t.getFullYear(),t.getMonth()+1,0).getDate())).fill(null).map((function(e,t){return t+1})).map((function(e){var t=new Date(c,o,e).getTime();return{number:e,date:new Date(t),dateTimestamp:t,isStart:u(t),isBetween:s(t),isEnd:l(t),isThisDay:m(t)}}));var t}),[e,c,o,u,s,l,m])}}function oe(e,t,n){var r=ce(y(e),t,n).days,c=ce(e,t,n),o=c.days,i=c.firsDayOfWeekByMonth,u=c.weekCount,l=ce(j(e),t,n),s=l.days,m=l.firsDayOfWeekByMonth,d=Y().hoverDayTimestamp,f=Object(a.useCallback)((function(e){return Object(D.a)(Object(D.a)({},e),{},{isStart:!1,isBetween:!1,isEnd:!1,isThisDay:!1,isCurrentMonth:!1,isHoverBetween:!1,isHoverStart:!1})}),[]),b=Object(a.useMemo)((function(){return r.map(f)}),[r,f]),p=Object(a.useMemo)((function(){return o.map((function(e){var a=t&&d&&!n&&(t<e.dateTimestamp&&e.dateTimestamp<=d||t>e.dateTimestamp&&e.dateTimestamp>=d);return Object(D.a)(Object(D.a)({},e),{},{isCurrentMonth:!0,isHoverBetween:a,isHoverStart:d===e.dateTimestamp})}))}),[o,n,d,t]),g=Object(a.useMemo)((function(){return s.map(f)}),[f,s]),O=Object(a.useMemo)((function(){return b.length+1}),[b.length]),v=Object(a.useMemo)((function(){return p.length}),[p.length]);return{days:[].concat(Object(h.a)(b),Object(h.a)(p),Object(h.a)(g)).map((function(e,t){return Object(D.a)(Object(D.a)({},e),{},{index:t})})),firsDayOfWeekByMonth:i,nextMonthFirsDayOfWeekByMonth:m,weekCount:u,startIndexCurentMonth:O,count:v}}var ie=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return function(n){return function(a){return r.a.createElement(e,t(a),r.a.createElement(n,a))}}},ue=function(e){var t=e.locales,n=re(),c=n.showDate,o=n.setMonthHandler,i=n.setYearHandler,u=Y().setHoverDayTimestamp,l=Object(a.useMemo)((function(){return j(c)}),[c]),s=Object(a.useCallback)((function(e){return o(e)}),[o]),m=Object(a.useCallback)((function(e){return i(e)}),[i]),d=M(),f=d.startDateTimestamp,b=d.endDateTimestamp,p=function(e,t){return Object(a.useMemo)((function(){var n=e.startIndexCurentMonth-e.firsDayOfWeekByMonth,a=t.startIndexCurentMonth-t.firsDayOfWeekByMonth,r=0;return e.weekCount<=t.weekCount?r=t.count+t.firsDayOfWeekByMonth+(8-t.nextMonthFirsDayOfWeekByMonth)-1:e.weekCount>t.weekCount&&(r=e.count+e.firsDayOfWeekByMonth+(8-e.nextMonthFirsDayOfWeekByMonth)-1),{calendarLeftDays:e.days.slice(n,n+r),calendarRightDays:t.days.slice(a,a+r)}}),[e.count,e.days,e.firsDayOfWeekByMonth,e.nextMonthFirsDayOfWeekByMonth,e.startIndexCurentMonth,e.weekCount,t.count,t.days,t.firsDayOfWeekByMonth,t.nextMonthFirsDayOfWeekByMonth,t.startIndexCurentMonth,t.weekCount])}(oe(c,f,b),oe(l,f,b)),g=p.calendarLeftDays,O=p.calendarRightDays;return r.a.createElement("div",{className:V.a.calendar_container,onMouseLeave:u.bind(void 0,null)},r.a.createElement(ne,{date:c,days:g,locales:t,changeMonthHandler:s,changeYearHandler:m}),r.a.createElement(K,{date:l,days:O,locales:t}))};ue.defaultProps={locales:"ru"};var le=ie((function(e){var t=e.children,n=Object(a.useState)(null),c=Object(i.a)(n,2),o=c[0],u=c[1];return r.a.createElement(P.Provider,{value:{setHoverDayTimestamp:u,hoverDayTimestamp:o}},t)}))(ue);function se(e,t,n){Object(a.useEffect)((function(){return e&&e.addEventListener(t,n),function(){e&&e.removeEventListener(t,n)}}),[e,t,n])}var me=n(34),de=function(e){var t=e.inProp,n=e.top,c=e.left,o=e.duration,i=e.children,u=Object(a.useMemo)((function(){return{transition:"\n\t\t\topacity ".concat(o,"ms ease-in-out,\n\t\t\ttransform ").concat(o,"ms ease-in-out,\n\t\t\tbox-shadow .2s ease-out"),opacity:0,transform:"translateY(50px)",left:"-10000px",top:"-10000px"}}),[o]),l=Object(a.useMemo)((function(){return{entering:{opacity:1,transform:"translateY(0px)",left:"".concat(c,"px"),top:"".concat(n,"px")},entered:{opacity:1,transform:"translateY(0px)",left:"".concat(c,"px"),top:"".concat(n,"px")},exiting:{left:"".concat(c,"px"),top:"".concat(n,"px")},exited:{}}}),[c,n]),s=Object(a.useCallback)((function(e){return i(Object(D.a)(Object(D.a)({},u),l[e]))}),[i,u,l]);return r.a.createElement(me.a,{in:t,timeout:o},s)};de.defaultProps={inProp:!1,top:0,left:0,duration:500,children:function(){}};var fe=de,be=n(13),pe=n.n(be),ge=function(e){var t=e.isOpen,n=re(),c=n.nextMonthHandler,o=n.prevMonthHandler,i=Object(a.useCallback)((function(e){t&&("ArrowLeft"===e.key?o():"ArrowRight"===e.key&&c())}),[t,c,o]);return se(document,"keydown",i),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:pe.a.control_left,onClick:o,"data-test-id":"control-left"}),r.a.createElement("div",{className:pe.a.control_right,onClick:c,"data-test-id":"control-right"}))},Oe=r.a.forwardRef((function(e,t){var n=e.isOpen,c=e.onClose,o=e.onRangeSelected,i=e.locales,u=e.style,l=M(),s=l.startDate,m=l.endDate,f=Object(a.useCallback)((function(){o({startDate:s,endDate:m}),c()}),[o,s,m,c]);return r.a.createElement("div",{ref:t,className:d()(b.a.rangepicker,g.a["range-picker-variable"]),style:u,"data-test-id":"range-picker"},r.a.createElement(ge,{isOpen:n}),r.a.createElement(le,{locales:i}),r.a.createElement(B,null),r.a.createElement(S,{locales:i,applyHandler:f}))}));Oe.displayName="RangePicker",Oe.defaultProps={onClose:function(){},onRangeSelected:function(){},locales:"ru"};var ve=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return Array.isArray(t)?t.map((function(t){return t(e)})):t(e)}),e)}}(ie((function(e){var t=e.startDate,n=e.children,c=function(e){var t=Object(a.useState)(null!==e&&void 0!==e?e:new Date),n=Object(i.a)(t,2),r=n[0],c=n[1];return{showDate:r,nextMonthHandler:Object(a.useCallback)((function(){return c((function(e){return j(e)}))}),[]),prevMonthHandler:Object(a.useCallback)((function(){return c((function(e){return y(e)}))}),[]),setMonthHandler:Object(a.useCallback)((function(e){return c((function(t){return new Date(t.getFullYear(),e,t.getDate())}))}),[]),setYearHandler:Object(a.useCallback)((function(e){return c((function(t){return new Date(e,t.getMonth(),t.getDate())}))}),[])}}(t);return r.a.createElement(ae.Provider,{value:c},n)}),(function(e){return{startDate:e.startDate}})),ie((function(e){var t=e.startDate,n=e.endDate,a=e.children,c=C(t,n),o=c.startDate,i=c.endDate,u=c.resetHandler,l=c.setRangeHandler,s=c.startDateTimestamp,m=c.endDateTimestamp,d=c.startTimeString,f=c.endTimeString,b=c.setStartTimeStringHandler,p=c.setEndTimeStringHandler;return r.a.createElement(T.Provider,{value:{startDate:o,endDate:i,resetHandler:u,setRangeHandler:l,startDateTimestamp:s,endDateTimestamp:m,startTimeString:d,endTimeString:f,setStartTimeStringHandler:b,setEndTimeStringHandler:p}},a)}),(function(e){return{startDate:e.startDate,endDate:e.endDate}})),(function(e){return function(t){var n=t.target,c=Object(Z.a)(t,["target"]),o=Object(a.useRef)(),u=Object(a.useState)({top:0,left:0}),l=Object(i.a)(u,2),s=l[0],m=l[1];Object(a.useEffect)((function(){m(function(e,t){if(!e||!t)return{top:0,left:0};var n=e.getBoundingClientRect(),a=t.getBoundingClientRect(),r=n.left+n.width/2,c=n.top+n.height+5,o=r-a.width/2;return c+a.height>document.documentElement.clientHeight&&(c=n.top-a.height-5),o<0?o=5:o+a.width>document.documentElement.clientWidth&&(o=document.documentElement.clientWidth-a.width-5),{top:c,left:o}}(n,o.current))}),[n]);var d=Object(a.useCallback)((function(e){var t=o.current&&!o.current.contains(e.target)&&c.isOpen;return t&&n&&(t=t&&!n.contains(e.target)),t&&c.onClose()}),[c,n]);se(document,"pointerdown",d);var f=Object(a.useCallback)((function(t){return r.a.createElement(e,Object.assign({ref:o},c,{style:t}))}),[c]);return r.a.createElement(fe,{inProp:c.isOpen,top:s.top,left:s.left},f)}}))(Oe),De=function(e){return e.toLocaleString("ru",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})},he=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)({startDate:null,endDate:null}),l=Object(i.a)(u,2),m=l[0],d=l[1],f=Object(a.useMemo)((function(){return m.startDate&&m.endDate?"".concat(De(m.startDate)," - ").concat(De(m.endDate)):m.startDate?"".concat(De(m.startDate)):null}),[m.startDate,m.endDate]),b=Object(a.useCallback)((function(){return o((function(e){return!e}))}),[]),p=Object(a.useCallback)((function(){return o(!1)}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{ref:e,onClick:b},f||"\u041e\u0442\u043a\u0440\u044b\u0442\u044c"),r.a.createElement(ve,Object.assign({locales:"ru",isOpen:c},m,{onRangeSelected:d,target:e.current,onClose:p})))};o.a.render(r.a.createElement(he,null),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.e60c1a4f.chunk.js.map