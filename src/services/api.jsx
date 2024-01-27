const BASE_URL = 'https://backend-inventory-g22x.onrender.com';

export const get = async (endpoint) => {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                // Add other headers if needed...
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        return await response.json();
    } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
    }
};

export const post = async (endpoint, data) => {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`, {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                // Add other headers if needed...
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        return await response.json();
    } catch (error) {
        throw new Error(`Error posting data: ${error.message}`);
    }
};

export const put = async (endpoint, data) => {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`, {
            method: 'PUT',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                // Add other headers if needed...
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        return await response.json();
    } catch (error) {
        throw new Error(`Error updating data: ${error.message}`);
    }
};

export const remove = async (endpoint) => {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`, {
            method: 'DELETE',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                // Add other headers if needed...
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        return await response.json();
    } catch (error) {
        throw new Error(`Error deleting data: ${error.message}`);
    }
};
