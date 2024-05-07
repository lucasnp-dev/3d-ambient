'use client'
import { OrbitControls } from '@react-three/drei'

import { Canvas, useLoader } from '@react-three/fiber'
import { Fragment, useRef } from 'react'
import { TextureLoader, ShadowMaterial } from 'three'

export default function Example3() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-[800px] h-[800px] p-4">
          <div className="w-[600px] h-[600px]">
            <Canvas shadows  camera={{ position: [0, 0, 7.3], fov: 75 }}>
            <ambientLight intensity={1} color={'#ffffff'} />
            <directionalLight position={[1, 1, 5]} color={'#eaeaff'} intensity={1} castShadow />

              <Frame />
              
              <OrbitControls 
                minPolarAngle={Math.PI / 2} 
                maxPolarAngle={Math.PI / 2} 
                enableZoom={true} 
                enablePan={true} 
                minAzimuthAngle={-Math.PI / 4}
                maxAzimuthAngle={Math.PI / 4}
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
  const texture3 = useLoader(TextureLoader, '/p1.jpg')

  return (
    <group>

    {/* Chão */}
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color={'#e5dbd3'} map={texture3}  roughness={0.5} metalness={0.5} />
      </mesh>
    

      {/* Parede */}
      <mesh position={[0, 0, -0.75]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color={'#e5dbd3'} roughness={0.6} metalness={0.5} />
      </mesh>

      <mesh position={[10, 0, 0]} receiveShadow rotation={[0, -Math.PI / 2, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color={'#e5dbd3'} roughness={0.5} metalness={0.5} />
      </mesh>

      <mesh position={[-10, 0, 0]} receiveShadow rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color={'#e5dbd3'} roughness={0.5} metalness={0.5} />
      </mesh>

      <mesh position={[0, 10, 0]} rotation={[Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color={'#e5dbd3'} roughness={0.6} metalness={0.5} />
      </mesh>
      
      <group rotation={[-0.13, 0, 0]} position={[0, 0, 0]}>

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

     

      
    </group>
  )
}