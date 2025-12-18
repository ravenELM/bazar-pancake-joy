import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, Center } from '@react-three/drei';
import { Suspense } from 'react';

function PancakeModel() {
  const { scene } = useGLTF('/models/pancake.glb');
  
  return (
    <Center>
      <primitive 
        object={scene} 
        scale={0.4}
        rotation={[0.3, 0, 0]}
      />
    </Center>
  );
}

const Pancake3D = () => {
  return (
    <div className="w-48 h-48 md:w-56 md:h-56 mx-auto">
      <Canvas
        camera={{ position: [0, 4, 10], fov: 30 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <directionalLight position={[-5, 3, -5]} intensity={0.6} />
          <PancakeModel />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate 
            autoRotateSpeed={3}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2.2}
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
};

// Preload the model
useGLTF.preload('/models/pancake.glb');

export default Pancake3D;
