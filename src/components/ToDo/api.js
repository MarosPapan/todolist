import Promise from 'bluebird'; 
import axios from 'axios'; 

//GET ALL OF THE TASK
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

//ADD TO TODO TASK
export const postItem = (body) => {
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

//GET ONE TASK
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

//DELETE TASK
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



//EDIT TASK
export const editTask = (id, formData) => {
    return new Promise((resolve, reject) => {
        axios({
            method: 'PUT',
            url: `http://127.0.0.1:8000/task-update/${id}`,
            data: {
                title: formData.task,
            },
            headers: {
                'Content-Type': 'application/json',
            }, 
        })
        .then(response => {
            return resolve(response.data);
        })
        .catch(error => {
            return reject(error);
        });
    });
};

//COMPLETE TASK
export const completeTask = (id, formData) => {
    //console.log("API COMPLETE TASK: ", id, " ", formData);
    return new Promise((resolve, reject) => {
        axios({
            method: 'PUT',
            url: `http://127.0.0.1:8000/task-update/${id}`,
            data: JSON.stringify({
                'completed': formData,
            }),
            headers: {
                'Content-Type': 'application/json',
            }, 
        })
        .then(response => {
            return resolve(response.data);
        })
        .catch(error => {
            return reject(error);
        });
    });
};