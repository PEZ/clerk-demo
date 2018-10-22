// Compiled by ClojureScript 1.10.339 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3949__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3949__auto__){
return or__3949__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3949__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__41152_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__41152_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__41153 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__41154 = null;
var count__41155 = (0);
var i__41156 = (0);
while(true){
if((i__41156 < count__41155)){
var n = cljs.core._nth.call(null,chunk__41154,i__41156);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__41157 = seq__41153;
var G__41158 = chunk__41154;
var G__41159 = count__41155;
var G__41160 = (i__41156 + (1));
seq__41153 = G__41157;
chunk__41154 = G__41158;
count__41155 = G__41159;
i__41156 = G__41160;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41153);
if(temp__5457__auto__){
var seq__41153__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41153__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__41153__$1);
var G__41161 = cljs.core.chunk_rest.call(null,seq__41153__$1);
var G__41162 = c__4351__auto__;
var G__41163 = cljs.core.count.call(null,c__4351__auto__);
var G__41164 = (0);
seq__41153 = G__41161;
chunk__41154 = G__41162;
count__41155 = G__41163;
i__41156 = G__41164;
continue;
} else {
var n = cljs.core.first.call(null,seq__41153__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__41165 = cljs.core.next.call(null,seq__41153__$1);
var G__41166 = null;
var G__41167 = (0);
var G__41168 = (0);
seq__41153 = G__41165;
chunk__41154 = G__41166;
count__41155 = G__41167;
i__41156 = G__41168;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__41169){
var vec__41170 = p__41169;
var _ = cljs.core.nth.call(null,vec__41170,(0),null);
var v = cljs.core.nth.call(null,vec__41170,(1),null);
var and__3938__auto__ = v;
if(cljs.core.truth_(and__3938__auto__)){
return v.call(null,dep);
} else {
return and__3938__auto__;
}
}),cljs.core.filter.call(null,(function (p__41173){
var vec__41174 = p__41173;
var k = cljs.core.nth.call(null,vec__41174,(0),null);
var v = cljs.core.nth.call(null,vec__41174,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__41186_41194 = cljs.core.seq.call(null,deps);
var chunk__41187_41195 = null;
var count__41188_41196 = (0);
var i__41189_41197 = (0);
while(true){
if((i__41189_41197 < count__41188_41196)){
var dep_41198 = cljs.core._nth.call(null,chunk__41187_41195,i__41189_41197);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_41198;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_41198));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_41198,(depth + (1)),state);
} else {
}


var G__41199 = seq__41186_41194;
var G__41200 = chunk__41187_41195;
var G__41201 = count__41188_41196;
var G__41202 = (i__41189_41197 + (1));
seq__41186_41194 = G__41199;
chunk__41187_41195 = G__41200;
count__41188_41196 = G__41201;
i__41189_41197 = G__41202;
continue;
} else {
var temp__5457__auto___41203 = cljs.core.seq.call(null,seq__41186_41194);
if(temp__5457__auto___41203){
var seq__41186_41204__$1 = temp__5457__auto___41203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41186_41204__$1)){
var c__4351__auto___41205 = cljs.core.chunk_first.call(null,seq__41186_41204__$1);
var G__41206 = cljs.core.chunk_rest.call(null,seq__41186_41204__$1);
var G__41207 = c__4351__auto___41205;
var G__41208 = cljs.core.count.call(null,c__4351__auto___41205);
var G__41209 = (0);
seq__41186_41194 = G__41206;
chunk__41187_41195 = G__41207;
count__41188_41196 = G__41208;
i__41189_41197 = G__41209;
continue;
} else {
var dep_41210 = cljs.core.first.call(null,seq__41186_41204__$1);
if(cljs.core.truth_((function (){var and__3938__auto__ = dep_41210;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_41210));
} else {
return and__3938__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_41210,(depth + (1)),state);
} else {
}


var G__41211 = cljs.core.next.call(null,seq__41186_41204__$1);
var G__41212 = null;
var G__41213 = (0);
var G__41214 = (0);
seq__41186_41194 = G__41211;
chunk__41187_41195 = G__41212;
count__41188_41196 = G__41213;
i__41189_41197 = G__41214;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__41190){
var vec__41191 = p__41190;
var seq__41192 = cljs.core.seq.call(null,vec__41191);
var first__41193 = cljs.core.first.call(null,seq__41192);
var seq__41192__$1 = cljs.core.next.call(null,seq__41192);
var x = first__41193;
var xs = seq__41192__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__41191,seq__41192,first__41193,seq__41192__$1,x,xs,get_deps__$1){
return (function (p1__41177_SHARP_){
return clojure.set.difference.call(null,p1__41177_SHARP_,x);
});})(vec__41191,seq__41192,first__41193,seq__41192__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__41215 = cljs.core.seq.call(null,provides);
var chunk__41216 = null;
var count__41217 = (0);
var i__41218 = (0);
while(true){
if((i__41218 < count__41217)){
var prov = cljs.core._nth.call(null,chunk__41216,i__41218);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41219_41227 = cljs.core.seq.call(null,requires);
var chunk__41220_41228 = null;
var count__41221_41229 = (0);
var i__41222_41230 = (0);
while(true){
if((i__41222_41230 < count__41221_41229)){
var req_41231 = cljs.core._nth.call(null,chunk__41220_41228,i__41222_41230);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41231,prov);


var G__41232 = seq__41219_41227;
var G__41233 = chunk__41220_41228;
var G__41234 = count__41221_41229;
var G__41235 = (i__41222_41230 + (1));
seq__41219_41227 = G__41232;
chunk__41220_41228 = G__41233;
count__41221_41229 = G__41234;
i__41222_41230 = G__41235;
continue;
} else {
var temp__5457__auto___41236 = cljs.core.seq.call(null,seq__41219_41227);
if(temp__5457__auto___41236){
var seq__41219_41237__$1 = temp__5457__auto___41236;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41219_41237__$1)){
var c__4351__auto___41238 = cljs.core.chunk_first.call(null,seq__41219_41237__$1);
var G__41239 = cljs.core.chunk_rest.call(null,seq__41219_41237__$1);
var G__41240 = c__4351__auto___41238;
var G__41241 = cljs.core.count.call(null,c__4351__auto___41238);
var G__41242 = (0);
seq__41219_41227 = G__41239;
chunk__41220_41228 = G__41240;
count__41221_41229 = G__41241;
i__41222_41230 = G__41242;
continue;
} else {
var req_41243 = cljs.core.first.call(null,seq__41219_41237__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41243,prov);


var G__41244 = cljs.core.next.call(null,seq__41219_41237__$1);
var G__41245 = null;
var G__41246 = (0);
var G__41247 = (0);
seq__41219_41227 = G__41244;
chunk__41220_41228 = G__41245;
count__41221_41229 = G__41246;
i__41222_41230 = G__41247;
continue;
}
} else {
}
}
break;
}


var G__41248 = seq__41215;
var G__41249 = chunk__41216;
var G__41250 = count__41217;
var G__41251 = (i__41218 + (1));
seq__41215 = G__41248;
chunk__41216 = G__41249;
count__41217 = G__41250;
i__41218 = G__41251;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41215);
if(temp__5457__auto__){
var seq__41215__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41215__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__41215__$1);
var G__41252 = cljs.core.chunk_rest.call(null,seq__41215__$1);
var G__41253 = c__4351__auto__;
var G__41254 = cljs.core.count.call(null,c__4351__auto__);
var G__41255 = (0);
seq__41215 = G__41252;
chunk__41216 = G__41253;
count__41217 = G__41254;
i__41218 = G__41255;
continue;
} else {
var prov = cljs.core.first.call(null,seq__41215__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41223_41256 = cljs.core.seq.call(null,requires);
var chunk__41224_41257 = null;
var count__41225_41258 = (0);
var i__41226_41259 = (0);
while(true){
if((i__41226_41259 < count__41225_41258)){
var req_41260 = cljs.core._nth.call(null,chunk__41224_41257,i__41226_41259);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41260,prov);


var G__41261 = seq__41223_41256;
var G__41262 = chunk__41224_41257;
var G__41263 = count__41225_41258;
var G__41264 = (i__41226_41259 + (1));
seq__41223_41256 = G__41261;
chunk__41224_41257 = G__41262;
count__41225_41258 = G__41263;
i__41226_41259 = G__41264;
continue;
} else {
var temp__5457__auto___41265__$1 = cljs.core.seq.call(null,seq__41223_41256);
if(temp__5457__auto___41265__$1){
var seq__41223_41266__$1 = temp__5457__auto___41265__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41223_41266__$1)){
var c__4351__auto___41267 = cljs.core.chunk_first.call(null,seq__41223_41266__$1);
var G__41268 = cljs.core.chunk_rest.call(null,seq__41223_41266__$1);
var G__41269 = c__4351__auto___41267;
var G__41270 = cljs.core.count.call(null,c__4351__auto___41267);
var G__41271 = (0);
seq__41223_41256 = G__41268;
chunk__41224_41257 = G__41269;
count__41225_41258 = G__41270;
i__41226_41259 = G__41271;
continue;
} else {
var req_41272 = cljs.core.first.call(null,seq__41223_41266__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41272,prov);


var G__41273 = cljs.core.next.call(null,seq__41223_41266__$1);
var G__41274 = null;
var G__41275 = (0);
var G__41276 = (0);
seq__41223_41256 = G__41273;
chunk__41224_41257 = G__41274;
count__41225_41258 = G__41275;
i__41226_41259 = G__41276;
continue;
}
} else {
}
}
break;
}


var G__41277 = cljs.core.next.call(null,seq__41215__$1);
var G__41278 = null;
var G__41279 = (0);
var G__41280 = (0);
seq__41215 = G__41277;
chunk__41216 = G__41278;
count__41217 = G__41279;
i__41218 = G__41280;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__41281_41285 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__41282_41286 = null;
var count__41283_41287 = (0);
var i__41284_41288 = (0);
while(true){
if((i__41284_41288 < count__41283_41287)){
var ns_41289 = cljs.core._nth.call(null,chunk__41282_41286,i__41284_41288);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41289);


var G__41290 = seq__41281_41285;
var G__41291 = chunk__41282_41286;
var G__41292 = count__41283_41287;
var G__41293 = (i__41284_41288 + (1));
seq__41281_41285 = G__41290;
chunk__41282_41286 = G__41291;
count__41283_41287 = G__41292;
i__41284_41288 = G__41293;
continue;
} else {
var temp__5457__auto___41294 = cljs.core.seq.call(null,seq__41281_41285);
if(temp__5457__auto___41294){
var seq__41281_41295__$1 = temp__5457__auto___41294;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41281_41295__$1)){
var c__4351__auto___41296 = cljs.core.chunk_first.call(null,seq__41281_41295__$1);
var G__41297 = cljs.core.chunk_rest.call(null,seq__41281_41295__$1);
var G__41298 = c__4351__auto___41296;
var G__41299 = cljs.core.count.call(null,c__4351__auto___41296);
var G__41300 = (0);
seq__41281_41285 = G__41297;
chunk__41282_41286 = G__41298;
count__41283_41287 = G__41299;
i__41284_41288 = G__41300;
continue;
} else {
var ns_41301 = cljs.core.first.call(null,seq__41281_41295__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41301);


var G__41302 = cljs.core.next.call(null,seq__41281_41295__$1);
var G__41303 = null;
var G__41304 = (0);
var G__41305 = (0);
seq__41281_41285 = G__41302;
chunk__41282_41286 = G__41303;
count__41283_41287 = G__41304;
i__41284_41288 = G__41305;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3949__auto__ = goog.require__;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__41306__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__41306 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41307__i = 0, G__41307__a = new Array(arguments.length -  0);
while (G__41307__i < G__41307__a.length) {G__41307__a[G__41307__i] = arguments[G__41307__i + 0]; ++G__41307__i;}
  args = new cljs.core.IndexedSeq(G__41307__a,0,null);
} 
return G__41306__delegate.call(this,args);};
G__41306.cljs$lang$maxFixedArity = 0;
G__41306.cljs$lang$applyTo = (function (arglist__41308){
var args = cljs.core.seq(arglist__41308);
return G__41306__delegate(args);
});
G__41306.cljs$core$IFn$_invoke$arity$variadic = G__41306__delegate;
return G__41306;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__41309_SHARP_,p2__41310_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41309_SHARP_)].join('')),p2__41310_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__41311_SHARP_,p2__41312_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__41311_SHARP_)].join(''),p2__41312_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__41313 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__41313.addCallback(((function (G__41313){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__41313))
);

G__41313.addErrback(((function (G__41313){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__41313))
);

return G__41313;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e41314){if((e41314 instanceof Error)){
var e = e41314;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e41314;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e41315){if((e41315 instanceof Error)){
var e = e41315;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e41315;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__41316 = cljs.core._EQ_;
var expr__41317 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__41316.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__41317))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__41316.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__41317))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__41316.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__41317))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__41316,expr__41317){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__41316,expr__41317))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__41319,callback){
var map__41320 = p__41319;
var map__41320__$1 = ((((!((map__41320 == null)))?(((((map__41320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41320):map__41320);
var file_msg = map__41320__$1;
var request_url = cljs.core.get.call(null,map__41320__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3949__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__41320,map__41320__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__41320,map__41320__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28677__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28677__auto__){
return (function (){
var f__28678__auto__ = (function (){var switch__28518__auto__ = ((function (c__28677__auto__){
return (function (state_41358){
var state_val_41359 = (state_41358[(1)]);
if((state_val_41359 === (7))){
var inst_41354 = (state_41358[(2)]);
var state_41358__$1 = state_41358;
var statearr_41360_41386 = state_41358__$1;
(statearr_41360_41386[(2)] = inst_41354);

(statearr_41360_41386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41359 === (1))){
var state_41358__$1 = state_41358;
var statearr_41361_41387 = state_41358__$1;
(statearr_41361_41387[(2)] = null);

(statearr_41361_41387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41359 === (4))){
var inst_41324 = (state_41358[(7)]);
var inst_41324__$1 = (state_41358[(2)]);
var state_41358__$1 = (function (){var statearr_41362 = state_41358;
(statearr_41362[(7)] = inst_41324__$1);

return statearr_41362;
})();
if(cljs.core.truth_(inst_41324__$1)){
var statearr_41363_41388 = state_41358__$1;
(statearr_41363_41388[(1)] = (5));

} else {
var statearr_41364_41389 = state_41358__$1;
(statearr_41364_41389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41359 === (15))){
var inst_41339 = (state_41358[(8)]);
var inst_41337 = (state_41358[(9)]);
var inst_41341 = inst_41339.call(null,inst_41337);
var state_41358__$1 = state_41358;
var statearr_41365_41390 = state_41358__$1;
(statearr_41365_41390[(2)] = inst_41341);

(statearr_41365_41390[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41359 === (13))){
var inst_41348 = (state_41358[(2)]);
var state_41358__$1 = state_41358;
var statearr_41366_41391 = state_41358__$1;
(statearr_41366_41391[(2)] = inst_41348);

(statearr_41366_41391[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41359 === (6))){
var state_41358__$1 = state_41358;
var statearr_41367_41392 = state_41358__$1;
(statearr_41367_41392[(2)] = null);

(statearr_41367_41392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41359 === (17))){
var inst_41345 = (state_41358[(2)]);
var state_41358__$1 = state_41358;
var statearr_41368_41393 = state_41358__$1;
(statearr_41368_41393[(2)] = inst_41345);

(statearr_41368_41393[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41359 === (3))){
var inst_41356 = (state_41358[(2)]);
var state_41358__$1 = state_41358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41358__$1,inst_41356);
} else {
if((state_val_41359 === (12))){
var state_41358__$1 = state_41358;
var statearr_41369_41394 = state_41358__$1;
(statearr_41369_41394[(2)] = null);

(statearr_41369_41394[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41359 === (2))){
var state_41358__$1 = state_41358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41358__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_41359 === (11))){
var inst_41329 = (state_41358[(10)]);
var inst_41335 = figwheel.client.file_reloading.blocking_load.call(null,inst_41329);
var state_41358__$1 = state_41358;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41358__$1,(14),inst_41335);
} else {
if((state_val_41359 === (9))){
var inst_41329 = (state_41358[(10)]);
var state_41358__$1 = state_41358;
if(cljs.core.truth_(inst_41329)){
var statearr_41370_41395 = state_41358__$1;
(statearr_41370_41395[(1)] = (11));

} else {
var statearr_41371_41396 = state_41358__$1;
(statearr_41371_41396[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41359 === (5))){
var inst_41330 = (state_41358[(11)]);
var inst_41324 = (state_41358[(7)]);
var inst_41329 = cljs.core.nth.call(null,inst_41324,(0),null);
var inst_41330__$1 = cljs.core.nth.call(null,inst_41324,(1),null);
var state_41358__$1 = (function (){var statearr_41372 = state_41358;
(statearr_41372[(11)] = inst_41330__$1);

(statearr_41372[(10)] = inst_41329);

return statearr_41372;
})();
if(cljs.core.truth_(inst_41330__$1)){
var statearr_41373_41397 = state_41358__$1;
(statearr_41373_41397[(1)] = (8));

} else {
var statearr_41374_41398 = state_41358__$1;
(statearr_41374_41398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41359 === (14))){
var inst_41339 = (state_41358[(8)]);
var inst_41329 = (state_41358[(10)]);
var inst_41337 = (state_41358[(2)]);
var inst_41338 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_41339__$1 = cljs.core.get.call(null,inst_41338,inst_41329);
var state_41358__$1 = (function (){var statearr_41375 = state_41358;
(statearr_41375[(8)] = inst_41339__$1);

(statearr_41375[(9)] = inst_41337);

return statearr_41375;
})();
if(cljs.core.truth_(inst_41339__$1)){
var statearr_41376_41399 = state_41358__$1;
(statearr_41376_41399[(1)] = (15));

} else {
var statearr_41377_41400 = state_41358__$1;
(statearr_41377_41400[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41359 === (16))){
var inst_41337 = (state_41358[(9)]);
var inst_41343 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_41337);
var state_41358__$1 = state_41358;
var statearr_41378_41401 = state_41358__$1;
(statearr_41378_41401[(2)] = inst_41343);

(statearr_41378_41401[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41359 === (10))){
var inst_41350 = (state_41358[(2)]);
var state_41358__$1 = (function (){var statearr_41379 = state_41358;
(statearr_41379[(12)] = inst_41350);

return statearr_41379;
})();
var statearr_41380_41402 = state_41358__$1;
(statearr_41380_41402[(2)] = null);

(statearr_41380_41402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41359 === (8))){
var inst_41330 = (state_41358[(11)]);
var inst_41332 = eval(inst_41330);
var state_41358__$1 = state_41358;
var statearr_41381_41403 = state_41358__$1;
(statearr_41381_41403[(2)] = inst_41332);

(statearr_41381_41403[(1)] = (10));


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
});})(c__28677__auto__))
;
return ((function (switch__28518__auto__,c__28677__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28519__auto__ = null;
var figwheel$client$file_reloading$state_machine__28519__auto____0 = (function (){
var statearr_41382 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41382[(0)] = figwheel$client$file_reloading$state_machine__28519__auto__);

(statearr_41382[(1)] = (1));

return statearr_41382;
});
var figwheel$client$file_reloading$state_machine__28519__auto____1 = (function (state_41358){
while(true){
var ret_value__28520__auto__ = (function (){try{while(true){
var result__28521__auto__ = switch__28518__auto__.call(null,state_41358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28521__auto__;
}
break;
}
}catch (e41383){if((e41383 instanceof Object)){
var ex__28522__auto__ = e41383;
var statearr_41384_41404 = state_41358;
(statearr_41384_41404[(5)] = ex__28522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41405 = state_41358;
state_41358 = G__41405;
continue;
} else {
return ret_value__28520__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28519__auto__ = function(state_41358){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28519__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28519__auto____1.call(this,state_41358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28519__auto____0;
figwheel$client$file_reloading$state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28519__auto____1;
return figwheel$client$file_reloading$state_machine__28519__auto__;
})()
;})(switch__28518__auto__,c__28677__auto__))
})();
var state__28679__auto__ = (function (){var statearr_41385 = f__28678__auto__.call(null);
(statearr_41385[(6)] = c__28677__auto__);

return statearr_41385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28679__auto__);
});})(c__28677__auto__))
);

return c__28677__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__41407 = arguments.length;
switch (G__41407) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__41409,callback){
var map__41410 = p__41409;
var map__41410__$1 = ((((!((map__41410 == null)))?(((((map__41410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41410):map__41410);
var file_msg = map__41410__$1;
var namespace = cljs.core.get.call(null,map__41410__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__41410,map__41410__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__41410,map__41410__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__41412){
var map__41413 = p__41412;
var map__41413__$1 = ((((!((map__41413 == null)))?(((((map__41413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41413):map__41413);
var file_msg = map__41413__$1;
var namespace = cljs.core.get.call(null,map__41413__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__41415){
var map__41416 = p__41415;
var map__41416__$1 = ((((!((map__41416 == null)))?(((((map__41416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41416):map__41416);
var file_msg = map__41416__$1;
var namespace = cljs.core.get.call(null,map__41416__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3938__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3938__auto__){
var or__3949__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
var or__3949__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3949__auto____$1)){
return or__3949__auto____$1;
} else {
var or__3949__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3949__auto____$2)){
return or__3949__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3938__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__41418,callback){
var map__41419 = p__41418;
var map__41419__$1 = ((((!((map__41419 == null)))?(((((map__41419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41419):map__41419);
var file_msg = map__41419__$1;
var request_url = cljs.core.get.call(null,map__41419__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__41419__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28677__auto___41469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28677__auto___41469,out){
return (function (){
var f__28678__auto__ = (function (){var switch__28518__auto__ = ((function (c__28677__auto___41469,out){
return (function (state_41454){
var state_val_41455 = (state_41454[(1)]);
if((state_val_41455 === (1))){
var inst_41428 = cljs.core.seq.call(null,files);
var inst_41429 = cljs.core.first.call(null,inst_41428);
var inst_41430 = cljs.core.next.call(null,inst_41428);
var inst_41431 = files;
var state_41454__$1 = (function (){var statearr_41456 = state_41454;
(statearr_41456[(7)] = inst_41429);

(statearr_41456[(8)] = inst_41431);

(statearr_41456[(9)] = inst_41430);

return statearr_41456;
})();
var statearr_41457_41470 = state_41454__$1;
(statearr_41457_41470[(2)] = null);

(statearr_41457_41470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41455 === (2))){
var inst_41431 = (state_41454[(8)]);
var inst_41437 = (state_41454[(10)]);
var inst_41436 = cljs.core.seq.call(null,inst_41431);
var inst_41437__$1 = cljs.core.first.call(null,inst_41436);
var inst_41438 = cljs.core.next.call(null,inst_41436);
var inst_41439 = (inst_41437__$1 == null);
var inst_41440 = cljs.core.not.call(null,inst_41439);
var state_41454__$1 = (function (){var statearr_41458 = state_41454;
(statearr_41458[(11)] = inst_41438);

(statearr_41458[(10)] = inst_41437__$1);

return statearr_41458;
})();
if(inst_41440){
var statearr_41459_41471 = state_41454__$1;
(statearr_41459_41471[(1)] = (4));

} else {
var statearr_41460_41472 = state_41454__$1;
(statearr_41460_41472[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41455 === (3))){
var inst_41452 = (state_41454[(2)]);
var state_41454__$1 = state_41454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41454__$1,inst_41452);
} else {
if((state_val_41455 === (4))){
var inst_41437 = (state_41454[(10)]);
var inst_41442 = figwheel.client.file_reloading.reload_js_file.call(null,inst_41437);
var state_41454__$1 = state_41454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41454__$1,(7),inst_41442);
} else {
if((state_val_41455 === (5))){
var inst_41448 = cljs.core.async.close_BANG_.call(null,out);
var state_41454__$1 = state_41454;
var statearr_41461_41473 = state_41454__$1;
(statearr_41461_41473[(2)] = inst_41448);

(statearr_41461_41473[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41455 === (6))){
var inst_41450 = (state_41454[(2)]);
var state_41454__$1 = state_41454;
var statearr_41462_41474 = state_41454__$1;
(statearr_41462_41474[(2)] = inst_41450);

(statearr_41462_41474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41455 === (7))){
var inst_41438 = (state_41454[(11)]);
var inst_41444 = (state_41454[(2)]);
var inst_41445 = cljs.core.async.put_BANG_.call(null,out,inst_41444);
var inst_41431 = inst_41438;
var state_41454__$1 = (function (){var statearr_41463 = state_41454;
(statearr_41463[(12)] = inst_41445);

(statearr_41463[(8)] = inst_41431);

return statearr_41463;
})();
var statearr_41464_41475 = state_41454__$1;
(statearr_41464_41475[(2)] = null);

(statearr_41464_41475[(1)] = (2));


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
});})(c__28677__auto___41469,out))
;
return ((function (switch__28518__auto__,c__28677__auto___41469,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28519__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28519__auto____0 = (function (){
var statearr_41465 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41465[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28519__auto__);

(statearr_41465[(1)] = (1));

return statearr_41465;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28519__auto____1 = (function (state_41454){
while(true){
var ret_value__28520__auto__ = (function (){try{while(true){
var result__28521__auto__ = switch__28518__auto__.call(null,state_41454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28521__auto__;
}
break;
}
}catch (e41466){if((e41466 instanceof Object)){
var ex__28522__auto__ = e41466;
var statearr_41467_41476 = state_41454;
(statearr_41467_41476[(5)] = ex__28522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41477 = state_41454;
state_41454 = G__41477;
continue;
} else {
return ret_value__28520__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28519__auto__ = function(state_41454){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28519__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28519__auto____1.call(this,state_41454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28519__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28519__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28519__auto__;
})()
;})(switch__28518__auto__,c__28677__auto___41469,out))
})();
var state__28679__auto__ = (function (){var statearr_41468 = f__28678__auto__.call(null);
(statearr_41468[(6)] = c__28677__auto___41469);

return statearr_41468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28679__auto__);
});})(c__28677__auto___41469,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__41478,opts){
var map__41479 = p__41478;
var map__41479__$1 = ((((!((map__41479 == null)))?(((((map__41479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41479):map__41479);
var eval_body = cljs.core.get.call(null,map__41479__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__41479__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3938__auto__ = eval_body;
if(cljs.core.truth_(and__3938__auto__)){
return typeof eval_body === 'string';
} else {
return and__3938__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e41481){var e = e41481;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__41482_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41482_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__41483){
var vec__41484 = p__41483;
var k = cljs.core.nth.call(null,vec__41484,(0),null);
var v = cljs.core.nth.call(null,vec__41484,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__41487){
var vec__41488 = p__41487;
var k = cljs.core.nth.call(null,vec__41488,(0),null);
var v = cljs.core.nth.call(null,vec__41488,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__41494,p__41495){
var map__41496 = p__41494;
var map__41496__$1 = ((((!((map__41496 == null)))?(((((map__41496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41496):map__41496);
var opts = map__41496__$1;
var before_jsload = cljs.core.get.call(null,map__41496__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__41496__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__41496__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__41497 = p__41495;
var map__41497__$1 = ((((!((map__41497 == null)))?(((((map__41497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41497):map__41497);
var msg = map__41497__$1;
var files = cljs.core.get.call(null,map__41497__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__41497__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__41497__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28677__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28677__auto__,map__41496,map__41496__$1,opts,before_jsload,on_jsload,reload_dependents,map__41497,map__41497__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28678__auto__ = (function (){var switch__28518__auto__ = ((function (c__28677__auto__,map__41496,map__41496__$1,opts,before_jsload,on_jsload,reload_dependents,map__41497,map__41497__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_41651){
var state_val_41652 = (state_41651[(1)]);
if((state_val_41652 === (7))){
var inst_41512 = (state_41651[(7)]);
var inst_41514 = (state_41651[(8)]);
var inst_41511 = (state_41651[(9)]);
var inst_41513 = (state_41651[(10)]);
var inst_41519 = cljs.core._nth.call(null,inst_41512,inst_41514);
var inst_41520 = figwheel.client.file_reloading.eval_body.call(null,inst_41519,opts);
var inst_41521 = (inst_41514 + (1));
var tmp41653 = inst_41512;
var tmp41654 = inst_41511;
var tmp41655 = inst_41513;
var inst_41511__$1 = tmp41654;
var inst_41512__$1 = tmp41653;
var inst_41513__$1 = tmp41655;
var inst_41514__$1 = inst_41521;
var state_41651__$1 = (function (){var statearr_41656 = state_41651;
(statearr_41656[(11)] = inst_41520);

(statearr_41656[(7)] = inst_41512__$1);

(statearr_41656[(8)] = inst_41514__$1);

(statearr_41656[(9)] = inst_41511__$1);

(statearr_41656[(10)] = inst_41513__$1);

return statearr_41656;
})();
var statearr_41657_41740 = state_41651__$1;
(statearr_41657_41740[(2)] = null);

(statearr_41657_41740[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (20))){
var inst_41554 = (state_41651[(12)]);
var inst_41562 = figwheel.client.file_reloading.sort_files.call(null,inst_41554);
var state_41651__$1 = state_41651;
var statearr_41658_41741 = state_41651__$1;
(statearr_41658_41741[(2)] = inst_41562);

(statearr_41658_41741[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (27))){
var state_41651__$1 = state_41651;
var statearr_41659_41742 = state_41651__$1;
(statearr_41659_41742[(2)] = null);

(statearr_41659_41742[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (1))){
var inst_41503 = (state_41651[(13)]);
var inst_41500 = before_jsload.call(null,files);
var inst_41501 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_41502 = (function (){return ((function (inst_41503,inst_41500,inst_41501,state_val_41652,c__28677__auto__,map__41496,map__41496__$1,opts,before_jsload,on_jsload,reload_dependents,map__41497,map__41497__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41491_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41491_SHARP_);
});
;})(inst_41503,inst_41500,inst_41501,state_val_41652,c__28677__auto__,map__41496,map__41496__$1,opts,before_jsload,on_jsload,reload_dependents,map__41497,map__41497__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41503__$1 = cljs.core.filter.call(null,inst_41502,files);
var inst_41504 = cljs.core.not_empty.call(null,inst_41503__$1);
var state_41651__$1 = (function (){var statearr_41660 = state_41651;
(statearr_41660[(13)] = inst_41503__$1);

(statearr_41660[(14)] = inst_41501);

(statearr_41660[(15)] = inst_41500);

return statearr_41660;
})();
if(cljs.core.truth_(inst_41504)){
var statearr_41661_41743 = state_41651__$1;
(statearr_41661_41743[(1)] = (2));

} else {
var statearr_41662_41744 = state_41651__$1;
(statearr_41662_41744[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (24))){
var state_41651__$1 = state_41651;
var statearr_41663_41745 = state_41651__$1;
(statearr_41663_41745[(2)] = null);

(statearr_41663_41745[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (39))){
var inst_41604 = (state_41651[(16)]);
var state_41651__$1 = state_41651;
var statearr_41664_41746 = state_41651__$1;
(statearr_41664_41746[(2)] = inst_41604);

(statearr_41664_41746[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (46))){
var inst_41646 = (state_41651[(2)]);
var state_41651__$1 = state_41651;
var statearr_41665_41747 = state_41651__$1;
(statearr_41665_41747[(2)] = inst_41646);

(statearr_41665_41747[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (4))){
var inst_41548 = (state_41651[(2)]);
var inst_41549 = cljs.core.List.EMPTY;
var inst_41550 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_41549);
var inst_41551 = (function (){return ((function (inst_41548,inst_41549,inst_41550,state_val_41652,c__28677__auto__,map__41496,map__41496__$1,opts,before_jsload,on_jsload,reload_dependents,map__41497,map__41497__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41492_SHARP_){
var and__3938__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41492_SHARP_);
if(cljs.core.truth_(and__3938__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41492_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__41492_SHARP_))));
} else {
return and__3938__auto__;
}
});
;})(inst_41548,inst_41549,inst_41550,state_val_41652,c__28677__auto__,map__41496,map__41496__$1,opts,before_jsload,on_jsload,reload_dependents,map__41497,map__41497__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41552 = cljs.core.filter.call(null,inst_41551,files);
var inst_41553 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_41554 = cljs.core.concat.call(null,inst_41552,inst_41553);
var state_41651__$1 = (function (){var statearr_41666 = state_41651;
(statearr_41666[(12)] = inst_41554);

(statearr_41666[(17)] = inst_41550);

(statearr_41666[(18)] = inst_41548);

return statearr_41666;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_41667_41748 = state_41651__$1;
(statearr_41667_41748[(1)] = (16));

} else {
var statearr_41668_41749 = state_41651__$1;
(statearr_41668_41749[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (15))){
var inst_41538 = (state_41651[(2)]);
var state_41651__$1 = state_41651;
var statearr_41669_41750 = state_41651__$1;
(statearr_41669_41750[(2)] = inst_41538);

(statearr_41669_41750[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (21))){
var inst_41564 = (state_41651[(19)]);
var inst_41564__$1 = (state_41651[(2)]);
var inst_41565 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_41564__$1);
var state_41651__$1 = (function (){var statearr_41670 = state_41651;
(statearr_41670[(19)] = inst_41564__$1);

return statearr_41670;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41651__$1,(22),inst_41565);
} else {
if((state_val_41652 === (31))){
var inst_41649 = (state_41651[(2)]);
var state_41651__$1 = state_41651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41651__$1,inst_41649);
} else {
if((state_val_41652 === (32))){
var inst_41604 = (state_41651[(16)]);
var inst_41609 = inst_41604.cljs$lang$protocol_mask$partition0$;
var inst_41610 = (inst_41609 & (64));
var inst_41611 = inst_41604.cljs$core$ISeq$;
var inst_41612 = (cljs.core.PROTOCOL_SENTINEL === inst_41611);
var inst_41613 = ((inst_41610) || (inst_41612));
var state_41651__$1 = state_41651;
if(cljs.core.truth_(inst_41613)){
var statearr_41671_41751 = state_41651__$1;
(statearr_41671_41751[(1)] = (35));

} else {
var statearr_41672_41752 = state_41651__$1;
(statearr_41672_41752[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (40))){
var inst_41626 = (state_41651[(20)]);
var inst_41625 = (state_41651[(2)]);
var inst_41626__$1 = cljs.core.get.call(null,inst_41625,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_41627 = cljs.core.get.call(null,inst_41625,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_41628 = cljs.core.not_empty.call(null,inst_41626__$1);
var state_41651__$1 = (function (){var statearr_41673 = state_41651;
(statearr_41673[(21)] = inst_41627);

(statearr_41673[(20)] = inst_41626__$1);

return statearr_41673;
})();
if(cljs.core.truth_(inst_41628)){
var statearr_41674_41753 = state_41651__$1;
(statearr_41674_41753[(1)] = (41));

} else {
var statearr_41675_41754 = state_41651__$1;
(statearr_41675_41754[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (33))){
var state_41651__$1 = state_41651;
var statearr_41676_41755 = state_41651__$1;
(statearr_41676_41755[(2)] = false);

(statearr_41676_41755[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (13))){
var inst_41524 = (state_41651[(22)]);
var inst_41528 = cljs.core.chunk_first.call(null,inst_41524);
var inst_41529 = cljs.core.chunk_rest.call(null,inst_41524);
var inst_41530 = cljs.core.count.call(null,inst_41528);
var inst_41511 = inst_41529;
var inst_41512 = inst_41528;
var inst_41513 = inst_41530;
var inst_41514 = (0);
var state_41651__$1 = (function (){var statearr_41677 = state_41651;
(statearr_41677[(7)] = inst_41512);

(statearr_41677[(8)] = inst_41514);

(statearr_41677[(9)] = inst_41511);

(statearr_41677[(10)] = inst_41513);

return statearr_41677;
})();
var statearr_41678_41756 = state_41651__$1;
(statearr_41678_41756[(2)] = null);

(statearr_41678_41756[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (22))){
var inst_41568 = (state_41651[(23)]);
var inst_41572 = (state_41651[(24)]);
var inst_41564 = (state_41651[(19)]);
var inst_41567 = (state_41651[(25)]);
var inst_41567__$1 = (state_41651[(2)]);
var inst_41568__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41567__$1);
var inst_41569 = (function (){var all_files = inst_41564;
var res_SINGLEQUOTE_ = inst_41567__$1;
var res = inst_41568__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_41568,inst_41572,inst_41564,inst_41567,inst_41567__$1,inst_41568__$1,state_val_41652,c__28677__auto__,map__41496,map__41496__$1,opts,before_jsload,on_jsload,reload_dependents,map__41497,map__41497__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41493_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__41493_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_41568,inst_41572,inst_41564,inst_41567,inst_41567__$1,inst_41568__$1,state_val_41652,c__28677__auto__,map__41496,map__41496__$1,opts,before_jsload,on_jsload,reload_dependents,map__41497,map__41497__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41570 = cljs.core.filter.call(null,inst_41569,inst_41567__$1);
var inst_41571 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_41572__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41571);
var inst_41573 = cljs.core.not_empty.call(null,inst_41572__$1);
var state_41651__$1 = (function (){var statearr_41679 = state_41651;
(statearr_41679[(23)] = inst_41568__$1);

(statearr_41679[(24)] = inst_41572__$1);

(statearr_41679[(25)] = inst_41567__$1);

(statearr_41679[(26)] = inst_41570);

return statearr_41679;
})();
if(cljs.core.truth_(inst_41573)){
var statearr_41680_41757 = state_41651__$1;
(statearr_41680_41757[(1)] = (23));

} else {
var statearr_41681_41758 = state_41651__$1;
(statearr_41681_41758[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (36))){
var state_41651__$1 = state_41651;
var statearr_41682_41759 = state_41651__$1;
(statearr_41682_41759[(2)] = false);

(statearr_41682_41759[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (41))){
var inst_41626 = (state_41651[(20)]);
var inst_41630 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_41631 = cljs.core.map.call(null,inst_41630,inst_41626);
var inst_41632 = cljs.core.pr_str.call(null,inst_41631);
var inst_41633 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41632)].join('');
var inst_41634 = figwheel.client.utils.log.call(null,inst_41633);
var state_41651__$1 = state_41651;
var statearr_41683_41760 = state_41651__$1;
(statearr_41683_41760[(2)] = inst_41634);

(statearr_41683_41760[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (43))){
var inst_41627 = (state_41651[(21)]);
var inst_41637 = (state_41651[(2)]);
var inst_41638 = cljs.core.not_empty.call(null,inst_41627);
var state_41651__$1 = (function (){var statearr_41684 = state_41651;
(statearr_41684[(27)] = inst_41637);

return statearr_41684;
})();
if(cljs.core.truth_(inst_41638)){
var statearr_41685_41761 = state_41651__$1;
(statearr_41685_41761[(1)] = (44));

} else {
var statearr_41686_41762 = state_41651__$1;
(statearr_41686_41762[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (29))){
var inst_41568 = (state_41651[(23)]);
var inst_41572 = (state_41651[(24)]);
var inst_41564 = (state_41651[(19)]);
var inst_41567 = (state_41651[(25)]);
var inst_41570 = (state_41651[(26)]);
var inst_41604 = (state_41651[(16)]);
var inst_41600 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_41603 = (function (){var all_files = inst_41564;
var res_SINGLEQUOTE_ = inst_41567;
var res = inst_41568;
var files_not_loaded = inst_41570;
var dependencies_that_loaded = inst_41572;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41568,inst_41572,inst_41564,inst_41567,inst_41570,inst_41604,inst_41600,state_val_41652,c__28677__auto__,map__41496,map__41496__$1,opts,before_jsload,on_jsload,reload_dependents,map__41497,map__41497__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41602){
var map__41687 = p__41602;
var map__41687__$1 = ((((!((map__41687 == null)))?(((((map__41687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41687):map__41687);
var namespace = cljs.core.get.call(null,map__41687__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41568,inst_41572,inst_41564,inst_41567,inst_41570,inst_41604,inst_41600,state_val_41652,c__28677__auto__,map__41496,map__41496__$1,opts,before_jsload,on_jsload,reload_dependents,map__41497,map__41497__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41604__$1 = cljs.core.group_by.call(null,inst_41603,inst_41570);
var inst_41606 = (inst_41604__$1 == null);
var inst_41607 = cljs.core.not.call(null,inst_41606);
var state_41651__$1 = (function (){var statearr_41689 = state_41651;
(statearr_41689[(28)] = inst_41600);

(statearr_41689[(16)] = inst_41604__$1);

return statearr_41689;
})();
if(inst_41607){
var statearr_41690_41763 = state_41651__$1;
(statearr_41690_41763[(1)] = (32));

} else {
var statearr_41691_41764 = state_41651__$1;
(statearr_41691_41764[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (44))){
var inst_41627 = (state_41651[(21)]);
var inst_41640 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41627);
var inst_41641 = cljs.core.pr_str.call(null,inst_41640);
var inst_41642 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41641)].join('');
var inst_41643 = figwheel.client.utils.log.call(null,inst_41642);
var state_41651__$1 = state_41651;
var statearr_41692_41765 = state_41651__$1;
(statearr_41692_41765[(2)] = inst_41643);

(statearr_41692_41765[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (6))){
var inst_41545 = (state_41651[(2)]);
var state_41651__$1 = state_41651;
var statearr_41693_41766 = state_41651__$1;
(statearr_41693_41766[(2)] = inst_41545);

(statearr_41693_41766[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (28))){
var inst_41570 = (state_41651[(26)]);
var inst_41597 = (state_41651[(2)]);
var inst_41598 = cljs.core.not_empty.call(null,inst_41570);
var state_41651__$1 = (function (){var statearr_41694 = state_41651;
(statearr_41694[(29)] = inst_41597);

return statearr_41694;
})();
if(cljs.core.truth_(inst_41598)){
var statearr_41695_41767 = state_41651__$1;
(statearr_41695_41767[(1)] = (29));

} else {
var statearr_41696_41768 = state_41651__$1;
(statearr_41696_41768[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (25))){
var inst_41568 = (state_41651[(23)]);
var inst_41584 = (state_41651[(2)]);
var inst_41585 = cljs.core.not_empty.call(null,inst_41568);
var state_41651__$1 = (function (){var statearr_41697 = state_41651;
(statearr_41697[(30)] = inst_41584);

return statearr_41697;
})();
if(cljs.core.truth_(inst_41585)){
var statearr_41698_41769 = state_41651__$1;
(statearr_41698_41769[(1)] = (26));

} else {
var statearr_41699_41770 = state_41651__$1;
(statearr_41699_41770[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (34))){
var inst_41620 = (state_41651[(2)]);
var state_41651__$1 = state_41651;
if(cljs.core.truth_(inst_41620)){
var statearr_41700_41771 = state_41651__$1;
(statearr_41700_41771[(1)] = (38));

} else {
var statearr_41701_41772 = state_41651__$1;
(statearr_41701_41772[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (17))){
var state_41651__$1 = state_41651;
var statearr_41702_41773 = state_41651__$1;
(statearr_41702_41773[(2)] = recompile_dependents);

(statearr_41702_41773[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (3))){
var state_41651__$1 = state_41651;
var statearr_41703_41774 = state_41651__$1;
(statearr_41703_41774[(2)] = null);

(statearr_41703_41774[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (12))){
var inst_41541 = (state_41651[(2)]);
var state_41651__$1 = state_41651;
var statearr_41704_41775 = state_41651__$1;
(statearr_41704_41775[(2)] = inst_41541);

(statearr_41704_41775[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (2))){
var inst_41503 = (state_41651[(13)]);
var inst_41510 = cljs.core.seq.call(null,inst_41503);
var inst_41511 = inst_41510;
var inst_41512 = null;
var inst_41513 = (0);
var inst_41514 = (0);
var state_41651__$1 = (function (){var statearr_41705 = state_41651;
(statearr_41705[(7)] = inst_41512);

(statearr_41705[(8)] = inst_41514);

(statearr_41705[(9)] = inst_41511);

(statearr_41705[(10)] = inst_41513);

return statearr_41705;
})();
var statearr_41706_41776 = state_41651__$1;
(statearr_41706_41776[(2)] = null);

(statearr_41706_41776[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (23))){
var inst_41568 = (state_41651[(23)]);
var inst_41572 = (state_41651[(24)]);
var inst_41564 = (state_41651[(19)]);
var inst_41567 = (state_41651[(25)]);
var inst_41570 = (state_41651[(26)]);
var inst_41575 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_41577 = (function (){var all_files = inst_41564;
var res_SINGLEQUOTE_ = inst_41567;
var res = inst_41568;
var files_not_loaded = inst_41570;
var dependencies_that_loaded = inst_41572;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41568,inst_41572,inst_41564,inst_41567,inst_41570,inst_41575,state_val_41652,c__28677__auto__,map__41496,map__41496__$1,opts,before_jsload,on_jsload,reload_dependents,map__41497,map__41497__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41576){
var map__41707 = p__41576;
var map__41707__$1 = ((((!((map__41707 == null)))?(((((map__41707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41707):map__41707);
var request_url = cljs.core.get.call(null,map__41707__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41568,inst_41572,inst_41564,inst_41567,inst_41570,inst_41575,state_val_41652,c__28677__auto__,map__41496,map__41496__$1,opts,before_jsload,on_jsload,reload_dependents,map__41497,map__41497__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41578 = cljs.core.reverse.call(null,inst_41572);
var inst_41579 = cljs.core.map.call(null,inst_41577,inst_41578);
var inst_41580 = cljs.core.pr_str.call(null,inst_41579);
var inst_41581 = figwheel.client.utils.log.call(null,inst_41580);
var state_41651__$1 = (function (){var statearr_41709 = state_41651;
(statearr_41709[(31)] = inst_41575);

return statearr_41709;
})();
var statearr_41710_41777 = state_41651__$1;
(statearr_41710_41777[(2)] = inst_41581);

(statearr_41710_41777[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (35))){
var state_41651__$1 = state_41651;
var statearr_41711_41778 = state_41651__$1;
(statearr_41711_41778[(2)] = true);

(statearr_41711_41778[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (19))){
var inst_41554 = (state_41651[(12)]);
var inst_41560 = figwheel.client.file_reloading.expand_files.call(null,inst_41554);
var state_41651__$1 = state_41651;
var statearr_41712_41779 = state_41651__$1;
(statearr_41712_41779[(2)] = inst_41560);

(statearr_41712_41779[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (11))){
var state_41651__$1 = state_41651;
var statearr_41713_41780 = state_41651__$1;
(statearr_41713_41780[(2)] = null);

(statearr_41713_41780[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (9))){
var inst_41543 = (state_41651[(2)]);
var state_41651__$1 = state_41651;
var statearr_41714_41781 = state_41651__$1;
(statearr_41714_41781[(2)] = inst_41543);

(statearr_41714_41781[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (5))){
var inst_41514 = (state_41651[(8)]);
var inst_41513 = (state_41651[(10)]);
var inst_41516 = (inst_41514 < inst_41513);
var inst_41517 = inst_41516;
var state_41651__$1 = state_41651;
if(cljs.core.truth_(inst_41517)){
var statearr_41715_41782 = state_41651__$1;
(statearr_41715_41782[(1)] = (7));

} else {
var statearr_41716_41783 = state_41651__$1;
(statearr_41716_41783[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (14))){
var inst_41524 = (state_41651[(22)]);
var inst_41533 = cljs.core.first.call(null,inst_41524);
var inst_41534 = figwheel.client.file_reloading.eval_body.call(null,inst_41533,opts);
var inst_41535 = cljs.core.next.call(null,inst_41524);
var inst_41511 = inst_41535;
var inst_41512 = null;
var inst_41513 = (0);
var inst_41514 = (0);
var state_41651__$1 = (function (){var statearr_41717 = state_41651;
(statearr_41717[(7)] = inst_41512);

(statearr_41717[(32)] = inst_41534);

(statearr_41717[(8)] = inst_41514);

(statearr_41717[(9)] = inst_41511);

(statearr_41717[(10)] = inst_41513);

return statearr_41717;
})();
var statearr_41718_41784 = state_41651__$1;
(statearr_41718_41784[(2)] = null);

(statearr_41718_41784[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (45))){
var state_41651__$1 = state_41651;
var statearr_41719_41785 = state_41651__$1;
(statearr_41719_41785[(2)] = null);

(statearr_41719_41785[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (26))){
var inst_41568 = (state_41651[(23)]);
var inst_41572 = (state_41651[(24)]);
var inst_41564 = (state_41651[(19)]);
var inst_41567 = (state_41651[(25)]);
var inst_41570 = (state_41651[(26)]);
var inst_41587 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_41589 = (function (){var all_files = inst_41564;
var res_SINGLEQUOTE_ = inst_41567;
var res = inst_41568;
var files_not_loaded = inst_41570;
var dependencies_that_loaded = inst_41572;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41568,inst_41572,inst_41564,inst_41567,inst_41570,inst_41587,state_val_41652,c__28677__auto__,map__41496,map__41496__$1,opts,before_jsload,on_jsload,reload_dependents,map__41497,map__41497__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41588){
var map__41720 = p__41588;
var map__41720__$1 = ((((!((map__41720 == null)))?(((((map__41720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41720):map__41720);
var namespace = cljs.core.get.call(null,map__41720__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__41720__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41568,inst_41572,inst_41564,inst_41567,inst_41570,inst_41587,state_val_41652,c__28677__auto__,map__41496,map__41496__$1,opts,before_jsload,on_jsload,reload_dependents,map__41497,map__41497__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41590 = cljs.core.map.call(null,inst_41589,inst_41568);
var inst_41591 = cljs.core.pr_str.call(null,inst_41590);
var inst_41592 = figwheel.client.utils.log.call(null,inst_41591);
var inst_41593 = (function (){var all_files = inst_41564;
var res_SINGLEQUOTE_ = inst_41567;
var res = inst_41568;
var files_not_loaded = inst_41570;
var dependencies_that_loaded = inst_41572;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41568,inst_41572,inst_41564,inst_41567,inst_41570,inst_41587,inst_41589,inst_41590,inst_41591,inst_41592,state_val_41652,c__28677__auto__,map__41496,map__41496__$1,opts,before_jsload,on_jsload,reload_dependents,map__41497,map__41497__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41568,inst_41572,inst_41564,inst_41567,inst_41570,inst_41587,inst_41589,inst_41590,inst_41591,inst_41592,state_val_41652,c__28677__auto__,map__41496,map__41496__$1,opts,before_jsload,on_jsload,reload_dependents,map__41497,map__41497__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41594 = setTimeout(inst_41593,(10));
var state_41651__$1 = (function (){var statearr_41722 = state_41651;
(statearr_41722[(33)] = inst_41592);

(statearr_41722[(34)] = inst_41587);

return statearr_41722;
})();
var statearr_41723_41786 = state_41651__$1;
(statearr_41723_41786[(2)] = inst_41594);

(statearr_41723_41786[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (16))){
var state_41651__$1 = state_41651;
var statearr_41724_41787 = state_41651__$1;
(statearr_41724_41787[(2)] = reload_dependents);

(statearr_41724_41787[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (38))){
var inst_41604 = (state_41651[(16)]);
var inst_41622 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41604);
var state_41651__$1 = state_41651;
var statearr_41725_41788 = state_41651__$1;
(statearr_41725_41788[(2)] = inst_41622);

(statearr_41725_41788[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (30))){
var state_41651__$1 = state_41651;
var statearr_41726_41789 = state_41651__$1;
(statearr_41726_41789[(2)] = null);

(statearr_41726_41789[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (10))){
var inst_41524 = (state_41651[(22)]);
var inst_41526 = cljs.core.chunked_seq_QMARK_.call(null,inst_41524);
var state_41651__$1 = state_41651;
if(inst_41526){
var statearr_41727_41790 = state_41651__$1;
(statearr_41727_41790[(1)] = (13));

} else {
var statearr_41728_41791 = state_41651__$1;
(statearr_41728_41791[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (18))){
var inst_41558 = (state_41651[(2)]);
var state_41651__$1 = state_41651;
if(cljs.core.truth_(inst_41558)){
var statearr_41729_41792 = state_41651__$1;
(statearr_41729_41792[(1)] = (19));

} else {
var statearr_41730_41793 = state_41651__$1;
(statearr_41730_41793[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (42))){
var state_41651__$1 = state_41651;
var statearr_41731_41794 = state_41651__$1;
(statearr_41731_41794[(2)] = null);

(statearr_41731_41794[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (37))){
var inst_41617 = (state_41651[(2)]);
var state_41651__$1 = state_41651;
var statearr_41732_41795 = state_41651__$1;
(statearr_41732_41795[(2)] = inst_41617);

(statearr_41732_41795[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41652 === (8))){
var inst_41524 = (state_41651[(22)]);
var inst_41511 = (state_41651[(9)]);
var inst_41524__$1 = cljs.core.seq.call(null,inst_41511);
var state_41651__$1 = (function (){var statearr_41733 = state_41651;
(statearr_41733[(22)] = inst_41524__$1);

return statearr_41733;
})();
if(inst_41524__$1){
var statearr_41734_41796 = state_41651__$1;
(statearr_41734_41796[(1)] = (10));

} else {
var statearr_41735_41797 = state_41651__$1;
(statearr_41735_41797[(1)] = (11));

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
}
});})(c__28677__auto__,map__41496,map__41496__$1,opts,before_jsload,on_jsload,reload_dependents,map__41497,map__41497__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28518__auto__,c__28677__auto__,map__41496,map__41496__$1,opts,before_jsload,on_jsload,reload_dependents,map__41497,map__41497__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28519__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28519__auto____0 = (function (){
var statearr_41736 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41736[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28519__auto__);

(statearr_41736[(1)] = (1));

return statearr_41736;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28519__auto____1 = (function (state_41651){
while(true){
var ret_value__28520__auto__ = (function (){try{while(true){
var result__28521__auto__ = switch__28518__auto__.call(null,state_41651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28521__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28521__auto__;
}
break;
}
}catch (e41737){if((e41737 instanceof Object)){
var ex__28522__auto__ = e41737;
var statearr_41738_41798 = state_41651;
(statearr_41738_41798[(5)] = ex__28522__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28520__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41799 = state_41651;
state_41651 = G__41799;
continue;
} else {
return ret_value__28520__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28519__auto__ = function(state_41651){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28519__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28519__auto____1.call(this,state_41651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28519__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28519__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28519__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28519__auto__;
})()
;})(switch__28518__auto__,c__28677__auto__,map__41496,map__41496__$1,opts,before_jsload,on_jsload,reload_dependents,map__41497,map__41497__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28679__auto__ = (function (){var statearr_41739 = f__28678__auto__.call(null);
(statearr_41739[(6)] = c__28677__auto__);

return statearr_41739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28679__auto__);
});})(c__28677__auto__,map__41496,map__41496__$1,opts,before_jsload,on_jsload,reload_dependents,map__41497,map__41497__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28677__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__41802,link){
var map__41803 = p__41802;
var map__41803__$1 = ((((!((map__41803 == null)))?(((((map__41803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41803):map__41803);
var file = cljs.core.get.call(null,map__41803__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__41803,map__41803__$1,file){
return (function (p1__41800_SHARP_,p2__41801_SHARP_){
if(cljs.core._EQ_.call(null,p1__41800_SHARP_,p2__41801_SHARP_)){
return p1__41800_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__41803,map__41803__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__41806){
var map__41807 = p__41806;
var map__41807__$1 = ((((!((map__41807 == null)))?(((((map__41807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41807):map__41807);
var match_length = cljs.core.get.call(null,map__41807__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__41807__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__41805_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__41805_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__41809_SHARP_,p2__41810_SHARP_){
return cljs.core.assoc.call(null,p1__41809_SHARP_,cljs.core.get.call(null,p2__41810_SHARP_,key),p2__41810_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_41811 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_41811);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_41811);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__41812,p__41813){
var map__41814 = p__41812;
var map__41814__$1 = ((((!((map__41814 == null)))?(((((map__41814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41814):map__41814);
var on_cssload = cljs.core.get.call(null,map__41814__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__41815 = p__41813;
var map__41815__$1 = ((((!((map__41815 == null)))?(((((map__41815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41815):map__41815);
var files_msg = map__41815__$1;
var files = cljs.core.get.call(null,map__41815__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1540243375056
