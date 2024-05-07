'use client'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useLoader, useThree } from '@react-three/fiber'
import { Fragment, useEffect, useRef } from 'react'
import { TextureLoader, ShadowMaterial } from 'three'


export default function Example2() {
  return (
    <div className="flex h-screen justify-center items-center">
      
        <div className="w-[800px] h-[800px] p-4">
          <div className="w-[800px] h-[600px]">
            <Canvas camera={{ position: [0, 0, 11.2], fov: 75 }}>
            <ambientLight intensity={1} color={'#ffffff'} />
            <directionalLight position={[1, 1, 5]} color={0xffffff} intensity={1.2} castShadow />
            


              <Frame />

              <OrbitControls 
                minPolarAngle={Math.PI / 2} 
                maxPolarAngle={Math.PI / 2} 
                enableZoom={false} 
                enablePan={false} 
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

  const larguraBloco = 5;
  const distancia = 16 / 100; // Convertendo de px para unidades do Three.js (supondo que 100 unidades = 1 metro)

  // Calculando as posições
  const posicaoCentral = 0;
  const posicaoEsquerda = -(larguraBloco / 2 + distancia + larguraBloco / 2);
  const posicaoDireita = larguraBloco / 2 + distancia + larguraBloco / 2;

  return (
      <group ref={ref}>

     

        

        <group position={[posicaoEsquerda, 0, 0]}>
        

        <mesh position={[posicaoEsquerda, 0, -0.5]} receiveShadow>
            <planeGeometry args={[10, 10]}  />
            <shadowMaterial opacity={0.3}  />
          </mesh>
        

          <mesh castShadow>
            <boxGeometry args={[5, 8, .5]}  />
            <meshStandardMaterial color={'#030303'} />
          </mesh>

          <mesh position={[0, 0, 0.254]}>
            <planeGeometry args={[5, 8]} />
            <meshStandardMaterial map={texture} />
          </mesh>

          

          <mesh position={[0, 0, 0.26]}>
            <planeGeometry args={[5, 8]} />
            <meshStandardMaterial map={texture2} transparent />
          </mesh>
        </group>

        <group position={[posicaoDireita, 0, 0]}>
        

        <mesh position={[0, 0, -0.5]} receiveShadow>
            <planeGeometry args={[10, 10]}  />
            <shadowMaterial opacity={0.3}  />
          </mesh>

          <mesh castShadow>
            <boxGeometry args={[5, 8, .5]}  />
            <meshStandardMaterial color={'#030303'} />
          </mesh>

          <mesh position={[0, 0, 0.254]}>
            <planeGeometry args={[5, 8]} />
            <meshStandardMaterial map={texture} />
          </mesh>

          

          <mesh position={[0, 0, 0.26]}>
            <planeGeometry args={[5, 8]} />
            <meshStandardMaterial map={texture2} transparent />
          </mesh>
        </group>

       
      </group>
      
  )
}