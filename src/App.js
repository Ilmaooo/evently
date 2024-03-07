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
    </div>
  );
}

export default App;
