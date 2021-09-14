import './style.css';
import Table from '../../components/table/Table';
import ProfileInfo from '../../components/profileInfo/ProfileInfo';
import useGridData from '../../hooks/useGridData';
import SearchInput from '../../components/searchInput/SearchInput';
import Select from '../../components/select/Select';

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

  return (
    <div>
      <div className="header">
        <SearchInput setValueSearchInput={setValueSearchInput} />
        <Select
          allStates={allStates}
          setSelectedState={setSelectedState}
          selectedState={selectedState}
        />
      </div>
      <Table
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
