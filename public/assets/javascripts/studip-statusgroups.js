!function(s){var i={};function a(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return s[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=s,a.c=i,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(s,i,function(t){return e[t]}.bind(null,i));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=167)}({167:function(t,e,s){"use strict";s.r(e);s(168),s(169),s(170)},168:function(t,e,s){},169:function(t,e){function i(t,e){this.w=p(u),this.el=p(t),this.options=p.extend({},s,e),this.init()}var p,c,u,l,n,f,s;p=window.jQuery||window.Zepto,c=window,u=document,n="ontouchstart"in u,f=function(){var t=u.createElement("div"),e=u.documentElement;if(!("pointerEvents"in t.style))return!1;t.style.pointerEvents="auto",t.style.pointerEvents="x",e.appendChild(t);var s=c.getComputedStyle&&"auto"===c.getComputedStyle(t,"").pointerEvents;return e.removeChild(t),!!s}(),s={listNodeName:"ol",itemNodeName:"li",rootClass:"dd",listClass:"dd-list",itemClass:"dd-item",dragClass:"dd-dragel",handleClass:"dd-handle",collapsedClass:"dd-collapsed",placeClass:"dd-placeholder",noDragClass:"dd-nodrag",emptyClass:"dd-empty",expandBtnHTML:'<button data-action="expand" type="button">Expand</button>',collapseBtnHTML:'<button data-action="collapse" type="button">Collapse</button>',group:0,maxDepth:5,threshold:20},i.prototype={init:function(){var a=this;a.reset(),a.el.data("nestable-group",this.options.group),a.placeEl=p('<div class="'+a.options.placeClass+'"/>'),p.each(this.el.find(a.options.itemNodeName),function(t,e){a.setParent(p(e))}),a.el.on("click","button",function(t){if(!a.dragEl){var e=p(t.currentTarget),s=e.data("action"),i=e.parent(a.options.itemNodeName);"collapse"===s&&a.collapseItem(i),"expand"===s&&a.expandItem(i)}});function t(t){var e=p(t.target);if(!e.hasClass(a.options.handleClass)){if(e.closest("."+a.options.noDragClass).length)return;e=e.closest("."+a.options.handleClass)}e.length&&!a.dragEl&&(a.isTouch=/^touch/.test(t.type),a.isTouch&&1!==t.touches.length||(t.preventDefault(),a.dragStart(t.touches?t.touches[0]:t)))}function e(t){a.dragEl&&(t.preventDefault(),a.dragMove(t.touches?t.touches[0]:t))}function s(t){a.dragEl&&(t.preventDefault(),a.dragStop(t.touches?t.touches[0]:t))}n&&(a.el[0].addEventListener("touchstart",t,!1),c.addEventListener("touchmove",e,!1),c.addEventListener("touchend",s,!1),c.addEventListener("touchcancel",s,!1)),a.el.on("mousedown",t),a.w.on("mousemove",e),a.w.on("mouseup",s)},serialize:function(){var n=this;return step=function(t,i){var a=[];return t.children(n.options.itemNodeName).each(function(){var t=p(this),e=p.extend({},t.data()),s=t.children(n.options.listNodeName);s.length&&(e.children=step(s,i+1)),a.push(e)}),a},step(n.el.find(n.options.listNodeName).first(),0)},serialise:function(){return this.serialize()},reset:function(){this.mouse={offsetX:0,offsetY:0,startX:0,startY:0,lastX:0,lastY:0,nowX:0,nowY:0,distX:0,distY:0,dirAx:0,dirX:0,dirY:0,lastDirX:0,lastDirY:0,distAxX:0,distAxY:0},this.isTouch=!1,this.moving=!1,this.dragEl=null,this.dragRootEl=null,this.dragDepth=0,this.hasNewRoot=!1,this.pointEl=null},expandItem:function(t){t.removeClass(this.options.collapsedClass),t.children('[data-action="expand"]').hide(),t.children('[data-action="collapse"]').show(),t.children(this.options.listNodeName).show()},collapseItem:function(t){t.children(this.options.listNodeName).length&&(t.addClass(this.options.collapsedClass),t.children('[data-action="collapse"]').hide(),t.children('[data-action="expand"]').show(),t.children(this.options.listNodeName).hide())},expandAll:function(){var t=this;t.el.find(t.options.itemNodeName).each(function(){t.expandItem(p(this))})},collapseAll:function(){var t=this;t.el.find(t.options.itemNodeName).each(function(){t.collapseItem(p(this))})},setParent:function(t){t.children(this.options.listNodeName).length&&(t.prepend(p(this.options.expandBtnHTML)),t.prepend(p(this.options.collapseBtnHTML))),t.children('[data-action="expand"]').hide()},unsetParent:function(t){t.removeClass(this.options.collapsedClass),t.children("[data-action]").remove(),t.children(this.options.listNodeName).remove()},dragStart:function(t){var e=this.mouse,s=p(t.target),i=s.closest(this.options.itemNodeName);this.placeEl.css("height",i.height()),e.offsetX=t.offsetX!==l?t.offsetX:t.pageX-s.offset().left,e.offsetY=t.offsetY!==l?t.offsetY:t.pageY-s.offset().top,e.startX=e.lastX=t.pageX,e.startY=e.lastY=t.pageY,this.dragRootEl=this.el,this.dragEl=p(u.createElement(this.options.listNodeName)).addClass(this.options.listClass+" "+this.options.dragClass),this.dragEl.css("width",i.width()),i.after(this.placeEl),i[0].parentNode.removeChild(i[0]),i.appendTo(this.dragEl),p(u.body).append(this.dragEl),this.dragEl.css({left:t.pageX-e.offsetX,top:t.pageY-e.offsetY});var a,n,o=this.dragEl.find(this.options.itemNodeName);for(a=0;a<o.length;a++)(n=p(o[a]).parents(this.options.listNodeName).length)>this.dragDepth&&(this.dragDepth=n)},dragStop:function(t){var e=this.dragEl.children(this.options.itemNodeName).first();e[0].parentNode.removeChild(e[0]),this.placeEl.replaceWith(e),this.dragEl.remove(),this.el.trigger("change"),this.hasNewRoot&&this.dragRootEl.trigger("change"),this.reset()},dragMove:function(t){var e,s,i,a=this.options,n=this.mouse;this.dragEl.css({left:t.pageX-n.offsetX,top:t.pageY-n.offsetY}),n.lastX=n.nowX,n.lastY=n.nowY,n.nowX=t.pageX,n.nowY=t.pageY,n.distX=n.nowX-n.lastX,n.distY=n.nowY-n.lastY,n.lastDirX=n.dirX,n.lastDirY=n.dirY,n.dirX=0===n.distX?0:0<n.distX?1:-1,n.dirY=0===n.distY?0:0<n.distY?1:-1;var o=Math.abs(n.distX)>Math.abs(n.distY)?1:0;if(!n.moving)return n.dirAx=o,void(n.moving=!0);n.dirAx!==o?(n.distAxX=0,n.distAxY=0):(n.distAxX+=Math.abs(n.distX),0!==n.dirX&&n.dirX!==n.lastDirX&&(n.distAxX=0),n.distAxY+=Math.abs(n.distY),0!==n.dirY&&n.dirY!==n.lastDirY&&(n.distAxY=0)),n.dirAx=o,n.dirAx&&n.distAxX>=a.threshold&&(n.distAxX=0,i=this.placeEl.prev(a.itemNodeName),0<n.distX&&i.length&&!i.hasClass(a.collapsedClass)&&(e=i.find(a.listNodeName).last(),this.placeEl.parents(a.listNodeName).length+this.dragDepth<=a.maxDepth&&(e.length?(e=i.children(a.listNodeName).last()).append(this.placeEl):((e=p("<"+a.listNodeName+"/>").addClass(a.listClass)).append(this.placeEl),i.append(e),this.setParent(i)))),n.distX<0&&(this.placeEl.next(a.itemNodeName).length||(s=this.placeEl.parent(),this.placeEl.closest(a.itemNodeName).after(this.placeEl),s.children().length||this.unsetParent(s.parent()))));var l=!1;if(f||(this.dragEl[0].style.visibility="hidden"),this.pointEl=p(u.elementFromPoint(t.pageX-u.body.scrollLeft,t.pageY-(c.pageYOffset||u.documentElement.scrollTop))),f||(this.dragEl[0].style.visibility="visible"),this.pointEl.hasClass(a.handleClass)&&(this.pointEl=this.pointEl.parent(a.itemNodeName)),this.pointEl.hasClass(a.emptyClass))l=!0;else if(!this.pointEl.length||!this.pointEl.hasClass(a.itemClass))return;var r=this.pointEl.closest("."+a.rootClass),d=this.dragRootEl.data("nestable-id")!==r.data("nestable-id");if(!n.dirAx||d||l){if(d&&a.group!==r.data("nestable-group"))return;if(this.dragDepth-1+this.pointEl.parents(a.listNodeName).length>a.maxDepth)return;var h=t.pageY<this.pointEl.offset().top+this.pointEl.height()/2;s=this.placeEl.parent(),l?((e=p(u.createElement(a.listNodeName)).addClass(a.listClass)).append(this.placeEl),this.pointEl.replaceWith(e)):h?this.pointEl.before(this.placeEl):this.pointEl.after(this.placeEl),s.children().length||this.unsetParent(s.parent()),this.dragRootEl.find(a.itemNodeName).length||this.dragRootEl.append('<div class="'+a.emptyClass+'"/>'),d&&(this.dragRootEl=r,this.hasNewRoot=this.el[0]!==this.dragRootEl[0])}}},p.fn.nestable=function(e){var s=this;return this.each(function(){var t=p(this).data("nestable");t?"string"==typeof e&&"function"==typeof t[e]&&(s=t[e]()):(p(this).data("nestable",new i(this,e)),p(this).data("nestable-id",(new Date).getTime()))}),s||this}},170:function(t,e){STUDIP.domReady(function(){STUDIP.Statusgroups.ajax_endpoint=$('meta[name="statusgroups-ajax-movable-endpoint"]').attr("content"),STUDIP.Statusgroups.apply(),$("a.get-group-members").on("click",function(){var t,e=$("article#group-members-"+$(this).data("group-id"));0===$.trim(e.html()).length&&(t=$(this).data("get-members-url"),e.html($("<img>").attr({width:32,height:32,src:STUDIP.ASSETS_URL+"images/ajax-indicator-black.svg"})),$.get(t).done(function(t){e.html(t)}))});var t="> header";window.matchMedia("(hover: none)").matches&&($(".course-statusgroups[data-sortable]").addClass("by-touch").find("> .draggable").each(function(){$("header",this).prepend('<span class="sg-sortable-handle">')}),t=".sg-sortable-handle");var i=null;$(".course-statusgroups[data-sortable]").disableSelection().sortable({axis:"y",containment:"parent",forcePlaceholderSize:!0,handle:t,items:"> .draggable",placeholder:"sortable-placeholder",start:function(t,e){i=e.item.index()},stop:function(t,e){if(i!==e.item.index()){var s=$(this).data("sortable");$.post(s,{id:e.item.attr("id"),index:e.item.index()-1})}}})}),STUDIP.ready(function(){$(".nestable").each(function(){$(this).nestable({rootClass:"nestable",maxDepth:$(this).data("max-depth")||5})})}),$(document).on("submit","#order_form",function(){var t=$(".nestable").nestable("serialize"),e=JSON.stringify(t);$("#ordering").val(e)})}});
//# sourceMappingURL=studip-statusgroups.js.map