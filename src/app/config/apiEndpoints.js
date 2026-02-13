// API Endpoints configuration
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

export const API_ENDPOINTS = {
  // Auth endpoints
  LOGIN: `${API_BASE_URL}/auth/login`,
  REGISTER: `${API_BASE_URL}/auth/register`,
  LOGOUT: `${API_BASE_URL}/auth/logout`,
  
  // User endpoints
  GET_USER: `${API_BASE_URL}/users/profile`,
  UPDATE_USER: `${API_BASE_URL}/users/profile`,
  
  // Org comparison endpoints
  GET_ORGS: `${API_BASE_URL}/orgs`,
  COMPARE_ORGS: `${API_BASE_URL}/orgs/compare`,
  GET_ORG_DETAILS: `${API_BASE_URL}/orgs/:id`,
};

export default API_ENDPOINTS;
