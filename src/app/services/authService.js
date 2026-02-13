// Authentication service
import api from './api';
import API_ENDPOINTS from '../config/apiEndpoints';
import { STORAGE_KEYS } from '../config/constants';

class AuthService {
  async login(email, password) {
    try {
      const response = await api.post(API_ENDPOINTS.LOGIN, { email, password });
      if (response.token) {
        localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, response.token);
      }
      return response;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  async register(userData) {
    try {
      const response = await api.post(API_ENDPOINTS.REGISTER, userData);
      return response;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  }

  async logout() {
    try {
      const token = this.getToken();
      await api.post(API_ENDPOINTS.LOGOUT, {}, { Authorization: `Bearer ${token}` });
      localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    } catch (error) {
      console.error('Logout error:', error);
      localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    }
  }

  getToken() {
    return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  }

  isAuthenticated() {
    return !!this.getToken();
  }
}

export default new AuthService();
