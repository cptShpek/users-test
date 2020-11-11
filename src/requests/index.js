import axios from "axios";

export const updateUser = (id, data) => {
    axios.put("http://77.120.241.80:8811/api/user/" + id, {...data})
    .catch(err => console.log(err))
}

export const addUser = (data) => {
    axios.post("http://77.120.241.80:8811/api/users", {...data})
    .catch(err => console.log(err))
}

export const deleteUser = (id) => {
    console.log(id)
    axios.delete("http://77.120.241.80:8811/api/user/" + id)
    .catch(err => console.log(err))
}