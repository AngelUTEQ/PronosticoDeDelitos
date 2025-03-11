#!C:/Users/tu usuario/AppData/Local/Programs/Python/Python313/python.exe

import mysql.connector

print("Content-Type: text/html\n")
print("<html>")
print("<head>")
print("<title>Consulta MySQL con Python</title>")
print("</head>")
print("<body>")
print("<h1>Resultados de la consulta</h1>")

try:
    # Conectar a la base de datos
    conexion = mysql.connector.connect(
        host="localhost",
        user="root",                   # Tu usuario de MySQL
        password="tu contrasena",      # Tu contraseña de MySQL
        database="tu bd"    # Nombre de tu base de datos
    )

    if conexion.is_connected():
        cursor = conexion.cursor()
        
        # Ejecutar el SELECT
        cursor.execute("SELECT * FROM alumnos")  # Ajusta tu consulta
        resultados = cursor.fetchall()
        
        # Mostrar resultados en tabla HTML
        print("<table border='1'>")
        print("<tr><th>ID</th><th>Matricula</th><th>Nombre</th><th>Apellido</th></tr>")
        
        for fila in resultados:
            print(f"<tr><td>{fila[0]}</td><td>{fila[1]}</td><td>{fila[2]}</td><td>{fila[3]}</td></tr>")
        
        print("</table>")
        
        # Cerrar conexión
        cursor.close()
        conexion.close()
    
    else:
        print("<p>No se pudo conectar a la base de datos.</p>")

except mysql.connector.Error as e:
    print(f"<p>Error al conectar a MySQL: {e}</p>")

print("</body>")
print("</html>")
