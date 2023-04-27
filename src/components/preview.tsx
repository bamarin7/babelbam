import { useRef, useEffect } from "react";
import './preview.css';

interface PreviewProps {
  code: string;
}

const html = `
<html>
  <head>
    <style>html { background-color: #fff; }</style>
  </head>
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

const Preview: React.FC<PreviewProps> = ({ code }) => {
  const iFrame = useRef<any>();

  useEffect(() => {
    iFrame.current.srcdoc = html;
    setTimeout(() => {
      iFrame.current.contentWindow.postMessage(code, '*');
    }, 75);
  }, [code]);

  return <div className="wrapper">
      <iframe ref={iFrame} title='code preview' sandbox='allow-scripts' srcDoc={html} />
    </div>
};

export default Preview;
