webpackJsonp([0,3],{215:function(t,e,n){"use strict";var o=n(0),i=n(78);n.d(e,"a",function(){return l});var a=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(s=(a<3?i(s):a>3?i(e,n,s):i(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t){this.bookservice=t,console.log("In book ts"),this.booksData(),this.count=0}return t.prototype.ngAfterViewInit=function(){console.log("In view"),componentHandler.upgradeDom()},t.prototype.getBooked=function(t,e){var n=this;console.log("call the book api in nodejs"),console.log(t.toString()),console.log(typeof e),this.data=new r(t.toString(),e),this.bookservice.getBooked(this.data).subscribe(function(t){console.log(t),n.booksData()})},t.prototype.booksData=function(){var t=this;this.bookservice.getData().subscribe(function(e){t.books=e,t.books=JSON.parse(t.books.slice(8,t.books.length-1)),console.log(t.books[0])})},t.prototype.removeBooks=function(t,e){var n=this;this.data=new r(t.toString(),e),this.bookservice.removeBooks(this.data).subscribe(function(t){console.log(t),n.booksData()})},t=a([n.i(o.G)({selector:"all-books",template:n(666),providers:[i.a],styles:[n(663)]}),s("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.a&&i.a)&&e||Object])],t);var e}(),r=function(){function t(t,e){this.bookName=t,this.copies=e}return t}();(function(){function t(t){this.c_no=t}return t})()},330:function(t,e,n){"use strict";var o=n(0),i=n(78),a=n(211);n.d(e,"a",function(){return r});var s=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(s=(a<3?i(s):a>3?i(e,n,s):i(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(t,e){this.book=t,console.log(e.url),this.data=new c("","",0,0,"",0)}return t.prototype.insert=function(){var t=this;console.log("In add book insert"),0!=this.data.copies?this.book.eachCategoryBooks().subscribe(function(e){if(console.log(e),console.log(e),"error"!=e.json().data){t.display=e.json().data;for(var n=0;n<Object.keys(t.display).length;++n)t.data.category==t.display[n].cat_names&&(t.present="ok"),console.log(t.data.category,t.display[n].cat_name);"ok"==t.present?(t.data.cat_no=e.json().data[0].cat_no,t.book.insertBook(t.data).subscribe(function(e){console.log(e),"error"==e.json().data?t.present="Book Exists":t.present="",t.data.cat_no=0})):t.present="Category not present"}}):this.present="Copies cannot be zero"},t=s([n.i(o.G)({selector:"books",template:n(665),styles:[n(370)]}),l("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.a&&i.a)&&e||Object,"function"==typeof(r="undefined"!=typeof a.a&&a.a)&&r||Object])],t);var e,r}(),c=function(){function t(t,e,n,o,i,a){this.bookName=t,this.desc=e,this.price=n,this.copies=o,this.category=i,this.cat_no=a}return t}()},331:function(t,e,n){"use strict";var o=n(0),i=n(78),a=n(211);n.d(e,"a",function(){return r});var s=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(s=(a<3?i(s):a>3?i(e,n,s):i(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(t,e){var n=this;this.book=t,this.route=e,console.log("In category const."),console.log(typeof e.url),this.data=new c("",0),this.gotbook=0,"/each/books"!=this.route.url&&"/add/category"!=this.route.url&&"/del/category"!=this.route.url||(this.present="",this.bookPrice="",this.book.eachCategoryBooks().subscribe(function(t){console.log(t.json().data),n.display=t.json().data,console.log(n.display[0].cat_names),console.log(Object.keys(n.display).length)}))}return t.prototype.operate=function(){switch(this.route.url){case"/add/category":this.insert();break;case"/del/category":this.remove();break;case"/get/books/price":this.price();break;case"/mod/books/price":this.modPrice();break;case"/each/books":this.categorybooks()}},t.prototype.insert=function(){for(var t=this,e=0;e<Object.keys(this.display).length;++e)this.data.cat_name==this.display[e].cat_names&&(this.present="Already Present");"Already Present"!=this.present&&(console.log("yes"),this.book.insertCategory(this.data).subscribe(function(e){"error"==e.json().data&&(t.present="could not")}))},t.prototype.remove=function(){for(var t=this,e=0;e<Object.keys(this.display).length;++e)this.data.cat_name==this.display[e].cat_names&&(this.present="ok");"ok"==this.present?this.book.removeCategory(this.data).subscribe(function(e){"error"==e.json().data&&(t.present="could not")}):this.present="Category not present"},t.prototype.price=function(){var t=this;this.display="",this.book.getPrice(this.data).subscribe(function(e){console.log(e),""!=e.json().data?(t.bookPrice=e.json().data[0].price,t.present=""):(t.present="Book not present",t.bookPrice="")})},t.prototype.modPrice=function(){var t=this;this.display="",this.book.modifyPrice(this.data).subscribe(function(e){console.log(e),"error"==e.json().data?t.present="Book not present":t.present=""})},t.prototype.categorybooks=function(){var t=this;console.log(typeof this.display[0].cat_name);for(var e=0;e<Object.keys(this.display).length;++e)this.data.cat_name==this.display[e].cat_names&&(this.present="ok");console.log(this.present),"ok"==this.present?(console.log("yes"),this.book.getCategory(this.data).subscribe(function(e){console.log(e.json().data[0]),t.value=new d(""),t.value.c_no=e.json().data[0].cat_no,t.book.categoryBooks(t.value).subscribe(function(e){t.booksincat=e.json().data,t.gotbook=1})})):this.present="Category not present"},t=s([n.i(o.G)({selector:"category",template:n(667),styles:[n(370)]}),l("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.a&&i.a)&&e||Object,"function"==typeof(r="undefined"!=typeof a.a&&a.a)&&r||Object])],t);var e,r}(),c=function(){function t(t,e){this.cat_name=t,this.newPrice=e}return t}(),d=function(){function t(t){this.c_no=t}return t}()},332:function(t,e,n){"use strict";var o=n(0),i=n(78),a=n(215);n.d(e,"a",function(){return r});var s=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(s=(a<3?i(s):a>3?i(e,n,s):i(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(t,e){var n=this;this.books=t,this.book=e,this.names=new c(""),this.books.getCategories().subscribe(function(t){n.categories=t,n.categories=JSON.parse(n.categories.slice(8,n.categories.length-1))})}return t.prototype.getEachCategory=function(t){this.names.category=t},t=s([n.i(o.G)({selector:"full-app",template:n(669),providers:[i.a,a.a]}),l("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.a&&i.a)&&e||Object,"function"==typeof(r="undefined"!=typeof a.a&&a.a)&&r||Object])],t);var e,r}(),c=function(){function t(t){this.category=t}return t}()},370:function(t,e){t.exports=".mdl-layout{\n\t-webkit-box-align:center;\n\t    -ms-flex-align:center;\n\t        align-items:center;\n  -webkit-box-pack:center;\n      -ms-flex-pack:center;\n          justify-content:center;\n}\n.mdl-layout__content{\n\tpadding:24px;\n\t-webkit-box-flex:0;\n\t    -ms-flex:none;\n\t        flex:none;\n}"},386:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=386},387:function(t,e,n){"use strict";var o=n(509),i=(n.n(o),n(475)),a=n(0),s=n(508),l=n(505);s.a.production&&n.i(a._40)(),n.i(i.a)().bootstrapModule(l.a)},504:function(t,e,n){"use strict";var o=n(0);n.d(e,"a",function(){return s});var i=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(s=(a<3?i(s):a>3?i(e,n,s):i(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(){}return t=i([n.i(o.G)({selector:"app-root",template:"\n  \t<router-outlet>\n  \t</router-outlet>\n  ",styles:[n(662)]}),a("design:paramtypes",[])],t)}()},505:function(t,e,n){"use strict";var o=n(148),i=n(0),a=n(466),s=n(307),l=n(504),r=n(332),c=n(507),d=n(215),p=n(331),f=n(330),u=n(78),m=n(506);n.d(e,"a",function(){return g});var h=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(s=(a<3?i(s):a>3?i(e,n,s):i(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s},b=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},g=function(){function t(){}return t=h([n.i(i.I)({declarations:[l.a,c.a,r.a,d.a,p.a,f.a],imports:[o.b,a.a,s.c,m.a],providers:[u.a],bootstrap:[l.a]}),b("design:paramtypes",[])],t)}()},506:function(t,e,n){"use strict";var o=n(211),i=n(332),a=n(331),s=n(330);n.d(e,"a",function(){return r});var l=[{path:"",component:i.a},{path:"add/category",component:a.a},{path:"add/books",component:s.a},{path:"del/category",component:a.a},{path:"mod/books/price",component:a.a},{path:"get/books/price",component:a.a},{path:"each/books",component:a.a}],r=o.b.forRoot(l)},507:function(t,e,n){"use strict";var o=n(0),i=n(215),a=n(78);n.d(e,"a",function(){return r});var s=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(s=(a<3?i(s):a>3?i(e,n,s):i(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(t,e){var n=this;this.book=t,this.books=e,this.names=new c(""),this.books.getCategories().subscribe(function(t){n.categories=t,n.categories=JSON.parse(n.categories.slice(8,n.categories.length-1))})}return t.prototype.getEachCategory=function(t){this.names.category=t},t=s([n.i(o.G)({selector:"left-component",template:n(668),styles:[n(664)]}),l("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.a&&i.a)&&e||Object,"function"==typeof(r="undefined"!=typeof a.a&&a.a)&&r||Object])],t);var e,r}(),c=function(){function t(t){this.category=t}return t}()},508:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={production:!0}},509:function(t,e,n){"use strict";var o=n(523),i=(n.n(o),n(516)),a=(n.n(i),n(512)),s=(n.n(a),n(518)),l=(n.n(s),n(517)),r=(n.n(l),n(515)),c=(n.n(r),n(514)),d=(n.n(c),n(522)),p=(n.n(d),n(511)),f=(n.n(p),n(510)),u=(n.n(f),n(520)),m=(n.n(u),n(513)),h=(n.n(m),n(521)),b=(n.n(h),n(519)),g=(n.n(b),n(524)),y=(n.n(g),n(686));n.n(y)},662:function(t,e){t.exports="\n"},663:function(t,e){t.exports=".demo-card-square.mdl-card{\n  width:320px;\n  height:320px;\n  position:relative;\n}\n.demo-card-square > .mdl-card__title{\n  color:#fff;\n  background-color:#42a5f5;\n  width:500px;\n  height:100px;\n}\n\n:host{\n\tdisplay:block;  \n\twidth:800px;\n\tposition:absolute;\n\tmargin-left:250px;\n\tmargin-top:90px;\n}\n\n.mdl-grid{\n\twidth:1200px;\n}"},664:function(t,e){t.exports=":host{\n\tdisplay:inline-block;  \n\twidth:200px;\n\theigth:2000px;\n}\n\nmain{\n\twidth:200px;\n}\n\ndiv.mdl-grid{\n\tmax-width:200px;\n\theight:1500px;\n\tmargin-left:0px;\n\tbackground-color:#424242;\n\tposition:relative;\n\tmargin-top:0px; \n}\n\ndiv.mdl-grid ul{\n\tmargin-left:2px;\n\tmargin:auto;\n\tdisplay:block;\n\tmargin-top:10px;\n}\n\ndiv.mdl-grid ul li{\n\tcolor:white;\n\tmargin-top:20px;\n\tposition:relative;\n\tlist-style:none;\n\tfont-size:15px;\n\tleft:2px;\n}\n.demo-list-item{\n  width:300px;\n}\ndiv.mdl-grid ul hr{\n\tbackground-color:red;\n\tmargin-top:10px;\n\tmargin-left:0px;\n\twidth:150px;\n\tposition:relative;\n}\n\n#demo-menu-lower-right{\nmargin-left:100px;\n}\n\nli.mdl-list__item ul.mdl-menu mdl-menu--bottom-right li.mdl-menu__item{\n\tbackground-color:black;\n}"},665:function(t,e){t.exports='<div class="mdl-layout mdl-js-layout mdl-color--grey-100">\n\t<main class="mdl-layout__content">\n\t\t<div class="mdl-card mdl-shadow--6dp">\n\t\t\t<div class="mdl-card__title mdl-color--primary mdl-color-text--white">\n\t\t\t\t<h2 class="mdl-card__title-text">Books</h2>\n\t\t\t</div>\n\t  \t<div class="mdl-card__supporting-text">\n\t\t\t\t<form (ngSubmit) = "insert()" #categoryform = "ngForm">\n  \t\t\t\t\t<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">\n    \t\t\t\t\t\t<input class="mdl-textfield__input" type="text" id="sample3" [(ngModel)]="data.bookName" name="first" required>\n    \t\t\t\t\t\t<label class="mdl-textfield__label" for="sample3">Name</label>\n  \t\t\t\t\t</div>\n\n  \t\t\t\t\t<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">\n    \t\t\t\t\t\t<input class="mdl-textfield__input" type="text" id="sample3" [(ngModel)]="data.desc" name="second" required>\n    \t\t\t\t\t\t<label class="mdl-textfield__label" for="sample3">Description</label>\n  \t\t\t\t\t</div>\n\n  \t\t\t\t\t<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">\n    \t\t\t\t\t\t<input class="mdl-textfield__input" type="text" id="sample3" [(ngModel)]="data.price" name="third" required>\n    \t\t\t\t\t\t<label class="mdl-textfield__label" for="sample3">Price</label>\n  \t\t\t\t\t</div>\n\n  \t\t\t\t\t<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">\n    \t\t\t\t\t\t<input class="mdl-textfield__input" type="text" id="sample3" [(ngModel)]="data.copies" name="fourth" required>\n    \t\t\t\t\t\t<label class="mdl-textfield__label" for="sample3">Copies</label>\n  \t\t\t\t\t</div>\n\n  \t\t\t\t\t<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">\n    \t\t\t\t\t\t<input class="mdl-textfield__input" type="text" id="sample3" [(ngModel)]="data.category" name="fifth" required>\n    \t\t\t\t\t\t<label class="mdl-textfield__label" for="sample3">Category</label>\n  \t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t<div class="mdl-card__actions mdl-card--border">\n\t\t\t\t\t\t<button type="submit" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">ADD</button>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t<p>{{present}}</p>\n\t\t\t\t\n\t\t</div>\n\t\t\t\n\t\t</div>\n\t</main>\n</div>'},666:function(t,e){t.exports='\n<div>\n<div class="mdl-grid">\n<div  *ngFor="let book of books" >\n<div class="mdl-cell mdl-cell--4-col">\n<div class="demo-card-square mdl-card mdl-shadow--2dp"  >\n  <div class="mdl-card__title mdl-card--expand">\n  <!-- GIVE THE BOOK TITLE-->\n    <h2 class="mdl-card__title-text">{{book.name}}</h2>\n  </div>\n  <!-- Give price,#copies,etc..-->\n  <div class="mdl-card__supporting-text">\n    Description:{{book.description}}, Price:{{book.price}}, copies:{{book.copies}}\n  </div>\n  <div class="mdl-card__actions mdl-card--border" *ngIf="book.copies > 1">\n    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" (click)=\'getBooked(book.name,book.copies)\' >\n      BOOK NOW\n    </a>\n  </div>\n\n  <div class="mdl-card__actions mdl-card--border" *ngIf="book.copies <= 1">\n    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" (click)=\'removeBooks(book.name,book.copies)\' >\n      BOOK NOW\n    </a>\n  </div>\n\n  \n</div>\n\n\n</div>\n<br>\n</div>\n\n\n\n</div>\n\n\n\n\n</div>\n'},667:function(t,e){t.exports='<div class="mdl-layout mdl-js-layout mdl-color--grey-100">\n\t<main class="mdl-layout__content">\n\t\t<div class="mdl-card mdl-shadow--6dp">\n\t\t\t<div class="mdl-card__title mdl-color--primary mdl-color-text--white">\n\t\t\t\t<h2 class="mdl-card__title-text">{{route.url.slice(5)}}</h2>\n\t\t\t</div>\n\t  \t<div class="mdl-card__supporting-text">\n\t\t\t\t<form (ngSubmit) = "operate()" #categoryform = "ngForm">\n  \t\t\t\t\t<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">\n    \t\t\t\t\t\t<input class="mdl-textfield__input" type="text" id="sample3" [(ngModel)]="data.cat_name" name="first" required>\n    \t\t\t\t\t\t<label class="mdl-textfield__label" for="sample3">Name</label>\n  \t\t\t\t\t</div>\n\n  \t\t\t\t\t<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" *ngIf="route.url == \'/mod/books/price\'">\n    \t\t\t\t\t\t<input class="mdl-textfield__input" type="text" id="sample3" [(ngModel)]="data.newPrice" name="first" required>\n    \t\t\t\t\t\t<label class="mdl-textfield__label" for="sample3">New Price</label>\n  \t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\t<div class="mdl-card__actions mdl-card--border">\n\t\t\t\t\t\t<button type="submit" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">DONE</button>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t<p>{{bookPrice}}</p>\n\t\t\t\t<p *ngIf="present!=\'ok\'">{{present}}</p>\n\t\t\t\t<!--<span *ngIf="route.url==\'/each/books\'">Categories:</span>-->\n\t\t\t\t<span *ngFor="let disp of display">{{disp.cat_names}} ; </span>\n\t\t\t\t<br/>\n\t\t\t\t<span *ngFor="let book of booksincat"> {{book.name}} ; </span>\n\t\t</div>\n\t\t\t\n\t\t</div>\n\t</main>\n</div>'},668:function(t,e){t.exports='<main class="mdl-layout__content">\n    <div class="page-content">\n    <!-- Your content goes here -->\n    \t<div class="mdl-grid">\n    \t\t<ul class="demo-list-item mdl-list">\n  \t\t\t\t<li class="mdl-list__item">\n    \t\t\t\t<span class="mdl-list__item-primary-content">\n    \t\t\t\t\t<label class="mdl-button mdl-js-button mdl-button--icon">\n    \t\t\t\t\t\t<i class="material-icons" [routerLink]="[\'/add/category\']">group</i>\n    \t\t\t\t\t</label>\n      \t\t\t\t\t\t\tAdd category\n    \t\t\t\t</span>\n  \t\t\t\t</li>\n  \t\t\t\t<li class="mdl-list__item">\n    \t\t\t\t<span class="mdl-list__item-primary-content">\n    \t\t\t\t\t<label class="mdl-button mdl-js-button mdl-button--icon">\n    \t\t\t\t\t\t<i class="material-icons" [routerLink]="[\'/add/books\']">grade</i>\n    \t\t\t\t\t</label>\n      \t\t\t\t\t\t\tAdd Books\n    \t\t\t\t</span>\n  \t\t\t\t</li>\n  \t\t\t\t<li class="mdl-list__item">\n    \t\t\t\t<span class="mdl-list__item-primary-content">\n    \t\t\t\t\t<label class="mdl-button mdl-js-button mdl-button--icon">\n    \t\t\t\t\t\t<i class="material-icons" [routerLink]="[\'/del/category\']">restore</i>\n    \t\t\t\t\t</label>\n      \t\t\t\t\t\t\tDelete Category\n    \t\t\t\t</span>\n  \t\t\t\t</li>\n  \t\t\t\t<li class="mdl-list__item">\n    \t\t\t\t<span class="mdl-list__item-primary-content">\n    \t\t\t\t\t<label class="mdl-button mdl-js-button mdl-button--icon">\n    \t\t\t\t\t\t<i class="material-icons" [routerLink]="[\'/get/books/price\']">update</i>\n    \t\t\t\t\t</label>\n      \t\t\t\t\t\t\tGet Price\n    \t\t\t\t</span>\n  \t\t\t\t</li>\n  \t\t\t\t<li class="mdl-list__item">\n    \t\t\t\t<span class="mdl-list__item-primary-content">\n    \t\t\t\t\t<label class="mdl-button mdl-js-button mdl-button--icon">\n    \t\t\t\t\t\t<i class="material-icons" [routerLink]="[\'/mod/books/price\']">trending_up</i>\n    \t\t\t\t\t</label>\n      \t\t\t\t\t\t\tModify Price\n    \t\t\t\t</span>\n  \t\t\t\t</li>\n\n          <li class="mdl-list__item">\n            <!-- Right aligned menu below button -->\n      <!--<button id="demo-menu-lower-right"\n        class="mdl-button mdl-js-button mdl-button--icon">\n        <i class="material-icons">more_vert</i>\n      </button>\n\n      <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"\n        for="demo-menu-lower-right">\n      <li class="mdl-menu__item" *ngFor="let category of categories" (click) = "getEachCategory(category.cat_names)">{{category.cat_names}}</li>\n      </ul>-->\n          <span class="mdl-list__item-primary-content">\n              <label class="mdl-button mdl-js-button mdl-button--icon">\n                <i class="material-icons" [routerLink]="[\'each/books\']">restore</i>\n              </label>\n                    Get Each Category Books\n            </span>\n          </li>\n\n  \t\t\t\t<hr>\n\t\t\t</ul>\n\t\t\t\n  \t\t</div>\n    </div>\n  </main>'},669:function(t,e){t.exports='<!-- Always shows a header, even in smaller screens. -->\n<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">\n  <header class="mdl-layout__header">\n    <div class="mdl-layout__header-row">\n      <!-- Title -->\n      <span class="mdl-layout-title">Book Cart</span>\n      <!-- Add a spacer to align elements to the right-->\n      <div class="mdl-layout-spacer"></div>\n      <!-- Add a search box -->\n      <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable\n                  mdl-textfield--floating-label mdl-textfield--align-right">\n        <label class="mdl-button mdl-js-button mdl-button--icon"\n               for="fixed-header-drawer-exp">\n          <i class="material-icons">search</i>\n        </label>\n        <div class="mdl-textfield__expandable-holder">\n          <input class="mdl-textfield__input" type="text" name="sample"\n                 id="fixed-header-drawer-exp">\n        </div>\n      </div>\n      \n    </div>\n  </header>\n  <div class="mdl-layout__drawer">\n    <span class="mdl-layout-title">For You&nbsp;<i class="material-icons">favorite_border</i></span>\n    <nav class="mdl-navigation">\n      <a class="mdl-navigation__link" href="">Your Profile</a>\n      <a class="mdl-navigation__link" href="">Settings</a>\n      <a class="mdl-navigation__link" href="">About Us</a>\n      <a class="mdl-navigation__link" href="">LogOut</a>\n    </nav>\n  </div>\n  \n  <left-component> </left-component>\n  <all-books> </all-books>\n\n</div>\n'},687:function(t,e,n){t.exports=n(387)},78:function(t,e,n){"use strict";var o=n(0),i=n(307),a=n(673);n.n(a);n.d(e,"a",function(){return r});var s=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(i=t[l])&&(s=(a<3?i(s):a>3?i(e,n,s):i(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(t){this.http=t,console.log("book-service-const"),this.headers=new i.a,this.headers.append("Content-type","application/json")}return t.prototype.getData=function(){return this.http.get("http://localhost:3000/get/books").map(function(t){return t.text()})},t.prototype.getCategories=function(){return this.http.get("http://localhost:3000/get/categories").map(function(t){return t.text()})},t.prototype.insertCategory=function(t){return console.log(JSON.parse(JSON.stringify(t))),this.http.post("http://localhost:3000/add/category",JSON.parse(JSON.stringify(t)),this.headers)},t.prototype.removeCategory=function(t){return console.log(JSON.parse(JSON.stringify(t))),this.http.post("http://localhost:3000/del/category",JSON.parse(JSON.stringify(t)),this.headers)},t.prototype.insertBook=function(t){return console.log(typeof JSON.parse(JSON.stringify(t))),this.http.post("http://localhost:3000/add/books",JSON.parse(JSON.stringify(t)),this.headers)},t.prototype.getCategory=function(t){return console.log(JSON.parse(JSON.stringify(t))),this.http.post("http://localhost:3000/get/category",JSON.parse(JSON.stringify(t)),this.headers)},t.prototype.getBooked=function(t){return console.log(JSON.parse(JSON.stringify(t))),this.http.put("http://localhost:3000/get/books/copies",JSON.parse(JSON.stringify(t)),this.headers)},t.prototype.removeBooks=function(t){return console.log(JSON.parse(JSON.stringify(t))),this.http.post("http://localhost:3000/remove/books",JSON.parse(JSON.stringify(t)),this.headers)},t.prototype.getPrice=function(t){return console.log(JSON.parse(JSON.stringify(t))),this.http.post("http://localhost:3000/get/books/price",JSON.parse(JSON.stringify(t)),this.headers)},t.prototype.modifyPrice=function(t){return console.log(JSON.parse(JSON.stringify(t))),this.http.put("http://localhost:3000/modify/books/price",JSON.parse(JSON.stringify(t)),this.headers)},t.prototype.categoryBooks=function(t){return console.log(JSON.parse(JSON.stringify(t))),this.http.post("http://localhost:3000/get/category/books",t,this.headers)},t.prototype.eachCategoryBooks=function(){return console.log("hey"),this.http.post("http://localhost:3000/eachCategory/books","{'a':'b'}",this.headers)},t=s([n.i(o.R)(),l("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.b&&i.b)&&e||Object])],t);var e}()}},[687]);
//# sourceMappingURL=main.8ce26971ea211b595bdb.bundle.map