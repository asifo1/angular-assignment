(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{cRhG:function(e,t,i){"use strict";i.r(t),i.d(t,"ProfileModule",function(){return F});var r=i("ofXK"),n=i("tyNb"),s=function(e){return e[e.asc=0]="asc",e[e.desc=1]="desc",e[e.normal=2]="normal",e}({}),o=i("fXoL"),a=i("tk/3");let l=(()=>{class e{constructor(e){this.http=e}getAllProfiles(){return this.http.get("api/profiles")}getProfile(e){return this.http.get("api/profiles/"+e)}getUser(e){return this.http.get("api/users/"+e)}getAllUsers(){return this.http.get("api/users")}updateProfile(e){return this.http.put("api/profiles",e).subscribe()}onDelete(e){this.http.delete("api/users/"+e).subscribe(t=>{this.http.delete("api/profiles/"+e)})}}return e.\u0275fac=function(t){return new(t||e)(o.Sb(a.c))},e.\u0275prov=o.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var b=i("3Pt+");function d(e,t){if(1&e){const e=o.Pb();o.Ob(0,"div",1),o.Ob(1,"div",2),o.Ob(2,"div",3),o.Ob(3,"span"),o.kc(4,"Edit Profile"),o.Nb(),o.Ob(5,"div",4),o.Ob(6,"i",5),o.Vb("click",function(){return o.gc(e),o.Xb().onSubmit()}),o.Nb(),o.Ob(7,"i",6),o.Vb("click",function(){return o.gc(e),o.Xb().closeModal()}),o.Nb(),o.Nb(),o.Nb(),o.Ob(8,"div",7),o.Ob(9,"form",8),o.Vb("ngSubmit",function(){return o.gc(e),o.Xb().onSubmit()}),o.Ob(10,"div",9),o.Ob(11,"div"),o.Ob(12,"div",10),o.Ob(13,"div",11),o.Ob(14,"div",12),o.Ob(15,"label",13),o.kc(16,"First Name"),o.Nb(),o.Kb(17,"input",14),o.Ob(18,"div",15),o.kc(19," First name is required. "),o.Nb(),o.Nb(),o.Nb(),o.Ob(20,"div",11),o.Ob(21,"div",12),o.Ob(22,"label",16),o.kc(23,"Last Name"),o.Nb(),o.Kb(24,"input",17),o.Ob(25,"div",15),o.kc(26," Last name is required. "),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(27,"div",10),o.Ob(28,"div",11),o.Ob(29,"div",12),o.Ob(30,"label",18),o.kc(31,"Address"),o.Nb(),o.Kb(32,"input",19),o.Nb(),o.Nb(),o.Ob(33,"div",11),o.Ob(34,"div",12),o.Ob(35,"label",20),o.kc(36,"Phone"),o.Nb(),o.Kb(37,"input",21),o.Nb(),o.Nb(),o.Nb(),o.Ob(38,"div",10),o.Ob(39,"div",11),o.Ob(40,"div",12),o.Ob(41,"label",22),o.kc(42,"Date of Birth"),o.Nb(),o.Kb(43,"input",23),o.Nb(),o.Nb(),o.Ob(44,"div",11),o.Ob(45,"div",12),o.Ob(46,"label",24),o.kc(47,"Gender"),o.Nb(),o.Ob(48,"select",25),o.Ob(49,"option"),o.kc(50,"Male"),o.Nb(),o.Ob(51,"option"),o.kc(52,"Female"),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(53,"div",10),o.Ob(54,"div",26),o.Ob(55,"div",12),o.Ob(56,"label",27),o.kc(57,"Interest"),o.Nb(),o.Kb(58,"input",28),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb()}if(2&e){const e=o.Xb();o.zb(9),o.bc("formGroup",e.profileForm),o.zb(8),o.Bb("is-invalid",e.fname&&(e.fname.invalid&&e.fname.touched||e.is_submitted&&e.fname.invalid)),o.zb(7),o.Bb("is-invalid",e.lname&&(e.lname.invalid&&e.lname.touched||e.is_submitted&&e.lname.invalid)),o.zb(25),o.Ab("selected",!(!e.gender||"Male"!==e.gender.value)||null),o.zb(2),o.Ab("selected",!(!e.gender||"Female"!==e.gender.value)||null)}}let c=(()=>{class e{constructor(e,t){this.fb=e,this.service=t,this.modal=!1,this.userID=0,this.modalStateChange=new o.n,this.updatedUser=new o.n,this.is_submitted=!1,this.profileForm=this.fb.group({fname:[""],lname:[""],date_of_birth:[""],gender:[""],address:[""],phone:[""],interest:[""]})}ngOnChanges(e){!0===this.modal&&this.service.getProfile(this.userID).subscribe(e=>{const t=this.profileForm;t&&(t.get("fname").setValue(e.fname),t.get("lname").setValue(e.lname),t.get("address").setValue(e.address),t.get("phone").setValue(e.phone),t.get("date_of_birth").setValue(e.date_of_birth),t.get("gender").setValue(e.gender),t.get("interest").setValue(e.interest))})}closeModal(){this.modal=!1,this.modalStateChange.emit();const e=this.profileForm;e&&(e.get("fname").setValue(""),e.get("lname").setValue(""),e.get("address").setValue(""),e.get("phone").setValue(""),e.get("date_of_birth").setValue(""),e.get("gender").setValue(""),e.get("interest").setValue(""))}get fname(){return this.profileForm.get("fname")}get lname(){return this.profileForm.get("lname")}get gender(){return this.profileForm.get("gender")}onSubmit(){if(this.is_submitted=!0,!this.profileForm.invalid){let e=this.profileForm.value;e.id=this.userID,this.service.updateProfile(e),this.closeModal(),this.updatedUser.emit({id:e.id,fname:e.fname,lname:e.lname})}}}return e.\u0275fac=function(t){return new(t||e)(o.Jb(b.b),o.Jb(l))},e.\u0275cmp=o.Db({type:e,selectors:[["modal"]],inputs:{modal:["modal-state","modal"],userID:["user-ID","userID"]},outputs:{modalStateChange:"modalStateChange",updatedUser:"updatedUser"},features:[o.xb],decls:1,vars:1,consts:[["class","background",4,"ngIf"],[1,"background"],[1,"edit-modal"],[1,"header"],[1,"icons"],["aria-hidden","true",1,"fa","fa-floppy-o",3,"click"],["aria-hidden","true",1,"fa","fa-times-circle",3,"click"],[1,"body"],[3,"formGroup","ngSubmit"],[1,"d-flex","flex-column","align-items-center","mt-4"],[1,"row"],[1,"col","col-lg-6","col-12"],[1,"form-group"],["for","fname",1,"requiredField"],["type","text","formControlName","fname","id","fname",1,"form-control"],[1,"invalid-feedback"],["for","lname"],["type","text","formControlName","lname","id","lname",1,"form-control"],["for","address"],["type","text","formControlName","address","id","address",1,"form-control"],["for","phone"],["type","text","formControlName","phone","id","phone",1,"form-control"],["for","date_of_birth"],["type","date","formControlName","date_of_birth","id","date_of_birth",1,"form-control"],["for","gender"],["id","gender","formControlName","gender",1,"form-control"],[1,"col","col-12"],["for","interest"],["type","text","formControlName","interest","id","interest",1,"form-control"]],template:function(e,t){1&e&&o.jc(0,d,59,7,"div",0),2&e&&o.bc("ngIf",t.modal)},directives:[r.j,b.m,b.f,b.d,b.a,b.e,b.c,b.j,b.g,b.l],styles:[".background[_ngcontent-%COMP%]{position:fixed;top:0;left:0;background-color:rgba(0,0,0,.37);width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.edit-modal[_ngcontent-%COMP%]{width:500px;height:auto;background-color:#fff;box-shadow:2px 3px 10px rgba(0,0,0,.356);border-radius:8px;padding-bottom:5px;transform:translateY(-50px)}.header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:10px;border-radius:8px 8px 0 0;background-color:#212529;color:#fff}.icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-top:4.5px;margin-right:2.5px;cursor:pointer}.icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:first-child{margin-right:13px}@media only screen and (max-width:600px){.edit-modal[_ngcontent-%COMP%]{width:80%}.body[_ngcontent-%COMP%]{padding:0 1rem}}@media only screen and (max-width:992px){.edit-modal[_ngcontent-%COMP%]{transform:translateY(0)}}"]}),e})(),u=(()=>{class e{constructor(e,t){this.renderer=e,this.el=t}onMouseEnter(){this.el.nativeElement.style.color="black",this.el.nativeElement.style.transition="all 0.2s ease-out"}onMouseLeave(){this.el.nativeElement.style.color="#11111175"}}return e.\u0275fac=function(t){return new(t||e)(o.Jb(o.F),o.Jb(o.l))},e.\u0275dir=o.Eb({type:e,selectors:[["","tooltip",""]],hostBindings:function(e,t){1&e&&o.Vb("mouseenter",function(){return t.onMouseEnter()})("mouseleave",function(){return t.onMouseLeave()})},inputs:{tooltipTitle:"tooltipTitle"}}),e})();function f(e,t){if(1&e){const e=o.Pb();o.Mb(0),o.Ob(1,"tr"),o.Ob(2,"th",10),o.kc(3),o.Nb(),o.Ob(4,"td"),o.kc(5),o.Nb(),o.Ob(6,"td"),o.kc(7),o.Nb(),o.Ob(8,"td"),o.Ob(9,"div",11),o.Ob(10,"i",12),o.Vb("click",function(){o.gc(e);const i=t.$implicit;return o.Xb().onEdit(i.id)}),o.Nb(),o.Ob(11,"i",13),o.Vb("click",function(){o.gc(e);const i=t.$implicit;return o.Xb().onDelete(i.id)}),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Lb()}if(2&e){const e=t.$implicit;o.zb(3),o.lc(e.id),o.zb(2),o.lc(e.name),o.zb(2),o.lc(e.email),o.zb(3),o.dc("tooltipTitle","Edit ",e.name,""),o.zb(1),o.dc("tooltipTitle","Delete ",e.name,"")}}function m(e,t){1&e&&(o.Ob(0,"h4",14),o.kc(1,"No user"),o.Nb())}function h(e,t){if(1&e){const e=o.Pb();o.Ob(0,"div",15),o.Ob(1,"nav",16),o.Ob(2,"ul",17),o.Ob(3,"li",18),o.Ob(4,"a",19),o.Vb("click",function(){return o.gc(e),o.Xb().previousPage()}),o.kc(5,"Previous"),o.Nb(),o.Nb(),o.Ob(6,"li",18),o.Ob(7,"a",20),o.Vb("click",function(){return o.gc(e),o.Xb().nextPage()}),o.kc(8,"Next"),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb()}if(2&e){const e=o.Xb();o.zb(3),o.Bb("disabled",!e.has_previous),o.zb(3),o.Bb("disabled",!e.has_next)}}let p=(()=>{class e{constructor(e,t){this.route=e,this.service=t,this.users=[],this.allUsers=[],this.is_sorted=s.normal,this.last_index=0,this.has_next=!1,this.has_previous=!1,this.on_edit=!1,this.userID=0}ngOnInit(){for(let e=0;e<this.route.snapshot.data.allUserData.length;e++)this.route.snapshot.data.allUserData[e].is_admin||this.allUsers.push({id:this.route.snapshot.data.allUserData[e].id,name:`${this.route.snapshot.data.allProfileData[e].fname} ${this.route.snapshot.data.allProfileData[e].lname}`,email:this.route.snapshot.data.allUserData[e].email});this.setUserList(0)}sort(){this.is_sorted===s.normal?(this.allUsers.sort((e,t)=>e.name>t.name?1:-1),this.is_sorted=s.asc):this.is_sorted===s.asc?(this.allUsers.sort((e,t)=>e.name>t.name?-1:1),this.is_sorted=s.desc):(this.allUsers.sort((e,t)=>e.id>t.id?1:-1),this.is_sorted=s.normal),this.setUserList(0)}setUserList(e){this.users=[];let t=e+10,i=this.allUsers.length;this.has_next=i>t,this.has_previous=0!=e,i=i>t?t:i,this.users=this.allUsers.slice(e,t),this.last_index=t}nextPage(){this.setUserList(this.last_index)}previousPage(){this.setUserList(this.last_index-20)}onDelete(e){this.users=this.users.filter(t=>t.id!==e),this.allUsers=this.allUsers.filter(t=>t.id!==e),0===this.users.length&&this.setUserList(0),this.service.onDelete(e)}onEdit(e){this.userID=e,this.on_edit=!0}onClose(){this.on_edit=!1}onUserUpdate(e){this.users.forEach(t=>{t.id===e.id&&(t.name=`${e.fname} ${e.lname}`)})}}return e.\u0275fac=function(t){return new(t||e)(o.Jb(n.a),o.Jb(l))},e.\u0275cmp=o.Db({type:e,selectors:[["app-dashboard"]],decls:18,vars:5,consts:[[1,"mt-2","mb-2"],[1,"table"],[1,"thead-dark"],[1,"title"],["scope","col"],["aria-hidden","true",1,"fa","fa-sort","ml-2","pointer",3,"click"],[4,"ngFor","ngForOf"],["align","center",4,"ngIf"],["class","d-flex justify-content-end",4,"ngIf"],[3,"modal-state","user-ID","updatedUser","modalStateChange"],["scope","row"],[1,"d-flex","justify-content-center"],["tooltip","","aria-hidden","true",1,"fa","fa-pencil-square-o","mr-3","pointer","p-1","icon",3,"tooltipTitle","click"],["tooltip","","aria-hidden","true",1,"fa","fa-trash-o","ml-3","pointer","p-1","icon",3,"tooltipTitle","click"],["align","center"],[1,"d-flex","justify-content-end"],["aria-label","Page navigation example"],[1,"pagination","justify-content-end"],[1,"page-item"],["tabindex","-1",1,"page-link","pointer",3,"click"],[1,"page-link","pointer",3,"click"]],template:function(e,t){1&e&&(o.Ob(0,"h2",0),o.kc(1,"Dashboard"),o.Nb(),o.Ob(2,"table",1),o.Ob(3,"thead",2),o.Ob(4,"tr",3),o.Ob(5,"th",4),o.kc(6,"User ID"),o.Nb(),o.Ob(7,"th",4),o.kc(8,"Name "),o.Ob(9,"i",5),o.Vb("click",function(){return t.sort()}),o.Nb(),o.Nb(),o.Ob(10,"th",4),o.kc(11,"Email Address"),o.Nb(),o.Kb(12,"th",4),o.Nb(),o.Nb(),o.Ob(13,"tbody"),o.jc(14,f,12,5,"ng-container",6),o.Nb(),o.Nb(),o.jc(15,m,2,0,"h4",7),o.jc(16,h,9,4,"div",8),o.Ob(17,"modal",9),o.Vb("updatedUser",function(e){return t.onUserUpdate(e)})("modalStateChange",function(){return t.onClose()}),o.Nb()),2&e&&(o.zb(14),o.bc("ngForOf",t.users),o.zb(1),o.bc("ngIf",0===t.allUsers.length),o.zb(1),o.bc("ngIf",0!==t.allUsers.length),o.zb(1),o.bc("modal-state",t.on_edit)("user-ID",t.userID))},directives:[r.i,r.j,c,u],styles:[".pointer[_ngcontent-%COMP%]{cursor:pointer}.title[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none}.icon[_ngcontent-%COMP%]{color:rgba(17,17,17,.4588235294117647)}"]}),e})();var g=i("gaWP");let v=(()=>{class e{transform(e,t,i){return`${e[0]}${t[0]}#${i}`}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=o.Ib({name:"Initial",type:e,pure:!0}),e})();function N(e,t){if(1&e){const e=o.Pb();o.Ob(0,"input",29),o.Vb("click",function(){return o.gc(e),o.Xb().enableEdit()}),o.Nb()}}function O(e,t){if(1&e&&(o.Kb(0,"input",30),o.Yb(1,"date")),2&e){const e=o.Xb();o.cc("value",o.Zb(1,2,e.date_of_birth.value,"mediumDate")),o.Ab("hidden",!!e.is_editable||null)}}function _(e,t){1&e&&o.Kb(0,"input",31)}let k=(()=>{class e{constructor(e,t,i,r){this.fb=e,this.service=t,this.route=i,this.sharedService=r,this.userID=this.route.snapshot.data.userData.id,this.is_editable=!1,this.profileForm=this.fb.group({fname:[this.route.snapshot.data.profileData.fname,b.k.required],lname:[this.route.snapshot.data.profileData.lname,b.k.required],email:[this.route.snapshot.data.userData.email,[b.k.required,b.k.email]],date_of_birth:[this.route.snapshot.data.profileData.date_of_birth],gender:[this.route.snapshot.data.profileData.gender],address:[this.route.snapshot.data.profileData.address],phone:[this.route.snapshot.data.profileData.phone],interest:[this.route.snapshot.data.profileData.interest]})}get fname(){return this.profileForm.get("fname")}get lname(){return this.profileForm.get("lname")}get email(){return this.profileForm.get("email")}get gender(){return this.profileForm.get("gender")}get date_of_birth(){return this.profileForm.get("date_of_birth")}onSubmit(){if(!this.profileForm.invalid){this.is_editable=!1;let e=this.profileForm.value;e.id=this.sharedService.getUser().id,this.service.updateProfile(e)}}enableEdit(){this.is_editable=!0}}return e.\u0275fac=function(t){return new(t||e)(o.Jb(b.b),o.Jb(l),o.Jb(n.a),o.Jb(g.a))},e.\u0275cmp=o.Db({type:e,selectors:[["app-profile"]],decls:67,vars:26,consts:[[1,"d-flex","justify-content-between","mt-4"],[1,"d-flex","align-items-center"],[1,"mr-2"],["class","btn btn-outline-info","type","submit","value","Edit",3,"click",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"d-flex","flex-column","align-items-center","mt-4"],[1,"w-50"],[1,"row"],[1,"col","col-lg-6","col-12"],[1,"form-group"],["for","fname"],["type","text","formControlName","fname","id","fname",1,"form-control"],[1,"invalid-feedback"],["for","lname"],["type","text","formControlName","lname","id","lname",1,"form-control"],["for","email"],["type","email","formControlName","email","id","email",1,"form-control"],["for","phone"],["type","text","formControlName","phone","id","phone",1,"form-control"],["for","date_of_birth"],["type","date","formControlName","date_of_birth","id","date_of_birth","value","2012-05-05",1,"form-control"],["class","form-control","type","text","disabled","",3,"value",4,"ngIf"],["for","gender"],["id","gender","formControlName","gender",1,"form-control"],["for","address"],["type","text","formControlName","address","id","address",1,"form-control"],["for","interest"],["type","text","formControlName","interest","id","interest",1,"form-control"],["class","btn btn-outline-success w-100","type","submit","value","Save",4,"ngIf"],["type","submit","value","Edit",1,"btn","btn-outline-info",3,"click"],["type","text","disabled","",1,"form-control",3,"value"],["type","submit","value","Save",1,"btn","btn-outline-success","w-100"]],template:function(e,t){1&e&&(o.Ob(0,"div",0),o.Ob(1,"h2"),o.kc(2,"Profile"),o.Nb(),o.Ob(3,"div",1),o.Ob(4,"span",2),o.kc(5),o.Yb(6,"Initial"),o.Nb(),o.jc(7,N,1,0,"input",3),o.Nb(),o.Nb(),o.Ob(8,"form",4),o.Vb("ngSubmit",function(){return t.onSubmit()}),o.Ob(9,"div",5),o.Ob(10,"div",6),o.Ob(11,"div",7),o.Ob(12,"div",8),o.Ob(13,"div",9),o.Ob(14,"label",10),o.kc(15,"First Name"),o.Nb(),o.Kb(16,"input",11),o.Ob(17,"div",12),o.kc(18," First name is required. "),o.Nb(),o.Nb(),o.Nb(),o.Ob(19,"div",8),o.Ob(20,"div",9),o.Ob(21,"label",13),o.kc(22,"Last Name"),o.Nb(),o.Kb(23,"input",14),o.Ob(24,"div",12),o.kc(25," Last name is required. "),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(26,"div",7),o.Ob(27,"div",8),o.Ob(28,"div",9),o.Ob(29,"label",15),o.kc(30,"Email Address"),o.Nb(),o.Kb(31,"input",16),o.Ob(32,"div",12),o.kc(33," Email address is required. "),o.Nb(),o.Nb(),o.Nb(),o.Ob(34,"div",8),o.Ob(35,"div",9),o.Ob(36,"label",17),o.kc(37,"Phone"),o.Nb(),o.Kb(38,"input",18),o.Nb(),o.Nb(),o.Nb(),o.Ob(39,"div",7),o.Ob(40,"div",8),o.Ob(41,"div",9),o.Ob(42,"label",19),o.kc(43,"Date of Birth"),o.Nb(),o.Kb(44,"input",20),o.jc(45,O,2,5,"input",21),o.Nb(),o.Nb(),o.Ob(46,"div",8),o.Ob(47,"div",9),o.Ob(48,"label",22),o.kc(49,"Gender"),o.Nb(),o.Ob(50,"select",23),o.Ob(51,"option"),o.kc(52,"Male"),o.Nb(),o.Ob(53,"option"),o.kc(54,"Female"),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(55,"div",7),o.Ob(56,"div",8),o.Ob(57,"div",9),o.Ob(58,"label",24),o.kc(59,"Address"),o.Nb(),o.Kb(60,"input",25),o.Nb(),o.Nb(),o.Ob(61,"div",8),o.Ob(62,"div",9),o.Ob(63,"label",26),o.kc(64,"Interest"),o.Nb(),o.Kb(65,"input",27),o.Nb(),o.Nb(),o.Nb(),o.jc(66,_,1,0,"input",28),o.Nb(),o.Nb(),o.Nb()),2&e&&(o.zb(5),o.mc("Initial: ",o.ac(6,22,t.fname.value,t.lname.value,t.userID),""),o.zb(2),o.bc("ngIf",!t.is_editable),o.zb(1),o.bc("formGroup",t.profileForm),o.zb(8),o.Bb("is-invalid",t.fname&&t.fname.invalid&&t.fname.touched),o.Ab("disabled",!t.is_editable||null),o.zb(7),o.Bb("is-invalid",t.lname&&t.lname.invalid&&t.lname.touched),o.Ab("disabled",!t.is_editable||null),o.zb(8),o.Bb("is-invalid",t.email&&t.email.invalid&&t.email.touched),o.Ab("disabled",!t.is_editable||null),o.zb(7),o.Ab("disabled",!t.is_editable||null),o.zb(6),o.Ab("disabled",!t.is_editable||null)("hidden",!t.is_editable||null),o.zb(1),o.bc("ngIf",t.date_of_birth),o.zb(5),o.Ab("disabled",!t.is_editable||null),o.zb(1),o.Ab("selected",!(!t.gender||"Male"!==t.gender.value)||null),o.zb(2),o.Ab("selected",!(!t.gender||"Female"!==t.gender.value)||null),o.zb(7),o.Ab("disabled",!t.is_editable||null),o.zb(5),o.Ab("disabled",!t.is_editable||null),o.zb(1),o.bc("ngIf",t.is_editable))},directives:[r.j,b.m,b.f,b.d,b.a,b.e,b.c,b.j,b.g,b.l],pipes:[v,r.d],styles:['.form-control[_ngcontent-%COMP%]:disabled{background-color:#fff;border:0}select[disabled][_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;text-indent:.01px;text-overflow:""}']}),e})(),x=(()=>{class e{constructor(e){this.service=e}resolve(e,t){return this.service.getAllProfiles()}}return e.\u0275fac=function(t){return new(t||e)(o.Sb(l))},e.\u0275prov=o.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),y=(()=>{class e{constructor(e){this.service=e}resolve(e,t){return this.service.getAllUsers()}}return e.\u0275fac=function(t){return new(t||e)(o.Sb(l))},e.\u0275prov=o.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),D=(()=>{class e{constructor(e,t){this.service=e,this.sharedService=t}resolve(e,t){return this.service.getProfile(this.sharedService.getUser().id)}}return e.\u0275fac=function(t){return new(t||e)(o.Sb(l),o.Sb(g.a))},e.\u0275prov=o.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var P=i("lJxs");let C=(()=>{class e{constructor(e,t){this.service=e,this.sharedService=t}resolve(e,t){return this.service.getUser(this.sharedService.getUser().id).pipe(Object(P.a)(e=>(e.password=null,e)))}}return e.\u0275fac=function(t){return new(t||e)(o.Sb(l),o.Sb(g.a))},e.\u0275prov=o.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),w=(()=>{class e{constructor(e,t){this.router=e,this.service=t}canActivate(){return!!this.service.is_admin()||(this.router.navigate(["auth","login"]),!1)}}return e.\u0275fac=function(t){return new(t||e)(o.Sb(n.b),o.Sb(g.a))},e.\u0275prov=o.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const I=[{path:"",component:k,resolve:{profileData:D,userData:C},canActivate:[(()=>{class e{constructor(e,t){this.router=e,this.service=t}canActivate(){return!!this.service.is_logedin()||(this.router.navigate(["auth","login"]),!1)}}return e.\u0275fac=function(t){return new(t||e)(o.Sb(n.b),o.Sb(g.a))},e.\u0275prov=o.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()]},{path:"dashboard",component:p,resolve:{allProfileData:x,allUserData:y},canActivate:[w]}];let U=(()=>{class e{}return e.\u0275mod=o.Hb({type:e}),e.\u0275inj=o.Gb({factory:function(t){return new(t||e)},imports:[[n.e.forChild(I)],n.e]}),e})(),F=(()=>{class e{}return e.\u0275mod=o.Hb({type:e}),e.\u0275inj=o.Gb({factory:function(t){return new(t||e)},providers:[l,D,C],imports:[[r.b,U,b.i]]}),e})()}}]);