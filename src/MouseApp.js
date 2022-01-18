import useBackground from "./hooks/useBackground";

export default function MouseApp() {
  const {background,position} = useBackground();
  return (
    <div style={{ background, height: "100vh" }}>
      <pre>{JSON.stringify(position, null, 2)}</pre>
    </div>
  );
}
