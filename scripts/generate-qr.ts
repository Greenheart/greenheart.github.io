#!/usr/bin/env node

import QRCode from 'qrcode'
import { writeFile } from 'fs/promises'

/**
 * USAGE:
 *
 * 1. Change the variables
 * 2. Run `node scripts/generate-qr.js`
 * 3. Move file to static dir and use on site or use where it's needed
 */
const TARGET_URL = 'https://example.com'
const FILENAME = './qr.svg'

const output = await QRCode.toString(TARGET_URL, { type: 'svg' })

await writeFile(FILENAME, output, { encoding: 'utf-8' })

console.log(`✅ Generated QR code for ${TARGET_URL} and saved as ${FILENAME}`)
