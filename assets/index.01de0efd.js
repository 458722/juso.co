import{d as l}from"./database.4668f53a.js";import{c as t,a as i,F as o,h as a,b as s,t as e,w as n,v as c,i as r,o as d}from"./vendor.8bc22f9e.js";import{_ as u}from"./index.e7fe90a1.js";const p={data:()=>({dataInfo:l,searchText:"",interval:null,bgClass:"bg2",show:{},showAll:!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)}),mounted(){this.bgClass="bg"+Math.ceil(14*Math.random()),this.interval=setInterval((()=>{this.bgClass="bg"+Math.ceil(14*Math.random())}),1e4)},unmounted(){clearInterval(this.interval)},methods:{navTo(l){window.open(window.location.origin+"/#/webview/index?href="+encodeURIComponent(l))},search(){window.open(this.$refs.search.selectedOptions[0].value+this.searchText)}}},m={class:"ui container"},b={class:"ui large borderless inverted menu",style:{border:"none"}},k=i("div",{class:"toc link icon item"},[i("i",{class:"sidebar icon"})],-1),h=i("a",{class:"header item loading-trigger"},[i("div",{class:"ui middle aligned image"},[i("img",{alt:"Logo",class:"logo-image",src:u})]),i("div",{class:"logo-text"},"juso.co")],-1),v={class:"right menu"},g={class:"item"},w=i("i",{class:"mail red icon"},null,-1),y={class:"ui text container"},f={class:"ui black pointing below label"},C=i("i",{class:"smile icon"},null,-1),T=i("h1",{class:"ui inverted logo header"},[i("img",{alt:"Logo",class:"ui centered image",src:u})],-1),x={class:"ui inverted header"},I={id:"search-div",class:"ui inverted fluid left icon right action input"},A=i("i",{class:"search icon"},null,-1),$={class:"ui labels shortcuts"},_={key:0,class:"custom-icon"},P={class:"ui inverted link list"},O={class:"item loading-trigger"},q={class:"ui vertical stripe links segment"},B=i("div",{id:"page-loading-progress",class:"ui top attached blue inverted progress"},[i("div",{class:"bar",style:{"transition-duration":"300ms"}})],-1),G={class:"ui equal width stackable internally celled grid"},M={class:"center aligned row"},j={class:"ui top attached label"},L={key:0,class:"ui labels"},R={key:0,class:"custom-icon"},S={class:"ui vertical stripe links segment"},U={class:"ui equal width stackable internally celled grid"},F={class:"center aligned row"},N={class:"ui top attached label"},Q={key:0,class:"ui labels"},W=i("i",{class:"paperclip white icon",style:{display:"none"}},null,-1),X={key:0,class:"custom-icon"},D={class:"ui top attached label"},E={key:0,class:"ui labels"},J=i("i",{class:"paperclip white icon",style:{display:"none"}},null,-1),V={key:0,class:"custom-icon"},z={class:"ui vertical stripe links segment"},H={class:"ui equal width stackable internally celled grid"},K={class:"center aligned row"},Y={class:"ui top attached label"},Z={key:0,class:"ui labels"},ll=i("i",{class:"paperclip white icon",style:{display:"none"}},null,-1),tl={key:0,class:"custom-icon"},il={class:"ui vertical stripe links segment"},ol={class:"ui equal width stackable internally celled grid"},al={class:"center aligned row"},sl={class:"ui top attached label"},el={key:0,class:"ui labels"},nl={key:0,class:"custom-icon"},cl={class:"ui top attached label"},rl={key:0,class:"ui labels"},dl={key:0,class:"custom-icon"},ul={class:"ui vertical stripe links segment"},pl={class:"ui equal width stackable internally celled grid"},ml={class:"center aligned row"},bl={class:"ui top attached label"},kl={key:0,class:"ui labels"},hl={key:0,class:"custom-icon"},vl={class:"ui top attached label"},gl={key:0,class:"ui labels"},wl={key:0,class:"custom-icon"},yl={class:"ui top attached label"},fl={key:0,class:"ui labels"},Cl={key:0,class:"custom-icon"},Tl={class:"ui top attached label"},xl={key:0,class:"ui labels"},Il={key:0,class:"custom-icon"},Al={class:"ui top attached label"},$l={key:0,class:"ui labels"},_l={key:0,class:"custom-icon"},Pl={class:"ui vertical stripe links segment"},Ol={class:"ui equal width stackable internally celled grid"},ql={class:"center aligned row"},Bl={class:"ui top attached label"},Gl={key:0,class:"ui labels"},Ml={key:0,class:"custom-icon"},jl={class:"ui top attached label"},Ll={key:0,class:"ui labels"},Rl={key:0,class:"custom-icon"},Sl={class:"ui top attached label"},Ul={key:0,class:"ui labels"},Fl={key:0,class:"custom-icon"},Nl={class:"ui top attached label"},Ql={key:0,class:"ui labels"},Wl={key:0,class:"custom-icon"},Xl={class:"ui top attached label"},Dl={key:0,class:"ui labels"},El={key:0,class:"custom-icon"},Jl={class:"ui top attached label"},Vl={key:0,class:"ui labels"},zl={key:0,class:"custom-icon"},Hl={class:"ui inverted vertical footer segment"},Kl={class:"ui container"},Yl={class:"ui stackable inverted divided equal height stackable grid"},Zl={class:"three wide column"},lt=i("h4",{class:"ui inverted header"},"Built with",-1),tt={class:"ui inverted link list"},it={key:0,class:"custom-icon"},ot={class:"three wide column"},at=i("h4",{class:"ui inverted header"},"Powered by",-1),st={class:"ui inverted link list"},et={key:0,class:"custom-icon"},nt={class:"three wide column"},ct=i("h4",{class:"ui inverted header"},"About",-1),rt={class:"ui inverted link list"},dt={key:0,class:"custom-icon"},ut={class:"seven wide column"},pt=i("h4",{class:"ui inverted header"},"주소123,링크모음,주소찾기,오피,드라마,영화,웹툰,커뮤니티,사이트순위 ",-1),mt={class:"ui inverted link list"},bt={key:0,class:"custom-icon"};p.render=function(l,u,p,kt,ht,vt){return d(),t(o,null,[i("div",{class:[{[ht.bgClass]:!0},"ui inverted vertical masthead center aligned segment"]},[i("div",m,[i("div",b,[k,h,(d(!0),t(o,null,a(ht.dataInfo.navList,((o,a)=>(d(),t("a",{key:a,title:l.$t(o.label),class:"item loading-trigger",onClick:t=>o.href.includes("http")?vt.navTo(o.href):l.$router.replace(o.href)},[i("i",{class:[o.icon,"icon"]},null,2),s(e(l.$t(o.label)),1)],8,["title","onClick"])))),128)),i("div",v,[i("a",g,[w,s(e(l.$t("联系邮箱"))+"： "+e(ht.dataInfo.mailOptions.mail),1)])])])]),i("div",y,[i("div",f,[C,s(e(l.$t("Ctrl+D快速收藏本站")),1)]),T,i("h2",x,e(l.$t("小X福利导航 - 满足您的欲望！")),1),i("div",I,[A,n(i("input",{id:"search-query","onUpdate:modelValue":u[1]||(u[1]=l=>ht.searchText=l),autocomplete:"off",autofocus:"autofocus",placeholder:"입력하세요(실시간검색어는No입력)",type:"text"},null,512),[[c,ht.searchText]]),i("select",{id:"search-services",ref:"search",style:{display:"flex !important",width:"100px",paddingRight:"1em",paddingRight:"0.5em"},class:"ui compact selection dropdown"},[(d(!0),t(o,null,a(ht.dataInfo.selectOptions,((l,i)=>(d(),t("option",{value:l.value,"data-suffix":""},e(l.label),9,["value"])))),256))],4),i("div",{id:"search-button",class:"ui black icon button",onClick:u[2]||(u[2]=l=>vt.search())}," Go ")]),i("div",$,[(d(!0),t(o,null,a(ht.dataInfo.searchLink,((l,o)=>(d(),t("a",{title:l.title,class:"ui black label",onClick:t=>vt.navTo(l.href)},[l.icon?(d(),t("span",_,[i("img",{src:l.icon},null,8,["src"])])):r("",!0),s(" "+e(l.title),1)],8,["title","onClick"])))),256))]),i("div",P,[i("a",O,e(l.$t("홈페이지")),1)])])],2),i("div",q,[B,i("div",G,[i("div",M,[i("div",{class:"links column",style:{"padding-bottom":"0 !important","border-top":"1px solid rgba(34,36,38,.15)!important"},onClick:u[3]||(u[3]=l=>ht.show.TOP=!ht.show.TOP)},[i("div",j,e(l.$t("TOP")),1),ht.showAll||ht.show.TOP?(d(),t("div",L,[(d(!0),t(o,null,a(ht.dataInfo.TOP,((l,o)=>(d(),t("a",{style:{background:l.color+"!important",color:l.color?"white !important":"black !important"},title:l.title,class:"ui purple label",rel:"nofollow",target:"_blank",onClick:t=>vt.navTo(l.href)},[l.icon?(d(),t("span",R,[i("img",{src:l.icon},null,8,["src"])])):r("",!0),s(" "+e(l.title),1)],12,["title","onClick"])))),256))])):r("",!0)])])])]),i("div",S,[i("div",U,[i("div",F,[i("div",{class:"links column",style:{"padding-bottom":"0 !important","border-top":"1px solid rgba(34,36,38,.15)!important"},onClick:u[4]||(u[4]=l=>ht.show["推荐①区"]=!ht.show["推荐①区"])},[i("div",N,e(l.$t("推荐①区")),1),ht.showAll||ht.show["推荐①区"]?(d(),t("div",Q,[(d(!0),t(o,null,a(ht.dataInfo["推荐①区"],((l,o)=>(d(),t("a",{style:{background:l.color+"!important",color:l.color?"white !important":"black !important"},title:l.title,class:"ui blue label",rel:"nofollow",target:"_blank",onClick:t=>vt.navTo(l.href)},[W,l.icon?(d(),t("span",X,[i("img",{src:l.icon},null,8,["src"])])):r("",!0),s(" "+e(l.title),1)],12,["title","onClick"])))),256))])):r("",!0)]),i("div",{class:"links column",style:{"padding-bottom":"0 !important","border-top":"1px solid rgba(34,36,38,.15)!important"},onClick:u[5]||(u[5]=l=>ht.show["推荐②区"]=!ht.show["推荐②区"])},[i("div",D,e(l.$t("推荐②区")),1),ht.showAll||ht.show["推荐②区"]?(d(),t("div",E,[(d(!0),t(o,null,a(ht.dataInfo["推荐②区"],((l,o)=>(d(),t("a",{style:{background:l.color+"!important",color:l.color?"white !important":"black !important"},title:l.title,class:"ui teal label",rel:"nofollow",target:"_blank",onClick:t=>vt.navTo(l.href)},[J,l.icon?(d(),t("span",V,[i("img",{src:l.icon},null,8,["src"])])):r("",!0),s(" "+e(l.title),1)],12,["title","onClick"])))),256))])):r("",!0)])])])]),i("div",z,[i("div",H,[i("div",K,[i("div",{class:"links column",style:{"padding-bottom":"0 !important","border-top":"1px solid rgba(34,36,38,.15)!important"},onClick:u[6]||(u[6]=l=>ht.show["站长推荐"]=!ht.show["站长推荐"])},[i("div",Y,e(l.$t("站长推荐")),1),ht.showAll||ht.show["站长推荐"]?(d(),t("div",Z,[(d(!0),t(o,null,a(ht.dataInfo["站长推荐"],((l,o)=>(d(),t("a",{style:{background:l.color+"!important",color:l.color?"white !important":"black !important"},title:l.title,class:"ui violet label",rel:"nofollow",target:"_blank",onClick:t=>vt.navTo(l.href)},[ll,l.icon?(d(),t("span",tl,[i("img",{src:l.icon},null,8,["src"])])):r("",!0),s(" "+e(l.title),1)],12,["title","onClick"])))),256))])):r("",!0)])])])]),i("div",il,[i("div",ol,[i("div",al,[i("div",{class:"links column",style:{"padding-bottom":"0 !important","border-top":"1px solid rgba(34,36,38,.15)!important"},onClick:u[7]||(u[7]=l=>ht.show["在线视频"]=!ht.show["在线视频"])},[i("div",sl,e(l.$t("在线视频")),1),ht.showAll||ht.show["在线视频"]?(d(),t("div",el,[(d(!0),t(o,null,a(ht.dataInfo["在线视频"],((l,o)=>(d(),t("a",{style:{background:l.color+"!important",color:l.color?"white !important":"black !important"},title:l.title,class:"ui basic label",rel:"nofollow",target:"_blank",onClick:t=>vt.navTo(l.href)},[l.icon?(d(),t("span",nl,[i("img",{src:l.icon},null,8,["src"])])):r("",!0),s(" "+e(l.title),1)],12,["title","onClick"])))),256))])):r("",!0)]),i("div",{class:"links column",style:{"padding-bottom":"0 !important","border-top":"1px solid rgba(34,36,38,.15)!important"},onClick:u[8]||(u[8]=l=>ht.show["福利导航"]=!ht.show["福利导航"])},[i("div",cl,e(l.$t("福利导航")),1),ht.showAll||ht.show["福利导航"]?(d(),t("div",rl,[(d(!0),t(o,null,a(ht.dataInfo["福利导航"],((l,o)=>(d(),t("a",{style:{background:l.color+"!important",color:l.color?"white !important":"black !important"},title:l.title,class:"ui basic label",rel:"nofollow",target:"_blank",onClick:t=>vt.navTo(l.href)},[l.icon?(d(),t("span",dl,[i("img",{src:l.icon},null,8,["src"])])):r("",!0),s(" "+e(l.title),1)],12,["title","onClick"])))),256))])):r("",!0)])])])]),i("div",ul,[i("div",pl,[i("div",ml,[i("div",{class:"links column",style:{"padding-bottom":"0 !important","border-top":"1px solid rgba(34,36,38,.15)!important"},onClick:u[9]||(u[9]=l=>ht.show["论坛博客"]=!ht.show["论坛博客"])},[i("div",bl,e(l.$t("论坛博客")),1),ht.showAll||ht.show["论坛博客"]?(d(),t("div",kl,[(d(!0),t(o,null,a(ht.dataInfo["论坛博客"],((l,o)=>(d(),t("a",{style:{background:l.color+"!important",color:l.color?"white !important":"black !important"},title:l.title,class:"ui basic label",rel:"nofollow",target:"_blank",onClick:t=>vt.navTo(l.href)},[l.icon?(d(),t("span",hl,[i("img",{src:l.icon},null,8,["src"])])):r("",!0),s(" "+e(l.title),1)],12,["title","onClick"])))),256))])):r("",!0)]),i("div",{class:"links column",style:{"padding-bottom":"0 !important","border-top":"1px solid rgba(34,36,38,.15)!important"},onClick:u[10]||(u[10]=l=>ht.show["福利小说"]=!ht.show["福利小说"])},[i("div",vl,e(l.$t("福利小说")),1),ht.showAll||ht.show["福利小说"]?(d(),t("div",gl,[(d(!0),t(o,null,a(ht.dataInfo["福利小说"],((l,o)=>(d(),t("a",{style:{background:l.color+"!important",color:l.color?"white !important":"black !important"},title:l.title,class:"ui basic label",rel:"nofollow",target:"_blank",onClick:t=>vt.navTo(l.href)},[l.icon?(d(),t("span",wl,[i("img",{src:l.icon},null,8,["src"])])):r("",!0),s(" "+e(l.title),1)],12,["title","onClick"])))),256))])):r("",!0)]),i("div",{class:"links column",style:{"padding-bottom":"0 !important","border-top":"1px solid rgba(34,36,38,.15)!important"},onClick:u[11]||(u[11]=l=>ht.show["高清资源"]=!ht.show["高清资源"])},[i("div",yl,e(l.$t("高清资源")),1),ht.showAll||ht.show["高清资源"]?(d(),t("div",fl,[(d(!0),t(o,null,a(ht.dataInfo["高清资源"],((l,o)=>(d(),t("a",{style:{background:l.color+"!important",color:l.color?"white !important":"black !important"},title:l.title,class:"ui basic label",rel:"nofollow",target:"_blank",onClick:t=>vt.navTo(l.href)},[l.icon?(d(),t("span",Cl,[i("img",{src:l.icon},null,8,["src"])])):r("",!0),s(" "+e(l.title),1)],12,["title","onClick"])))),256))])):r("",!0)]),i("div",{class:"links column",style:{"padding-bottom":"0 !important","border-top":"1px solid rgba(34,36,38,.15)!important"},onClick:u[12]||(u[12]=l=>ht.show["动漫ACG"]=!ht.show["动漫ACG"])},[i("div",Tl,e(l.$t("动漫ACG")),1),ht.showAll||ht.show["动漫ACG"]?(d(),t("div",xl,[(d(!0),t(o,null,a(ht.dataInfo["动漫ACG"],((l,o)=>(d(),t("a",{style:{background:l.color+"!important",color:l.color?"white !important":"black !important"},title:l.title,class:"ui basic label",rel:"nofollow",target:"_blank",onClick:t=>vt.navTo(l.href)},[l.icon?(d(),t("span",Il,[i("img",{src:l.icon},null,8,["src"])])):r("",!0),s(" "+e(l.title),1)],12,["title","onClick"])))),256))])):r("",!0)]),i("div",{class:"links column",style:{"padding-bottom":"0 !important","border-top":"1px solid rgba(34,36,38,.15)!important"},onClick:u[13]||(u[13]=l=>ht.show["国外视频"]=!ht.show["国外视频"])},[i("div",Al,e(l.$t("国外视频")),1),ht.showAll||ht.show["国外视频"]?(d(),t("div",$l,[(d(!0),t(o,null,a(ht.dataInfo["国外视频"],((l,o)=>(d(),t("a",{style:{background:l.color+"!important",color:l.color?"white !important":"black !important"},title:l.title,class:"ui basic label",rel:"nofollow",target:"_blank",onClick:t=>vt.navTo(l.href)},[l.icon?(d(),t("span",_l,[i("img",{src:l.icon},null,8,["src"])])):r("",!0),s(" "+e(l.title),1)],12,["title","onClick"])))),256))])):r("",!0)])])])]),i("div",Pl,[i("div",Ol,[i("div",ql,[i("div",{class:"links column",style:{"padding-bottom":"0 !important","border-top":"1px solid rgba(34,36,38,.15)!important"},onClick:u[14]||(u[14]=l=>ht.show["购物"]=!ht.show["购物"])},[i("div",Bl,e(l.$t("购物")),1),ht.showAll||ht.show["购物"]?(d(),t("div",Gl,[(d(!0),t(o,null,a(ht.dataInfo["购物"],((l,o)=>(d(),t("a",{style:{background:l.color+"!important",color:l.color?"white !important":"black !important"},title:l.title,class:"ui basic label",rel:"nofollow",target:"_blank",onClick:t=>vt.navTo(l.href)},[l.icon?(d(),t("span",Ml,[i("img",{src:l.icon},null,8,["src"])])):r("",!0),s(" "+e(l.title),1)],12,["title","onClick"])))),256))])):r("",!0)]),i("div",{class:"links column",style:{"padding-bottom":"0 !important","border-top":"1px solid rgba(34,36,38,.15)!important"},onClick:u[15]||(u[15]=l=>ht.show["工具"]=!ht.show["工具"])},[i("div",jl,e(l.$t("工具")),1),ht.showAll||ht.show["工具"]?(d(),t("div",Ll,[(d(!0),t(o,null,a(ht.dataInfo["工具"],((l,o)=>(d(),t("a",{style:{background:l.color+"!important",color:l.color?"white !important":"black !important"},title:l.title,class:"ui basic label",rel:"nofollow",target:"_blank",onClick:t=>vt.navTo(l.href)},[l.icon?(d(),t("span",Rl,[i("img",{src:l.icon},null,8,["src"])])):r("",!0),s(" "+e(l.title),1)],12,["title","onClick"])))),256))])):r("",!0)]),i("div",{class:"links column",style:{"padding-bottom":"0 !important","border-top":"1px solid rgba(34,36,38,.15)!important"},onClick:u[16]||(u[16]=l=>ht.show["社交"]=!ht.show["社交"])},[i("div",Sl,e(l.$t("社交")),1),ht.showAll||ht.show["社交"]?(d(),t("div",Ul,[(d(!0),t(o,null,a(ht.dataInfo["社交"],((l,o)=>(d(),t("a",{style:{background:l.color+"!important",color:l.color?"white !important":"black !important"},title:l.title,class:"ui basic label",rel:"nofollow",target:"_blank",onClick:t=>vt.navTo(l.href)},[l.icon?(d(),t("span",Fl,[i("img",{src:l.icon},null,8,["src"])])):r("",!0),s(" "+e(l.title),1)],12,["title","onClick"])))),256))])):r("",!0)]),i("div",{class:"links column",style:{"padding-bottom":"0 !important","border-top":"1px solid rgba(34,36,38,.15)!important"},onClick:u[17]||(u[17]=l=>ht.show["学习"]=!ht.show["学习"])},[i("div",Nl,e(l.$t("学习")),1),ht.showAll||ht.show["学习"]?(d(),t("div",Ql,[(d(!0),t(o,null,a(ht.dataInfo["学习"],((l,o)=>(d(),t("a",{style:{background:l.color+"!important",color:l.color?"white !important":"black !important"},title:l.title,class:"ui basic label",rel:"nofollow",target:"_blank",onClick:t=>vt.navTo(l.href)},[l.icon?(d(),t("span",Wl,[i("img",{src:l.icon},null,8,["src"])])):r("",!0),s(" "+e(l.title),1)],12,["title","onClick"])))),256))])):r("",!0)]),i("div",{class:"links column",style:{"padding-bottom":"0 !important","border-top":"1px solid rgba(34,36,38,.15)!important"},onClick:u[18]||(u[18]=l=>ht.show["求职"]=!ht.show["求职"])},[i("div",Xl,e(l.$t("求职")),1),ht.showAll||ht.show["求职"]?(d(),t("div",Dl,[(d(!0),t(o,null,a(ht.dataInfo["求职"],((l,o)=>(d(),t("a",{style:{background:l.color+"!important",color:l.color?"white !important":"black !important"},title:l.title,class:"ui basic label",rel:"nofollow",target:"_blank",onClick:t=>vt.navTo(l.href)},[l.icon?(d(),t("span",El,[i("img",{src:l.icon},null,8,["src"])])):r("",!0),s(" "+e(l.title),1)],12,["title","onClick"])))),256))])):r("",!0)]),i("div",{class:"links column",style:{"padding-bottom":"0 !important","border-top":"1px solid rgba(34,36,38,.15)!important"},onClick:u[19]||(u[19]=l=>ht.show["娱乐"]=!ht.show["娱乐"])},[i("div",Jl,e(l.$t("娱乐")),1),ht.showAll||ht.show["娱乐"]?(d(),t("div",Vl,[(d(!0),t(o,null,a(ht.dataInfo["娱乐"],((l,o)=>(d(),t("a",{style:{background:l.color+"!important",color:l.color?"white !important":"black !important"},title:l.title,class:"ui basic label",rel:"nofollow",target:"_blank",onClick:t=>vt.navTo(l.href)},[l.icon?(d(),t("span",zl,[i("img",{src:l.icon},null,8,["src"])])):r("",!0),s(" "+e(l.title),1)],12,["title","onClick"])))),256))])):r("",!0)])])])]),i("div",Hl,[i("div",Kl,[i("div",Yl,[i("div",Zl,[lt,i("div",tt,[(d(!0),t(o,null,a(ht.dataInfo["Built with"],((l,o)=>(d(),t("a",{title:l.title,class:"item",target:"_blank",onClick:t=>vt.navTo(l.href)},[l.icon?(d(),t("span",it,[i("img",{src:l.icon},null,8,["src"])])):r("",!0),s(" "+e(l.title),1)],8,["title","onClick"])))),256))])]),i("div",ot,[at,i("div",st,[(d(!0),t(o,null,a(ht.dataInfo["Powered by"],((l,o)=>(d(),t("a",{title:l.title,class:"item",target:"_blank",onClick:t=>vt.navTo(l.href)},[l.icon?(d(),t("span",et,[i("img",{src:l.icon},null,8,["src"])])):r("",!0),s(" "+e(l.title),1)],8,["title","onClick"])))),256))])]),i("div",nt,[ct,i("div",rt,[(d(!0),t(o,null,a(ht.dataInfo.About,((l,o)=>(d(),t("a",{title:l.title,class:"item",target:"_blank",onClick:t=>vt.navTo(l.href)},[l.icon?(d(),t("span",dt,[i("img",{src:l.icon},null,8,["src"])])):r("",!0),s(" "+e(l.title),1)],8,["title","onClick"])))),256))])]),i("div",ut,[pt,i("div",mt,[(d(!0),t(o,null,a(ht.dataInfo["小X福利导航 - 这里只有精品！"],((l,o)=>(d(),t("a",{title:l.title,class:"item",target:"_blank",onClick:t=>vt.navTo(l.href)},[l.icon?(d(),t("span",bt,[i("img",{src:l.icon},null,8,["src"])])):r("",!0),s(" "+e(l.title),1)],8,["title","onClick"])))),256))])])])])])],64)};export default p;
