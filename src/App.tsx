import InputForm from "./components/InputForm";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-purple-600">Generate developer portfolio!</h1>
      <br />
      <InputForm />
    </div>
  );
}

export default App;
