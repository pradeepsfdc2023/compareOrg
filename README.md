# Salesforce Organization Comparator

A web application to compare configurations and customizations across Salesforce organizations.

## Features

- **Organization Comparison**: Compare objects, fields, and configurations across multiple Salesforce orgs
- **Change Tracking**: Track changes and modifications over time
- **Analytics**: Detailed comparison reports and metrics
- **User Management**: Secure authentication and profile management
- **Responsive Design**: Works on desktop and mobile devices

## Project Structure

```
my-website/
├── public/               # Static files (images, icons, videos)
├── src/
│   ├── app/             # Core application logic
│   │   ├── config/      # Configuration files
│   │   ├── services/    # API and external services
│   │   ├── store/       # Global state management
│   │   └── hooks/       # Custom React hooks
│   ├── components/      # Reusable UI components
│   ├── pages/          # Page components
│   ├── layouts/        # Layout wrappers
│   ├── styles/         # Global and component styles
│   ├── utils/          # Utility functions
│   ├── App.js          # Main app component
│   └── main.js         # Entry point
├── .env                # Environment variables
├── package.json        # NPM dependencies
└── README.md          # This file
```

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd my-website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The app will open at `http://localhost:3000`

## Available Scripts

### Development

```bash
npm start
```

Runs the app in development mode.

### Build

```bash
npm build
```

Builds the app for production.

### Test

```bash
npm test
```

Launches the test runner.

### Lint

```bash
npm run lint
```

Checks code for issues.

### Format

```bash
npm run format
```

Formats code using Prettier.

## Technology Stack

- **Frontend**: React 18, React Router 6
- **State Management**: Redux Toolkit, Zustand
- **API**: Axios
- **Styling**: CSS3, CSS Variables
- **Build Tool**: Webpack
- **Development**: Babel

## API Integration

The app connects to a backend API. Configure the API base URL in `.env`:

```env
REACT_APP_API_BASE_URL=http://localhost:5000/api
```

## Components

### Common Components

- **Button**: Reusable button with variants and sizes
- **Input**: Text input with validation and error handling
- **Card**: Container component for content
- **Loader**: Loading spinner animation

### Layout Components

- **Header**: Page header with title and subtitle
- **Footer**: Application footer with links
- **Navbar**: Navigation bar
- **Sidebar**: Side navigation menu

### Modal Components

- **LoginModal**: User login dialog
- **RegisterModal**: User registration dialog
- **ConfirmModal**: Confirmation dialog
- **NotificationModal**: Notification toast

### Forms

- **LoginForm**: Login form with validation
- **ContactForm**: Contact form with multiple fields
- **ProfileForm**: User profile edit form

## Pages

- **Home**: Landing page
- **About**: About the application
- **Services**: Services offered
- **Contact**: Contact form page
- **Login/Register**: Authentication pages
- **Dashboard**: User dashboard with overview
- **Analytics**: Detailed analytics and metrics
- **Settings**: User preferences and account settings

## Utilities

### Helpers

- `debounce()`: Debounce function calls
- `throttle()`: Throttle function calls
- `classNames()`: Utility for combining class names
- `getCookie()`, `setCookie()`: Cookie management

### Validators

- `isEmail()`: Email validation
- `isPassword()`: Password validation
- `isPhone()`: Phone number validation
- `isURL()`: URL validation

### Formatters

- `formatDate()`: Date formatting
- `formatCurrency()`: Currency formatting
- `formatBytes()`: File size formatting
- `formatPhoneNumber()`: Phone number formatting
- `slugify()`: URL-safe string formatting

## Hooks

### useAuth

Authentication hook for login, logout, and auth state.

```javascript
const { login, logout, isAuthenticated, isLoading } = useAuth();
```

### useModal

Modal state management hook.

```javascript
const { isOpen, open, close, toggle } = useModal();
```

## State Management

The app uses Redux Toolkit for global state:

### Auth Slice

- User authentication state
- Auth token management
- Loading and error states

### User Slice

- User profile information
- User preferences
- Profile update actions

## Styling

The app uses CSS with CSS Variables for theming:

```css
:root {
  --primary-color: #0066cc;
  --success-color: #28a745;
  --danger-color: #dc3545;
  /* ... more variables ... */
}
```

## Environment Variables

```env
REACT_APP_API_BASE_URL=http://localhost:5000/api
REACT_APP_ENV=development
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

- Use React.memo for component optimization
- Implement lazy loading with React.lazy()
- Use code splitting with React Router
- Debounce search and input handlers

## Common Tasks

### Adding a New Page

1. Create a new file in `src/pages/`
2. Create the component
3. Import in `App.js`
4. Add route configuration

### Adding a New Component

1. Create a folder in `src/components/`
2. Create `index.js` and CSS file
3. Export the component
4. Use in pages or other components

### Adding a New Service

1. Create file in `src/app/services/`
2. Implement API calls
3. Export methods
4. Use in components or Redux actions

## Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For support, email support@example.com or open an issue on GitHub.

## Roadmap

- [ ] Real-time org comparison
- [ ] Advanced filtering and search
- [ ] Custom report generation
- [ ] Team collaboration features
- [ ] Mobile app
- [ ] API webhooks
- [ ] Scheduled comparisons
- [ ] Data export (CSV, PDF)

## Changelog

### Version 1.0.0 (2024)

- Initial release
- Basic org comparison
- User authentication
- Dashboard and analytics
