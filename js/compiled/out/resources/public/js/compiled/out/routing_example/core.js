// Compiled by ClojureScript 1.9.946 {}
goog.provide('routing_example.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('bidi.bidi');
goog.require('accountant.core');
cljs.core.enable_console_print_BANG_.call(null);
routing_example.core.app_routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 5, ["",new cljs.core.Keyword(null,"index","index",-1531685915),"section-a",cljs.core.PersistentArrayMap.createAsIfByAssoc(["",new cljs.core.Keyword(null,"section-a","section-a",537694564),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/item-",new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null),new cljs.core.Keyword(null,"a-item","a-item",310592905)]),"section-b",new cljs.core.Keyword(null,"section-b","section-b",1815610311),"missing-route",new cljs.core.Keyword(null,"missing-route","missing-route",-158551921),true,new cljs.core.Keyword(null,"four-o-four","four-o-four",641683456)], null)], null);
if(typeof routing_example.core.page_contents !== 'undefined'){
} else {
routing_example.core.page_contents = (function (){var method_table__35553__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__35554__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__35555__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__35556__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__35557__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"routing-example.core","page-contents"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__35557__auto__,method_table__35553__auto__,prefer_table__35554__auto__,method_cache__35555__auto__,cached_hierarchy__35556__auto__));
})();
}
cljs.core._add_method.call(null,routing_example.core.page_contents,new cljs.core.Keyword(null,"index","index",-1531685915),(function (){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Routing example: Index"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),bidi.bidi.path_for.call(null,routing_example.core.app_routes,new cljs.core.Keyword(null,"section-a","section-a",537694564))], null),"Section A"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),bidi.bidi.path_for.call(null,routing_example.core.app_routes,new cljs.core.Keyword(null,"section-b","section-b",1815610311))], null),"Section B"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),bidi.bidi.path_for.call(null,routing_example.core.app_routes,new cljs.core.Keyword(null,"missing-route","missing-route",-158551921))], null),"Missing-route"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/borken/link"], null),"Borken link"], null)], null)], null)], null);
});
}));
cljs.core._add_method.call(null,routing_example.core.page_contents,new cljs.core.Keyword(null,"section-a","section-a",537694564),(function (){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Routing example: Section A"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.call(null,(function (item_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),["item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_id)].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),["item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_id)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),bidi.bidi.path_for.call(null,routing_example.core.app_routes,new cljs.core.Keyword(null,"a-item","a-item",310592905),new cljs.core.Keyword(null,"item-id","item-id",-1804511607),item_id)], null),"Item: ",item_id], null)], null);
}),cljs.core.range.call(null,(1),(6)))], null)], null);
});
}));
cljs.core._add_method.call(null,routing_example.core.page_contents,new cljs.core.Keyword(null,"a-item","a-item",310592905),(function (){
return (function (){
var routing_data = reagent.session.get.call(null,new cljs.core.Keyword(null,"route","route",329891309));
var item = cljs.core.get_in.call(null,routing_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",2111411055),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),["Routing example: Section A, item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),bidi.bidi.path_for.call(null,routing_example.core.app_routes,new cljs.core.Keyword(null,"section-a","section-a",537694564))], null),"Back to Section A"], null)], null)], null);
});
}));
cljs.core._add_method.call(null,routing_example.core.page_contents,new cljs.core.Keyword(null,"section-b","section-b",1815610311),(function (){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Routing example: Section B"], null)], null);
});
}));
cljs.core._add_method.call(null,routing_example.core.page_contents,new cljs.core.Keyword(null,"four-o-four","four-o-four",641683456),(function (){

return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"404: It is not here"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.verse","pre.verse",-1381632881),"What you are looking for,\nI do not have.\nHow could I have,\nwhat does not exist?"], null)], null);
});
}));
cljs.core._add_method.call(null,routing_example.core.page_contents,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){

return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"404: My bad"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.verse","pre.verse",-1381632881),"This page should be here,\nbut I never created it."], null)], null);
});
}));
routing_example.core.page = (function routing_example$core$page(){
return (function (){
var page = new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(reagent.session.get.call(null,new cljs.core.Keyword(null,"route","route",329891309)));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),bidi.bidi.path_for.call(null,routing_example.core.app_routes,new cljs.core.Keyword(null,"index","index",-1531685915))], null),"Go home"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [routing_example.core.page_contents,page], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),page], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"(Using ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://reagent-project.github.io/"], null),"Reagent"], null),", ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/juxt/bidi"], null),"Bidi"], null)," & ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/venantius/accountant"], null),"Accountant"], null),")"], null)], null);
});
});
routing_example.core.on_js_reload = (function routing_example$core$on_js_reload(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [routing_example.core.page], null),document.getElementById("app"));
});
routing_example.core.init_BANG_ = (function routing_example$core$init_BANG_(){
accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
var match = bidi.bidi.match_route.call(null,routing_example.core.app_routes,path);
var current_page = new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(match);
var route_params = new cljs.core.Keyword(null,"route-params","route-params",2111411055).cljs$core$IFn$_invoke$arity$1(match);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),current_page,new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params], null));
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return cljs.core.boolean$.call(null,bidi.bidi.match_route.call(null,routing_example.core.app_routes,path));
})], null));

accountant.core.dispatch_current_BANG_.call(null);

return routing_example.core.on_js_reload.call(null);
});
goog.exportSymbol('routing_example.core.init_BANG_', routing_example.core.init_BANG_);

//# sourceMappingURL=core.js.map?rel=1532516120497
