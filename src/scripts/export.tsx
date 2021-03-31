import React, { FC } from 'react'

import path from 'path'
import ReactPDF from '@react-pdf/renderer'
import { ResumeContentZh } from '#/components/index-zh'

import * as fontlist from '#/fonts/fontlist-for-export'
import { runFontRegister } from '#/fonts/font-register'

// * ---------------- font

runFontRegister(fontlist)

// * ---------------- render zh

const distZH = path.resolve(process.cwd(), './resume/resume-zh.pdf')
console.log('export:', distZH)
ReactPDF.renderToFile(<ResumeContentZh />, distZH)
