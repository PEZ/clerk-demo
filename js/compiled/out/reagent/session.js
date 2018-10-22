// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor.call(null,reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__4534__auto__ = [];
var len__4531__auto___33337 = arguments.length;
var i__4532__auto___33338 = (0);
while(true){
if((i__4532__auto___33338 < len__4531__auto___33337)){
args__4534__auto__.push((arguments[i__4532__auto___33338]));

var G__33339 = (i__4532__auto___33338 + (1));
i__4532__auto___33338 = G__33339;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__33333){
var vec__33334 = p__33333;
var default$ = cljs.core.nth.call(null,vec__33334,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref.call(null,temp_a) == null))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get.cljs$lang$applyTo = (function (seq33331){
var G__33332 = cljs.core.first.call(null,seq33331);
var seq33331__$1 = cljs.core.next.call(null,seq33331);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33332,seq33331__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__4534__auto__ = [];
var len__4531__auto___33346 = arguments.length;
var i__4532__auto___33347 = (0);
while(true){
if((i__4532__auto___33347 < len__4531__auto___33346)){
args__4534__auto__.push((arguments[i__4532__auto___33347]));

var G__33348 = (i__4532__auto___33347 + (1));
i__4532__auto___33347 = G__33348;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__33342){
var vec__33343 = p__33342;
var default$ = cljs.core.nth.call(null,vec__33343,(0),null);
var or__3949__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_in.cljs$lang$applyTo = (function (seq33340){
var G__33341 = cljs.core.first.call(null,seq33340);
var seq33340__$1 = cljs.core.next.call(null,seq33340);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33341,seq33340__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___33351 = arguments.length;
var i__4532__auto___33352 = (0);
while(true){
if((i__4532__auto___33352 < len__4531__auto___33351)){
args__4534__auto__.push((arguments[i__4532__auto___33352]));

var G__33353 = (i__4532__auto___33352 + (1));
i__4532__auto___33352 = G__33353;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq33349){
var G__33350 = cljs.core.first.call(null,seq33349);
var seq33349__$1 = cljs.core.next.call(null,seq33349);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33350,seq33349__$1);
});

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___33360 = arguments.length;
var i__4532__auto___33361 = (0);
while(true){
if((i__4532__auto___33361 < len__4531__auto___33360)){
args__4534__auto__.push((arguments[i__4532__auto___33361]));

var G__33362 = (i__4532__auto___33361 + (1));
i__4532__auto___33361 = G__33362;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__33356){
var vec__33357 = p__33356;
var default$ = cljs.core.nth.call(null,vec__33357,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq33354){
var G__33355 = cljs.core.first.call(null,seq33354);
var seq33354__$1 = cljs.core.next.call(null,seq33354);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33355,seq33354__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___33369 = arguments.length;
var i__4532__auto___33370 = (0);
while(true){
if((i__4532__auto___33370 < len__4531__auto___33369)){
args__4534__auto__.push((arguments[i__4532__auto___33370]));

var G__33371 = (i__4532__auto___33370 + (1));
i__4532__auto___33370 = G__33371;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__33365){
var vec__33366 = p__33365;
var default$ = cljs.core.nth.call(null,vec__33366,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq33363){
var G__33364 = cljs.core.first.call(null,seq33363);
var seq33363__$1 = cljs.core.next.call(null,seq33363);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33364,seq33363__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___33376 = arguments.length;
var i__4532__auto___33377 = (0);
while(true){
if((i__4532__auto___33377 < len__4531__auto___33376)){
args__4534__auto__.push((arguments[i__4532__auto___33377]));

var G__33378 = (i__4532__auto___33377 + (1));
i__4532__auto___33377 = G__33378;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__33372_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__33372_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq33373){
var G__33374 = cljs.core.first.call(null,seq33373);
var seq33373__$1 = cljs.core.next.call(null,seq33373);
var G__33375 = cljs.core.first.call(null,seq33373__$1);
var seq33373__$2 = cljs.core.next.call(null,seq33373__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33374,G__33375,seq33373__$2);
});

/**
 * Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___33383 = arguments.length;
var i__4532__auto___33384 = (0);
while(true){
if((i__4532__auto___33384 < len__4531__auto___33383)){
args__4534__auto__.push((arguments[i__4532__auto___33384]));

var G__33385 = (i__4532__auto___33384 + (1));
i__4532__auto___33384 = G__33385;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__33379_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__33379_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq33380){
var G__33381 = cljs.core.first.call(null,seq33380);
var seq33380__$1 = cljs.core.next.call(null,seq33380);
var G__33382 = cljs.core.first.call(null,seq33380__$1);
var seq33380__$2 = cljs.core.next.call(null,seq33380__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33381,G__33382,seq33380__$2);
});


//# sourceMappingURL=session.js.map?rel=1540243359193
