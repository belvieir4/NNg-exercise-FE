import "./styles.css";
import CourseEnroll from "./components/CourseEnroll";

export default function App() {
  return (
    <div className="App p-6 bg-neutral-80 min-h-screen flex flex-col justify-center items-center">
      <CourseEnroll />
    </div>
  );
}
