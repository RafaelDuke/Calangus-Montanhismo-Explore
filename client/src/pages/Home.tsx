import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Leaf, Mountain, Tent, ArrowDownToDot, MapPin, X, ChevronDown } from "lucide-react";

export default function Home() {
  const [whatsappMenuOpen, setWhatsappMenuOpen] = useState(false);
  const [headerContactOpen, setHeaderContactOpen] = useState(false);

  const rafaelWhatsapp = "https://wa.me/5521965116992";
  const anaWhatsapp = "https://wa.me/5521992438692";

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      {/* 1. Cabeçalho com Logo e Menu Mobile */}
      <header 
        className="fixed top-0 z-50 w-full border-b shadow-md transition-all duration-300"
        style={{ backgroundColor: '#e6f4ea', borderColor: '#c8e6c9' }}
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/novalogocalangus.jpg" alt="Calangus Montanhismo Logo" className="h-14 w-auto object-contain rounded-md" />
            <span className="font-heading font-extrabold text-xl tracking-tight text-[#000000] hidden sm:inline">
              Calangus Montanhismo
            </span>
          </div>
          
          {/* Menu Desktop */}
          <nav className="hidden lg:flex gap-8">
            <a href="#home" className="text-base font-bold uppercase transition-colors hover:opacity-70 text-[#000000]">Home</a>
            <a href="#sobre" className="text-base font-bold uppercase transition-colors hover:opacity-70 text-[#000000]">Sobre</a>
            <a href="#ecoturismo" className="text-base font-bold uppercase transition-colors hover:opacity-70 text-[#000000]">Ecoturismo</a>
            <a href="#equipe" className="text-base font-bold uppercase transition-colors hover:opacity-70 text-[#000000]">Equipe</a>
            <a href="#servicos" className="text-base font-bold uppercase transition-colors hover:opacity-70 text-[#000000]">Serviços</a>
            <a href="#galeria" className="text-base font-bold uppercase transition-colors hover:opacity-70 text-[#000000]">Galeria</a>
            <a href="#contato" className="text-base font-bold uppercase transition-colors hover:opacity-70 text-[#000000]">Contato</a>
          </nav>
          
          {/* Botão de Contato Desktop */}
          <div className="hidden lg:relative lg:flex lg:items-center">
            <button
              onClick={() => setHeaderContactOpen(!headerContactOpen)}
              className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-full flex items-center gap-2 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              CONTATO
              <ChevronDown className={`w-5 h-5 transition-transform ${headerContactOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {headerContactOpen && (
              <div className="absolute top-full right-0 mt-2 flex flex-col gap-2 bg-white rounded-xl shadow-2xl p-2 border border-gray-200 animate-in fade-in slide-in-from-top-2 min-w-[200px]">
                <a
                  href={rafaelWhatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  Falar com Rafael
                </a>
                <a
                  href={anaWhatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  Falar com Ana
                </a>
              </div>
            )}
          </div>

          {/* Menu Hambúrguer Mobile */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setHeaderContactOpen(!headerContactOpen)}
              className="p-2 text-[#000000]"
              aria-label="Abrir menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Dropdown Menu Mobile */}
        {headerContactOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#e6f4ea] border-b border-[#c8e6c9] shadow-lg animate-in slide-in-from-top-2">
            <div className="flex flex-col px-4 py-6 space-y-4">
              <a href="#home" onClick={() => setHeaderContactOpen(false)} className="text-lg font-bold uppercase text-[#000000] hover:opacity-70 py-2 border-b border-[#c8e6c9]/50">Home</a>
              <a href="#sobre" onClick={() => setHeaderContactOpen(false)} className="text-lg font-bold uppercase text-[#000000] hover:opacity-70 py-2 border-b border-[#c8e6c9]/50">Sobre</a>
              <a href="#ecoturismo" onClick={() => setHeaderContactOpen(false)} className="text-lg font-bold uppercase text-[#000000] hover:opacity-70 py-2 border-b border-[#c8e6c9]/50">Ecoturismo</a>
              <a href="#equipe" onClick={() => setHeaderContactOpen(false)} className="text-lg font-bold uppercase text-[#000000] hover:opacity-70 py-2 border-b border-[#c8e6c9]/50">Equipe</a>
              <a href="#servicos" onClick={() => setHeaderContactOpen(false)} className="text-lg font-bold uppercase text-[#000000] hover:opacity-70 py-2 border-b border-[#c8e6c9]/50">Serviços</a>
              <a href="#galeria" onClick={() => setHeaderContactOpen(false)} className="text-lg font-bold uppercase text-[#000000] hover:opacity-70 py-2 border-b border-[#c8e6c9]/50">Galeria</a>
              <a href="#contato" onClick={() => setHeaderContactOpen(false)} className="text-lg font-bold uppercase text-[#000000] hover:opacity-70 py-2 border-b border-[#c8e6c9]/50">Contato</a>
              
              <div className="pt-4 flex flex-col gap-3">
                <a href={rafaelWhatsapp} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 px-6 rounded-full w-full">
                  <MessageCircle className="w-5 h-5" />
                  Falar com Rafael
                </a>
                <a href={anaWhatsapp} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 px-6 rounded-full w-full">
                  <MessageCircle className="w-5 h-5" />
                  Falar com Ana
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="pt-20">
        {/* 2. Hero - Responsivo */}
        <section 
          id="home"
          className="relative w-full flex flex-col items-center justify-center bg-black scroll-mt-20"
          style={{ minHeight: 'calc(100vh - 80px)' }}
        >
          <img 
            src="/paginainicial.jpg" 
            alt="Calangus Montanhismo"
            className="w-full h-auto max-h-[calc(100vh-80px)] object-contain"
          />
        </section>

        {/* 3. Seção Sobre */}
        <section id="sobre" className="min-h-screen flex items-center py-16 md:py-24 bg-card border-b px-5 md:px-0 scroll-mt-20">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-8 text-center">
                Sobre a Calangus Montanhismo
              </h2>
              <div className="prose prose-lg md:prose-xl text-muted-foreground space-y-6 text-justify">
                <p>
                  A <strong className="text-primary">Calangus Montanhismo</strong> nasceu da paixão genuína pelas montanhas do Rio de Janeiro. 
                  Somos mais do que uma agência de aventura — somos um coletivo de exploradores dedicados a compartilhar a 
                  adrenalina e a magia das nossas serras, florestas e picos rochosos.
                </p>
                <p>
                  Nossa missão é oferecer experiências autênticas de <strong className="text-primary">Ecoturismo de Aventura</strong>, 
                  onde <strong className="text-accent">segurança rigorosa</strong> e <strong className="text-accent">instrução técnica</strong> são 
                  pilares inegociáveis. Cada expedição é planejada e executada com os mais altos padrões de profissionalismo, 
                  garantindo que você vivencie a adrenalina da aventura com total confiança em nossos guias e procedimentos.
                </p>
                <p>
                  Unimos a emoção pura da aventura em montanha com <strong className="text-primary">respeito absoluto ao meio ambiente</strong>. 
                  A conduta de mínimo impacto não é apenas um protocolo — é nossa filosofia. Acreditamos que verdadeira aventura 
                  é aquela que deixa a natureza intacta para as gerações futuras.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Ecoturismo de Aventura */}
        <section id="ecoturismo" className="min-h-screen flex items-center py-16 md:py-24 bg-muted/50 bg-pattern px-5 md:px-0 scroll-mt-20">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <Leaf className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">
                Ecoturismo de Aventura
              </h2>
              <p className="text-xl md:text-lg text-muted-foreground leading-relaxed text-justify md:text-center">
                No coração de cada expedição Calangus está nosso compromisso inabalável com a natureza. Não deixamos nada além 
                de pegadas, não tiramos nada além de fotos e não levamos nada além de memórias. Nossos protocolos de mínimo impacto 
                garantem que as montanhas que exploramos hoje estarão íntegras para os aventureiros de amanhã. Adrenalina responsável 
                é o nosso lema.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Cards de Guias */}
        <section id="equipe" className="min-h-screen flex items-center py-16 md:py-24 px-5 md:px-0 scroll-mt-20">
          <div className="container mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
                Nossos Guias
              </h2>
              <p className="text-muted-foreground text-lg">Especialistas apaixonados pelas montanhas cariocas.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {/* Card Rafael */}
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="/guiarafael.jpg" 
                    alt="Rafael Dias Seabra" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl font-bold font-heading">Rafael Dias Seabra</CardTitle>
                  <CardDescription className="text-accent font-semibold">Guia Regional e Instrutor de Rapel</CardDescription>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground mb-4">
                  <div className="space-y-2">
                    <p className="text-sm">Especialidades:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Trekking</span>
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Camping</span>
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Rapel</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button asChild className="bg-[#25D366] hover:bg-[#1ca544] text-white">
                    <a href={rafaelWhatsapp} target="_blank" rel="noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Falar com Rafael
                    </a>
                  </Button>
                </CardFooter>
              </Card>

              {/* Card Ana */}
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="/guiaana.jpg" 
                    alt="Ana Lucia Barbosa da Silva" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl font-bold font-heading">Ana Lucia Barbosa</CardTitle>
                  <CardDescription className="text-accent font-semibold">Guia Nacional e Técnica em Enfermagem</CardDescription>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground mb-4">
                  <div className="space-y-2">
                    <p className="text-sm">Especialidades:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Trekking</span>
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Camping</span>
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Rapel</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button asChild className="bg-[#25D366] hover:bg-[#1ca544] text-white">
                    <a href={anaWhatsapp} target="_blank" rel="noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Falar com Ana
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* 6. Serviços */}
        <section id="servicos" className="min-h-screen flex items-center py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden px-5 md:px-0 scroll-mt-20">
          {/* Decorative background element */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-white">
                Nossos Serviços
              </h2>
              <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
                Do trekking leve à aventura vertical, temos a experiência certa para você.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Serviço 1 */}
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors text-center">
                <Mountain className="w-12 h-12 mb-4 text-accent mx-auto" />
                <h3 className="text-xl font-bold font-heading mb-3 text-white">Trilhas</h3>
                <p className="text-primary-foreground/90 leading-relaxed text-sm">
                  Roteiros clássicos e caminhos inexplorados pela Floresta da Tijuca. Para todos os níveis.
                </p>
              </div>

              {/* Serviço 2 */}
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors text-center">
                <Tent className="w-12 h-12 mb-4 text-accent mx-auto" />
                <h3 className="text-xl font-bold font-heading mb-3 text-white">Camping</h3>
                <p className="text-primary-foreground/90 leading-relaxed text-sm">
                  Imersão na natureza com segurança e conforto. Aprenda técnicas de acampamento ecossustentável.
                </p>
              </div>

              {/* Serviço 3 */}
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors text-center">
                <ArrowDownToDot className="w-12 h-12 mb-4 text-accent mx-auto" />
                <h3 className="text-xl font-bold font-heading mb-3 text-white">Rapel</h3>
                <p className="text-primary-foreground/90 leading-relaxed text-sm">
                  Descidas emocionantes com equipamentos certificados. Instruções completas para iniciantes.
                </p>
              </div>

              {/* Serviço 4 */}
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors text-center">
                <MapPin className="w-12 h-12 mb-4 text-accent mx-auto" />
                <h3 className="text-xl font-bold font-heading mb-3 text-white">Passeios</h3>
                <p className="text-primary-foreground/90 leading-relaxed text-sm">
                  Exploração guiada de pontos turísticos e naturais. Perfeito para famílias e grupos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Galeria de Fotos */}
        <section id="galeria" className="min-h-screen flex items-center py-16 md:py-24 bg-muted/50 px-5 md:px-0 scroll-mt-20">
          <div className="container mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
                Galeria de Aventuras
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl">Momentos capturados nas montanhas do Rio de Janeiro.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Foto 1 */}
              <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden relative">
                  <img 
                    src="/foto1.jpg" 
                    alt="Escalavrado" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center"><span class="text-muted-foreground">Escalavrado</span></div>';
                    }}
                  />
                </div>
                <div className="bg-card p-4 border-t">
                  <p className="text-center text-muted-foreground text-sm">Escalavrado</p>
                </div>
              </div>

              {/* Foto 2 */}
              <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden relative">
                  <img 
                    src="/foto2.jpg" 
                    alt="Pico da Caledônia" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center"><span class="text-muted-foreground">Pico da Caledônia</span></div>';
                    }}
                  />
                </div>
                <div className="bg-card p-4 border-t">
                  <p className="text-center text-muted-foreground text-sm">Pico da Caledônia</p>
                </div>
              </div>

              {/* Foto 3 */}
              <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden relative">
                  <img 
                    src="/foto3.jpg" 
                    alt="Teresópolis" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center"><span class="text-muted-foreground">Teresópolis</span></div>';
                    }}
                  />
                </div>
                <div className="bg-card p-4 border-t">
                  <p className="text-center text-muted-foreground text-sm">Teresópolis</p>
                </div>
              </div>

              {/* Foto 4 */}
              <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden relative">
                  <img 
                    src="/foto4.jpg" 
                    alt="Pedra Bonita" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center"><span class="text-muted-foreground">Pedra Bonita</span></div>';
                    }}
                  />
                </div>
                <div className="bg-card p-4 border-t">
                  <p className="text-center text-muted-foreground text-sm">Pedra Bonita</p>
                </div>
              </div>

              {/* Foto 5 */}
              <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden relative">
                  <img 
                    src="/foto5.jpg" 
                    alt="Rapel Cachoeira do Mendanha" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center"><span class="text-muted-foreground">Rapel Cachoeira do Mendanha</span></div>';
                    }}
                  />
                </div>
                <div className="bg-card p-4 border-t">
                  <p className="text-center text-muted-foreground text-sm">Rapel Cachoeira do Mendanha</p>
                </div>
              </div>

              {/* Foto 6 */}
              <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden relative">
                  <img 
                    src="/foto6.jpg" 
                    alt="Rapel Barra de Guaratiba" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center"><span class="text-muted-foreground">Rapel Barra de Guaratiba</span></div>';
                    }}
                  />
                </div>
                <div className="bg-card p-4 border-t">
                  <p className="text-center text-muted-foreground text-sm">Rapel Barra de Guaratiba</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Contato */}
        <section id="contato" className="py-16 md:py-24 px-5 md:px-0 bg-card border-t scroll-mt-20">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
                Fale Conosco
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl">Envie uma mensagem e retornaremos o mais breve possível.</p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
              <form action="https://formsubmit.co/soucalangus@gmail.com" method="POST" className="space-y-6">
                {/* FormSubmit configurations */}
                <input type="hidden" name="_subject" value="Novo contato pelo site - Calangus Montanhismo" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-bold text-foreground">Nome Completo</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Seu nome" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-foreground">E-mail</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="seu@email.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold text-foreground">Assunto</label>
                  <input type="text" id="subject" name="subject" required className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Qual o motivo do contato?" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-foreground">Mensagem</label>
                  <textarea id="message" name="message" required rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" placeholder="Escreva sua mensagem aqui..."></textarea>
                </div>
                
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 rounded-xl text-lg transition-transform hover:-translate-y-1 shadow-lg hover:shadow-xl mt-4">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground py-8 text-center text-primary-foreground">
        <div className="container mx-auto px-4">
          <p className="text-sm font-medium">© {new Date().getFullYear()} Calangus Montanhismo. Guias Cadastur: Rafael Dias e Ana Lúcia.</p>
        </div>
      </footer>

      {/* Menu Flutuante de WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        {whatsappMenuOpen && (
          <div className="absolute bottom-20 right-0 flex flex-col gap-2 bg-white rounded-2xl shadow-2xl p-2 border border-gray-200 animate-in fade-in slide-in-from-bottom-4 min-w-[200px]">
            <a
              href={rafaelWhatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              Falar com Rafael
            </a>
            <a
              href={anaWhatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              Falar com Ana
            </a>
          </div>
        )}
        
        <button
          onClick={() => setWhatsappMenuOpen(!whatsappMenuOpen)}
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center w-16 h-16"
          aria-label="Menu de Contato"
        >
          {whatsappMenuOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <MessageCircle className="w-8 h-8" />
          )}
        </button>
      </div>
    </div>
  );
}
