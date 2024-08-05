import axios from "axios";

export const CommonRequest = async (methods, url, body, header) => {
    let config = {
        method: methods,
        url,
        headers : header ? header.headers : { "Content-Type": "application/json" },
        data: body,
    };

    return axios(config).then((data)=>{
        return data;
    }).catch((error) => {
        return error
    })
};
