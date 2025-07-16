const API_URL = "http://localhost:3000";

export const api = {
    //GET Method
    async getAdmin(resource) {
        const res = await fetch(`${API_URL}/${resource}`);
        if (!res.ok) throw new Error(`GET ${resource} failed`);
        return res.json();
    },

    async getCoder(resource, id){
        const res = await fetch(`${API_URL}/${resource}/${id}`);
        if (!res.ok) throw new Error(`GET ${resource} failed`);
        return res.json();
    },

    //POST Method
    async post(resource, data) {
        const res = await fetch(`${API_URL}/${resource}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error(`POST ${resource} failed`);
        return res.json();
    },  

    //PUT Method
    async put(resource, id, data) {
        const res = await fetch(`${API_URL}/${resource}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error(`PUT ${resource}/${id} failed`);
        return res.json();
    },

    //DELETE Method
    async delete(resource, id) {
        const res = await fetch(`${API_URL}/${resource}/${id}`, {
            method: "DELETE",
        });
        if (!res.ok) throw new Error(`DELETE ${resource}/${id} failed`);
        return true;
    },

};