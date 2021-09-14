import useUsersList from './useUsersList';
import { useState } from 'react';

const categoriesFiltersConfig = [
  {
    name: 'Id',
    filter: (values, state) => {
      if (state === true) {
        return values.sort((x, y) => sortByField(x, y, 'id'));
      } else {
        return values.sort((x, y) => sortByField(x, y, 'id')).reverse();
      }
    },
  },
  {
    name: 'First name',
    filter: (values, state) => {
      if (state === true) {
        return values.sort((x, y) => sortByField(x, y, 'firstName'));
      } else {
        return values.sort((x, y) => sortByField(x, y, 'firstName')).reverse();
      }
    },
  },
  {
    name: 'Last name',
    filter: (values, state) => {
      if (state === true) {
        return values.sort((x, y) => sortByField(x, y, 'lastName'));
      } else {
        return values.sort((x, y) => sortByField(x, y, 'lastName')).reverse();
      }
    },
  },
  {
    name: 'Email',
    filter: (values, state) => {
      if (state === true) {
        return values.sort((x, y) => sortByField(x, y, 'email'));
      } else {
        return values.sort((x, y) => sortByField(x, y, 'email')).reverse();
      }
    },
  },
  {
    name: 'Phone',
    filter: (values, state) => {
      if (state === true) {
        return values.sort((x, y) => sortByField(x, y, 'phone'));
      } else {
        return values.sort((x, y) => sortByField(x, y, 'phone')).reverse();
      }
    },
  },
  {
    name: 'State',
    filter: (values, state) => {
      if (state === true) {
        return values.sort(sortByState);
      } else {
        return values.sort(sortByState).reverse();
      }
    },
  },
];

const categoryTitles = categoriesFiltersConfig.map((x) => x.name);

export default function useGridData() {
  const [selectedCategoryIndex, setSelectCategoryIndex] = useState(3);
  const [selectedState, setSelectedState] = useState('All state');
  const [stateCategory, setStateCategory] = useState(true);
  const [valueSearchInput, setValueSearchInput] = useState('');
  const [selectedProfile, setSelectedProfile] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    adress: {
      streetAddress: '',
      city: '',
      state: '',
      zip: '',
    },
    description: '',
  });
  //
  const usersList = useUsersList();
  //
  let filteredUsers = actualUsers(usersList, valueSearchInput);
  const allStates = new Set();
  for (let i = 0; i < filteredUsers.length; i++) {
    allStates.add(filteredUsers[i].adress.state);
  }
  filteredUsers = searchByState(filteredUsers, selectedState);
  const config = categoriesFiltersConfig[selectedCategoryIndex];
  const users = config.filter(filteredUsers, stateCategory);

  const selectStateCategory = () => {
    if (stateCategory === true) {
      return setStateCategory(false);
    } else {
      return setStateCategory(true);
    }
  };

  const activeSymbol = () => {
    return stateCategory ? ' ▲' : ' ▼';
  };

  return {
    stateCategory,
    categoryTitles,
    users,
    selectedCategoryIndex,
    selectedProfile,
    allStates,
    selectedState,
    activeSymbol,
    setSelectCategoryIndex,
    selectStateCategory,
    setSelectedProfile,
    setValueSearchInput,
    setSelectedState,
  };
}

function sortByState(x, y) {
  if (x.adress.state < y.adress.state) {
    return -1;
  }
  if (x.adress.state > y.adress.state) {
    return 1;
  }
  return 0;
}

function sortByField(x, y, field) {
  if (typeof x[field] === 'string') {
    if (x[field] < y[field]) {
      return -1;
    }
    if (x[field] > y[field]) {
      return 1;
    }
    return 0;
  }
  return x[field] - y[field];
}

const actualUsers = (array, seachValue) => {
  if (seachValue.length < 2) {
    return array;
  } else {
    return array.filter(
      (x) =>
        x.id.toString().toUpperCase().includes(seachValue.toUpperCase()) ||
        x.firstName.toString().toUpperCase().includes(seachValue.toUpperCase()) ||
        x.lastName.toString().toUpperCase().includes(seachValue.toUpperCase()) ||
        x.email.toString().toUpperCase().includes(seachValue.toUpperCase()) ||
        x.phone.toString().toUpperCase().includes(seachValue.toUpperCase()) ||
        x.adress.state.toString().toUpperCase().includes(seachValue.toUpperCase()),
    );
  }
};

const searchByState = (array, seachValue) => {
  if (seachValue === 'All state') {
    return array;
  } else {
    return array.filter((x) => x.adress.state.toString().includes(seachValue));
  }
};
