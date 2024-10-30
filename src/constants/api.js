import axios from 'axios';

// export const apiUrl = 'https://app.kejeka.com';
export const apiUrl = 'http://127.0.0.1:8002';

let API_URL;

const setApiUrl = async () => {
  try {
    API_URL = `${apiUrl}/api/method/kejeka_main.services.kejeka.`;

  } catch (error) {
    console.error('Error reading urlValue:', error);
  }
};

export const login_user = async (loginData) => {
    await setApiUrl();
    try {
        const response = await axios.post(`${API_URL}login_user`, {loginData: JSON.stringify(loginData)});
        return response.data.message;
    } catch (error) {
      console.error('Error logging in the user:', error);
        return null;
    }
  };

  export const create_user = async (createAccountData) => {
    try {
      await setApiUrl();
      const response = await axios.post(`${API_URL}create_user`, { createAccountData: JSON.stringify(createAccountData) });
      return response.data.message;
    } catch (error) {
      console.error('Error creating user:', error);
      return null;
    }
  };

  export const register_member = async (memberInfo) => {
    await setApiUrl();
    try {
      const response = await axios.post(`${API_URL}register_member`, { memberInfo: JSON.stringify(memberInfo) });
      if (response.data && response.data.message) {
        return response.data.message.message;
      } else {
        console.error('Error fetching agent_data:', response.data);
        return null;
      }
    } catch (error) {
      console.error('Error fetching agent_data:', error.message);
      return null;
    }
  };