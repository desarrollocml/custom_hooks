import useMousePosition from "./hooks/useMousePosition";

export default function MouseApp() {
  const position = useMousePosition();  

    return (
    <div>
        <pre>
            {JSON.stringify(position, null, 2)}
        </pre>
    </div>
  )
}
