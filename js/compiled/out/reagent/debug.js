// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__27073__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__27073 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27074__i = 0, G__27074__a = new Array(arguments.length -  0);
while (G__27074__i < G__27074__a.length) {G__27074__a[G__27074__i] = arguments[G__27074__i + 0]; ++G__27074__i;}
  args = new cljs.core.IndexedSeq(G__27074__a,0,null);
} 
return G__27073__delegate.call(this,args);};
G__27073.cljs$lang$maxFixedArity = 0;
G__27073.cljs$lang$applyTo = (function (arglist__27075){
var args = cljs.core.seq(arglist__27075);
return G__27073__delegate(args);
});
G__27073.cljs$core$IFn$_invoke$arity$variadic = G__27073__delegate;
return G__27073;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__27076__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__27076 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27077__i = 0, G__27077__a = new Array(arguments.length -  0);
while (G__27077__i < G__27077__a.length) {G__27077__a[G__27077__i] = arguments[G__27077__i + 0]; ++G__27077__i;}
  args = new cljs.core.IndexedSeq(G__27077__a,0,null);
} 
return G__27076__delegate.call(this,args);};
G__27076.cljs$lang$maxFixedArity = 0;
G__27076.cljs$lang$applyTo = (function (arglist__27078){
var args = cljs.core.seq(arglist__27078);
return G__27076__delegate(args);
});
G__27076.cljs$core$IFn$_invoke$arity$variadic = G__27076__delegate;
return G__27076;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1540243349604
