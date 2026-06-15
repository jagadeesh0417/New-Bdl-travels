"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Box, Torus } from "@react-three/drei";
import type { Mesh } from "three";

function VehicleShape({ position, color, shape }: { position: [number, number, number]; color: string; shape: "box" | "sphere" | "torus" }) {
  const meshRef = useRef<Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.rotation.y += 0.005;
    }
  });

  const commonProps = {
    ref: meshRef,
    position,
  };

  const material = (
    <MeshDistortMaterial
      color={color}
      roughness={0.2}
      metalness={0.8}
      distort={0.2}
      speed={2}
    />
  );

  if (shape === "box") {
    return (
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <Box args={[1.2, 0.6, 0.6]} {...commonProps}>
          {material}
        </Box>
      </Float>
    );
  }
  if (shape === "sphere") {
    return (
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
        <Sphere args={[0.5, 32, 32]} {...commonProps}>
          {material}
        </Sphere>
      </Float>
    );
  }
  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
      <Torus args={[0.6, 0.2, 16, 32]} {...commonProps}>
        {material}
      </Torus>
    </Float>
  );
}

function Road() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
      <planeGeometry args={[20, 40]} />
      <MeshDistortMaterial
        color="#1a1a2e"
        roughness={0.8}
        metalness={0.2}
        distort={0.1}
      />
    </mesh>
  );
}

function RoadLines() {
  return (
    <group position={[0, -0.4, 0]}>
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh key={i} position={[0, 0, -10 + i * 1.1]}>
          <planeGeometry args={[0.1, 0.5]} />
          <meshBasicMaterial color="#D4A017" />
        </mesh>
      ))}
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 3, 8], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#0A4DFF" />
        <pointLight position={[5, 5, -5]} intensity={0.5} color="#D4A017" />
        <Road />
        <RoadLines />
        <VehicleShape position={[-2, 0.5, -2]} color="#0A4DFF" shape="box" />
        <VehicleShape position={[2, 0.8, -1]} color="#D4A017" shape="sphere" />
        <VehicleShape position={[-1.5, 0.3, 3]} color="#6366f1" shape="torus" />
        <VehicleShape position={[1.8, 0.6, 2]} color="#0A4DFF" shape="box" />
        <VehicleShape position={[0, 0.4, -4]} color="#D4A017" shape="sphere" />
      </Canvas>
    </div>
  );
}
