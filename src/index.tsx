import * as esbuild from 'esbuild-wasm';
import ReactDOM from "react-dom";
import { useState, useEffect, useRef } from "react";
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';
import { fetchPlugin } from './plugins/fetch-plugin';


const App = () => {
  const [input, setInput] = useState('');
  const ref = useRef<any>();
  const iFrame = useRef<any>();

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm'
    });
  };
  useEffect(() => {
    startService();
  }, []);

  const onClick = async () => {
    if (!ref.current) {
      return;
    }

    iFrame.current.srcdoc = html;

    const result = await ref.current.build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(input)],
      define: {
        'process.env.NODE_ENV': '"production"',
        global: 'window'
      },
    });

    // setCode(result.outputFiles[0].text);
    iFrame.current.contentWindow.postMessage(result.outputFiles[0].text, '*');
  };

  const html = `
    <html>
      <head></head>
      <body>
        <div id="root"></div>
        <script>
          window.addEventListener('message', (event) => {
            try {
              eval(event.data);
            } catch (err) {
              const root = document.querySelector('#root');
              root.innerHTML = '<div style="color: #d20101;"><h3>Runtime Error</h3>' + err + '</div>'
              console.error(err);
            }
          }, false);
        </script>
      </body>
    </html>
  `;

  return <div>
    <textarea value={input} onChange={e => setInput(e.target.value)} ></textarea>
    <div>
      <button onClick={onClick} >Submit</button>
    </div>
    <iframe ref={iFrame} title='code preview' sandbox='allow-scripts' srcDoc={html} />
  </div>;
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
