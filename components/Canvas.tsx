import { useRef, useEffect } from 'react'

const Canvas = () => {
    const canvasRef = useRef(null)

    const draw = (ctx: any) => {
        
      }
      
      useEffect(() => {
        
        const canvas: any = canvasRef.current
        const context = canvas.getContext('2d')
        
        const render = () => {
          draw(context)
        }
        render()
      
      }, [])

    return <canvas style={{ position: 'absolute', top: 0, right: 0 }} ref={canvasRef} />
}

export default Canvas;