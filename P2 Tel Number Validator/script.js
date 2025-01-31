const input = document.getElementById("phone");
const results = document.getElementById("output");
const checkBtn = document.getElementById("check");
const clearBtn = document.getElementById("clear");

     const nums = [
         /^1 \d{3}-\d{3}-\d{4}$/,
         /^1 \(\d{3}\) \d{3}-\d{4}$/,
         /^1\(\d{3}\)\d{3}-\d{4}$/,
         /^1 \d{3} \d{3} \d{4}$/,
         /^\d{10}$/,
         /^\d{3}-\d{3}-\d{4}$/,
         /^\(\d{3}\)\d{3}-\d{4}$/
     ];

     function clear() {
         input.value = "";
         results.innerText = "";
     }

     function check() {
         if (!input.value) {
             alert("Please provide a phone number");
             return;
         }
         
         let validNum = false;
         for (const expr of nums) {
             if (expr.test(input.value)) {
                 validNum = true;
                 break;
             }
         }

         results.innerHTML += `${validNum ? 'Valid' : 'Invalid'} US number: ${input.value}<br>`;
     }
     checkBtn.addEventListener("click", check);
     clearBtn.addEventListener("click", clear);
