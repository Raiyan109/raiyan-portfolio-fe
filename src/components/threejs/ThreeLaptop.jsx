import { ContactShadows, Float, OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Laptop1 } from "../../../Laptop1";


function Controls() {
    const {
        camera,
        gl: { domElement },
    } = useThree();

    return <OrbitControls args={[camera, domElement]} />;
}

function ThreeScene() {
    return (
        <Canvas camera={{ position: [-3, 8, -6.5] }}>
            <ambientLight color={'#A3E7FC'} />
            <pointLight
                color={'red'}
                position={[5, 5, 5]} intensity={1} />
            <pointLight color={'red'} position={[-3, -3, 2]} />
            <Float
                speed={1}
                rotationIntensity={1.3}
                position={[0, 0.1, 0]}
                floatIntensity={2}
            >
                <Laptop1 />
            </Float>

            <ContactShadows color={'#A3E7FC'} position={[0, -0.8, 0]} blur={2.5} scale={20} far={20} />
            <Controls />


        </Canvas>
    );
}
const ThreeLaptop = () => {
    return (
        <div className="App h-screen">
            <ThreeScene />
        </div>
    );
};

export default ThreeLaptop;