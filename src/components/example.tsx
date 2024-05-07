'use client'
import { OrbitControls } from '@react-three/drei'

import { Canvas, useLoader } from '@react-three/fiber'
import { Fragment, useRef } from 'react'
import { TextureLoader, ShadowMaterial } from 'three'

export default function Example() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-[800px] h-[800px] p-4">
          <div className="w-[600px] h-[600px]">
            <Canvas shadows  camera={{ position: [0, 0, 7.3], fov: 75 }}>
            <ambientLight intensity={1} color={'#ffffff'} />
            <directionalLight position={[1, 1, 5]} color={'#eaeaff'} intensity={1.2} castShadow />

              <Frame />
              
              <OrbitControls 
                minPolarAngle={Math.PI / 2} 
                maxPolarAngle={Math.PI / 2} 
                enableZoom={false} 
                enablePan={false} 
                // minAzimuthAngle={-Math.PI / 4}
                // maxAzimuthAngle={Math.PI / 4}
              />
            </Canvas>
          </div>
        </div>

        
    </div>
    
  )
}


 function Frame() {
  const ref = useRef(null)
  const texture = useLoader(TextureLoader, '/image.webp')
  const texture2 = useLoader(TextureLoader, '/cpreta.webp')

  return (
    <group>

    <mesh position={[0, 0, -0.5]}  receiveShadow>
      <planeGeometry args={[10, 10]} />
      <shadowMaterial opacity={0.3}  />
    </mesh>
      

      <mesh ref={ref} castShadow  
            >
        <boxGeometry args={[5, 8, .5]}  />
        <meshStandardMaterial color={'#030303'} />
      </mesh>

      <mesh position={[0, 0, 0.254]}   
           >
        <planeGeometry args={[5, 8]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      

      <mesh position={[0, 0, 0.26]}   
           >
        <planeGeometry args={[5, 8]} />
        <meshStandardMaterial map={texture2} transparent />
      </mesh>

      
    </group>
  )
}