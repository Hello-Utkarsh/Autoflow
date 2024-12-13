export async function getMessages(token: string, chatid: string) {
  try {
    const req = await fetch(
      `${import.meta.env.VITE_PORT}/message?chatid=${chatid}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const res = await req.json();
    if (req.status == 200) {
      return res;
    }
    throw new Error(res.message);
  } catch (error) {
    return error;
  }
}

export async function createMessage(
  token: string,
  chatid: string,
  userPrompt: string
) {
  try {
    const req = await fetch(
      `${import.meta.env.VITE_PORT}/message?chatid=${chatid}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userPrompt }),
      }
    );
    const res = await req.json();
    if (req.status == 200) {
      return res;
    }
    throw new Error(res.message);
  } catch (error) {
    return error;
  }
}
