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

import autism1 from './autism/1.webp'
import autism2 from './autism/2.webp'
import autism3 from './autism/3.webp'
import autism4 from './autism/4.webp'
import autism5 from './autism/5.webp'
import autism6 from './autism/6.webp'
import autism7 from './autism/7.webp'

import claro1 from './claro/1.webp'
import claro2 from './claro/2.webp'
import claro3 from './claro/3.webp'
import claro4 from './claro/4.webp'

import leitner1 from './leitner/1.webp'
import leitner2 from './leitner/2.webp'
import leitner3 from './leitner/3.webp'
import leitner4 from './leitner/4.webp'
import leitner5 from './leitner/5.webp'
import leitner6 from './leitner/6.webp'
import leitner7 from './leitner/7.webp'
import leitner8 from './leitner/8.webp'
import leitner9 from './leitner/9.webp'

import flashcard1 from './flashcard/1.webp'
import flashcard2 from './flashcard/2.webp'
import flashcard3 from './flashcard/3.webp'
import flashcard4 from './flashcard/4.webp'
import flashcard5 from './flashcard/5.webp'
import flashcard6 from './flashcard/6.webp'
import flashcard7 from './flashcard/7.webp'

const code = [code1, code2, code3, code4, code5, code6, code7, code8, code9, code10, code11, code12, code13, code14]
const codeSlides = code.map((imgPath) => ({ imgPath }))

const alter = [alter1, alter2, alter3]
const alterSlides = alter.map((imgPath) => ({ imgPath }))

const tsa = [tsa1, tsa2, tsa3, tsa4, tsa5, tsa6, tsa7, tsa8, tsa9]
const tsaSlides = tsa.map((imgPath) => ({ imgPath }))

const autism = [autism1, autism2, autism3, autism4, autism5, autism6, autism7]
const autismSlides = autism.map((imgPath) => ({ imgPath }))

const claro = [claro1, claro2, claro3, claro4]
const claroSlides = claro.map((imgPath) => ({ imgPath }))

const leitner = [leitner1, leitner2, leitner3, leitner4, leitner5, leitner6, leitner7, leitner8, leitner9]
const leitnerSlides = leitner.map((imgPath) => ({ imgPath }))

const flashcard = [flashcard1, flashcard2, flashcard3, flashcard4, flashcard5, flashcard6, flashcard7]
const flashcardSlides = flashcard.map((imgPath) => ({ imgPath }))

export { codeSlides, alterSlides, tsaSlides,  claroSlides, leitnerSlides, flashcardSlides, autismSlides }
