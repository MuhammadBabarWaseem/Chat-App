import CryptoJS from "crypto-js";

const secretKey = "TH9NdPj4ZsmODxFK0mgw";

export const encryptMessage = (message: string) => {
  return CryptoJS.AES.encrypt(message, secretKey).toString();
};

export const decryptMessage = (cipherText: string) => {
  const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};