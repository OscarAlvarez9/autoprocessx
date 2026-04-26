"use client"

import React, { useEffect, useRef, useState } from "react"

interface FrameCanvasProps {
  frameCount: number
  framePrefix: string
  frameExtension: string
  fps?: number
  className?: string
}

const FrameCanvas: React.FC<FrameCanvasProps> = ({
  frameCount,
  framePrefix,
  frameExtension,
  fps,
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [images, setImages] = useState<HTMLImageElement[]>([])
  const [loading, setLoading] = useState(true)
  const frameIndexRef = useRef(0)
  const requestIdRef = useRef<number>(0)

  useEffect(() => {
    let loadedCount = 0
    const loadedImages: HTMLImageElement[] = []

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image()
      // Format index with leading zeros if necessary (ezgif usually starts at 001)
      const frameIndex = i.toString().padStart(3, "0")
      img.src = `${framePrefix}${frameIndex}.${frameExtension}`
      img.onload = () => {
        loadedCount++
        if (loadedCount === frameCount) {
          setImages(loadedImages)
          setLoading(false)
        }
      }
      loadedImages.push(img)
    }

    return () => {
      if (requestIdRef.current) {
        cancelAnimationFrame(requestIdRef.current)
      }
    }
  }, [frameCount, framePrefix, frameExtension])

  useEffect(() => {
    if (images.length === frameCount) {
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      let lastTime = 0
      const fpsTransition = 1000 / (fps || 30) // Default 30fps

      const render = (time: number) => {
        if (time - lastTime >= fpsTransition) {
          const img = images[frameIndexRef.current]
          if (img) {
            if (canvas.width !== img.width || canvas.height !== img.height) {
              canvas.width = img.width
              canvas.height = img.height
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
          }

          frameIndexRef.current = (frameIndexRef.current + 1) % frameCount
          lastTime = time
        }
        requestIdRef.current = requestAnimationFrame(render)
      }

      requestIdRef.current = requestAnimationFrame(render)
    }
  }, [images, frameCount])

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-transparent">
          <div className="w-8 h-8 border-2 border-amber-500/20 border-t-amber-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <canvas
          ref={canvasRef}
          className="w-full h-full object-contain pointer-events-none"
        />
      )}
    </div>
  )
}

export default FrameCanvas
