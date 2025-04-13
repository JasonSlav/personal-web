<!-- src/lib/components/ContactForm.svelte -->
<form method="POST" class="max-w-md mx-auto space-y-4">
    <input name="name" type="text" placeholder="Nama" class="w-full p-2 border rounded" required />
    <input name="email" type="email" placeholder="Email" class="w-full p-2 border rounded" required />
    <textarea name="message" placeholder="Pesan..." class="w-full p-2 border rounded" required></textarea>
    <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Kirim</button>
  </form>
  