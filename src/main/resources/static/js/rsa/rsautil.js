//ǰ��ͨ����ȡ��˹�Կ����RSA����  (ǰ�˹�Կ���ܣ����˽Կ����)
function RSAEncrypt(word, publicKey) {
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    var data = encrypt.encrypt(word);
    return data;
}

//ǰ��ͨ����ȡ���˽Կ����RSA���� (ǰ��˽Կ���ܣ���˹�Կ����)
function RSAEncryptByFrontEnd(word, privateKey) {
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey(privateKey);
    var data = encrypt.decrypt(word);
    return data;
}

//ǰ��ͨ����ȡ���˽Կ����RSA���� (ǰ��˽Կ���ܣ���˹�Կ����)
function RSADecryptByFrontEnd(word, privateKey) {
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey(privateKey);
    var data = encrypt.encrypt(word);
    return data;
}

//RSA����
function RSADecrypt(word, privateKey) {
    var encrypt = new JSEncrypt();
    encrypt.setPrivateKey(privateKey);
    var data = encrypt.decrypt(word);
    return data;
}