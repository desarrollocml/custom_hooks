import useMousePosition from "./hooks/useMousePosition";

export default function MouseApp() {
  const position = useMousePosition();

  const background = position.x < window.innerWidth / 2 
  ? "green" 
  : "orange";

  return (
    <div style={{ background, height: "100vh" }}>
      <pre>{JSON.stringify(position, null, 2)}</pre>
    </div>
  );
}
