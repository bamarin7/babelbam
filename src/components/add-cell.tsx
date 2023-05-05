import './add-cell.css';
import { useActions } from '../hooks/use-actions';


interface AddCellProps {
  prevId: string | null;
  visible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ prevId, visible }) => {
  const { insertCellAfter } = useActions();

  return (
    <div className={`add-cell ${visible && 'visible'}`} >
      <div className="add-buttons">
        <button className='button is-primary is-small' onClick={() => insertCellAfter(prevId, 'code')}>ADD CODE</button>
        <button className='button is-primary is-small' onClick={() => insertCellAfter(prevId, 'text')}>ADD TEXT</button>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default AddCell;
