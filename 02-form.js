import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */function o(t){const e=t.currentTarget,a={email:e.email.value,message:e.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(a))}function r(){const t=localStorage.getItem("feedback-form-state");if(t){const{email:e,message:a}=JSON.parse(t);document.querySelector('input[name="email"]').value=e||"",document.querySelector('textarea[name="message"]').value=a||""}}function m(t){t.preventDefault();const e=t.currentTarget,a={email:e.email.value,message:e.message.value};console.log(a),localStorage.removeItem("feedback-form-state"),e.reset()}document.querySelector(".feedback-form").addEventListener("input",o);document.querySelector(".feedback-form").addEventListener("submit",m);window.addEventListener("DOMContentLoaded",r);
//# sourceMappingURL=02-form.js.map
