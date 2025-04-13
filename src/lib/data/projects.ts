export const projects = [
    {
      slug: "port-scanner",
      category: "Cyber Security",
      title: "Port Scanner",
      desc: "Scanner port sederhana dengan Python",
      tech: ["Python", "Socket"],
      github: "https://github.com/username/portscanner",
      content: `
        <p>Port scanner ini memindai port terbuka pada IP target menggunakan modul <code>socket</code>.</p>
        <pre><code>python3 scanner.py --ip 127.0.0.1 --ports 20-80</code></pre>
      `
    },
    {
      slug: "xss-demo",
      category: "Cyber Security",
      title: "XSS Simulator",
      desc: "Simulasi serangan XSS untuk edukasi",
      tech: ["HTML", "JS"],
      github: "https://github.com/username/xss-demo",
      content: `
        <p>Demo XSS untuk belajar bagaimana serangan dilakukan dan bagaimana cara mencegahnya.</p>
      `
    },
    {
        slug: "auth-api",
        category: "Backend Dev",
        title: "Authentication API",
        desc: "RESTful API dengan JWT",
        tech: ["HTML", "JS"],
        github: "https://github.com/username/xss-demo",
        content: `
          <p>Demo XSS untuk belajar bagaimana serangan dilakukan dan bagaimana cara mencegahnya.</p>
        `
    }
  ];
  