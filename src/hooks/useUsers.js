import useUsersList from './useUsersList';
import { useState } from 'react';

const categoriesFiltersConfig = [
  {
    name: 'Id',
    filter: (values, state) => {
      if (state === true) {
        return values.sort(sortById);
      } else {
        return values.sort(sortById).reverse();
      }
    },
  },
  {
    name: 'First name',
    filter: (values, state) => {
      if (state === true) {
        return values.sort(sortByFirstName);
      } else {
        return values.sort(sortByFirstName).reverse();
      }
    },
  },
  {
    name: 'Last name',
    filter: (values, state) => {
      if (state === true) {
        return values.sort(sortByLastName);
      } else {
        return values.sort(sortByLastName).reverse();
      }
    },
  },
  {
    name: 'Email',
    filter: (values, state) => {
      if (state === true) {
        return values.sort(sortByEmail);
      } else {
        return values.sort(sortByEmail).reverse();
      }
    },
  },
  {
    name: 'Phone',
    filter: (values, state) => {
      if (state === true) {
        return values.sort(sortByPhone);
      } else {
        return values.sort(sortByPhone).reverse();
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

export default function useUsers() {
  const [selectedCategoryIndex, setSelectCategoryIndex] = useState(3);
  const [stateCategory, setStateCategory] = useState(true);
  const usersList = useUsersList();
  const config = categoriesFiltersConfig[selectedCategoryIndex];
  const users = config.filter(usersList, stateCategory);
  const selectStateCategory = () => {
    if (stateCategory === true) {
      return setStateCategory(false);
    } else {
      return setStateCategory(true);
    }
  };
  return {
    categoryTitles,
    users,
    selectedCategoryIndex,
    setSelectCategoryIndex,
    selectStateCategory,
  };
}

function sortById(x, y) {
  if (x.id < y.id) {
    return -1;
  }
  if (x.id > y.id) {
    return 1;
  }
  return 0;
}

function sortByFirstName(x, y) {
  if (x.firstName < y.firstName) {
    return -1;
  }
  if (x.firstName > y.firstName) {
    return 1;
  }
  return 0;
}

function sortByLastName(x, y) {
  if (x.lastName < y.lastName) {
    return -1;
  }
  if (x.lastName > y.lastName) {
    return 1;
  }
  return 0;
}
function sortByEmail(x, y) {
  if (x.email < y.email) {
    return -1;
  }
  if (x.email > y.email) {
    return 1;
  }
  return 0;
}
function sortByPhone(x, y) {
  if (x.phone < y.phone) {
    return -1;
  }
  if (x.phone > y.phone) {
    return 1;
  }
  return 0;
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
