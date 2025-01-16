# Countdown Redirect App

This is a simple React application built with Vite that displays a countdown timer and a redirect button. The application redirects the user to a specified URL after a countdown or immediately upon button click.

## Features

- **Countdown Timer**: Displays the remaining seconds before redirection.
- **Immediate Redirect**: Allows the user to skip the countdown and redirect immediately by clicking a button.
- **Spinner Animation**: Includes a loading spinner for a better user experience.
- **Configurable Settings**: The redirect URL and countdown duration are defined in a `config.json` file inside the `src` directory for easy management.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For fast development and optimized build.
- **TailwindCSS**: For styling the components.
- **JSON Configuration**: To manage application settings.

## Project Structure
src/
├── components/
│   ├── CountdownRedirect.tsx   # Handles the countdown and automatic redirection
│   ├── RedirectButton.tsx      # Handles the button for manual redirection
│   ├── Spinner.tsx             # Displays a spinner animation
├── config/
│   ├── config.json             # Configuration file for redirect URL and countdown time
├── App.tsx                     # Main application component
├── index.css                   # TailwindCSS setup
├── main.tsx                    # Application entry point

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/countdown-redirect-app.git
   cd countdown-redirect-app## Installation and Setup

2. **Install Dependencies:**:
   ```
   npm install
3.	**Run the Application:**:
    ```
    npm run dev
## Configuration
The settings for the application are stored in the src/config/config.json file. 

Modify the following fields as needed:
```
{
  "redirectUrl": "https://www.example.com",  // URL to redirect the user
  "initialCountdown": 2                     // Countdown time in seconds
}