import './style.css';

export default function Pagination(props) {
  const { isPrevVisible, isNextVisible, nextPage, prevPage } = props;

  return (
    <div className="paginationContainer">
      <button
        className="paginationButton button_add"
        disabled={!isPrevVisible}
        onClick={() => prevPage()}>
        Prev
      </button>
      <button
        className="paginationButton button_add"
        disabled={!isNextVisible}
        onClick={() => nextPage()}>
        Next
      </button>
    </div>
  );
}
