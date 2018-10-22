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
var len__4531__auto___5753 = arguments.length;
var i__4532__auto___5754 = (0);
while(true){
if((i__4532__auto___5754 < len__4531__auto___5753)){
args__4534__auto__.push((arguments[i__4532__auto___5754]));

var G__5755 = (i__4532__auto___5754 + (1));
i__4532__auto___5754 = G__5755;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__5749){
var vec__5750 = p__5749;
var default$ = cljs.core.nth.call(null,vec__5750,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if(!((cljs.core.deref.call(null,temp_a) == null))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get.cljs$lang$applyTo = (function (seq5747){
var G__5748 = cljs.core.first.call(null,seq5747);
var seq5747__$1 = cljs.core.next.call(null,seq5747);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5748,seq5747__$1);
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
var len__4531__auto___5762 = arguments.length;
var i__4532__auto___5763 = (0);
while(true){
if((i__4532__auto___5763 < len__4531__auto___5762)){
args__4534__auto__.push((arguments[i__4532__auto___5763]));

var G__5764 = (i__4532__auto___5763 + (1));
i__4532__auto___5763 = G__5764;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__5758){
var vec__5759 = p__5758;
var default$ = cljs.core.nth.call(null,vec__5759,(0),null);
var or__3949__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_in.cljs$lang$applyTo = (function (seq5756){
var G__5757 = cljs.core.first.call(null,seq5756);
var seq5756__$1 = cljs.core.next.call(null,seq5756);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5757,seq5756__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5767 = arguments.length;
var i__4532__auto___5768 = (0);
while(true){
if((i__4532__auto___5768 < len__4531__auto___5767)){
args__4534__auto__.push((arguments[i__4532__auto___5768]));

var G__5769 = (i__4532__auto___5768 + (1));
i__4532__auto___5768 = G__5769;
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
reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq5765){
var G__5766 = cljs.core.first.call(null,seq5765);
var seq5765__$1 = cljs.core.next.call(null,seq5765);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5766,seq5765__$1);
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
var len__4531__auto___5776 = arguments.length;
var i__4532__auto___5777 = (0);
while(true){
if((i__4532__auto___5777 < len__4531__auto___5776)){
args__4534__auto__.push((arguments[i__4532__auto___5777]));

var G__5778 = (i__4532__auto___5777 + (1));
i__4532__auto___5777 = G__5778;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__5772){
var vec__5773 = p__5772;
var default$ = cljs.core.nth.call(null,vec__5773,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq5770){
var G__5771 = cljs.core.first.call(null,seq5770);
var seq5770__$1 = cljs.core.next.call(null,seq5770);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5771,seq5770__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5785 = arguments.length;
var i__4532__auto___5786 = (0);
while(true){
if((i__4532__auto___5786 < len__4531__auto___5785)){
args__4534__auto__.push((arguments[i__4532__auto___5786]));

var G__5787 = (i__4532__auto___5786 + (1));
i__4532__auto___5786 = G__5787;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__5781){
var vec__5782 = p__5781;
var default$ = cljs.core.nth.call(null,vec__5782,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq5779){
var G__5780 = cljs.core.first.call(null,seq5779);
var seq5779__$1 = cljs.core.next.call(null,seq5779);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5780,seq5779__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___5792 = arguments.length;
var i__4532__auto___5793 = (0);
while(true){
if((i__4532__auto___5793 < len__4531__auto___5792)){
args__4534__auto__.push((arguments[i__4532__auto___5793]));

var G__5794 = (i__4532__auto___5793 + (1));
i__4532__auto___5793 = G__5794;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__5788_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__5788_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq5789){
var G__5790 = cljs.core.first.call(null,seq5789);
var seq5789__$1 = cljs.core.next.call(null,seq5789);
var G__5791 = cljs.core.first.call(null,seq5789__$1);
var seq5789__$2 = cljs.core.next.call(null,seq5789__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5790,G__5791,seq5789__$2);
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
var len__4531__auto___5799 = arguments.length;
var i__4532__auto___5800 = (0);
while(true){
if((i__4532__auto___5800 < len__4531__auto___5799)){
args__4534__auto__.push((arguments[i__4532__auto___5800]));

var G__5801 = (i__4532__auto___5800 + (1));
i__4532__auto___5800 = G__5801;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__5795_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__5795_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq5796){
var G__5797 = cljs.core.first.call(null,seq5796);
var seq5796__$1 = cljs.core.next.call(null,seq5796);
var G__5798 = cljs.core.first.call(null,seq5796__$1);
var seq5796__$2 = cljs.core.next.call(null,seq5796__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__5797,G__5798,seq5796__$2);
});


//# sourceMappingURL=session.js.map?rel=1540234821007
