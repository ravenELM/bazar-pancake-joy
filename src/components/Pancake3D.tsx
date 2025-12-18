import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import { Suspense } from 'react';

function PancakeModel() {
  const { scene } = useGLTF('/models/pancake.glb');
  
  return (
    <primitive 
      object={scene} 
      scale={2.5}
      position={[0, -0.5, 0]}
      rotation={[0.2, 0, 0]}
    />
  );
}

const Pancake3D = () => {
  return (
    <div className="w-full h-64 md:h-80 lg:h-96">
      <Canvas
        camera={{ position: [0, 2, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <directionalLight position={[-5, 3, -5]} intensity={0.5} />
          <PancakeModel />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate 
            autoRotateSpeed={2}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
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
