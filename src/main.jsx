import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { ReactLenis } from '@studio-freight/react-lenis'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReactLenis root lerp={0.3}>
    <App />
  </ReactLenis>
)
