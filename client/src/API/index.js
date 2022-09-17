import axios from "axios";

export const SendEmail = async ({ name, email, message, setSend }) => {
  try {
    const datas = { name, email, message };

    let res = await axios.post(`https://tyestanley.herokuapp.com/send`, datas);

    if (res) {
      setSend(res.data);
    }

  } catch (error) {
    console.log(error);
    //alert(error.response.data.message);
  }
}
