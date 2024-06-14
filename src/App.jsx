import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import Cube from './components/Cube';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { Environment, OrbitControls, Stage, useGLTF } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import Model from './components/Model'; 

// function Model(props) {
//   const gltf = useLoader(GLTFLoader, '/scene.gltf')
//   return <primitive object={gltf.scene} />
// }

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <div className='hero'>
        <Hero />
      </div>
      <div className='canvas'>
        <Canvas dpr={[1, 2]} shadows camera={{fov: 30}}>
          <OrbitControls enableZoom={false} enablePan={false} /> {/* enablePan to not move the cube */}
          <ambientLight intensity={4} />
          <directionalLight position={[2, 1, 1]} />

          {/* <Stage environment={'night'}>
            <Model scale={0.01} />
          </Stage> */}

          <Suspense fallback={null}>
            <Model />
            <Environment preset='night' />
          </Suspense>

          
          {/* <Cube color="purple" position={[0, 0, 0]} args={[2.4, 2.4, 2.4]} value={0.5} />
          <Cube color="purple" position={[0, 0, 0]} args={[2.4, 2.4, 2.4]} value={0.4} /> */}
          {/* <Cube color="beige" position={[-1.4, -1.4, 1.8]} args={[0.66, 0.65, 0.65]} value={0.75} />
          <Cube color="beige" position={[1.4, 1.4, 1.8]} args={[0.65, 0.65, 0.65]} value={0.75} /> */}
        </Canvas>
      </div>
    </div>
  )
}

export default App;