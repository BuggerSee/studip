(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{198:function(t,e,i){var o,a,r;a=[i(0),i(31)],void 0===(r="function"==typeof(o=function(c,h){var t=window,e=function(t,e,i){var o=function(){console.warn("gridstack.js: Function `"+e+"` is deprecated as of v0.2.5 and has been replaced "+"with `"+i+"`. It will be **completely** removed in v1.0.");return t.apply(this,arguments)};o.prototype=t.prototype;return o},d=function(t,e){console.warn("gridstack.js: Option `"+t+"` is deprecated as of v0.2.5 and has been replaced with `"+e+"`. It will be **completely** removed in v1.0.")},s={isIntercepted:function(t,e){return!(t.x+t.width<=e.x||e.x+e.width<=t.x||t.y+t.height<=e.y||e.y+e.height<=t.y)},sort:function(t,e,i){i=i||h.chain(t).map(function(t){return t.x+t.width}).max().value();e=e!=-1?1:-1;return h.sortBy(t,function(t){return e*(t.x+t.y*i)})},createStylesheet:function(t){var e=document.createElement("style");e.setAttribute("type","text/css");e.setAttribute("data-gs-style-id",t);if(e.styleSheet){e.styleSheet.cssText=""}else{e.appendChild(document.createTextNode(""))}document.getElementsByTagName("head")[0].appendChild(e);return e.sheet},removeStylesheet:function(t){c("STYLE[data-gs-style-id="+t+"]").remove()},insertCSSRule:function(t,e,i,o){if(typeof t.insertRule==="function"){t.insertRule(e+"{"+i+"}",o)}else if(typeof t.addRule==="function"){t.addRule(e,i,o)}},toBool:function(t){if(typeof t=="boolean"){return t}if(typeof t=="string"){t=t.toLowerCase();return!(t===""||t=="no"||t=="false"||t=="0")}return Boolean(t)},_collisionNodeCheck:function(t){return t!=this.node&&s.isIntercepted(t,this.nn)},_didCollide:function(t){return s.isIntercepted({x:this.n.x,y:this.newY,width:this.n.width,height:this.n.height},t)},_isAddNodeIntercepted:function(t){return s.isIntercepted({x:this.x,y:this.y,width:this.node.width,height:this.node.height},t)},parseHeight:function(t){var e=t;var i="px";if(e&&h.isString(e)){var o=e.match(/^(-[0-9]+\.[0-9]+|[0-9]*\.[0-9]+|-[0-9]+|[0-9]+)(px|em|rem|vh|vw)?$/);if(!o){throw new Error("Invalid height")}i=o[2]||"px";e=parseFloat(o[1])}return{height:e,unit:i}}};function u(t){this.grid=t}s.is_intercepted=e(s.isIntercepted,"is_intercepted","isIntercepted"),s.create_stylesheet=e(s.createStylesheet,"create_stylesheet","createStylesheet"),s.remove_stylesheet=e(s.removeStylesheet,"remove_stylesheet","removeStylesheet"),s.insert_css_rule=e(s.insertCSSRule,"insert_css_rule","insertCSSRule"),u.registeredPlugins=[],u.registerPlugin=function(t){u.registeredPlugins.push(t)},u.prototype.resizable=function(t,e){return this},u.prototype.draggable=function(t,e){return this},u.prototype.droppable=function(t,e){return this},u.prototype.isDroppable=function(t){return false},u.prototype.on=function(t,e,i){return this};var r=0,_=function(t,e,i,o,a){this.width=t;this.float=i||false;this.height=o||0;this.nodes=a||[];this.onchange=e||function(){};this._updateCounter=0;this._float=this.float;this._addedNodes=[];this._removedNodes=[]};_.prototype.batchUpdate=function(){this._updateCounter=1;this.float=true},_.prototype.commit=function(){if(this._updateCounter!==0){this._updateCounter=0;this.float=this._float;this._packNodes();this._notify()}},_.prototype.getNodeDataByDOMEl=function(e){return h.find(this.nodes,function(t){return e.get(0)===t.el.get(0)})},_.prototype._fixCollisions=function(t){var e=this;this._sortNodes(-1);var i=t;var o=Boolean(h.find(this.nodes,function(t){return t.locked}));if(!this.float&&!o){i={x:0,y:t.y,width:this.width,height:t.height}}while(true){var a=h.find(this.nodes,h.bind(s._collisionNodeCheck,{node:t,nn:i}));if(typeof a=="undefined"){return}this.moveNode(a,a.x,t.y+t.height,a.width,a.height,true)}},_.prototype.isAreaEmpty=function(t,e,i,o){var a={x:t||0,y:e||0,width:i||1,height:o||1};var r=h.find(this.nodes,h.bind(function(t){return s.isIntercepted(t,a)},this));return r===null||typeof r==="undefined"},_.prototype._sortNodes=function(t){this.nodes=s.sort(this.nodes,t,this.width)},_.prototype._packNodes=function(){this._sortNodes();if(this.float){h.each(this.nodes,h.bind(function(t,e){if(t._updating||typeof t._origY=="undefined"||t.y==t._origY){return}var i=t.y;while(i>=t._origY){var o=h.chain(this.nodes).find(h.bind(s._didCollide,{n:t,newY:i})).value();if(!o){t._dirty=true;t.y=i}--i}},this))}else{h.each(this.nodes,h.bind(function(t,e){if(t.locked){return}while(t.y>0){var i=t.y-1;var o=e===0;if(e>0){var a=h.chain(this.nodes).take(e).find(h.bind(s._didCollide,{n:t,newY:i})).value();o=typeof a=="undefined"}if(!o){break}t._dirty=t.y!=i;t.y=i}},this))}},_.prototype._prepareNode=function(t,e){t=h.defaults(t||{},{width:1,height:1,x:0,y:0});t.x=parseInt(""+t.x);t.y=parseInt(""+t.y);t.width=parseInt(""+t.width);t.height=parseInt(""+t.height);t.autoPosition=t.autoPosition||false;t.noResize=t.noResize||false;t.noMove=t.noMove||false;if(t.width>this.width){t.width=this.width}else if(t.width<1){t.width=1}if(t.height<1){t.height=1}if(t.x<0){t.x=0}if(t.x+t.width>this.width){if(e){t.width=this.width-t.x}else{t.x=this.width-t.width}}if(t.y<0){t.y=0}return t},_.prototype._notify=function(){var t=Array.prototype.slice.call(arguments,0);t[0]=typeof t[0]==="undefined"?[]:[t[0]];t[1]=typeof t[1]==="undefined"?true:t[1];if(this._updateCounter){return}var e=t[0].concat(this.getDirtyNodes());this.onchange(e,t[1])},_.prototype.cleanNodes=function(){if(this._updateCounter){return}h.each(this.nodes,function(t){t._dirty=false})},_.prototype.getDirtyNodes=function(){return h.filter(this.nodes,function(t){return t._dirty})},_.prototype.addNode=function(t,e){t=this._prepareNode(t);if(typeof t.maxWidth!="undefined"){t.width=Math.min(t.width,t.maxWidth)}if(typeof t.maxHeight!="undefined"){t.height=Math.min(t.height,t.maxHeight)}if(typeof t.minWidth!="undefined"){t.width=Math.max(t.width,t.minWidth)}if(typeof t.minHeight!="undefined"){t.height=Math.max(t.height,t.minHeight)}t._id=++r;t._dirty=true;if(t.autoPosition){this._sortNodes();for(var i=0;;++i){var o=i%this.width;var a=Math.floor(i/this.width);if(o+t.width>this.width){continue}if(!h.find(this.nodes,h.bind(s._isAddNodeIntercepted,{x:o,y:a,node:t}))){t.x=o;t.y=a;break}}}this.nodes.push(t);if(typeof e!="undefined"&&e){this._addedNodes.push(h.clone(t))}this._fixCollisions(t);this._packNodes();this._notify();return t},_.prototype.removeNode=function(t,e){e=typeof e==="undefined"?true:e;this._removedNodes.push(h.clone(t));t._id=null;this.nodes=h.without(this.nodes,t);this._packNodes();this._notify(t,e)},_.prototype.canMoveNode=function(e,t,i,o,a){if(!this.isNodeChangedPosition(e,t,i,o,a)){return false}var r=Boolean(h.find(this.nodes,function(t){return t.locked}));if(!this.height&&!r){return true}var s;var n=new _(this.width,null,this.float,0,h.map(this.nodes,function(t){if(t==e){s=c.extend({},t);return s}return c.extend({},t)}));if(typeof s==="undefined"){return true}n.moveNode(s,t,i,o,a);var d=true;if(r){d&=!Boolean(h.find(n.nodes,function(t){return t!=s&&Boolean(t.locked)&&Boolean(t._dirty)}))}if(this.height){d&=n.getGridHeight()<=this.height}return d},_.prototype.canBePlacedWithRespectToHeight=function(t){if(!this.height){return true}var e=new _(this.width,null,this.float,0,h.map(this.nodes,function(t){return c.extend({},t)}));e.addNode(t);return e.getGridHeight()<=this.height},_.prototype.isNodeChangedPosition=function(t,e,i,o,a){if(typeof e!="number"){e=t.x}if(typeof i!="number"){i=t.y}if(typeof o!="number"){o=t.width}if(typeof a!="number"){a=t.height}if(typeof t.maxWidth!="undefined"){o=Math.min(o,t.maxWidth)}if(typeof t.maxHeight!="undefined"){a=Math.min(a,t.maxHeight)}if(typeof t.minWidth!="undefined"){o=Math.max(o,t.minWidth)}if(typeof t.minHeight!="undefined"){a=Math.max(a,t.minHeight)}if(t.x==e&&t.y==i&&t.width==o&&t.height==a){return false}return true},_.prototype.moveNode=function(t,e,i,o,a,r){if(!this.isNodeChangedPosition(t,e,i,o,a)){return t}if(typeof e!="number"){e=t.x}if(typeof i!="number"){i=t.y}if(typeof o!="number"){o=t.width}if(typeof a!="number"){a=t.height}if(typeof t.maxWidth!="undefined"){o=Math.min(o,t.maxWidth)}if(typeof t.maxHeight!="undefined"){a=Math.min(a,t.maxHeight)}if(typeof t.minWidth!="undefined"){o=Math.max(o,t.minWidth)}if(typeof t.minHeight!="undefined"){a=Math.max(a,t.minHeight)}if(t.x==e&&t.y==i&&t.width==o&&t.height==a){return t}var s=t.width!=o;t._dirty=true;t.x=e;t.y=i;t.width=o;t.height=a;t.lastTriedX=e;t.lastTriedY=i;t.lastTriedWidth=o;t.lastTriedHeight=a;t=this._prepareNode(t,s);this._fixCollisions(t);if(!r){this._packNodes();this._notify()}return t},_.prototype.getGridHeight=function(){return h.reduce(this.nodes,function(t,e){return Math.max(t,e.y+e.height)},0)},_.prototype.beginUpdate=function(t){h.each(this.nodes,function(t){t._origY=t.y});t._updating=true},_.prototype.endUpdate=function(){h.each(this.nodes,function(t){t._origY=t.y});var t=h.find(this.nodes,function(t){return t._updating});if(t){t._updating=false}};var i=function(t,e){var l=this;var i,o;e=e||{};this.container=c(t);if(typeof e.handle_class!=="undefined"){e.handleClass=e.handle_class;d("handle_class","handleClass")}if(typeof e.item_class!=="undefined"){e.itemClass=e.item_class;d("item_class","itemClass")}if(typeof e.placeholder_class!=="undefined"){e.placeholderClass=e.placeholder_class;d("placeholder_class","placeholderClass")}if(typeof e.placeholder_text!=="undefined"){e.placeholderText=e.placeholder_text;d("placeholder_text","placeholderText")}if(typeof e.cell_height!=="undefined"){e.cellHeight=e.cell_height;d("cell_height","cellHeight")}if(typeof e.vertical_margin!=="undefined"){e.verticalMargin=e.vertical_margin;d("vertical_margin","verticalMargin")}if(typeof e.min_width!=="undefined"){e.minWidth=e.min_width;d("min_width","minWidth")}if(typeof e.static_grid!=="undefined"){e.staticGrid=e.static_grid;d("static_grid","staticGrid")}if(typeof e.is_nested!=="undefined"){e.isNested=e.is_nested;d("is_nested","isNested")}if(typeof e.always_show_resize_handle!=="undefined"){e.alwaysShowResizeHandle=e.always_show_resize_handle;d("always_show_resize_handle","alwaysShowResizeHandle")}e.itemClass=e.itemClass||"grid-stack-item";var a=this.container.closest("."+e.itemClass).length>0;this.opts=h.defaults(e||{},{width:parseInt(this.container.attr("data-gs-width"))||12,height:parseInt(this.container.attr("data-gs-height"))||0,itemClass:"grid-stack-item",placeholderClass:"grid-stack-placeholder",placeholderText:"",handle:".grid-stack-item-content",handleClass:null,cellHeight:60,verticalMargin:20,auto:true,minWidth:768,float:false,staticGrid:false,_class:"grid-stack-instance-"+(Math.random()*1e4).toFixed(0),animate:Boolean(this.container.attr("data-gs-animate"))||false,alwaysShowResizeHandle:e.alwaysShowResizeHandle||false,resizable:h.defaults(e.resizable||{},{autoHide:!(e.alwaysShowResizeHandle||false),handles:"se"}),draggable:h.defaults(e.draggable||{},{handle:(e.handleClass?"."+e.handleClass:e.handle?e.handle:"")||".grid-stack-item-content",scroll:false,appendTo:"body"}),disableDrag:e.disableDrag||false,disableResize:e.disableResize||false,rtl:"auto",removable:false,removeTimeout:2e3,verticalMarginUnit:"px",cellHeightUnit:"px",disableOneColumnMode:e.disableOneColumnMode||false,oneColumnModeClass:e.oneColumnModeClass||"grid-stack-one-column-mode",ddPlugin:null});if(this.opts.ddPlugin===false){this.opts.ddPlugin=u}else if(this.opts.ddPlugin===null){this.opts.ddPlugin=h.first(u.registeredPlugins)||u}this.dd=new this.opts.ddPlugin(this);if(this.opts.rtl==="auto"){this.opts.rtl=this.container.css("direction")==="rtl"}if(this.opts.rtl){this.container.addClass("grid-stack-rtl")}this.opts.isNested=a;o=this.opts.cellHeight==="auto";if(o){l.cellHeight(l.cellWidth(),true)}else{this.cellHeight(this.opts.cellHeight,true)}this.verticalMargin(this.opts.verticalMargin,true);this.container.addClass(this.opts._class);this._setStaticClass();if(a){this.container.addClass("grid-stack-nested")}this._initStyles();this.grid=new _(this.opts.width,function(t,e){e=typeof e==="undefined"?true:e;var i=0;h.each(t,function(t){if(e&&t._id===null){if(t.el){t.el.remove()}}else{t.el.attr("data-gs-x",t.x).attr("data-gs-y",t.y).attr("data-gs-width",t.width).attr("data-gs-height",t.height);i=Math.max(i,t.y+t.height)}});l._updateStyles(i+10)},this.opts.float,this.opts.height);if(this.opts.auto){var r=[];var s=this;this.container.children("."+this.opts.itemClass+":not(."+this.opts.placeholderClass+")").each(function(t,e){e=c(e);r.push({el:e,i:parseInt(e.attr("data-gs-x"))+parseInt(e.attr("data-gs-y"))*s.opts.width})});h.chain(r).sortBy(function(t){return t.i}).each(function(t){l._prepareElement(t.el)}).value()}this.setAnimation(this.opts.animate);this.placeholder=c('<div class="'+this.opts.placeholderClass+" "+this.opts.itemClass+'">'+'<div class="placeholder-content">'+this.opts.placeholderText+"</div></div>").hide();this._updateContainerHeight();this._updateHeightsOnResize=h.throttle(function(){l.cellHeight(l.cellWidth(),false)},100);this.onResizeHandler=function(){if(o){l._updateHeightsOnResize()}if(l._isOneColumnMode()&&!l.opts.disableOneColumnMode){if(i){return}l.container.addClass(l.opts.oneColumnModeClass);i=true;l.grid._sortNodes();h.each(l.grid.nodes,function(t){l.container.append(t.el);if(l.opts.staticGrid){return}l.dd.draggable(t.el,"disable");l.dd.resizable(t.el,"disable");t.el.trigger("resize")})}else{if(!i){return}l.container.removeClass(l.opts.oneColumnModeClass);i=false;if(l.opts.staticGrid){return}h.each(l.grid.nodes,function(t){if(!t.noMove&&!l.opts.disableDrag){l.dd.draggable(t.el,"enable")}if(!t.noResize&&!l.opts.disableResize){l.dd.resizable(t.el,"enable")}t.el.trigger("resize")})}};c(window).resize(this.onResizeHandler);this.onResizeHandler();if(!l.opts.staticGrid&&typeof l.opts.removable==="string"){var n=c(l.opts.removable);if(!this.dd.isDroppable(n)){this.dd.droppable(n,{accept:"."+l.opts.itemClass})}this.dd.on(n,"dropover",function(t,e){var i=c(e.draggable);var o=i.data("_gridstack_node");if(o._grid!==l){return}l._setupRemovingTimeout(i)}).on(n,"dropout",function(t,e){var i=c(e.draggable);var o=i.data("_gridstack_node");if(o._grid!==l){return}l._clearRemovingTimeout(i)})}if(!l.opts.staticGrid&&l.opts.acceptWidgets){var p=null;var g=function(t,e){var i=p;var o=i.data("_gridstack_node");var a=l.getCellFromPixel(e.offset,true);var r=Math.max(0,a.x);var s=Math.max(0,a.y);if(!o._added){o._added=true;o.el=i;o.x=r;o.y=s;l.grid.cleanNodes();l.grid.beginUpdate(o);l.grid.addNode(o);l.container.append(l.placeholder);l.placeholder.attr("data-gs-x",o.x).attr("data-gs-y",o.y).attr("data-gs-width",o.width).attr("data-gs-height",o.height).show();o.el=l.placeholder;o._beforeDragX=o.x;o._beforeDragY=o.y;l._updateContainerHeight()}else{if(!l.grid.canMoveNode(o,r,s)){return}l.grid.moveNode(o,r,s);l._updateContainerHeight()}};this.dd.droppable(l.container,{accept:function(t){t=c(t);var e=t.data("_gridstack_node");if(e&&e._grid===l){return false}return t.is(l.opts.acceptWidgets===true?".grid-stack-item":l.opts.acceptWidgets)}}).on(l.container,"dropover",function(t,e){var i=l.container.offset();var o=c(e.draggable);var a=l.cellWidth();var r=l.cellHeight();var s=o.data("_gridstack_node");var n=s?s.width:Math.ceil(o.outerWidth()/a);var d=s?s.height:Math.ceil(o.outerHeight()/r);p=o;var h=l.grid._prepareNode({width:n,height:d,_added:false,_temporary:true});o.data("_gridstack_node",h);o.data("_gridstack_node_orig",s);o.on("drag",g)}).on(l.container,"dropout",function(t,e){var i=c(e.draggable);i.unbind("drag",g);var o=i.data("_gridstack_node");o.el=null;l.grid.removeNode(o);l.placeholder.detach();l._updateContainerHeight();i.data("_gridstack_node",i.data("_gridstack_node_orig"))}).on(l.container,"drop",function(t,e){l.placeholder.detach();var i=c(e.draggable).data("_gridstack_node");i._grid=l;var o=c(e.draggable).clone(false);o.data("_gridstack_node",i);var a=c(e.draggable).data("_gridstack_node_orig");if(typeof a!=="undefined"){a._grid._triggerRemoveEvent()}c(e.draggable).remove();i.el=o;l.placeholder.hide();o.attr("data-gs-x",i.x).attr("data-gs-y",i.y).attr("data-gs-width",i.width).attr("data-gs-height",i.height).addClass(l.opts.itemClass).removeAttr("style").enableSelection().removeData("draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled").unbind("drag",g);l.container.append(o);l._prepareElementsByNode(o,i);l._updateContainerHeight();l.grid._addedNodes.push(i);l._triggerAddEvent();l._triggerChangeEvent();l.grid.endUpdate()})}};return i.prototype._triggerChangeEvent=function(t){var e=this.grid.getDirtyNodes(),i=!1,o=[];e&&e.length&&(o.push(e),i=!0),!i&&!0!==t||this.container.trigger("change",o)},i.prototype._triggerAddEvent=function(){this.grid._addedNodes&&0<this.grid._addedNodes.length&&(this.container.trigger("added",[h.map(this.grid._addedNodes,h.clone)]),this.grid._addedNodes=[])},i.prototype._triggerRemoveEvent=function(){this.grid._removedNodes&&0<this.grid._removedNodes.length&&(this.container.trigger("removed",[h.map(this.grid._removedNodes,h.clone)]),this.grid._removedNodes=[])},i.prototype._initStyles=function(){this._stylesId&&s.removeStylesheet(this._stylesId),this._stylesId="gridstack-style-"+(1e5*Math.random()).toFixed(),this._styles=s.createStylesheet(this._stylesId),null!==this._styles&&(this._styles._max=0)},i.prototype._updateStyles=function(t){if(null!==this._styles&&void 0!==this._styles){var e,i="."+this.opts._class+" ."+this.opts.itemClass,o=this;if(void 0===t&&(t=this._styles._max),this._initStyles(),this._updateContainerHeight(),this.opts.cellHeight&&!(0!==this._styles._max&&t<=this._styles._max)&&(e=this.opts.verticalMargin&&this.opts.cellHeightUnit!==this.opts.verticalMarginUnit?function(t,e){return t&&e?"calc("+(o.opts.cellHeight*t+o.opts.cellHeightUnit)+" + "+(o.opts.verticalMargin*e+o.opts.verticalMarginUnit)+")":o.opts.cellHeight*t+o.opts.verticalMargin*e+o.opts.cellHeightUnit}:function(t,e){return o.opts.cellHeight*t+o.opts.verticalMargin*e+o.opts.cellHeightUnit},0===this._styles._max&&s.insertCSSRule(this._styles,i,"min-height: "+e(1,0)+";",0),t>this._styles._max)){for(var a=this._styles._max;a<t;++a)s.insertCSSRule(this._styles,i+'[data-gs-height="'+(a+1)+'"]',"height: "+e(a+1,a)+";",a),s.insertCSSRule(this._styles,i+'[data-gs-min-height="'+(a+1)+'"]',"min-height: "+e(a+1,a)+";",a),s.insertCSSRule(this._styles,i+'[data-gs-max-height="'+(a+1)+'"]',"max-height: "+e(a+1,a)+";",a),s.insertCSSRule(this._styles,i+'[data-gs-y="'+a+'"]',"top: "+e(a,a)+";",a);this._styles._max=t}}},i.prototype._updateContainerHeight=function(){if(!this.grid._updateCounter){var t=this.grid.getGridHeight();this.container.attr("data-gs-current-height",t),this.opts.cellHeight&&(this.opts.verticalMargin?this.opts.cellHeightUnit===this.opts.verticalMarginUnit?this.container.css("height",t*(this.opts.cellHeight+this.opts.verticalMargin)-this.opts.verticalMargin+this.opts.cellHeightUnit):this.container.css("height","calc("+(t*this.opts.cellHeight+this.opts.cellHeightUnit)+" + "+(t*(this.opts.verticalMargin-1)+this.opts.verticalMarginUnit)+")"):this.container.css("height",t*this.opts.cellHeight+this.opts.cellHeightUnit))}},i.prototype._isOneColumnMode=function(){return(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)<=this.opts.minWidth},i.prototype._setupRemovingTimeout=function(t){var e=c(t).data("_gridstack_node");!e._removeTimeout&&this.opts.removable&&(e._removeTimeout=setTimeout(function(){t.addClass("grid-stack-item-removing"),e._isAboutToRemove=!0},this.opts.removeTimeout))},i.prototype._clearRemovingTimeout=function(t){var e=c(t).data("_gridstack_node");e._removeTimeout&&(clearTimeout(e._removeTimeout),e._removeTimeout=null,t.removeClass("grid-stack-item-removing"),e._isAboutToRemove=!1)},i.prototype._prepareElementsByNode=function(d,h){function t(t,e){var i,o,a=Math.round(e.position.left/l),r=Math.floor((e.position.top+p/2)/p);if("drag"!=t.type&&(i=Math.round(e.size.width/l),o=Math.round(e.size.height/p)),"drag"==t.type)a<0||a>=g.grid.width||r<0||!g.grid.float&&r>g.grid.getGridHeight()?h._temporaryRemoved||(!0===g.opts.removable&&g._setupRemovingTimeout(d),a=h._beforeDragX,r=h._beforeDragY,g.placeholder.detach(),g.placeholder.hide(),g.grid.removeNode(h),g._updateContainerHeight(),h._temporaryRemoved=!0):(g._clearRemovingTimeout(d),h._temporaryRemoved&&(g.grid.addNode(h),g.placeholder.attr("data-gs-x",a).attr("data-gs-y",r).attr("data-gs-width",i).attr("data-gs-height",o).show(),g.container.append(g.placeholder),h.el=g.placeholder,h._temporaryRemoved=!1));else if("resize"==t.type&&a<0)return;var s=void 0!==i?i:h.lastTriedWidth,n=void 0!==o?o:h.lastTriedHeight;!g.grid.canMoveNode(h,a,r,i,o)||h.lastTriedX===a&&h.lastTriedY===r&&h.lastTriedWidth===s&&h.lastTriedHeight===n||(h.lastTriedX=a,h.lastTriedY=r,h.lastTriedWidth=i,h.lastTriedHeight=o,g.grid.moveNode(h,a,r,i,o),g._updateContainerHeight())}function e(t,e){g.container.append(g.placeholder);var i=c(this);g.grid.cleanNodes(),g.grid.beginUpdate(h),l=g.cellWidth();var o=Math.ceil(i.outerHeight()/i.attr("data-gs-height"));p=g.container.height()/parseInt(g.container.attr("data-gs-current-height")),g.placeholder.attr("data-gs-x",i.attr("data-gs-x")).attr("data-gs-y",i.attr("data-gs-y")).attr("data-gs-width",i.attr("data-gs-width")).attr("data-gs-height",i.attr("data-gs-height")).show(),h.el=g.placeholder,h._beforeDragX=h.x,h._beforeDragY=h.y,g.dd.resizable(d,"option","minWidth",l*(h.minWidth||1)),g.dd.resizable(d,"option","minHeight",o*(h.minHeight||1)),"resizestart"==t.type&&i.find(".grid-stack-item").trigger("resizestart")}function i(t,e){var i=c(this);if(i.data("_gridstack_node")){var o=!1;if(g.placeholder.detach(),h.el=i,g.placeholder.hide(),h._isAboutToRemove)o=!0,d.data("_gridstack_node")._grid._triggerRemoveEvent(),d.removeData("_gridstack_node"),d.remove();else g._clearRemovingTimeout(d),h._temporaryRemoved?(i.attr("data-gs-x",h._beforeDragX).attr("data-gs-y",h._beforeDragY).attr("data-gs-width",h.width).attr("data-gs-height",h.height).removeAttr("style"),h.x=h._beforeDragX,h.y=h._beforeDragY,g.grid.addNode(h)):i.attr("data-gs-x",h.x).attr("data-gs-y",h.y).attr("data-gs-width",h.width).attr("data-gs-height",h.height).removeAttr("style");g._updateContainerHeight(),g._triggerChangeEvent(o),g.grid.endUpdate();var a=i.find(".grid-stack");a.length&&"resizestop"==t.type&&(a.each(function(t,e){c(e).data("gridstack").onResizeHandler()}),i.find(".grid-stack-item").trigger("resizestop"),i.find(".grid-stack-item").trigger("gsresizestop")),"resizestop"==t.type&&g.container.trigger("gsresizestop",i)}}var l,p,g=this;this.dd.draggable(d,{start:e,stop:i,drag:t}).resizable(d,{start:e,stop:i,resize:t}),(h.noMove||this._isOneColumnMode()&&!g.opts.disableOneColumnMode||this.opts.disableDrag)&&this.dd.draggable(d,"disable"),(h.noResize||this._isOneColumnMode()&&!g.opts.disableOneColumnMode||this.opts.disableResize)&&this.dd.resizable(d,"disable"),d.attr("data-gs-locked",h.locked?"yes":null)},i.prototype._prepareElement=function(t,e){e=void 0!==e&&e;(t=c(t)).addClass(this.opts.itemClass);var i=this.grid.addNode({x:t.attr("data-gs-x"),y:t.attr("data-gs-y"),width:t.attr("data-gs-width"),height:t.attr("data-gs-height"),maxWidth:t.attr("data-gs-max-width"),minWidth:t.attr("data-gs-min-width"),maxHeight:t.attr("data-gs-max-height"),minHeight:t.attr("data-gs-min-height"),autoPosition:s.toBool(t.attr("data-gs-auto-position")),noResize:s.toBool(t.attr("data-gs-no-resize")),noMove:s.toBool(t.attr("data-gs-no-move")),locked:s.toBool(t.attr("data-gs-locked")),el:t,id:t.attr("data-gs-id"),_grid:this},e);t.data("_gridstack_node",i),this._prepareElementsByNode(t,i)},i.prototype.setAnimation=function(t){t?this.container.addClass("grid-stack-animate"):this.container.removeClass("grid-stack-animate")},i.prototype.addWidget=function(t,e,i,o,a,r,s,n,d,h,l){return t=c(t),void 0!==e&&t.attr("data-gs-x",e),void 0!==i&&t.attr("data-gs-y",i),void 0!==o&&t.attr("data-gs-width",o),void 0!==a&&t.attr("data-gs-height",a),void 0!==r&&t.attr("data-gs-auto-position",r?"yes":null),void 0!==s&&t.attr("data-gs-min-width",s),void 0!==n&&t.attr("data-gs-max-width",n),void 0!==d&&t.attr("data-gs-min-height",d),void 0!==h&&t.attr("data-gs-max-height",h),void 0!==l&&t.attr("data-gs-id",l),this.container.append(t),this._prepareElement(t,!0),this._triggerAddEvent(),this._updateContainerHeight(),this._triggerChangeEvent(!0),t},i.prototype.makeWidget=function(t){return t=c(t),this._prepareElement(t,!0),this._triggerAddEvent(),this._updateContainerHeight(),this._triggerChangeEvent(!0),t},i.prototype.willItFit=function(t,e,i,o,a){var r={x:t,y:e,width:i,height:o,autoPosition:a};return this.grid.canBePlacedWithRespectToHeight(r)},i.prototype.removeWidget=function(t,e){e=void 0===e||e;var i=(t=c(t)).data("_gridstack_node");i=i||this.grid.getNodeDataByDOMEl(t),this.grid.removeNode(i,e),t.removeData("_gridstack_node"),this._updateContainerHeight(),e&&t.remove(),this._triggerChangeEvent(!0),this._triggerRemoveEvent()},i.prototype.removeAll=function(e){h.each(this.grid.nodes,h.bind(function(t){this.removeWidget(t.el,e)},this)),this.grid.nodes=[],this._updateContainerHeight()},i.prototype.destroy=function(t){c(window).off("resize",this.onResizeHandler),this.disable(),void 0===t||t?this.container.remove():(this.removeAll(!1),this.container.removeData("gridstack")),s.removeStylesheet(this._stylesId),this.grid&&(this.grid=null)},i.prototype.resizable=function(t,o){var a=this;return(t=c(t)).each(function(t,e){var i=(e=c(e)).data("_gridstack_node");null!=i&&(i.noResize=!o,i.noResize||a._isOneColumnMode()&&!a.opts.disableOneColumnMode?a.dd.resizable(e,"disable"):a.dd.resizable(e,"enable"))}),this},i.prototype.movable=function(t,o){var a=this;return(t=c(t)).each(function(t,e){var i=(e=c(e)).data("_gridstack_node");null!=i&&(i.noMove=!o,i.noMove||a._isOneColumnMode()&&!a.opts.disableOneColumnMode?(a.dd.draggable(e,"disable"),e.removeClass("ui-draggable-handle")):(a.dd.draggable(e,"enable"),e.addClass("ui-draggable-handle")))}),this},i.prototype.enableMove=function(t,e){this.movable(this.container.children("."+this.opts.itemClass),t),e&&(this.opts.disableDrag=!t)},i.prototype.enableResize=function(t,e){this.resizable(this.container.children("."+this.opts.itemClass),t),e&&(this.opts.disableResize=!t)},i.prototype.disable=function(){this.movable(this.container.children("."+this.opts.itemClass),!1),this.resizable(this.container.children("."+this.opts.itemClass),!1),this.container.trigger("disable")},i.prototype.enable=function(){this.movable(this.container.children("."+this.opts.itemClass),!0),this.resizable(this.container.children("."+this.opts.itemClass),!0),this.container.trigger("enable")},i.prototype.locked=function(t,o){return(t=c(t)).each(function(t,e){var i=(e=c(e)).data("_gridstack_node");null!=i&&(i.locked=o||!1,e.attr("data-gs-locked",i.locked?"yes":null))}),this},i.prototype.maxHeight=function(t,o){return(t=c(t)).each(function(t,e){var i=(e=c(e)).data("_gridstack_node");null!=i&&(isNaN(o)||(i.maxHeight=o||!1,e.attr("data-gs-max-height",o)))}),this},i.prototype.minHeight=function(t,o){return(t=c(t)).each(function(t,e){var i=(e=c(e)).data("_gridstack_node");null!=i&&(isNaN(o)||(i.minHeight=o||!1,e.attr("data-gs-min-height",o)))}),this},i.prototype.maxWidth=function(t,o){return(t=c(t)).each(function(t,e){var i=(e=c(e)).data("_gridstack_node");null!=i&&(isNaN(o)||(i.maxWidth=o||!1,e.attr("data-gs-max-width",o)))}),this},i.prototype.minWidth=function(t,o){return(t=c(t)).each(function(t,e){var i=(e=c(e)).data("_gridstack_node");null!=i&&(isNaN(o)||(i.minWidth=o||!1,e.attr("data-gs-min-width",o)))}),this},i.prototype._updateElement=function(t,e){var i=(t=c(t).first()).data("_gridstack_node");if(null!=i){var o=this;o.grid.cleanNodes(),o.grid.beginUpdate(i),e.call(this,t,i),o._updateContainerHeight(),o._triggerChangeEvent(),o.grid.endUpdate()}},i.prototype.resize=function(t,i,o){this._updateElement(t,function(t,e){i=null!=i?i:e.width,o=null!=o?o:e.height,this.grid.moveNode(e,e.x,e.y,i,o)})},i.prototype.move=function(t,i,o){this._updateElement(t,function(t,e){i=null!=i?i:e.x,o=null!=o?o:e.y,this.grid.moveNode(e,i,o,e.width,e.height)})},i.prototype.update=function(t,i,o,a,r){this._updateElement(t,function(t,e){i=null!=i?i:e.x,o=null!=o?o:e.y,a=null!=a?a:e.width,r=null!=r?r:e.height,this.grid.moveNode(e,i,o,a,r)})},i.prototype.verticalMargin=function(t,e){if(void 0===t)return this.opts.verticalMargin;var i=s.parseHeight(t);this.opts.verticalMarginUnit===i.unit&&this.opts.height===i.height||(this.opts.verticalMarginUnit=i.unit,this.opts.verticalMargin=i.height,e||this._updateStyles())},i.prototype.cellHeight=function(t,e){if(void 0===t){if(this.opts.cellHeight)return this.opts.cellHeight;var i=this.container.children("."+this.opts.itemClass).first();return Math.ceil(i.outerHeight()/i.attr("data-gs-height"))}var o=s.parseHeight(t);this.opts.cellHeightUnit===o.heightUnit&&this.opts.height===o.height||(this.opts.cellHeightUnit=o.unit,this.opts.cellHeight=o.height,e||this._updateStyles())},i.prototype.cellWidth=function(){return Math.round(this.container.outerWidth()/this.opts.width)},i.prototype.getCellFromPixel=function(t,e){var i=void 0!==e&&e?this.container.offset():this.container.position(),o=t.left-i.left,a=t.top-i.top,r=Math.floor(this.container.width()/this.opts.width),s=Math.floor(this.container.height()/parseInt(this.container.attr("data-gs-current-height")));return{x:Math.floor(o/r),y:Math.floor(a/s)}},i.prototype.batchUpdate=function(){this.grid.batchUpdate()},i.prototype.commit=function(){this.grid.commit(),this._updateContainerHeight()},i.prototype.isAreaEmpty=function(t,e,i,o){return this.grid.isAreaEmpty(t,e,i,o)},i.prototype.setStatic=function(t){this.opts.staticGrid=!0===t,this.enableMove(!t),this.enableResize(!t),this._setStaticClass()},i.prototype._setStaticClass=function(){var t="grid-stack-static";!0===this.opts.staticGrid?this.container.addClass(t):this.container.removeClass(t)},i.prototype._updateNodeWidths=function(t,e){this.grid._sortNodes(),this.grid.batchUpdate();for(var i={},o=0;o<this.grid.nodes.length;o++)i=this.grid.nodes[o],this.update(i.el,Math.round(i.x*e/t),void 0,Math.round(i.width*e/t),void 0);this.grid.commit()},i.prototype.setGridWidth=function(t,e){this.container.removeClass("grid-stack-"+this.opts.width),!0!==e&&this._updateNodeWidths(this.opts.width,t),this.opts.width=t,this.grid.width=t,this.container.addClass("grid-stack-"+t)},_.prototype.batch_update=e(_.prototype.batchUpdate),_.prototype._fix_collisions=e(_.prototype._fixCollisions,"_fix_collisions","_fixCollisions"),_.prototype.is_area_empty=e(_.prototype.isAreaEmpty,"is_area_empty","isAreaEmpty"),_.prototype._sort_nodes=e(_.prototype._sortNodes,"_sort_nodes","_sortNodes"),_.prototype._pack_nodes=e(_.prototype._packNodes,"_pack_nodes","_packNodes"),_.prototype._prepare_node=e(_.prototype._prepareNode,"_prepare_node","_prepareNode"),_.prototype.clean_nodes=e(_.prototype.cleanNodes,"clean_nodes","cleanNodes"),_.prototype.get_dirty_nodes=e(_.prototype.getDirtyNodes,"get_dirty_nodes","getDirtyNodes"),_.prototype.add_node=e(_.prototype.addNode,"add_node","addNode, "),_.prototype.remove_node=e(_.prototype.removeNode,"remove_node","removeNode"),_.prototype.can_move_node=e(_.prototype.canMoveNode,"can_move_node","canMoveNode"),_.prototype.move_node=e(_.prototype.moveNode,"move_node","moveNode"),_.prototype.get_grid_height=e(_.prototype.getGridHeight,"get_grid_height","getGridHeight"),_.prototype.begin_update=e(_.prototype.beginUpdate,"begin_update","beginUpdate"),_.prototype.end_update=e(_.prototype.endUpdate,"end_update","endUpdate"),_.prototype.can_be_placed_with_respect_to_height=e(_.prototype.canBePlacedWithRespectToHeight,"can_be_placed_with_respect_to_height","canBePlacedWithRespectToHeight"),i.prototype._trigger_change_event=e(i.prototype._triggerChangeEvent,"_trigger_change_event","_triggerChangeEvent"),i.prototype._init_styles=e(i.prototype._initStyles,"_init_styles","_initStyles"),i.prototype._update_styles=e(i.prototype._updateStyles,"_update_styles","_updateStyles"),i.prototype._update_container_height=e(i.prototype._updateContainerHeight,"_update_container_height","_updateContainerHeight"),i.prototype._is_one_column_mode=e(i.prototype._isOneColumnMode,"_is_one_column_mode","_isOneColumnMode"),i.prototype._prepare_element=e(i.prototype._prepareElement,"_prepare_element","_prepareElement"),i.prototype.set_animation=e(i.prototype.setAnimation,"set_animation","setAnimation"),i.prototype.add_widget=e(i.prototype.addWidget,"add_widget","addWidget"),i.prototype.make_widget=e(i.prototype.makeWidget,"make_widget","makeWidget"),i.prototype.will_it_fit=e(i.prototype.willItFit,"will_it_fit","willItFit"),i.prototype.remove_widget=e(i.prototype.removeWidget,"remove_widget","removeWidget"),i.prototype.remove_all=e(i.prototype.removeAll,"remove_all","removeAll"),i.prototype.min_height=e(i.prototype.minHeight,"min_height","minHeight"),i.prototype.min_width=e(i.prototype.minWidth,"min_width","minWidth"),i.prototype._update_element=e(i.prototype._updateElement,"_update_element","_updateElement"),i.prototype.cell_height=e(i.prototype.cellHeight,"cell_height","cellHeight"),i.prototype.cell_width=e(i.prototype.cellWidth,"cell_width","cellWidth"),i.prototype.get_cell_from_pixel=e(i.prototype.getCellFromPixel,"get_cell_from_pixel","getCellFromPixel"),i.prototype.batch_update=e(i.prototype.batchUpdate,"batch_update","batchUpdate"),i.prototype.is_area_empty=e(i.prototype.isAreaEmpty,"is_area_empty","isAreaEmpty"),i.prototype.set_static=e(i.prototype.setStatic,"set_static","setStatic"),i.prototype._set_static_class=e(i.prototype._setStaticClass,"_set_static_class","_setStaticClass"),t.GridStackUI=i,t.GridStackUI.Utils=s,t.GridStackUI.Engine=_,t.GridStackUI.GridStackDragDropPlugin=u,c.fn.gridstack=function(e){return this.each(function(){var t=c(this);t.data("gridstack")||t.data("gridstack",new i(this,e))})},t.GridStackUI})?o.apply(e,a):o)||(t.exports=r)},226:function(t,e,i){},228:function(t,e,i){var o,a,r;a=[i(0),i(31),i(198),i(19),i(32),i(20),i(33),i(21),i(6),i(22),i(44),i(23),i(11),i(24),i(25),i(34),i(12),i(1),i(3),i(9),i(26),i(45),i(35)],void 0===(r="function"==typeof(o=function(a,r,e){var t=window;function i(t){e.GridStackDragDropPlugin.call(this,t)}return e.GridStackDragDropPlugin.registerPlugin(i),((i.prototype=Object.create(e.GridStackDragDropPlugin.prototype)).constructor=i).prototype.resizable=function(t,e){if(t=a(t),"disable"===e||"enable"===e)t.resizable(e);else if("option"===e){var i=arguments[2],o=arguments[3];t.resizable(e,i,o)}else t.resizable(r.extend({},this.grid.opts.resizable,{start:e.start||function(){},stop:e.stop||function(){},resize:e.resize||function(){}}));return this},i.prototype.draggable=function(t,e){return t=a(t),"disable"===e||"enable"===e?t.draggable(e):t.draggable(r.extend({},this.grid.opts.draggable,{containment:this.grid.opts.isNested?this.grid.container.parent():null,start:e.start||function(){},stop:e.stop||function(){},drag:e.drag||function(){}})),this},i.prototype.droppable=function(t,e){return t=a(t),"disable"===e||"enable"===e?t.droppable(e):t.droppable({accept:e.accept}),this},i.prototype.isDroppable=function(t,e){return t=a(t),Boolean(t.data("droppable"))},i.prototype.on=function(t,e,i){return a(t).on(e,i),this},i})?o.apply(e,a):o)||(t.exports=r)}}]);
//# sourceMappingURL=vendors~widgetsystem-1b89370f1cfcf736dc6c.chunk.js.map