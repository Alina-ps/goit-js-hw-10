import"./assets/styles-90581280.js";import{i as o}from"./assets/vendor-77e16229.js";const s=document.querySelector(".form");s.addEventListener("submit",r=>{r.preventDefault();const t=parseInt(s.elements.delay.value),i=s.elements.state.value;new Promise((e,l)=>{setTimeout(()=>{i==="fulfilled"?e(`Fulfilled promise in ${t}ms`):l(`Rejected promise in ${t}ms`)},t)}).then(e=>{o.success({title:"Success",message:e,backgroundColor:"#59A10D"})}).catch(e=>{o.error({title:"Error",message:e,backgroundColor:"#EF4040"})}),s.reset()});
//# sourceMappingURL=commonHelpers2.js.map
