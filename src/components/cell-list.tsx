import { useTypedSelector } from "../hooks/use-typed-selector";
import { Fragment } from "react";
import CellListItem from "./cell-list-item";
import AddCell from "./add-cell";


const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) => {
    return order.map((id) => {
      return data[id];
    });
  });

  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id} >
      <CellListItem cell={cell} />
      <AddCell prevId={cell.id} />
    </Fragment>
  ));

  return (
    <div>
      <AddCell visible={cells.length === 0} prevId={null} />
      {renderedCells}
    </div>
  )
};

export default CellList;
