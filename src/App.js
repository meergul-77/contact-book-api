import Routes from './Routes'
import TodoContextProvider from './contexts/TodoContext'


function App() {
  return (
    <TodoContextProvider>
      <Routes />
    </TodoContextProvider>
  );
}

export default App;
