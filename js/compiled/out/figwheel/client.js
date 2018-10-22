// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e44252){if((e44252 instanceof Error)){
var e = e44252;
return "Error: Unable to stringify";
} else {
throw e44252;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__44255 = arguments.length;
switch (G__44255) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__44253_SHARP_){
if(typeof p1__44253_SHARP_ === 'string'){
return p1__44253_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__44253_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___44258 = arguments.length;
var i__4532__auto___44259 = (0);
while(true){
if((i__4532__auto___44259 < len__4531__auto___44258)){
args__4534__auto__.push((arguments[i__4532__auto___44259]));

var G__44260 = (i__4532__auto___44259 + (1));
i__4532__auto___44259 = G__44260;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq44257){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44257));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4534__auto__ = [];
var len__4531__auto___44262 = arguments.length;
var i__4532__auto___44263 = (0);
while(true){
if((i__4532__auto___44263 < len__4531__auto___44262)){
args__4534__auto__.push((arguments[i__4532__auto___44263]));

var G__44264 = (i__4532__auto___44263 + (1));
i__4532__auto___44263 = G__44264;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq44261){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44261));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__44265){
var map__44266 = p__44265;
var map__44266__$1 = ((((!((map__44266 == null)))?(((((map__44266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44266):map__44266);
var message = cljs.core.get.call(null,map__44266__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__44266__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3949__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3938__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3938__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3938__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28677__auto___44345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28677__auto___44345,ch){
return (function (){
var f__28678__auto__ = (function (){var switch__28518__auto__ = ((function (c__28677__auto___44345,ch){
return (function (state_44317){
var state_val_44318 = (state_44317[(1)]);
if((state_val_44318 === (7))){
var inst_44313 = (state_44317[(2)]);
var state_44317__$1 = state_44317;
var statearr_44319_44346 = state_44317__$1;
(statearr_44319_44346[(2)] = inst_44313);

(statearr_44319_44346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44318 === (1))){
var state_44317__$1 = state_44317;
var statearr_44320_44347 = state_44317__$1;
(statearr_44320_44347[(2)] = null);

(statearr_44320_44347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44318 === (4))){
var inst_44270 = (state_44317[(7)]);
var inst_44270__$1 = (state_44317[(2)]);
var state_44317__$1 = (function (){var statearr_44321 = state_44317;
(statearr_44321[(7)] = inst_44270__$1);

return statearr_44321;
})();
if(cljs.core.truth_(inst_44270__$1)){
var statearr_44322_44348 = state_44317__$1;
(statearr_44322_44348[(1)] = (5));

} else {
var statearr_44323_44349 = state_44317__$1;
(statearr_44323_44349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44318 === (15))){
var inst_44277 = (state_44317[(8)]);
var inst_44292 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_44277);
var inst_44293 = cljs.core.first.call(null,inst_44292);
var inst_44294 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_44293);
var inst_44295 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_44294)].join('');
var inst_44296 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_44295);
var state_44317__$1 = state_44317;
var statearr_44324_44350 = state_44317__$1;
(statearr_44324_44350[(2)] = inst_44296);

(statearr_44324_44350[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44318 === (13))){
var inst_44301 = (state_44317[(2)]);
var state_44317__$1 = state_44317;
var statearr_44325_44351 = state_44317__$1;
(statearr_44325_44351[(2)] = inst_44301);

(statearr_44325_44351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44318 === (6))){
var state_44317__$1 = state_44317;
var statearr_44326_44352 = state_44317__$1;
(statearr_44326_44352[(2)] = null);

(statearr_44326_44352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44318 === (17))){
var inst_44299 = (state_44317[(2)]);
var state_44317__$1 = state_44317;
var statearr_44327_44353 = state_44317__$1;
(statearr_44327_44353[(2)] = inst_44299);

(statearr_44327_44353[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44318 === (3))){
var inst_44315 = (state_44317[(2)]);
var state_44317__$1 = state_44317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44317__$1,inst_44315);
} else {
if((state_val_44318 === (12))){
var inst_44276 = (state_44317[(9)]);
var inst_44290 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_44276,opts);
var state_44317__$1 = state_44317;
if(cljs.core.truth_(inst_44290)){
var statearr_44328_44354 = state_44317__$1;
(statearr_44328_44354[(1)] = (15));

} else {
var statearr_44329_44355 = state_44317__$1;
(statearr_44329_44355[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44318 === (2))){
var state_44317__$1 = state_44317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44317__$1,(4),ch);
} else {
if((state_val_44318 === (11))){
var inst_44277 = (state_44317[(8)]);
var inst_44282 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44283 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_44277);
var inst_44284 = cljs.core.async.timeout.call(null,(1000));
var inst_44285 = [inst_44283,inst_44284];
var inst_44286 = (new cljs.core.PersistentVector(null,2,(5),inst_44282,inst_44285,null));
var state_44317__$1 = state_44317;
return cljs.core.async.ioc_alts_BANG_.call(null,state_44317__$1,(14),inst_44286);
} else {
if((state_val_44318 === (9))){
var inst_44277 = (state_44317[(8)]);
var inst_44303 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_44304 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_44277);
var inst_44305 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_44304);
var inst_44306 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_44305)].join('');
var inst_44307 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_44306);
var state_44317__$1 = (function (){var statearr_44330 = state_44317;
(statearr_44330[(10)] = inst_44303);

return statearr_44330;
})();
var statearr_44331_44356 = state_44317__$1;
(statearr_44331_44356[(2)] = inst_44307);

(statearr_44331_44356[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44318 === (5))){
var inst_44270 = (state_44317[(7)]);
var inst_44272 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_44273 = (new cljs.core.PersistentArrayMap(null,2,inst_44272,null));
var inst_44274 = (new cljs.core.PersistentHashSet(null,inst_44273,null));
var inst_44275 = figwheel.client.focus_msgs.call(null,inst_44274,inst_44270);
var inst_44276 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_44275);
var inst_44277 = cljs.core.first.call(null,inst_44275);
var inst_44278 = figwheel.client.autoload_QMARK_.call(null);
var state_44317__$1 = (function (){var statearr_44332 = state_44317;
(statearr_44332[(9)] = inst_44276);

(statearr_44332[(8)] = inst_44277);

return statearr_44332;
})();
if(cljs.core.truth_(inst_44278)){
var statearr_44333_44357 = state_44317__$1;
(statearr_44333_44357[(1)] = (8));

} else {
var statearr_44334_44358 = state_44317__$1;
(statearr_44334_44358[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44318 === (14))){
var inst_44288 = (state_44317[(2)]);
var state_44317__$1 = state_44317;
var statearr_44335_44359 = state_44317__$1;
(statearr_44335_44359[(2)] = inst_44288);

(statearr_44335_44359[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44318 === (16))){
var state_44317__$1 = state_44317;
var statearr_44336_44360 = state_44317__$1;
(statearr_44336_44360[(2)] = null);

(statearr_44336_44360[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44318 === (10))){
var inst_44309 = (state_44317[(2)]);
var state_44317__$1 = (function (){var statearr_44337 = state_44317;
(statearr_44337[(11)] = inst_44309);

return statearr_44337;
})();
var statearr_44338_44361 = state_44317__$1;
(statearr_44338_44361[(2)] = null);

(statearr_44338_44361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44318 === (8))){
var inst_44276 = (state_44317[(9)]);
var inst_44280 = figwheel.client.reload_file_state_QMARK_.call(null,inst_44276,opts);
var state_44317__$1 = state_44317;
if(cljs.core.truth_(inst_44280)){
var statearr_44339_44362 = state_44317__$1;
(statearr_44339_44362[(1)] = (11));

} else {
var statearr_44340_44363 = state_44317__$1;
(statearr_44340_44363[(1)] = (12));

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
});})(c__28677__auto___44345,ch))
;
return ((function (switch__28518__auto__,c__28677__auto___44345,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28519__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28519__auto____0 = (function (){
var statearr_44341 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44341[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28519__auto__);

(statearr_44341[(1)] = (1));

return statearr_44341;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28519__auto____1 = (function (state_44317){
while(true){
var ret_value__28520__auto__ = (function (){try{while(true){
var result__28521__auto__ = switch__28518__auto__.call(null,state_44317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28521__auto__;
}
break;
}
}catch (e44342){if((e44342 instanceof Object)){
var ex__28522__auto__ = e44342;
var statearr_44343_44364 = state_44317;
(statearr_44343_44364[(5)] = ex__28522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44365 = state_44317;
state_44317 = G__44365;
continue;
} else {
return ret_value__28520__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28519__auto__ = function(state_44317){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28519__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28519__auto____1.call(this,state_44317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28519__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28519__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28519__auto__;
})()
;})(switch__28518__auto__,c__28677__auto___44345,ch))
})();
var state__28679__auto__ = (function (){var statearr_44344 = f__28678__auto__.call(null);
(statearr_44344[(6)] = c__28677__auto___44345);

return statearr_44344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28679__auto__);
});})(c__28677__auto___44345,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__44366_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__44366_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_44370 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_44370){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_44368 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_44369 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_44368,_STAR_print_fn_STAR_44369,sb,base_path_44370){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_44368,_STAR_print_fn_STAR_44369,sb,base_path_44370))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_44369;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_44368;
}}catch (e44367){if((e44367 instanceof Error)){
var e = e44367;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_44370], null));
} else {
var e = e44367;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_44370))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__44371){
var map__44372 = p__44371;
var map__44372__$1 = ((((!((map__44372 == null)))?(((((map__44372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44372):map__44372);
var opts = map__44372__$1;
var build_id = cljs.core.get.call(null,map__44372__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__44372,map__44372__$1,opts,build_id){
return (function (p__44374){
var vec__44375 = p__44374;
var seq__44376 = cljs.core.seq.call(null,vec__44375);
var first__44377 = cljs.core.first.call(null,seq__44376);
var seq__44376__$1 = cljs.core.next.call(null,seq__44376);
var map__44378 = first__44377;
var map__44378__$1 = ((((!((map__44378 == null)))?(((((map__44378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44378):map__44378);
var msg = map__44378__$1;
var msg_name = cljs.core.get.call(null,map__44378__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__44376__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__44375,seq__44376,first__44377,seq__44376__$1,map__44378,map__44378__$1,msg,msg_name,_,map__44372,map__44372__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__44375,seq__44376,first__44377,seq__44376__$1,map__44378,map__44378__$1,msg,msg_name,_,map__44372,map__44372__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__44372,map__44372__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__44380){
var vec__44381 = p__44380;
var seq__44382 = cljs.core.seq.call(null,vec__44381);
var first__44383 = cljs.core.first.call(null,seq__44382);
var seq__44382__$1 = cljs.core.next.call(null,seq__44382);
var map__44384 = first__44383;
var map__44384__$1 = ((((!((map__44384 == null)))?(((((map__44384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44384):map__44384);
var msg = map__44384__$1;
var msg_name = cljs.core.get.call(null,map__44384__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__44382__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__44386){
var map__44387 = p__44386;
var map__44387__$1 = ((((!((map__44387 == null)))?(((((map__44387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44387):map__44387);
var on_compile_warning = cljs.core.get.call(null,map__44387__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__44387__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__44387,map__44387__$1,on_compile_warning,on_compile_fail){
return (function (p__44389){
var vec__44390 = p__44389;
var seq__44391 = cljs.core.seq.call(null,vec__44390);
var first__44392 = cljs.core.first.call(null,seq__44391);
var seq__44391__$1 = cljs.core.next.call(null,seq__44391);
var map__44393 = first__44392;
var map__44393__$1 = ((((!((map__44393 == null)))?(((((map__44393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44393):map__44393);
var msg = map__44393__$1;
var msg_name = cljs.core.get.call(null,map__44393__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__44391__$1;
var pred__44395 = cljs.core._EQ_;
var expr__44396 = msg_name;
if(cljs.core.truth_(pred__44395.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__44396))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__44395.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__44396))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__44387,map__44387__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28677__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28677__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28678__auto__ = (function (){var switch__28518__auto__ = ((function (c__28677__auto__,msg_hist,msg_names,msg){
return (function (state_44485){
var state_val_44486 = (state_44485[(1)]);
if((state_val_44486 === (7))){
var inst_44405 = (state_44485[(2)]);
var state_44485__$1 = state_44485;
if(cljs.core.truth_(inst_44405)){
var statearr_44487_44534 = state_44485__$1;
(statearr_44487_44534[(1)] = (8));

} else {
var statearr_44488_44535 = state_44485__$1;
(statearr_44488_44535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (20))){
var inst_44479 = (state_44485[(2)]);
var state_44485__$1 = state_44485;
var statearr_44489_44536 = state_44485__$1;
(statearr_44489_44536[(2)] = inst_44479);

(statearr_44489_44536[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (27))){
var inst_44475 = (state_44485[(2)]);
var state_44485__$1 = state_44485;
var statearr_44490_44537 = state_44485__$1;
(statearr_44490_44537[(2)] = inst_44475);

(statearr_44490_44537[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (1))){
var inst_44398 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_44485__$1 = state_44485;
if(cljs.core.truth_(inst_44398)){
var statearr_44491_44538 = state_44485__$1;
(statearr_44491_44538[(1)] = (2));

} else {
var statearr_44492_44539 = state_44485__$1;
(statearr_44492_44539[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (24))){
var inst_44477 = (state_44485[(2)]);
var state_44485__$1 = state_44485;
var statearr_44493_44540 = state_44485__$1;
(statearr_44493_44540[(2)] = inst_44477);

(statearr_44493_44540[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (4))){
var inst_44483 = (state_44485[(2)]);
var state_44485__$1 = state_44485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44485__$1,inst_44483);
} else {
if((state_val_44486 === (15))){
var inst_44481 = (state_44485[(2)]);
var state_44485__$1 = state_44485;
var statearr_44494_44541 = state_44485__$1;
(statearr_44494_44541[(2)] = inst_44481);

(statearr_44494_44541[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (21))){
var inst_44434 = (state_44485[(2)]);
var inst_44435 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44436 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44435);
var state_44485__$1 = (function (){var statearr_44495 = state_44485;
(statearr_44495[(7)] = inst_44434);

return statearr_44495;
})();
var statearr_44496_44542 = state_44485__$1;
(statearr_44496_44542[(2)] = inst_44436);

(statearr_44496_44542[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (31))){
var inst_44464 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_44485__$1 = state_44485;
if(cljs.core.truth_(inst_44464)){
var statearr_44497_44543 = state_44485__$1;
(statearr_44497_44543[(1)] = (34));

} else {
var statearr_44498_44544 = state_44485__$1;
(statearr_44498_44544[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (32))){
var inst_44473 = (state_44485[(2)]);
var state_44485__$1 = state_44485;
var statearr_44499_44545 = state_44485__$1;
(statearr_44499_44545[(2)] = inst_44473);

(statearr_44499_44545[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (33))){
var inst_44460 = (state_44485[(2)]);
var inst_44461 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44462 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44461);
var state_44485__$1 = (function (){var statearr_44500 = state_44485;
(statearr_44500[(8)] = inst_44460);

return statearr_44500;
})();
var statearr_44501_44546 = state_44485__$1;
(statearr_44501_44546[(2)] = inst_44462);

(statearr_44501_44546[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (13))){
var inst_44419 = figwheel.client.heads_up.clear.call(null);
var state_44485__$1 = state_44485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44485__$1,(16),inst_44419);
} else {
if((state_val_44486 === (22))){
var inst_44440 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44441 = figwheel.client.heads_up.append_warning_message.call(null,inst_44440);
var state_44485__$1 = state_44485;
var statearr_44502_44547 = state_44485__$1;
(statearr_44502_44547[(2)] = inst_44441);

(statearr_44502_44547[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (36))){
var inst_44471 = (state_44485[(2)]);
var state_44485__$1 = state_44485;
var statearr_44503_44548 = state_44485__$1;
(statearr_44503_44548[(2)] = inst_44471);

(statearr_44503_44548[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (29))){
var inst_44451 = (state_44485[(2)]);
var inst_44452 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44453 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44452);
var state_44485__$1 = (function (){var statearr_44504 = state_44485;
(statearr_44504[(9)] = inst_44451);

return statearr_44504;
})();
var statearr_44505_44549 = state_44485__$1;
(statearr_44505_44549[(2)] = inst_44453);

(statearr_44505_44549[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (6))){
var inst_44400 = (state_44485[(10)]);
var state_44485__$1 = state_44485;
var statearr_44506_44550 = state_44485__$1;
(statearr_44506_44550[(2)] = inst_44400);

(statearr_44506_44550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (28))){
var inst_44447 = (state_44485[(2)]);
var inst_44448 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44449 = figwheel.client.heads_up.display_warning.call(null,inst_44448);
var state_44485__$1 = (function (){var statearr_44507 = state_44485;
(statearr_44507[(11)] = inst_44447);

return statearr_44507;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44485__$1,(29),inst_44449);
} else {
if((state_val_44486 === (25))){
var inst_44445 = figwheel.client.heads_up.clear.call(null);
var state_44485__$1 = state_44485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44485__$1,(28),inst_44445);
} else {
if((state_val_44486 === (34))){
var inst_44466 = figwheel.client.heads_up.flash_loaded.call(null);
var state_44485__$1 = state_44485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44485__$1,(37),inst_44466);
} else {
if((state_val_44486 === (17))){
var inst_44425 = (state_44485[(2)]);
var inst_44426 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44427 = figwheel.client.auto_jump_to_error.call(null,opts,inst_44426);
var state_44485__$1 = (function (){var statearr_44508 = state_44485;
(statearr_44508[(12)] = inst_44425);

return statearr_44508;
})();
var statearr_44509_44551 = state_44485__$1;
(statearr_44509_44551[(2)] = inst_44427);

(statearr_44509_44551[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (3))){
var inst_44417 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_44485__$1 = state_44485;
if(cljs.core.truth_(inst_44417)){
var statearr_44510_44552 = state_44485__$1;
(statearr_44510_44552[(1)] = (13));

} else {
var statearr_44511_44553 = state_44485__$1;
(statearr_44511_44553[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (12))){
var inst_44413 = (state_44485[(2)]);
var state_44485__$1 = state_44485;
var statearr_44512_44554 = state_44485__$1;
(statearr_44512_44554[(2)] = inst_44413);

(statearr_44512_44554[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (2))){
var inst_44400 = (state_44485[(10)]);
var inst_44400__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_44485__$1 = (function (){var statearr_44513 = state_44485;
(statearr_44513[(10)] = inst_44400__$1);

return statearr_44513;
})();
if(cljs.core.truth_(inst_44400__$1)){
var statearr_44514_44555 = state_44485__$1;
(statearr_44514_44555[(1)] = (5));

} else {
var statearr_44515_44556 = state_44485__$1;
(statearr_44515_44556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (23))){
var inst_44443 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_44485__$1 = state_44485;
if(cljs.core.truth_(inst_44443)){
var statearr_44516_44557 = state_44485__$1;
(statearr_44516_44557[(1)] = (25));

} else {
var statearr_44517_44558 = state_44485__$1;
(statearr_44517_44558[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (35))){
var state_44485__$1 = state_44485;
var statearr_44518_44559 = state_44485__$1;
(statearr_44518_44559[(2)] = null);

(statearr_44518_44559[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (19))){
var inst_44438 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_44485__$1 = state_44485;
if(cljs.core.truth_(inst_44438)){
var statearr_44519_44560 = state_44485__$1;
(statearr_44519_44560[(1)] = (22));

} else {
var statearr_44520_44561 = state_44485__$1;
(statearr_44520_44561[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (11))){
var inst_44409 = (state_44485[(2)]);
var state_44485__$1 = state_44485;
var statearr_44521_44562 = state_44485__$1;
(statearr_44521_44562[(2)] = inst_44409);

(statearr_44521_44562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (9))){
var inst_44411 = figwheel.client.heads_up.clear.call(null);
var state_44485__$1 = state_44485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44485__$1,(12),inst_44411);
} else {
if((state_val_44486 === (5))){
var inst_44402 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_44485__$1 = state_44485;
var statearr_44522_44563 = state_44485__$1;
(statearr_44522_44563[(2)] = inst_44402);

(statearr_44522_44563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (14))){
var inst_44429 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_44485__$1 = state_44485;
if(cljs.core.truth_(inst_44429)){
var statearr_44523_44564 = state_44485__$1;
(statearr_44523_44564[(1)] = (18));

} else {
var statearr_44524_44565 = state_44485__$1;
(statearr_44524_44565[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (26))){
var inst_44455 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_44485__$1 = state_44485;
if(cljs.core.truth_(inst_44455)){
var statearr_44525_44566 = state_44485__$1;
(statearr_44525_44566[(1)] = (30));

} else {
var statearr_44526_44567 = state_44485__$1;
(statearr_44526_44567[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (16))){
var inst_44421 = (state_44485[(2)]);
var inst_44422 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44423 = figwheel.client.heads_up.display_exception.call(null,inst_44422);
var state_44485__$1 = (function (){var statearr_44527 = state_44485;
(statearr_44527[(13)] = inst_44421);

return statearr_44527;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44485__$1,(17),inst_44423);
} else {
if((state_val_44486 === (30))){
var inst_44457 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44458 = figwheel.client.heads_up.display_warning.call(null,inst_44457);
var state_44485__$1 = state_44485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44485__$1,(33),inst_44458);
} else {
if((state_val_44486 === (10))){
var inst_44415 = (state_44485[(2)]);
var state_44485__$1 = state_44485;
var statearr_44528_44568 = state_44485__$1;
(statearr_44528_44568[(2)] = inst_44415);

(statearr_44528_44568[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (18))){
var inst_44431 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44432 = figwheel.client.heads_up.display_exception.call(null,inst_44431);
var state_44485__$1 = state_44485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44485__$1,(21),inst_44432);
} else {
if((state_val_44486 === (37))){
var inst_44468 = (state_44485[(2)]);
var state_44485__$1 = state_44485;
var statearr_44529_44569 = state_44485__$1;
(statearr_44529_44569[(2)] = inst_44468);

(statearr_44529_44569[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44486 === (8))){
var inst_44407 = figwheel.client.heads_up.flash_loaded.call(null);
var state_44485__$1 = state_44485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44485__$1,(11),inst_44407);
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
});})(c__28677__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28518__auto__,c__28677__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28519__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28519__auto____0 = (function (){
var statearr_44530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44530[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28519__auto__);

(statearr_44530[(1)] = (1));

return statearr_44530;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28519__auto____1 = (function (state_44485){
while(true){
var ret_value__28520__auto__ = (function (){try{while(true){
var result__28521__auto__ = switch__28518__auto__.call(null,state_44485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28521__auto__;
}
break;
}
}catch (e44531){if((e44531 instanceof Object)){
var ex__28522__auto__ = e44531;
var statearr_44532_44570 = state_44485;
(statearr_44532_44570[(5)] = ex__28522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44571 = state_44485;
state_44485 = G__44571;
continue;
} else {
return ret_value__28520__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28519__auto__ = function(state_44485){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28519__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28519__auto____1.call(this,state_44485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28519__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28519__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28519__auto__;
})()
;})(switch__28518__auto__,c__28677__auto__,msg_hist,msg_names,msg))
})();
var state__28679__auto__ = (function (){var statearr_44533 = f__28678__auto__.call(null);
(statearr_44533[(6)] = c__28677__auto__);

return statearr_44533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28679__auto__);
});})(c__28677__auto__,msg_hist,msg_names,msg))
);

return c__28677__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28677__auto___44600 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28677__auto___44600,ch){
return (function (){
var f__28678__auto__ = (function (){var switch__28518__auto__ = ((function (c__28677__auto___44600,ch){
return (function (state_44586){
var state_val_44587 = (state_44586[(1)]);
if((state_val_44587 === (1))){
var state_44586__$1 = state_44586;
var statearr_44588_44601 = state_44586__$1;
(statearr_44588_44601[(2)] = null);

(statearr_44588_44601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (2))){
var state_44586__$1 = state_44586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44586__$1,(4),ch);
} else {
if((state_val_44587 === (3))){
var inst_44584 = (state_44586[(2)]);
var state_44586__$1 = state_44586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44586__$1,inst_44584);
} else {
if((state_val_44587 === (4))){
var inst_44574 = (state_44586[(7)]);
var inst_44574__$1 = (state_44586[(2)]);
var state_44586__$1 = (function (){var statearr_44589 = state_44586;
(statearr_44589[(7)] = inst_44574__$1);

return statearr_44589;
})();
if(cljs.core.truth_(inst_44574__$1)){
var statearr_44590_44602 = state_44586__$1;
(statearr_44590_44602[(1)] = (5));

} else {
var statearr_44591_44603 = state_44586__$1;
(statearr_44591_44603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (5))){
var inst_44574 = (state_44586[(7)]);
var inst_44576 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_44574);
var state_44586__$1 = state_44586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44586__$1,(8),inst_44576);
} else {
if((state_val_44587 === (6))){
var state_44586__$1 = state_44586;
var statearr_44592_44604 = state_44586__$1;
(statearr_44592_44604[(2)] = null);

(statearr_44592_44604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (7))){
var inst_44582 = (state_44586[(2)]);
var state_44586__$1 = state_44586;
var statearr_44593_44605 = state_44586__$1;
(statearr_44593_44605[(2)] = inst_44582);

(statearr_44593_44605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44587 === (8))){
var inst_44578 = (state_44586[(2)]);
var state_44586__$1 = (function (){var statearr_44594 = state_44586;
(statearr_44594[(8)] = inst_44578);

return statearr_44594;
})();
var statearr_44595_44606 = state_44586__$1;
(statearr_44595_44606[(2)] = null);

(statearr_44595_44606[(1)] = (2));


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
});})(c__28677__auto___44600,ch))
;
return ((function (switch__28518__auto__,c__28677__auto___44600,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28519__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28519__auto____0 = (function (){
var statearr_44596 = [null,null,null,null,null,null,null,null,null];
(statearr_44596[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28519__auto__);

(statearr_44596[(1)] = (1));

return statearr_44596;
});
var figwheel$client$heads_up_plugin_$_state_machine__28519__auto____1 = (function (state_44586){
while(true){
var ret_value__28520__auto__ = (function (){try{while(true){
var result__28521__auto__ = switch__28518__auto__.call(null,state_44586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28521__auto__;
}
break;
}
}catch (e44597){if((e44597 instanceof Object)){
var ex__28522__auto__ = e44597;
var statearr_44598_44607 = state_44586;
(statearr_44598_44607[(5)] = ex__28522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44608 = state_44586;
state_44586 = G__44608;
continue;
} else {
return ret_value__28520__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28519__auto__ = function(state_44586){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28519__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28519__auto____1.call(this,state_44586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28519__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28519__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28519__auto__;
})()
;})(switch__28518__auto__,c__28677__auto___44600,ch))
})();
var state__28679__auto__ = (function (){var statearr_44599 = f__28678__auto__.call(null);
(statearr_44599[(6)] = c__28677__auto___44600);

return statearr_44599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28679__auto__);
});})(c__28677__auto___44600,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28677__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28677__auto__){
return (function (){
var f__28678__auto__ = (function (){var switch__28518__auto__ = ((function (c__28677__auto__){
return (function (state_44614){
var state_val_44615 = (state_44614[(1)]);
if((state_val_44615 === (1))){
var inst_44609 = cljs.core.async.timeout.call(null,(3000));
var state_44614__$1 = state_44614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44614__$1,(2),inst_44609);
} else {
if((state_val_44615 === (2))){
var inst_44611 = (state_44614[(2)]);
var inst_44612 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_44614__$1 = (function (){var statearr_44616 = state_44614;
(statearr_44616[(7)] = inst_44611);

return statearr_44616;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44614__$1,inst_44612);
} else {
return null;
}
}
});})(c__28677__auto__))
;
return ((function (switch__28518__auto__,c__28677__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28519__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28519__auto____0 = (function (){
var statearr_44617 = [null,null,null,null,null,null,null,null];
(statearr_44617[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28519__auto__);

(statearr_44617[(1)] = (1));

return statearr_44617;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28519__auto____1 = (function (state_44614){
while(true){
var ret_value__28520__auto__ = (function (){try{while(true){
var result__28521__auto__ = switch__28518__auto__.call(null,state_44614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28521__auto__;
}
break;
}
}catch (e44618){if((e44618 instanceof Object)){
var ex__28522__auto__ = e44618;
var statearr_44619_44621 = state_44614;
(statearr_44619_44621[(5)] = ex__28522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44622 = state_44614;
state_44614 = G__44622;
continue;
} else {
return ret_value__28520__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28519__auto__ = function(state_44614){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28519__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28519__auto____1.call(this,state_44614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28519__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28519__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28519__auto__;
})()
;})(switch__28518__auto__,c__28677__auto__))
})();
var state__28679__auto__ = (function (){var statearr_44620 = f__28678__auto__.call(null);
(statearr_44620[(6)] = c__28677__auto__);

return statearr_44620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28679__auto__);
});})(c__28677__auto__))
);

return c__28677__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28677__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28677__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__28678__auto__ = (function (){var switch__28518__auto__ = ((function (c__28677__auto__,figwheel_version,temp__5457__auto__){
return (function (state_44629){
var state_val_44630 = (state_44629[(1)]);
if((state_val_44630 === (1))){
var inst_44623 = cljs.core.async.timeout.call(null,(2000));
var state_44629__$1 = state_44629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44629__$1,(2),inst_44623);
} else {
if((state_val_44630 === (2))){
var inst_44625 = (state_44629[(2)]);
var inst_44626 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_44627 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_44626);
var state_44629__$1 = (function (){var statearr_44631 = state_44629;
(statearr_44631[(7)] = inst_44625);

return statearr_44631;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44629__$1,inst_44627);
} else {
return null;
}
}
});})(c__28677__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__28518__auto__,c__28677__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28519__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28519__auto____0 = (function (){
var statearr_44632 = [null,null,null,null,null,null,null,null];
(statearr_44632[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28519__auto__);

(statearr_44632[(1)] = (1));

return statearr_44632;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28519__auto____1 = (function (state_44629){
while(true){
var ret_value__28520__auto__ = (function (){try{while(true){
var result__28521__auto__ = switch__28518__auto__.call(null,state_44629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28521__auto__;
}
break;
}
}catch (e44633){if((e44633 instanceof Object)){
var ex__28522__auto__ = e44633;
var statearr_44634_44636 = state_44629;
(statearr_44634_44636[(5)] = ex__28522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44637 = state_44629;
state_44629 = G__44637;
continue;
} else {
return ret_value__28520__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28519__auto__ = function(state_44629){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28519__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28519__auto____1.call(this,state_44629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28519__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28519__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28519__auto__;
})()
;})(switch__28518__auto__,c__28677__auto__,figwheel_version,temp__5457__auto__))
})();
var state__28679__auto__ = (function (){var statearr_44635 = f__28678__auto__.call(null);
(statearr_44635[(6)] = c__28677__auto__);

return statearr_44635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28679__auto__);
});})(c__28677__auto__,figwheel_version,temp__5457__auto__))
);

return c__28677__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__44638){
var map__44639 = p__44638;
var map__44639__$1 = ((((!((map__44639 == null)))?(((((map__44639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44639):map__44639);
var file = cljs.core.get.call(null,map__44639__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__44639__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__44639__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__44641 = "";
var G__44641__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44641),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__44641);
var G__44641__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44641__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__44641__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = line;
if(cljs.core.truth_(and__3938__auto__)){
return column;
} else {
return and__3938__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44641__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__44641__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__44642){
var map__44643 = p__44642;
var map__44643__$1 = ((((!((map__44643 == null)))?(((((map__44643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44643):map__44643);
var ed = map__44643__$1;
var formatted_exception = cljs.core.get.call(null,map__44643__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__44643__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__44643__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__44645_44649 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__44646_44650 = null;
var count__44647_44651 = (0);
var i__44648_44652 = (0);
while(true){
if((i__44648_44652 < count__44647_44651)){
var msg_44653 = cljs.core._nth.call(null,chunk__44646_44650,i__44648_44652);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_44653);


var G__44654 = seq__44645_44649;
var G__44655 = chunk__44646_44650;
var G__44656 = count__44647_44651;
var G__44657 = (i__44648_44652 + (1));
seq__44645_44649 = G__44654;
chunk__44646_44650 = G__44655;
count__44647_44651 = G__44656;
i__44648_44652 = G__44657;
continue;
} else {
var temp__5457__auto___44658 = cljs.core.seq.call(null,seq__44645_44649);
if(temp__5457__auto___44658){
var seq__44645_44659__$1 = temp__5457__auto___44658;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44645_44659__$1)){
var c__4351__auto___44660 = cljs.core.chunk_first.call(null,seq__44645_44659__$1);
var G__44661 = cljs.core.chunk_rest.call(null,seq__44645_44659__$1);
var G__44662 = c__4351__auto___44660;
var G__44663 = cljs.core.count.call(null,c__4351__auto___44660);
var G__44664 = (0);
seq__44645_44649 = G__44661;
chunk__44646_44650 = G__44662;
count__44647_44651 = G__44663;
i__44648_44652 = G__44664;
continue;
} else {
var msg_44665 = cljs.core.first.call(null,seq__44645_44659__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_44665);


var G__44666 = cljs.core.next.call(null,seq__44645_44659__$1);
var G__44667 = null;
var G__44668 = (0);
var G__44669 = (0);
seq__44645_44649 = G__44666;
chunk__44646_44650 = G__44667;
count__44647_44651 = G__44668;
i__44648_44652 = G__44669;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__44670){
var map__44671 = p__44670;
var map__44671__$1 = ((((!((map__44671 == null)))?(((((map__44671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44671):map__44671);
var w = map__44671__$1;
var message = cljs.core.get.call(null,map__44671__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3938__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__44673 = cljs.core.seq.call(null,plugins);
var chunk__44674 = null;
var count__44675 = (0);
var i__44676 = (0);
while(true){
if((i__44676 < count__44675)){
var vec__44677 = cljs.core._nth.call(null,chunk__44674,i__44676);
var k = cljs.core.nth.call(null,vec__44677,(0),null);
var plugin = cljs.core.nth.call(null,vec__44677,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44683 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44673,chunk__44674,count__44675,i__44676,pl_44683,vec__44677,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_44683.call(null,msg_hist);
});})(seq__44673,chunk__44674,count__44675,i__44676,pl_44683,vec__44677,k,plugin))
);
} else {
}


var G__44684 = seq__44673;
var G__44685 = chunk__44674;
var G__44686 = count__44675;
var G__44687 = (i__44676 + (1));
seq__44673 = G__44684;
chunk__44674 = G__44685;
count__44675 = G__44686;
i__44676 = G__44687;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__44673);
if(temp__5457__auto__){
var seq__44673__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44673__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__44673__$1);
var G__44688 = cljs.core.chunk_rest.call(null,seq__44673__$1);
var G__44689 = c__4351__auto__;
var G__44690 = cljs.core.count.call(null,c__4351__auto__);
var G__44691 = (0);
seq__44673 = G__44688;
chunk__44674 = G__44689;
count__44675 = G__44690;
i__44676 = G__44691;
continue;
} else {
var vec__44680 = cljs.core.first.call(null,seq__44673__$1);
var k = cljs.core.nth.call(null,vec__44680,(0),null);
var plugin = cljs.core.nth.call(null,vec__44680,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44692 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44673,chunk__44674,count__44675,i__44676,pl_44692,vec__44680,k,plugin,seq__44673__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_44692.call(null,msg_hist);
});})(seq__44673,chunk__44674,count__44675,i__44676,pl_44692,vec__44680,k,plugin,seq__44673__$1,temp__5457__auto__))
);
} else {
}


var G__44693 = cljs.core.next.call(null,seq__44673__$1);
var G__44694 = null;
var G__44695 = (0);
var G__44696 = (0);
seq__44673 = G__44693;
chunk__44674 = G__44694;
count__44675 = G__44695;
i__44676 = G__44696;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__44698 = arguments.length;
switch (G__44698) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__44699_44704 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__44700_44705 = null;
var count__44701_44706 = (0);
var i__44702_44707 = (0);
while(true){
if((i__44702_44707 < count__44701_44706)){
var msg_44708 = cljs.core._nth.call(null,chunk__44700_44705,i__44702_44707);
figwheel.client.socket.handle_incoming_message.call(null,msg_44708);


var G__44709 = seq__44699_44704;
var G__44710 = chunk__44700_44705;
var G__44711 = count__44701_44706;
var G__44712 = (i__44702_44707 + (1));
seq__44699_44704 = G__44709;
chunk__44700_44705 = G__44710;
count__44701_44706 = G__44711;
i__44702_44707 = G__44712;
continue;
} else {
var temp__5457__auto___44713 = cljs.core.seq.call(null,seq__44699_44704);
if(temp__5457__auto___44713){
var seq__44699_44714__$1 = temp__5457__auto___44713;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44699_44714__$1)){
var c__4351__auto___44715 = cljs.core.chunk_first.call(null,seq__44699_44714__$1);
var G__44716 = cljs.core.chunk_rest.call(null,seq__44699_44714__$1);
var G__44717 = c__4351__auto___44715;
var G__44718 = cljs.core.count.call(null,c__4351__auto___44715);
var G__44719 = (0);
seq__44699_44704 = G__44716;
chunk__44700_44705 = G__44717;
count__44701_44706 = G__44718;
i__44702_44707 = G__44719;
continue;
} else {
var msg_44720 = cljs.core.first.call(null,seq__44699_44714__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_44720);


var G__44721 = cljs.core.next.call(null,seq__44699_44714__$1);
var G__44722 = null;
var G__44723 = (0);
var G__44724 = (0);
seq__44699_44704 = G__44721;
chunk__44700_44705 = G__44722;
count__44701_44706 = G__44723;
i__44702_44707 = G__44724;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4534__auto__ = [];
var len__4531__auto___44729 = arguments.length;
var i__4532__auto___44730 = (0);
while(true){
if((i__4532__auto___44730 < len__4531__auto___44729)){
args__4534__auto__.push((arguments[i__4532__auto___44730]));

var G__44731 = (i__4532__auto___44730 + (1));
i__4532__auto___44730 = G__44731;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__44726){
var map__44727 = p__44726;
var map__44727__$1 = ((((!((map__44727 == null)))?(((((map__44727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44727):map__44727);
var opts = map__44727__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq44725){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44725));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e44732){if((e44732 instanceof Error)){
var e = e44732;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e44732;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__44733){
var map__44734 = p__44733;
var map__44734__$1 = ((((!((map__44734 == null)))?(((((map__44734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44734):map__44734);
var msg_name = cljs.core.get.call(null,map__44734__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1540243380814
