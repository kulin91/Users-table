import './style.css';
import Table from '../../components/table/Table';
import ProfileInfo from '../../components/profileInfo/ProfileInfo';
import useUsers from '../../hooks/useUsers';
import SearchInput from '../../components/searchInput/SearchInput';

export default function UsersTable() {
  const {
    categoryTitles,
    users,
    selectedCategoryIndex,
    selectedProfile,
    selectStateCategory,
    setSelectCategoryIndex,
    activeSymbol,
    setSelectedProfile,
    setValueSearchInput,
  } = useUsers();
  return (
    <div>
      <SearchInput setValueSearchInput={setValueSearchInput} />
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
