function App() {
  return (
    <div>
      <button
        onClick={() => {
          window.location.href = `/evently/dashboard`;
        }}
      >
        Go to Dashboard
      </button>

      <button
        onClick={() => {
          window.location.href = `/evently/register`;
        }}
      >
        Register
      </button>
    </div>
  );
}

export default App;
