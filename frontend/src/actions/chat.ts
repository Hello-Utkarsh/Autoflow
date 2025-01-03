export async function getChat(token: string) {
  try {
    const req = await fetch(`${import.meta.env.VITE_PORT}/chat`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const res = await req.json();
    if (req.status == 200) {
      return res;
    }
    throw new Error(res.message);
  } catch (error) {
    return error;
  }
}

export async function createChat(token: string) {
  try {
    const req = await fetch(`${import.meta.env.VITE_PORT}/chat`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "New Chat",
      }),
    });
    const res = await req.json();
    if (req.status == 200) {
      return res;
    }
    throw new Error(res.message);
  } catch (error) {
    return error;
  }
}

export async function updateChat(token: string, id: string, name: string) {
  try {
    const req = await fetch(`${import.meta.env.VITE_PORT}/chat`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name }),
    });
    const res = await req.json();
    if (req.status == 200) {
      return res;
    }
    throw new Error(res.message);
  } catch (error) {
    return error;
  }
}

export async function deleteChat(token: string, chatid: string) {
  try {
    const req = await fetch(`${import.meta.env.VITE_PORT}/chat`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ chatid }),
    });
    const res = await req.json();
    if (req.status == 200) {
      return res;
    }
    throw new Error(res.message);
  } catch (error) {
    return error;
  }
}
