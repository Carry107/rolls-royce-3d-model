import { Canvas } from '@react-three/fiber';
import { OrbitControls, Bounds } from '@react-three/drei';
// import AnimatedCube from './AnimatedCube';
import ModelLoader from './ModelLoader';
import { Environment } from '@react-three/drei';



export default function SceneCanvas() {
  return (
   <Canvas shadows camera={{ position: [3, 2, 5], fov: 60 }}>
  <Bounds fit clip observe margin={1.2}>
  <ambientLight intensity={0.4} />
  <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
  <pointLight position={[-3, 2, 3]} intensity={0.5} />
  <Environment preset="sunset" />
  <ModelLoader />
  </Bounds>
  <OrbitControls makeDefault />
</Canvas>
  );
}

