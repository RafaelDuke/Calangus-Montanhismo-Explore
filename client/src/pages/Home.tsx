import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Leaf, Mountain, ArrowDownToDot, Navigation } from "lucide-react";

export default function Home() {
  const whatsappNumber = "5521999999999"; // Exemplo
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="min-h-screen bg-background">
      {/* 1. Cabeçalho com Logo */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Calangus Montanhismo Logo" className="h-10 w-10 object-contain" />
            <span className="font-heading font-bold text-xl tracking-tight text-primary">
              CALANGUS<span className="text-accent">.</span>
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#sobre" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Sobre</a>
            <a href="#ecoturismo" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Ecoturismo</a>
            <a href="#equipe" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Equipe</a>
            <a href="#servicos" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Serviços</a>
          </nav>
          <Button asChild variant="default" className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              Contato
            </a>
          </Button>
        </div>
      </header>

      <main>
        {/* 2. Hero */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/hero.jpg" 
              alt="Rio de Janeiro Montanhas" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40" /> {/* Overlay escuro para contraste */}
          </div>
          
          <div className="container relative z-10 mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-heading mb-6 drop-shadow-lg max-w-4xl mx-auto leading-tight">
              Explore o Rio de Janeiro por novos ângulos
            </h1>
            <p className="text-lg md:text-2xl mb-10 font-medium drop-shadow-md max-w-2xl mx-auto text-white/90">
              Experiências autênticas de montanhismo e aventura com segurança e respeito à natureza.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105" asChild>
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-6 w-6" />
                Agendar Aventura
              </a>
            </Button>
          </div>
        </section>

        {/* 3. Ecoturismo */}
        <section id="ecoturismo" className="py-20 bg-muted/50 bg-pattern">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Leaf className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">
                Ecoturismo Consciente
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Na Calangus Montanhismo, a natureza é a nossa casa. Seguimos rigorosamente os princípios de mínimo impacto e conduta consciente em ambientes naturais. Não deixamos nada além de pegadas, não tiramos nada além de fotos e não levamos nada além de memórias. Acreditamos que a conservação é dever de todo aventureiro.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Cards de Guias */}
        <section id="equipe" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                Nossos Guias
              </h2>
              <p className="text-muted-foreground text-lg">Especialistas apaixonados pelas montanhas cariocas.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {/* Card Rafael */}
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="/rafael.jpg" 
                    alt="Rafael Dias Seabra" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl font-bold font-heading">Rafael Dias Seabra</CardTitle>
                  <CardDescription className="text-accent font-semibold">Guia de Montanhismo</CardDescription>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  Especialista em trilhas e escalada clássica, com anos de experiência nas rotas mais desafiadoras do Rio.
                </CardContent>
              </Card>

              {/* Card Ana */}
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="/ana.jpg" 
                    alt="Ana Lucia Barbosa da Silva" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl font-bold font-heading">Ana Lucia Barbosa</CardTitle>
                  <CardDescription className="text-accent font-semibold">Instrutora de Rapel & Escalada</CardDescription>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  Apaixonada por técnicas verticais. Focada na segurança e na superação dos limites de cada participante.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 5. Serviços */}
        <section id="servicos" className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
                Nossos Serviços
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                Do trekking leve à escalada vertical, temos a aventura certa para você.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Serviço 1 */}
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors">
                <Mountain className="w-12 h-12 mb-6 text-accent" />
                <h3 className="text-2xl font-bold font-heading mb-4 text-white">Trilhas</h3>
                <p className="text-primary-foreground/90 leading-relaxed mb-6">
                  Roteiros clássicos e caminhos inexplorados pela Floresta da Tijuca e arredores. Para todos os níveis de preparo.
                </p>
              </div>

              {/* Serviço 2 */}
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors">
                <ArrowDownToDot className="w-12 h-12 mb-6 text-accent" />
                <h3 className="text-2xl font-bold font-heading mb-4 text-white">Rapel</h3>
                <p className="text-primary-foreground/90 leading-relaxed mb-6">
                  Descidas emocionantes em vias com visuais de tirar o fôlego. Equipamentos certificados e instrução completa.
                </p>
              </div>

              {/* Serviço 3 */}
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-colors">
                <Navigation className="w-12 h-12 mb-6 text-accent" />
                <h3 className="text-2xl font-bold font-heading mb-4 text-white">Escalada</h3>
                <p className="text-primary-foreground/90 leading-relaxed mb-6">
                  Aulas de iniciação e guiamento nas vias tradicionais do Pão de Açúcar, Urca e outras montanhas icônicas.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Simples */}
      <footer className="bg-foreground py-8 text-center text-muted">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Calangus Montanhismo. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* 6. Botão flutuante de WhatsApp */}
      <a 
        href={whatsappLink}
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="Contato pelo WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
