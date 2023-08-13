// import { Html, useProgress} from '@react-three/drei'

// const Loader = () => {
//   const { progress } = useProgress();


//   return (
//     <html>
//       <span className="canvas-load"></span>
//       <p
//         style={{
//           fontSize: 14,
//           color: '#f1f1f1',
//           fontWeight: 800,
//           marginTop: 40,
//         }}
//       >{progress.toFixed(2)}</p>
//     </html>
//   )
// }

// export default Loader


import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;