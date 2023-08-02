export const getPersistData = (key: string, parse: boolean) => {
    try {
      const value = localStorage.getItem(key);
      if (value) {
        return parse ? JSON.parse(value) : value;
      }
    } catch (error) {
      console.error('Error retrieving data from localStorage:', error);
    }
    
    return undefined;
  };
  
  export const persistData = (key: string, data: any) => {
    if (typeof data === 'undefined') {
      return;
    }

    localStorage.setItem(key, JSON.stringify(data));
    
  };

  export const clearLocalStorage = () => {
    localStorage.clear();
  };