import React from 'react'

const ScrollText = () => {
    return (
        <div className='mt-3 relative text-[2vh] font-cabin'>
            {['S', 'C', 'R', 'O', 'L', 'L'].map((letter, index) => (
                <span 
                    key={index} 
                    className={`inline-block text-accent tracking-widest animate-jump`}
                    style={{ animationDelay: `${index * 0.1 + 3}s` }}
                >
                    {letter}
                </span>
            ))}
        </div>
    )
}

export default ScrollText