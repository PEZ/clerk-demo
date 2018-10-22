// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__44770__delegate = function (x__44749__auto__){
if(cljs.core.truth_(routing_example.core.on_js_reload)){
return cljs.core.apply.call(null,routing_example.core.on_js_reload,x__44749__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("routing-example.core/on-js-reload"),"' is missing"].join(''));
}
};
var G__44770 = function (var_args){
var x__44749__auto__ = null;
if (arguments.length > 0) {
var G__44771__i = 0, G__44771__a = new Array(arguments.length -  0);
while (G__44771__i < G__44771__a.length) {G__44771__a[G__44771__i] = arguments[G__44771__i + 0]; ++G__44771__i;}
  x__44749__auto__ = new cljs.core.IndexedSeq(G__44771__a,0,null);
} 
return G__44770__delegate.call(this,x__44749__auto__);};
G__44770.cljs$lang$maxFixedArity = 0;
G__44770.cljs$lang$applyTo = (function (arglist__44772){
var x__44749__auto__ = cljs.core.seq(arglist__44772);
return G__44770__delegate(x__44749__auto__);
});
G__44770.cljs$core$IFn$_invoke$arity$variadic = G__44770__delegate;
return G__44770;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://[[client-hostname]]:4449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1540243380938
