import React from 'react';

interface NewsCardProps {
  imageUrl: string;
  category: string;
  title: string;
  link: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ imageUrl, category, title, link }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group">
    <div className="overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500" />
    </div>
    <div className="p-6">
      <p className="text-sm text-blue-800 font-semibold mb-2 uppercase">{category}</p>
      <h3 className="text-xl font-bold text-gray-800 mb-4 h-20">{title}</h3>
      <a href={link} className="font-semibold text-gray-700 hover:text-blue-800 transition-colors">Leia mais &rarr;</a>
    </div>
  </div>
);

const NewsSection: React.FC = () => {
  const news = [
    {
      imageUrl: 'https://picsum.photos/400/300?random=4',
      category: 'Tecnologia',
      title: 'Missão de empresários de SC para o Web Summit Lisboa gera R$ 50 milhões em negócios',
      link: '#',
    },
    {
      imageUrl: 'https://picsum.photos/400/300?random=5',
      category: 'Comércio Exterior',
      title: 'Exportações de vinhos portugueses para Santa Catarina crescem 20% no último ano',
      link: '#',
    },
    {
      imageUrl: 'https://picsum.photos/400/300?random=6',
      category: 'Inovação',
      title: 'Parceria entre ACATE e Câmara Brasil-Portugal fomenta inovação no eixo SC-Lisboa',
      link: '#',
    },
  ];

  return (
    <section id="noticias" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 uppercase">
            Últimas Notícias
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
