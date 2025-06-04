import code1 from './cd/1.webp'
import code2 from './cd/2.webp'
import code3 from './cd/3.webp'
import code4 from './cd/4.webp'
import code5 from './cd/5.webp'
import code6 from './cd/6.webp'
import code7 from './cd/7.webp'
import code8 from './cd/8.webp'
import code9 from './cd/9.webp'
import code10 from './cd/10.webp'
import code11 from './cd/11.webp'
import code12 from './cd/12.webp'
import code13 from './cd/13.webp'
import code14 from './cd/14.webp'

import alter1 from './alterlms/1.webp'
import alter2 from './alterlms/2.webp'
import alter3 from './alterlms/3.webp'

import tsa1 from './tsa/1.webp'
import tsa2 from './tsa/2.webp'
import tsa3 from './tsa/3.webp'
import tsa4 from './tsa/4.webp'
import tsa5 from './tsa/5.webp'
import tsa6 from './tsa/6.webp'
import tsa7 from './tsa/7.webp'
import tsa8 from './tsa/8.webp'
import tsa9 from './tsa/9.webp'

import claro1 from './claro/1.webp'
import claro2 from './claro/2.webp'
import claro3 from './claro/3.webp'
import claro4 from './claro/4.webp'

const code = [code1, code2, code3, code4, code5, code6, code7, code8, code9, code10, code11, code12, code13, code14]
const codeSlides = code.map((imgPath) => ({ imgPath }))

const alter = [alter1, alter2, alter3]
const alterSlides = alter.map((imgPath) => ({ imgPath }))

const tsa = [tsa1, tsa2, tsa3, tsa4, tsa5, tsa6, tsa7, tsa8, tsa9]
const tsaSlides = tsa.map((imgPath) => ({ imgPath }))

const claro = [claro1, claro2, claro3, claro4]
const claroSlides = claro.map((imgPath) => ({ imgPath }))

export { codeSlides, alterSlides, tsaSlides,  claroSlides }
