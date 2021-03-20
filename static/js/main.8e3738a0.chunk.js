(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={contactForm:"contactForm_contactForm__3M5ym",labelForm:"contactForm_labelForm__1Vt5N",inputForm:"contactForm_inputForm__1sqbg",buttonContactForm:"contactForm_buttonContactForm__3YKns"}},,,,,,function(t,e,n){t.exports={buttonDelete:"contactList_buttonDelete__30KH3",item:"contactList_item__3Q5VU"}},,,function(t,e,n){t.exports={container:"container_container__2LRxg"}},function(t,e,n){t.exports={title:"app_title__3W5pt"}},,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(9),r=n.n(o),s=(n(18),n(13)),i=n(3),l=n(4),u=n(6),m=n(5),b=n(10),h=n(2),d=n.n(h),j=n(0),f=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(b.a)({},a,c))},t.handleSubmit=function(e){var n=t.state,a=n.name,c=n.number;e.preventDefault(),""===a||""===c?alert("Enter the data."):(t.props.onAddContact(a,c),t.setState({name:"",number:""}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{className:d.a.contactForm,onSubmit:this.handleSubmit,children:[Object(j.jsx)("label",{className:d.a.labelForm,htmlFor:"name",children:"Name"}),Object(j.jsx)("input",{className:d.a.inputForm,value:e,id:"name",type:"text",name:"name",onChange:this.handleChange}),Object(j.jsx)("label",{className:d.a.labelForm,htmlFor:"number",children:"Number"}),Object(j.jsx)("input",{className:d.a.inputForm,value:n,id:"number",type:"number",name:"number",onChange:this.handleChange}),Object(j.jsx)("button",{className:d.a.buttonContactForm,type:"submit",children:"Add contact"})]})}}]),n}(a.Component);f.defaultProps={};var p=f,v=n(8),O=n.n(v),F=function(t){var e=t.contacts,n=t.onRemoveContact;return Object(j.jsx)("div",{children:Object(j.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{className:O.a.item,children:["- ",a,": ",c,Object(j.jsx)("button",{type:"button",className:O.a.buttonDelete,onClick:function(){return n(e)},children:"Delete"})]},e)}))})})},x=n(11),C=n.n(x),g=function(t){var e=t.children;return Object(j.jsx)("div",{className:C.a.container,children:e})},_=function(t){var e=t.value,n=t.onChangeFilter;return Object(j.jsxs)("div",{className:"FindForm",children:[Object(j.jsx)("label",{htmlFor:"find",className:"FindLabel",children:"Find contact by name"}),Object(j.jsx)("input",{type:"text",value:e,id:"find",className:"FindInput",onChange:function(t){return n(t.target.value)}})]})},y=n(22),N=n(12),S=n.n(N),k=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e,n){var a={id:Object(y.a)(),name:e,number:n};t.state.contacts.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))?alert("".concat(e," is already in contacts.")):t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[a])}}))},t.changeFilter=function(e){t.setState({filter:e})},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.getVisibleContacts();return Object(j.jsxs)(g,{children:[Object(j.jsx)("h1",{className:S.a.title,children:"Phonebook"}),Object(j.jsx)(p,{onAddContact:this.addContact}),e.length>0&&Object(j.jsx)("h2",{children:"Contacts"}),e.length>1&&Object(j.jsx)(_,{value:n,onChangeFilter:this.changeFilter}),e.length>0&&Object(j.jsx)(F,{contacts:a,onRemoveContact:this.removeContact})]})}}]),n}(a.Component);k.defaultProps={};var w=k;r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.8e3738a0.chunk.js.map