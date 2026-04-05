/** Shared constants for the Templates route — re-exported to avoid duplication */

export const FILTERS = ['All', 'Classic', 'Modern', 'Romantic', 'Avant-Garde'] as const
export type FilterKey = (typeof FILTERS)[number]

export type Height = 'tall' | 'med' | 'short'

export interface Template {
  id: string
  name: string
  subtitle: string
  height: Height
  src: string
  alt: string
  category?: FilterKey
}

export const TEMPLATES: Template[] = [
  {
    id: '1', name: 'Aurelian Night', subtitle: 'Hand-pressed Gold Foil',
    height: 'tall', category: 'Classic',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYzgK2Xa_p1LTTohqE_55cJ7mRvvDhB7-sON_7reYqXSJQmXsGzvAChUZFz_-eLgFLjk3OkY4qrE6dL7Izu4LvhxGozsa1_ocBWz3fi_m9gKu0N2Q-IMv3ntP2WJaSQK_gyI3yuMNKqIglBTmpKVQsD9Ja4Nb5ksG5w2h_25fLFAgqyqv55BSdTZGh2vZYLy4fb3fTWXTph8cisdpqvgDU2jSGUvJn0fZJLHJcOcOHgX5k4TxewmJj-UsFKA-zxh6m_RrUkECxllwT',
    alt: 'Luxury gold foil wedding invitation',
  },
  {
    id: '2', name: 'Twilight Veil', subtitle: 'Translucent Vellum',
    height: 'short', category: 'Modern',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6rVTUG4s9nD-4zHAHJ0SKl7yhtiK0D22ZAvOU0e7Bd4Qr48a9ObKzVyPw35ok2InCr-FcDxvhse7e9-t1wQ0Bg6NwajC0YgmNDWZXtUxFFsRCtyuzhusZwPW-_k227bnPf6ZOaoUJq61amvHMafkannXW712t8idxD5PutAX3NUuRVM8BVW52fJamCEujoEJqgYWGwrBYl6YBeXBQl7kJeWhjaTwkpRrf8cGg3Ubg6wjt3PLt4gpnWimXRPpBko4YNE6o8PoujCBQ',
    alt: 'Minimalist vellum stationery design',
  },
  {
    id: '3', name: 'Ethereal Bloom', subtitle: 'Digital Watercolor',
    height: 'med', category: 'Romantic',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzuebvfd3sihQt5L_eXJaTjkN0Uob4R2XX2OxdIobv0wtOzReSVQLH_zL0AuKyP4jP_Z5fLH_HlovIa40CbcH62rj8XtRWqYnbfK3PFPgj5NIJj7i39daX6SN3iD4HFP8vp_mgC3fi9UchT4QUCOx3oKSW_rJGzAjKry8vcJ6TiAEq_k5gI_shQpmT4ewAbesrYAD9WudRi2NK_LiejU1K6N0oSJgLPbQi6BoGTa0eMaDg4CLQgzR7eCDfxhvQ10OVoSkmpZjoqM24',
    alt: 'Botanical watercolor wedding invitation',
  },
  {
    id: '4', name: 'Modern Muse', subtitle: 'Architectural Noir',
    height: 'tall', category: 'Avant-Garde',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmlJKFBPK64tR07fydc6LLaPx6VHIUkDFZyqlpjsCK7Sfcg2r-uJgVZXfjED_8uhC2dwUqpgrCdcBMccHocehbRo6t_N8CgikxK0ExpBSyBZitreSk3l4ujWsWNLTU_jFVZJ0c2RleLfQLgfwsU1LEMY4rN2lA0M4Y_7UTHWBZdUBQuiZm38MgpRyqWIAJB_ViZbtnch1r6GzZyiXSbjlPIaZLPijFxqXcJaN9bfHAugybWLxSpvKKylMBNs2RmAfbxbmlCriVNBm8',
    alt: 'Editorial noir style invitation',
  },
  {
    id: '5', name: 'Nocturne Echo', subtitle: 'Deep Letterpress',
    height: 'short', category: 'Classic',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiXWn1vvXX8lOGUbmxqpT4frS5TtaSVeaA5l00rHtuo-mltHqTARSmGxV8bMJWNo2MkFIb-r0713L5N3lSXYzgS7mJ0O8f-1q00cRwCNvm2O8C28y_D2bd55Gc_LyG7vlZU4wIJrTahd3toAAMFubYBMC1fldRCMjC_GzqdNIdo3FYMYAcCHNN6nVSvM8OvtArwtJZFxObkGp4TwirW_Uj42ie1MKyG80Y0RVm8ODV_CGV4qMJ-D9zE9NxJ_FeHghVOgUpxniJlTcf',
    alt: 'Deep letterpress texture on dark paper',
  },
  {
    id: '6', name: 'Old World Grace', subtitle: 'Deckled Edge Cotton',
    height: 'med', category: 'Romantic',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB74nDqtHEWYBDvhCkcDj3-azDG-8OzhkaytDppQSyjskM125SLOWC3Eir4zxsFBu8jcHbnLjkgOSZ8ez-hK94ivOG9cub0ZQ6dgi7xRQXa9hnLr-U6lnuKaDMxd0k3lSGwzJtqqDLz6GfiHM-2ke6u70h9jhT_CweeYvBUmsz-S9a_pkVrxcRrkHvH5vajnAkeXMMVdZrxI9ltrGVdUct2FmK-Fy5d9cHU4lE0guQENRYD45MgCRe8CyLOnmyrNGV3S6MfoEwocxa3',
    alt: 'Elegant place card with classic calligraphy',
  },
]
