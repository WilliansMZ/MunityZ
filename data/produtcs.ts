// Interfaz de producto
export interface Product {
  id: string;
  name: string;
  price: number;
  displayPrice: string;
}

// Catálogo de servicios
export const products: Product[] = [
  { 
    id: 'dev_1', 
    name: 'Landing Page SEO', 
    price: 50000, // S/ 500.00
    displayPrice: 'S/ 500.00' 
  },
  { 
    id: 'dev_2', 
    name: 'Tienda Online (WooCommerce)', 
    price: 85000, 
    displayPrice: 'S/ 850.00' 
  },
  { 
    id: 'dev_3', 
    name: 'E-commerce a Medida (Headless)', 
    price: 150000, 
    displayPrice: 'S/ 1500.00' 
  },
  { 
    id: 'dev_4', 
    name: 'App Móvil Multiplataforma', 
    price: 250000, 
    displayPrice: 'S/ 2500.00' 
  },
  { 
    id: 'dev_5', 
    name: 'Automatización de Tareas con IA', 
    price: 120000, 
    displayPrice: 'S/ 1200.00' 
  },
  { 
    id: 'dev_6', 
    name: 'Sistema de Gestión Interna', 
    price: 200000, 
    displayPrice: 'S/ 2000.00' 
  },
];