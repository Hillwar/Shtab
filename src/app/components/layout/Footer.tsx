import Link from 'next/link'
import Image from 'next/image'

interface FooterProps {
  description: string
  contacts: {
    address: string
    phone: string
    email: string
  }
  socialLinks: {
    platform: string
    url: string
    icon: string
  }[]
}

export function Footer({ description, contacts, socialLinks }: FooterProps) {
  return (
    <footer className="mt-auto py-12 border-t border-white/[0.05]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/agsh-logo.png"
                alt="АГШШ"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="font-semibold text-lg">АГШШ</span>
            </Link>
            <p className="text-white/70">{description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-white/70">
              <p>{contacts.address}</p>
              <p>{contacts.phone}</p>
              <p>{contacts.email}</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Социальные сети</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
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