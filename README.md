# Axiom Play 🎮

E-commerce de videojuegos, consolas y gaming laptops desarrollado con React y Firebase.

## 🚀 Tecnologías utilizadas

- **React 19** - Librería de UI
- **React Router 7** - Navegación SPA
- **Firebase/Firestore** - Base de datos
- **Bootstrap 5** - Componentes UI
- **Font Awesome** - Iconos
- **Vite** - Build tool

## 📦 Instalación
```bash
# Clonar el repositorio
git clone [tu-repositorio]

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## ✨ Características

- ✅ Catálogo completo de productos
- ✅ Filtrado por categorías (Gaming Laptop, Consoles, Videogames)
- ✅ Vista detallada de cada producto
- ✅ Carrito de compras funcional
- ✅ Contador de stock en tiempo real
- ✅ Formulario de checkout con validación
- ✅ Órdenes guardadas en Firebase
- ✅ Navegación SPA sin recargas
- ✅ Diseño responsive

## 📁 Estructura del proyecto
```
src/
├── components/        # Componentes React
│   ├── Navbar.jsx
│   ├── CartWidget.jsx
│   ├── ItemListContainer.jsx
│   ├── ItemList.jsx
│   ├── Item.jsx
│   ├── ItemDetailContainer.jsx
│   ├── ItemDetail.jsx
│   ├── ItemCount.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   └── NotFound.jsx
├── context/          # Context API
│   └── CartContext.jsx
├── firebase/         # Configuración Firebase
│   ├── config.js
│   └── db.js
├── App.jsx
├── App.css
└── main.jsx
```

## 🔥 Configuración de Firebase

El proyecto utiliza Firebase Firestore con las siguientes colecciones:

### Colección: `items`
Estructura de productos:
```javascript
{
  title: "ASUS ROG Strix SCAR 18",
  description: "Potente laptop para jugar y trabajar",
  price: 4000,
  images: "URL_de_imagen",
  category: "gaming laptop",
  brand: "asus",
  rating: 4,
  stock: 20
}
```

### Colección: `orders`
Estructura de órdenes:
```javascript
{
  buyer: {
    name: "Juan Pérez",
    email: "juan@example.com",
    phone: "+56912345678",
    address: "Dirección completa"
  },
  items: [...productos comprados],
  total: 5000,
  date: "2024-12-05T18:30:00.000Z"
}
```

## 🛠️ Funcionalidades principales

### Navegación
- Rutas dinámicas para categorías y detalle de productos
- URL params para filtrado
- NavLinks con indicador visual de ruta activa

### Carrito de compras
- Agregar/eliminar productos
- Modificar cantidades
- Cálculo automático de totales
- Persistencia durante la sesión

### Checkout
- Formulario con validación
- Creación de orden en Firebase
- Confirmación con ID de orden
- Limpieza automática del carrito

## 👤 Autor

[Tu nombre]

## 📄 Licencia

Este proyecto fue desarrollado como parte del curso de React en Coderhouse.