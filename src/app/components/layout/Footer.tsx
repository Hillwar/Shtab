export function Footer() {
  return (
    <footer className="mt-auto py-12 border-t border-white/[0.05]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">АГШШ им. А.П. Гайдара</h3>
            <p className="text-white/70">
              Развитие, обучение, дружба и счастье людей - наши главные цели.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <p className="text-white/70">
              Архангельск, Россия<br />
              Email: info@agsh.ru
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Социальные сети</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                VK
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/[0.05] text-center text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} АГШШ им. А.П. Гайдара. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
} 