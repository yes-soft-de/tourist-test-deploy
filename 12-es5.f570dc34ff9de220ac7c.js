function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{HR9E:function(e,t,n){"use strict";n.r(t),n.d(t,"RegionsModule",(function(){return xe}));var o,i=n("tyNb"),r=n("ofXK"),c=n("3Pt+"),a=n("LC35"),l=n("kt0X"),s=Object(l.n)("[Region/API] Load Regions"),u=Object(l.n)("[Region/API] Load Regions Success",Object(l.s)()),d=Object(l.n)("[Region/API] Load Regions Failure",Object(l.s)()),g=Object(l.n)("[Region/API] Load Region",Object(l.s)()),p=Object(l.n)("[Region/API] Load Region Success",Object(l.s)()),b=Object(l.n)("[Region/API] Load Region Failure",Object(l.s)()),m=Object(l.n)("[Region/API] Delete Region",Object(l.s)()),f=Object(l.n)("[Region/API] Delete Region Success"),h=Object(l.n)("[Region/API] Delete Region Failure",Object(l.s)()),v=Object(l.n)("[Region/API] Add Region",Object(l.s)()),C=Object(l.n)("[Region/API] Add Region Success"),O=Object(l.n)("[Region/API] Add Region Failure",Object(l.s)()),y=Object(l.n)("[Region/API] Upsert Region",Object(l.s)()),R=Object(l.n)("[Region/API] Add Regions",Object(l.s)()),w=Object(l.n)("[Region/API] Update Region",Object(l.s)()),P=Object(l.n)("[Region/API] Update Region Success",Object(l.s)()),k=Object(l.n)("[Region/API] Update Region Failure",Object(l.s)()),j=Object(l.n)("[Region/API] Update Regions",Object(l.s)()),_=Object(l.n)("[Region/API] Delete Regions",Object(l.s)()),I=Object(l.n)("[Region/API] Upsert Regions",Object(l.s)()),M=Object(l.n)("[Region/API] Clear Regions"),Z=n("fXoL"),S=n("5eHb"),x=n("Kj3r"),L=n("/uUt"),F=n("eIep"),A=n("EWl0"),J=n("tk/3"),D=n("lf8/"),B=((o=function(){function e(t,n){_classCallCheck(this,e),this.httpClient=t,this.tokenService=n}return _createClass(e,[{key:"getAllRegions",value:function(){return this.httpClient.get(A.a.regionsAPI)}},{key:"getRegion",value:function(e){return this.httpClient.get("".concat(A.a.regionAPI,"/").concat(e))}},{key:"createRegion",value:function(e){return this.httpClient.post(A.a.regionAPI,JSON.stringify(e))}},{key:"updateRegion",value:function(e){return this.httpClient.put(A.a.updateRegionAPI,JSON.stringify(e))}},{key:"deleteRegion",value:function(e){return this.httpClient.delete("".concat(A.a.regionAPI,"/").concat(e))}},{key:"getGoogleMapToken",value:function(){return this.httpClient.get(A.a.googleMapTokenAPI)}},{key:"getPlaceDetailsByPlaceID",value:function(e,t){return this.httpClient.get(A.a.googleMapPlaceDetailsAPI+"json?place_id=".concat(e,"&key=").concat(t))}},{key:"search",value:function(e,t){return this.httpClient.get(A.a.googleMapSearchAPI+"json?input=".concat(e,"&types=geocode&key=").concat(t))}},{key:"searchLocationAutoComplete",value:function(e,t){var n=this;return e.pipe(Object(x.a)(500),Object(L.a)(),Object(F.a)((function(e){return e?n.search(e,t):[]})))}},{key:"uploadImage",value:function(e){var t=new FormData;return t.append("image",e),this.httpClient.post(A.a.generalUploadAPI,t)}}]),e}()).\u0275fac=function(e){return new(e||o)(Z.ec(J.b),Z.ec(D.a))},o.\u0275prov=Z.Rb({token:o,factory:o.\u0275fac,providedIn:"root"}),o),U=n("sYmb"),q=["search"];function V(e,t){if(1&e){var n=Z.bc();Z.ac(0,"li",32),Z.ic("click",(function(){Z.wc(n);var e=t.$implicit;return Z.lc(3).getLocationInfo(e)})),Z.Cc(1),Z.Zb()}if(2&e){var o=t.$implicit;Z.Jb(1),Z.Dc(null==o?null:o.description)}}function N(e,t){if(1&e&&(Z.ac(0,"ul",30),Z.Bc(1,V,2,1,"li",31),Z.Zb()),2&e){var n=Z.lc(2);Z.Jb(1),Z.pc("ngForOf",n.googleLocationsNameList)}}function T(e,t){1&e&&(Z.ac(0,"div",33),Z.Wb(1,"div"),Z.Wb(2,"div"),Z.Wb(3,"div"),Z.Wb(4,"div"),Z.Zb())}function W(e,t){if(1&e&&(Z.ac(0,"div",27),Z.Bc(1,N,2,1,"ul",28),Z.Bc(2,T,5,0,"div",29),Z.Zb()),2&e){var n=Z.lc();Z.Jb(1),Z.pc("ngIf",n.googleLocationsNameList),Z.Jb(1),Z.pc("ngIf",!n.googleLocationsNameList)}}function $(e,t){1&e&&(Z.ac(0,"span",34),Z.Cc(1),Z.mc(2,"translate"),Z.Zb()),2&e&&(Z.Jb(1),Z.Dc(Z.nc(2,1,"name-field-required")))}function E(e,t){1&e&&(Z.ac(0,"span",34),Z.Cc(1),Z.mc(2,"translate"),Z.Zb()),2&e&&(Z.Jb(1),Z.Dc(Z.nc(2,1,"descriptioon-field-required")))}var G,z=function(e){return{"is-invalid":e}},H=((G=function(){function e(t,n,o,i,r,c,a){_classCallCheck(this,e),this.store=t,this.toaster=n,this.regionService=o,this.translate=i,this.router=r,this.render=c,this.document=a,this.title="AGM project",this.isSubmited=!1,this.uploadButtonValue="upload",this.coverUploadButtonValue="upload",this.imageName="select-image",this.fileSelected=!1,this.fileUploaded=!1,this.imagePathReady=!1,this.imageUploaded=!1,this.submitButtonValue="Waiting Uploading Image",this.showSearchResult=!1,this.googlePlaceLocation=[]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.router.events.subscribe((function(t){t instanceof i.c&&"/regions/add"==t.urlAfterRedirects&&e.checkCurrentLang()})),this.addRegionForm=new c.d({name:new c.b(""),description:new c.b(""),location:new c.b(""),placeId:new c.b("",c.o.required),path:new c.b("")}),this.checkLangChange(),this.getGoogleMapToken()}},{key:"test",value:function(){var e=this;this.googlePlaceLocation=[];var t=this.addRegionForm.get("description").value,n=setInterval((function(){var o=e.document.getElementById("app_root"),i=o.getAttribute("placeid"),r=o.getAttribute("lan"),a=o.getAttribute("lat"),l=o.getAttribute("formattedAddress");i&&e.googlePlaceID!=i&&(e.showSearchResult=!1,e.googlePlaceID=i,e.googlePlaceLocation.push(r,a),e.addRegionForm=new c.d({name:new c.b(l),description:new c.b(t),location:new c.b(e.googlePlaceLocation),placeId:new c.b(e.googlePlaceID),path:new c.b("")}),console.log("from compoentns placeId : ",i,e.googlePlaceLocation),clearInterval(n))}),100)}},{key:"getGoogleMapToken",value:function(){var e=this;this.regionService.getGoogleMapToken().subscribe((function(t){return e.googleMapToken=t.Data}))}},{key:"searchLocation",value:function(e){this.showSearchResult=!0,""==e.target.value&&(this.showSearchResult=!1)}},{key:"getLocationInfo",value:function(e){var t,n,o=this.addRegionForm.get("description").value;e&&(this.showSearchResult=!1,this.addRegionForm=new c.d({name:new c.b(null==e?void 0:e.description),description:new c.b(o),location:new c.b(null===(n=null===(t=null==e?void 0:e.structured_formatting)||void 0===t?void 0:t.main_text_matched_substrings)||void 0===n?void 0:n.length),placeId:new c.b(null==e?void 0:e.place_id),path:new c.b("")}))}},{key:"updateName",value:function(e){var t=e.files[0];this.uploadButtonValue="Upload",this.imageName=t.name,this.fileSelected=!0}},{key:"processFile",value:function(e){var t=this;this.fileSelected=!1,this.imageUploaded=!0,this.uploadButtonValue="Uploading...",console.log("Processing File");var n=e.files[0],o=new FileReader;o.addEventListener("load",(function(e){t.selectedFile=new a.a(e.target.result,n),t.regionService.uploadImage(t.selectedFile.file).subscribe((function(e){console.log(e),t.imageUrl=e,t.uploadButtonValue="uploaded",t.imagePathReady=!0,t.imageUploaded=!1,t.submitButtonValue="new-region"}),(function(e){t.uploadButtonValue="upload",t.fileSelected=!0,t.imageUploaded=!1,t.toaster.error("Network Error, Please Try After a Few Seconds"),console.log(e)}))})),o.readAsDataURL(n)}},{key:"checkCurrentLang",value:function(){var e=this,t=0,n=setInterval((function(){t++,"ar"==e.translate.currentLang?(e.render.removeClass(e.document.querySelector(".input-group-custom"),"input-group"),e.render.addClass(e.document.querySelector(".input-group-custom"),"input-group-ar")):(e.render.addClass(e.document.querySelector(".input-group-custom"),"input-group"),e.render.removeClass(e.document.querySelector(".input-group-custom"),"input-group-ar")),2==t&&clearInterval(n)}),200)}},{key:"checkLangChange",value:function(){var e=this;this.translate.onLangChange.subscribe((function(t){"ar"==(null==t?void 0:t.lang)?(e.render.removeClass(e.document.querySelector(".input-group-custom"),"input-group"),e.render.addClass(e.document.querySelector(".input-group-custom"),"input-group-ar")):(e.render.addClass(e.document.querySelector(".input-group-custom"),"input-group"),e.render.removeClass(e.document.querySelector(".input-group-custom"),"input-group-ar"))}))}},{key:"onSubmit",value:function(){if(!this.addRegionForm.valid)return this.toaster.error("Error : Form Not Valid"),this.isSubmited=!1,!1;var e=this.addRegionForm.getRawValue();e.path=this.imageUrl,console.log(e),this.store.dispatch(v({region:e}))}},{key:"ngOnDestroy",value:function(){localStorage.removeItem("place_id")}}]),e}()).\u0275fac=function(e){return new(e||G)(Z.Vb(l.h),Z.Vb(S.b),Z.Vb(B),Z.Vb(U.d),Z.Vb(i.d),Z.Vb(Z.K),Z.Vb(r.e))},G.\u0275cmp=Z.Pb({type:G,selectors:[["app-add-region"]],viewQuery:function(e,t){var n;1&e&&Z.Ic(q,!0),2&e&&Z.tc(n=Z.jc())&&(t.searchElementRef=n.first)},decls:49,vars:42,consts:[[1,"container-fluid"],[1,"content-header"],[1,"text-center","my-5"],[1,"card","card-info"],[1,"card-header","bg-sidebar-item-button","text-white"],[1,"card-title","mb-0"],[3,"formGroup","ngSubmit"],[1,"card-body"],[1,"form-group"],["for","inputNameSuccess",1,"col-form-label"],["type","text","id","pac-input","name","name","formControlName","name","autocomplete","off",1,"form-control","controls",3,"ngClass","placeholder","change","keydown"],["class","location-search-result px-3 py-2",4,"ngIf"],["class","invalid-feedback",4,"ngIf"],["for","exampleInputdescription1"],["name","description","formControlName","description","id","exampleInputdescription1",1,"form-control",3,"ngClass","placeholder"],["for","exampleInputupload"],[1,"input-group","input-group-custom"],[1,"custom-file"],["type","file","accept","image/*","id","file-input",1,"custom-file-input",3,"change"],["imageInput",""],["for","file-input",1,"custom-file-label"],[1,"input-group-append"],["type","button",1,"btn","btn-success",3,"disabled","click"],[1,"card-footer"],["type","submit",1,"btn","bg-sidebar-item-button","text-white",3,"disabled"],[1,"container"],["id","map"],[1,"location-search-result","px-3","py-2"],["class","list-unstyled mb-0",4,"ngIf"],["class","lds-ring",4,"ngIf"],[1,"list-unstyled","mb-0"],["class","pb-1",3,"click",4,"ngFor","ngForOf"],[1,"pb-1",3,"click"],[1,"lds-ring"],[1,"invalid-feedback"]],template:function(e,t){if(1&e){var n=Z.bc();Z.ac(0,"div",0),Z.ac(1,"div",1),Z.ac(2,"h1",2),Z.Cc(3),Z.mc(4,"translate"),Z.Zb(),Z.Zb(),Z.ac(5,"div",3),Z.ac(6,"div",4),Z.ac(7,"h3",5),Z.Cc(8),Z.mc(9,"translate"),Z.Zb(),Z.Zb(),Z.ac(10,"form",6),Z.ic("ngSubmit",(function(){return t.onSubmit()})),Z.ac(11,"div",7),Z.ac(12,"div",8),Z.ac(13,"label",9),Z.Cc(14),Z.mc(15,"translate"),Z.Zb(),Z.ac(16,"input",10),Z.ic("change",(function(){return t.test()}))("keydown",(function(e){return t.searchLocation(e)})),Z.mc(17,"translate"),Z.Zb(),Z.Bc(18,W,3,2,"div",11),Z.Bc(19,$,3,3,"span",12),Z.Zb(),Z.ac(20,"div",8),Z.ac(21,"label",13),Z.Cc(22),Z.mc(23,"translate"),Z.Zb(),Z.ac(24,"textarea",14),Z.mc(25,"translate"),Z.Cc(26,"                    "),Z.Zb(),Z.Bc(27,E,3,3,"span",12),Z.Zb(),Z.ac(28,"div",8),Z.ac(29,"label",15),Z.Cc(30),Z.mc(31,"translate"),Z.Zb(),Z.ac(32,"div",16),Z.ac(33,"div",17),Z.ac(34,"input",18,19),Z.ic("change",(function(){Z.wc(n);var e=Z.uc(35);return t.updateName(e)})),Z.Zb(),Z.ac(36,"label",20),Z.Cc(37),Z.mc(38,"translate"),Z.Zb(),Z.Zb(),Z.ac(39,"div",21),Z.ac(40,"button",22),Z.ic("click",(function(){Z.wc(n);var e=Z.uc(35);return t.processFile(e)})),Z.Cc(41),Z.mc(42,"translate"),Z.Zb(),Z.Zb(),Z.Zb(),Z.Zb(),Z.Zb(),Z.ac(43,"div",23),Z.ac(44,"button",24),Z.Cc(45),Z.mc(46,"translate"),Z.Zb(),Z.Zb(),Z.Zb(),Z.Zb(),Z.Zb(),Z.ac(47,"div",25),Z.Wb(48,"div",26),Z.Zb()}2&e&&(Z.Jb(3),Z.Dc(Z.nc(4,18,"create-region-page")),Z.Jb(5),Z.Dc(Z.nc(9,20,"new-region")),Z.Jb(2),Z.pc("formGroup",t.addRegionForm),Z.Jb(4),Z.Dc(Z.nc(15,22,"name")),Z.Jb(2),Z.qc("placeholder",Z.nc(17,24,"name-type-placeholder")),Z.pc("ngClass",Z.sc(38,z,t.addRegionForm.get("name").errors&&(t.addRegionForm.get("name").touched||t.addRegionForm.get("name").dirty))),Z.Jb(2),Z.pc("ngIf",t.showSearchResult),Z.Jb(1),Z.pc("ngIf",null==t.addRegionForm.get("name").errors?null:t.addRegionForm.get("name").errors.required),Z.Jb(3),Z.Dc(Z.nc(23,26,"description")),Z.Jb(2),Z.qc("placeholder",Z.nc(25,28,"description-type-placeholder")),Z.pc("ngClass",Z.sc(40,z,t.addRegionForm.get("description").errors&&(t.addRegionForm.get("description").touched||t.addRegionForm.get("description").dirty))),Z.Jb(3),Z.pc("ngIf",null==t.addRegionForm.get("description").errors?null:t.addRegionForm.get("description").errors.required),Z.Jb(3),Z.Dc(Z.nc(31,30,"upload")),Z.Jb(7),Z.Dc(Z.nc(38,32,t.imageName)),Z.Jb(3),Z.pc("disabled",!t.fileSelected),Z.Jb(1),Z.Ec(" ",Z.nc(42,34,t.uploadButtonValue)," "),Z.Jb(3),Z.pc("disabled",t.addRegionForm.invalid||t.imageUploaded),Z.Jb(1),Z.Dc(Z.nc(46,36,"create")))},directives:[c.q,c.h,c.e,c.a,c.g,c.c,r.l,r.n,r.m],pipes:[U.c],styles:['.location-search-result[_ngcontent-%COMP%]{border:1px solid #ddd;border-radius:5px}.location-search-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer}.location-search-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{transition:all .5s ease;background:rgba(54,72,94,.92);color:#fff;border-radius:5px;padding-left:10px}.location-search-result[_ngcontent-%COMP%]   .lds-ring[_ngcontent-%COMP%]{display:block;position:inherit;width:64px;height:64px;margin-left:auto;margin-right:auto}.card-footer[_ngcontent-%COMP%]   .btn.bg-sidebar-item-button[_ngcontent-%COMP%]:hover{background:rgba(54,72,94,.8)}.input-group-ar[_ngcontent-%COMP%]{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group-ar[_ngcontent-%COMP%] > .custom-file[_ngcontent-%COMP%]{position:relative;flex:1 1 auto;width:1%;margin-bottom:0}.input-group-ar[_ngcontent-%COMP%] > .custom-file[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%]{width:100%;min-width:14rem;max-width:100%;height:calc(2.25rem + 2px);margin:0;opacity:0}.input-group-ar[_ngcontent-%COMP%] > .custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%]{position:absolute;top:0;right:0;left:0;z-index:1;height:calc(2.25rem + 2px);padding:.375rem .75rem;line-height:1.5;color:#495057;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem}.input-group-ar[_ngcontent-%COMP%] > .custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;bottom:0;z-index:3;display:block;height:2.25rem;padding:.375rem .75rem;line-height:1.5;color:#495057;content:"Browse";background-color:#e9ecef;border-left:1px solid #ced4da;border-radius:.25rem 0 0 .25rem}#map[_ngcontent-%COMP%], body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{height:100%}body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{margin:0;padding:0}#description[_ngcontent-%COMP%]{font-family:Roboto;font-size:15px;font-weight:300}#infowindow-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:700}#infowindow-content[_ngcontent-%COMP%]{display:none}#map[_ngcontent-%COMP%]   #infowindow-content[_ngcontent-%COMP%]{display:inline}.pac-card[_ngcontent-%COMP%]{margin:10px 10px 0 0;border-radius:2px 0 0 2px;box-sizing:border-box;-moz-box-sizing:border-box;outline:none;box-shadow:0 2px 6px rgba(0,0,0,.3);background-color:#fff;font-family:Roboto}#pac-container[_ngcontent-%COMP%]{padding-bottom:12px;margin-right:12px}.pac-controls[_ngcontent-%COMP%]{display:inline-block;padding:5px 11px}.pac-controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-family:Roboto;font-size:13px;font-weight:300}#pac-input[_ngcontent-%COMP%]:focus{border-color:#4d90fe}#title[_ngcontent-%COMP%]{color:#fff;background-color:#4d90fe;font-size:25px;font-weight:500;padding:6px 12px}#target[_ngcontent-%COMP%]{width:345px}']}),G),K=n("R0sL"),X=Object(K.a)(),Y=X.getInitialState({Data:void 0,regionDetails:void 0,error:void 0}),Q=Object(l.p)(Y,Object(l.r)(u,(function(e,t){return X.setAll(t.Data,e)})),Object(l.r)(p,(function(e,t){return Object.assign(Object.assign({},e),{regionDetails:t.region})})),Object(l.r)(R,(function(e,t){return X.addMany(t.regions,e)})),Object(l.r)(m,(function(e,t){return X.removeOne(t.id,e)})),Object(l.r)(v,(function(e,t){return X.addOne(t.region,e)})),Object(l.r)(y,(function(e,t){return X.upsertOne(t.region,e)})),Object(l.r)(R,(function(e,t){return X.addMany(t.regions,e)})),Object(l.r)(I,(function(e,t){return X.upsertMany(t.regions,e)})),Object(l.r)(P,(function(e,t){return X.updateOne(t.region,e)})),Object(l.r)(j,(function(e,t){return X.updateMany(t.regions,e)})),Object(l.r)(_,(function(e,t){return X.removeMany(t.ids,e)})),Object(l.r)(M,(function(e){return X.removeAll(e)}))),ee=X.getSelectors().selectAll,te=Object(l.o)("regions"),ne=Object(l.q)(te,ee),oe=Object(l.q)(te,(function(e){return e.regionDetails})),ie=n("oOf3");function re(e,t){if(1&e){var n=Z.bc();Z.ac(0,"tr"),Z.ac(1,"td"),Z.Wb(2,"img",11),Z.Zb(),Z.ac(3,"td"),Z.Cc(4),Z.Zb(),Z.ac(5,"td",12),Z.Cc(6),Z.Zb(),Z.ac(7,"td"),Z.Cc(8),Z.Zb(),Z.ac(9,"td"),Z.Cc(10),Z.Zb(),Z.ac(11,"td"),Z.ac(12,"a",13),Z.Cc(13),Z.mc(14,"translate"),Z.Zb(),Z.ac(15,"a",14),Z.ic("click",(function(){Z.wc(n);var e=t.$implicit;return Z.lc(2).delete(null==e?null:e.id)})),Z.Cc(16),Z.mc(17,"translate"),Z.Zb(),Z.Zb(),Z.Zb()}if(2&e){var o=t.$implicit,i=Z.lc(2);Z.Jb(2),Z.qc("src",null==o||null==o.path[0]?null:o.path[0].path,Z.yc),Z.rc("alt","",o.name," Image"),Z.Jb(2),Z.Dc(o.name?o.name:"-"),Z.Jb(2),Z.Dc(o.description?o.description:"-"),Z.Jb(2),Z.Dc(o.commentNumber?o.commentNumber:"-"),Z.Jb(2),Z.Dc(o.ratingAverage?o.ratingAverage:"-"),Z.Jb(2),Z.rc("routerLink","/regions/",null==o?null:o.id,""),Z.Jb(1),Z.Ec(" ",Z.nc(14,12,"update")," "),Z.Jb(2),Z.Mb("btn btn-danger confirm btn-sm mr-1 mb-1 ",i.isDeleted?"disabled":"",""),Z.Jb(1),Z.Ec(" ",Z.nc(17,14,"delete")," ")}}function ce(e,t){if(1&e){var n=Z.bc();Z.ac(0,"div"),Z.ac(1,"h1",1),Z.Cc(2),Z.mc(3,"translate"),Z.Zb(),Z.ac(4,"div",2),Z.ac(5,"div",3),Z.ac(6,"div",4),Z.ac(7,"input",5),Z.ic("ngModelChange",(function(e){return Z.wc(n),Z.lc().name=e}))("keyup",(function(){return Z.wc(n),Z.lc().applyFilter()})),Z.mc(8,"translate"),Z.mc(9,"translate"),Z.Zb(),Z.Zb(),Z.Zb(),Z.Zb(),Z.ac(10,"div",6),Z.ac(11,"table",7),Z.ac(12,"tr",8),Z.ac(13,"td"),Z.Cc(14),Z.mc(15,"translate"),Z.Zb(),Z.ac(16,"td"),Z.Cc(17),Z.mc(18,"translate"),Z.Zb(),Z.ac(19,"td"),Z.Cc(20),Z.mc(21,"translate"),Z.Zb(),Z.ac(22,"td"),Z.Cc(23),Z.mc(24,"translate"),Z.Zb(),Z.ac(25,"td"),Z.Cc(26),Z.mc(27,"translate"),Z.Zb(),Z.ac(28,"td"),Z.Cc(29),Z.mc(30,"translate"),Z.Zb(),Z.Zb(),Z.Bc(31,re,18,16,"tr",9),Z.mc(32,"paginate"),Z.Zb(),Z.ac(33,"pagination-controls",10),Z.ic("pageChange",(function(e){return Z.wc(n),Z.lc().pageChanged(e)})),Z.mc(34,"translate"),Z.mc(35,"translate"),Z.mc(36,"translate"),Z.Zb(),Z.Zb(),Z.Zb()}if(2&e){var o=Z.lc();Z.Jb(2),Z.Dc(Z.nc(3,14,"manage-regions-page")),Z.Jb(5),Z.qc("placeholder",Z.nc(8,16,"region-search-input")),Z.qc("title",Z.nc(9,18,"region-search-input")),Z.pc("ngModel",o.name),Z.Jb(7),Z.Dc(Z.nc(15,20,"image")),Z.Jb(3),Z.Dc(Z.nc(18,22,"name")),Z.Jb(3),Z.Dc(Z.nc(21,24,"description")),Z.Jb(3),Z.Dc(Z.nc(24,26,"comment-number")),Z.Jb(3),Z.Dc(Z.nc(27,28,"rating-average")),Z.Jb(3),Z.Dc(Z.nc(30,30,"control")),Z.Jb(2),Z.pc("ngForOf",Z.oc(32,32,o.regionsList,o.config)),Z.Jb(2),Z.qc("previousLabel",Z.nc(34,35,"prev")),Z.qc("nextLabel",Z.nc(35,37,"next")),Z.qc("screenReaderCurrentLabel",Z.nc(36,39,"you-are-on-page"))}}function ae(e,t){1&e&&(Z.ac(0,"div"),Z.ac(1,"div",15),Z.Wb(2,"div"),Z.Wb(3,"div"),Z.Wb(4,"div"),Z.Wb(5,"div"),Z.Zb(),Z.Zb())}var le,se=((le=function(){function e(t){_classCallCheck(this,e),this.store=t,this.regionsList=[]}return _createClass(e,[{key:"ngOnInit",value:function(){this.store.dispatch(s()),this.getAllRegions()}},{key:"getAllRegions",value:function(){var e=this;this.regionsSubscription=this.store.select(ne).subscribe((function(t){console.log(t),e.regions=t,e.regionsList=t})),this.config={itemsPerPage:5,currentPage:1,totalItems:this.regionsList.length}}},{key:"pageChanged",value:function(e){this.config.currentPage=e}},{key:"delete",value:function(e){var t=this;if(!confirm("Are You Sure You Want To Delete This Region"))return!1;this.isDeleted=!0,this.store.dispatch(m({id:e})),setTimeout((function(){t.isDeleted=!1}),1e3)}},{key:"applyFilter",value:function(){var e=this;this.name?(this.regionsList=[],this.regionsList=this.regions.filter((function(t){if(t.name){var n=t.name.toLocaleLowerCase().match(e.name.toLocaleLowerCase());if(n)return n}}))):this.regionsList=_toConsumableArray(this.regions)}},{key:"ngOnDestroy",value:function(){this.regionsSubscription.unsubscribe()}}]),e}()).\u0275fac=function(e){return new(e||le)(Z.Vb(l.h))},le.\u0275cmp=Z.Pb({type:le,selectors:[["app-all-regions"]],decls:2,vars:2,consts:[[4,"ngIf"],[1,"text-center","details-title","my-4"],[1,"row"],[1,"col-10","col-sm-8","col-md-6","col-xl-4"],[1,"form-group","mb-4"],["id","exampleFormControlInput2","type","text",1,"form-control","form-control-underlined","border-primary","search-input",3,"ngModel","placeholder","title","ngModelChange","keyup"],[1,"table-responsive","text-center"],[1,"table","table-bordered","main-table"],[1,"bg-dark","text-white"],[4,"ngFor","ngForOf"],["autoHide","true","maxSize","5","responsive","true","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page",1,"my-pagination",3,"previousLabel","nextLabel","screenReaderCurrentLabel","pageChange"],[1,"img-thumbnail","img-custom",3,"src","alt"],[1,"td-custom"],[1,"btn","btn-success","btn-sm","mr-1","mb-1",3,"routerLink"],[3,"click"],[1,"lds-ring"]],template:function(e,t){1&e&&(Z.Bc(0,ce,37,41,"div",0),Z.Bc(1,ae,6,0,"div",0)),2&e&&(Z.pc("ngIf",0!=t.regions.length),Z.Jb(1),Z.pc("ngIf",0==t.regions.length))},directives:[r.n,c.a,c.g,c.j,r.m,ie.c,i.f],pipes:[U.c,ie.b],styles:["agm-map[_ngcontent-%COMP%]{height:300px}"]}),le),ue=n("LRne");function de(e,t){if(1&e){var n=Z.bc();Z.ac(0,"li",30),Z.ic("click",(function(){Z.wc(n);var e=t.$implicit;return Z.lc(3).getLocationInfo(e)})),Z.Cc(1),Z.Zb()}if(2&e){var o=t.$implicit;Z.Jb(1),Z.Dc(null==o?null:o.description)}}function ge(e,t){if(1&e&&(Z.ac(0,"ul",28),Z.Bc(1,de,2,1,"li",29),Z.Zb()),2&e){var n=Z.lc(2);Z.Jb(1),Z.pc("ngForOf",n.googleLocationsNameList)}}function pe(e,t){1&e&&(Z.ac(0,"div",31),Z.Wb(1,"div"),Z.Wb(2,"div"),Z.Wb(3,"div"),Z.Wb(4,"div"),Z.Zb())}function be(e,t){if(1&e&&(Z.ac(0,"div",25),Z.Bc(1,ge,2,1,"ul",26),Z.Bc(2,pe,5,0,"div",27),Z.Zb()),2&e){var n=Z.lc();Z.Jb(1),Z.pc("ngIf",n.googleLocationsNameList),Z.Jb(1),Z.pc("ngIf",!n.googleLocationsNameList)}}function me(e,t){1&e&&(Z.ac(0,"span",32),Z.Cc(1),Z.mc(2,"translate"),Z.Zb()),2&e&&(Z.Jb(1),Z.Dc(Z.nc(2,1,"name-field-required")))}function fe(e,t){1&e&&(Z.ac(0,"span",32),Z.Cc(1),Z.mc(2,"translate"),Z.Zb()),2&e&&(Z.Jb(1),Z.Dc(Z.nc(2,1,"descriptioon-field-required")))}function he(e,t){1&e&&(Z.ac(0,"span",32),Z.Cc(1,"description Must Be Greater Than 3"),Z.Zb())}var ve,Ce,Oe,ye,Re=function(e){return{"is-invalid":e}},we=[{path:"",component:se},{path:"add",component:H},{path:":id",component:(ve=function(){function e(t,n,o,i,r,c,a){_classCallCheck(this,e),this.store=t,this.regionService=n,this.toaster=o,this.translate=i,this.render=r,this.document=c,this.activatedRoute=a,this.isSubmited=!1,this.uploadButtonValue="upload",this.coverUploadButtonValue="upload",this.imageName="select-image",this.fileSelected=!1,this.fileUploaded=!1,this.imagePathReady=!1,this.imageUploaded=!1,this.submitButtonValue="Waiting Uploading Image",this.showSearchResult=!1}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.activatedRoute.paramMap.subscribe((function(t){var n=t.get("id");e.store.dispatch(g({id:+n}))})),this.editRegionForm=new c.d({name:new c.b(""),description:new c.b(""),location:new c.b(""),path:new c.b(""),placeId:new c.b("",c.o.required)}),this.checkLangChange(),this.getRegion(),this.getGoogleMapToken()}},{key:"getGoogleMapToken",value:function(){var e=this;this.regionService.getGoogleMapToken().subscribe((function(t){return e.googleMapToken=t.Data}))}},{key:"getRegion",value:function(){var e=this;this.store.select(oe).subscribe((function(t){t&&(e.regionData=t,console.log("data detail: ",t),e.fillForms(t))}))}},{key:"fillForms",value:function(e){this.editRegionForm=new c.d({id:new c.b(e.id),name:new c.b(e.name),description:new c.b(e.description),location:new c.b(e.location),path:new c.b(e.path),placeId:new c.b(e.placeId)})}},{key:"searchLocation",value:function(e){var t=this;this.showSearchResult=!0;var n=Object(ue.a)(e.target.value.trim());this.regionService.searchLocationAutoComplete(n,this.googleMapToken).subscribe((function(e){e&&(t.googleLocationsNameList=e.predictions,console.log("search data : ",t.googleLocationsNameList))}))}},{key:"getLocationInfo",value:function(e){var t,n=this.regionData.id,o=this.editRegionForm.get("description").value;e&&(this.showSearchResult=!1,this.editRegionForm=new c.d({id:new c.b(n),name:new c.b(null==e?void 0:e.description),description:new c.b(o),location:new c.b(null===(t=null==e?void 0:e.structured_formatting)||void 0===t?void 0:t.main_text_matched_substrings.length),placeId:new c.b(null==e?void 0:e.place_id),path:new c.b("")}))}},{key:"checkLangChange",value:function(){var e=this;this.translate.onLangChange.subscribe((function(t){console.log("lang change to : ",t),"ar"==t.lang?(console.log("lang : ",t.lang),e.render.removeClass(e.document.querySelector(".input-group-custom"),"input-group"),e.render.addClass(e.document.querySelector(".input-group-custom"),"input-group-ar")):(e.render.addClass(e.document.querySelector(".input-group-custom"),"input-group"),e.render.removeClass(e.document.querySelector(".input-group-custom"),"input-group-ar"))}))}},{key:"updateName",value:function(e){var t=e.files[0];this.uploadButtonValue="Upload",this.imageName=t.name,this.fileSelected=!0}},{key:"processFile",value:function(e){var t=this;this.fileSelected=!1,this.uploadButtonValue="Uploading...",this.imageUploaded=!0,console.log("Processing File");var n=e.files[0],o=new FileReader;o.addEventListener("load",(function(e){t.selectedFile=new a.a(e.target.result,n),t.regionService.uploadImage(t.selectedFile.file).subscribe((function(e){console.log(e),t.imageUrl=e,t.uploadButtonValue="uploaded",t.imagePathReady=!0,t.imageUploaded=!1,t.submitButtonValue="update"}),(function(e){t.uploadButtonValue="upload",t.fileSelected=!0,t.imageUploaded=!1,t.toaster.error("Network Error, Please Try After a Few Seconds"),console.log(e)}))})),o.readAsDataURL(n)}},{key:"onSubmit",value:function(){if(!this.editRegionForm.valid)return this.toaster.error("Error : Form Not Valid"),this.isSubmited=!1,!1;var e=this.editRegionForm.getRawValue();e.path=this.imageUrl,e.path=this.imageUrl?this.imageUrl:this.regionData.regionImage[0].pathURL,console.log(e),this.store.dispatch(w({region:e}))}}]),e}(),ve.\u0275fac=function(e){return new(e||ve)(Z.Vb(l.h),Z.Vb(B),Z.Vb(S.b),Z.Vb(U.d),Z.Vb(Z.K),Z.Vb(r.e),Z.Vb(i.a))},ve.\u0275cmp=Z.Pb({type:ve,selectors:[["app-edit-region"]],decls:48,vars:43,consts:[[1,"container-fluid"],[1,"content-header"],[1,"text-center","my-5"],[1,"card","card-info"],[1,"card-header","bg-sidebar-item-button","text-white"],[1,"card-title","mb-0"],[3,"formGroup","ngSubmit"],[1,"card-body"],[1,"form-group"],["for","inputNameSuccess",1,"col-form-label"],["type","text","name","name","id","inputNameSuccess","formControlName","name",1,"form-control",3,"ngClass","placeholder","keydown"],["class","location-search-result px-3 py-2",4,"ngIf"],["class","invalid-feedback",4,"ngIf"],["for","exampleInputdescription1"],["name","description","formControlName","description","id","exampleInputdescription1",1,"form-control",3,"ngClass","placeholder"],["for","exampleInputupload"],[1,"input-group","input-group-custom"],[1,"custom-file"],["type","file","accept","image/*","id","file-input",1,"custom-file-input",3,"change"],["imageInput",""],["for","file-input",1,"custom-file-label"],[1,"input-group-append"],["type","button",1,"btn","btn-success",3,"disabled","click"],[1,"card-footer"],["type","submit",1,"btn","bg-sidebar-item-button","text-white",3,"disabled"],[1,"location-search-result","px-3","py-2"],["class","list-unstyled mb-0",4,"ngIf"],["class","lds-ring",4,"ngIf"],[1,"list-unstyled","mb-0"],["class","pb-1",3,"click",4,"ngFor","ngForOf"],[1,"pb-1",3,"click"],[1,"lds-ring"],[1,"invalid-feedback"]],template:function(e,t){if(1&e){var n=Z.bc();Z.ac(0,"div",0),Z.ac(1,"div",1),Z.ac(2,"h1",2),Z.Cc(3),Z.mc(4,"translate"),Z.Zb(),Z.Zb(),Z.ac(5,"div",3),Z.ac(6,"div",4),Z.ac(7,"h3",5),Z.Cc(8),Z.mc(9,"translate"),Z.Zb(),Z.Zb(),Z.ac(10,"form",6),Z.ic("ngSubmit",(function(){return t.onSubmit()})),Z.ac(11,"div",7),Z.ac(12,"div",8),Z.ac(13,"label",9),Z.Cc(14),Z.mc(15,"translate"),Z.Zb(),Z.ac(16,"input",10),Z.ic("keydown",(function(e){return t.searchLocation(e)})),Z.mc(17,"translate"),Z.Zb(),Z.Bc(18,be,3,2,"div",11),Z.Bc(19,me,3,3,"span",12),Z.Zb(),Z.ac(20,"div",8),Z.ac(21,"label",13),Z.Cc(22),Z.mc(23,"translate"),Z.Zb(),Z.ac(24,"textarea",14),Z.mc(25,"translate"),Z.Cc(26,"                    "),Z.Zb(),Z.Bc(27,fe,3,3,"span",12),Z.Bc(28,he,2,0,"span",12),Z.Zb(),Z.ac(29,"div",8),Z.ac(30,"label",15),Z.Cc(31),Z.mc(32,"translate"),Z.Zb(),Z.ac(33,"div",16),Z.ac(34,"div",17),Z.ac(35,"input",18,19),Z.ic("change",(function(){Z.wc(n);var e=Z.uc(36);return t.updateName(e)})),Z.Zb(),Z.ac(37,"label",20),Z.Cc(38),Z.mc(39,"translate"),Z.Zb(),Z.Zb(),Z.ac(40,"div",21),Z.ac(41,"button",22),Z.ic("click",(function(){Z.wc(n);var e=Z.uc(36);return t.processFile(e)})),Z.Cc(42),Z.mc(43,"translate"),Z.Zb(),Z.Zb(),Z.Zb(),Z.Zb(),Z.Zb(),Z.ac(44,"div",23),Z.ac(45,"button",24),Z.Cc(46),Z.mc(47,"translate"),Z.Zb(),Z.Zb(),Z.Zb(),Z.Zb(),Z.Zb()}2&e&&(Z.Jb(3),Z.Dc(Z.nc(4,19,"update-region-page")),Z.Jb(5),Z.Dc(Z.nc(9,21,"update-region")),Z.Jb(2),Z.pc("formGroup",t.editRegionForm),Z.Jb(4),Z.Dc(Z.nc(15,23,"name")),Z.Jb(2),Z.qc("placeholder",Z.nc(17,25,"name-type-placeholder")),Z.pc("ngClass",Z.sc(39,Re,t.editRegionForm.get("name").errors&&(t.editRegionForm.get("name").touched||t.editRegionForm.get("name").dirty))),Z.Jb(2),Z.pc("ngIf",t.showSearchResult),Z.Jb(1),Z.pc("ngIf",null==t.editRegionForm.get("name").errors?null:t.editRegionForm.get("name").errors.required),Z.Jb(3),Z.Dc(Z.nc(23,27,"description")),Z.Jb(2),Z.qc("placeholder",Z.nc(25,29,"description-type-placeholder")),Z.pc("ngClass",Z.sc(41,Re,t.editRegionForm.get("description").errors&&(t.editRegionForm.get("description").touched||t.editRegionForm.get("description").dirty))),Z.Jb(3),Z.pc("ngIf",null==t.editRegionForm.get("description").errors?null:t.editRegionForm.get("description").errors.required),Z.Jb(1),Z.pc("ngIf",null==t.editRegionForm.get("description").errors?null:t.editRegionForm.get("description").errors.minlength),Z.Jb(3),Z.Dc(Z.nc(32,31,"upload")),Z.Jb(7),Z.Dc(Z.nc(39,33,t.imageName)),Z.Jb(3),Z.pc("disabled",!t.fileSelected),Z.Jb(1),Z.Ec(" ",Z.nc(43,35,t.uploadButtonValue)," "),Z.Jb(3),Z.pc("disabled",t.editRegionForm.invalid||t.imageUploaded),Z.Jb(1),Z.Dc(Z.nc(47,37,"update")))},directives:[c.q,c.h,c.e,c.a,c.g,c.c,r.l,r.n,r.m],pipes:[U.c],styles:['.location-search-result[_ngcontent-%COMP%]{border:1px solid #ddd;border-radius:5px}.location-search-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer}.location-search-result[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{transition:all .5s ease;background:rgba(54,72,94,.92);color:#fff;border-radius:5px;padding-left:10px}.location-search-result[_ngcontent-%COMP%]   .lds-ring[_ngcontent-%COMP%]{display:block;position:inherit;width:64px;height:64px;margin-left:auto;margin-right:auto}.card-footer[_ngcontent-%COMP%]   .btn.bg-sidebar-item-button[_ngcontent-%COMP%]:hover{background:rgba(54,72,94,.8)}.input-group-ar[_ngcontent-%COMP%]{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group-ar[_ngcontent-%COMP%] > .custom-file[_ngcontent-%COMP%]{position:relative;flex:1 1 auto;width:1%;margin-bottom:0}.input-group-ar[_ngcontent-%COMP%] > .custom-file[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%]{width:100%;min-width:14rem;max-width:100%;height:calc(2.25rem + 2px);margin:0;opacity:0}.input-group-ar[_ngcontent-%COMP%] > .custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%]{position:absolute;top:0;right:0;left:0;z-index:1;height:calc(2.25rem + 2px);padding:.375rem .75rem;line-height:1.5;color:#495057;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem}.input-group-ar[_ngcontent-%COMP%] > .custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;bottom:0;z-index:3;display:block;height:2.25rem;padding:.375rem .75rem;line-height:1.5;color:#495057;content:"Browse";background-color:#e9ecef;border-left:1px solid #ced4da;border-radius:.25rem 0 0 .25rem}']}),ve)}],Pe=((Ce=function e(){_classCallCheck(this,e)}).\u0275mod=Z.Tb({type:Ce}),Ce.\u0275inj=Z.Sb({factory:function(e){return new(e||Ce)},imports:[[i.g.forChild(we)],i.g]}),Ce),ke=n("9jGm"),je=n("5+tZ"),_e=n("lJxs"),Ie=n("JIr8"),Me=n("XqQ8"),Ze=((Oe=function e(t,n,o,i,r,c){var a=this;_classCallCheck(this,e),this.actions$=t,this.store=n,this.toaster=o,this.router=i,this.activatedRoute=r,this.regionService=c,this.loadRegions$=Object(ke.c)((function(){return a.actions$.pipe(Object(ke.d)(s),Object(je.a)((function(){return a.regionService.getAllRegions().pipe(Object(_e.a)((function(e){return u(e)})),Object(Ie.a)((function(e){return console.log("error effect: ",e),e.error.error?a.toaster.error(e.error.error):e.error.msg&&a.toaster.error(e.error.msg),Object(ue.a)(d(e))})))})))})),this.loadRegion$=Object(ke.c)((function(){return a.actions$.pipe(Object(ke.d)(g),Object(je.a)((function(e){return a.regionService.getRegion(e.id).pipe(Object(_e.a)((function(e){return p({region:e.Data})})),Object(Ie.a)((function(e){return console.log("error effect",e),Object(ue.a)(b({error:e}))})))})))})),this.addRegion$=Object(ke.c)((function(){return a.actions$.pipe(Object(ke.d)(v),Object(Me.a)((function(e){return a.regionService.createRegion(e.region).pipe(Object(_e.a)((function(e){return a.toaster.success(null==e?void 0:e.msg),C()})),Object(Ie.a)((function(e){return console.log("error create effect",e),Object(ue.a)(O({error:e}))})))})))})),this.updateRegion$=Object(ke.c)((function(){return a.actions$.pipe(Object(ke.d)(w),Object(F.a)((function(e){return a.regionService.updateRegion(e.region).pipe(Object(_e.a)((function(t){a.toaster.success(t.msg);var n={id:e.region.id,changes:Object.assign({},e.region)};return P({region:n})})),Object(Ie.a)((function(e){return Object(ue.a)(k({error:e}))})))})))})),this.redirectAddUpdateRegion$=Object(ke.c)((function(){return a.actions$.pipe(Object(ke.d)(C,P),Object(_e.a)((function(){a.router.navigate(["regions"])})))}),{dispatch:!1}),this.deleteRegion$=Object(ke.c)((function(){return a.actions$.pipe(Object(ke.d)(m),Object(Me.a)((function(e){return a.regionService.deleteRegion(e.id).pipe(Object(_e.a)((function(e){return console.log(e),a.toaster.success("Region Successfully Deleted"),f()})),Object(Ie.a)((function(e){return console.log("effect delete error",e),Object(ue.a)(h({error:e}))})))})))}))}).\u0275fac=function(e){return new(e||Oe)(Z.ec(ke.a),Z.ec(l.h),Z.ec(S.b),Z.ec(i.d),Z.ec(i.a),Z.ec(B))},Oe.\u0275prov=Z.Rb({token:Oe,factory:Oe.\u0275fac}),Oe),Se=n("vTDv"),xe=((ye=function e(){_classCallCheck(this,e)}).\u0275mod=Z.Tb({type:ye}),ye.\u0275inj=Z.Sb({factory:function(e){return new(e||ye)},imports:[[Se.a,Pe,l.j.forFeature("regions",Q),ke.b.forFeature([Ze])]]}),ye)}}]);