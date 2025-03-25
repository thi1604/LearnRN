import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to save data
export const saveData = async (key: string, value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

// Function to fetch data
export const fetchData = async (key: string): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    // if (value !== null) {
    //   console.log(`Fetched: ${key} = ${value}`);
    // }
    return value;
  } catch (error) {
    // console.error('Error fetching data:', error);
    return null;
  }
};

// Function to delete data
export const deleteData = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
    // console.log(`Deleted: ${key}`);
  } catch (error) {
    // console.error('Error deleting data:', error);
  }
};
