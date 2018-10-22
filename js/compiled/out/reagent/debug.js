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
var G__1579__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__1579 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1580__i = 0, G__1580__a = new Array(arguments.length -  0);
while (G__1580__i < G__1580__a.length) {G__1580__a[G__1580__i] = arguments[G__1580__i + 0]; ++G__1580__i;}
  args = new cljs.core.IndexedSeq(G__1580__a,0,null);
} 
return G__1579__delegate.call(this,args);};
G__1579.cljs$lang$maxFixedArity = 0;
G__1579.cljs$lang$applyTo = (function (arglist__1581){
var args = cljs.core.seq(arglist__1581);
return G__1579__delegate(args);
});
G__1579.cljs$core$IFn$_invoke$arity$variadic = G__1579__delegate;
return G__1579;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__1582__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__1582 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__1583__i = 0, G__1583__a = new Array(arguments.length -  0);
while (G__1583__i < G__1583__a.length) {G__1583__a[G__1583__i] = arguments[G__1583__i + 0]; ++G__1583__i;}
  args = new cljs.core.IndexedSeq(G__1583__a,0,null);
} 
return G__1582__delegate.call(this,args);};
G__1582.cljs$lang$maxFixedArity = 0;
G__1582.cljs$lang$applyTo = (function (arglist__1584){
var args = cljs.core.seq(arglist__1584);
return G__1582__delegate(args);
});
G__1582.cljs$core$IFn$_invoke$arity$variadic = G__1582__delegate;
return G__1582;
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

//# sourceMappingURL=debug.js.map?rel=1540234816673
