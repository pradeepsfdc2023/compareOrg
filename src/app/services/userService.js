// User service
import api from './api';
import API_ENDPOINTS from '../config/apiEndpoints';
import { STORAGE_KEYS } from '../config/constants';

class UserService {
  async getProfile() {
    try {
      const response = await api.get(API_ENDPOINTS.GET_USER);
      return response;
    } catch (error) {
      console.error('Get profile error:', error);
      throw error;
    }
  }

  async updateProfile(userData) {
    try {
      const response = await api.put(API_ENDPOINTS.UPDATE_USER, userData);
      return response;
    } catch (error) {
      console.error('Update profile error:', error);
      throw error;
    }
  }

  saveUserData(userData) {
    localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userData));
  }

  getUserData() {
    const data = localStorage.getItem(STORAGE_KEYS.USER_DATA);
    return data ? JSON.parse(data) : null;
  }

  clearUserData() {
    localStorage.removeItem(STORAGE_KEYS.USER_DATA);
  }
}

export default new UserService();
