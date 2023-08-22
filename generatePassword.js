function generatePassword(length) {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const specialChars = "!@#$%^&*()_-+=<>?";
    const numericChars = "0123456789";
  
    const allChars = uppercaseChars + lowercaseChars + specialChars + numericChars;
  
    let password = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }
  
    return password;
  }
  
  const passwordLength = 10; // Change this to the desired password length
//   generating password 3 times
  console.log("Generated Password:", generatePassword(passwordLength));
  console.log("Generated Password:", generatePassword(passwordLength));
  console.log("Generated Password:", generatePassword(passwordLength));
  