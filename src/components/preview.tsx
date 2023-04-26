import { useRef, useEffect } from "react";

interface PreviewProps {
  code: string;
}

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

const Preview: React.FC<PreviewProps> = ({ code }) => {
  const iFrame = useRef<any>();

  useEffect(() => {
    iFrame.current.srcdoc = html;
    iFrame.current.contentWindow.postMessage(code, '*');
  }, [code]);

  return <iframe ref={iFrame} title='code preview' sandbox='allow-scripts' srcDoc={html} />;
};

export default Preview;
