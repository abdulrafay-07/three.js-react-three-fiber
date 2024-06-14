import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

// to load a texture on the shape
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

const Cube = ({ color, position, args, value }) => {
    // to rotate mesh
    const mesh = useRef();

    // useFrame hook will be called at every single frame
    useFrame((state, delta) => {
        mesh.current.rotation.y += delta * value;
        mesh.current.rotation.z += delta * value;
        mesh.current.rotation.x += delta * value;
    })

    // const texture1 = useLoader(TextureLoader, '/texture1.jpg');

    return (
        <mesh ref={mesh} position={position}>
            <boxGeometry args={args} />
            <meshStandardMaterial color={color} /> {/* map={texture1} */}
        </mesh>
    )
}

export default Cube;