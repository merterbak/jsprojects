function convertHTMLRegex(str) {
  const htmlEntities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };
  return str.replace(/[&<>"']/g, match => htmlEntities[match]);
}

console.log(convertHTMLRegex("Dolce & Gabbana"));