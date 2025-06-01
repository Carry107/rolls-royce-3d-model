import { useGLTF } from '@react-three/drei';

export default function ModelLoader() {
  const gltf = useGLTF("/models/r.glb"); // Place model in public folder
  return <primitive object={gltf.scene} scale={1.9} position={[0, 0, 0.5]} />;
}
