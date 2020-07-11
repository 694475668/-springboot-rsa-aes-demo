/**
 *Ŀǰcrypto-js��֧�ֵ��㷨�У�MD5,SHA-1,SHA-256,AES,Rabbit,
 * MARC4,HMAC,HMAC-MD5,HMAC-SHA1,HMAC-SHA256,PBKDF2��
 * ���õļ��ܷ�ʽ��MD5��AES��ʹ��ʱ�����������ļ���Ҳ���Ե�������ĳһ�ļ�
 * @param word
 * @param encodeRule
 * @returns {string}
 * @constructor
 */


//AES����
function AESEncrypt(word, encodeRule) {
    var key = CryptoJS.enc.Utf8.parse(encodeRule);
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var resultByte = CryptoJS.AES.encrypt(srcs, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});
    return resultByte.toString();
}

//AES����
function AESDecrypt(word, encodeRule) {
    var key = CryptoJS.enc.Utf8.parse(encodeRule);
    var resultByte = CryptoJS.AES.decrypt(word, key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});
    return CryptoJS.enc.Utf8.stringify(resultByte).toString()
}