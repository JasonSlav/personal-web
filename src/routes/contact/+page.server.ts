// src/routes/contact/+page.server.ts
export const actions = {
    default: async ({ request }) => {
      const data = await request.formData();
      const name = data.get("name");
      const email = data.get("email");
      const message = data.get("message");
  
      console.log("Pesan baru:", { name, email, message });
  
      return { success: true };
    }
  };
  