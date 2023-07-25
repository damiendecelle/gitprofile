import config from './src/gitprofile.config';
import GitProfile from '/src/components/GitProfile';

function App() {
  return <GitProfile config={config} />;
}

export default App;
