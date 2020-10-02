import Promise from 'bluebird'; 
import axios from 'axios'; 

export const getTasks = () => {
    return new Promise((resolve, reject) => {
        axios.get('http://127.0.0.1:8000/task-list/')
        .then((response) => {
            return resolve(response.data);
        })
        .catch((error) => {
            return reject(error);
        });
    });
};


export const postItem = async (body) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post', //you can set what request you want to be
            url: 'http://127.0.0.1:8000/task-create/',
            data: {
                title: body,
            },
            headers: {
                'Content-Type': 'application/json',
            },
          })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            return reject(error);
        })
    })
}

export const getTask = (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`http://127.0.0.1:8000/task-detail/${id}`)
        .then(response => {
            return resolve(response.data);
        })
        .catch(error => {
            return reject(error);
        })
    })
}


export const deleteTask = (id) => {
    return new Promise((resolve, reject) => {
        axios.delete(`http://127.0.0.1:8000/task-delete/${id}`)
        .then((response) => {
            return resolve(response.data);
        })
        .catch((error) => {
            return reject(error);
        });
    });
};
