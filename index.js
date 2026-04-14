function hashing(password) {

  let chachters = "aAbBcCdD1eEfFgGh0H2iIjJkK3lLmMnN7o4Op8PkKq9QrS5stTuUvVw6WxXyYzZ";

  let value = "";
 for (let i = 0; i < password.length; i++) {
    const a = password[i].charCodeAt(0) + 1 ;
    const b = String.fromCharCode(a)
    value += b
    console.log(value);
    for (let x = 0; x < 3; x++) {
        value += chachters[Math.floor(Math.random() * chachters.length)];
  }}
  return value;
};
console.log(hashing("aman saluja @.com 9079 😎 रोस"))
function decrypt(encryptedPassword) {
    let password = "";
    
    for (let i = 0; i < encryptedPassword.length; i) {
        password += String.fromCharCode(encryptedPassword[i].charCodeAt(0) - 1);
        i = i+4;
    }

    return password;
};

console.log(decrypt('bkc2ni04bcKJoLVs!bAkt8F2bCiJmKqjvs0XkUSnbMIj!3JvA1sU/KJzdVTkpXwwna5V!KdK:Ldz1Bqr8BXQ:7TU!Xtp�cGe�Fji!HBVऱSVkौN0UहnYr'))
console.log(decrypt('bkc2ni04bcKJoLVs!bAkt8F2bCiJmKqjvs0XkUSnbMIj!3JvA1sU/KJzdVTkpXwwna5V!KdK:Ldz1Bqr8BXQ:7TU!Xtp�cGe�Fji!HBVऱSVkौN0UहnYr'))
console.log(decrypt('bkc2ni04bcKJoLVs!bAkt8F2bCiJmKqjvs0XkUSnbMIj!3JvA1sU/KJzdVTkpXwwna5V!KdK:Ldz1Bqr8BXQ:7TU!Xtp�cGe�Fji!HBVऱSVkौN0UहnYr'))
console.log(decrypt('bkc2ni04bcKJoLVs!bAkt8F2bCiJmKqjvs0XkUSnbMIj!3JvA1sU/KJzdVTkpXwwna5V!KdK:Ldz1Bqr8BXQ:7TU!Xtp�cGe�Fji!HBVऱSVkौN0UहnYr'))
console.log(decrypt('bkc2ni04bcKJoLVs!bAkt8F2bCiJmKqjvs0XkUSnbMIj!3JvA1sU/KJzdVTkpXwwna5V!KdK:Ldz1Bqr8BXQ:7TU!Xtp�cGe�Fji!HBVऱSVkौN0UहnYr'))
console.log(decrypt('bkc2ni04bcKJoLVs!bAkt8F2bCiJmKqjvs0XkUSnbMIj!3JvA1sU/KJzdVTkpXwwna5V!KdK:Ldz1Bqr8BXQ:7TU!Xtp�cGe�Fji!HBVऱSVkौN0UहnYr'))
console.log(decrypt('bkc2ni04bcKJoLVs!bAkt8F2bCiJmKqjvs0XkUSnbMIj!3JvA1sU/KJzdVTkpXwwna5V!KdK:Ldz1Bqr8BXQ:7TU!Xtp�cGe�Fji!HBVऱSVkौN0UहnYr'))
console.log(decrypt('bkc2ni04bcKJoLVs!bAkt8F2bCiJmKqjvs0XkUSnbMIj!3JvA1sU/KJzdVTkpXwwna5V!KdK:Ldz1Bqr8BXQ:7TU!Xtp�cGe�Fji!HBVऱSVkौN0UहnYr'))
console.log(decrypt('bkc2ni04bcKJoLVs!bAkt8F2bCiJmKqjvs0XkUSnbMIj!3JvA1sU/KJzdVTkpXwwna5V!KdK:Ldz1Bqr8BXQ:7TU!Xtp�cGe�Fji!HBVऱSVkौN0UहnYr'))
console.log(decrypt('bkc2ni04bcKJoLVs!bAkt8F2bCiJmKqjvs0XkUSnbMIj!3JvA1sU/KJzdVTkpXwwna5V!KdK:Ldz1Bqr8BXQ:7TU!Xtp�cGe�Fji!HBVऱSVkौN0UहnYr'))
console.log(decrypt('bkc2ni04bcKJoLVs!bAkt8F2bCiJmKqjvs0XkUSnbMIj!3JvA1sU/KJzdVTkpXwwna5V!KdK:Ldz1Bqr8BXQ:7TU!Xtp�cGe�Fji!HBVऱSVkौN0UहnYr'))
console.log(decrypt('bkc2ni04bcKJoLVs!bAkt8F2bCiJmKqjvs0XkUSnbMIj!3JvA1sU/KJzdVTkpXwwna5V!KdK:Ldz1Bqr8BXQ:7TU!Xtp�cGe�Fji!HBVऱSVkौN0UहnYr'))




