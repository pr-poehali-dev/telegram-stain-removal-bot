import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const stainGuides = [
    {
      id: 'coffee',
      name: 'Кофе и чай',
      icon: 'Coffee',
      difficulty: 'Легко',
      color: 'bg-primary',
      steps: [
        'Промокните пятно холодной водой',
        'Нанесите жидкое моющее средство',
        'Оставьте на 5 минут',
        'Постирайте в холодной воде'
      ],
      emergency: 'Сразу промокните салфеткой, не трите! Нанесите соль или соду.'
    },
    {
      id: 'wine',
      name: 'Красное вино',
      icon: 'Wine',
      difficulty: 'Средне',
      color: 'bg-destructive',
      steps: [
        'Посыпьте солью немедленно',
        'Промойте холодной водой',
        'Нанесите перекись водорода',
        'Стирайте в холодной воде с порошком'
      ],
      emergency: 'Срочно засыпьте солью полностью! Впитывайте белой тканью.'
    },
    {
      id: 'grease',
      name: 'Жир и масло',
      icon: 'Droplet',
      difficulty: 'Средне',
      color: 'bg-secondary',
      steps: [
        'Посыпьте тальком или крахмалом',
        'Оставьте на 30 минут',
        'Удалите порошок щеткой',
        'Нанесите средство для посуды',
        'Постирайте в горячей воде'
      ],
      emergency: 'Сразу посыпьте мукой или тальком, промокните салфеткой.'
    },
    {
      id: 'blood',
      name: 'Кровь',
      icon: 'Heart',
      difficulty: 'Сложно',
      color: 'bg-destructive',
      steps: [
        'Замочите в холодной воде на 30 минут',
        'Нанесите перекись водорода',
        'Потрите хозяйственным мылом',
        'Постирайте в холодной воде'
      ],
      emergency: 'Только холодная вода! Горячая закрепит пятно навсегда.'
    },
    {
      id: 'grass',
      name: 'Трава',
      icon: 'Leaf',
      difficulty: 'Средне',
      color: 'bg-accent',
      steps: [
        'Нанесите средство для мытья посуды',
        'Оставьте на 15 минут',
        'Потрите зубной щеткой',
        'Постирайте в теплой воде'
      ],
      emergency: 'Намочите водкой или спиртом, промокните.'
    },
    {
      id: 'ink',
      name: 'Чернила',
      icon: 'Pen',
      difficulty: 'Сложно',
      color: 'bg-primary',
      steps: [
        'Положите под пятно бумажное полотенце',
        'Промокните спиртом или ацетоном',
        'Меняйте полотенце по мере впитывания',
        'Постирайте с порошком'
      ],
      emergency: 'Срочно нанесите лак для волос или спирт!'
    }
  ];

  const fabricTypes = [
    {
      name: 'Хлопок',
      icon: 'Shirt',
      tips: 'Выдерживает высокие температуры, можно использовать отбеливатели'
    },
    {
      name: 'Шерсть',
      icon: 'Sparkles',
      tips: 'Только холодная вода, деликатные средства, не выкручивать'
    },
    {
      name: 'Шелк',
      icon: 'Sparkle',
      tips: 'Ручная стирка в холодной воде, никаких агрессивных средств'
    },
    {
      name: 'Синтетика',
      icon: 'Zap',
      tips: 'Средние температуры, избегать хлорных отбеливателей'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-blue-50">
      <div className="max-w-4xl mx-auto p-4 pb-24">
        <header className="text-center py-8 animate-fade-in">
          <div className="flex justify-center mb-4">
            <img 
              src="https://cdn.poehali.dev/projects/f21cb8f3-2d39-4380-8f2a-362beda4e10d/files/f114aaf6-48c5-4967-99e2-2f4348c92b78.jpg" 
              alt="Mascot" 
              className="w-32 h-32 object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Чистюля Бот 🧽
          </h1>
          <p className="text-muted-foreground text-lg">
            Помощник по выведению любых пятен
          </p>
        </header>

        {activeSection === 'home' && (
          <div className="space-y-4 animate-slide-up">
            <Card className="bg-gradient-to-r from-primary to-secondary text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-white">
                  <Icon name="Zap" size={28} />
                  Экстренная помощь
                </CardTitle>
                <CardDescription className="text-white/90">
                  Пятно только что появилось? Действуй быстро!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  size="lg" 
                  className="w-full bg-white text-primary hover:bg-white/90 font-semibold text-lg"
                  onClick={() => setActiveSection('emergency')}
                >
                  <Icon name="AlertCircle" size={20} />
                  Что делать прямо сейчас?
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card 
                className="cursor-pointer hover:shadow-lg transition-all hover:scale-105"
                onClick={() => setActiveSection('guides')}
              >
                <CardHeader>
                  <Icon name="BookOpen" size={32} className="text-primary mb-2" />
                  <CardTitle className="text-lg">База инструкций</CardTitle>
                  <CardDescription>
                    Подробные гайды по всем типам пятен
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card 
                className="cursor-pointer hover:shadow-lg transition-all hover:scale-105"
                onClick={() => setActiveSection('fabrics')}
              >
                <CardHeader>
                  <Icon name="Shirt" size={32} className="text-secondary mb-2" />
                  <CardTitle className="text-lg">Типы тканей</CardTitle>
                  <CardDescription>
                    Особенности ухода за разными материалами
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card 
                className="cursor-pointer hover:shadow-lg transition-all hover:scale-105"
                onClick={() => setActiveSection('identifier')}
              >
                <CardHeader>
                  <Icon name="Search" size={32} className="text-accent mb-2" />
                  <CardTitle className="text-lg">Определитель</CardTitle>
                  <CardDescription>
                    Не знаешь, что за пятно? Поможем определить
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card 
                className="cursor-pointer hover:shadow-lg transition-all hover:scale-105"
                onClick={() => setActiveSection('expert')}
              >
                <CardHeader>
                  <Icon name="MessageCircle" size={32} className="text-primary mb-2" />
                  <CardTitle className="text-lg">Специалист</CardTitle>
                  <CardDescription>
                    Консультация в сложных случаях
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'emergency' && (
          <div className="space-y-4 animate-scale-in">
            <Button 
              variant="ghost" 
              onClick={() => setActiveSection('home')}
              className="mb-4"
            >
              <Icon name="ArrowLeft" size={20} />
              Назад
            </Button>

            <Card className="border-destructive border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Icon name="Siren" size={28} className="text-destructive" />
                  Экстренная помощь
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {stainGuides.map((guide) => (
                  <Card key={guide.id} className="border-l-4" style={{ borderLeftColor: `hsl(var(--${guide.color.replace('bg-', '')}))` }}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name={guide.icon as any} size={24} />
                        {guide.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-destructive/10 p-4 rounded-lg">
                        <p className="font-semibold text-destructive mb-2">⚡ Срочные действия:</p>
                        <p className="text-sm">{guide.emergency}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'guides' && (
          <div className="space-y-4 animate-scale-in">
            <Button 
              variant="ghost" 
              onClick={() => setActiveSection('home')}
              className="mb-4"
            >
              <Icon name="ArrowLeft" size={20} />
              Назад
            </Button>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Icon name="BookOpen" size={28} className="text-primary" />
                  База инструкций
                </CardTitle>
                <CardDescription>
                  Выбери тип пятна для подробной инструкции
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {stainGuides.map((guide, index) => (
                    <AccordionItem key={guide.id} value={guide.id}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-3 w-full">
                          <div className={`p-2 rounded-full ${guide.color} text-white`}>
                            <Icon name={guide.icon as any} size={20} />
                          </div>
                          <span className="font-semibold text-left flex-1">{guide.name}</span>
                          <Badge variant="outline">{guide.difficulty}</Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 pt-4">
                          <div className="bg-muted p-4 rounded-lg">
                            <p className="font-semibold mb-2">📋 Пошаговая инструкция:</p>
                            <ol className="space-y-2 ml-4">
                              {guide.steps.map((step, i) => (
                                <li key={i} className="text-sm">
                                  <span className="font-semibold text-primary">{i + 1}.</span> {step}
                                </li>
                              ))}
                            </ol>
                          </div>
                          <div className="bg-destructive/10 p-4 rounded-lg">
                            <p className="font-semibold text-destructive mb-2">⚡ Экстренная помощь:</p>
                            <p className="text-sm">{guide.emergency}</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'fabrics' && (
          <div className="space-y-4 animate-scale-in">
            <Button 
              variant="ghost" 
              onClick={() => setActiveSection('home')}
              className="mb-4"
            >
              <Icon name="ArrowLeft" size={20} />
              Назад
            </Button>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Icon name="Shirt" size={28} className="text-secondary" />
                  Типы тканей
                </CardTitle>
                <CardDescription>
                  Важно знать особенности каждого материала
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {fabricTypes.map((fabric) => (
                  <Card key={fabric.name} className="bg-muted/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Icon name={fabric.icon as any} size={24} className="text-primary" />
                        {fabric.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{fabric.tips}</p>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'identifier' && (
          <div className="space-y-4 animate-scale-in">
            <Button 
              variant="ghost" 
              onClick={() => setActiveSection('home')}
              className="mb-4"
            >
              <Icon name="ArrowLeft" size={20} />
              Назад
            </Button>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Icon name="Search" size={28} className="text-accent" />
                  Определитель пятна
                </CardTitle>
                <CardDescription>
                  Ответь на вопросы, чтобы определить тип пятна
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="color" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="color">Цвет</TabsTrigger>
                    <TabsTrigger value="texture">Текстура</TabsTrigger>
                    <TabsTrigger value="origin">Происхождение</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="color" className="space-y-2 mt-4">
                    <p className="text-sm text-muted-foreground mb-3">Какого цвета пятно?</p>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" className="justify-start">
                        <div className="w-4 h-4 rounded-full bg-yellow-600 mr-2" />
                        Желтое/Коричневое
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <div className="w-4 h-4 rounded-full bg-red-600 mr-2" />
                        Красное
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <div className="w-4 h-4 rounded-full bg-green-600 mr-2" />
                        Зеленое
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <div className="w-4 h-4 rounded-full bg-blue-600 mr-2" />
                        Синее/Черное
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="texture" className="space-y-2 mt-4">
                    <p className="text-sm text-muted-foreground mb-3">Какая текстура у пятна?</p>
                    <div className="grid gap-2">
                      <Button variant="outline" className="justify-start">
                        <Icon name="Droplets" size={18} className="mr-2" />
                        Жидкое, впиталось
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <Icon name="Circle" size={18} className="mr-2" />
                        Жирное, маслянистое
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <Icon name="Sparkles" size={18} className="mr-2" />
                        Сухое, порошкообразное
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <Icon name="Layers" size={18} className="mr-2" />
                        Густое, вязкое
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="origin" className="space-y-2 mt-4">
                    <p className="text-sm text-muted-foreground mb-3">Откуда могло появиться?</p>
                    <div className="grid gap-2">
                      <Button variant="outline" className="justify-start">
                        <Icon name="Utensils" size={18} className="mr-2" />
                        Еда и напитки
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <Icon name="PaintBucket" size={18} className="mr-2" />
                        Косметика
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <Icon name="Leaf" size={18} className="mr-2" />
                        Природа (трава, грязь)
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <Icon name="Wrench" size={18} className="mr-2" />
                        Технические жидкости
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'expert' && (
          <div className="space-y-4 animate-scale-in">
            <Button 
              variant="ghost" 
              onClick={() => setActiveSection('home')}
              className="mb-4"
            >
              <Icon name="ArrowLeft" size={20} />
              Назад
            </Button>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Icon name="MessageCircle" size={28} className="text-primary" />
                  Консультация специалиста
                </CardTitle>
                <CardDescription>
                  Опиши свою проблему, и мы поможем найти решение
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border-2 border-dashed border-primary/30">
                  <div className="flex items-start gap-4">
                    <Icon name="Users" size={40} className="text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Свяжись с экспертом</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Наши специалисты помогут в сложных случаях: старые пятна, деликатные ткани, 
                        комбинированные загрязнения.
                      </p>
                      <div className="space-y-2">
                        <Button className="w-full" size="lg">
                          <Icon name="Send" size={20} />
                          Написать специалисту
                        </Button>
                        <Button variant="outline" className="w-full" size="lg">
                          <Icon name="Phone" size={20} />
                          Заказать звонок
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold">Часто задаваемые вопросы:</h3>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="q1">
                      <AccordionTrigger>Можно ли вывести старое пятно?</AccordionTrigger>
                      <AccordionContent>
                        Да, но это требует больше усилий. Замочите вещь в специальном растворе 
                        (вода + уксус + сода) на несколько часов, затем обработайте пятновыводителем.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q2">
                      <AccordionTrigger>Что делать, если пятно не выводится?</AccordionTrigger>
                      <AccordionContent>
                        Не пытайтесь стирать многократно - это может закрепить пятно. 
                        Обратитесь в профессиональную химчистку или свяжитесь с нашим специалистом.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q3">
                      <AccordionTrigger>Можно ли использовать горячую воду?</AccordionTrigger>
                      <AccordionContent>
                        Для белковых пятен (кровь, яйца) - только холодную! Горячая вода 
                        свернет белок и закрепит пятно. Для жировых пятен горячая вода эффективна.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex justify-around items-center">
            <Button
              variant={activeSection === 'home' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveSection('home')}
              className="flex-col h-auto py-2 px-4"
            >
              <Icon name="Home" size={22} />
              <span className="text-xs mt-1">Главная</span>
            </Button>
            <Button
              variant={activeSection === 'emergency' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveSection('emergency')}
              className="flex-col h-auto py-2 px-4"
            >
              <Icon name="Zap" size={22} />
              <span className="text-xs mt-1">SOS</span>
            </Button>
            <Button
              variant={activeSection === 'guides' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveSection('guides')}
              className="flex-col h-auto py-2 px-4"
            >
              <Icon name="BookOpen" size={22} />
              <span className="text-xs mt-1">Гайды</span>
            </Button>
            <Button
              variant={activeSection === 'expert' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveSection('expert')}
              className="flex-col h-auto py-2 px-4"
            >
              <Icon name="MessageCircle" size={22} />
              <span className="text-xs mt-1">Эксперт</span>
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Index;
