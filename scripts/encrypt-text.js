#!/usr/bin/env node

// @ts-nocheck
import 'dotenv/config'
import { base64 } from 'rfc4648'

async function loadCrypto() {
    const cryptoLocal = await import('crypto')
    return cryptoLocal.webcrypto
}

const crypto = await loadCrypto()

/**
 * Encrypt a string and turn it into an encrypted payload.
 *
 * @param {string} content The data to encrypt
 * @param {string} password The password which will be used to encrypt + decrypt the content.
 * @returns an encrypted payload
 */
 export async function getEncryptedPayload(content, password) {
    const encoder = new TextEncoder()
    const salt = crypto.getRandomValues(new Uint8Array(32))
    const baseKey = await crypto.subtle.importKey(
        'raw',
        encoder.encode(password),
        'PBKDF2',
        false,
        ['deriveKey'],
    )
    const key = await crypto.subtle.deriveKey(
        { name: 'PBKDF2', salt, iterations: 2e5, hash: 'SHA-256' },
        baseKey,
        { name: 'AES-GCM', length: 256 },
        false,
        ['encrypt'],
    )

    const iv = crypto.getRandomValues(new Uint8Array(16))
    const ciphertext = new Uint8Array(
        await crypto.subtle.encrypt(
            { name: 'AES-GCM', iv },
            key,
            encoder.encode(content),
        ),
    )
    const totalLength = salt.length + iv.length + ciphertext.length
    const mergedData = new Uint8Array(totalLength)
    mergedData.set(salt)
    mergedData.set(iv, salt.length)
    mergedData.set(ciphertext, salt.length + iv.length)

    return base64.stringify(mergedData)
}


const text = process.env.VITE_EMAIL
const pwd = process.env.VITE_PASSWORD

const pl = await getEncryptedPayload(text, pwd)

console.log(pl)