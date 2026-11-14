const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  // 1. Configurar cabeceras CORS para permitir cualquier origen (*)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST, GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // 2. Manejar la petición OPTIONS (Preflight que envían los navegadores antes de un POST)
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  // 3. Endpoint de Login (POST /login)
  if (req.method === "POST" && req.url === "/login") {
    let body = "";

    // Recibir los datos enviados en el cuerpo (body) de la petición
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    // Cuando termina de llegar la información
    req.on("end", () => {
      try {
        const { email, password } = JSON.parse(body);

        // Validación de ejemplo (puedes cambiarla por tu lógica o base de datos)
        if (email === "admin@admin.com" && password === "123456") {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              id: "1",
              email: "admin@admin.com",
              name: "Admin",
              roles: ["admin"],
            }),
          );
        } else {
          res.writeHead(401, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              success: false,
              message: "Correo o contraseña incorrectos",
            }),
          );
        }
      } catch (error) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            success: false,
            message: "El cuerpo de la petición no es un JSON válido",
          }),
        );
      }
    });
    return;
  }

  // 4. Ruta no encontrada (404)
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ success: false, message: "Ruta no encontrada" }));
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
