"use strict";(self.webpackChunksavannah_bites=self.webpackChunksavannah_bites||[]).push([[60],{60:(e,s,i)=>{i.r(s),i.d(s,{default:()=>m});var r=i(5043),a=i(3216),l=i(6213),n=i(1991),d=i(579);const c=()=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h1",{children:"Cooking in progress.."}),(0,d.jsxs)("div",{id:"cooking",children:[(0,d.jsx)("div",{className:"bubble"}),(0,d.jsx)("div",{className:"bubble"}),(0,d.jsx)("div",{className:"bubble"}),(0,d.jsx)("div",{className:"bubble"}),(0,d.jsx)("div",{className:"bubble"}),(0,d.jsxs)("div",{id:"area",children:[(0,d.jsxs)("div",{id:"sides",children:[(0,d.jsx)("div",{id:"pan"}),(0,d.jsx)("div",{id:"handle"})]}),(0,d.jsx)("div",{id:"pancake",children:(0,d.jsx)("div",{id:"pastry"})})]})]})]}),t="http://10.77.228.19:5000/api",o=l.A.create({baseURL:t.endsWith("/api")?t:`${t}/api`,withCredentials:!0,headers:{"Content-Type":"application/json"}}),m=()=>{var e,s,i,l,t,m,h,v,p,x,j,u,N,g,b,f,y;const I=(0,a.zy)(),S=(0,a.Zp)(),[w,k]=(0,r.useState)(null),[D,C]=(0,r.useState)(!0),[F,T]=(0,r.useState)(null),A=(null===(e=I.state)||void 0===e?void 0:e.orderId)||sessionStorage.getItem("orderId"),E=(null===(s=I.state)||void 0===s?void 0:s.paymentIntentId)||sessionStorage.getItem("paymentIntentId");(0,r.useEffect)((()=>{window.scrollTo(0,0)}),[]),(0,r.useEffect)((()=>{const e=()=>{sessionStorage.removeItem("paymentSuccess"),sessionStorage.removeItem("orderId"),sessionStorage.removeItem("paymentIntentId")};return(async()=>{try{if(!A)return console.log("No order ID provided, redirecting to home"),e(),void S("/");console.log("Fetching order details for ID:",A);const s=await o.get(`/orders/${A}`);if(!s.data||!s.data.order)throw new Error("Invalid response format from server");k(s.data.order),e()}catch(F){var s,i;console.error("Error fetching order details:",F),T((null===(s=F.response)||void 0===s||null===(i=s.data)||void 0===i?void 0:i.message)||F.message||"Failed to load order details")}finally{setTimeout((()=>{C(!1)}),5e3)}})(),e}),[A,S]);return D?(0,d.jsx)("div",{className:"loading-container",role:"status",children:(0,d.jsx)(c,{})}):F?(0,d.jsxs)("div",{className:"error-container",role:"alert",children:[(0,d.jsx)("h2",{children:"Error Loading Order"}),(0,d.jsx)("p",{className:"error-message",children:F}),(0,d.jsx)("button",{onClick:()=>S("/"),className:"return-button",children:"Return to Home"})]}):w?(0,d.jsxs)("div",{className:"confirmation-container",children:[(0,d.jsx)(n.A,{currentStep:3}),(0,d.jsxs)("div",{className:"confirmation-header",children:[(0,d.jsx)("h1",{children:"Order Confirmation"}),(0,d.jsxs)("div",{className:"status-badge","data-status":null===(i=w.orderStatus)||void 0===i||null===(l=i.current)||void 0===l?void 0:l.toLowerCase(),children:[(0,d.jsx)("div",{className:"success-icon",children:"\u2713"}),(0,d.jsx)("p",{className:"confirmation-message",children:"Thank you for your order! A confirmation email has been sent to:"}),(0,d.jsx)("p",{className:"customer-email",children:null===(t=w.customer)||void 0===t?void 0:t.email}),(0,d.jsxs)("div",{className:"order-info",children:[(0,d.jsxs)("p",{className:"confirmation-id",children:["Order ID: ",A]}),E&&(0,d.jsxs)("p",{className:"payment-id",children:["Payment ID: ",E]}),(0,d.jsxs)("p",{className:"order-status",children:["Status: ",(null===(m=w.orderStatus)||void 0===m?void 0:m.current)||"Processing"]})]})]})]}),(0,d.jsxs)("div",{className:"confirmation-content",children:[(0,d.jsxs)("div",{className:"customer-info section",children:[(0,d.jsx)("h2",{children:"Customer Information"}),(0,d.jsxs)("div",{className:"info-grid",children:[(0,d.jsxs)("div",{className:"info-item",children:[(0,d.jsx)("span",{className:"label",children:"Name:"}),(0,d.jsx)("span",{className:"value",children:null===(h=w.customer)||void 0===h?void 0:h.name})]}),(0,d.jsxs)("div",{className:"info-item",children:[(0,d.jsx)("span",{className:"label",children:"Phone:"}),(0,d.jsx)("span",{className:"value",children:null===(v=w.customer)||void 0===v?void 0:v.phone})]}),(0,d.jsxs)("div",{className:"info-item",children:[(0,d.jsx)("span",{className:"label",children:"Email:"}),(0,d.jsx)("span",{className:"value",children:null===(p=w.customer)||void 0===p?void 0:p.email})]})]})]}),(0,d.jsxs)("div",{className:"delivery-info section",children:[(0,d.jsx)("h2",{children:"Delivery Information"}),(0,d.jsxs)("div",{className:"info-grid",children:[(0,d.jsxs)("div",{className:"info-item",children:[(0,d.jsx)("span",{className:"label",children:"Delivery Time:"}),(0,d.jsx)("span",{className:"value",children:(e=>{if(!e)return"Not specified";try{return new Date(e).toLocaleString("en-GB",{dateStyle:"medium",timeStyle:"short"})}catch(F){return console.error("Date formatting error:",F),e}})(null===(x=w.deliveryTime)||void 0===x?void 0:x.requested)})]}),(0,d.jsxs)("div",{className:"address-details",children:[(0,d.jsx)("span",{className:"label",children:"Delivery Address:"}),(0,d.jsxs)("div",{className:"value",children:[(0,d.jsx)("p",{children:null===(j=w.address)||void 0===j?void 0:j.street}),(0,d.jsxs)("p",{children:[null===(u=w.address)||void 0===u?void 0:u.city,", ",null===(N=w.address)||void 0===N?void 0:N.postcode]})]})]}),w.specialInstructions&&(0,d.jsxs)("div",{className:"special-instructions",children:[(0,d.jsx)("span",{className:"label",children:"Special Instructions:"}),(0,d.jsx)("p",{className:"value",children:w.specialInstructions})]})]})]}),(0,d.jsxs)("div",{className:"order-details section",children:[(0,d.jsx)("h2",{children:"Order Summary"}),(0,d.jsx)("div",{className:"items-grid",children:(null===(g=w.orderDetails)||void 0===g?void 0:g.length)>0?w.orderDetails.map(((e,s)=>(0,d.jsxs)("div",{className:"order-item",children:[(0,d.jsxs)("div",{className:"item-header",children:[(0,d.jsx)("h3",{children:e.name}),e.size&&(0,d.jsx)("span",{className:"item-size",children:e.size})]}),(0,d.jsxs)("div",{className:"item-details",children:[(0,d.jsxs)("span",{className:"quantity",children:["Qty: ",e.quantity]}),(0,d.jsxs)("span",{className:"price",children:["\xa3",(e.price*e.quantity).toFixed(2)]})]})]},`${e._id||e.id}-${s}`))):(0,d.jsx)("p",{className:"no-items",children:"No items found in this order."})}),(0,d.jsx)("div",{className:"price-summary",children:(0,d.jsxs)("div",{className:"price-breakdown",children:[(0,d.jsxs)("div",{className:"price-row",children:[(0,d.jsx)("span",{children:"Subtotal:"}),(0,d.jsxs)("span",{children:["\xa3",null===(b=w.amount)||void 0===b?void 0:b.subtotal.toFixed(2)]})]}),(0,d.jsxs)("div",{className:"price-row",children:[(0,d.jsx)("span",{children:"Delivery Fee:"}),(0,d.jsxs)("span",{children:["\xa3",null===(f=w.amount)||void 0===f?void 0:f.deliveryFee.toFixed(2)]})]}),(0,d.jsxs)("div",{className:"price-row total",children:[(0,d.jsx)("span",{children:"Total Amount:"}),(0,d.jsxs)("span",{children:["\xa3",null===(y=w.amount)||void 0===y?void 0:y.total.toFixed(2)]})]})]})})]}),(0,d.jsxs)("div",{className:"next-steps section",children:[(0,d.jsx)("h2",{children:"What's Next?"}),(0,d.jsxs)("div",{className:"steps-list",children:[(0,d.jsxs)("div",{className:"step",children:[(0,d.jsx)("span",{className:"step-number",children:"1"}),(0,d.jsx)("p",{children:"You'll receive an email confirmation shortly"})]}),(0,d.jsxs)("div",{className:"step",children:[(0,d.jsx)("span",{className:"step-number",children:"2"}),(0,d.jsx)("p",{children:"We'll start preparing your order"})]}),(0,d.jsxs)("div",{className:"step",children:[(0,d.jsx)("span",{className:"step-number",children:"3"}),(0,d.jsx)("p",{children:"Your order will be delivered at the selected time"})]})]})]}),(0,d.jsx)("div",{className:"actions section",children:(0,d.jsx)("button",{onClick:()=>S("/"),className:"return-home-button",children:"Return to Home"})})]})]}):(0,d.jsxs)("div",{className:"error-container",role:"alert",children:[(0,d.jsx)("h2",{children:"Order Not Found"}),(0,d.jsx)("p",{children:"We couldn't find the order details you're looking for."}),(0,d.jsx)("button",{onClick:()=>S("/"),className:"return-button",children:"Return to Home"})]})}},1991:(e,s,i)=>{i.d(s,{A:()=>a});i(5043);var r=i(579);const a=e=>{let{currentStep:s}=e;return(0,r.jsxs)("div",{className:"progress-steps",children:[(0,r.jsxs)("div",{className:"progress-step-wrapper",children:[(0,r.jsxs)("div",{className:"progress-step-container",children:[(0,r.jsx)("div",{className:"progress-step-circle "+(s>=1?"active":""),children:"1"}),(0,r.jsx)("div",{className:"progress-line "+(s>=2?"active":"")})]}),(0,r.jsx)("span",{className:"progress-step-label",children:"Order Details"})]}),(0,r.jsxs)("div",{className:"progress-step-wrapper",children:[(0,r.jsxs)("div",{className:"progress-step-container",children:[(0,r.jsx)("div",{className:"progress-step-circle "+(s>=2?"active":""),children:"2"}),(0,r.jsx)("div",{className:"progress-line "+(s>=3?"active":"")})]}),(0,r.jsx)("span",{className:"progress-step-label",children:"Payment"})]}),(0,r.jsxs)("div",{className:"progress-step-wrapper",children:[(0,r.jsx)("div",{className:"progress-step-container",children:(0,r.jsx)("div",{className:"progress-step-circle "+(s>=3?"active":""),children:"3"})}),(0,r.jsx)("span",{className:"progress-step-label",children:"Confirmation"})]})]})}}}]);
//# sourceMappingURL=60.7434436e.chunk.js.map