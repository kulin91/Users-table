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
  const [valueSearchInput, setValueSearchInput] = useState('');
  const [selectedProfile, setSelectedProfile] = useState({
    id: 655,
    firstName: 'Anteria',
    lastName: 'Slocum',
    email: 'SPaulsen@donec.org',
    phone: '(967)760-0580',
    adress: {
      streetAddress: '6388 Lacus Ct',
      city: 'Kenora',
      state: 'IA',
      zip: '49758',
    },
    description: '{lorem|32',
  });
  //
  const usersList = useUsersList();
  //
  let filteredUsers = actualUsers(usersList, valueSearchInput);
  filteredUsers = searchByState(filteredUsers, '');
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
    if (stateCategory === false) {
      return '▼';
    } else {
      return '▲';
    }
  };
  return {
    stateCategory,
    categoryTitles,
    users,
    selectedCategoryIndex,
    selectedProfile,
    activeSymbol,
    setSelectCategoryIndex,
    selectStateCategory,
    setSelectedProfile,
    setValueSearchInput,
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

// function sortByField(x, y, field) {
//   return x[field] - y[field];
// }

// const data = [{ adress: 'minsk', email: 'a@a', addressState: 'SSS' }];
// const input = 'SSS';

// data.filter(
//   (x) => x.address.include(input) || x.email.include(input) || x.addressState.include(input),
// );
// data.filter(
//   (x) =>
//     x.id.includes(input) ||
//     x.firstName.includes(input) ||
//     x.lastName.includes(input) ||
//     x.email.includes(input) ||
//     x.phone.includes(input) ||
//     x.adress.state.includes(input),
// );

// const ds = [
//   {
//     id: 655,
//     firstName: 'Anteria',
//     lastName: 'Slocum',
//     email: 'SPaulsen@donec.org',
//     phone: '(967)760-0580',
//     adress: {
//       streetAddress: '6388 Lacus Ct',
//       city: 'Kenora',
//       state: 'IA',
//       zip: '49758',
//     },
//     description: '{lorem|32',
//   },
//   {
//     id: 111,
//     firstName: 'Anteria',
//     lastName: 'Slocum',
//     email: 'SPaulsen@donec.org',
//     phone: '(967)760-0580',
//     adress: {
//       streetAddress: '6388 Lacus Ct',
//       city: 'Kenora',
//       state: 'IA',
//       zip: '49758',
//     },
//     description: '{lorem|32',
//   },
//   {
//     id: 22,
//     firstName: 'Anteria',
//     lastName: 'Slocum',
//     email: 'SPaulsen@donec.org',
//     phone: '(967)760-0580',
//     adress: {
//       streetAddress: '6388 Lacus Ct',
//       city: 'Kenora',
//       state: 'IA',
//       zip: '49758',
//     },
//     description: '{lorem|32',
//   },
// ];

const actualUsers = (array, seachValue) => {
  if (seachValue === '') {
    return array;
  } else {
    return array.filter(
      (x) =>
        x.id.toString().includes(seachValue) ||
        x.firstName.toString().includes(seachValue) ||
        x.lastName.toString().includes(seachValue) ||
        x.email.toString().includes(seachValue) ||
        x.phone.toString().includes(seachValue) ||
        x.adress.state.toString().includes(seachValue),
    );
  }
};

const searchByState = (array, seachValue) => {
  if (seachValue === '') {
    return array;
  } else {
    return array.filter((x) => x.adress.state.toString().includes(seachValue));
  }
};
