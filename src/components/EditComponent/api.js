import Promise from 'bluebird';
import axios from 'axios';

export const editTask = (id, formData) => {
    return new Promise((resolve, reject) => {
        axios.put('http://127.0.0.1:8000/task-update/', {id, ...formData})
        .then(response => {
            return resolve(response.data);
        })
        .catch(error => {
            return reject(error);
        });
    });
};