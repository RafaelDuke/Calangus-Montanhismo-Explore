import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Leaf, Mountain, Tent, ArrowDownToDot, MapPin } from "lucide-react";

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
            <a href="#galeria" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Galeria</a>
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
            <div className="absolute inset-0 bg-black/40" />
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

        {/* 3. Seção Sobre */}
        <section id="sobre" className="py-20 bg-card border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-8 text-center">
                Sobre a Calangus Montanhismo
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-6 text-justify">
                <p>
                  A <strong className="text-primary">Calangus Montanhismo</strong> nasceu da paixão genuína pelas montanhas do Rio de Janeiro. 
                  Somos mais do que uma agência de aventura — somos um coletivo de exploradores dedicados a compartilhar a 
                  adrenalina e a magia das nossas serras, florestas e picos rochosos.
                </p>
                <p>
                  Unimos a emoção do <strong className="text-primary">Ecoturismo de Aventura</strong> com segurança rigorosa e 
                  respeito absoluto ao meio ambiente. Cada trilha, cada rapel, cada acampamento é planejado dentro dos rigorosos 
                  padrões de <strong className="text-primary">conduta de mínimo impacto</strong>. Acreditamos que verdadeira aventura 
                  é aquela que deixa a natureza intacta para as gerações futuras.
                </p>
                <p>
                  O grupo Calangus Montanhismo é sinônimo de confiança, experiência e amor incondicional pelas montanhas. Venha 
                  explorar conosco o Rio por novos ângulos — com segurança, sustentabilidade e muito espírito de aventura.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Ecoturismo de Aventura */}
        <section id="ecoturismo" className="py-20 bg-muted/50 bg-pattern">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Leaf className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">
                Ecoturismo de Aventura
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No coração de cada expedição Calangus está nosso compromisso inabalável com a natureza. Não deixamos nada além 
                de pegadas, não tiramos nada além de fotos e não levamos nada além de memórias. Nossos protocolos de mínimo impacto 
                garantem que as montanhas que exploramos hoje estarão íntegras para os aventureiros de amanhã. Adrenalina responsável 
                é o nosso lema.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Cards de Guias */}
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
                  <CardDescription className="text-accent font-semibold">Guia Regional e Vigilante</CardDescription>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  <div className="space-y-2">
                    <p className="text-sm">Especialidades:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Trekking</span>
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Camping</span>
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Rapel</span>
                    </div>
                  </div>
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
                  <CardDescription className="text-accent font-semibold">Guia Nacional e Técnica em Enfermagem</CardDescription>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  <div className="space-y-2">
                    <p className="text-sm">Especialidades:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Trekking</span>
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Camping</span>
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Rapel</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 6. Serviços */}
        <section id="servicos" className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
                Nossos Serviços
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
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
        <section id="galeria" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                Galeria de Aventuras
              </h2>
              <p className="text-muted-foreground text-lg">Momentos capturados nas montanhas do Rio de Janeiro.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Foto 1 */}
              <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden relative">
                  <img 
                    src="/foto1.jpg" 
                    alt="Foto de Aventura 1" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center"><span class="text-muted-foreground">Foto 1</span></div>';
                    }}
                  />
                </div>
                <div className="bg-card p-4 border-t">
                  <p className="text-center text-muted-foreground text-sm">Trilha Clássica - Pico da Tijuca</p>
                </div>
              </div>

              {/* Foto 2 */}
              <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden relative">
                  <img 
                    src="/foto2.jpg" 
                    alt="Foto de Aventura 2" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center"><span class="text-muted-foreground">Foto 2</span></div>';
                    }}
                  />
                </div>
                <div className="bg-card p-4 border-t">
                  <p className="text-center text-muted-foreground text-sm">Rapel na Serra da Carioca</p>
                </div>
              </div>

              {/* Foto 3 */}
              <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden relative">
                  <img 
                    src="/foto3.jpg" 
                    alt="Foto de Aventura 3" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center"><span class="text-muted-foreground">Foto 3</span></div>';
                    }}
                  />
                </div>
                <div className="bg-card p-4 border-t">
                  <p className="text-center text-muted-foreground text-sm">Acampamento com Vista Panorâmica</p>
                </div>
              </div>

              {/* Foto 4 */}
              <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden relative">
                  <img 
                    src="/foto4.jpg" 
                    alt="Foto de Aventura 4" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center"><span class="text-muted-foreground">Foto 4</span></div>';
                    }}
                  />
                </div>
                <div className="bg-card p-4 border-t">
                  <p className="text-center text-muted-foreground text-sm">Grupo em Trekking - Floresta da Tijuca</p>
                </div>
              </div>

              {/* Foto 5 */}
              <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden relative">
                  <img 
                    src="/foto5.jpg" 
                    alt="Foto de Aventura 5" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center"><span class="text-muted-foreground">Foto 5</span></div>';
                    }}
                  />
                </div>
                <div className="bg-card p-4 border-t">
                  <p className="text-center text-muted-foreground text-sm">Descida em Rapel Técnico</p>
                </div>
              </div>

              {/* Foto 6 */}
              <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden relative">
                  <img 
                    src="/foto6.jpg" 
                    alt="Foto de Aventura 6" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center"><span class="text-muted-foreground">Foto 6</span></div>';
                    }}
                  />
                </div>
                <div className="bg-card p-4 border-t">
                  <p className="text-center text-muted-foreground text-sm">Nascer do Sol na Montanha</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground py-8 text-center text-muted">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Calangus Montanhismo. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Botão flutuante de WhatsApp */}
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
