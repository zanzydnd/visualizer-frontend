import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {

    const navBarStyle = {
        "background-color": "#21b894"
    }

    return (
    <div className="App">
        <nav className="navbar navbar-light" style={navBarStyle}>
            <div className="container-fluid">
                <span className="navbar-brand mb-lg-5 h1">Visualizer</span>
            </div>


        </nav>
        <PathfindingVisualizer></PathfindingVisualizer>
    </div>
  );
}

export default App;
