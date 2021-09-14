import './style.css';

export default function Pagination(props) {
  const { isPrevVisible, isNextVisible, nextPage, prevPage } = props;

  return (
    <div className="paginationContainer">
      <button className="paginationButton" disabled={!isPrevVisible} onClick={() => prevPage()}>
        Prev
      </button>
      <button className="paginationButton" disabled={!isNextVisible} onClick={() => nextPage()}>
        Next
      </button>
    </div>
  );
}
