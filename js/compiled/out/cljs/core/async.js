// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__3420 = arguments.length;
switch (G__3420) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3421 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3421 = (function (f,blockable,meta3422){
this.f = f;
this.blockable = blockable;
this.meta3422 = meta3422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3423,meta3422__$1){
var self__ = this;
var _3423__$1 = this;
return (new cljs.core.async.t_cljs$core$async3421(self__.f,self__.blockable,meta3422__$1));
});

cljs.core.async.t_cljs$core$async3421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3423){
var self__ = this;
var _3423__$1 = this;
return self__.meta3422;
});

cljs.core.async.t_cljs$core$async3421.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3421.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async3421.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async3421.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async3421.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta3422","meta3422",480426980,null)], null);
});

cljs.core.async.t_cljs$core$async3421.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3421.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3421";

cljs.core.async.t_cljs$core$async3421.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async3421");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3421.
 */
cljs.core.async.__GT_t_cljs$core$async3421 = (function cljs$core$async$__GT_t_cljs$core$async3421(f__$1,blockable__$1,meta3422){
return (new cljs.core.async.t_cljs$core$async3421(f__$1,blockable__$1,meta3422));
});

}

return (new cljs.core.async.t_cljs$core$async3421(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__3427 = arguments.length;
switch (G__3427) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__3430 = arguments.length;
switch (G__3430) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__3433 = arguments.length;
switch (G__3433) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_3435 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_3435);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_3435,ret){
return (function (){
return fn1.call(null,val_3435);
});})(val_3435,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__3437 = arguments.length;
switch (G__3437) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4408__auto___3439 = n;
var x_3440 = (0);
while(true){
if((x_3440 < n__4408__auto___3439)){
(a[x_3440] = (0));

var G__3441 = (x_3440 + (1));
x_3440 = G__3441;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__3442 = (i + (1));
i = G__3442;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3443 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3443 = (function (flag,meta3444){
this.flag = flag;
this.meta3444 = meta3444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_3445,meta3444__$1){
var self__ = this;
var _3445__$1 = this;
return (new cljs.core.async.t_cljs$core$async3443(self__.flag,meta3444__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async3443.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_3445){
var self__ = this;
var _3445__$1 = this;
return self__.meta3444;
});})(flag))
;

cljs.core.async.t_cljs$core$async3443.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3443.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async3443.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async3443.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async3443.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta3444","meta3444",-1819142263,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async3443.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3443";

cljs.core.async.t_cljs$core$async3443.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async3443");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3443.
 */
cljs.core.async.__GT_t_cljs$core$async3443 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async3443(flag__$1,meta3444){
return (new cljs.core.async.t_cljs$core$async3443(flag__$1,meta3444));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async3443(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3446 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3446 = (function (flag,cb,meta3447){
this.flag = flag;
this.cb = cb;
this.meta3447 = meta3447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_3448,meta3447__$1){
var self__ = this;
var _3448__$1 = this;
return (new cljs.core.async.t_cljs$core$async3446(self__.flag,self__.cb,meta3447__$1));
});

cljs.core.async.t_cljs$core$async3446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_3448){
var self__ = this;
var _3448__$1 = this;
return self__.meta3447;
});

cljs.core.async.t_cljs$core$async3446.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3446.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async3446.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async3446.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async3446.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta3447","meta3447",931301531,null)], null);
});

cljs.core.async.t_cljs$core$async3446.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3446.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3446";

cljs.core.async.t_cljs$core$async3446.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async3446");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3446.
 */
cljs.core.async.__GT_t_cljs$core$async3446 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async3446(flag__$1,cb__$1,meta3447){
return (new cljs.core.async.t_cljs$core$async3446(flag__$1,cb__$1,meta3447));
});

}

return (new cljs.core.async.t_cljs$core$async3446(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__3449_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3449_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__3450_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__3450_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__3451 = (i + (1));
i = G__3451;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___3457 = arguments.length;
var i__4532__auto___3458 = (0);
while(true){
if((i__4532__auto___3458 < len__4531__auto___3457)){
args__4534__auto__.push((arguments[i__4532__auto___3458]));

var G__3459 = (i__4532__auto___3458 + (1));
i__4532__auto___3458 = G__3459;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__3454){
var map__3455 = p__3454;
var map__3455__$1 = ((((!((map__3455 == null)))?(((((map__3455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3455):map__3455);
var opts = map__3455__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq3452){
var G__3453 = cljs.core.first.call(null,seq3452);
var seq3452__$1 = cljs.core.next.call(null,seq3452);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__3453,seq3452__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__3461 = arguments.length;
switch (G__3461) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__3360__auto___3507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3360__auto___3507){
return (function (){
var f__3361__auto__ = (function (){var switch__3269__auto__ = ((function (c__3360__auto___3507){
return (function (state_3485){
var state_val_3486 = (state_3485[(1)]);
if((state_val_3486 === (7))){
var inst_3481 = (state_3485[(2)]);
var state_3485__$1 = state_3485;
var statearr_3487_3508 = state_3485__$1;
(statearr_3487_3508[(2)] = inst_3481);

(statearr_3487_3508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3486 === (1))){
var state_3485__$1 = state_3485;
var statearr_3488_3509 = state_3485__$1;
(statearr_3488_3509[(2)] = null);

(statearr_3488_3509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3486 === (4))){
var inst_3464 = (state_3485[(7)]);
var inst_3464__$1 = (state_3485[(2)]);
var inst_3465 = (inst_3464__$1 == null);
var state_3485__$1 = (function (){var statearr_3489 = state_3485;
(statearr_3489[(7)] = inst_3464__$1);

return statearr_3489;
})();
if(cljs.core.truth_(inst_3465)){
var statearr_3490_3510 = state_3485__$1;
(statearr_3490_3510[(1)] = (5));

} else {
var statearr_3491_3511 = state_3485__$1;
(statearr_3491_3511[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3486 === (13))){
var state_3485__$1 = state_3485;
var statearr_3492_3512 = state_3485__$1;
(statearr_3492_3512[(2)] = null);

(statearr_3492_3512[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3486 === (6))){
var inst_3464 = (state_3485[(7)]);
var state_3485__$1 = state_3485;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3485__$1,(11),to,inst_3464);
} else {
if((state_val_3486 === (3))){
var inst_3483 = (state_3485[(2)]);
var state_3485__$1 = state_3485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3485__$1,inst_3483);
} else {
if((state_val_3486 === (12))){
var state_3485__$1 = state_3485;
var statearr_3493_3513 = state_3485__$1;
(statearr_3493_3513[(2)] = null);

(statearr_3493_3513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3486 === (2))){
var state_3485__$1 = state_3485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3485__$1,(4),from);
} else {
if((state_val_3486 === (11))){
var inst_3474 = (state_3485[(2)]);
var state_3485__$1 = state_3485;
if(cljs.core.truth_(inst_3474)){
var statearr_3494_3514 = state_3485__$1;
(statearr_3494_3514[(1)] = (12));

} else {
var statearr_3495_3515 = state_3485__$1;
(statearr_3495_3515[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3486 === (9))){
var state_3485__$1 = state_3485;
var statearr_3496_3516 = state_3485__$1;
(statearr_3496_3516[(2)] = null);

(statearr_3496_3516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3486 === (5))){
var state_3485__$1 = state_3485;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3497_3517 = state_3485__$1;
(statearr_3497_3517[(1)] = (8));

} else {
var statearr_3498_3518 = state_3485__$1;
(statearr_3498_3518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3486 === (14))){
var inst_3479 = (state_3485[(2)]);
var state_3485__$1 = state_3485;
var statearr_3499_3519 = state_3485__$1;
(statearr_3499_3519[(2)] = inst_3479);

(statearr_3499_3519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3486 === (10))){
var inst_3471 = (state_3485[(2)]);
var state_3485__$1 = state_3485;
var statearr_3500_3520 = state_3485__$1;
(statearr_3500_3520[(2)] = inst_3471);

(statearr_3500_3520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3486 === (8))){
var inst_3468 = cljs.core.async.close_BANG_.call(null,to);
var state_3485__$1 = state_3485;
var statearr_3501_3521 = state_3485__$1;
(statearr_3501_3521[(2)] = inst_3468);

(statearr_3501_3521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3360__auto___3507))
;
return ((function (switch__3269__auto__,c__3360__auto___3507){
return (function() {
var cljs$core$async$state_machine__3270__auto__ = null;
var cljs$core$async$state_machine__3270__auto____0 = (function (){
var statearr_3502 = [null,null,null,null,null,null,null,null];
(statearr_3502[(0)] = cljs$core$async$state_machine__3270__auto__);

(statearr_3502[(1)] = (1));

return statearr_3502;
});
var cljs$core$async$state_machine__3270__auto____1 = (function (state_3485){
while(true){
var ret_value__3271__auto__ = (function (){try{while(true){
var result__3272__auto__ = switch__3269__auto__.call(null,state_3485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3272__auto__;
}
break;
}
}catch (e3503){if((e3503 instanceof Object)){
var ex__3273__auto__ = e3503;
var statearr_3504_3522 = state_3485;
(statearr_3504_3522[(5)] = ex__3273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3523 = state_3485;
state_3485 = G__3523;
continue;
} else {
return ret_value__3271__auto__;
}
break;
}
});
cljs$core$async$state_machine__3270__auto__ = function(state_3485){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3270__auto____1.call(this,state_3485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3270__auto____0;
cljs$core$async$state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3270__auto____1;
return cljs$core$async$state_machine__3270__auto__;
})()
;})(switch__3269__auto__,c__3360__auto___3507))
})();
var state__3362__auto__ = (function (){var statearr_3505 = f__3361__auto__.call(null);
(statearr_3505[(6)] = c__3360__auto___3507);

return statearr_3505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3362__auto__);
});})(c__3360__auto___3507))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__3524){
var vec__3525 = p__3524;
var v = cljs.core.nth.call(null,vec__3525,(0),null);
var p = cljs.core.nth.call(null,vec__3525,(1),null);
var job = vec__3525;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__3360__auto___3696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3360__auto___3696,res,vec__3525,v,p,job,jobs,results){
return (function (){
var f__3361__auto__ = (function (){var switch__3269__auto__ = ((function (c__3360__auto___3696,res,vec__3525,v,p,job,jobs,results){
return (function (state_3532){
var state_val_3533 = (state_3532[(1)]);
if((state_val_3533 === (1))){
var state_3532__$1 = state_3532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3532__$1,(2),res,v);
} else {
if((state_val_3533 === (2))){
var inst_3529 = (state_3532[(2)]);
var inst_3530 = cljs.core.async.close_BANG_.call(null,res);
var state_3532__$1 = (function (){var statearr_3534 = state_3532;
(statearr_3534[(7)] = inst_3529);

return statearr_3534;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3532__$1,inst_3530);
} else {
return null;
}
}
});})(c__3360__auto___3696,res,vec__3525,v,p,job,jobs,results))
;
return ((function (switch__3269__auto__,c__3360__auto___3696,res,vec__3525,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3270__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3270__auto____0 = (function (){
var statearr_3535 = [null,null,null,null,null,null,null,null];
(statearr_3535[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3270__auto__);

(statearr_3535[(1)] = (1));

return statearr_3535;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3270__auto____1 = (function (state_3532){
while(true){
var ret_value__3271__auto__ = (function (){try{while(true){
var result__3272__auto__ = switch__3269__auto__.call(null,state_3532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3272__auto__;
}
break;
}
}catch (e3536){if((e3536 instanceof Object)){
var ex__3273__auto__ = e3536;
var statearr_3537_3697 = state_3532;
(statearr_3537_3697[(5)] = ex__3273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3698 = state_3532;
state_3532 = G__3698;
continue;
} else {
return ret_value__3271__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3270__auto__ = function(state_3532){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3270__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3270__auto____1.call(this,state_3532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3270__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3270__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3270__auto__;
})()
;})(switch__3269__auto__,c__3360__auto___3696,res,vec__3525,v,p,job,jobs,results))
})();
var state__3362__auto__ = (function (){var statearr_3538 = f__3361__auto__.call(null);
(statearr_3538[(6)] = c__3360__auto___3696);

return statearr_3538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3362__auto__);
});})(c__3360__auto___3696,res,vec__3525,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__3539){
var vec__3540 = p__3539;
var v = cljs.core.nth.call(null,vec__3540,(0),null);
var p = cljs.core.nth.call(null,vec__3540,(1),null);
var job = vec__3540;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4408__auto___3699 = n;
var __3700 = (0);
while(true){
if((__3700 < n__4408__auto___3699)){
var G__3543_3701 = type;
var G__3543_3702__$1 = (((G__3543_3701 instanceof cljs.core.Keyword))?G__3543_3701.fqn:null);
switch (G__3543_3702__$1) {
case "compute":
var c__3360__auto___3704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__3700,c__3360__auto___3704,G__3543_3701,G__3543_3702__$1,n__4408__auto___3699,jobs,results,process,async){
return (function (){
var f__3361__auto__ = (function (){var switch__3269__auto__ = ((function (__3700,c__3360__auto___3704,G__3543_3701,G__3543_3702__$1,n__4408__auto___3699,jobs,results,process,async){
return (function (state_3556){
var state_val_3557 = (state_3556[(1)]);
if((state_val_3557 === (1))){
var state_3556__$1 = state_3556;
var statearr_3558_3705 = state_3556__$1;
(statearr_3558_3705[(2)] = null);

(statearr_3558_3705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3557 === (2))){
var state_3556__$1 = state_3556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3556__$1,(4),jobs);
} else {
if((state_val_3557 === (3))){
var inst_3554 = (state_3556[(2)]);
var state_3556__$1 = state_3556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3556__$1,inst_3554);
} else {
if((state_val_3557 === (4))){
var inst_3546 = (state_3556[(2)]);
var inst_3547 = process.call(null,inst_3546);
var state_3556__$1 = state_3556;
if(cljs.core.truth_(inst_3547)){
var statearr_3559_3706 = state_3556__$1;
(statearr_3559_3706[(1)] = (5));

} else {
var statearr_3560_3707 = state_3556__$1;
(statearr_3560_3707[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3557 === (5))){
var state_3556__$1 = state_3556;
var statearr_3561_3708 = state_3556__$1;
(statearr_3561_3708[(2)] = null);

(statearr_3561_3708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3557 === (6))){
var state_3556__$1 = state_3556;
var statearr_3562_3709 = state_3556__$1;
(statearr_3562_3709[(2)] = null);

(statearr_3562_3709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3557 === (7))){
var inst_3552 = (state_3556[(2)]);
var state_3556__$1 = state_3556;
var statearr_3563_3710 = state_3556__$1;
(statearr_3563_3710[(2)] = inst_3552);

(statearr_3563_3710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__3700,c__3360__auto___3704,G__3543_3701,G__3543_3702__$1,n__4408__auto___3699,jobs,results,process,async))
;
return ((function (__3700,switch__3269__auto__,c__3360__auto___3704,G__3543_3701,G__3543_3702__$1,n__4408__auto___3699,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3270__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3270__auto____0 = (function (){
var statearr_3564 = [null,null,null,null,null,null,null];
(statearr_3564[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3270__auto__);

(statearr_3564[(1)] = (1));

return statearr_3564;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3270__auto____1 = (function (state_3556){
while(true){
var ret_value__3271__auto__ = (function (){try{while(true){
var result__3272__auto__ = switch__3269__auto__.call(null,state_3556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3272__auto__;
}
break;
}
}catch (e3565){if((e3565 instanceof Object)){
var ex__3273__auto__ = e3565;
var statearr_3566_3711 = state_3556;
(statearr_3566_3711[(5)] = ex__3273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3712 = state_3556;
state_3556 = G__3712;
continue;
} else {
return ret_value__3271__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3270__auto__ = function(state_3556){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3270__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3270__auto____1.call(this,state_3556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3270__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3270__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3270__auto__;
})()
;})(__3700,switch__3269__auto__,c__3360__auto___3704,G__3543_3701,G__3543_3702__$1,n__4408__auto___3699,jobs,results,process,async))
})();
var state__3362__auto__ = (function (){var statearr_3567 = f__3361__auto__.call(null);
(statearr_3567[(6)] = c__3360__auto___3704);

return statearr_3567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3362__auto__);
});})(__3700,c__3360__auto___3704,G__3543_3701,G__3543_3702__$1,n__4408__auto___3699,jobs,results,process,async))
);


break;
case "async":
var c__3360__auto___3713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__3700,c__3360__auto___3713,G__3543_3701,G__3543_3702__$1,n__4408__auto___3699,jobs,results,process,async){
return (function (){
var f__3361__auto__ = (function (){var switch__3269__auto__ = ((function (__3700,c__3360__auto___3713,G__3543_3701,G__3543_3702__$1,n__4408__auto___3699,jobs,results,process,async){
return (function (state_3580){
var state_val_3581 = (state_3580[(1)]);
if((state_val_3581 === (1))){
var state_3580__$1 = state_3580;
var statearr_3582_3714 = state_3580__$1;
(statearr_3582_3714[(2)] = null);

(statearr_3582_3714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3581 === (2))){
var state_3580__$1 = state_3580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3580__$1,(4),jobs);
} else {
if((state_val_3581 === (3))){
var inst_3578 = (state_3580[(2)]);
var state_3580__$1 = state_3580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3580__$1,inst_3578);
} else {
if((state_val_3581 === (4))){
var inst_3570 = (state_3580[(2)]);
var inst_3571 = async.call(null,inst_3570);
var state_3580__$1 = state_3580;
if(cljs.core.truth_(inst_3571)){
var statearr_3583_3715 = state_3580__$1;
(statearr_3583_3715[(1)] = (5));

} else {
var statearr_3584_3716 = state_3580__$1;
(statearr_3584_3716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3581 === (5))){
var state_3580__$1 = state_3580;
var statearr_3585_3717 = state_3580__$1;
(statearr_3585_3717[(2)] = null);

(statearr_3585_3717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3581 === (6))){
var state_3580__$1 = state_3580;
var statearr_3586_3718 = state_3580__$1;
(statearr_3586_3718[(2)] = null);

(statearr_3586_3718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3581 === (7))){
var inst_3576 = (state_3580[(2)]);
var state_3580__$1 = state_3580;
var statearr_3587_3719 = state_3580__$1;
(statearr_3587_3719[(2)] = inst_3576);

(statearr_3587_3719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__3700,c__3360__auto___3713,G__3543_3701,G__3543_3702__$1,n__4408__auto___3699,jobs,results,process,async))
;
return ((function (__3700,switch__3269__auto__,c__3360__auto___3713,G__3543_3701,G__3543_3702__$1,n__4408__auto___3699,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3270__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3270__auto____0 = (function (){
var statearr_3588 = [null,null,null,null,null,null,null];
(statearr_3588[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3270__auto__);

(statearr_3588[(1)] = (1));

return statearr_3588;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3270__auto____1 = (function (state_3580){
while(true){
var ret_value__3271__auto__ = (function (){try{while(true){
var result__3272__auto__ = switch__3269__auto__.call(null,state_3580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3272__auto__;
}
break;
}
}catch (e3589){if((e3589 instanceof Object)){
var ex__3273__auto__ = e3589;
var statearr_3590_3720 = state_3580;
(statearr_3590_3720[(5)] = ex__3273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3589;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3721 = state_3580;
state_3580 = G__3721;
continue;
} else {
return ret_value__3271__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3270__auto__ = function(state_3580){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3270__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3270__auto____1.call(this,state_3580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3270__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3270__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3270__auto__;
})()
;})(__3700,switch__3269__auto__,c__3360__auto___3713,G__3543_3701,G__3543_3702__$1,n__4408__auto___3699,jobs,results,process,async))
})();
var state__3362__auto__ = (function (){var statearr_3591 = f__3361__auto__.call(null);
(statearr_3591[(6)] = c__3360__auto___3713);

return statearr_3591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3362__auto__);
});})(__3700,c__3360__auto___3713,G__3543_3701,G__3543_3702__$1,n__4408__auto___3699,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__3543_3702__$1)].join('')));

}

var G__3722 = (__3700 + (1));
__3700 = G__3722;
continue;
} else {
}
break;
}

var c__3360__auto___3723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3360__auto___3723,jobs,results,process,async){
return (function (){
var f__3361__auto__ = (function (){var switch__3269__auto__ = ((function (c__3360__auto___3723,jobs,results,process,async){
return (function (state_3613){
var state_val_3614 = (state_3613[(1)]);
if((state_val_3614 === (1))){
var state_3613__$1 = state_3613;
var statearr_3615_3724 = state_3613__$1;
(statearr_3615_3724[(2)] = null);

(statearr_3615_3724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3614 === (2))){
var state_3613__$1 = state_3613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3613__$1,(4),from);
} else {
if((state_val_3614 === (3))){
var inst_3611 = (state_3613[(2)]);
var state_3613__$1 = state_3613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3613__$1,inst_3611);
} else {
if((state_val_3614 === (4))){
var inst_3594 = (state_3613[(7)]);
var inst_3594__$1 = (state_3613[(2)]);
var inst_3595 = (inst_3594__$1 == null);
var state_3613__$1 = (function (){var statearr_3616 = state_3613;
(statearr_3616[(7)] = inst_3594__$1);

return statearr_3616;
})();
if(cljs.core.truth_(inst_3595)){
var statearr_3617_3725 = state_3613__$1;
(statearr_3617_3725[(1)] = (5));

} else {
var statearr_3618_3726 = state_3613__$1;
(statearr_3618_3726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3614 === (5))){
var inst_3597 = cljs.core.async.close_BANG_.call(null,jobs);
var state_3613__$1 = state_3613;
var statearr_3619_3727 = state_3613__$1;
(statearr_3619_3727[(2)] = inst_3597);

(statearr_3619_3727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3614 === (6))){
var inst_3599 = (state_3613[(8)]);
var inst_3594 = (state_3613[(7)]);
var inst_3599__$1 = cljs.core.async.chan.call(null,(1));
var inst_3600 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_3601 = [inst_3594,inst_3599__$1];
var inst_3602 = (new cljs.core.PersistentVector(null,2,(5),inst_3600,inst_3601,null));
var state_3613__$1 = (function (){var statearr_3620 = state_3613;
(statearr_3620[(8)] = inst_3599__$1);

return statearr_3620;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3613__$1,(8),jobs,inst_3602);
} else {
if((state_val_3614 === (7))){
var inst_3609 = (state_3613[(2)]);
var state_3613__$1 = state_3613;
var statearr_3621_3728 = state_3613__$1;
(statearr_3621_3728[(2)] = inst_3609);

(statearr_3621_3728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3614 === (8))){
var inst_3599 = (state_3613[(8)]);
var inst_3604 = (state_3613[(2)]);
var state_3613__$1 = (function (){var statearr_3622 = state_3613;
(statearr_3622[(9)] = inst_3604);

return statearr_3622;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3613__$1,(9),results,inst_3599);
} else {
if((state_val_3614 === (9))){
var inst_3606 = (state_3613[(2)]);
var state_3613__$1 = (function (){var statearr_3623 = state_3613;
(statearr_3623[(10)] = inst_3606);

return statearr_3623;
})();
var statearr_3624_3729 = state_3613__$1;
(statearr_3624_3729[(2)] = null);

(statearr_3624_3729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__3360__auto___3723,jobs,results,process,async))
;
return ((function (switch__3269__auto__,c__3360__auto___3723,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3270__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3270__auto____0 = (function (){
var statearr_3625 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_3625[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3270__auto__);

(statearr_3625[(1)] = (1));

return statearr_3625;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3270__auto____1 = (function (state_3613){
while(true){
var ret_value__3271__auto__ = (function (){try{while(true){
var result__3272__auto__ = switch__3269__auto__.call(null,state_3613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3272__auto__;
}
break;
}
}catch (e3626){if((e3626 instanceof Object)){
var ex__3273__auto__ = e3626;
var statearr_3627_3730 = state_3613;
(statearr_3627_3730[(5)] = ex__3273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3731 = state_3613;
state_3613 = G__3731;
continue;
} else {
return ret_value__3271__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3270__auto__ = function(state_3613){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3270__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3270__auto____1.call(this,state_3613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3270__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3270__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3270__auto__;
})()
;})(switch__3269__auto__,c__3360__auto___3723,jobs,results,process,async))
})();
var state__3362__auto__ = (function (){var statearr_3628 = f__3361__auto__.call(null);
(statearr_3628[(6)] = c__3360__auto___3723);

return statearr_3628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3362__auto__);
});})(c__3360__auto___3723,jobs,results,process,async))
);


var c__3360__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3360__auto__,jobs,results,process,async){
return (function (){
var f__3361__auto__ = (function (){var switch__3269__auto__ = ((function (c__3360__auto__,jobs,results,process,async){
return (function (state_3666){
var state_val_3667 = (state_3666[(1)]);
if((state_val_3667 === (7))){
var inst_3662 = (state_3666[(2)]);
var state_3666__$1 = state_3666;
var statearr_3668_3732 = state_3666__$1;
(statearr_3668_3732[(2)] = inst_3662);

(statearr_3668_3732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3667 === (20))){
var state_3666__$1 = state_3666;
var statearr_3669_3733 = state_3666__$1;
(statearr_3669_3733[(2)] = null);

(statearr_3669_3733[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3667 === (1))){
var state_3666__$1 = state_3666;
var statearr_3670_3734 = state_3666__$1;
(statearr_3670_3734[(2)] = null);

(statearr_3670_3734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3667 === (4))){
var inst_3631 = (state_3666[(7)]);
var inst_3631__$1 = (state_3666[(2)]);
var inst_3632 = (inst_3631__$1 == null);
var state_3666__$1 = (function (){var statearr_3671 = state_3666;
(statearr_3671[(7)] = inst_3631__$1);

return statearr_3671;
})();
if(cljs.core.truth_(inst_3632)){
var statearr_3672_3735 = state_3666__$1;
(statearr_3672_3735[(1)] = (5));

} else {
var statearr_3673_3736 = state_3666__$1;
(statearr_3673_3736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3667 === (15))){
var inst_3644 = (state_3666[(8)]);
var state_3666__$1 = state_3666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3666__$1,(18),to,inst_3644);
} else {
if((state_val_3667 === (21))){
var inst_3657 = (state_3666[(2)]);
var state_3666__$1 = state_3666;
var statearr_3674_3737 = state_3666__$1;
(statearr_3674_3737[(2)] = inst_3657);

(statearr_3674_3737[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3667 === (13))){
var inst_3659 = (state_3666[(2)]);
var state_3666__$1 = (function (){var statearr_3675 = state_3666;
(statearr_3675[(9)] = inst_3659);

return statearr_3675;
})();
var statearr_3676_3738 = state_3666__$1;
(statearr_3676_3738[(2)] = null);

(statearr_3676_3738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3667 === (6))){
var inst_3631 = (state_3666[(7)]);
var state_3666__$1 = state_3666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3666__$1,(11),inst_3631);
} else {
if((state_val_3667 === (17))){
var inst_3652 = (state_3666[(2)]);
var state_3666__$1 = state_3666;
if(cljs.core.truth_(inst_3652)){
var statearr_3677_3739 = state_3666__$1;
(statearr_3677_3739[(1)] = (19));

} else {
var statearr_3678_3740 = state_3666__$1;
(statearr_3678_3740[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3667 === (3))){
var inst_3664 = (state_3666[(2)]);
var state_3666__$1 = state_3666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3666__$1,inst_3664);
} else {
if((state_val_3667 === (12))){
var inst_3641 = (state_3666[(10)]);
var state_3666__$1 = state_3666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3666__$1,(14),inst_3641);
} else {
if((state_val_3667 === (2))){
var state_3666__$1 = state_3666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3666__$1,(4),results);
} else {
if((state_val_3667 === (19))){
var state_3666__$1 = state_3666;
var statearr_3679_3741 = state_3666__$1;
(statearr_3679_3741[(2)] = null);

(statearr_3679_3741[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3667 === (11))){
var inst_3641 = (state_3666[(2)]);
var state_3666__$1 = (function (){var statearr_3680 = state_3666;
(statearr_3680[(10)] = inst_3641);

return statearr_3680;
})();
var statearr_3681_3742 = state_3666__$1;
(statearr_3681_3742[(2)] = null);

(statearr_3681_3742[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3667 === (9))){
var state_3666__$1 = state_3666;
var statearr_3682_3743 = state_3666__$1;
(statearr_3682_3743[(2)] = null);

(statearr_3682_3743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3667 === (5))){
var state_3666__$1 = state_3666;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3683_3744 = state_3666__$1;
(statearr_3683_3744[(1)] = (8));

} else {
var statearr_3684_3745 = state_3666__$1;
(statearr_3684_3745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3667 === (14))){
var inst_3646 = (state_3666[(11)]);
var inst_3644 = (state_3666[(8)]);
var inst_3644__$1 = (state_3666[(2)]);
var inst_3645 = (inst_3644__$1 == null);
var inst_3646__$1 = cljs.core.not.call(null,inst_3645);
var state_3666__$1 = (function (){var statearr_3685 = state_3666;
(statearr_3685[(11)] = inst_3646__$1);

(statearr_3685[(8)] = inst_3644__$1);

return statearr_3685;
})();
if(inst_3646__$1){
var statearr_3686_3746 = state_3666__$1;
(statearr_3686_3746[(1)] = (15));

} else {
var statearr_3687_3747 = state_3666__$1;
(statearr_3687_3747[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3667 === (16))){
var inst_3646 = (state_3666[(11)]);
var state_3666__$1 = state_3666;
var statearr_3688_3748 = state_3666__$1;
(statearr_3688_3748[(2)] = inst_3646);

(statearr_3688_3748[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3667 === (10))){
var inst_3638 = (state_3666[(2)]);
var state_3666__$1 = state_3666;
var statearr_3689_3749 = state_3666__$1;
(statearr_3689_3749[(2)] = inst_3638);

(statearr_3689_3749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3667 === (18))){
var inst_3649 = (state_3666[(2)]);
var state_3666__$1 = state_3666;
var statearr_3690_3750 = state_3666__$1;
(statearr_3690_3750[(2)] = inst_3649);

(statearr_3690_3750[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3667 === (8))){
var inst_3635 = cljs.core.async.close_BANG_.call(null,to);
var state_3666__$1 = state_3666;
var statearr_3691_3751 = state_3666__$1;
(statearr_3691_3751[(2)] = inst_3635);

(statearr_3691_3751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3360__auto__,jobs,results,process,async))
;
return ((function (switch__3269__auto__,c__3360__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__3270__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__3270__auto____0 = (function (){
var statearr_3692 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_3692[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__3270__auto__);

(statearr_3692[(1)] = (1));

return statearr_3692;
});
var cljs$core$async$pipeline_STAR__$_state_machine__3270__auto____1 = (function (state_3666){
while(true){
var ret_value__3271__auto__ = (function (){try{while(true){
var result__3272__auto__ = switch__3269__auto__.call(null,state_3666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3272__auto__;
}
break;
}
}catch (e3693){if((e3693 instanceof Object)){
var ex__3273__auto__ = e3693;
var statearr_3694_3752 = state_3666;
(statearr_3694_3752[(5)] = ex__3273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3753 = state_3666;
state_3666 = G__3753;
continue;
} else {
return ret_value__3271__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__3270__auto__ = function(state_3666){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__3270__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__3270__auto____1.call(this,state_3666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__3270__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__3270__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__3270__auto__;
})()
;})(switch__3269__auto__,c__3360__auto__,jobs,results,process,async))
})();
var state__3362__auto__ = (function (){var statearr_3695 = f__3361__auto__.call(null);
(statearr_3695[(6)] = c__3360__auto__);

return statearr_3695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3362__auto__);
});})(c__3360__auto__,jobs,results,process,async))
);

return c__3360__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__3755 = arguments.length;
switch (G__3755) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__3758 = arguments.length;
switch (G__3758) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__3761 = arguments.length;
switch (G__3761) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__3360__auto___3810 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3360__auto___3810,tc,fc){
return (function (){
var f__3361__auto__ = (function (){var switch__3269__auto__ = ((function (c__3360__auto___3810,tc,fc){
return (function (state_3787){
var state_val_3788 = (state_3787[(1)]);
if((state_val_3788 === (7))){
var inst_3783 = (state_3787[(2)]);
var state_3787__$1 = state_3787;
var statearr_3789_3811 = state_3787__$1;
(statearr_3789_3811[(2)] = inst_3783);

(statearr_3789_3811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (1))){
var state_3787__$1 = state_3787;
var statearr_3790_3812 = state_3787__$1;
(statearr_3790_3812[(2)] = null);

(statearr_3790_3812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (4))){
var inst_3764 = (state_3787[(7)]);
var inst_3764__$1 = (state_3787[(2)]);
var inst_3765 = (inst_3764__$1 == null);
var state_3787__$1 = (function (){var statearr_3791 = state_3787;
(statearr_3791[(7)] = inst_3764__$1);

return statearr_3791;
})();
if(cljs.core.truth_(inst_3765)){
var statearr_3792_3813 = state_3787__$1;
(statearr_3792_3813[(1)] = (5));

} else {
var statearr_3793_3814 = state_3787__$1;
(statearr_3793_3814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (13))){
var state_3787__$1 = state_3787;
var statearr_3794_3815 = state_3787__$1;
(statearr_3794_3815[(2)] = null);

(statearr_3794_3815[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (6))){
var inst_3764 = (state_3787[(7)]);
var inst_3770 = p.call(null,inst_3764);
var state_3787__$1 = state_3787;
if(cljs.core.truth_(inst_3770)){
var statearr_3795_3816 = state_3787__$1;
(statearr_3795_3816[(1)] = (9));

} else {
var statearr_3796_3817 = state_3787__$1;
(statearr_3796_3817[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (3))){
var inst_3785 = (state_3787[(2)]);
var state_3787__$1 = state_3787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3787__$1,inst_3785);
} else {
if((state_val_3788 === (12))){
var state_3787__$1 = state_3787;
var statearr_3797_3818 = state_3787__$1;
(statearr_3797_3818[(2)] = null);

(statearr_3797_3818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (2))){
var state_3787__$1 = state_3787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3787__$1,(4),ch);
} else {
if((state_val_3788 === (11))){
var inst_3764 = (state_3787[(7)]);
var inst_3774 = (state_3787[(2)]);
var state_3787__$1 = state_3787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3787__$1,(8),inst_3774,inst_3764);
} else {
if((state_val_3788 === (9))){
var state_3787__$1 = state_3787;
var statearr_3798_3819 = state_3787__$1;
(statearr_3798_3819[(2)] = tc);

(statearr_3798_3819[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (5))){
var inst_3767 = cljs.core.async.close_BANG_.call(null,tc);
var inst_3768 = cljs.core.async.close_BANG_.call(null,fc);
var state_3787__$1 = (function (){var statearr_3799 = state_3787;
(statearr_3799[(8)] = inst_3767);

return statearr_3799;
})();
var statearr_3800_3820 = state_3787__$1;
(statearr_3800_3820[(2)] = inst_3768);

(statearr_3800_3820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (14))){
var inst_3781 = (state_3787[(2)]);
var state_3787__$1 = state_3787;
var statearr_3801_3821 = state_3787__$1;
(statearr_3801_3821[(2)] = inst_3781);

(statearr_3801_3821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (10))){
var state_3787__$1 = state_3787;
var statearr_3802_3822 = state_3787__$1;
(statearr_3802_3822[(2)] = fc);

(statearr_3802_3822[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3788 === (8))){
var inst_3776 = (state_3787[(2)]);
var state_3787__$1 = state_3787;
if(cljs.core.truth_(inst_3776)){
var statearr_3803_3823 = state_3787__$1;
(statearr_3803_3823[(1)] = (12));

} else {
var statearr_3804_3824 = state_3787__$1;
(statearr_3804_3824[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3360__auto___3810,tc,fc))
;
return ((function (switch__3269__auto__,c__3360__auto___3810,tc,fc){
return (function() {
var cljs$core$async$state_machine__3270__auto__ = null;
var cljs$core$async$state_machine__3270__auto____0 = (function (){
var statearr_3805 = [null,null,null,null,null,null,null,null,null];
(statearr_3805[(0)] = cljs$core$async$state_machine__3270__auto__);

(statearr_3805[(1)] = (1));

return statearr_3805;
});
var cljs$core$async$state_machine__3270__auto____1 = (function (state_3787){
while(true){
var ret_value__3271__auto__ = (function (){try{while(true){
var result__3272__auto__ = switch__3269__auto__.call(null,state_3787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3272__auto__;
}
break;
}
}catch (e3806){if((e3806 instanceof Object)){
var ex__3273__auto__ = e3806;
var statearr_3807_3825 = state_3787;
(statearr_3807_3825[(5)] = ex__3273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3826 = state_3787;
state_3787 = G__3826;
continue;
} else {
return ret_value__3271__auto__;
}
break;
}
});
cljs$core$async$state_machine__3270__auto__ = function(state_3787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3270__auto____1.call(this,state_3787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3270__auto____0;
cljs$core$async$state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3270__auto____1;
return cljs$core$async$state_machine__3270__auto__;
})()
;})(switch__3269__auto__,c__3360__auto___3810,tc,fc))
})();
var state__3362__auto__ = (function (){var statearr_3808 = f__3361__auto__.call(null);
(statearr_3808[(6)] = c__3360__auto___3810);

return statearr_3808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3362__auto__);
});})(c__3360__auto___3810,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__3360__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3360__auto__){
return (function (){
var f__3361__auto__ = (function (){var switch__3269__auto__ = ((function (c__3360__auto__){
return (function (state_3847){
var state_val_3848 = (state_3847[(1)]);
if((state_val_3848 === (7))){
var inst_3843 = (state_3847[(2)]);
var state_3847__$1 = state_3847;
var statearr_3849_3867 = state_3847__$1;
(statearr_3849_3867[(2)] = inst_3843);

(statearr_3849_3867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3848 === (1))){
var inst_3827 = init;
var state_3847__$1 = (function (){var statearr_3850 = state_3847;
(statearr_3850[(7)] = inst_3827);

return statearr_3850;
})();
var statearr_3851_3868 = state_3847__$1;
(statearr_3851_3868[(2)] = null);

(statearr_3851_3868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3848 === (4))){
var inst_3830 = (state_3847[(8)]);
var inst_3830__$1 = (state_3847[(2)]);
var inst_3831 = (inst_3830__$1 == null);
var state_3847__$1 = (function (){var statearr_3852 = state_3847;
(statearr_3852[(8)] = inst_3830__$1);

return statearr_3852;
})();
if(cljs.core.truth_(inst_3831)){
var statearr_3853_3869 = state_3847__$1;
(statearr_3853_3869[(1)] = (5));

} else {
var statearr_3854_3870 = state_3847__$1;
(statearr_3854_3870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3848 === (6))){
var inst_3834 = (state_3847[(9)]);
var inst_3830 = (state_3847[(8)]);
var inst_3827 = (state_3847[(7)]);
var inst_3834__$1 = f.call(null,inst_3827,inst_3830);
var inst_3835 = cljs.core.reduced_QMARK_.call(null,inst_3834__$1);
var state_3847__$1 = (function (){var statearr_3855 = state_3847;
(statearr_3855[(9)] = inst_3834__$1);

return statearr_3855;
})();
if(inst_3835){
var statearr_3856_3871 = state_3847__$1;
(statearr_3856_3871[(1)] = (8));

} else {
var statearr_3857_3872 = state_3847__$1;
(statearr_3857_3872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3848 === (3))){
var inst_3845 = (state_3847[(2)]);
var state_3847__$1 = state_3847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3847__$1,inst_3845);
} else {
if((state_val_3848 === (2))){
var state_3847__$1 = state_3847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3847__$1,(4),ch);
} else {
if((state_val_3848 === (9))){
var inst_3834 = (state_3847[(9)]);
var inst_3827 = inst_3834;
var state_3847__$1 = (function (){var statearr_3858 = state_3847;
(statearr_3858[(7)] = inst_3827);

return statearr_3858;
})();
var statearr_3859_3873 = state_3847__$1;
(statearr_3859_3873[(2)] = null);

(statearr_3859_3873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3848 === (5))){
var inst_3827 = (state_3847[(7)]);
var state_3847__$1 = state_3847;
var statearr_3860_3874 = state_3847__$1;
(statearr_3860_3874[(2)] = inst_3827);

(statearr_3860_3874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3848 === (10))){
var inst_3841 = (state_3847[(2)]);
var state_3847__$1 = state_3847;
var statearr_3861_3875 = state_3847__$1;
(statearr_3861_3875[(2)] = inst_3841);

(statearr_3861_3875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3848 === (8))){
var inst_3834 = (state_3847[(9)]);
var inst_3837 = cljs.core.deref.call(null,inst_3834);
var state_3847__$1 = state_3847;
var statearr_3862_3876 = state_3847__$1;
(statearr_3862_3876[(2)] = inst_3837);

(statearr_3862_3876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__3360__auto__))
;
return ((function (switch__3269__auto__,c__3360__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__3270__auto__ = null;
var cljs$core$async$reduce_$_state_machine__3270__auto____0 = (function (){
var statearr_3863 = [null,null,null,null,null,null,null,null,null,null];
(statearr_3863[(0)] = cljs$core$async$reduce_$_state_machine__3270__auto__);

(statearr_3863[(1)] = (1));

return statearr_3863;
});
var cljs$core$async$reduce_$_state_machine__3270__auto____1 = (function (state_3847){
while(true){
var ret_value__3271__auto__ = (function (){try{while(true){
var result__3272__auto__ = switch__3269__auto__.call(null,state_3847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3272__auto__;
}
break;
}
}catch (e3864){if((e3864 instanceof Object)){
var ex__3273__auto__ = e3864;
var statearr_3865_3877 = state_3847;
(statearr_3865_3877[(5)] = ex__3273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3878 = state_3847;
state_3847 = G__3878;
continue;
} else {
return ret_value__3271__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__3270__auto__ = function(state_3847){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__3270__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__3270__auto____1.call(this,state_3847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__3270__auto____0;
cljs$core$async$reduce_$_state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__3270__auto____1;
return cljs$core$async$reduce_$_state_machine__3270__auto__;
})()
;})(switch__3269__auto__,c__3360__auto__))
})();
var state__3362__auto__ = (function (){var statearr_3866 = f__3361__auto__.call(null);
(statearr_3866[(6)] = c__3360__auto__);

return statearr_3866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3362__auto__);
});})(c__3360__auto__))
);

return c__3360__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__3360__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3360__auto__,f__$1){
return (function (){
var f__3361__auto__ = (function (){var switch__3269__auto__ = ((function (c__3360__auto__,f__$1){
return (function (state_3884){
var state_val_3885 = (state_3884[(1)]);
if((state_val_3885 === (1))){
var inst_3879 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_3884__$1 = state_3884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_3884__$1,(2),inst_3879);
} else {
if((state_val_3885 === (2))){
var inst_3881 = (state_3884[(2)]);
var inst_3882 = f__$1.call(null,inst_3881);
var state_3884__$1 = state_3884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3884__$1,inst_3882);
} else {
return null;
}
}
});})(c__3360__auto__,f__$1))
;
return ((function (switch__3269__auto__,c__3360__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__3270__auto__ = null;
var cljs$core$async$transduce_$_state_machine__3270__auto____0 = (function (){
var statearr_3886 = [null,null,null,null,null,null,null];
(statearr_3886[(0)] = cljs$core$async$transduce_$_state_machine__3270__auto__);

(statearr_3886[(1)] = (1));

return statearr_3886;
});
var cljs$core$async$transduce_$_state_machine__3270__auto____1 = (function (state_3884){
while(true){
var ret_value__3271__auto__ = (function (){try{while(true){
var result__3272__auto__ = switch__3269__auto__.call(null,state_3884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3272__auto__;
}
break;
}
}catch (e3887){if((e3887 instanceof Object)){
var ex__3273__auto__ = e3887;
var statearr_3888_3890 = state_3884;
(statearr_3888_3890[(5)] = ex__3273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3887;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3891 = state_3884;
state_3884 = G__3891;
continue;
} else {
return ret_value__3271__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__3270__auto__ = function(state_3884){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__3270__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__3270__auto____1.call(this,state_3884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__3270__auto____0;
cljs$core$async$transduce_$_state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__3270__auto____1;
return cljs$core$async$transduce_$_state_machine__3270__auto__;
})()
;})(switch__3269__auto__,c__3360__auto__,f__$1))
})();
var state__3362__auto__ = (function (){var statearr_3889 = f__3361__auto__.call(null);
(statearr_3889[(6)] = c__3360__auto__);

return statearr_3889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3362__auto__);
});})(c__3360__auto__,f__$1))
);

return c__3360__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__3893 = arguments.length;
switch (G__3893) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__3360__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3360__auto__){
return (function (){
var f__3361__auto__ = (function (){var switch__3269__auto__ = ((function (c__3360__auto__){
return (function (state_3918){
var state_val_3919 = (state_3918[(1)]);
if((state_val_3919 === (7))){
var inst_3900 = (state_3918[(2)]);
var state_3918__$1 = state_3918;
var statearr_3920_3941 = state_3918__$1;
(statearr_3920_3941[(2)] = inst_3900);

(statearr_3920_3941[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3919 === (1))){
var inst_3894 = cljs.core.seq.call(null,coll);
var inst_3895 = inst_3894;
var state_3918__$1 = (function (){var statearr_3921 = state_3918;
(statearr_3921[(7)] = inst_3895);

return statearr_3921;
})();
var statearr_3922_3942 = state_3918__$1;
(statearr_3922_3942[(2)] = null);

(statearr_3922_3942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3919 === (4))){
var inst_3895 = (state_3918[(7)]);
var inst_3898 = cljs.core.first.call(null,inst_3895);
var state_3918__$1 = state_3918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_3918__$1,(7),ch,inst_3898);
} else {
if((state_val_3919 === (13))){
var inst_3912 = (state_3918[(2)]);
var state_3918__$1 = state_3918;
var statearr_3923_3943 = state_3918__$1;
(statearr_3923_3943[(2)] = inst_3912);

(statearr_3923_3943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3919 === (6))){
var inst_3903 = (state_3918[(2)]);
var state_3918__$1 = state_3918;
if(cljs.core.truth_(inst_3903)){
var statearr_3924_3944 = state_3918__$1;
(statearr_3924_3944[(1)] = (8));

} else {
var statearr_3925_3945 = state_3918__$1;
(statearr_3925_3945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3919 === (3))){
var inst_3916 = (state_3918[(2)]);
var state_3918__$1 = state_3918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_3918__$1,inst_3916);
} else {
if((state_val_3919 === (12))){
var state_3918__$1 = state_3918;
var statearr_3926_3946 = state_3918__$1;
(statearr_3926_3946[(2)] = null);

(statearr_3926_3946[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3919 === (2))){
var inst_3895 = (state_3918[(7)]);
var state_3918__$1 = state_3918;
if(cljs.core.truth_(inst_3895)){
var statearr_3927_3947 = state_3918__$1;
(statearr_3927_3947[(1)] = (4));

} else {
var statearr_3928_3948 = state_3918__$1;
(statearr_3928_3948[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3919 === (11))){
var inst_3909 = cljs.core.async.close_BANG_.call(null,ch);
var state_3918__$1 = state_3918;
var statearr_3929_3949 = state_3918__$1;
(statearr_3929_3949[(2)] = inst_3909);

(statearr_3929_3949[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3919 === (9))){
var state_3918__$1 = state_3918;
if(cljs.core.truth_(close_QMARK_)){
var statearr_3930_3950 = state_3918__$1;
(statearr_3930_3950[(1)] = (11));

} else {
var statearr_3931_3951 = state_3918__$1;
(statearr_3931_3951[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3919 === (5))){
var inst_3895 = (state_3918[(7)]);
var state_3918__$1 = state_3918;
var statearr_3932_3952 = state_3918__$1;
(statearr_3932_3952[(2)] = inst_3895);

(statearr_3932_3952[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3919 === (10))){
var inst_3914 = (state_3918[(2)]);
var state_3918__$1 = state_3918;
var statearr_3933_3953 = state_3918__$1;
(statearr_3933_3953[(2)] = inst_3914);

(statearr_3933_3953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_3919 === (8))){
var inst_3895 = (state_3918[(7)]);
var inst_3905 = cljs.core.next.call(null,inst_3895);
var inst_3895__$1 = inst_3905;
var state_3918__$1 = (function (){var statearr_3934 = state_3918;
(statearr_3934[(7)] = inst_3895__$1);

return statearr_3934;
})();
var statearr_3935_3954 = state_3918__$1;
(statearr_3935_3954[(2)] = null);

(statearr_3935_3954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3360__auto__))
;
return ((function (switch__3269__auto__,c__3360__auto__){
return (function() {
var cljs$core$async$state_machine__3270__auto__ = null;
var cljs$core$async$state_machine__3270__auto____0 = (function (){
var statearr_3936 = [null,null,null,null,null,null,null,null];
(statearr_3936[(0)] = cljs$core$async$state_machine__3270__auto__);

(statearr_3936[(1)] = (1));

return statearr_3936;
});
var cljs$core$async$state_machine__3270__auto____1 = (function (state_3918){
while(true){
var ret_value__3271__auto__ = (function (){try{while(true){
var result__3272__auto__ = switch__3269__auto__.call(null,state_3918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3272__auto__;
}
break;
}
}catch (e3937){if((e3937 instanceof Object)){
var ex__3273__auto__ = e3937;
var statearr_3938_3955 = state_3918;
(statearr_3938_3955[(5)] = ex__3273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_3918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e3937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__3956 = state_3918;
state_3918 = G__3956;
continue;
} else {
return ret_value__3271__auto__;
}
break;
}
});
cljs$core$async$state_machine__3270__auto__ = function(state_3918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3270__auto____1.call(this,state_3918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3270__auto____0;
cljs$core$async$state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3270__auto____1;
return cljs$core$async$state_machine__3270__auto__;
})()
;})(switch__3269__auto__,c__3360__auto__))
})();
var state__3362__auto__ = (function (){var statearr_3939 = f__3361__auto__.call(null);
(statearr_3939[(6)] = c__3360__auto__);

return statearr_3939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3362__auto__);
});})(c__3360__auto__))
);

return c__3360__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async3957 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async3957 = (function (ch,cs,meta3958){
this.ch = ch;
this.cs = cs;
this.meta3958 = meta3958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async3957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_3959,meta3958__$1){
var self__ = this;
var _3959__$1 = this;
return (new cljs.core.async.t_cljs$core$async3957(self__.ch,self__.cs,meta3958__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async3957.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_3959){
var self__ = this;
var _3959__$1 = this;
return self__.meta3958;
});})(cs))
;

cljs.core.async.t_cljs$core$async3957.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3957.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async3957.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async3957.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async3957.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async3957.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async3957.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta3958","meta3958",-2072483968,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async3957.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async3957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async3957";

cljs.core.async.t_cljs$core$async3957.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async3957");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async3957.
 */
cljs.core.async.__GT_t_cljs$core$async3957 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async3957(ch__$1,cs__$1,meta3958){
return (new cljs.core.async.t_cljs$core$async3957(ch__$1,cs__$1,meta3958));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async3957(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__3360__auto___4179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3360__auto___4179,cs,m,dchan,dctr,done){
return (function (){
var f__3361__auto__ = (function (){var switch__3269__auto__ = ((function (c__3360__auto___4179,cs,m,dchan,dctr,done){
return (function (state_4094){
var state_val_4095 = (state_4094[(1)]);
if((state_val_4095 === (7))){
var inst_4090 = (state_4094[(2)]);
var state_4094__$1 = state_4094;
var statearr_4096_4180 = state_4094__$1;
(statearr_4096_4180[(2)] = inst_4090);

(statearr_4096_4180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (20))){
var inst_3993 = (state_4094[(7)]);
var inst_4005 = cljs.core.first.call(null,inst_3993);
var inst_4006 = cljs.core.nth.call(null,inst_4005,(0),null);
var inst_4007 = cljs.core.nth.call(null,inst_4005,(1),null);
var state_4094__$1 = (function (){var statearr_4097 = state_4094;
(statearr_4097[(8)] = inst_4006);

return statearr_4097;
})();
if(cljs.core.truth_(inst_4007)){
var statearr_4098_4181 = state_4094__$1;
(statearr_4098_4181[(1)] = (22));

} else {
var statearr_4099_4182 = state_4094__$1;
(statearr_4099_4182[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (27))){
var inst_3962 = (state_4094[(9)]);
var inst_4037 = (state_4094[(10)]);
var inst_4035 = (state_4094[(11)]);
var inst_4042 = (state_4094[(12)]);
var inst_4042__$1 = cljs.core._nth.call(null,inst_4035,inst_4037);
var inst_4043 = cljs.core.async.put_BANG_.call(null,inst_4042__$1,inst_3962,done);
var state_4094__$1 = (function (){var statearr_4100 = state_4094;
(statearr_4100[(12)] = inst_4042__$1);

return statearr_4100;
})();
if(cljs.core.truth_(inst_4043)){
var statearr_4101_4183 = state_4094__$1;
(statearr_4101_4183[(1)] = (30));

} else {
var statearr_4102_4184 = state_4094__$1;
(statearr_4102_4184[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (1))){
var state_4094__$1 = state_4094;
var statearr_4103_4185 = state_4094__$1;
(statearr_4103_4185[(2)] = null);

(statearr_4103_4185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (24))){
var inst_3993 = (state_4094[(7)]);
var inst_4012 = (state_4094[(2)]);
var inst_4013 = cljs.core.next.call(null,inst_3993);
var inst_3971 = inst_4013;
var inst_3972 = null;
var inst_3973 = (0);
var inst_3974 = (0);
var state_4094__$1 = (function (){var statearr_4104 = state_4094;
(statearr_4104[(13)] = inst_3972);

(statearr_4104[(14)] = inst_3973);

(statearr_4104[(15)] = inst_3971);

(statearr_4104[(16)] = inst_4012);

(statearr_4104[(17)] = inst_3974);

return statearr_4104;
})();
var statearr_4105_4186 = state_4094__$1;
(statearr_4105_4186[(2)] = null);

(statearr_4105_4186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (39))){
var state_4094__$1 = state_4094;
var statearr_4109_4187 = state_4094__$1;
(statearr_4109_4187[(2)] = null);

(statearr_4109_4187[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (4))){
var inst_3962 = (state_4094[(9)]);
var inst_3962__$1 = (state_4094[(2)]);
var inst_3963 = (inst_3962__$1 == null);
var state_4094__$1 = (function (){var statearr_4110 = state_4094;
(statearr_4110[(9)] = inst_3962__$1);

return statearr_4110;
})();
if(cljs.core.truth_(inst_3963)){
var statearr_4111_4188 = state_4094__$1;
(statearr_4111_4188[(1)] = (5));

} else {
var statearr_4112_4189 = state_4094__$1;
(statearr_4112_4189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (15))){
var inst_3972 = (state_4094[(13)]);
var inst_3973 = (state_4094[(14)]);
var inst_3971 = (state_4094[(15)]);
var inst_3974 = (state_4094[(17)]);
var inst_3989 = (state_4094[(2)]);
var inst_3990 = (inst_3974 + (1));
var tmp4106 = inst_3972;
var tmp4107 = inst_3973;
var tmp4108 = inst_3971;
var inst_3971__$1 = tmp4108;
var inst_3972__$1 = tmp4106;
var inst_3973__$1 = tmp4107;
var inst_3974__$1 = inst_3990;
var state_4094__$1 = (function (){var statearr_4113 = state_4094;
(statearr_4113[(13)] = inst_3972__$1);

(statearr_4113[(14)] = inst_3973__$1);

(statearr_4113[(15)] = inst_3971__$1);

(statearr_4113[(18)] = inst_3989);

(statearr_4113[(17)] = inst_3974__$1);

return statearr_4113;
})();
var statearr_4114_4190 = state_4094__$1;
(statearr_4114_4190[(2)] = null);

(statearr_4114_4190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (21))){
var inst_4016 = (state_4094[(2)]);
var state_4094__$1 = state_4094;
var statearr_4118_4191 = state_4094__$1;
(statearr_4118_4191[(2)] = inst_4016);

(statearr_4118_4191[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (31))){
var inst_4042 = (state_4094[(12)]);
var inst_4046 = done.call(null,null);
var inst_4047 = cljs.core.async.untap_STAR_.call(null,m,inst_4042);
var state_4094__$1 = (function (){var statearr_4119 = state_4094;
(statearr_4119[(19)] = inst_4046);

return statearr_4119;
})();
var statearr_4120_4192 = state_4094__$1;
(statearr_4120_4192[(2)] = inst_4047);

(statearr_4120_4192[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (32))){
var inst_4036 = (state_4094[(20)]);
var inst_4037 = (state_4094[(10)]);
var inst_4035 = (state_4094[(11)]);
var inst_4034 = (state_4094[(21)]);
var inst_4049 = (state_4094[(2)]);
var inst_4050 = (inst_4037 + (1));
var tmp4115 = inst_4036;
var tmp4116 = inst_4035;
var tmp4117 = inst_4034;
var inst_4034__$1 = tmp4117;
var inst_4035__$1 = tmp4116;
var inst_4036__$1 = tmp4115;
var inst_4037__$1 = inst_4050;
var state_4094__$1 = (function (){var statearr_4121 = state_4094;
(statearr_4121[(20)] = inst_4036__$1);

(statearr_4121[(10)] = inst_4037__$1);

(statearr_4121[(22)] = inst_4049);

(statearr_4121[(11)] = inst_4035__$1);

(statearr_4121[(21)] = inst_4034__$1);

return statearr_4121;
})();
var statearr_4122_4193 = state_4094__$1;
(statearr_4122_4193[(2)] = null);

(statearr_4122_4193[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (40))){
var inst_4062 = (state_4094[(23)]);
var inst_4066 = done.call(null,null);
var inst_4067 = cljs.core.async.untap_STAR_.call(null,m,inst_4062);
var state_4094__$1 = (function (){var statearr_4123 = state_4094;
(statearr_4123[(24)] = inst_4066);

return statearr_4123;
})();
var statearr_4124_4194 = state_4094__$1;
(statearr_4124_4194[(2)] = inst_4067);

(statearr_4124_4194[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (33))){
var inst_4053 = (state_4094[(25)]);
var inst_4055 = cljs.core.chunked_seq_QMARK_.call(null,inst_4053);
var state_4094__$1 = state_4094;
if(inst_4055){
var statearr_4125_4195 = state_4094__$1;
(statearr_4125_4195[(1)] = (36));

} else {
var statearr_4126_4196 = state_4094__$1;
(statearr_4126_4196[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (13))){
var inst_3983 = (state_4094[(26)]);
var inst_3986 = cljs.core.async.close_BANG_.call(null,inst_3983);
var state_4094__$1 = state_4094;
var statearr_4127_4197 = state_4094__$1;
(statearr_4127_4197[(2)] = inst_3986);

(statearr_4127_4197[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (22))){
var inst_4006 = (state_4094[(8)]);
var inst_4009 = cljs.core.async.close_BANG_.call(null,inst_4006);
var state_4094__$1 = state_4094;
var statearr_4128_4198 = state_4094__$1;
(statearr_4128_4198[(2)] = inst_4009);

(statearr_4128_4198[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (36))){
var inst_4053 = (state_4094[(25)]);
var inst_4057 = cljs.core.chunk_first.call(null,inst_4053);
var inst_4058 = cljs.core.chunk_rest.call(null,inst_4053);
var inst_4059 = cljs.core.count.call(null,inst_4057);
var inst_4034 = inst_4058;
var inst_4035 = inst_4057;
var inst_4036 = inst_4059;
var inst_4037 = (0);
var state_4094__$1 = (function (){var statearr_4129 = state_4094;
(statearr_4129[(20)] = inst_4036);

(statearr_4129[(10)] = inst_4037);

(statearr_4129[(11)] = inst_4035);

(statearr_4129[(21)] = inst_4034);

return statearr_4129;
})();
var statearr_4130_4199 = state_4094__$1;
(statearr_4130_4199[(2)] = null);

(statearr_4130_4199[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (41))){
var inst_4053 = (state_4094[(25)]);
var inst_4069 = (state_4094[(2)]);
var inst_4070 = cljs.core.next.call(null,inst_4053);
var inst_4034 = inst_4070;
var inst_4035 = null;
var inst_4036 = (0);
var inst_4037 = (0);
var state_4094__$1 = (function (){var statearr_4131 = state_4094;
(statearr_4131[(20)] = inst_4036);

(statearr_4131[(10)] = inst_4037);

(statearr_4131[(11)] = inst_4035);

(statearr_4131[(27)] = inst_4069);

(statearr_4131[(21)] = inst_4034);

return statearr_4131;
})();
var statearr_4132_4200 = state_4094__$1;
(statearr_4132_4200[(2)] = null);

(statearr_4132_4200[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (43))){
var state_4094__$1 = state_4094;
var statearr_4133_4201 = state_4094__$1;
(statearr_4133_4201[(2)] = null);

(statearr_4133_4201[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (29))){
var inst_4078 = (state_4094[(2)]);
var state_4094__$1 = state_4094;
var statearr_4134_4202 = state_4094__$1;
(statearr_4134_4202[(2)] = inst_4078);

(statearr_4134_4202[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (44))){
var inst_4087 = (state_4094[(2)]);
var state_4094__$1 = (function (){var statearr_4135 = state_4094;
(statearr_4135[(28)] = inst_4087);

return statearr_4135;
})();
var statearr_4136_4203 = state_4094__$1;
(statearr_4136_4203[(2)] = null);

(statearr_4136_4203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (6))){
var inst_4026 = (state_4094[(29)]);
var inst_4025 = cljs.core.deref.call(null,cs);
var inst_4026__$1 = cljs.core.keys.call(null,inst_4025);
var inst_4027 = cljs.core.count.call(null,inst_4026__$1);
var inst_4028 = cljs.core.reset_BANG_.call(null,dctr,inst_4027);
var inst_4033 = cljs.core.seq.call(null,inst_4026__$1);
var inst_4034 = inst_4033;
var inst_4035 = null;
var inst_4036 = (0);
var inst_4037 = (0);
var state_4094__$1 = (function (){var statearr_4137 = state_4094;
(statearr_4137[(20)] = inst_4036);

(statearr_4137[(10)] = inst_4037);

(statearr_4137[(11)] = inst_4035);

(statearr_4137[(30)] = inst_4028);

(statearr_4137[(29)] = inst_4026__$1);

(statearr_4137[(21)] = inst_4034);

return statearr_4137;
})();
var statearr_4138_4204 = state_4094__$1;
(statearr_4138_4204[(2)] = null);

(statearr_4138_4204[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (28))){
var inst_4053 = (state_4094[(25)]);
var inst_4034 = (state_4094[(21)]);
var inst_4053__$1 = cljs.core.seq.call(null,inst_4034);
var state_4094__$1 = (function (){var statearr_4139 = state_4094;
(statearr_4139[(25)] = inst_4053__$1);

return statearr_4139;
})();
if(inst_4053__$1){
var statearr_4140_4205 = state_4094__$1;
(statearr_4140_4205[(1)] = (33));

} else {
var statearr_4141_4206 = state_4094__$1;
(statearr_4141_4206[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (25))){
var inst_4036 = (state_4094[(20)]);
var inst_4037 = (state_4094[(10)]);
var inst_4039 = (inst_4037 < inst_4036);
var inst_4040 = inst_4039;
var state_4094__$1 = state_4094;
if(cljs.core.truth_(inst_4040)){
var statearr_4142_4207 = state_4094__$1;
(statearr_4142_4207[(1)] = (27));

} else {
var statearr_4143_4208 = state_4094__$1;
(statearr_4143_4208[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (34))){
var state_4094__$1 = state_4094;
var statearr_4144_4209 = state_4094__$1;
(statearr_4144_4209[(2)] = null);

(statearr_4144_4209[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (17))){
var state_4094__$1 = state_4094;
var statearr_4145_4210 = state_4094__$1;
(statearr_4145_4210[(2)] = null);

(statearr_4145_4210[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (3))){
var inst_4092 = (state_4094[(2)]);
var state_4094__$1 = state_4094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4094__$1,inst_4092);
} else {
if((state_val_4095 === (12))){
var inst_4021 = (state_4094[(2)]);
var state_4094__$1 = state_4094;
var statearr_4146_4211 = state_4094__$1;
(statearr_4146_4211[(2)] = inst_4021);

(statearr_4146_4211[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (2))){
var state_4094__$1 = state_4094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4094__$1,(4),ch);
} else {
if((state_val_4095 === (23))){
var state_4094__$1 = state_4094;
var statearr_4147_4212 = state_4094__$1;
(statearr_4147_4212[(2)] = null);

(statearr_4147_4212[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (35))){
var inst_4076 = (state_4094[(2)]);
var state_4094__$1 = state_4094;
var statearr_4148_4213 = state_4094__$1;
(statearr_4148_4213[(2)] = inst_4076);

(statearr_4148_4213[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (19))){
var inst_3993 = (state_4094[(7)]);
var inst_3997 = cljs.core.chunk_first.call(null,inst_3993);
var inst_3998 = cljs.core.chunk_rest.call(null,inst_3993);
var inst_3999 = cljs.core.count.call(null,inst_3997);
var inst_3971 = inst_3998;
var inst_3972 = inst_3997;
var inst_3973 = inst_3999;
var inst_3974 = (0);
var state_4094__$1 = (function (){var statearr_4149 = state_4094;
(statearr_4149[(13)] = inst_3972);

(statearr_4149[(14)] = inst_3973);

(statearr_4149[(15)] = inst_3971);

(statearr_4149[(17)] = inst_3974);

return statearr_4149;
})();
var statearr_4150_4214 = state_4094__$1;
(statearr_4150_4214[(2)] = null);

(statearr_4150_4214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (11))){
var inst_3993 = (state_4094[(7)]);
var inst_3971 = (state_4094[(15)]);
var inst_3993__$1 = cljs.core.seq.call(null,inst_3971);
var state_4094__$1 = (function (){var statearr_4151 = state_4094;
(statearr_4151[(7)] = inst_3993__$1);

return statearr_4151;
})();
if(inst_3993__$1){
var statearr_4152_4215 = state_4094__$1;
(statearr_4152_4215[(1)] = (16));

} else {
var statearr_4153_4216 = state_4094__$1;
(statearr_4153_4216[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (9))){
var inst_4023 = (state_4094[(2)]);
var state_4094__$1 = state_4094;
var statearr_4154_4217 = state_4094__$1;
(statearr_4154_4217[(2)] = inst_4023);

(statearr_4154_4217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (5))){
var inst_3969 = cljs.core.deref.call(null,cs);
var inst_3970 = cljs.core.seq.call(null,inst_3969);
var inst_3971 = inst_3970;
var inst_3972 = null;
var inst_3973 = (0);
var inst_3974 = (0);
var state_4094__$1 = (function (){var statearr_4155 = state_4094;
(statearr_4155[(13)] = inst_3972);

(statearr_4155[(14)] = inst_3973);

(statearr_4155[(15)] = inst_3971);

(statearr_4155[(17)] = inst_3974);

return statearr_4155;
})();
var statearr_4156_4218 = state_4094__$1;
(statearr_4156_4218[(2)] = null);

(statearr_4156_4218[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (14))){
var state_4094__$1 = state_4094;
var statearr_4157_4219 = state_4094__$1;
(statearr_4157_4219[(2)] = null);

(statearr_4157_4219[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (45))){
var inst_4084 = (state_4094[(2)]);
var state_4094__$1 = state_4094;
var statearr_4158_4220 = state_4094__$1;
(statearr_4158_4220[(2)] = inst_4084);

(statearr_4158_4220[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (26))){
var inst_4026 = (state_4094[(29)]);
var inst_4080 = (state_4094[(2)]);
var inst_4081 = cljs.core.seq.call(null,inst_4026);
var state_4094__$1 = (function (){var statearr_4159 = state_4094;
(statearr_4159[(31)] = inst_4080);

return statearr_4159;
})();
if(inst_4081){
var statearr_4160_4221 = state_4094__$1;
(statearr_4160_4221[(1)] = (42));

} else {
var statearr_4161_4222 = state_4094__$1;
(statearr_4161_4222[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (16))){
var inst_3993 = (state_4094[(7)]);
var inst_3995 = cljs.core.chunked_seq_QMARK_.call(null,inst_3993);
var state_4094__$1 = state_4094;
if(inst_3995){
var statearr_4162_4223 = state_4094__$1;
(statearr_4162_4223[(1)] = (19));

} else {
var statearr_4163_4224 = state_4094__$1;
(statearr_4163_4224[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (38))){
var inst_4073 = (state_4094[(2)]);
var state_4094__$1 = state_4094;
var statearr_4164_4225 = state_4094__$1;
(statearr_4164_4225[(2)] = inst_4073);

(statearr_4164_4225[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (30))){
var state_4094__$1 = state_4094;
var statearr_4165_4226 = state_4094__$1;
(statearr_4165_4226[(2)] = null);

(statearr_4165_4226[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (10))){
var inst_3972 = (state_4094[(13)]);
var inst_3974 = (state_4094[(17)]);
var inst_3982 = cljs.core._nth.call(null,inst_3972,inst_3974);
var inst_3983 = cljs.core.nth.call(null,inst_3982,(0),null);
var inst_3984 = cljs.core.nth.call(null,inst_3982,(1),null);
var state_4094__$1 = (function (){var statearr_4166 = state_4094;
(statearr_4166[(26)] = inst_3983);

return statearr_4166;
})();
if(cljs.core.truth_(inst_3984)){
var statearr_4167_4227 = state_4094__$1;
(statearr_4167_4227[(1)] = (13));

} else {
var statearr_4168_4228 = state_4094__$1;
(statearr_4168_4228[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (18))){
var inst_4019 = (state_4094[(2)]);
var state_4094__$1 = state_4094;
var statearr_4169_4229 = state_4094__$1;
(statearr_4169_4229[(2)] = inst_4019);

(statearr_4169_4229[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (42))){
var state_4094__$1 = state_4094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4094__$1,(45),dchan);
} else {
if((state_val_4095 === (37))){
var inst_3962 = (state_4094[(9)]);
var inst_4053 = (state_4094[(25)]);
var inst_4062 = (state_4094[(23)]);
var inst_4062__$1 = cljs.core.first.call(null,inst_4053);
var inst_4063 = cljs.core.async.put_BANG_.call(null,inst_4062__$1,inst_3962,done);
var state_4094__$1 = (function (){var statearr_4170 = state_4094;
(statearr_4170[(23)] = inst_4062__$1);

return statearr_4170;
})();
if(cljs.core.truth_(inst_4063)){
var statearr_4171_4230 = state_4094__$1;
(statearr_4171_4230[(1)] = (39));

} else {
var statearr_4172_4231 = state_4094__$1;
(statearr_4172_4231[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4095 === (8))){
var inst_3973 = (state_4094[(14)]);
var inst_3974 = (state_4094[(17)]);
var inst_3976 = (inst_3974 < inst_3973);
var inst_3977 = inst_3976;
var state_4094__$1 = state_4094;
if(cljs.core.truth_(inst_3977)){
var statearr_4173_4232 = state_4094__$1;
(statearr_4173_4232[(1)] = (10));

} else {
var statearr_4174_4233 = state_4094__$1;
(statearr_4174_4233[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3360__auto___4179,cs,m,dchan,dctr,done))
;
return ((function (switch__3269__auto__,c__3360__auto___4179,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__3270__auto__ = null;
var cljs$core$async$mult_$_state_machine__3270__auto____0 = (function (){
var statearr_4175 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4175[(0)] = cljs$core$async$mult_$_state_machine__3270__auto__);

(statearr_4175[(1)] = (1));

return statearr_4175;
});
var cljs$core$async$mult_$_state_machine__3270__auto____1 = (function (state_4094){
while(true){
var ret_value__3271__auto__ = (function (){try{while(true){
var result__3272__auto__ = switch__3269__auto__.call(null,state_4094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3272__auto__;
}
break;
}
}catch (e4176){if((e4176 instanceof Object)){
var ex__3273__auto__ = e4176;
var statearr_4177_4234 = state_4094;
(statearr_4177_4234[(5)] = ex__3273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4235 = state_4094;
state_4094 = G__4235;
continue;
} else {
return ret_value__3271__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__3270__auto__ = function(state_4094){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__3270__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__3270__auto____1.call(this,state_4094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__3270__auto____0;
cljs$core$async$mult_$_state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__3270__auto____1;
return cljs$core$async$mult_$_state_machine__3270__auto__;
})()
;})(switch__3269__auto__,c__3360__auto___4179,cs,m,dchan,dctr,done))
})();
var state__3362__auto__ = (function (){var statearr_4178 = f__3361__auto__.call(null);
(statearr_4178[(6)] = c__3360__auto___4179);

return statearr_4178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3362__auto__);
});})(c__3360__auto___4179,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__4237 = arguments.length;
switch (G__4237) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___4249 = arguments.length;
var i__4532__auto___4250 = (0);
while(true){
if((i__4532__auto___4250 < len__4531__auto___4249)){
args__4534__auto__.push((arguments[i__4532__auto___4250]));

var G__4251 = (i__4532__auto___4250 + (1));
i__4532__auto___4250 = G__4251;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__4243){
var map__4244 = p__4243;
var map__4244__$1 = ((((!((map__4244 == null)))?(((((map__4244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__4244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4244):map__4244);
var opts = map__4244__$1;
var statearr_4246_4252 = state;
(statearr_4246_4252[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__4244,map__4244__$1,opts){
return (function (val){
var statearr_4247_4253 = state;
(statearr_4247_4253[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__4244,map__4244__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_4248_4254 = state;
(statearr_4248_4254[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq4239){
var G__4240 = cljs.core.first.call(null,seq4239);
var seq4239__$1 = cljs.core.next.call(null,seq4239);
var G__4241 = cljs.core.first.call(null,seq4239__$1);
var seq4239__$2 = cljs.core.next.call(null,seq4239__$1);
var G__4242 = cljs.core.first.call(null,seq4239__$2);
var seq4239__$3 = cljs.core.next.call(null,seq4239__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__4240,G__4241,G__4242,seq4239__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4255 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4255 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta4256){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta4256 = meta4256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_4257,meta4256__$1){
var self__ = this;
var _4257__$1 = this;
return (new cljs.core.async.t_cljs$core$async4255(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta4256__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4255.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_4257){
var self__ = this;
var _4257__$1 = this;
return self__.meta4256;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4255.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4255.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4255.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4255.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4255.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4255.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4255.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4255.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4255.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta4256","meta4256",-1557789897,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async4255.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4255.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4255";

cljs.core.async.t_cljs$core$async4255.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async4255");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4255.
 */
cljs.core.async.__GT_t_cljs$core$async4255 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async4255(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta4256){
return (new cljs.core.async.t_cljs$core$async4255(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta4256));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async4255(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__3360__auto___4419 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3360__auto___4419,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__3361__auto__ = (function (){var switch__3269__auto__ = ((function (c__3360__auto___4419,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_4359){
var state_val_4360 = (state_4359[(1)]);
if((state_val_4360 === (7))){
var inst_4274 = (state_4359[(2)]);
var state_4359__$1 = state_4359;
var statearr_4361_4420 = state_4359__$1;
(statearr_4361_4420[(2)] = inst_4274);

(statearr_4361_4420[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (20))){
var inst_4286 = (state_4359[(7)]);
var state_4359__$1 = state_4359;
var statearr_4362_4421 = state_4359__$1;
(statearr_4362_4421[(2)] = inst_4286);

(statearr_4362_4421[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (27))){
var state_4359__$1 = state_4359;
var statearr_4363_4422 = state_4359__$1;
(statearr_4363_4422[(2)] = null);

(statearr_4363_4422[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (1))){
var inst_4261 = (state_4359[(8)]);
var inst_4261__$1 = calc_state.call(null);
var inst_4263 = (inst_4261__$1 == null);
var inst_4264 = cljs.core.not.call(null,inst_4263);
var state_4359__$1 = (function (){var statearr_4364 = state_4359;
(statearr_4364[(8)] = inst_4261__$1);

return statearr_4364;
})();
if(inst_4264){
var statearr_4365_4423 = state_4359__$1;
(statearr_4365_4423[(1)] = (2));

} else {
var statearr_4366_4424 = state_4359__$1;
(statearr_4366_4424[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (24))){
var inst_4319 = (state_4359[(9)]);
var inst_4310 = (state_4359[(10)]);
var inst_4333 = (state_4359[(11)]);
var inst_4333__$1 = inst_4310.call(null,inst_4319);
var state_4359__$1 = (function (){var statearr_4367 = state_4359;
(statearr_4367[(11)] = inst_4333__$1);

return statearr_4367;
})();
if(cljs.core.truth_(inst_4333__$1)){
var statearr_4368_4425 = state_4359__$1;
(statearr_4368_4425[(1)] = (29));

} else {
var statearr_4369_4426 = state_4359__$1;
(statearr_4369_4426[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (4))){
var inst_4277 = (state_4359[(2)]);
var state_4359__$1 = state_4359;
if(cljs.core.truth_(inst_4277)){
var statearr_4370_4427 = state_4359__$1;
(statearr_4370_4427[(1)] = (8));

} else {
var statearr_4371_4428 = state_4359__$1;
(statearr_4371_4428[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (15))){
var inst_4304 = (state_4359[(2)]);
var state_4359__$1 = state_4359;
if(cljs.core.truth_(inst_4304)){
var statearr_4372_4429 = state_4359__$1;
(statearr_4372_4429[(1)] = (19));

} else {
var statearr_4373_4430 = state_4359__$1;
(statearr_4373_4430[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (21))){
var inst_4309 = (state_4359[(12)]);
var inst_4309__$1 = (state_4359[(2)]);
var inst_4310 = cljs.core.get.call(null,inst_4309__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_4311 = cljs.core.get.call(null,inst_4309__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_4312 = cljs.core.get.call(null,inst_4309__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_4359__$1 = (function (){var statearr_4374 = state_4359;
(statearr_4374[(10)] = inst_4310);

(statearr_4374[(13)] = inst_4311);

(statearr_4374[(12)] = inst_4309__$1);

return statearr_4374;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_4359__$1,(22),inst_4312);
} else {
if((state_val_4360 === (31))){
var inst_4341 = (state_4359[(2)]);
var state_4359__$1 = state_4359;
if(cljs.core.truth_(inst_4341)){
var statearr_4375_4431 = state_4359__$1;
(statearr_4375_4431[(1)] = (32));

} else {
var statearr_4376_4432 = state_4359__$1;
(statearr_4376_4432[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (32))){
var inst_4318 = (state_4359[(14)]);
var state_4359__$1 = state_4359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4359__$1,(35),out,inst_4318);
} else {
if((state_val_4360 === (33))){
var inst_4309 = (state_4359[(12)]);
var inst_4286 = inst_4309;
var state_4359__$1 = (function (){var statearr_4377 = state_4359;
(statearr_4377[(7)] = inst_4286);

return statearr_4377;
})();
var statearr_4378_4433 = state_4359__$1;
(statearr_4378_4433[(2)] = null);

(statearr_4378_4433[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (13))){
var inst_4286 = (state_4359[(7)]);
var inst_4293 = inst_4286.cljs$lang$protocol_mask$partition0$;
var inst_4294 = (inst_4293 & (64));
var inst_4295 = inst_4286.cljs$core$ISeq$;
var inst_4296 = (cljs.core.PROTOCOL_SENTINEL === inst_4295);
var inst_4297 = ((inst_4294) || (inst_4296));
var state_4359__$1 = state_4359;
if(cljs.core.truth_(inst_4297)){
var statearr_4379_4434 = state_4359__$1;
(statearr_4379_4434[(1)] = (16));

} else {
var statearr_4380_4435 = state_4359__$1;
(statearr_4380_4435[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (22))){
var inst_4319 = (state_4359[(9)]);
var inst_4318 = (state_4359[(14)]);
var inst_4317 = (state_4359[(2)]);
var inst_4318__$1 = cljs.core.nth.call(null,inst_4317,(0),null);
var inst_4319__$1 = cljs.core.nth.call(null,inst_4317,(1),null);
var inst_4320 = (inst_4318__$1 == null);
var inst_4321 = cljs.core._EQ_.call(null,inst_4319__$1,change);
var inst_4322 = ((inst_4320) || (inst_4321));
var state_4359__$1 = (function (){var statearr_4381 = state_4359;
(statearr_4381[(9)] = inst_4319__$1);

(statearr_4381[(14)] = inst_4318__$1);

return statearr_4381;
})();
if(cljs.core.truth_(inst_4322)){
var statearr_4382_4436 = state_4359__$1;
(statearr_4382_4436[(1)] = (23));

} else {
var statearr_4383_4437 = state_4359__$1;
(statearr_4383_4437[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (36))){
var inst_4309 = (state_4359[(12)]);
var inst_4286 = inst_4309;
var state_4359__$1 = (function (){var statearr_4384 = state_4359;
(statearr_4384[(7)] = inst_4286);

return statearr_4384;
})();
var statearr_4385_4438 = state_4359__$1;
(statearr_4385_4438[(2)] = null);

(statearr_4385_4438[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (29))){
var inst_4333 = (state_4359[(11)]);
var state_4359__$1 = state_4359;
var statearr_4386_4439 = state_4359__$1;
(statearr_4386_4439[(2)] = inst_4333);

(statearr_4386_4439[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (6))){
var state_4359__$1 = state_4359;
var statearr_4387_4440 = state_4359__$1;
(statearr_4387_4440[(2)] = false);

(statearr_4387_4440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (28))){
var inst_4329 = (state_4359[(2)]);
var inst_4330 = calc_state.call(null);
var inst_4286 = inst_4330;
var state_4359__$1 = (function (){var statearr_4388 = state_4359;
(statearr_4388[(15)] = inst_4329);

(statearr_4388[(7)] = inst_4286);

return statearr_4388;
})();
var statearr_4389_4441 = state_4359__$1;
(statearr_4389_4441[(2)] = null);

(statearr_4389_4441[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (25))){
var inst_4355 = (state_4359[(2)]);
var state_4359__$1 = state_4359;
var statearr_4390_4442 = state_4359__$1;
(statearr_4390_4442[(2)] = inst_4355);

(statearr_4390_4442[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (34))){
var inst_4353 = (state_4359[(2)]);
var state_4359__$1 = state_4359;
var statearr_4391_4443 = state_4359__$1;
(statearr_4391_4443[(2)] = inst_4353);

(statearr_4391_4443[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (17))){
var state_4359__$1 = state_4359;
var statearr_4392_4444 = state_4359__$1;
(statearr_4392_4444[(2)] = false);

(statearr_4392_4444[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (3))){
var state_4359__$1 = state_4359;
var statearr_4393_4445 = state_4359__$1;
(statearr_4393_4445[(2)] = false);

(statearr_4393_4445[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (12))){
var inst_4357 = (state_4359[(2)]);
var state_4359__$1 = state_4359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4359__$1,inst_4357);
} else {
if((state_val_4360 === (2))){
var inst_4261 = (state_4359[(8)]);
var inst_4266 = inst_4261.cljs$lang$protocol_mask$partition0$;
var inst_4267 = (inst_4266 & (64));
var inst_4268 = inst_4261.cljs$core$ISeq$;
var inst_4269 = (cljs.core.PROTOCOL_SENTINEL === inst_4268);
var inst_4270 = ((inst_4267) || (inst_4269));
var state_4359__$1 = state_4359;
if(cljs.core.truth_(inst_4270)){
var statearr_4394_4446 = state_4359__$1;
(statearr_4394_4446[(1)] = (5));

} else {
var statearr_4395_4447 = state_4359__$1;
(statearr_4395_4447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (23))){
var inst_4318 = (state_4359[(14)]);
var inst_4324 = (inst_4318 == null);
var state_4359__$1 = state_4359;
if(cljs.core.truth_(inst_4324)){
var statearr_4396_4448 = state_4359__$1;
(statearr_4396_4448[(1)] = (26));

} else {
var statearr_4397_4449 = state_4359__$1;
(statearr_4397_4449[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (35))){
var inst_4344 = (state_4359[(2)]);
var state_4359__$1 = state_4359;
if(cljs.core.truth_(inst_4344)){
var statearr_4398_4450 = state_4359__$1;
(statearr_4398_4450[(1)] = (36));

} else {
var statearr_4399_4451 = state_4359__$1;
(statearr_4399_4451[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (19))){
var inst_4286 = (state_4359[(7)]);
var inst_4306 = cljs.core.apply.call(null,cljs.core.hash_map,inst_4286);
var state_4359__$1 = state_4359;
var statearr_4400_4452 = state_4359__$1;
(statearr_4400_4452[(2)] = inst_4306);

(statearr_4400_4452[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (11))){
var inst_4286 = (state_4359[(7)]);
var inst_4290 = (inst_4286 == null);
var inst_4291 = cljs.core.not.call(null,inst_4290);
var state_4359__$1 = state_4359;
if(inst_4291){
var statearr_4401_4453 = state_4359__$1;
(statearr_4401_4453[(1)] = (13));

} else {
var statearr_4402_4454 = state_4359__$1;
(statearr_4402_4454[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (9))){
var inst_4261 = (state_4359[(8)]);
var state_4359__$1 = state_4359;
var statearr_4403_4455 = state_4359__$1;
(statearr_4403_4455[(2)] = inst_4261);

(statearr_4403_4455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (5))){
var state_4359__$1 = state_4359;
var statearr_4404_4456 = state_4359__$1;
(statearr_4404_4456[(2)] = true);

(statearr_4404_4456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (14))){
var state_4359__$1 = state_4359;
var statearr_4405_4457 = state_4359__$1;
(statearr_4405_4457[(2)] = false);

(statearr_4405_4457[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (26))){
var inst_4319 = (state_4359[(9)]);
var inst_4326 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_4319);
var state_4359__$1 = state_4359;
var statearr_4406_4458 = state_4359__$1;
(statearr_4406_4458[(2)] = inst_4326);

(statearr_4406_4458[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (16))){
var state_4359__$1 = state_4359;
var statearr_4407_4459 = state_4359__$1;
(statearr_4407_4459[(2)] = true);

(statearr_4407_4459[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (38))){
var inst_4349 = (state_4359[(2)]);
var state_4359__$1 = state_4359;
var statearr_4408_4460 = state_4359__$1;
(statearr_4408_4460[(2)] = inst_4349);

(statearr_4408_4460[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (30))){
var inst_4319 = (state_4359[(9)]);
var inst_4310 = (state_4359[(10)]);
var inst_4311 = (state_4359[(13)]);
var inst_4336 = cljs.core.empty_QMARK_.call(null,inst_4310);
var inst_4337 = inst_4311.call(null,inst_4319);
var inst_4338 = cljs.core.not.call(null,inst_4337);
var inst_4339 = ((inst_4336) && (inst_4338));
var state_4359__$1 = state_4359;
var statearr_4409_4461 = state_4359__$1;
(statearr_4409_4461[(2)] = inst_4339);

(statearr_4409_4461[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (10))){
var inst_4261 = (state_4359[(8)]);
var inst_4282 = (state_4359[(2)]);
var inst_4283 = cljs.core.get.call(null,inst_4282,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_4284 = cljs.core.get.call(null,inst_4282,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_4285 = cljs.core.get.call(null,inst_4282,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_4286 = inst_4261;
var state_4359__$1 = (function (){var statearr_4410 = state_4359;
(statearr_4410[(16)] = inst_4283);

(statearr_4410[(17)] = inst_4284);

(statearr_4410[(7)] = inst_4286);

(statearr_4410[(18)] = inst_4285);

return statearr_4410;
})();
var statearr_4411_4462 = state_4359__$1;
(statearr_4411_4462[(2)] = null);

(statearr_4411_4462[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (18))){
var inst_4301 = (state_4359[(2)]);
var state_4359__$1 = state_4359;
var statearr_4412_4463 = state_4359__$1;
(statearr_4412_4463[(2)] = inst_4301);

(statearr_4412_4463[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (37))){
var state_4359__$1 = state_4359;
var statearr_4413_4464 = state_4359__$1;
(statearr_4413_4464[(2)] = null);

(statearr_4413_4464[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4360 === (8))){
var inst_4261 = (state_4359[(8)]);
var inst_4279 = cljs.core.apply.call(null,cljs.core.hash_map,inst_4261);
var state_4359__$1 = state_4359;
var statearr_4414_4465 = state_4359__$1;
(statearr_4414_4465[(2)] = inst_4279);

(statearr_4414_4465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3360__auto___4419,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__3269__auto__,c__3360__auto___4419,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__3270__auto__ = null;
var cljs$core$async$mix_$_state_machine__3270__auto____0 = (function (){
var statearr_4415 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4415[(0)] = cljs$core$async$mix_$_state_machine__3270__auto__);

(statearr_4415[(1)] = (1));

return statearr_4415;
});
var cljs$core$async$mix_$_state_machine__3270__auto____1 = (function (state_4359){
while(true){
var ret_value__3271__auto__ = (function (){try{while(true){
var result__3272__auto__ = switch__3269__auto__.call(null,state_4359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3272__auto__;
}
break;
}
}catch (e4416){if((e4416 instanceof Object)){
var ex__3273__auto__ = e4416;
var statearr_4417_4466 = state_4359;
(statearr_4417_4466[(5)] = ex__3273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4467 = state_4359;
state_4359 = G__4467;
continue;
} else {
return ret_value__3271__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__3270__auto__ = function(state_4359){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__3270__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__3270__auto____1.call(this,state_4359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__3270__auto____0;
cljs$core$async$mix_$_state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__3270__auto____1;
return cljs$core$async$mix_$_state_machine__3270__auto__;
})()
;})(switch__3269__auto__,c__3360__auto___4419,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__3362__auto__ = (function (){var statearr_4418 = f__3361__auto__.call(null);
(statearr_4418[(6)] = c__3360__auto___4419);

return statearr_4418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3362__auto__);
});})(c__3360__auto___4419,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__4469 = arguments.length;
switch (G__4469) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__4473 = arguments.length;
switch (G__4473) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__4471_SHARP_){
if(cljs.core.truth_(p1__4471_SHARP_.call(null,topic))){
return p1__4471_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__4471_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4474 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4474 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta4475){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta4475 = meta4475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_4476,meta4475__$1){
var self__ = this;
var _4476__$1 = this;
return (new cljs.core.async.t_cljs$core$async4474(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta4475__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4474.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_4476){
var self__ = this;
var _4476__$1 = this;
return self__.meta4475;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4474.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4474.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4474.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4474.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4474.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4474.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4474.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4474.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta4475","meta4475",1676539066,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async4474.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4474";

cljs.core.async.t_cljs$core$async4474.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async4474");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4474.
 */
cljs.core.async.__GT_t_cljs$core$async4474 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async4474(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta4475){
return (new cljs.core.async.t_cljs$core$async4474(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta4475));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async4474(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__3360__auto___4594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3360__auto___4594,mults,ensure_mult,p){
return (function (){
var f__3361__auto__ = (function (){var switch__3269__auto__ = ((function (c__3360__auto___4594,mults,ensure_mult,p){
return (function (state_4548){
var state_val_4549 = (state_4548[(1)]);
if((state_val_4549 === (7))){
var inst_4544 = (state_4548[(2)]);
var state_4548__$1 = state_4548;
var statearr_4550_4595 = state_4548__$1;
(statearr_4550_4595[(2)] = inst_4544);

(statearr_4550_4595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4549 === (20))){
var state_4548__$1 = state_4548;
var statearr_4551_4596 = state_4548__$1;
(statearr_4551_4596[(2)] = null);

(statearr_4551_4596[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4549 === (1))){
var state_4548__$1 = state_4548;
var statearr_4552_4597 = state_4548__$1;
(statearr_4552_4597[(2)] = null);

(statearr_4552_4597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4549 === (24))){
var inst_4527 = (state_4548[(7)]);
var inst_4536 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_4527);
var state_4548__$1 = state_4548;
var statearr_4553_4598 = state_4548__$1;
(statearr_4553_4598[(2)] = inst_4536);

(statearr_4553_4598[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4549 === (4))){
var inst_4479 = (state_4548[(8)]);
var inst_4479__$1 = (state_4548[(2)]);
var inst_4480 = (inst_4479__$1 == null);
var state_4548__$1 = (function (){var statearr_4554 = state_4548;
(statearr_4554[(8)] = inst_4479__$1);

return statearr_4554;
})();
if(cljs.core.truth_(inst_4480)){
var statearr_4555_4599 = state_4548__$1;
(statearr_4555_4599[(1)] = (5));

} else {
var statearr_4556_4600 = state_4548__$1;
(statearr_4556_4600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4549 === (15))){
var inst_4521 = (state_4548[(2)]);
var state_4548__$1 = state_4548;
var statearr_4557_4601 = state_4548__$1;
(statearr_4557_4601[(2)] = inst_4521);

(statearr_4557_4601[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4549 === (21))){
var inst_4541 = (state_4548[(2)]);
var state_4548__$1 = (function (){var statearr_4558 = state_4548;
(statearr_4558[(9)] = inst_4541);

return statearr_4558;
})();
var statearr_4559_4602 = state_4548__$1;
(statearr_4559_4602[(2)] = null);

(statearr_4559_4602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4549 === (13))){
var inst_4503 = (state_4548[(10)]);
var inst_4505 = cljs.core.chunked_seq_QMARK_.call(null,inst_4503);
var state_4548__$1 = state_4548;
if(inst_4505){
var statearr_4560_4603 = state_4548__$1;
(statearr_4560_4603[(1)] = (16));

} else {
var statearr_4561_4604 = state_4548__$1;
(statearr_4561_4604[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4549 === (22))){
var inst_4533 = (state_4548[(2)]);
var state_4548__$1 = state_4548;
if(cljs.core.truth_(inst_4533)){
var statearr_4562_4605 = state_4548__$1;
(statearr_4562_4605[(1)] = (23));

} else {
var statearr_4563_4606 = state_4548__$1;
(statearr_4563_4606[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4549 === (6))){
var inst_4479 = (state_4548[(8)]);
var inst_4529 = (state_4548[(11)]);
var inst_4527 = (state_4548[(7)]);
var inst_4527__$1 = topic_fn.call(null,inst_4479);
var inst_4528 = cljs.core.deref.call(null,mults);
var inst_4529__$1 = cljs.core.get.call(null,inst_4528,inst_4527__$1);
var state_4548__$1 = (function (){var statearr_4564 = state_4548;
(statearr_4564[(11)] = inst_4529__$1);

(statearr_4564[(7)] = inst_4527__$1);

return statearr_4564;
})();
if(cljs.core.truth_(inst_4529__$1)){
var statearr_4565_4607 = state_4548__$1;
(statearr_4565_4607[(1)] = (19));

} else {
var statearr_4566_4608 = state_4548__$1;
(statearr_4566_4608[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4549 === (25))){
var inst_4538 = (state_4548[(2)]);
var state_4548__$1 = state_4548;
var statearr_4567_4609 = state_4548__$1;
(statearr_4567_4609[(2)] = inst_4538);

(statearr_4567_4609[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4549 === (17))){
var inst_4503 = (state_4548[(10)]);
var inst_4512 = cljs.core.first.call(null,inst_4503);
var inst_4513 = cljs.core.async.muxch_STAR_.call(null,inst_4512);
var inst_4514 = cljs.core.async.close_BANG_.call(null,inst_4513);
var inst_4515 = cljs.core.next.call(null,inst_4503);
var inst_4489 = inst_4515;
var inst_4490 = null;
var inst_4491 = (0);
var inst_4492 = (0);
var state_4548__$1 = (function (){var statearr_4568 = state_4548;
(statearr_4568[(12)] = inst_4492);

(statearr_4568[(13)] = inst_4491);

(statearr_4568[(14)] = inst_4489);

(statearr_4568[(15)] = inst_4514);

(statearr_4568[(16)] = inst_4490);

return statearr_4568;
})();
var statearr_4569_4610 = state_4548__$1;
(statearr_4569_4610[(2)] = null);

(statearr_4569_4610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4549 === (3))){
var inst_4546 = (state_4548[(2)]);
var state_4548__$1 = state_4548;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4548__$1,inst_4546);
} else {
if((state_val_4549 === (12))){
var inst_4523 = (state_4548[(2)]);
var state_4548__$1 = state_4548;
var statearr_4570_4611 = state_4548__$1;
(statearr_4570_4611[(2)] = inst_4523);

(statearr_4570_4611[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4549 === (2))){
var state_4548__$1 = state_4548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4548__$1,(4),ch);
} else {
if((state_val_4549 === (23))){
var state_4548__$1 = state_4548;
var statearr_4571_4612 = state_4548__$1;
(statearr_4571_4612[(2)] = null);

(statearr_4571_4612[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4549 === (19))){
var inst_4479 = (state_4548[(8)]);
var inst_4529 = (state_4548[(11)]);
var inst_4531 = cljs.core.async.muxch_STAR_.call(null,inst_4529);
var state_4548__$1 = state_4548;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4548__$1,(22),inst_4531,inst_4479);
} else {
if((state_val_4549 === (11))){
var inst_4503 = (state_4548[(10)]);
var inst_4489 = (state_4548[(14)]);
var inst_4503__$1 = cljs.core.seq.call(null,inst_4489);
var state_4548__$1 = (function (){var statearr_4572 = state_4548;
(statearr_4572[(10)] = inst_4503__$1);

return statearr_4572;
})();
if(inst_4503__$1){
var statearr_4573_4613 = state_4548__$1;
(statearr_4573_4613[(1)] = (13));

} else {
var statearr_4574_4614 = state_4548__$1;
(statearr_4574_4614[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4549 === (9))){
var inst_4525 = (state_4548[(2)]);
var state_4548__$1 = state_4548;
var statearr_4575_4615 = state_4548__$1;
(statearr_4575_4615[(2)] = inst_4525);

(statearr_4575_4615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4549 === (5))){
var inst_4486 = cljs.core.deref.call(null,mults);
var inst_4487 = cljs.core.vals.call(null,inst_4486);
var inst_4488 = cljs.core.seq.call(null,inst_4487);
var inst_4489 = inst_4488;
var inst_4490 = null;
var inst_4491 = (0);
var inst_4492 = (0);
var state_4548__$1 = (function (){var statearr_4576 = state_4548;
(statearr_4576[(12)] = inst_4492);

(statearr_4576[(13)] = inst_4491);

(statearr_4576[(14)] = inst_4489);

(statearr_4576[(16)] = inst_4490);

return statearr_4576;
})();
var statearr_4577_4616 = state_4548__$1;
(statearr_4577_4616[(2)] = null);

(statearr_4577_4616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4549 === (14))){
var state_4548__$1 = state_4548;
var statearr_4581_4617 = state_4548__$1;
(statearr_4581_4617[(2)] = null);

(statearr_4581_4617[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4549 === (16))){
var inst_4503 = (state_4548[(10)]);
var inst_4507 = cljs.core.chunk_first.call(null,inst_4503);
var inst_4508 = cljs.core.chunk_rest.call(null,inst_4503);
var inst_4509 = cljs.core.count.call(null,inst_4507);
var inst_4489 = inst_4508;
var inst_4490 = inst_4507;
var inst_4491 = inst_4509;
var inst_4492 = (0);
var state_4548__$1 = (function (){var statearr_4582 = state_4548;
(statearr_4582[(12)] = inst_4492);

(statearr_4582[(13)] = inst_4491);

(statearr_4582[(14)] = inst_4489);

(statearr_4582[(16)] = inst_4490);

return statearr_4582;
})();
var statearr_4583_4618 = state_4548__$1;
(statearr_4583_4618[(2)] = null);

(statearr_4583_4618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4549 === (10))){
var inst_4492 = (state_4548[(12)]);
var inst_4491 = (state_4548[(13)]);
var inst_4489 = (state_4548[(14)]);
var inst_4490 = (state_4548[(16)]);
var inst_4497 = cljs.core._nth.call(null,inst_4490,inst_4492);
var inst_4498 = cljs.core.async.muxch_STAR_.call(null,inst_4497);
var inst_4499 = cljs.core.async.close_BANG_.call(null,inst_4498);
var inst_4500 = (inst_4492 + (1));
var tmp4578 = inst_4491;
var tmp4579 = inst_4489;
var tmp4580 = inst_4490;
var inst_4489__$1 = tmp4579;
var inst_4490__$1 = tmp4580;
var inst_4491__$1 = tmp4578;
var inst_4492__$1 = inst_4500;
var state_4548__$1 = (function (){var statearr_4584 = state_4548;
(statearr_4584[(17)] = inst_4499);

(statearr_4584[(12)] = inst_4492__$1);

(statearr_4584[(13)] = inst_4491__$1);

(statearr_4584[(14)] = inst_4489__$1);

(statearr_4584[(16)] = inst_4490__$1);

return statearr_4584;
})();
var statearr_4585_4619 = state_4548__$1;
(statearr_4585_4619[(2)] = null);

(statearr_4585_4619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4549 === (18))){
var inst_4518 = (state_4548[(2)]);
var state_4548__$1 = state_4548;
var statearr_4586_4620 = state_4548__$1;
(statearr_4586_4620[(2)] = inst_4518);

(statearr_4586_4620[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4549 === (8))){
var inst_4492 = (state_4548[(12)]);
var inst_4491 = (state_4548[(13)]);
var inst_4494 = (inst_4492 < inst_4491);
var inst_4495 = inst_4494;
var state_4548__$1 = state_4548;
if(cljs.core.truth_(inst_4495)){
var statearr_4587_4621 = state_4548__$1;
(statearr_4587_4621[(1)] = (10));

} else {
var statearr_4588_4622 = state_4548__$1;
(statearr_4588_4622[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3360__auto___4594,mults,ensure_mult,p))
;
return ((function (switch__3269__auto__,c__3360__auto___4594,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__3270__auto__ = null;
var cljs$core$async$state_machine__3270__auto____0 = (function (){
var statearr_4589 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4589[(0)] = cljs$core$async$state_machine__3270__auto__);

(statearr_4589[(1)] = (1));

return statearr_4589;
});
var cljs$core$async$state_machine__3270__auto____1 = (function (state_4548){
while(true){
var ret_value__3271__auto__ = (function (){try{while(true){
var result__3272__auto__ = switch__3269__auto__.call(null,state_4548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3272__auto__;
}
break;
}
}catch (e4590){if((e4590 instanceof Object)){
var ex__3273__auto__ = e4590;
var statearr_4591_4623 = state_4548;
(statearr_4591_4623[(5)] = ex__3273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4624 = state_4548;
state_4548 = G__4624;
continue;
} else {
return ret_value__3271__auto__;
}
break;
}
});
cljs$core$async$state_machine__3270__auto__ = function(state_4548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3270__auto____1.call(this,state_4548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3270__auto____0;
cljs$core$async$state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3270__auto____1;
return cljs$core$async$state_machine__3270__auto__;
})()
;})(switch__3269__auto__,c__3360__auto___4594,mults,ensure_mult,p))
})();
var state__3362__auto__ = (function (){var statearr_4592 = f__3361__auto__.call(null);
(statearr_4592[(6)] = c__3360__auto___4594);

return statearr_4592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3362__auto__);
});})(c__3360__auto___4594,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__4626 = arguments.length;
switch (G__4626) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__4629 = arguments.length;
switch (G__4629) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__4632 = arguments.length;
switch (G__4632) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__3360__auto___4699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3360__auto___4699,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__3361__auto__ = (function (){var switch__3269__auto__ = ((function (c__3360__auto___4699,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_4671){
var state_val_4672 = (state_4671[(1)]);
if((state_val_4672 === (7))){
var state_4671__$1 = state_4671;
var statearr_4673_4700 = state_4671__$1;
(statearr_4673_4700[(2)] = null);

(statearr_4673_4700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4672 === (1))){
var state_4671__$1 = state_4671;
var statearr_4674_4701 = state_4671__$1;
(statearr_4674_4701[(2)] = null);

(statearr_4674_4701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4672 === (4))){
var inst_4635 = (state_4671[(7)]);
var inst_4637 = (inst_4635 < cnt);
var state_4671__$1 = state_4671;
if(cljs.core.truth_(inst_4637)){
var statearr_4675_4702 = state_4671__$1;
(statearr_4675_4702[(1)] = (6));

} else {
var statearr_4676_4703 = state_4671__$1;
(statearr_4676_4703[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4672 === (15))){
var inst_4667 = (state_4671[(2)]);
var state_4671__$1 = state_4671;
var statearr_4677_4704 = state_4671__$1;
(statearr_4677_4704[(2)] = inst_4667);

(statearr_4677_4704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4672 === (13))){
var inst_4660 = cljs.core.async.close_BANG_.call(null,out);
var state_4671__$1 = state_4671;
var statearr_4678_4705 = state_4671__$1;
(statearr_4678_4705[(2)] = inst_4660);

(statearr_4678_4705[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4672 === (6))){
var state_4671__$1 = state_4671;
var statearr_4679_4706 = state_4671__$1;
(statearr_4679_4706[(2)] = null);

(statearr_4679_4706[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4672 === (3))){
var inst_4669 = (state_4671[(2)]);
var state_4671__$1 = state_4671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4671__$1,inst_4669);
} else {
if((state_val_4672 === (12))){
var inst_4657 = (state_4671[(8)]);
var inst_4657__$1 = (state_4671[(2)]);
var inst_4658 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_4657__$1);
var state_4671__$1 = (function (){var statearr_4680 = state_4671;
(statearr_4680[(8)] = inst_4657__$1);

return statearr_4680;
})();
if(cljs.core.truth_(inst_4658)){
var statearr_4681_4707 = state_4671__$1;
(statearr_4681_4707[(1)] = (13));

} else {
var statearr_4682_4708 = state_4671__$1;
(statearr_4682_4708[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4672 === (2))){
var inst_4634 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_4635 = (0);
var state_4671__$1 = (function (){var statearr_4683 = state_4671;
(statearr_4683[(7)] = inst_4635);

(statearr_4683[(9)] = inst_4634);

return statearr_4683;
})();
var statearr_4684_4709 = state_4671__$1;
(statearr_4684_4709[(2)] = null);

(statearr_4684_4709[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4672 === (11))){
var inst_4635 = (state_4671[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_4671,(10),Object,null,(9));
var inst_4644 = chs__$1.call(null,inst_4635);
var inst_4645 = done.call(null,inst_4635);
var inst_4646 = cljs.core.async.take_BANG_.call(null,inst_4644,inst_4645);
var state_4671__$1 = state_4671;
var statearr_4685_4710 = state_4671__$1;
(statearr_4685_4710[(2)] = inst_4646);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4671__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4672 === (9))){
var inst_4635 = (state_4671[(7)]);
var inst_4648 = (state_4671[(2)]);
var inst_4649 = (inst_4635 + (1));
var inst_4635__$1 = inst_4649;
var state_4671__$1 = (function (){var statearr_4686 = state_4671;
(statearr_4686[(7)] = inst_4635__$1);

(statearr_4686[(10)] = inst_4648);

return statearr_4686;
})();
var statearr_4687_4711 = state_4671__$1;
(statearr_4687_4711[(2)] = null);

(statearr_4687_4711[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4672 === (5))){
var inst_4655 = (state_4671[(2)]);
var state_4671__$1 = (function (){var statearr_4688 = state_4671;
(statearr_4688[(11)] = inst_4655);

return statearr_4688;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4671__$1,(12),dchan);
} else {
if((state_val_4672 === (14))){
var inst_4657 = (state_4671[(8)]);
var inst_4662 = cljs.core.apply.call(null,f,inst_4657);
var state_4671__$1 = state_4671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4671__$1,(16),out,inst_4662);
} else {
if((state_val_4672 === (16))){
var inst_4664 = (state_4671[(2)]);
var state_4671__$1 = (function (){var statearr_4689 = state_4671;
(statearr_4689[(12)] = inst_4664);

return statearr_4689;
})();
var statearr_4690_4712 = state_4671__$1;
(statearr_4690_4712[(2)] = null);

(statearr_4690_4712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4672 === (10))){
var inst_4639 = (state_4671[(2)]);
var inst_4640 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_4671__$1 = (function (){var statearr_4691 = state_4671;
(statearr_4691[(13)] = inst_4639);

return statearr_4691;
})();
var statearr_4692_4713 = state_4671__$1;
(statearr_4692_4713[(2)] = inst_4640);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4671__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4672 === (8))){
var inst_4653 = (state_4671[(2)]);
var state_4671__$1 = state_4671;
var statearr_4693_4714 = state_4671__$1;
(statearr_4693_4714[(2)] = inst_4653);

(statearr_4693_4714[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3360__auto___4699,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__3269__auto__,c__3360__auto___4699,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__3270__auto__ = null;
var cljs$core$async$state_machine__3270__auto____0 = (function (){
var statearr_4694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4694[(0)] = cljs$core$async$state_machine__3270__auto__);

(statearr_4694[(1)] = (1));

return statearr_4694;
});
var cljs$core$async$state_machine__3270__auto____1 = (function (state_4671){
while(true){
var ret_value__3271__auto__ = (function (){try{while(true){
var result__3272__auto__ = switch__3269__auto__.call(null,state_4671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3272__auto__;
}
break;
}
}catch (e4695){if((e4695 instanceof Object)){
var ex__3273__auto__ = e4695;
var statearr_4696_4715 = state_4671;
(statearr_4696_4715[(5)] = ex__3273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4716 = state_4671;
state_4671 = G__4716;
continue;
} else {
return ret_value__3271__auto__;
}
break;
}
});
cljs$core$async$state_machine__3270__auto__ = function(state_4671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3270__auto____1.call(this,state_4671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3270__auto____0;
cljs$core$async$state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3270__auto____1;
return cljs$core$async$state_machine__3270__auto__;
})()
;})(switch__3269__auto__,c__3360__auto___4699,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__3362__auto__ = (function (){var statearr_4697 = f__3361__auto__.call(null);
(statearr_4697[(6)] = c__3360__auto___4699);

return statearr_4697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3362__auto__);
});})(c__3360__auto___4699,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__4719 = arguments.length;
switch (G__4719) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3360__auto___4773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3360__auto___4773,out){
return (function (){
var f__3361__auto__ = (function (){var switch__3269__auto__ = ((function (c__3360__auto___4773,out){
return (function (state_4751){
var state_val_4752 = (state_4751[(1)]);
if((state_val_4752 === (7))){
var inst_4730 = (state_4751[(7)]);
var inst_4731 = (state_4751[(8)]);
var inst_4730__$1 = (state_4751[(2)]);
var inst_4731__$1 = cljs.core.nth.call(null,inst_4730__$1,(0),null);
var inst_4732 = cljs.core.nth.call(null,inst_4730__$1,(1),null);
var inst_4733 = (inst_4731__$1 == null);
var state_4751__$1 = (function (){var statearr_4753 = state_4751;
(statearr_4753[(7)] = inst_4730__$1);

(statearr_4753[(8)] = inst_4731__$1);

(statearr_4753[(9)] = inst_4732);

return statearr_4753;
})();
if(cljs.core.truth_(inst_4733)){
var statearr_4754_4774 = state_4751__$1;
(statearr_4754_4774[(1)] = (8));

} else {
var statearr_4755_4775 = state_4751__$1;
(statearr_4755_4775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4752 === (1))){
var inst_4720 = cljs.core.vec.call(null,chs);
var inst_4721 = inst_4720;
var state_4751__$1 = (function (){var statearr_4756 = state_4751;
(statearr_4756[(10)] = inst_4721);

return statearr_4756;
})();
var statearr_4757_4776 = state_4751__$1;
(statearr_4757_4776[(2)] = null);

(statearr_4757_4776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4752 === (4))){
var inst_4721 = (state_4751[(10)]);
var state_4751__$1 = state_4751;
return cljs.core.async.ioc_alts_BANG_.call(null,state_4751__$1,(7),inst_4721);
} else {
if((state_val_4752 === (6))){
var inst_4747 = (state_4751[(2)]);
var state_4751__$1 = state_4751;
var statearr_4758_4777 = state_4751__$1;
(statearr_4758_4777[(2)] = inst_4747);

(statearr_4758_4777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4752 === (3))){
var inst_4749 = (state_4751[(2)]);
var state_4751__$1 = state_4751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4751__$1,inst_4749);
} else {
if((state_val_4752 === (2))){
var inst_4721 = (state_4751[(10)]);
var inst_4723 = cljs.core.count.call(null,inst_4721);
var inst_4724 = (inst_4723 > (0));
var state_4751__$1 = state_4751;
if(cljs.core.truth_(inst_4724)){
var statearr_4760_4778 = state_4751__$1;
(statearr_4760_4778[(1)] = (4));

} else {
var statearr_4761_4779 = state_4751__$1;
(statearr_4761_4779[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4752 === (11))){
var inst_4721 = (state_4751[(10)]);
var inst_4740 = (state_4751[(2)]);
var tmp4759 = inst_4721;
var inst_4721__$1 = tmp4759;
var state_4751__$1 = (function (){var statearr_4762 = state_4751;
(statearr_4762[(11)] = inst_4740);

(statearr_4762[(10)] = inst_4721__$1);

return statearr_4762;
})();
var statearr_4763_4780 = state_4751__$1;
(statearr_4763_4780[(2)] = null);

(statearr_4763_4780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4752 === (9))){
var inst_4731 = (state_4751[(8)]);
var state_4751__$1 = state_4751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4751__$1,(11),out,inst_4731);
} else {
if((state_val_4752 === (5))){
var inst_4745 = cljs.core.async.close_BANG_.call(null,out);
var state_4751__$1 = state_4751;
var statearr_4764_4781 = state_4751__$1;
(statearr_4764_4781[(2)] = inst_4745);

(statearr_4764_4781[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4752 === (10))){
var inst_4743 = (state_4751[(2)]);
var state_4751__$1 = state_4751;
var statearr_4765_4782 = state_4751__$1;
(statearr_4765_4782[(2)] = inst_4743);

(statearr_4765_4782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4752 === (8))){
var inst_4730 = (state_4751[(7)]);
var inst_4731 = (state_4751[(8)]);
var inst_4721 = (state_4751[(10)]);
var inst_4732 = (state_4751[(9)]);
var inst_4735 = (function (){var cs = inst_4721;
var vec__4726 = inst_4730;
var v = inst_4731;
var c = inst_4732;
return ((function (cs,vec__4726,v,c,inst_4730,inst_4731,inst_4721,inst_4732,state_val_4752,c__3360__auto___4773,out){
return (function (p1__4717_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__4717_SHARP_);
});
;})(cs,vec__4726,v,c,inst_4730,inst_4731,inst_4721,inst_4732,state_val_4752,c__3360__auto___4773,out))
})();
var inst_4736 = cljs.core.filterv.call(null,inst_4735,inst_4721);
var inst_4721__$1 = inst_4736;
var state_4751__$1 = (function (){var statearr_4766 = state_4751;
(statearr_4766[(10)] = inst_4721__$1);

return statearr_4766;
})();
var statearr_4767_4783 = state_4751__$1;
(statearr_4767_4783[(2)] = null);

(statearr_4767_4783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__3360__auto___4773,out))
;
return ((function (switch__3269__auto__,c__3360__auto___4773,out){
return (function() {
var cljs$core$async$state_machine__3270__auto__ = null;
var cljs$core$async$state_machine__3270__auto____0 = (function (){
var statearr_4768 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_4768[(0)] = cljs$core$async$state_machine__3270__auto__);

(statearr_4768[(1)] = (1));

return statearr_4768;
});
var cljs$core$async$state_machine__3270__auto____1 = (function (state_4751){
while(true){
var ret_value__3271__auto__ = (function (){try{while(true){
var result__3272__auto__ = switch__3269__auto__.call(null,state_4751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3272__auto__;
}
break;
}
}catch (e4769){if((e4769 instanceof Object)){
var ex__3273__auto__ = e4769;
var statearr_4770_4784 = state_4751;
(statearr_4770_4784[(5)] = ex__3273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4785 = state_4751;
state_4751 = G__4785;
continue;
} else {
return ret_value__3271__auto__;
}
break;
}
});
cljs$core$async$state_machine__3270__auto__ = function(state_4751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3270__auto____1.call(this,state_4751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3270__auto____0;
cljs$core$async$state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3270__auto____1;
return cljs$core$async$state_machine__3270__auto__;
})()
;})(switch__3269__auto__,c__3360__auto___4773,out))
})();
var state__3362__auto__ = (function (){var statearr_4771 = f__3361__auto__.call(null);
(statearr_4771[(6)] = c__3360__auto___4773);

return statearr_4771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3362__auto__);
});})(c__3360__auto___4773,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__4787 = arguments.length;
switch (G__4787) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3360__auto___4832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3360__auto___4832,out){
return (function (){
var f__3361__auto__ = (function (){var switch__3269__auto__ = ((function (c__3360__auto___4832,out){
return (function (state_4811){
var state_val_4812 = (state_4811[(1)]);
if((state_val_4812 === (7))){
var inst_4793 = (state_4811[(7)]);
var inst_4793__$1 = (state_4811[(2)]);
var inst_4794 = (inst_4793__$1 == null);
var inst_4795 = cljs.core.not.call(null,inst_4794);
var state_4811__$1 = (function (){var statearr_4813 = state_4811;
(statearr_4813[(7)] = inst_4793__$1);

return statearr_4813;
})();
if(inst_4795){
var statearr_4814_4833 = state_4811__$1;
(statearr_4814_4833[(1)] = (8));

} else {
var statearr_4815_4834 = state_4811__$1;
(statearr_4815_4834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4812 === (1))){
var inst_4788 = (0);
var state_4811__$1 = (function (){var statearr_4816 = state_4811;
(statearr_4816[(8)] = inst_4788);

return statearr_4816;
})();
var statearr_4817_4835 = state_4811__$1;
(statearr_4817_4835[(2)] = null);

(statearr_4817_4835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4812 === (4))){
var state_4811__$1 = state_4811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4811__$1,(7),ch);
} else {
if((state_val_4812 === (6))){
var inst_4806 = (state_4811[(2)]);
var state_4811__$1 = state_4811;
var statearr_4818_4836 = state_4811__$1;
(statearr_4818_4836[(2)] = inst_4806);

(statearr_4818_4836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4812 === (3))){
var inst_4808 = (state_4811[(2)]);
var inst_4809 = cljs.core.async.close_BANG_.call(null,out);
var state_4811__$1 = (function (){var statearr_4819 = state_4811;
(statearr_4819[(9)] = inst_4808);

return statearr_4819;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4811__$1,inst_4809);
} else {
if((state_val_4812 === (2))){
var inst_4788 = (state_4811[(8)]);
var inst_4790 = (inst_4788 < n);
var state_4811__$1 = state_4811;
if(cljs.core.truth_(inst_4790)){
var statearr_4820_4837 = state_4811__$1;
(statearr_4820_4837[(1)] = (4));

} else {
var statearr_4821_4838 = state_4811__$1;
(statearr_4821_4838[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4812 === (11))){
var inst_4788 = (state_4811[(8)]);
var inst_4798 = (state_4811[(2)]);
var inst_4799 = (inst_4788 + (1));
var inst_4788__$1 = inst_4799;
var state_4811__$1 = (function (){var statearr_4822 = state_4811;
(statearr_4822[(10)] = inst_4798);

(statearr_4822[(8)] = inst_4788__$1);

return statearr_4822;
})();
var statearr_4823_4839 = state_4811__$1;
(statearr_4823_4839[(2)] = null);

(statearr_4823_4839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4812 === (9))){
var state_4811__$1 = state_4811;
var statearr_4824_4840 = state_4811__$1;
(statearr_4824_4840[(2)] = null);

(statearr_4824_4840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4812 === (5))){
var state_4811__$1 = state_4811;
var statearr_4825_4841 = state_4811__$1;
(statearr_4825_4841[(2)] = null);

(statearr_4825_4841[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4812 === (10))){
var inst_4803 = (state_4811[(2)]);
var state_4811__$1 = state_4811;
var statearr_4826_4842 = state_4811__$1;
(statearr_4826_4842[(2)] = inst_4803);

(statearr_4826_4842[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4812 === (8))){
var inst_4793 = (state_4811[(7)]);
var state_4811__$1 = state_4811;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4811__$1,(11),out,inst_4793);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__3360__auto___4832,out))
;
return ((function (switch__3269__auto__,c__3360__auto___4832,out){
return (function() {
var cljs$core$async$state_machine__3270__auto__ = null;
var cljs$core$async$state_machine__3270__auto____0 = (function (){
var statearr_4827 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_4827[(0)] = cljs$core$async$state_machine__3270__auto__);

(statearr_4827[(1)] = (1));

return statearr_4827;
});
var cljs$core$async$state_machine__3270__auto____1 = (function (state_4811){
while(true){
var ret_value__3271__auto__ = (function (){try{while(true){
var result__3272__auto__ = switch__3269__auto__.call(null,state_4811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3272__auto__;
}
break;
}
}catch (e4828){if((e4828 instanceof Object)){
var ex__3273__auto__ = e4828;
var statearr_4829_4843 = state_4811;
(statearr_4829_4843[(5)] = ex__3273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4844 = state_4811;
state_4811 = G__4844;
continue;
} else {
return ret_value__3271__auto__;
}
break;
}
});
cljs$core$async$state_machine__3270__auto__ = function(state_4811){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3270__auto____1.call(this,state_4811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3270__auto____0;
cljs$core$async$state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3270__auto____1;
return cljs$core$async$state_machine__3270__auto__;
})()
;})(switch__3269__auto__,c__3360__auto___4832,out))
})();
var state__3362__auto__ = (function (){var statearr_4830 = f__3361__auto__.call(null);
(statearr_4830[(6)] = c__3360__auto___4832);

return statearr_4830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3362__auto__);
});})(c__3360__auto___4832,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4846 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4846 = (function (f,ch,meta4847){
this.f = f;
this.ch = ch;
this.meta4847 = meta4847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4848,meta4847__$1){
var self__ = this;
var _4848__$1 = this;
return (new cljs.core.async.t_cljs$core$async4846(self__.f,self__.ch,meta4847__$1));
});

cljs.core.async.t_cljs$core$async4846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4848){
var self__ = this;
var _4848__$1 = this;
return self__.meta4847;
});

cljs.core.async.t_cljs$core$async4846.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4846.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4846.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4846.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4846.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4849 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4849 = (function (f,ch,meta4847,_,fn1,meta4850){
this.f = f;
this.ch = ch;
this.meta4847 = meta4847;
this._ = _;
this.fn1 = fn1;
this.meta4850 = meta4850;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_4851,meta4850__$1){
var self__ = this;
var _4851__$1 = this;
return (new cljs.core.async.t_cljs$core$async4849(self__.f,self__.ch,self__.meta4847,self__._,self__.fn1,meta4850__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async4849.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_4851){
var self__ = this;
var _4851__$1 = this;
return self__.meta4850;
});})(___$1))
;

cljs.core.async.t_cljs$core$async4849.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4849.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async4849.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async4849.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__4845_SHARP_){
return f1.call(null,(((p1__4845_SHARP_ == null))?null:self__.f.call(null,p1__4845_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async4849.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4847","meta4847",988938903,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async4846","cljs.core.async/t_cljs$core$async4846",602900133,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta4850","meta4850",-1157753411,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async4849.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4849.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4849";

cljs.core.async.t_cljs$core$async4849.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async4849");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4849.
 */
cljs.core.async.__GT_t_cljs$core$async4849 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async4849(f__$1,ch__$1,meta4847__$1,___$2,fn1__$1,meta4850){
return (new cljs.core.async.t_cljs$core$async4849(f__$1,ch__$1,meta4847__$1,___$2,fn1__$1,meta4850));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async4849(self__.f,self__.ch,self__.meta4847,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async4846.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4846.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async4846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4847","meta4847",988938903,null)], null);
});

cljs.core.async.t_cljs$core$async4846.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4846";

cljs.core.async.t_cljs$core$async4846.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async4846");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4846.
 */
cljs.core.async.__GT_t_cljs$core$async4846 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async4846(f__$1,ch__$1,meta4847){
return (new cljs.core.async.t_cljs$core$async4846(f__$1,ch__$1,meta4847));
});

}

return (new cljs.core.async.t_cljs$core$async4846(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4852 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4852 = (function (f,ch,meta4853){
this.f = f;
this.ch = ch;
this.meta4853 = meta4853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4854,meta4853__$1){
var self__ = this;
var _4854__$1 = this;
return (new cljs.core.async.t_cljs$core$async4852(self__.f,self__.ch,meta4853__$1));
});

cljs.core.async.t_cljs$core$async4852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4854){
var self__ = this;
var _4854__$1 = this;
return self__.meta4853;
});

cljs.core.async.t_cljs$core$async4852.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4852.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4852.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4852.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async4852.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4852.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async4852.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4853","meta4853",704455145,null)], null);
});

cljs.core.async.t_cljs$core$async4852.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4852.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4852";

cljs.core.async.t_cljs$core$async4852.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async4852");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4852.
 */
cljs.core.async.__GT_t_cljs$core$async4852 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async4852(f__$1,ch__$1,meta4853){
return (new cljs.core.async.t_cljs$core$async4852(f__$1,ch__$1,meta4853));
});

}

return (new cljs.core.async.t_cljs$core$async4852(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async4855 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async4855 = (function (p,ch,meta4856){
this.p = p;
this.ch = ch;
this.meta4856 = meta4856;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async4855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_4857,meta4856__$1){
var self__ = this;
var _4857__$1 = this;
return (new cljs.core.async.t_cljs$core$async4855(self__.p,self__.ch,meta4856__$1));
});

cljs.core.async.t_cljs$core$async4855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_4857){
var self__ = this;
var _4857__$1 = this;
return self__.meta4856;
});

cljs.core.async.t_cljs$core$async4855.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4855.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4855.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async4855.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4855.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async4855.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async4855.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async4855.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta4856","meta4856",-221095595,null)], null);
});

cljs.core.async.t_cljs$core$async4855.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async4855.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async4855";

cljs.core.async.t_cljs$core$async4855.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async4855");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async4855.
 */
cljs.core.async.__GT_t_cljs$core$async4855 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async4855(p__$1,ch__$1,meta4856){
return (new cljs.core.async.t_cljs$core$async4855(p__$1,ch__$1,meta4856));
});

}

return (new cljs.core.async.t_cljs$core$async4855(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__4859 = arguments.length;
switch (G__4859) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3360__auto___4899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3360__auto___4899,out){
return (function (){
var f__3361__auto__ = (function (){var switch__3269__auto__ = ((function (c__3360__auto___4899,out){
return (function (state_4880){
var state_val_4881 = (state_4880[(1)]);
if((state_val_4881 === (7))){
var inst_4876 = (state_4880[(2)]);
var state_4880__$1 = state_4880;
var statearr_4882_4900 = state_4880__$1;
(statearr_4882_4900[(2)] = inst_4876);

(statearr_4882_4900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4881 === (1))){
var state_4880__$1 = state_4880;
var statearr_4883_4901 = state_4880__$1;
(statearr_4883_4901[(2)] = null);

(statearr_4883_4901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4881 === (4))){
var inst_4862 = (state_4880[(7)]);
var inst_4862__$1 = (state_4880[(2)]);
var inst_4863 = (inst_4862__$1 == null);
var state_4880__$1 = (function (){var statearr_4884 = state_4880;
(statearr_4884[(7)] = inst_4862__$1);

return statearr_4884;
})();
if(cljs.core.truth_(inst_4863)){
var statearr_4885_4902 = state_4880__$1;
(statearr_4885_4902[(1)] = (5));

} else {
var statearr_4886_4903 = state_4880__$1;
(statearr_4886_4903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4881 === (6))){
var inst_4862 = (state_4880[(7)]);
var inst_4867 = p.call(null,inst_4862);
var state_4880__$1 = state_4880;
if(cljs.core.truth_(inst_4867)){
var statearr_4887_4904 = state_4880__$1;
(statearr_4887_4904[(1)] = (8));

} else {
var statearr_4888_4905 = state_4880__$1;
(statearr_4888_4905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4881 === (3))){
var inst_4878 = (state_4880[(2)]);
var state_4880__$1 = state_4880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4880__$1,inst_4878);
} else {
if((state_val_4881 === (2))){
var state_4880__$1 = state_4880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4880__$1,(4),ch);
} else {
if((state_val_4881 === (11))){
var inst_4870 = (state_4880[(2)]);
var state_4880__$1 = state_4880;
var statearr_4889_4906 = state_4880__$1;
(statearr_4889_4906[(2)] = inst_4870);

(statearr_4889_4906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4881 === (9))){
var state_4880__$1 = state_4880;
var statearr_4890_4907 = state_4880__$1;
(statearr_4890_4907[(2)] = null);

(statearr_4890_4907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4881 === (5))){
var inst_4865 = cljs.core.async.close_BANG_.call(null,out);
var state_4880__$1 = state_4880;
var statearr_4891_4908 = state_4880__$1;
(statearr_4891_4908[(2)] = inst_4865);

(statearr_4891_4908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4881 === (10))){
var inst_4873 = (state_4880[(2)]);
var state_4880__$1 = (function (){var statearr_4892 = state_4880;
(statearr_4892[(8)] = inst_4873);

return statearr_4892;
})();
var statearr_4893_4909 = state_4880__$1;
(statearr_4893_4909[(2)] = null);

(statearr_4893_4909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4881 === (8))){
var inst_4862 = (state_4880[(7)]);
var state_4880__$1 = state_4880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4880__$1,(11),out,inst_4862);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__3360__auto___4899,out))
;
return ((function (switch__3269__auto__,c__3360__auto___4899,out){
return (function() {
var cljs$core$async$state_machine__3270__auto__ = null;
var cljs$core$async$state_machine__3270__auto____0 = (function (){
var statearr_4894 = [null,null,null,null,null,null,null,null,null];
(statearr_4894[(0)] = cljs$core$async$state_machine__3270__auto__);

(statearr_4894[(1)] = (1));

return statearr_4894;
});
var cljs$core$async$state_machine__3270__auto____1 = (function (state_4880){
while(true){
var ret_value__3271__auto__ = (function (){try{while(true){
var result__3272__auto__ = switch__3269__auto__.call(null,state_4880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3272__auto__;
}
break;
}
}catch (e4895){if((e4895 instanceof Object)){
var ex__3273__auto__ = e4895;
var statearr_4896_4910 = state_4880;
(statearr_4896_4910[(5)] = ex__3273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e4895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__4911 = state_4880;
state_4880 = G__4911;
continue;
} else {
return ret_value__3271__auto__;
}
break;
}
});
cljs$core$async$state_machine__3270__auto__ = function(state_4880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3270__auto____1.call(this,state_4880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3270__auto____0;
cljs$core$async$state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3270__auto____1;
return cljs$core$async$state_machine__3270__auto__;
})()
;})(switch__3269__auto__,c__3360__auto___4899,out))
})();
var state__3362__auto__ = (function (){var statearr_4897 = f__3361__auto__.call(null);
(statearr_4897[(6)] = c__3360__auto___4899);

return statearr_4897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3362__auto__);
});})(c__3360__auto___4899,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__4913 = arguments.length;
switch (G__4913) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__3360__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3360__auto__){
return (function (){
var f__3361__auto__ = (function (){var switch__3269__auto__ = ((function (c__3360__auto__){
return (function (state_4976){
var state_val_4977 = (state_4976[(1)]);
if((state_val_4977 === (7))){
var inst_4972 = (state_4976[(2)]);
var state_4976__$1 = state_4976;
var statearr_4978_5016 = state_4976__$1;
(statearr_4978_5016[(2)] = inst_4972);

(statearr_4978_5016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4977 === (20))){
var inst_4942 = (state_4976[(7)]);
var inst_4953 = (state_4976[(2)]);
var inst_4954 = cljs.core.next.call(null,inst_4942);
var inst_4928 = inst_4954;
var inst_4929 = null;
var inst_4930 = (0);
var inst_4931 = (0);
var state_4976__$1 = (function (){var statearr_4979 = state_4976;
(statearr_4979[(8)] = inst_4930);

(statearr_4979[(9)] = inst_4953);

(statearr_4979[(10)] = inst_4928);

(statearr_4979[(11)] = inst_4929);

(statearr_4979[(12)] = inst_4931);

return statearr_4979;
})();
var statearr_4980_5017 = state_4976__$1;
(statearr_4980_5017[(2)] = null);

(statearr_4980_5017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4977 === (1))){
var state_4976__$1 = state_4976;
var statearr_4981_5018 = state_4976__$1;
(statearr_4981_5018[(2)] = null);

(statearr_4981_5018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4977 === (4))){
var inst_4917 = (state_4976[(13)]);
var inst_4917__$1 = (state_4976[(2)]);
var inst_4918 = (inst_4917__$1 == null);
var state_4976__$1 = (function (){var statearr_4982 = state_4976;
(statearr_4982[(13)] = inst_4917__$1);

return statearr_4982;
})();
if(cljs.core.truth_(inst_4918)){
var statearr_4983_5019 = state_4976__$1;
(statearr_4983_5019[(1)] = (5));

} else {
var statearr_4984_5020 = state_4976__$1;
(statearr_4984_5020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4977 === (15))){
var state_4976__$1 = state_4976;
var statearr_4988_5021 = state_4976__$1;
(statearr_4988_5021[(2)] = null);

(statearr_4988_5021[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4977 === (21))){
var state_4976__$1 = state_4976;
var statearr_4989_5022 = state_4976__$1;
(statearr_4989_5022[(2)] = null);

(statearr_4989_5022[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4977 === (13))){
var inst_4930 = (state_4976[(8)]);
var inst_4928 = (state_4976[(10)]);
var inst_4929 = (state_4976[(11)]);
var inst_4931 = (state_4976[(12)]);
var inst_4938 = (state_4976[(2)]);
var inst_4939 = (inst_4931 + (1));
var tmp4985 = inst_4930;
var tmp4986 = inst_4928;
var tmp4987 = inst_4929;
var inst_4928__$1 = tmp4986;
var inst_4929__$1 = tmp4987;
var inst_4930__$1 = tmp4985;
var inst_4931__$1 = inst_4939;
var state_4976__$1 = (function (){var statearr_4990 = state_4976;
(statearr_4990[(8)] = inst_4930__$1);

(statearr_4990[(14)] = inst_4938);

(statearr_4990[(10)] = inst_4928__$1);

(statearr_4990[(11)] = inst_4929__$1);

(statearr_4990[(12)] = inst_4931__$1);

return statearr_4990;
})();
var statearr_4991_5023 = state_4976__$1;
(statearr_4991_5023[(2)] = null);

(statearr_4991_5023[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4977 === (22))){
var state_4976__$1 = state_4976;
var statearr_4992_5024 = state_4976__$1;
(statearr_4992_5024[(2)] = null);

(statearr_4992_5024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4977 === (6))){
var inst_4917 = (state_4976[(13)]);
var inst_4926 = f.call(null,inst_4917);
var inst_4927 = cljs.core.seq.call(null,inst_4926);
var inst_4928 = inst_4927;
var inst_4929 = null;
var inst_4930 = (0);
var inst_4931 = (0);
var state_4976__$1 = (function (){var statearr_4993 = state_4976;
(statearr_4993[(8)] = inst_4930);

(statearr_4993[(10)] = inst_4928);

(statearr_4993[(11)] = inst_4929);

(statearr_4993[(12)] = inst_4931);

return statearr_4993;
})();
var statearr_4994_5025 = state_4976__$1;
(statearr_4994_5025[(2)] = null);

(statearr_4994_5025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4977 === (17))){
var inst_4942 = (state_4976[(7)]);
var inst_4946 = cljs.core.chunk_first.call(null,inst_4942);
var inst_4947 = cljs.core.chunk_rest.call(null,inst_4942);
var inst_4948 = cljs.core.count.call(null,inst_4946);
var inst_4928 = inst_4947;
var inst_4929 = inst_4946;
var inst_4930 = inst_4948;
var inst_4931 = (0);
var state_4976__$1 = (function (){var statearr_4995 = state_4976;
(statearr_4995[(8)] = inst_4930);

(statearr_4995[(10)] = inst_4928);

(statearr_4995[(11)] = inst_4929);

(statearr_4995[(12)] = inst_4931);

return statearr_4995;
})();
var statearr_4996_5026 = state_4976__$1;
(statearr_4996_5026[(2)] = null);

(statearr_4996_5026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4977 === (3))){
var inst_4974 = (state_4976[(2)]);
var state_4976__$1 = state_4976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_4976__$1,inst_4974);
} else {
if((state_val_4977 === (12))){
var inst_4962 = (state_4976[(2)]);
var state_4976__$1 = state_4976;
var statearr_4997_5027 = state_4976__$1;
(statearr_4997_5027[(2)] = inst_4962);

(statearr_4997_5027[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4977 === (2))){
var state_4976__$1 = state_4976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_4976__$1,(4),in$);
} else {
if((state_val_4977 === (23))){
var inst_4970 = (state_4976[(2)]);
var state_4976__$1 = state_4976;
var statearr_4998_5028 = state_4976__$1;
(statearr_4998_5028[(2)] = inst_4970);

(statearr_4998_5028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4977 === (19))){
var inst_4957 = (state_4976[(2)]);
var state_4976__$1 = state_4976;
var statearr_4999_5029 = state_4976__$1;
(statearr_4999_5029[(2)] = inst_4957);

(statearr_4999_5029[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4977 === (11))){
var inst_4942 = (state_4976[(7)]);
var inst_4928 = (state_4976[(10)]);
var inst_4942__$1 = cljs.core.seq.call(null,inst_4928);
var state_4976__$1 = (function (){var statearr_5000 = state_4976;
(statearr_5000[(7)] = inst_4942__$1);

return statearr_5000;
})();
if(inst_4942__$1){
var statearr_5001_5030 = state_4976__$1;
(statearr_5001_5030[(1)] = (14));

} else {
var statearr_5002_5031 = state_4976__$1;
(statearr_5002_5031[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4977 === (9))){
var inst_4964 = (state_4976[(2)]);
var inst_4965 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_4976__$1 = (function (){var statearr_5003 = state_4976;
(statearr_5003[(15)] = inst_4964);

return statearr_5003;
})();
if(cljs.core.truth_(inst_4965)){
var statearr_5004_5032 = state_4976__$1;
(statearr_5004_5032[(1)] = (21));

} else {
var statearr_5005_5033 = state_4976__$1;
(statearr_5005_5033[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4977 === (5))){
var inst_4920 = cljs.core.async.close_BANG_.call(null,out);
var state_4976__$1 = state_4976;
var statearr_5006_5034 = state_4976__$1;
(statearr_5006_5034[(2)] = inst_4920);

(statearr_5006_5034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4977 === (14))){
var inst_4942 = (state_4976[(7)]);
var inst_4944 = cljs.core.chunked_seq_QMARK_.call(null,inst_4942);
var state_4976__$1 = state_4976;
if(inst_4944){
var statearr_5007_5035 = state_4976__$1;
(statearr_5007_5035[(1)] = (17));

} else {
var statearr_5008_5036 = state_4976__$1;
(statearr_5008_5036[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4977 === (16))){
var inst_4960 = (state_4976[(2)]);
var state_4976__$1 = state_4976;
var statearr_5009_5037 = state_4976__$1;
(statearr_5009_5037[(2)] = inst_4960);

(statearr_5009_5037[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_4977 === (10))){
var inst_4929 = (state_4976[(11)]);
var inst_4931 = (state_4976[(12)]);
var inst_4936 = cljs.core._nth.call(null,inst_4929,inst_4931);
var state_4976__$1 = state_4976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4976__$1,(13),out,inst_4936);
} else {
if((state_val_4977 === (18))){
var inst_4942 = (state_4976[(7)]);
var inst_4951 = cljs.core.first.call(null,inst_4942);
var state_4976__$1 = state_4976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_4976__$1,(20),out,inst_4951);
} else {
if((state_val_4977 === (8))){
var inst_4930 = (state_4976[(8)]);
var inst_4931 = (state_4976[(12)]);
var inst_4933 = (inst_4931 < inst_4930);
var inst_4934 = inst_4933;
var state_4976__$1 = state_4976;
if(cljs.core.truth_(inst_4934)){
var statearr_5010_5038 = state_4976__$1;
(statearr_5010_5038[(1)] = (10));

} else {
var statearr_5011_5039 = state_4976__$1;
(statearr_5011_5039[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3360__auto__))
;
return ((function (switch__3269__auto__,c__3360__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__3270__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__3270__auto____0 = (function (){
var statearr_5012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5012[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__3270__auto__);

(statearr_5012[(1)] = (1));

return statearr_5012;
});
var cljs$core$async$mapcat_STAR__$_state_machine__3270__auto____1 = (function (state_4976){
while(true){
var ret_value__3271__auto__ = (function (){try{while(true){
var result__3272__auto__ = switch__3269__auto__.call(null,state_4976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3272__auto__;
}
break;
}
}catch (e5013){if((e5013 instanceof Object)){
var ex__3273__auto__ = e5013;
var statearr_5014_5040 = state_4976;
(statearr_5014_5040[(5)] = ex__3273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_4976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5041 = state_4976;
state_4976 = G__5041;
continue;
} else {
return ret_value__3271__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__3270__auto__ = function(state_4976){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__3270__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__3270__auto____1.call(this,state_4976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__3270__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__3270__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__3270__auto__;
})()
;})(switch__3269__auto__,c__3360__auto__))
})();
var state__3362__auto__ = (function (){var statearr_5015 = f__3361__auto__.call(null);
(statearr_5015[(6)] = c__3360__auto__);

return statearr_5015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3362__auto__);
});})(c__3360__auto__))
);

return c__3360__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__5043 = arguments.length;
switch (G__5043) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__5046 = arguments.length;
switch (G__5046) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__5049 = arguments.length;
switch (G__5049) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3360__auto___5096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3360__auto___5096,out){
return (function (){
var f__3361__auto__ = (function (){var switch__3269__auto__ = ((function (c__3360__auto___5096,out){
return (function (state_5073){
var state_val_5074 = (state_5073[(1)]);
if((state_val_5074 === (7))){
var inst_5068 = (state_5073[(2)]);
var state_5073__$1 = state_5073;
var statearr_5075_5097 = state_5073__$1;
(statearr_5075_5097[(2)] = inst_5068);

(statearr_5075_5097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5074 === (1))){
var inst_5050 = null;
var state_5073__$1 = (function (){var statearr_5076 = state_5073;
(statearr_5076[(7)] = inst_5050);

return statearr_5076;
})();
var statearr_5077_5098 = state_5073__$1;
(statearr_5077_5098[(2)] = null);

(statearr_5077_5098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5074 === (4))){
var inst_5053 = (state_5073[(8)]);
var inst_5053__$1 = (state_5073[(2)]);
var inst_5054 = (inst_5053__$1 == null);
var inst_5055 = cljs.core.not.call(null,inst_5054);
var state_5073__$1 = (function (){var statearr_5078 = state_5073;
(statearr_5078[(8)] = inst_5053__$1);

return statearr_5078;
})();
if(inst_5055){
var statearr_5079_5099 = state_5073__$1;
(statearr_5079_5099[(1)] = (5));

} else {
var statearr_5080_5100 = state_5073__$1;
(statearr_5080_5100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5074 === (6))){
var state_5073__$1 = state_5073;
var statearr_5081_5101 = state_5073__$1;
(statearr_5081_5101[(2)] = null);

(statearr_5081_5101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5074 === (3))){
var inst_5070 = (state_5073[(2)]);
var inst_5071 = cljs.core.async.close_BANG_.call(null,out);
var state_5073__$1 = (function (){var statearr_5082 = state_5073;
(statearr_5082[(9)] = inst_5070);

return statearr_5082;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5073__$1,inst_5071);
} else {
if((state_val_5074 === (2))){
var state_5073__$1 = state_5073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5073__$1,(4),ch);
} else {
if((state_val_5074 === (11))){
var inst_5053 = (state_5073[(8)]);
var inst_5062 = (state_5073[(2)]);
var inst_5050 = inst_5053;
var state_5073__$1 = (function (){var statearr_5083 = state_5073;
(statearr_5083[(7)] = inst_5050);

(statearr_5083[(10)] = inst_5062);

return statearr_5083;
})();
var statearr_5084_5102 = state_5073__$1;
(statearr_5084_5102[(2)] = null);

(statearr_5084_5102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5074 === (9))){
var inst_5053 = (state_5073[(8)]);
var state_5073__$1 = state_5073;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5073__$1,(11),out,inst_5053);
} else {
if((state_val_5074 === (5))){
var inst_5050 = (state_5073[(7)]);
var inst_5053 = (state_5073[(8)]);
var inst_5057 = cljs.core._EQ_.call(null,inst_5053,inst_5050);
var state_5073__$1 = state_5073;
if(inst_5057){
var statearr_5086_5103 = state_5073__$1;
(statearr_5086_5103[(1)] = (8));

} else {
var statearr_5087_5104 = state_5073__$1;
(statearr_5087_5104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5074 === (10))){
var inst_5065 = (state_5073[(2)]);
var state_5073__$1 = state_5073;
var statearr_5088_5105 = state_5073__$1;
(statearr_5088_5105[(2)] = inst_5065);

(statearr_5088_5105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5074 === (8))){
var inst_5050 = (state_5073[(7)]);
var tmp5085 = inst_5050;
var inst_5050__$1 = tmp5085;
var state_5073__$1 = (function (){var statearr_5089 = state_5073;
(statearr_5089[(7)] = inst_5050__$1);

return statearr_5089;
})();
var statearr_5090_5106 = state_5073__$1;
(statearr_5090_5106[(2)] = null);

(statearr_5090_5106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__3360__auto___5096,out))
;
return ((function (switch__3269__auto__,c__3360__auto___5096,out){
return (function() {
var cljs$core$async$state_machine__3270__auto__ = null;
var cljs$core$async$state_machine__3270__auto____0 = (function (){
var statearr_5091 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_5091[(0)] = cljs$core$async$state_machine__3270__auto__);

(statearr_5091[(1)] = (1));

return statearr_5091;
});
var cljs$core$async$state_machine__3270__auto____1 = (function (state_5073){
while(true){
var ret_value__3271__auto__ = (function (){try{while(true){
var result__3272__auto__ = switch__3269__auto__.call(null,state_5073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3272__auto__;
}
break;
}
}catch (e5092){if((e5092 instanceof Object)){
var ex__3273__auto__ = e5092;
var statearr_5093_5107 = state_5073;
(statearr_5093_5107[(5)] = ex__3273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5108 = state_5073;
state_5073 = G__5108;
continue;
} else {
return ret_value__3271__auto__;
}
break;
}
});
cljs$core$async$state_machine__3270__auto__ = function(state_5073){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3270__auto____1.call(this,state_5073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3270__auto____0;
cljs$core$async$state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3270__auto____1;
return cljs$core$async$state_machine__3270__auto__;
})()
;})(switch__3269__auto__,c__3360__auto___5096,out))
})();
var state__3362__auto__ = (function (){var statearr_5094 = f__3361__auto__.call(null);
(statearr_5094[(6)] = c__3360__auto___5096);

return statearr_5094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3362__auto__);
});})(c__3360__auto___5096,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__5110 = arguments.length;
switch (G__5110) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3360__auto___5176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3360__auto___5176,out){
return (function (){
var f__3361__auto__ = (function (){var switch__3269__auto__ = ((function (c__3360__auto___5176,out){
return (function (state_5148){
var state_val_5149 = (state_5148[(1)]);
if((state_val_5149 === (7))){
var inst_5144 = (state_5148[(2)]);
var state_5148__$1 = state_5148;
var statearr_5150_5177 = state_5148__$1;
(statearr_5150_5177[(2)] = inst_5144);

(statearr_5150_5177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5149 === (1))){
var inst_5111 = (new Array(n));
var inst_5112 = inst_5111;
var inst_5113 = (0);
var state_5148__$1 = (function (){var statearr_5151 = state_5148;
(statearr_5151[(7)] = inst_5113);

(statearr_5151[(8)] = inst_5112);

return statearr_5151;
})();
var statearr_5152_5178 = state_5148__$1;
(statearr_5152_5178[(2)] = null);

(statearr_5152_5178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5149 === (4))){
var inst_5116 = (state_5148[(9)]);
var inst_5116__$1 = (state_5148[(2)]);
var inst_5117 = (inst_5116__$1 == null);
var inst_5118 = cljs.core.not.call(null,inst_5117);
var state_5148__$1 = (function (){var statearr_5153 = state_5148;
(statearr_5153[(9)] = inst_5116__$1);

return statearr_5153;
})();
if(inst_5118){
var statearr_5154_5179 = state_5148__$1;
(statearr_5154_5179[(1)] = (5));

} else {
var statearr_5155_5180 = state_5148__$1;
(statearr_5155_5180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5149 === (15))){
var inst_5138 = (state_5148[(2)]);
var state_5148__$1 = state_5148;
var statearr_5156_5181 = state_5148__$1;
(statearr_5156_5181[(2)] = inst_5138);

(statearr_5156_5181[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5149 === (13))){
var state_5148__$1 = state_5148;
var statearr_5157_5182 = state_5148__$1;
(statearr_5157_5182[(2)] = null);

(statearr_5157_5182[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5149 === (6))){
var inst_5113 = (state_5148[(7)]);
var inst_5134 = (inst_5113 > (0));
var state_5148__$1 = state_5148;
if(cljs.core.truth_(inst_5134)){
var statearr_5158_5183 = state_5148__$1;
(statearr_5158_5183[(1)] = (12));

} else {
var statearr_5159_5184 = state_5148__$1;
(statearr_5159_5184[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5149 === (3))){
var inst_5146 = (state_5148[(2)]);
var state_5148__$1 = state_5148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5148__$1,inst_5146);
} else {
if((state_val_5149 === (12))){
var inst_5112 = (state_5148[(8)]);
var inst_5136 = cljs.core.vec.call(null,inst_5112);
var state_5148__$1 = state_5148;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5148__$1,(15),out,inst_5136);
} else {
if((state_val_5149 === (2))){
var state_5148__$1 = state_5148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5148__$1,(4),ch);
} else {
if((state_val_5149 === (11))){
var inst_5128 = (state_5148[(2)]);
var inst_5129 = (new Array(n));
var inst_5112 = inst_5129;
var inst_5113 = (0);
var state_5148__$1 = (function (){var statearr_5160 = state_5148;
(statearr_5160[(7)] = inst_5113);

(statearr_5160[(10)] = inst_5128);

(statearr_5160[(8)] = inst_5112);

return statearr_5160;
})();
var statearr_5161_5185 = state_5148__$1;
(statearr_5161_5185[(2)] = null);

(statearr_5161_5185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5149 === (9))){
var inst_5112 = (state_5148[(8)]);
var inst_5126 = cljs.core.vec.call(null,inst_5112);
var state_5148__$1 = state_5148;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5148__$1,(11),out,inst_5126);
} else {
if((state_val_5149 === (5))){
var inst_5116 = (state_5148[(9)]);
var inst_5113 = (state_5148[(7)]);
var inst_5121 = (state_5148[(11)]);
var inst_5112 = (state_5148[(8)]);
var inst_5120 = (inst_5112[inst_5113] = inst_5116);
var inst_5121__$1 = (inst_5113 + (1));
var inst_5122 = (inst_5121__$1 < n);
var state_5148__$1 = (function (){var statearr_5162 = state_5148;
(statearr_5162[(12)] = inst_5120);

(statearr_5162[(11)] = inst_5121__$1);

return statearr_5162;
})();
if(cljs.core.truth_(inst_5122)){
var statearr_5163_5186 = state_5148__$1;
(statearr_5163_5186[(1)] = (8));

} else {
var statearr_5164_5187 = state_5148__$1;
(statearr_5164_5187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5149 === (14))){
var inst_5141 = (state_5148[(2)]);
var inst_5142 = cljs.core.async.close_BANG_.call(null,out);
var state_5148__$1 = (function (){var statearr_5166 = state_5148;
(statearr_5166[(13)] = inst_5141);

return statearr_5166;
})();
var statearr_5167_5188 = state_5148__$1;
(statearr_5167_5188[(2)] = inst_5142);

(statearr_5167_5188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5149 === (10))){
var inst_5132 = (state_5148[(2)]);
var state_5148__$1 = state_5148;
var statearr_5168_5189 = state_5148__$1;
(statearr_5168_5189[(2)] = inst_5132);

(statearr_5168_5189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5149 === (8))){
var inst_5121 = (state_5148[(11)]);
var inst_5112 = (state_5148[(8)]);
var tmp5165 = inst_5112;
var inst_5112__$1 = tmp5165;
var inst_5113 = inst_5121;
var state_5148__$1 = (function (){var statearr_5169 = state_5148;
(statearr_5169[(7)] = inst_5113);

(statearr_5169[(8)] = inst_5112__$1);

return statearr_5169;
})();
var statearr_5170_5190 = state_5148__$1;
(statearr_5170_5190[(2)] = null);

(statearr_5170_5190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3360__auto___5176,out))
;
return ((function (switch__3269__auto__,c__3360__auto___5176,out){
return (function() {
var cljs$core$async$state_machine__3270__auto__ = null;
var cljs$core$async$state_machine__3270__auto____0 = (function (){
var statearr_5171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5171[(0)] = cljs$core$async$state_machine__3270__auto__);

(statearr_5171[(1)] = (1));

return statearr_5171;
});
var cljs$core$async$state_machine__3270__auto____1 = (function (state_5148){
while(true){
var ret_value__3271__auto__ = (function (){try{while(true){
var result__3272__auto__ = switch__3269__auto__.call(null,state_5148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3272__auto__;
}
break;
}
}catch (e5172){if((e5172 instanceof Object)){
var ex__3273__auto__ = e5172;
var statearr_5173_5191 = state_5148;
(statearr_5173_5191[(5)] = ex__3273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5192 = state_5148;
state_5148 = G__5192;
continue;
} else {
return ret_value__3271__auto__;
}
break;
}
});
cljs$core$async$state_machine__3270__auto__ = function(state_5148){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3270__auto____1.call(this,state_5148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3270__auto____0;
cljs$core$async$state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3270__auto____1;
return cljs$core$async$state_machine__3270__auto__;
})()
;})(switch__3269__auto__,c__3360__auto___5176,out))
})();
var state__3362__auto__ = (function (){var statearr_5174 = f__3361__auto__.call(null);
(statearr_5174[(6)] = c__3360__auto___5176);

return statearr_5174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3362__auto__);
});})(c__3360__auto___5176,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__5194 = arguments.length;
switch (G__5194) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__3360__auto___5264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__3360__auto___5264,out){
return (function (){
var f__3361__auto__ = (function (){var switch__3269__auto__ = ((function (c__3360__auto___5264,out){
return (function (state_5236){
var state_val_5237 = (state_5236[(1)]);
if((state_val_5237 === (7))){
var inst_5232 = (state_5236[(2)]);
var state_5236__$1 = state_5236;
var statearr_5238_5265 = state_5236__$1;
(statearr_5238_5265[(2)] = inst_5232);

(statearr_5238_5265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5237 === (1))){
var inst_5195 = [];
var inst_5196 = inst_5195;
var inst_5197 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_5236__$1 = (function (){var statearr_5239 = state_5236;
(statearr_5239[(7)] = inst_5196);

(statearr_5239[(8)] = inst_5197);

return statearr_5239;
})();
var statearr_5240_5266 = state_5236__$1;
(statearr_5240_5266[(2)] = null);

(statearr_5240_5266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5237 === (4))){
var inst_5200 = (state_5236[(9)]);
var inst_5200__$1 = (state_5236[(2)]);
var inst_5201 = (inst_5200__$1 == null);
var inst_5202 = cljs.core.not.call(null,inst_5201);
var state_5236__$1 = (function (){var statearr_5241 = state_5236;
(statearr_5241[(9)] = inst_5200__$1);

return statearr_5241;
})();
if(inst_5202){
var statearr_5242_5267 = state_5236__$1;
(statearr_5242_5267[(1)] = (5));

} else {
var statearr_5243_5268 = state_5236__$1;
(statearr_5243_5268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5237 === (15))){
var inst_5226 = (state_5236[(2)]);
var state_5236__$1 = state_5236;
var statearr_5244_5269 = state_5236__$1;
(statearr_5244_5269[(2)] = inst_5226);

(statearr_5244_5269[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5237 === (13))){
var state_5236__$1 = state_5236;
var statearr_5245_5270 = state_5236__$1;
(statearr_5245_5270[(2)] = null);

(statearr_5245_5270[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5237 === (6))){
var inst_5196 = (state_5236[(7)]);
var inst_5221 = inst_5196.length;
var inst_5222 = (inst_5221 > (0));
var state_5236__$1 = state_5236;
if(cljs.core.truth_(inst_5222)){
var statearr_5246_5271 = state_5236__$1;
(statearr_5246_5271[(1)] = (12));

} else {
var statearr_5247_5272 = state_5236__$1;
(statearr_5247_5272[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5237 === (3))){
var inst_5234 = (state_5236[(2)]);
var state_5236__$1 = state_5236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_5236__$1,inst_5234);
} else {
if((state_val_5237 === (12))){
var inst_5196 = (state_5236[(7)]);
var inst_5224 = cljs.core.vec.call(null,inst_5196);
var state_5236__$1 = state_5236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5236__$1,(15),out,inst_5224);
} else {
if((state_val_5237 === (2))){
var state_5236__$1 = state_5236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_5236__$1,(4),ch);
} else {
if((state_val_5237 === (11))){
var inst_5200 = (state_5236[(9)]);
var inst_5204 = (state_5236[(10)]);
var inst_5214 = (state_5236[(2)]);
var inst_5215 = [];
var inst_5216 = inst_5215.push(inst_5200);
var inst_5196 = inst_5215;
var inst_5197 = inst_5204;
var state_5236__$1 = (function (){var statearr_5248 = state_5236;
(statearr_5248[(7)] = inst_5196);

(statearr_5248[(8)] = inst_5197);

(statearr_5248[(11)] = inst_5216);

(statearr_5248[(12)] = inst_5214);

return statearr_5248;
})();
var statearr_5249_5273 = state_5236__$1;
(statearr_5249_5273[(2)] = null);

(statearr_5249_5273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5237 === (9))){
var inst_5196 = (state_5236[(7)]);
var inst_5212 = cljs.core.vec.call(null,inst_5196);
var state_5236__$1 = state_5236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_5236__$1,(11),out,inst_5212);
} else {
if((state_val_5237 === (5))){
var inst_5200 = (state_5236[(9)]);
var inst_5204 = (state_5236[(10)]);
var inst_5197 = (state_5236[(8)]);
var inst_5204__$1 = f.call(null,inst_5200);
var inst_5205 = cljs.core._EQ_.call(null,inst_5204__$1,inst_5197);
var inst_5206 = cljs.core.keyword_identical_QMARK_.call(null,inst_5197,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_5207 = ((inst_5205) || (inst_5206));
var state_5236__$1 = (function (){var statearr_5250 = state_5236;
(statearr_5250[(10)] = inst_5204__$1);

return statearr_5250;
})();
if(cljs.core.truth_(inst_5207)){
var statearr_5251_5274 = state_5236__$1;
(statearr_5251_5274[(1)] = (8));

} else {
var statearr_5252_5275 = state_5236__$1;
(statearr_5252_5275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5237 === (14))){
var inst_5229 = (state_5236[(2)]);
var inst_5230 = cljs.core.async.close_BANG_.call(null,out);
var state_5236__$1 = (function (){var statearr_5254 = state_5236;
(statearr_5254[(13)] = inst_5229);

return statearr_5254;
})();
var statearr_5255_5276 = state_5236__$1;
(statearr_5255_5276[(2)] = inst_5230);

(statearr_5255_5276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5237 === (10))){
var inst_5219 = (state_5236[(2)]);
var state_5236__$1 = state_5236;
var statearr_5256_5277 = state_5236__$1;
(statearr_5256_5277[(2)] = inst_5219);

(statearr_5256_5277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_5237 === (8))){
var inst_5196 = (state_5236[(7)]);
var inst_5200 = (state_5236[(9)]);
var inst_5204 = (state_5236[(10)]);
var inst_5209 = inst_5196.push(inst_5200);
var tmp5253 = inst_5196;
var inst_5196__$1 = tmp5253;
var inst_5197 = inst_5204;
var state_5236__$1 = (function (){var statearr_5257 = state_5236;
(statearr_5257[(7)] = inst_5196__$1);

(statearr_5257[(8)] = inst_5197);

(statearr_5257[(14)] = inst_5209);

return statearr_5257;
})();
var statearr_5258_5278 = state_5236__$1;
(statearr_5258_5278[(2)] = null);

(statearr_5258_5278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__3360__auto___5264,out))
;
return ((function (switch__3269__auto__,c__3360__auto___5264,out){
return (function() {
var cljs$core$async$state_machine__3270__auto__ = null;
var cljs$core$async$state_machine__3270__auto____0 = (function (){
var statearr_5259 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_5259[(0)] = cljs$core$async$state_machine__3270__auto__);

(statearr_5259[(1)] = (1));

return statearr_5259;
});
var cljs$core$async$state_machine__3270__auto____1 = (function (state_5236){
while(true){
var ret_value__3271__auto__ = (function (){try{while(true){
var result__3272__auto__ = switch__3269__auto__.call(null,state_5236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__3272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__3272__auto__;
}
break;
}
}catch (e5260){if((e5260 instanceof Object)){
var ex__3273__auto__ = e5260;
var statearr_5261_5279 = state_5236;
(statearr_5261_5279[(5)] = ex__3273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_5236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e5260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__3271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__5280 = state_5236;
state_5236 = G__5280;
continue;
} else {
return ret_value__3271__auto__;
}
break;
}
});
cljs$core$async$state_machine__3270__auto__ = function(state_5236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__3270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__3270__auto____1.call(this,state_5236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__3270__auto____0;
cljs$core$async$state_machine__3270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__3270__auto____1;
return cljs$core$async$state_machine__3270__auto__;
})()
;})(switch__3269__auto__,c__3360__auto___5264,out))
})();
var state__3362__auto__ = (function (){var statearr_5262 = f__3361__auto__.call(null);
(statearr_5262[(6)] = c__3360__auto___5264);

return statearr_5262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__3362__auto__);
});})(c__3360__auto___5264,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1540234819512
