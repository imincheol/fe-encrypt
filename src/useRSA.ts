// const NodeRSA = require('node-rsa') // 모듈 import 
import NodeRSA from 'node-rsa' // 모듈 import 

const PUBLIC_KEY = ''
const PRIVATE_KEY = ''

const useRSA = () => {
    // 공개키 format.
    const getPublicKey = (key:string) => {
        return `-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC41wsMRbC4M4zkWYPI85WwYttE\ngbLQmIiHD4g6Kjz43h0+3rgt8m6IJtolraHpIus+izEx03kpYgJiTLAdruQBDqXT\ngTyIafZpLaZxH8kYVTomfjJLzqTbxuHz1uLqqOaeLzvKiKbCbbCaKWolgCQOCUu+\nrj/qdftchEVq/LcCcwIDAQAB\n-----END PUBLIC KEY-----`
        // return `-----BEGIN PUBLIC KEY-----
        //         ${key}
        //         -----END PUBLIC KEY-----`
    }

    // 비밀키 format
    const getPrivateKey = (key:string) => {
        return `-----BEGIN RSA PRIVATE KEY-----\nMIICXAIBAAKBgQC41wsMRbC4M4zkWYPI85WwYttEgbLQmIiHD4g6Kjz43h0+3rgt\n8m6IJtolraHpIus+izEx03kpYgJiTLAdruQBDqXTgTyIafZpLaZxH8kYVTomfjJL\nzqTbxuHz1uLqqOaeLzvKiKbCbbCaKWolgCQOCUu+rj/qdftchEVq/LcCcwIDAQAB\nAoGAbIo6fpZd04zR6zV1YYdIGy+xumS+8Cbh5Q2F3UH4U9t6KPT4CmMV7PWDnCR9\nsz1CDpQF61BXEanv5HFL6eJNGCH20z4SctlnMZCw0CJvel4tue4mVmAORctXfcy8\nA9gXpP2D3+tWInSRjZqDZt95ca6N5htlf99a7dcebh7xQkECQQDl/KChwiHw4nBk\nGuDlRp1G7TdP5chBDccdS0655957ZJCROcrjglfJobaGNFsjhoEyWPMl+Ywbt6IZ\n1FV7Z0FbAkEAzb8rVjhuiUurkf9boO2gq1EBMhNULJJHZOB50dpXiD8LvzWcBzvm\nYPppsMYUNS35ItaqXpvQLYswyIA3Seq2yQJAPen7qHBlyL58+UYPI0oWTyDPUjAO\n8AxwfR9n6z5Ts65ICQCg8QyG654gUBLKMk8ketRdaOy8Xj3aYs+5z4XlnwJABlxE\nkLPJ5wCp2yeTw5PVBbbJXKzwSzhycJHn8i7XyeR5Dn4vxqF5a8ISBl75PPOg4gzU\n03vpoZ7N8UTVcLmK0QJBAN4B3D/iBTce6Q5q3Apza8jzMS5ZZjh4Y8/A9K6IiQ54\nkul2tfIVywHVFoxJzGm4JMkHSf7yoVjsjEDpQvKMnIk=\n-----END RSA PRIVATE KEY-----`
        // return `-----BEGIN PRIVATE KEY-----
        //         ${key}
        //         -----END PRIVATE KEY-----`
    }

    // 암호화
    const encrypt = (val: string): string => {
        const publicKey = getPublicKey(PUBLIC_KEY)
        const key = new NodeRSA(publicKey)
        key.setOptions({encryptionScheme: 'pkcs1'})
        const encryptedText = key.encrypt(val, 'base64')
        return encryptedText
    }

    // 복호화
    const decrypt = (val: string): string => {
        const privateKey = getPrivateKey(PRIVATE_KEY)
        const key = new NodeRSA(privateKey)
        key.setOptions({encryptionScheme: 'pkcs1'})
        const descryptedText = key.decrypt(val, 'utf8')
        return descryptedText
    }

    return {encrypt, decrypt}
}

export default useRSA