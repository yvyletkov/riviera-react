export const request = async (data) => {

    const baseUrl = "https://team.upro-dev.ml/forms/notify/";
    const headers = {"Content-Type": "application/json;charset=utf-8"};

    const response = await fetch(`${baseUrl}`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
    });

    console.log('response', response);

    return response;
};



