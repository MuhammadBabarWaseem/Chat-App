import CryptoJS from "crypto-js";

const secretKey = "TH9NdPj4ZsmODxFK0mgwTZYpHXCICdx+8rQzRR4MaC90ghDiul4mcQfgy03ap9k=yGVk4noExmOXxTgLAx7HMEe1bVKB9L57MIY31fItM9E";

export const encryptMessage = (message: string) => {
  return CryptoJS.AES.encrypt(message, secretKey).toString();
};

export const decryptMessage = (cipherText: string) => {
  const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};