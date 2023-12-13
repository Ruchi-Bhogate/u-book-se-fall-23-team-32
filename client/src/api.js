import axios from "axios";
export const createMessage = async ({ participants, message }) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const apiUrl =
      "https://u-book-se-fall-23-team-32-hm4hr39j8-ruchis-projects-419a70ff.vercel.app/messages";
    const response = await axios.post(
      apiUrl,
      {
        participants: participants,
        message: message,
      },
      headers
    );
    console.log("Message created:", response.data);
  } catch (error) {
    console.error("Error creating message:", error.message);
  }
};

export const getMessages = async ({ withId }) => {
  try {
    const token = localStorage.getItem("token");
    let queryParams = {
      params: {
        with: withId,
      },
    };
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const apiUrl =
      "https://u-book-se-fall-23-team-32-hm4hr39j8-ruchis-projects-419a70ff.vercel.app/messages?with=" +
      withId;
    const response = await axios.get(apiUrl, headers);
    console.log("Messages:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error getting messages:", error.message);
  }
};

export const getAllChats = async () => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const apiUrl =
      "https://u-book-se-fall-23-team-32-hm4hr39j8-ruchis-projects-419a70ff.vercel.app/messages/allchats";
    const response = await axios.get(apiUrl, headers);
    console.log("Messages:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error getting messages:", error.message);
  }
};
