# Şirvan Ekürisi — Premium Binicilik Okulu Web Sitesi

Ankara Yenimahalle'de bulunan Şirvan Ekürisi Binicilik Okulu için Next.js 15 + TypeScript + Tailwind CSS ile geliştirilmiş, premium binicilik markası dilinde, mobil öncelikli, SEO uyumlu ve yüksek performanslı bir web sitesi.

## Teknoloji

- **Next.js 15** (App Router, React 19, Server Components)
- **TypeScript** (strict)
- **Tailwind CSS** + özel renk paleti (Ink #1B1B1B, Tan #8B6F47, Cream #F5F2ED)
- **Framer Motion** (animasyonlar)
- **lucide-react** (ikonlar)
- **next/font** ile Playfair Display + Inter
- **next/image** ile AVIF/WebP, responsive sizes ve lazy loading

## Kurulum

```bash
cd sirvan-ekurisi
npm install
npm run dev
```

Tarayıcıdan http://localhost:3000 adresine gidin.

## Build & Production

```bash
npm run build
npm run start
```

## Sayfa Yapısı

```
/                  Anasayfa (Hero, WhyUs, About, Programs, Horses, Facility, Testimonials, Blog, Contact)
/hakkimizda        Hikaye, değerler, eğitmen kadrosu
/egitimler         4 program + ders akışı
/atlarimiz         Tüm atlar (6 örnek)
/tesisimiz         Açık manej, kapalı manej, ahırlar, sosyal alan
/galeri            Filtrelenebilir lightbox galeri
/blog              4 örnek yazı (kategorize)
/blog/[slug]       Tekil blog yazısı (static generation)
/iletisim          Form + harita + iletişim bilgileri
/gizlilik          Gizlilik politikası
/kvkk              KVKK aydınlatma metni
/sitemap.xml       Otomatik sitemap
/robots.txt        Otomatik robots
```

## SEO

- ✅ Her sayfada özel `metadata` (title, description, OG, Twitter card)
- ✅ `LocalBusiness` + `SportsActivityLocation` + `EducationalOrganization` JSON-LD
- ✅ `BreadcrumbList` JSON-LD her iç sayfada
- ✅ `Course` JSON-LD eğitim sayfasında
- ✅ `BlogPosting` JSON-LD blog yazılarında
- ✅ `sitemap.ts` ve `robots.ts` Next.js metadata route
- ✅ `canonical` URL'ler
- ✅ Anlamlı `alt` metinleri, semantic HTML, breadcrumb nav
- ✅ Geo-meta etiketleri (geo.region, geo.position)
- ✅ `prefers-reduced-motion` desteği

## Performans

- ✅ AVIF + WebP otomatik dönüşüm
- ✅ `next/font` `display: swap` + preload
- ✅ Bileşen seviyesinde lazy load (Framer Motion `whileInView`)
- ✅ Server Components (anasayfa hariç sadece etkileşimli yerler `'use client'`)
- ✅ `optimizePackageImports` ile `lucide-react` ve `framer-motion` için tree-shaking
- ✅ Uzun süreli HTTP caching (`/images/*` 1 yıl immutable)
- ✅ Güvenlik header'ları (HSTS, X-Content-Type-Options, Referrer-Policy)

## Mobil Uyumluluk

- Mobile-first Tailwind breakpoints (640, 768, 1024, 1280, 1440)
- Touch-friendly buton boyutları (min 44×44)
- Hamburger menüsü, body scroll lock, accessible focus
- Sticky WhatsApp butonu (44/56 px)
- Fluid typography (`clamp()` ile)

## Görseller

Sitedeki tüm görseller `/public/images/` altında klasörlenmiş ve `data/*.ts` dosyalarında referans gösteriliyor:

```
public/images/
├── hero/main.jpg               (Hero arka plan)
├── horses/{slug}.jpg           (Her at için)
├── programs/{baslangic,cocuk,yetiskin,profesyonel}.jpg
├── facility/{acik-manej, kapali-manej, ahir, sosyal-alan, hero}.jpg
├── about/{founder, story}.jpg
├── instructors/{bas-egitmen, dressage, cocuk}.jpg
├── gallery/01.jpg … 12.jpg
├── blog/{baslarken, cocuk, bakim, yaris}.jpg
└── og/og-default.jpg           (1200×630 OG image)
```

Görseller eksikse `SmartImage` bileşeni otomatik olarak şık bir placeholder gösterir; site yine de doğru çalışır. Gerçek görselleri eklediğinde herhangi bir kod değişikliği gerekmez — sadece dosyaları aynı isimle aynı yola koy.

### Önerilen görsel boyutları

- **Hero:** 2560×1440 (.jpg, sıkıştırılmış)
- **Atlar:** 1200×1500 portrait
- **Programlar:** 1600×960 landscape
- **Tesis:** 1600×1200 landscape
- **Blog:** 1600×1067 landscape
- **Galeri:** 1600×1067 (yatay) veya 1067×1600 (dikey)
- **OG image:** 1200×630

## Tasarım Sistemi

| Token | Değer |
| --- | --- |
| Primary (Ink) | `#1B1B1B` |
| Secondary (Tan) | `#8B6F47` |
| Background (Cream) | `#F5F2ED` |
| White | `#FFFFFF` |
| Display Font | Playfair Display |
| Body Font | Inter |
| Container max | 1440 px |
| Section padding | 80 / 112 / 144 px |

## Dosya Yapısı

```
sirvan-ekurisi/
├── app/                    Next.js 15 App Router
├── components/
│   ├── layout/             Header, Footer, WhatsApp
│   ├── home/               Anasayfa bölümleri
│   ├── sections/           ContactForm, GalleryGrid
│   ├── cards/              HorseCard, ProgramCard, BlogCard, FeatureCard
│   ├── ui/                 Button, SectionTitle, FadeIn, PageHero, SmartImage, Placeholder
│   └── seo/                JsonLd
├── data/                   horses, programs, instructors, blogPosts, gallery, testimonials, whyUs, facility
├── lib/                    constants, seo, utils
├── types/                  index.ts
├── public/                 favicon, manifest, images
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```

## Yapılacaklar (Sonraki Adımlar)

1. **Görselleri yerleştir** — `/public/images/` altındaki klasörlere ekle, dosya adlarını `data/*.ts` ile eşle.
2. **Domain & OG image** — `lib/constants.ts` içindeki `SITE.url`'i gerçek domainle değiştir, `og-default.jpg` (1200×630) ekle.
3. **Form backend** — `components/sections/ContactForm.tsx` şu an demo. Resend, Formspree veya kendi `/api/contact` route'una bağla.
4. **Analytics** — Google Analytics / Plausible ekle (`app/layout.tsx`).
5. **Domain doğrulama** — Search Console + Bing Webmaster için verification metası ekle.
6. **Site içeriği** — `data/*.ts` dosyalarındaki örnek metinleri gerçek bilgilerle güncelle.

---

İletişim: Beştepe, Alparslan Türkeş Cd. No:8, 06560 Yenimahalle/Ankara · 0506 069 81 18
