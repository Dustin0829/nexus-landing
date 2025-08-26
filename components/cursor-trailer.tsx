"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface CursorTrail {
  id: number
  x: number
  y: number
  opacity: number
  scale: number
  rotation: number
}

export function CursorTrailer() {
  const [cursorTrails, setCursorTrails] = useState<CursorTrail[]>([])
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 200, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 200, damping: 30 })
  const trailIdRef = useRef(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY

      mouseX.set(x)
      mouseY.set(y)

      const newTrail: CursorTrail = {
        id: trailIdRef.current++,
        x,
        y,
        opacity: 1,
        scale: Math.random() * 0.8 + 0.6,
        rotation: Math.random() * 360,
      }

      setCursorTrails((prev) => [...prev.slice(-30), newTrail])
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorTrails((prev) =>
        prev
          .map((trail) => ({
            ...trail,
            opacity: trail.opacity - 0.025,
            scale: trail.scale * 0.985,
            rotation: trail.rotation + 2,
          }))
          .filter((trail) => trail.opacity > 0),
      )
    }, 16)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(1200px circle at ${springX}px ${springY}px, rgba(239, 68, 68, 0.4), rgba(251, 146, 60, 0.25) 40%, transparent 70%)`,
        }}
      />

      {cursorTrails.map((trail, index) => (
        <motion.div
          key={trail.id}
          className="fixed pointer-events-none z-10"
          style={{
            left: trail.x - 12,
            top: trail.y - 12,
          }}
          initial={{ scale: trail.scale, opacity: trail.opacity, rotate: trail.rotation }}
          animate={{
            scale: 0,
            opacity: 0,
            rotate: trail.rotation + (index % 2 === 0 ? 180 : -180),
          }}
          transition={{
            duration: 2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <div
            className="w-6 h-6 rounded-full"
            style={{
              background: `linear-gradient(${45 + index * 30}deg, rgba(239, 68, 68, ${trail.opacity}), rgba(251, 146, 60, ${trail.opacity * 0.8}))`,
              boxShadow: `0 0 ${20 * trail.scale}px rgba(239, 68, 68, ${trail.opacity * 0.6}), 0 0 ${40 * trail.scale}px rgba(251, 146, 60, ${trail.opacity * 0.3})`,
              filter: "blur(0.5px)",
            }}
          />
        </motion.div>
      ))}
    </>
  )
}
