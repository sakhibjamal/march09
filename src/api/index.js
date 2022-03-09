import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "https://api.nytimes.com/svc/books/v3/lists/",
});

console.log(instanceAxios.defaults.headers);

export const getBooksByCategory = async (category = "") => {
  try {
    const res = await instanceAxios.get(
      `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=a1t87UGYGh49TY1nXDvsimgamnlzwY82`
    );

    console.log(res.data.results);

    return { success: true, data: res.data };
  } catch (error) {
    return { success: false };
  }
};

export const getInfos = async (list_name_encoded) => {
  try {
    const res = await axios.get(
      `https://api.nytimes.com/svc/books/v3/lists/current/${list_name_encoded}.json?api-key=a1t87UGYGh49TY1nXDvsimgamnlzwY82`
    );

    console.log(res);
    
     return { success: true, data: res.data.results };
  } catch (error) {
    return { success: false };
  }
};
