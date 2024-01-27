const BASE_URL = 'https://backend-inventory-g22x.onrender.com';

export const getInvoices = async () => {
    try {
        const response = await fetch(`${BASE_URL}/api/invoice`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
        });
        if (!response.ok) {
            throw new Error('Error fetching invoices.');
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error fetching invoices: ${error.message}`);
    }
};

export const createInvoice = async (invoiceData) => {
    try {
        const response = await fetch(`${BASE_URL}/api/invoice`, {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(invoiceData),
        });
        if (!response.ok) {
            throw new Error('Error creating invoice.');
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error creating invoice: ${error.message}`);
    }
};

export const updateInvoice = async (invoiceId, updatedData) => {
    try {
        const response = await fetch(`${BASE_URL}/api/invoice/${invoiceId}`, {
            method: 'PUT',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });
        if (!response.ok) {
            throw new Error('Error updating invoice.');
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error updating invoice: ${error.message}`);
    }
};

export const deleteInvoice = async (invoiceId) => {
    try {
        const response = await fetch(`${BASE_URL}/api/invoice/${invoiceId}`, {
            method: 'DELETE',
            mode: 'cors',
            credentials: 'include',
        });
        if (!response.ok) {
            throw new Error('Error deleting invoice.');
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error deleting invoice: ${error.message}`);
    }
};
