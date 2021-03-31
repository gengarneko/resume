// ! parcel will cause fs.readFile undefined
// * sooooo... prebuild the data

import { ensureFileSync, writeJSONSync } from 'fs-extra'
import path from 'path'
import { parseMd } from '#/utils/md-simple-parse'

// * ----------------

const root = process.cwd()

const writeData = (data: any, file: string) => {
  ensureFileSync(file)
  writeJSONSync(file, data, { spaces: 2 })
}

// * ---------------- zh

const fileZH = path.resolve(root, './resume/resume-zh.md')
const outputZH = path.resolve(root, './src/data/data-zh.json')

export const dataZH = {
  time: new Date().toString(),
  meta: {
    author: 'Chen LIN',
    keywords: '简历, 前端, javascript, typescript, 开发, 工程师',
    subject: 'Chen LIN 的简历',
    title: '简历'
  },
  repo: {
    label: '欢迎访问我的 Notion',
    link: 'https://www.notion.so/hentaimiao/Technical-Article-012936da64b4406d987f926f2e7c1ce0'
  },
  ...parseMd(fileZH)
}

writeData(dataZH, outputZH)
