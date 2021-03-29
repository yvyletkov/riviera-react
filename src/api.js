export const request = async (data,
                              method = "POST",
                              url = "https://team.upro-dev.ml/forms/notify/") => {

    const headers = {"Content-Type": "application/json;charset=utf-8"};

    let init = {
        method: method,
        headers: headers
    }

    if (method === "POST") {
        init = {
            ...init,
            body: JSON.stringify(data),
        }
    }

    const response = await fetch(`${url}`, init);

    console.log('response', response);

    return response;
};

export const strapiUrl = 'https://admin.rivierasunrise.ru'




