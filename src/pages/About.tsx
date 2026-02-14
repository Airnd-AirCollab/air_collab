import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            About AIRCollab
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empowering global research collaboration through innovative digital solutions
          </p>
        </section>

        {/* Why AIRCollab Section */}
        <section className="space-y-8">
          <div className="bg-card border rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">
              Why AIRCollab?
            </h2>
            <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
              <p className="text-center text-lg md:text-xl mb-6">
                Collaboration is a cornerstone of successful research, as it brings together diverse expertise, shared resources, and broader perspectives that drive innovation and strengthen the credibility of findings.
              </p>
              <p className="text-center text-lg md:text-xl">
                However, in today's fast-paced and globalized research environment, digitalizing collaboration processes has become essential. 
                AirCollab enables researchers from different disciplines, institutions, and regions to seamlessly share data, access specialized tools, co-author manuscripts, and coordinate projects in real time.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary">Vision</h3>
            </div>
            <p className="text-lg leading-relaxed text-foreground">
              To create the world's leading hub for global research collaborations where scientists and innovators across diverse fields collaborate and leverage their resources to create impactful solutions for a better future.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary">Mission</h3>
            </div>
            <p className="text-lg leading-relaxed text-foreground">
              To empower researchers and innovators with a collaboration ecosystem that facilitates real-time communication, transparent knowledge and expertise exchange and efficient project coordination to accelerate the pace of scientific discovery.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center space-y-8">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Join AirCollab Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              to connect, collaborate and accelerate your discoveries!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/auth" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-foreground bg-primary rounded-xl hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
              <a 
                href="/discover-collaborators" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary bg-background border-2 border-primary rounded-xl hover:bg-primary/5 transition-colors"
              >
                Discover Collaborators
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;