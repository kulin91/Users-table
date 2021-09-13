import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useUsersList() {
  const [appState, setAppState] = useState([]);

  useEffect(() => {
    const apiUrl =
      'https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json';
    axios.get(apiUrl).then((resp) => {
      const allUsers = resp.data;
      setAppState(allUsers);
    });
  }, [setAppState]);
  return appState;
}
