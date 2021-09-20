import './style.css';
import Table from '../../components/table/Table';
import ProfileInfo from '../../components/profileInfo/ProfileInfo';
import useGridData from '../../hooks/useGridData';
import SearchInput from '../../components/searchInput/SearchInput';
import usePagination from '../../hooks/usePagination';

export default function UsersTable() {
  const {
    categoryTitles,
    users,
    selectedCategoryIndex,
    selectedProfile,
    allStates,
    selectedState,
    selectStateCategory,
    setSelectCategoryIndex,
    activeSymbol,
    setSelectedProfile,
    setValueSearchInput,
    setSelectedState,
  } = useGridData();
  const pagination = usePagination(users.length);

  return (
    <div>
      <div className="header">
        <SearchInput
          pagination={pagination}
          allStates={allStates}
          setSelectedState={setSelectedState}
          selectedState={selectedState}
          setValueSearchInput={setValueSearchInput}
        />
      </div>
      <Table
        pagination={pagination}
        categoryTitles={categoryTitles}
        users={users}
        selectedCategoryIndex={selectedCategoryIndex}
        selectStateCategory={selectStateCategory}
        setSelectCategoryIndex={setSelectCategoryIndex}
        activeSymbol={activeSymbol}
        setSelectedProfile={setSelectedProfile}
        selectedProfile={selectedProfile}
      />
      <ProfileInfo selectedProfile={selectedProfile} />
    </div>
  );
}
