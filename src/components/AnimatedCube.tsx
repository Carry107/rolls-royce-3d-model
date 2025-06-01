import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';

export default function AnimatedCube({ position }: { position: [number, number, number] }) {
  const ref = useRef<any>(0);
  const [hovered, setHovered] = useState(false);

  const { color, scale } = useControls('Cube', {
    color: '#00ff99',
    scale: { value: 1, min: 0.5, max: 2, step: 0.1 }
  });

  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh
      ref={ref}
      position={position}
      scale={hovered ? scale * 1.2 : scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
