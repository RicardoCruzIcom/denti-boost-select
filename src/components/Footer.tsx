
const Footer = () => {
  return (
    <footer className="py-12 bg-brand-darker border-t border-brand-gray/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-brand-white font-mundial mb-4">
              DONTO SELECT
            </h3>
            <p className="text-brand-gray font-akitha text-sm leading-relaxed mb-4">
              Transformando clínicas odontológicas em máquinas de faturamento desde 2020.
            </p>
            <div className="text-brand-gold font-akitha text-sm">
              <p>📞 (11) 99999-9999</p>
              <p>✉️ contato@dontoselect.com.br</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-brand-white font-mundial mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2 text-brand-gray font-akitha text-sm">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Início</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Sobre o Método</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Depoimentos</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold text-brand-white font-mundial mb-4">
              Legal
            </h4>
            <ul className="space-y-2 text-brand-gray font-akitha text-sm">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Política de Reembolso</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Contrato do Aluno</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-bold text-brand-white font-mundial mb-4">
              Redes Sociais
            </h4>
            <div className="flex space-x-4 mb-4">
              <div className="w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center hover:bg-brand-gold/30 transition-colors cursor-pointer">
                <span className="text-brand-gold">📘</span>
              </div>
              <div className="w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center hover:bg-brand-gold/30 transition-colors cursor-pointer">
                <span className="text-brand-gold">📷</span>
              </div>
              <div className="w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center hover:bg-brand-gold/30 transition-colors cursor-pointer">
                <span className="text-brand-gold">▶️</span>
              </div>
            </div>
            <p className="text-brand-gray font-akitha text-sm">
              Siga-nos para dicas diárias de gestão odontológica
            </p>
          </div>
        </div>

        <div className="border-t border-brand-gray/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-brand-gray font-akitha text-sm mb-4 md:mb-0">
              © 2024 DONTO SELECT. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-4 text-brand-gray font-akitha text-sm">
              <p>CNPJ: 00.000.000/0001-00</p>
              <span>|</span>
              <p>🔒 Site Seguro</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
