# React Profile Component Assessment

## Task Description

You are maintaining a React application with user profile pages accessed via URLs like `/user/:userId`. The Profile component should fetch and display the correct user data based on the route parameter, and provide an editable display name field.

### Problem Statement
- When navigating between users (e.g., from `/user/123` to `/user/456`), the previous profile's data sometimes persists in the form field.
- Editing the display name field results in a React warning: "A component is changing an uncontrolled input to be controlled."
- On investigation: The fetch logic only runs on initial mount, and the display name input is not updated when the user changes.

Your task:
- Ensure the Profile component correctly fetches and displays profile data when the URL changes.
- The display name input field must always be in sync with the fetched user data and not trigger React form warnings.

## Setup Instructions

1. Ensure you have Docker and docker-compose installed.
2. In the project directory, run:

    ```sh
    sh run.sh
    ```

3. Once the containers are up, access the app in your browser at [http://localhost:3000](http://localhost:3000).

## Expected Outcomes

- Navigating between profile URLs (such as `/user/123` and `/user/456`) always fetches and displays the correct user's profile data.
- The "Display Name" input field always accurately displays the current user's name and can be edited without any React warnings.

## How to Verify Your Solution

1. Start the app and navigate to `/user/123` and `/user/456` using links in the app.
2. Confirm that the correct user data appears each time you switch users.
3. Edit the display name field and ensure there are no React warnings about controlled or uncontrolled inputs (check your browser's console for warnings).
4. The form should always correspond to the correct user from the URL.
