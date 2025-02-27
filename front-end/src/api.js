const API_URL =  'http://localhost:5000';

export const fetchUsers = async () => {
    const response = await fetch(`${API_URL}/users`);
    return response.json();
};

/* export const createUser = async (user) => {
    const response = await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });
    return response.json();
}; */