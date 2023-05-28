import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Terminal = () => {
  return (
    <div className="terminal">
      <TypeAnimation
        style={{ whiteSpace: 'pre-line', height: '195px', display: 'block', fontSize: '20px' }}
        sequence={[
          `wolfy@web:~$ cd my-portfolio`,
          1000,          
          `wolfy@web:~$ cd my-portfolio\nwolfy@web:~/my-porfolio$ echo "Hello World !"`,
          1000,
          `wolfy@web:~$ cd my-portfolio\nwolfy@web:~/my-porfolio$ echo "Hello World !"\nHello World !`,
          1000,
        ]}
        repeat={Infinity}
      />
    </div>
  )
}

export { Terminal }
