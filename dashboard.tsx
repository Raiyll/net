import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useRef } from 'react'; 
import { ChevronLeft, ChevronRight } from 'lucide-react'; 
import Header from "@/netcomp/header";


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

const dummyData = {
  continueWatching: [
    {  thumbnail: "/img/Totoro.png" },
    {  thumbnail: "/img/howl.png" },
    {  thumbnail: "/img/The conjuring.png" },
    {  thumbnail: "/img/kaka.png" },
    {  thumbnail: "/img/cektoko.png" },
    {  thumbnail: "/img/wifty.png" },
    {  thumbnail: "/img/kuroko.png" },
    {  thumbnail: "/img/pedal.png" },
    {  thumbnail: "/img/grandma.png" },
    {  thumbnail: "/img/milly.png" },
    {  thumbnail: "/img/milly.png" },
    {  thumbnail: "/img/milly.png" },
    {  thumbnail: "/img/milly.png" },
    {  thumbnail: "/img/milly.png" },
  ],
  anime: [
    {  thumbnail: "/img/isekai.png" },
    {  thumbnail: "/img/naruto.png" },
    {  thumbnail: "/img/kaiju.png" },
    {  thumbnail: "/img/pedal.png" },
    {  thumbnail: "/img/kuroko.png" },
    {  thumbnail: "/img/ippo.png" },
    {  thumbnail: "/img/haikyu.png" },
    {  thumbnail: "/img/dandandan.png" },
    {  thumbnail: "/img/aot.png" },
    {  thumbnail: "/img/slime.png" },
    {  thumbnail: "/img/kny.png" },
    {  thumbnail: "/img/horimiya.png" },
    {  thumbnail: "/img/alya.png" },
  ],
  ghibli: [
    {  thumbnail: "/img/Totoro.png" },
    {  thumbnail: "/img/howl.png" },
    {  thumbnail: "/img/poppyhill.png" },
    {  thumbnail: "/img/marie.png" },
    {  thumbnail: "/img/spirited.png" },
    {  thumbnail: "/img/kiki.png" },
    {  thumbnail: "/img/heron.png" },
    {  thumbnail: "/img/arriety.png" },
  ],
  drakor: [
    {  thumbnail: "/img/Totoro.png" },
    {  thumbnail: "/img/howl.png" },
    {  thumbnail: "/img/poppyhill.png" },
    {  thumbnail: "/img/marie.png" },
    {  thumbnail: "/img/spirited.png" },
    {  thumbnail: "/img/kiki.png" },
    {  thumbnail: "/img/heron.png" },
    {  thumbnail: "/img/arriety.png" },
  ],
};

const Navbar = () => (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between">
      <div>
        <img src="/img/logonetwatch.png" alt="Netwatch Logo" className="h-8" />
      </div>
      <ul className="flex gap-6 text-sm">
        <li><a href="#">Beranda</a></li>
        <li><a href="#">Film</a></li>
        <li><a href="#">Anime</a></li>
        <li><a href="#">Acara TV</a></li>
      </ul>
      <img 
      src="/img/ehkhem1.jpg" 
      alt="Foto Profil" 
      className="w-10 h-10 rounded-full object-cover border border-black"
      />
    </nav>  
  );
  

  const HeroBanner = () => (
    <div className="w-full h-[500px] md:h-[600px] relative overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/video/culture-shock-preview.mp4"
        autoPlay
        controls
        loop
        playsInline
      />
  
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10 flex items-end px-8 pb-12">
        <div className="max-w-xl text right-10" >
          <h1 className="text-4xl font-bold text-white mb-4">Culture Shock</h1>
          <p className="text-white text-lg">
            Episode Baru Tayang Mulai Jumat. Kisah anak Desa yang pindah ke Jakarta karena beasiswa dan harus menjaga keperjakaannya sampai umur 30!
          </p>
          <button className="mt-4 px-6 py-2 bg-white text-black rounded-md font-semibold">
            Putar
          </button>
        </div>
      </div>
    </div>
  );
  
  

const MediaCard = ({ title, thumbnail }: { title: string; thumbnail: string }) => (
  <div className="w-40 shrink-0">
    <img src={thumbnail} alt={title} className="rounded-lg shadow-md" />
    <p className="text-white text-sm mt-2 truncate">{title}</p>
  </div>
);

const MediaCarousel = ({
  title,
  items,
}: {
  title: string;
  items: { title: string; thumbnail: string }[];
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="mb-8 relative group">
      <h2 className="text-white text-xl font-bold mb-2">{title}</h2>
      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/80 rounded-full hover:bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronLeft className="text-white w-6 h-6" />
        </button>
        
        <div
  ref={carouselRef}
  className="flex gap-4 overflow-x-auto scroll-smooth pr-4 scrollbar-hide overflow-hidden"
  style={{
    scrollbarWidth: 'none', 
    msOverflowStyle: 'none', 
  }}
>

          {items.map((item, index) => (
            <div key={index} className="shrink-0">
              <img src={item.thumbnail} alt={item.title} className="w-40 rounded-lg shadow-md" />
              <p className="text-white text-sm mt-2 truncate">{item.title}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/80 rounded-full hover:bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronRight className="text-white w-6 h-6" />
        </button>
      </div>
    </div>
  );
};


const Home = () => (
  <div className="bg-[#141414] min-h-screen text-white">
    <Navbar />
    <HeroBanner />
    <div className="px-8 py-6">
      <MediaCarousel
        title="Lanjutkan Menonton untuk Rai"
        items={dummyData.continueWatching.map((item) => ({
          title: "",
          thumbnail: item.thumbnail,
        }))}
      />
      <MediaCarousel
        title="Anime"
        items={dummyData.anime.map((item) => ({
          title: "",
          thumbnail: item.thumbnail,
        }))}
      />
      <MediaCarousel
        title="Studio Ghibli"
      items={dummyData.ghibli.map((item) => ({
          title: "",
          thumbnail: item.thumbnail,
        }))}
      />
      <MediaCarousel
        title="Drama Korea"
      items={dummyData.drakor.map((item) => ({
          title: "",
          thumbnail: item.thumbnail,
        }))}
      />
    </div>
  </div>
);

export default function Dashboard() {
  return <Home />;
}
