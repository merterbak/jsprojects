const text = document.getElementById("palindrome").value;
    const output = document.getElementById("output");

function checkPalindrome() {
    
    
    const reversed = text.split("").reverse().join("");
    const isPalindrome = text === reversed && text.length > 0;
    
    output.textContent = isPalindrome ? `"${text}" is a palindrome` : `"${text}" is not a palindrome.`; //eğitimlerdeki tenary operatoru
}

document.getElementById("check").addEventListener("click", checkPalindrome);