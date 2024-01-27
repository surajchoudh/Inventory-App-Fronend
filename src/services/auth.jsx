const BASE_URL = 'https://backend-inventory-g22x.onrender.com';

export const signUpUser = async (userData) => {
    try {
        const response = await fetch(`${BASE_URL}/api/auth/register`, {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                // Add other headers if needed...
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Error signing up. Please try again.');
        }

        return await response.json();
    } catch (error) {
        throw new Error(`Signup error: ${error.message}`);
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await fetch(`${BASE_URL}/api/auth/login`, {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                // Add other headers if needed...
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Error logging in. Please try again.');
        }

        return await response.json();
    } catch (error) {
        throw new Error(`Login error: ${error.message}`);
    }
};
