import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);

// Obtener todos los productos
export const getItems = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "items"));
        const products = [];
        querySnapshot.forEach((doc) => {
            products.push({ id: doc.id, ...doc.data() });
        });
        return products;
    } catch (error) {
        console.error("Error al obtener productos:", error);
        return [];
    }
};

// Obtener productos por categoría
export const getItemsByCategory = async (categoryId) => {
    try {
        const q = query(collection(db, "items"), where("category", "==", categoryId));
        const querySnapshot = await getDocs(q);
        const products = [];
        querySnapshot.forEach((doc) => {
            products.push({ id: doc.id, ...doc.data() });
        });
        return products;
    } catch (error) {
        console.error("Error al obtener productos por categoría:", error);
        return [];
    }
};

// Obtener un producto por ID
export const getItemById = async (id) => {
    try {
        const docRef = doc(db, "items", id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            console.log("No existe el producto");
            return null;
        }
    } catch (error) {
        console.error("Error al obtener producto:", error);
        return null;
    }
};

// Agregar datos de las ordenes de compra
export const createOrder = async (order) => {
    try {
        const docRef = await addDoc(collection(db, "orders"), order);
        console.log("Orden creada con ID: ", docRef.id);
        return docRef.id;
    } catch (e) {
        console.error("Error al crear orden: ", e);
        return null;
    }
};