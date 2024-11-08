"use strict";(self.webpackChunksavannah_bites=self.webpackChunksavannah_bites||[]).push([[242],{242:(e,s,a)=>{a.r(s),a.d(s,{default:()=>l});var n=a(5043),i=a(579);const l=()=>{const[e,s]=(0,n.useState)({name:"",email:"",phone:"",subject:"",message:"",feedbackType:""}),[a,l]=(0,n.useState)(!1),[r,o]=(0,n.useState)(!1),c=e=>{const{id:a,value:n}=e.target;if("phone"===a){const e=n.replace(/\D/g,"").match(/(\d{0,3})(\d{0,3})(\d{0,4})/),i=e[2]?`(${e[1]}) ${e[2]}${e[3]?`-${e[3]}`:""}`:e[1];s((e=>({...e,[a]:i})))}else s((e=>({...e,[a]:n})))};return(0,i.jsx)("div",{className:"contact-page-wrapper",children:(0,i.jsxs)("div",{className:"contact-page",children:[(0,i.jsx)("header",{className:"contact-header",children:(0,i.jsxs)("div",{className:"header-content",children:[(0,i.jsx)("h1",{children:"Contact Us"}),(0,i.jsx)("p",{className:"tagline",children:"We'd Love to Hear from You"})]})}),(0,i.jsx)("main",{className:"contact-main",children:(0,i.jsxs)("div",{className:"contact-grid",children:[(0,i.jsx)("section",{className:"contact-info-section",children:(0,i.jsxs)("div",{className:"info-container",children:[(0,i.jsx)("h2",{children:"Get in Touch"}),(0,i.jsxs)("div",{className:"contact-info",children:[(0,i.jsxs)("div",{className:"info-item",children:[(0,i.jsx)("div",{className:"contact-info-icon",children:(0,i.jsxs)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]})}),(0,i.jsxs)("div",{className:"info-text",children:[(0,i.jsx)("h3",{children:"Address"}),(0,i.jsxs)("p",{children:["123 Savannah Street",(0,i.jsx)("br",{}),"Foodville, FK 12345"]})]})]}),(0,i.jsxs)("div",{className:"info-item",children:[(0,i.jsx)("div",{className:"contact-info-icon",children:(0,i.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})})}),(0,i.jsxs)("div",{className:"info-text",children:[(0,i.jsx)("h3",{children:"Phone"}),(0,i.jsx)("p",{children:"(123) 456-7890"})]})]}),(0,i.jsxs)("div",{className:"info-item",children:[(0,i.jsx)("div",{className:"contact-info-icon",children:(0,i.jsx)("svg",{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})})}),(0,i.jsxs)("div",{className:"info-text",children:[(0,i.jsx)("h3",{children:"Email"}),(0,i.jsx)("p",{children:"info@savannahbites.com"})]})]})]}),(0,i.jsx)("div",{className:"map-container",children:(0,i.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.789!2d-73.987!3d40.757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMCcyNS4yIk4gNzPCsDU5JzEzLjIiVw!5e0!3m2!1sen!2sus!4v1234567890",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade",title:"Restaurant Location"})})]})}),(0,i.jsx)("section",{className:"contact-form-section",children:(0,i.jsxs)("div",{className:"form-container",children:[(0,i.jsx)("h2",{children:"Send us a Message"}),(0,i.jsxs)("form",{onSubmit:a=>{a.preventDefault(),l(!0),setTimeout((()=>{console.log("Form submitted:",e),l(!1),o(!0),s({name:"",email:"",phone:"",subject:"",message:"",feedbackType:""}),setTimeout((()=>{o(!1)}),5e3)}),2e3)},className:"contact-form",children:[(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"name",children:"Full Name"}),(0,i.jsx)("input",{type:"text",id:"name",value:e.name,onChange:c,required:!0,placeholder:"Enter your full name"})]}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"email",children:"Email Address"}),(0,i.jsx)("input",{type:"email",id:"email",value:e.email,onChange:c,required:!0,placeholder:"Enter your email address"})]}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"phone",children:"Phone Number"}),(0,i.jsx)("input",{type:"tel",id:"phone",value:e.phone,onChange:c,placeholder:"(123) 456-7890"})]}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"feedbackType",children:"Feedback Type"}),(0,i.jsxs)("select",{id:"feedbackType",value:e.feedbackType,onChange:c,required:!0,children:[(0,i.jsx)("option",{value:"",children:"Select a type"}),(0,i.jsx)("option",{value:"general",children:"General Feedback"}),(0,i.jsx)("option",{value:"complaint",children:"Complaint"}),(0,i.jsx)("option",{value:"suggestion",children:"Suggestion"})]})]}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{htmlFor:"message",children:"Your Message"}),(0,i.jsx)("textarea",{id:"message",value:e.message,onChange:c,required:!0,placeholder:"Type your message here..."})]}),(0,i.jsx)("button",{type:"submit",disabled:a,className:"submit-button "+(a?"submitting":""),children:a?"Sending...":"Send Message"})]}),r&&(0,i.jsx)("div",{className:"success-alert",children:"Thank you for your message! We'll get back to you soon."})]})})]})})]})})}}}]);
//# sourceMappingURL=242.71f00774.chunk.js.map