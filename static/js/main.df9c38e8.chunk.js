(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var r=c(26),a=c(8),n=c(3),s=(c(36),c(37),c(10)),l=c.n(s),i=c(2),o=function(){var e=function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})};return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(a.c,{to:"/",className:e,children:"Home"}),Object(i.jsx)(a.c,{to:"/people",className:e,children:"People"})]})})})},j=(c(39),function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(o,{}),Object(i.jsx)("div",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(n.b,{})})})]})}),d=c(4),b=c(6),u=c(5),h=c(0),p=c(9),m=c(24),x=c(27);function O(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(u.a)(e,2),r=t[0],a=t[1];null===a?c.delete(r):Array.isArray(a)?(c.delete(r),a.forEach((function(e){c.append(r,e)}))):c.set(r,a)})),c.toString()}var f=["children","params"],v=function(e){var t=e.isActive;return l()({"is-active":t})},g=function(e){var t=e.children,c=e.params,r=Object(x.a)(e,f),n=Object(a.d)(),s=Object(u.a)(n,1)[0];return Object(i.jsx)(a.c,Object(m.a)(Object(m.a)({className:v,to:{search:O(s,c)}},r),{},{children:t}))},N=function(){var e=Object(a.d)(),t=Object(u.a)(e,2),c=t[0],r=t[1],n=c.get("sex")||"",s=c.getAll("centuries")||[];return Object(i.jsxs)("nav",{className:"panel",children:[Object(i.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(i.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(i.jsx)(g,{className:l()({"is-active":""===n}),params:{sex:null},children:"All"}),Object(i.jsx)(g,{className:l()({"is-active":"m"===n}),params:{sex:"m"},children:"Male"}),Object(i.jsx)(g,{className:l()({"is-active":"f"===n}),params:{sex:"f"},children:"Female"})]}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsxs)("p",{className:"control has-icons-left",children:[Object(i.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",onChange:function(e){var t=new URLSearchParams(c);t.set("query",e.target.value),0===e.target.value.length&&t.delete("query"),r(t)}}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(i.jsx)("div",{className:"level-left",children:["16","17","18","19","20"].map((function(e){return Object(i.jsx)(g,{"data-cy":"century",className:l()("button mr-1",{"is-info":s.includes("".concat(e))}),params:{centuries:s.includes("".concat(e))?s.filter((function(t){return t!==e})):[].concat(Object(p.a)(s),[e])},children:e},e)}))}),Object(i.jsx)("div",{className:"level-right ml-4",children:Object(i.jsx)(g,{"data-cy":"centuryALL",className:l()("button is-success",{"is-outlined":0!==s.length}),params:{centuries:[]},children:"All"})})]})}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsx)("a",{className:"button is-link is-outlined is-fullwidth",href:"#/people",children:"Reset all filters"})})]})},w=function(e){var t=e.visiblePeople,c=e.personId,r=e.people,n=Object(a.d)(),s=Object(u.a)(n,1)[0],o=s.get("sort"),j=s.get("order"),d=function(e){var t={};return o||(t={sort:e,order:null}),j||o!==e||(t={sort:e,order:"desc"}),o&&o!==e&&(t={sort:e,order:null}),o&&o===e&&j&&(t={sort:null,order:null}),t},b=function(e,t){var c="mother"===t?"motherName":"fatherName";if(!e[c])return Object(i.jsx)("td",{children:"-"});var n,s=(n=e[c],r.find((function(e){return e.name===n})));return s?Object(i.jsx)("td",{children:Object(i.jsx)(a.b,{className:l()({"has-text-danger":"f"===s.sex}),to:"/people/".concat(s.slug),children:s.name})}):Object(i.jsx)("td",{children:e[c]})};return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[["Name","Sex","Born","Died"].map((function(e){return Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:[e,Object(i.jsx)(g,{params:d(e.toLowerCase()),children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:l()("fas",{"fa-sort":o!==e,"fa-sort-up":o===e.toLowerCase()&&!j,"fa-sort-down":o&&j&&o===e.toLowerCase()})})})})]})})})),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),t.map((function(e){return Object(i.jsx)("tbody",{children:Object(i.jsxs)("tr",{"data-cy":"person",className:l()({"has-background-warning":e.slug===c}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(a.b,{to:"/people/".concat(e.slug),className:l()({"has-text-danger":"f"===e.sex}),children:e.name})}),Object(i.jsx)("td",{children:e.sex}),Object(i.jsx)("td",{children:e.born}),Object(i.jsx)("td",{children:e.died}),b(e,"mother"),b(e,"father")]})},e.slug)}))]})},y="https://mate-academy.github.io/react_people-table/api/people.json";function k(e){return new Promise((function(t){return setTimeout(t,e)}))}function C(){return L.apply(this,arguments)}function L(){return(L=Object(b.a)(Object(d.a)().mark((function e(){return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k(500).then((function(){return fetch(y)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=function(){var e=Object(h.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(n.r)().personId,l=Object(h.useState)(!1),o=Object(u.a)(l,2),j=o[0],m=o[1],x=Object(h.useState)(!0),O=Object(u.a)(x,2),f=O[0],v=O[1],g=Object(a.d)(),y=Object(u.a)(g,1)[0],k=function(e,t){var c=t.sex,r=t.centuries,a=t.query,n=t.sort,s=t.order,l=Object(p.a)(e);if(c&&(l=l.filter((function(e){switch(c){case"m":return"m"===e.sex;case"f":return"f"===e.sex;default:return l}}))),r.length>0&&(l=l.filter((function(e){return r.includes(Math.ceil(e.born/100).toString())}))),a){var i=a.toLowerCase().trim();l=l.filter((function(e){var t,c;return e.name.toLowerCase().includes(i)||(null===(t=e.motherName)||void 0===t?void 0:t.toLowerCase().includes(i))||(null===(c=e.fatherName)||void 0===c?void 0:c.toLowerCase().includes(i))}))}return n&&(l=l.sort((function(e,t){switch(n){case"name":return s?t.name.localeCompare(e.name):e.name.localeCompare(t.name);case"sex":return s?t.sex.localeCompare(e.sex):e.sex.localeCompare(t.sex);case"born":return s?t.born-e.born:e.born-t.born;case"died":return s?t.died-e.died:e.died-t.died;default:return 0}}))),l}(c,{sex:y.get("sex")||"",centuries:y.getAll("centuries")||[],query:y.get("query")||"",sort:y.get("sort"),order:y.get("order")}),L=function(){var e=Object(b.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.prev=1,e.next=4,C();case 4:t=e.sent,r(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),m(!0);case 11:return e.prev=11,v(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return Object(h.useEffect)((function(){L()}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[c&&!f&&Object(i.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:Object(i.jsx)(N,{})}),Object(i.jsx)("div",{className:"column",children:Object(i.jsxs)("div",{className:"box table-container",children:[j&&!f&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",children:"Something went wrong"}),0===c.length&&!f&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),0===k.length&&!f&&Object(i.jsx)("p",{children:"There are no people matching the current search criteria"}),!f&&k.length>0&&Object(i.jsx)(w,{visiblePeople:k,people:c,personId:s})]})})]})})]})};Object(r.createRoot)(document.getElementById("root")).render(Object(i.jsx)(a.a,{children:Object(i.jsx)(n.e,{children:Object(i.jsxs)(n.c,{path:"/",element:Object(i.jsx)(j,{}),children:[Object(i.jsx)(n.c,{path:"home",element:Object(i.jsx)(n.a,{to:"/",replace:!0})}),Object(i.jsx)(n.c,{index:!0,element:Object(i.jsx)("h1",{className:"title",children:"Home Page"})}),Object(i.jsx)(n.c,{path:"people/:personId?",element:Object(i.jsx)(S,{})}),Object(i.jsx)(n.c,{path:"*",element:Object(i.jsx)("h1",{className:"title",children:"Page not found"})})]})})}))}},[[40,1,2]]]);
//# sourceMappingURL=main.df9c38e8.chunk.js.map