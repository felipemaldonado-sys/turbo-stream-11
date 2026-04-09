/**
 * Productos alineados con Turbo en Rappi Colombia:
 * https://www.rappi.com.co/tiendas/900139851-turbo
 *
 * imageUrl: foto del catálogo (images.rappi.com, misma URL base que og:image de cada ficha).
 * Si Rappi cambia un producto, actualiza la URL o el slug en rappi.com.co/p/...
 *
 * Respaldo tras error de carga: SUGGESTED_PRODUCT_IMAGE_FALLBACK (Wikimedia vía proxy).
 * Para usar archivo local, pon imageUrl como `/suggested-products/tu-foto.jpg`.
 *
 * rappiProductUrl: ficha del producto en Rappi (mismo SKU que en Turbo cuando aplica).
 * Tienda Turbo: https://www.rappi.com.co/tiendas/900139851-turbo
 */

export type SuggestedProduct = {
  id: string;
  name: string;
  priceLabel: string;
  imageUrl: string;
  /** Abre en nueva pestaña al pulsar "Agregar". */
  rappiProductUrl: string;
  hint?: string;
};

/** Recurso en el CDN de Rappi (misma imagen que en la app / web de la tienda). */
const R = (file: string) => `https://images.rappi.com/products/${file}`;

const P = (path: string) => `https://www.rappi.com.co/p/${path}`;

export const SUGGESTED_PRODUCTS_CO: SuggestedProduct[] = [
  {
    id: "1",
    name: "Aguacate Hass para hoy Turbo",
    priceLabel: "$2.200",
    imageUrl: R("7bbeb970-ceac-4509-9d6a-cbb182d320f7.png"),
    rappiProductUrl: P("aguacate-hass-para-hoy-turbo-2088116"),
    hint: "Fruver",
  },
  {
    id: "2",
    name: "Banano criollo",
    priceLabel: "$700",
    imageUrl: R("f45bd79a-1994-40e0-a7f6-192c0e42294d.png"),
    rappiProductUrl: P("banano-criollo-2088122"),
    hint: "Fruver",
  },
  {
    id: "3",
    name: "Tomate chonto Turbo",
    priceLabel: "$1.300",
    imageUrl: R("092b1ef9-6003-4d6b-8dcb-e181e6b5da10.png"),
    rappiProductUrl: P("tomate-chonto-turbo-2088146"),
    hint: "Fruver",
  },
  {
    id: "4",
    name: "Gaseosa Coca-Cola Original 1,5 L",
    priceLabel: "$7.100",
    imageUrl: R("f867a06b-4396-45f6-a640-d4807071d609.jpg"),
    rappiProductUrl: P("gaseosa-coca-cola-original-15l-1813647"),
    hint: "Bebidas",
  },
  {
    id: "5",
    name: "Colanta leche líquida entera 1 L",
    priceLabel: "$5.600",
    imageUrl: R("569843970871_zencrpuzdbmr_410739373240_rcadqqepauxr_2641220_1.png"),
    rappiProductUrl: P("colanta-leche-liquida-entera-2641220"),
    hint: "Lácteos",
  },
  {
    id: "6",
    name: "Kikes huevos rojos AA x15",
    priceLabel: "$15.200",
    imageUrl: R("4b73b6e4-442b-4902-ac2b-4c6ebcfbe03b.png"),
    rappiProductUrl: P("kikes-huevos-rojos-1173274"),
    hint: "Lácteos",
  },
  {
    id: "7",
    name: "Gaseosa Coca-Cola Zero 1,5 L",
    priceLabel: "$7.000",
    imageUrl: R("ed4aa7a0-ff90-41fb-93a6-9f560caa3e7f.jpg"),
    rappiProductUrl: P("coca-cola-gaseosa-zero-15-l-16000"),
    hint: "Bebidas · Sin azúcar",
  },
  {
    id: "8",
    name: "Cristal agua 1 L",
    priceLabel: "$2.400",
    imageUrl: R("01c321f2-56a5-4a77-91e8-5d1dc68b4061.png"),
    rappiProductUrl: P("cristal-agua-1000-ml-17238"),
    hint: "Bebidas",
  },
  {
    id: "9",
    name: "Galleta Oreo fresa",
    priceLabel: "$8.900",
    imageUrl: R("938663533824_eaifplmqpror_798206186293_oeeolefzpwjeag_7622202368578_1.png"),
    rappiProductUrl: P("galleta-oreo-fresa-7249086"),
    hint: "Dulces y galletas",
  },
  {
    id: "10",
    name: "Jet chocolatina 2 u",
    priceLabel: "$2.500",
    imageUrl: R("878709479806_ewdgcccrhttn_447695015861_slbwfwmdgcik_4030655_1.png"),
    rappiProductUrl: P("jet-chocolatina-con-lamina-4030655"),
    hint: "Chocolates",
  },
  {
    id: "11",
    name: "Maizena fécula de maíz 380 g",
    priceLabel: "$16.400",
    imageUrl: R("3c54a44d-9349-460d-b07a-76db062cefaf.png"),
    rappiProductUrl: P("maizena-fecula-de-maiz-93247"),
    hint: "Despensa",
  },
  {
    id: "12",
    name: "Salsa de tomate Fruco doypack 600 g",
    priceLabel: "$20.100",
    imageUrl: R("d9496836-c565-41ae-90ca-6c8733a1a497.png"),
    rappiProductUrl: P("salsa-de-tomate-fruco-doypack-600-g-94707"),
    hint: "Despensa",
  },
  {
    id: "13",
    name: "Mango tommy Turbo",
    priceLabel: "$5.900",
    imageUrl: R("6298404f-939c-48ad-9eef-c496ad92ae55.png"),
    rappiProductUrl: P("mango-tommy-turbo-2088283"),
    hint: "Fruver",
  },
  {
    id: "14",
    name: "Pepino cohombro Turbo",
    priceLabel: "$3.050",
    imageUrl: R("d66e0145-24f4-4ccf-81cb-f0bf36e602af.png"),
    rappiProductUrl: P("pepino-cohombro-turbo-2088190"),
    hint: "Fruver",
  },
  {
    id: "15",
    name: "Colanta queso tipo mozzarella 250 g",
    priceLabel: "$13.400",
    imageUrl: R("f81d974b-3f39-40e7-9e00-e291093d0b71.png"),
    rappiProductUrl: P("colanta-queso-tipo-mozzarella-tajad-17303"),
    hint: "Lácteos",
  },
  {
    id: "16",
    name: "Alpina mantequilla sin sal 125 g",
    priceLabel: "$12.100",
    imageUrl: R("c9483c0d-a1c6-44bd-8448-56052424b89e.png"),
    rappiProductUrl: P("alpina-mantequilla-sin-sal-16968"),
    hint: "Lácteos",
  },
  {
    id: "17",
    name: "Cerveza Michelob Ultra lata 269 ml x6",
    priceLabel: "$15.300",
    imageUrl: R("f26f056c-474a-47e1-b115-7b0fbf2d6530.png"),
    rappiProductUrl: P("cerveza-michelob-ultra-lata-269ml-x-4969202"),
    hint: "Licores y cervezas",
  },
  {
    id: "18",
    name: "Trululu gomita frutal nano tropical 100 g",
    priceLabel: "$3.900",
    imageUrl: R("68f8687a-a41e-4d5a-a32c-9de2469e567c.png"),
    rappiProductUrl: P("trululu-gomita-frutal-nano-tropical-7259400"),
    hint: "Dulces",
  },
  {
    id: "19",
    name: "Hershey's tableta blanco cookies n creme 43 g",
    priceLabel: "$7.500",
    imageUrl: R("6253f0f5-3078-41ba-ae99-da5f3f370849.png"),
    rappiProductUrl: P("hersheys-tableta-de-chocolate-blanc-68942"),
    hint: "Chocolates",
  },
  {
    id: "20",
    name: "Manzana verde Turbo",
    priceLabel: "$2.850",
    imageUrl: R("ee1f6b86-9731-4a60-bb6e-099bca5b878f.png"),
    rappiProductUrl: P("manzana-verde-turbo-2263247"),
    hint: "Fruver",
  },
];

/** Si falla el CDN de Rappi (red, URL antigua, etc.). */
export const SUGGESTED_PRODUCT_IMAGE_FALLBACK: Record<string, string> = {
  "1": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Avocado_Hass_-_whole_and_halved.jpg/320px-Avocado_Hass_-_whole_and_halved.jpg",
  "2": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bananas.jpg/320px-Bananas.jpg",
  "3":
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bright_red_tomato_and_cross_section02.jpg/320px-Bright_red_tomato_and_cross_section02.jpg",
  "4": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Can_Coca_Cola.jpg/320px-Can_Coca_Cola.jpg",
  "5": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Milk_glass.jpg/320px-Milk_glass.jpg",
  "6": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Eggs_in_an_egg_carton.jpg/320px-Eggs_in_an_egg_carton.jpg",
  "7": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Can_Coca_Cola.jpg/320px-Can_Coca_Cola.jpg",
  "8": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Plastic_water_bottle.jpg/320px-Plastic_water_bottle.jpg",
  "9": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Oreo-Two-Cookies.jpg/320px-Oreo-Two-Cookies.jpg",
  "10": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Chocolate_bar_%28cropped%29.jpg/320px-Chocolate_bar_%28cropped%29.jpg",
  "11": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Cornmeal.jpg/320px-Cornmeal.jpg",
  "12": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bright_red_tomato_and_cross_section02.jpg/320px-Bright_red_tomato_and_cross_section02.jpg",
  "13": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mango_and_cross_section_edit.jpg/320px-Mango_and_cross_section_edit.jpg",
  "14": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/ARS_cucumber.jpg/320px-ARS_cucumber.jpg",
  "15": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Cheese_various.jpg/320px-Cheese_various.jpg",
  "16": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Butter_in_a_dish.jpg/320px-Butter_in_a_dish.jpg",
  "17": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Beer_tankard.jpg/320px-Beer_tankard.jpg",
  "18": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Gummi_bears_in_a_bowl.jpg/320px-Gummi_bears_in_a_bowl.jpg",
  "19": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Chocolate_bar_%28cropped%29.jpg/320px-Chocolate_bar_%28cropped%29.jpg",
  "20": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Green_Apple.jpg/320px-Green_Apple.jpg",
};

export function resolvedSuggestedImageUrl(imageUrl: string): string {
  if (imageUrl.startsWith("/")) {
    return imageUrl;
  }
  if (
    imageUrl.startsWith("https://upload.wikimedia.org/wikipedia/commons/") ||
    imageUrl.startsWith("https://images.rappi.com/products/")
  ) {
    return `/api/product-image?u=${encodeURIComponent(imageUrl)}`;
  }
  return imageUrl;
}

/** @deprecated Usar resolvedSuggestedImageUrl */
export function proxiedSuggestedImageUrl(imageUrl: string): string {
  return resolvedSuggestedImageUrl(imageUrl);
}
