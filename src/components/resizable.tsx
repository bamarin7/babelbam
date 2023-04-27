import { ResizableBox, ResizableBoxProps } from "react-resizable";
import './resizable.css';

interface ResizableProps {
  direction: "horizontal" | "vertical";
  children?: React.ReactNode;
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  let sizeProps: ResizableBoxProps;

  if (direction === 'horizontal') {
    sizeProps = {

    };
  } else {
    sizeProps = {

    };
  }

  return (
    <ResizableBox
      height={300}
      width={Infinity}
      resizeHandles={['s']}
      maxConstraints={[Infinity, window.innerHeight * 0.9]}
      minConstraints={[Infinity, 40]}
    >
      {children}
    </ResizableBox>
  );
};

export default Resizable;
