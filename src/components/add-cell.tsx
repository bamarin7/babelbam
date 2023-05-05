import './add-cell.css';
import { useActions } from '../hooks/use-actions';


interface AddCellProps {
  nextId: string | null;
}

const AddCell: React.FC<AddCellProps> = ({ nextId }) => {
  const { insertCellBefore } = useActions();

  return (
    <div>
      <button onClick={() => insertCellBefore(nextId, 'code')}>Add Code</button>
      <button onClick={() => insertCellBefore(nextId, 'text')}>Add Text</button>
    </div>
  );
};

export default AddCell;
