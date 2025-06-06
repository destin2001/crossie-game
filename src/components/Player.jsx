import { Bounds } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { DirectionalLight } from './DirectionalLight'
import { setRef } from '../stores/player'
import usePlayerAnimation from '../hooks/usePlayerAnimation'

export function Player() {
  const player = useRef(null)
  const lightRef = useRef(null)
  const camera = useThree((state) => state.camera)

  usePlayerAnimation(player)

  useEffect(() => {
    if (!player.current) return
    if (!lightRef.current) return

    // Attach the camera to the player
    player.current.add(camera)
    lightRef.current.target = player.current

    // Set the player reference in the store
    setRef(player.current)
  })

  return (
    <Bounds fit clip observe margin={10}>
      <group ref={player}>
        <group>
          <mesh position={[0, 0, 10]} castShadow receiveShadow>
            <boxGeometry args={[15, 15, 20]} />
            <meshLambertMaterial color={0xffffff} flatShading />
          </mesh>
          <mesh position={[0, 0, 21]} castShadow receiveShadow>
            <boxGeometry args={[2, 4, 2]} />
            <meshLambertMaterial color={0xf0619a} flatShading />
          </mesh>
        </group>
        <DirectionalLight ref={lightRef} />
      </group>
    </Bounds>
  )
}
