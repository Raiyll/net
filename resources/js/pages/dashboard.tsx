import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, GalleryThumbnails } from 'lucide-react';
import logonet from '@/ImgRes/logonet.svg';
import { Search } from 'lucide-react';
useEffect

const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Dashboard', href: '/dashboard' },
];

const dummyData = {
  "Lanjutkan menonton": [
    { thumbnail: "/img/Totoro.png" },
    { thumbnail: "/img/howl.png" },
    { thumbnail: "/img/The conjuring.png" },
    { thumbnail: "/img/kaka.png" },
    { thumbnail: "/img/cektoko.png" },
    { thumbnail: "/img/when i fly towards you.png" },
    { thumbnail: "/img/kuroko.png" },
    { thumbnail: "/img/pedal.png" },
    { thumbnail: "/img/grandma.png" },
    { thumbnail: "/img/milly.png" },
    { thumbnail: "/img/miracleincell.png" },
    { thumbnail: "/img/akira.png" },
  ],
  anime: [
    { thumbnail: "/img/isekai.png" },
    { thumbnail: "/img/naruto.png" },
    { thumbnail: "/img/kaiju.png" },
    { thumbnail: "/img/pedal.png" },
    { thumbnail: "/img/kuroko.png" },
    { thumbnail: "/img/ippo.png" },
    { thumbnail: "/img/haikyu.png" },
    { thumbnail: "/img/dandandan.png" },
    { thumbnail: "/img/aot.png" },
    { thumbnail: "/img/slime.png" },
    { thumbnail: "/img/kny.png" },
    { thumbnail: "/img/horimiya.png" },
    { thumbnail: "/img/alya.png" },
  ],
  "Studio ghibli": [
    { thumbnail: "/img/Totoro.png" },
    { thumbnail: "/img/howl.png" },
    { thumbnail: "/img/poppyhill.png" },
    { thumbnail: "/img/marie.png" },
    { thumbnail: "/img/spirited.png" },
    { thumbnail: "/img/kiki.png" },
    { thumbnail: "/img/heron.png" },
    { thumbnail: "/img/arriety.png" },
  ],
  drakor: [
    { thumbnail: "/img/mydemon.png" },
    { thumbnail: "/img/venus.png" },
    { thumbnail: "/img/Luna.png" },
    { thumbnail: "/img/rookie.png" },
    { thumbnail: "/img/robot.png" },
    { thumbnail: "/img/pedofil.png" },
    { thumbnail: "/img/Reply.png" },
    { thumbnail: "/img/again.png" },
  ],
  horror: [
    { thumbnail: "/img/The conjuring.png" },
    { thumbnail: "/img/kereta.png" },
    { thumbnail: "/img/agaklaen.png" },
    { thumbnail: "/img/kuyang.png" },
    { thumbnail: "/img/jahanam.png" },
    { thumbnail: "/img/megan.png" },
    { thumbnail: "/img/siksa.png" },
    { thumbnail: "/img/gaib.png" },
    { thumbnail: "/img/again.png" },
  ],
  Kartun: [
    { thumbnail: "/img/masha.png" },
    { thumbnail: "/img/grizzy.png" },
    { thumbnail: "/img/peppa.png" },
    { thumbnail: "/img/mechamato.png" },
    { thumbnail: "/img/gumball.png" },
    { thumbnail: "/img/pjmask.png" },
    { thumbnail: "/img/robocar.png" },
    { thumbnail: "/img/pawpatrol.png" },
    { thumbnail: "/img/Totoro.png" },
  ],
};

interface NavbarProps {
  onSearch?: (term: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${isScrolled ? "bg-black/90 backdrop-blur-sm shadow-md" : "bg-transparent"} 
      text-white px-6 py-4 flex items-center justify-between`}>
      
      <div className="flex items-center gap-10">
        <img src={logonet} alt="Netwatch Logo" className="h-6 md:h-8" />
        
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><a href="#">Beranda</a></li>
          <li><a href="#">Acara TV</a></li>
          <li><a href="#">Film</a></li>
          <li><a href="#">Baru & Populer</a></li>
          <li><a href="#">Daftar Saya</a></li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="text-gray-400 w-4 h-4" />
          </span>
            <input
              type="text"
              placeholder="Cari film..."
              className="pl-10 pr-4 py-1 rounded-md bg-white/10 text-white placeholder-gray-400 text-sm focus:outline-none"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSearch?.(e.target.value)}
          />
        </div>

        <img
          src="/img/ehkhem1.jpg"
          alt="Profil"
          className="w-8 h-8 rounded-md object-cover"
        />
      </div>
    </nav>
  );
};


const HeroBanner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="w-full h-[600px] md:h-[600px] relative overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video/jumbo-preview.mp4"
        autoPlay
        loop
        playsInline
        muted={muted}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10 flex items-end justify-start px-16 pb-16">
        <div className="max-w-xl text-left">
          <h1 className="text-4xl font-bold text-white mb-4">JUMBO</h1>
          <p className="text-white text-lg">mengisahkan Don, seorang anak laki-laki yang sering merasa rendah diri karena tubuhnya yang besar dan kerap diremehkan oleh teman-temannya.</p>
          <div className="mt-4 flex gap-3">
            <button onClick={toggleMute} className="px-4 py-2 bg-white text-black rounded-md font-semibold">
              {muted ? "🔇 Mute" : "🔊 Unmute"}
            </button>
            <a href="/watchpage">
              <button onClick={() => videoRef.current?.play()} className="px-4 py-2 bg-white text-black rounded-md font-semibold">
                Putar
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const MediaCarousel = ({ title, items }: { title: string; items: { title: string; thumbnail: string }[] }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-8 relative group">
      <h2 className="text-white text-xl font-bold mb-2">{title}</h2>
      <div className="relative">
        <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/80 rounded-full hover:bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ChevronLeft className="text-white w-6 h-6" />
        </button>
        <div ref={carouselRef} className="flex gap-4 overflow-x-auto scroll-smooth pr-4 scrollbar-hide overflow-hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {items.map((item, index) => (
            <div key={index} className="shrink-0">
              <img src={item.thumbnail} alt={item.title} className="w-40 rounded-lg shadow-md" />
              <p className="text-white text-sm mt-2 truncate">{item.title}</p>
            </div>
          ))}
        </div>
        <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/80 rounded-full hover:bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ChevronRight className="text-white w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAll = Object.entries(dummyData).map(([category, items]) => ({
    category,
    items: items.filter(item =>
      item.thumbnail.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.items.length > 0);

  return (
    <div className="bg-[#141414] min-h-screen text-white">
      <Navbar onSearch={(term) => setSearchTerm(term)} />
      <HeroBanner />
      <div className="px-8 py-6">
        {searchTerm !== "" ? (
          <>
            <h2 className="text-white text-xl font-bold mb-4">Hasil untuk "{searchTerm}"</h2>
            {filteredAll.map(({ category, items }) => (
              <MediaCarousel
                key={category}
                title={''}
                items={items.map(item => ({ title: "", thumbnail: item.thumbnail }))}
              />
            ))}
          </>
        ) : (
          <>
            <MediaCarousel title="Lanjutkan Menonton untuk Rai" items={dummyData["Lanjutkan menonton"].map((item) => ({ title: "", thumbnail: item.thumbnail }))} />
            <MediaCarousel title="Anime" items={dummyData.anime.map((item) => ({ title: "", thumbnail: item.thumbnail }))} />
            <MediaCarousel title="Studio Ghibli" items={dummyData["Studio ghibli"].map((item) => ({ title: "", thumbnail: item.thumbnail }))} />
            <MediaCarousel title="Drama Korea" items={dummyData.drakor.map((item) => ({ title: "", thumbnail: item.thumbnail }))} />
            <MediaCarousel title="Horror" items={dummyData.horror.map((item) => ({ title: "", thumbnail: item.thumbnail }))} />
            <MediaCarousel title="Kartun Anak" items={dummyData.Kartun.map((item) => ({ title: "", thumbnail: item.thumbnail }))} />
          </>
        )}
      </div>
    </div>
  );
}