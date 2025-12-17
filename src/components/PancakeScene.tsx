import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Pancake = () => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={meshRef}>
        {/* Base pancake */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[2, 2.1, 0.3, 64]} />
          <meshStandardMaterial 
            color="#D4A574" 
            roughness={0.8}
            metalness={0.1}
          />
        </mesh>
        
        {/* Golden top */}
        <mesh position={[0, 0.16, 0]}>
          <cylinderGeometry args={[1.95, 2, 0.02, 64]} />
          <meshStandardMaterial 
            color="#E8C392" 
            roughness={0.6}
            metalness={0.05}
          />
        </mesh>

        {/* Chocolate drizzle */}
        <mesh position={[0.3, 0.2, 0.2]} rotation={[0.1, 0.5, 0]}>
          <torusGeometry args={[0.5, 0.08, 8, 32]} />
          <meshStandardMaterial 
            color="#4A2C2A" 
            roughness={0.3}
            metalness={0.2}
          />
        </mesh>

        {/* Strawberry topping */}
        <mesh position={[-0.4, 0.35, -0.2]}>
          <coneGeometry args={[0.2, 0.35, 8]} />
          <meshStandardMaterial 
            color="#DC143C" 
            roughness={0.4}
            metalness={0.1}
          />
        </mesh>
        <mesh position={[-0.4, 0.55, -0.2]}>
          <cylinderGeometry args={[0.08, 0.15, 0.1, 8]} />
          <meshStandardMaterial 
            color="#228B22" 
            roughness={0.5}
          />
        </mesh>

        {/* Second strawberry */}
        <mesh position={[0.5, 0.3, 0.4]}>
          <coneGeometry args={[0.15, 0.28, 8]} />
          <meshStandardMaterial 
            color="#C41E3A" 
            roughness={0.4}
            metalness={0.1}
          />
        </mesh>
      </group>
    </Float>
  );
};

const PancakeScene = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas
        camera={{ position: [0, 3, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <directionalLight position={[-5, 3, -5]} intensity={0.4} color="#FFF5E6" />
        <pointLight position={[0, 5, 0]} intensity={0.5} color="#FFE4C4" />
        
        <Pancake />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
};

export default PancakeScene;
