(this["webpackJsonpspacex-app"]=this["webpackJsonpspacex-app"]||[]).push([[0],{26:function(e,c,t){},58:function(e,c,t){},82:function(e,c,t){},84:function(e,c,t){},88:function(e,c,t){},89:function(e,c,t){"use strict";t.r(c);var a=t(0),n=t(41),s=t.n(n),i=(t(26),t(58),t.p+"static/media/video-1.59e75226.mp4"),l=t(93),r=t(1),o=function(){var e,c,t=Object(l.a)("spaceX",(function(){return fetch("https://api.spacexdata.com/v3/info").then((function(e){return e.json()}))})),a=t.isLoading,n=t.error,s=t.data;return a?"Loading...":n?"An error has occurred: "+n.message:Object(r.jsxs)("div",{className:"home-container",children:[Object(r.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,preload:"auto",autobuffer:"true","data-mobile-video":!0,children:Object(r.jsx)("source",{src:i,type:"video/mp4"})}),Object(r.jsx)("div",{className:"row home-row",children:Object(r.jsxs)("div",{className:"col",children:[Object(r.jsxs)("div",{className:"home-text",children:[Object(r.jsx)("div",{className:"topic",children:s.name}),Object(r.jsx)("div",{className:"subtitle",children:s.summary})]}),Object(r.jsxs)("div",{className:"founder-info",children:[Object(r.jsx)("div",{className:"topic-founder",children:"Founder"}),Object(r.jsxs)("div",{className:"subtitle-founder",children:[s.founder,Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:null===s||void 0===s||null===(e=s.links)||void 0===e?void 0:e.elon_twitter,children:Object(r.jsx)("i",{className:"fab fa-twitter"})}),Object(r.jsx)("a",{href:null===s||void 0===s||null===(c=s.links)||void 0===c?void 0:c.website,children:Object(r.jsx)("i",{className:"fas fa-rocket"})})]})]})]})})]})},j=t(28),d=t.n(j),h=t(44),u=t(20),b=t(47),x=t(91),O=t(94),m=t(46),v=t(13),p=t(52),f=t(19),k=t(45),g=t.n(k),_=function(){var e=Object(a.useState)([]),c=Object(u.a)(e,2),t=c[0],n=c[1],s=Object(a.useState)([]),i=Object(u.a)(s,2),l=i[0],o=i[1],j=Object(a.useState)("all"),k=Object(u.a)(j,2),_=k[0],N=k[1],y=Object(a.useState)("all"),L=Object(u.a)(y,2),w=L[0],S=L[1],C=Object(a.useState)("all"),R=Object(u.a)(C,2),F=R[0],X=R[1];Object(a.useEffect)(Object(h.a)(d.a.mark((function e(){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://api.spacexdata.com/v3/launches");case 2:c=e.sent,n(c.data),o(c.data),console.log(c);case 6:case"end":return e.stop()}}),e)}))),[]);return Object(r.jsxs)(m.a,{fluid:!0,children:[Object(r.jsx)(p.a,{className:"p-3 rounded mt-5 mx-3",border:"dark",children:Object(r.jsx)(v.a,{children:Object(r.jsxs)(v.a.Row,{children:[Object(r.jsxs)(v.a.Group,{as:f.a,xs:12,md:4,controlId:"formGridState",children:[Object(r.jsx)(v.a.Label,{children:Object(r.jsx)("h4",{children:"Launch year"})}),Object(r.jsxs)(v.a.Control,{as:"select",defaultValue:"Choose...",onChange:function(e){X(e.target.value),function(e){if("all"!==e)if("all"!==_||"all"!==w){var c=t.filter((function(c){return c.launch_year===e&&("all"===_||String(c.launch_success)===_)&&("all"===w||c.rocket.rocket_id===w)}));o(c)}else{var a=t.filter((function(c){return c.launch_year===e}));o(a)}else if("all"!==_||"all"!==w){var n=t.filter((function(e){return("all"===_||String(e.launch_success)===_)&&("all"===w||e.rocket.rocket_id===w)}));o(n)}else o(t)}(e.target.value)},children:[Object(r.jsx)("option",{value:"all",children:"Choose..."}),Object(r.jsx)("option",{value:"2006",children:"2006"}),Object(r.jsx)("option",{value:"2007",children:"2007"}),Object(r.jsx)("option",{value:"2008",children:"2008"}),Object(r.jsx)("option",{value:"2009",children:"2009"}),Object(r.jsx)("option",{value:"2010",children:"2010"}),Object(r.jsx)("option",{value:"2012",children:"2012"}),Object(r.jsx)("option",{value:"2013",children:"2013"}),Object(r.jsx)("option",{value:"2014",children:"2014"}),Object(r.jsx)("option",{value:"2015",children:"2015"}),Object(r.jsx)("option",{value:"2016",children:"2016"}),Object(r.jsx)("option",{value:"2017",children:"2017"}),Object(r.jsx)("option",{value:"2018",children:"2018"}),Object(r.jsx)("option",{value:"2019",children:"2019"}),Object(r.jsx)("option",{value:"2020",children:"2020"})]})]}),Object(r.jsxs)(v.a.Group,{as:f.a,xs:12,md:4,controlId:"formGridState",children:[Object(r.jsx)(v.a.Label,{children:Object(r.jsx)("h4",{children:"Rocket name"})}),Object(r.jsxs)(v.a.Control,{as:"select",defaultValue:"Choose...",onChange:function(e){S(e.target.value),function(e){if("all"!==e)if("all"!==_||"all"!==F){var c=t.filter((function(c){return c.rocket.rocket_id===e&&("all"===_||String(c.launch_success)===_)&&("all"===F||c.launch_year===F)}));o(c)}else{var a=t.filter((function(c){return c.rocket.rocket_id===e}));o(a)}else if("all"!==_||"all"!==F){var n=t.filter((function(e){return("all"===_||String(e.launch_success)===_)&&("all"===F||e.launch_year===F)}));o(n)}else o(t)}(e.target.value)},children:[Object(r.jsx)("option",{value:"all",children:"Choose..."}),Object(r.jsx)("option",{value:"falcon1",children:"Falcon 1"}),Object(r.jsx)("option",{value:"falcon9",children:"Falcon 9"}),Object(r.jsx)("option",{value:"falconheavy",children:"Falcon Heavy"}),Object(r.jsx)("option",{value:"starship",children:"Starship"})]})]}),Object(r.jsxs)(v.a.Group,{as:f.a,xs:12,md:4,controlId:"formGridState",children:[Object(r.jsx)(v.a.Label,{children:Object(r.jsx)("h4",{children:"Launch success"})}),Object(r.jsxs)(v.a.Control,{as:"select",defaultValue:"all",onChange:function(e){N(e.target.value),function(e){if("all"!==e)if("all"!==w||"all"!==F){var c=t.filter((function(c){return String(c.launch_success)===e&&("all"===w||c.rocket.rocket_id===w)&&("all"===F||c.launch_year===F)}));o(c)}else{var a=t.filter((function(c){return String(c.launch_success)===e}));o(a)}else if("all"!==w||"all"!==F){var n=t.filter((function(e){return("all"===w||e.rocket.rocket_id===w)&&("all"===F||e.launch_year===F)}));o(n)}else o(t)}(e.target.value)},children:[Object(r.jsx)("option",{value:"all",children:"Choose..."}),Object(r.jsx)("option",{value:!1,children:"False"}),Object(r.jsx)("option",{value:!0,children:"True"})]})]})]})})}),Object(r.jsx)("br",{}),Object(r.jsxs)(b.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",responsive:"md",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{style:{width:"20%"},children:"Launch Year"}),Object(r.jsx)("th",{style:{width:"20%"},children:"Mission Icon"}),Object(r.jsx)("th",{style:{width:"20%"},children:"Mission Name"}),Object(r.jsx)("th",{style:{width:"20%"},children:"Rocket Name"}),Object(r.jsx)("th",{style:{width:"10%"},children:"Launch Success"}),Object(r.jsx)("th",{style:{width:"10%"},children:"Read More Detail"})]})}),Object(r.jsx)("tbody",{children:l.map((function(e,c){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.launch_year}),Object(r.jsx)("td",{children:Object(r.jsx)("img",{src:null===e||void 0===e?void 0:e.links.mission_patch_small,style:{width:"100%",height:"100%"}})}),Object(r.jsx)("td",{children:e.mission_name}),Object(r.jsx)("td",{children:e.rocket.rocket_name}),Object(r.jsx)("td",{children:Object(r.jsx)(x.a,{variant:e.launch_success?"success":"danger",className:"d-flex justify-content-center",children:e.launch_success?"Success":"Fail"})}),Object(r.jsx)("td",{children:Object(r.jsx)(O.a,{variant:"info",href:"/Launches/".concat(e.flight_number),style:{textAlign:"center",alignItems:"center"},size:"md",children:"Click"})})]},c)}))})]})]})},N=(t(82),t(83),function(){var e=Object(l.a)("spaceX",(function(){return fetch("https://api.spacexdata.com/v3/rockets").then((function(e){return e.json()}))})),c=e.isLoading,t=e.error,a=e.data,n=[];if(c)return"Loading...";if(t)return"An error has occurred: "+t.message;for(var s=0;s<a.length;s++)n.push({rocket_id:a[s].rocket_id,rocket_name:a[s].rocket_name,description:a[s].description,active:a[s].active,images_url:a[s].flickr_images,wikipedia:a[s].wikipedia});return console.log(a),Object(r.jsx)("div",{className:"content",children:n.map((function(e,c){var t;return Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(p.a,{children:[Object(r.jsx)(p.a.Img,{variant:"top",src:null===e||void 0===e||null===(t=e.images_url)||void 0===t?void 0:t[0]}),Object(r.jsxs)(p.a.Body,{children:[Object(r.jsx)(p.a.Title,{children:e.rocket_name}),Object(r.jsx)(p.a.Text,{children:e.description})]}),Object(r.jsxs)(p.a.Body,{children:[Object(r.jsx)(p.a.Link,{href:"/Rocket/".concat(e.rocket_id),children:"Read more Detail"}),Object(r.jsx)(p.a.Link,{href:e.wikipedia,children:"Wiki Pedia"})]})]})})}))})}),y=t(48),L=t(49),w=t(53),S=t(51),C=[{title:"Home",path:"/Home",cName:"nav-links"},{title:"Rocket",path:"/Rocket",cName:"nav-links"},{title:"Launches",path:"/Launches",cName:"nav-links"}],R=(t(84),t(22)),F=function(e){Object(w.a)(t,e);var c=Object(S.a)(t);function t(){var e;Object(y.a)(this,t);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=c.call.apply(c,[this].concat(n))).state={clicked:!1},e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e}return Object(L.a)(t,[{key:"render",value:function(){var e=this;return Object(r.jsxs)("nav",{className:"NavbarItems",children:[Object(r.jsxs)("h1",{className:"navbar-logo",children:["SpaceX",Object(r.jsx)("i",{className:"fas fa-rocket"})]}),Object(r.jsx)("div",{className:"menu-icon",onClick:this.handleClick,children:Object(r.jsx)("i",{className:this.state.clicked?"fas fa-times":"fas fa-bars"})}),Object(r.jsx)("ul",{className:this.state.clicked?"nav-menu active":"nav-menu",children:C.map((function(c,t){return Object(r.jsx)("li",{children:Object(r.jsx)(R.b,{to:c.path,className:c.cName,onClick:e.handleClick,activeClassName:"isactive",children:c.title})},t)}))})]})}}]),t}(a.Component),X=(t(88),t.p+"static/media/video-2.45ecd6d4.mp4"),G=function(e){var c=Object(l.a)("spaceX",(function(){return fetch("https://api.spacexdata.com/v3/rockets/".concat(e.match.params.rocket_id)).then((function(e){return e.json()}))})),t=c.isLoading,a=c.error,n=c.data;return t?"Loading...":a?"An error has occurred: "+a.message:(console.log(n),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,preload:"auto",autobuffer:"true","data-mobile-video":!0,children:Object(r.jsx)("source",{src:X,type:"video/mp4"})}),Object(r.jsxs)("div",{className:"bg",children:[Object(r.jsx)("div",{className:"img-conainer",children:Object(r.jsx)("img",{src:n.flickr_images[n.flickr_images.length-1],alt:"Rocket"})}),Object(r.jsx)("div",{className:"context-container",children:Object(r.jsxs)("div",{className:"context",children:[Object(r.jsx)("h2",{children:n.rocket_name}),Object(r.jsxs)("h5",{children:[Object(r.jsx)("strong",{children:"Country :"})," ",n.country]}),Object(r.jsxs)("h5",{children:[Object(r.jsx)("strong",{children:"Description :"}),n.description]}),Object(r.jsxs)("h5",{children:[Object(r.jsx)("strong",{children:"Booster :"})," ",n.boosters]}),Object(r.jsxs)("h5",{children:[Object(r.jsx)("strong",{children:"Cost :"})," ",n.cost_per_launch]}),"Diameter:",Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:["Feet: ",n.diameter.feet]}),Object(r.jsxs)("li",{children:["meters: ",n.diameter.meters]})]}),"Mass:",Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:["Kg: ",n.mass.kg]}),Object(r.jsxs)("li",{children:["Lb: ",n.mass.lb]})]}),"Height:",Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:["Meters: ",n.height.meters]}),Object(r.jsxs)("li",{children:["Feet: ",n.height.feet]})]}),"Payload weights:",n.payload_weights.map((function(e){return Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{children:["Name: ",e.name]}),Object(r.jsxs)("li",{children:["Kg: ",e.kg]}),Object(r.jsxs)("li",{children:["Lb: ",e.lb]})]})}))]})}),Object(r.jsx)(O.a,{href:"SpaceX_HW/Rocket",variant:"success",children:"Go Back to Rocket Page"})]})]}))},H=function(e){var c,t,a,n,s,i=Object(l.a)("spaceX",(function(){return fetch("https://api.spacexdata.com/v3/launches/".concat(e.match.params.flight_number)).then((function(e){return e.json()}))})),o=i.isLoading,j=i.error,d=i.data;return o?"Loading...":j?"An error has occurred: "+j.message:(console.log(d),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("p",{children:d.launch_success?"This Launch Success":"This Launch Failure because : "+(null===d||void 0===d||null===(c=d.launch_failure_details)||void 0===c?void 0:c.reason)}),Object(r.jsxs)("p",{children:["Flight Number : ",d.flight_number]}),Object(r.jsxs)("p",{children:["Mission Name : ",d.mission_name]}),Object(r.jsxs)("p",{children:["Rocket Name : ",null===d||void 0===d||null===(t=d.rocket)||void 0===t?void 0:t.rocket_name]}),Object(r.jsxs)("p",{children:["Rocket Type : ",null===d||void 0===d||null===(a=d.rocket)||void 0===a?void 0:a.rocket_type]}),Object(r.jsxs)("p",{children:["Launch Year : ",d.launch_year]}),Object(r.jsxs)("p",{children:["Launch Site Name : ",null===d||void 0===d||null===(n=d.launch_site)||void 0===n?void 0:n.site_name]}),Object(r.jsx)(O.a,{href:"SpaceX_HW/Rocket/".concat(null===d||void 0===d||null===(s=d.rocket)||void 0===s?void 0:s.rocket_id),variant:"warning",children:"Read More About Rocket Detail"}),Object(r.jsx)(O.a,{href:"SpaceX_HW/Launches",variant:"success",children:"Go Back to Launches Page"})]}))},I=t(92),A=t(42),M=t(9),B=new I.a;s.a.render(Object(r.jsx)(A.a,{client:B,children:Object(r.jsx)("div",{className:"body",children:Object(r.jsxs)(R.a,{basename:"/SpaceX_HW",children:[Object(r.jsx)(F,{}),Object(r.jsx)(M.a,{exact:!0,path:"/",component:o}),Object(r.jsx)(M.a,{exact:!0,path:"/Launches",component:_}),Object(r.jsx)(M.a,{exact:!0,path:"/Rocket",component:N}),Object(r.jsx)(M.a,{path:"/Rocket/:rocket_id",component:G}),Object(r.jsx)(M.a,{path:"/Launches/:flight_number",component:H})]})})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.33420b79.chunk.js.map