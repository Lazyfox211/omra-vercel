// Sacred places
export const PLACES = [
  {
    id: 'haram',
    img: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=1920&q=80&auto=format',
    name: 'Al-Masjid al-Haram',
    arabic: 'المسجد الحرام — مكة المكرمة',
  },
  {
    id: 'nabawi',
    img: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=1920&q=80&auto=format',
    name: 'Al-Masjid an-Nabawi',
    arabic: 'المسجد النبوي — المدينة المنورة',
  },
]

export function getPlace() {
  const idx = Math.floor(Date.now() / 1000) % 2
  return PLACES[idx]
}

// Window layer images
export const WINDOW_LAYERS = {
  back: 'https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68d27a91bc0bf516a17a3f69_img_hero-back.webp',
  front: 'https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68d9dfe10f1c8a1d719c1e63_917d8b944f7f57b7fbe3969bf2719a2e_img_hero-front.webp',
  over: 'https://cdn.prod.website-files.com/68b57ef5ef86011d9b251e8e/68d9ddb4432de688d8f96eb1_img_hero-front-over.webp',
}
