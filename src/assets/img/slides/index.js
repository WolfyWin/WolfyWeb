import code1 from './cd/1.png'
import code2 from './cd/2.png'
import code3 from './cd/3.png'
import code4 from './cd/4.png'
import code5 from './cd/5.png'
import code6 from './cd/6.png'
import code7 from './cd/7.png'
import code8 from './cd/8.png'
import code9 from './cd/9.png'
import code10 from './cd/10.png'
import code11 from './cd/11.png'
import code12 from './cd/12.png'
import code13 from './cd/13.png'
import code14 from './cd/14.png'

import alter1 from './alterlms/1.jpg'
import alter2 from './alterlms/2.jpg'
import alter3 from './alterlms/3.jpg'

const code = [code1, code2, code3, code4, code5, code6, code7, code8, code9, code10, code11, code12, code13, code14]
const codeSlides = code.map((imgPath) => ({ imgPath }))

const alter = [alter1, alter2, alter3]
const alterSlides = alter.map((imgPath) => ({ imgPath }))

export { codeSlides, alterSlides}