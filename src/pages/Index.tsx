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
      category: 'Напитки',
      difficulty: 'Легко',
      color: 'bg-primary',
      time: '15 минут',
      steps: [
        'Промокните пятно холодной водой',
        'Нанесите жидкое моющее средство или средство для мытья посуды',
        'Оставьте на 5-10 минут',
        'Потрите мягкой щеткой',
        'Постирайте в холодной воде'
      ],
      emergency: 'Сразу промокните салфеткой, не трите! Нанесите соль или соду для впитывания.',
      tips: 'Белые ткани можно обработать разведенным отбеливателем. Для застарелых пятен используйте глицерин.'
    },
    {
      id: 'wine',
      name: 'Красное вино',
      icon: 'Wine',
      category: 'Напитки',
      difficulty: 'Средне',
      color: 'bg-destructive',
      time: '30 минут',
      steps: [
        'Посыпьте солью немедленно и оставьте на 3 минуты',
        'Промойте холодной водой с изнанки',
        'Нанесите перекись водорода или белое вино',
        'Оставьте на 15 минут',
        'Стирайте в холодной воде с порошком'
      ],
      emergency: 'Срочно засыпьте солью полностью! Впитывайте белой тканью от краев к центру.',
      tips: 'Белое вино нейтрализует красное. Газированная вода тоже эффективна в первые минуты.'
    },
    {
      id: 'grease',
      name: 'Жир и масло',
      icon: 'Droplet',
      category: 'Еда',
      difficulty: 'Средне',
      color: 'bg-secondary',
      time: '45 минут',
      steps: [
        'Посыпьте тальком, крахмалом или содой',
        'Оставьте на 30 минут для впитывания',
        'Удалите порошок мягкой щеткой',
        'Нанесите средство для посуды на пятно',
        'Оставьте на 10 минут',
        'Постирайте в горячей воде (проверьте ярлык!)'
      ],
      emergency: 'Сразу посыпьте мукой, тальком или содой. Промокните салфеткой, НЕ трите.',
      tips: 'Для застарелых пятен: нанесите WD-40, подождите 15 минут, затем обработайте средством для посуды.'
    },
    {
      id: 'blood',
      name: 'Кровь',
      icon: 'Heart',
      category: 'Биологические',
      difficulty: 'Сложно',
      color: 'bg-destructive',
      time: '60 минут',
      steps: [
        'Замочите в холодной воде на 30 минут',
        'Нанесите перекись водорода (для светлых тканей)',
        'Потрите хозяйственным мылом или солью',
        'Оставьте на 15 минут',
        'Постирайте в холодной воде с ферментным порошком'
      ],
      emergency: 'ТОЛЬКО ХОЛОДНАЯ ВОДА! Горячая закрепит пятно навсегда. Промокните и замочите немедленно.',
      tips: 'Свежее пятно можно промыть слюной (содержит ферменты). Аспирин растворенный в воде тоже помогает.'
    },
    {
      id: 'grass',
      name: 'Трава',
      icon: 'Leaf',
      category: 'Природа',
      difficulty: 'Средне',
      color: 'bg-accent',
      time: '30 минут',
      steps: [
        'Нанесите средство для мытья посуды или спирт',
        'Оставьте на 15 минут',
        'Потрите зубной щеткой',
        'Промойте холодной водой',
        'Постирайте в теплой воде с энзимным порошком'
      ],
      emergency: 'Намочите водкой, спиртом или жидкостью для снятия лака. Промокните.',
      tips: 'Белая зубная паста эффективна для травы. Уксус тоже помогает разрушить хлорофилл.'
    },
    {
      id: 'ink',
      name: 'Чернила',
      icon: 'Pen',
      category: 'Канцелярия',
      difficulty: 'Сложно',
      color: 'bg-primary',
      time: '40 минут',
      steps: [
        'Положите под пятно бумажное полотенце',
        'Промокните спиртом, ацетоном или лаком для волос',
        'Меняйте полотенце по мере впитывания',
        'Повторяйте до исчезновения пятна',
        'Постирайте с порошком'
      ],
      emergency: 'Срочно нанесите лак для волос или спирт! Не давайте чернилам высохнуть.',
      tips: 'Молоко или лимонный сок помогают с шариковой ручкой. Для гелевых чернил - только спирт.'
    },
    {
      id: 'chocolate',
      name: 'Шоколад',
      icon: 'Candy',
      category: 'Еда',
      difficulty: 'Легко',
      color: 'bg-secondary',
      time: '25 минут',
      steps: [
        'Соскребите засохший шоколад тупым ножом',
        'Замочите в холодной воде с моющим средством',
        'Нанесите пятновыводитель на жирный след',
        'Оставьте на 10 минут',
        'Постирайте в теплой воде'
      ],
      emergency: 'Соскребите излишки, промокните холодной водой. Не используйте горячую - закрепит жир.',
      tips: 'Шоколад - комбинированное пятно (жир + белок). Сначала убирайте белок холодной водой, потом жир.'
    },
    {
      id: 'lipstick',
      name: 'Помада',
      icon: 'Smile',
      category: 'Косметика',
      difficulty: 'Средне',
      color: 'bg-destructive',
      time: '30 минут',
      steps: [
        'Нанесите спирт или жидкость для снятия макияжа',
        'Промокните от краев к центру',
        'Нанесите средство для посуды на жирный след',
        'Оставьте на 10 минут',
        'Постирайте в теплой воде'
      ],
      emergency: 'Используйте влажные салфетки для снятия макияжа или спирт. Промокайте, не размазывайте.',
      tips: 'Лак для волос или вазелин помогут растворить восковую основу помады.'
    },
    {
      id: 'sweat',
      name: 'Пот (желтые пятна)',
      icon: 'Sun',
      category: 'Биологические',
      difficulty: 'Средне',
      color: 'bg-primary',
      time: '120 минут',
      steps: [
        'Смешайте соду, перекись водорода и средство для посуды (1:2:1)',
        'Нанесите на пятно',
        'Оставьте на 1-2 часа',
        'Потрите щеткой',
        'Постирайте в горячей воде'
      ],
      emergency: 'Свежие пятна: промокните уксусом или лимонным соком перед стиркой.',
      tips: 'Аспирин (2 таблетки на полстакана воды) отлично работает с белыми вещами.'
    },
    {
      id: 'mud',
      name: 'Грязь',
      icon: 'Mountain',
      category: 'Природа',
      difficulty: 'Легко',
      color: 'bg-accent',
      time: '20 минут',
      steps: [
        'Дайте грязи ПОЛНОСТЬЮ высохнуть',
        'Вытряхните или выбейте сухую грязь',
        'Замочите в холодной воде',
        'Нанесите жидкое моющее средство',
        'Постирайте как обычно'
      ],
      emergency: 'НЕ трогайте мокрую грязь! Дайте высохнуть, затем счистите щеткой.',
      tips: 'Никогда не стирайте мокрую грязь - она въестся глубже. Сухая удаляется легко.'
    },
    {
      id: 'deodorant',
      name: 'Дезодорант (белые следы)',
      icon: 'Sparkles',
      category: 'Косметика',
      difficulty: 'Легко',
      color: 'bg-secondary',
      time: '10 минут',
      steps: [
        'Протрите пятно капроновым чулком или нейлоном',
        'Если не помогло: нанесите уксус',
        'Оставьте на 5 минут',
        'Постирайте как обычно'
      ],
      emergency: 'Потрите пятно сухой тканью того же типа - часто этого достаточно.',
      tips: 'Лимонный сок или детские влажные салфетки быстро удаляют свежие следы.'
    },
    {
      id: 'tomato',
      name: 'Томатный соус',
      icon: 'Pizza',
      category: 'Еда',
      difficulty: 'Средне',
      color: 'bg-destructive',
      time: '35 минут',
      steps: [
        'Соскребите излишки соуса',
        'Промойте холодной водой с изнанки',
        'Нанесите средство для посуды',
        'Затем обработайте уксусом или лимонным соком',
        'Оставьте на 15 минут',
        'Постирайте в теплой воде'
      ],
      emergency: 'Быстро промойте холодной водой! Положите на солнце - ультрафиолет обесцвечивает томат.',
      tips: 'Не сушите в сушилке до полного удаления - тепло закрепит пятно.'
    },
    {
      id: 'rust',
      name: 'Ржавчина',
      icon: 'Wrench',
      category: 'Химические',
      difficulty: 'Сложно',
      color: 'bg-primary',
      time: '60 минут',
      steps: [
        'Нанесите лимонный сок или уксус на пятно',
        'Посыпьте солью',
        'Положите на солнце на 30-60 минут',
        'Промойте холодной водой',
        'Повторите при необходимости',
        'Постирайте как обычно'
      ],
      emergency: 'Лимонный сок + соль + солнце = лучшее средство. НЕ используйте хлорный отбеливатель!',
      tips: 'Специальные средства от ржавчины (щавелевая кислота) для сложных случаев.'
    },
    {
      id: 'paint',
      name: 'Краска',
      icon: 'Paintbrush',
      category: 'Химические',
      difficulty: 'Сложно',
      color: 'bg-accent',
      time: '45 минут',
      steps: [
        'Определите тип краски (акрил/масло)',
        'Акрил: промойте холодной водой немедленно',
        'Масло: используйте растворитель или скипидар',
        'Промокните от краев к центру',
        'Нанесите средство для посуды',
        'Постирайте в теплой воде'
      ],
      emergency: 'Свежую краску смывайте СРАЗУ! Засохшая потребует растворителя.',
      tips: 'Для акрила работает спирт. Для масляной - только растворитель или WD-40.'
    },
    {
      id: 'gum',
      name: 'Жевательная резинка',
      icon: 'Candy',
      category: 'Особые',
      difficulty: 'Средне',
      color: 'bg-secondary',
      time: '90 минут',
      steps: [
        'Положите вещь в пакет и заморозьте на 1-2 часа',
        'Соскребите замороженную резинку тупым ножом',
        'Остатки обработайте растительным маслом или арахисовым маслом',
        'Оставьте на 10 минут',
        'Смойте средством для посуды',
        'Постирайте как обычно'
      ],
      emergency: 'Приложите лед в пакете на 15-20 минут, затем соскребите.',
      tips: 'Уксус или WD-40 тоже помогают растворить резинку. Не используйте горячую воду!'
    },
    {
      id: 'berry',
      name: 'Ягоды и фрукты',
      icon: 'Apple',
      category: 'Еда',
      difficulty: 'Средне',
      color: 'bg-destructive',
      time: '30 минут',
      steps: [
        'Промойте холодной водой с изнанки',
        'Натяните ткань над миской',
        'Полейте кипятком с высоты 30-50 см',
        'Если осталось: нанесите лимонный сок',
        'Оставьте на солнце на 15 минут',
        'Постирайте как обычно'
      ],
      emergency: 'Кипяток с высоты творит чудеса! Или сразу обработайте кипятком и лимонным соком.',
      tips: 'Никогда не используйте мыло сразу - оно закрепит пятно. Сначала кислота, потом мыло.'
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
                onClick={() => setActiveSection('prevention')}
              >
                <CardHeader>
                  <Icon name="Shield" size={32} className="text-accent mb-2" />
                  <CardTitle className="text-lg">Профилактика</CardTitle>
                  <CardDescription>
                    Как избежать пятен и защитить вещи
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
                  16 типов пятен с подробными инструкциями
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="all">Все</TabsTrigger>
                    <TabsTrigger value="Напитки">Напитки</TabsTrigger>
                    <TabsTrigger value="Еда">Еда</TabsTrigger>
                    <TabsTrigger value="Другое">Другое</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="all" className="mt-4">
                    <Accordion type="single" collapsible className="w-full">
                      {stainGuides.map((guide) => (
                        <AccordionItem key={guide.id} value={guide.id}>
                          <AccordionTrigger className="hover:no-underline">
                            <div className="flex items-center gap-3 w-full">
                              <div className={`p-2 rounded-full ${guide.color} text-white`}>
                                <Icon name={guide.icon as any} size={20} />
                              </div>
                              <div className="flex-1 text-left">
                                <span className="font-semibold">{guide.name}</span>
                                <div className="flex gap-2 mt-1">
                                  <Badge variant="secondary" className="text-xs">{guide.category}</Badge>
                                  <Badge variant="outline" className="text-xs">{guide.time}</Badge>
                                </div>
                              </div>
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
                              <div className="bg-accent/10 p-4 rounded-lg border border-accent/30">
                                <p className="font-semibold text-accent mb-2">💡 Полезные советы:</p>
                                <p className="text-sm">{guide.tips}</p>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                  
                  <TabsContent value="Напитки" className="mt-4">
                    <Accordion type="single" collapsible className="w-full">
                      {stainGuides.filter(g => g.category === 'Напитки').map((guide) => (
                        <AccordionItem key={guide.id} value={guide.id}>
                          <AccordionTrigger className="hover:no-underline">
                            <div className="flex items-center gap-3 w-full">
                              <div className={`p-2 rounded-full ${guide.color} text-white`}>
                                <Icon name={guide.icon as any} size={20} />
                              </div>
                              <div className="flex-1 text-left">
                                <span className="font-semibold">{guide.name}</span>
                                <div className="flex gap-2 mt-1">
                                  <Badge variant="outline" className="text-xs">{guide.time}</Badge>
                                </div>
                              </div>
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
                              <div className="bg-accent/10 p-4 rounded-lg border border-accent/30">
                                <p className="font-semibold text-accent mb-2">💡 Полезные советы:</p>
                                <p className="text-sm">{guide.tips}</p>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                  
                  <TabsContent value="Еда" className="mt-4">
                    <Accordion type="single" collapsible className="w-full">
                      {stainGuides.filter(g => g.category === 'Еда').map((guide) => (
                        <AccordionItem key={guide.id} value={guide.id}>
                          <AccordionTrigger className="hover:no-underline">
                            <div className="flex items-center gap-3 w-full">
                              <div className={`p-2 rounded-full ${guide.color} text-white`}>
                                <Icon name={guide.icon as any} size={20} />
                              </div>
                              <div className="flex-1 text-left">
                                <span className="font-semibold">{guide.name}</span>
                                <div className="flex gap-2 mt-1">
                                  <Badge variant="outline" className="text-xs">{guide.time}</Badge>
                                </div>
                              </div>
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
                              <div className="bg-accent/10 p-4 rounded-lg border border-accent/30">
                                <p className="font-semibold text-accent mb-2">💡 Полезные советы:</p>
                                <p className="text-sm">{guide.tips}</p>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                  
                  <TabsContent value="Другое" className="mt-4">
                    <Accordion type="single" collapsible className="w-full">
                      {stainGuides.filter(g => !['Напитки', 'Еда'].includes(g.category)).map((guide) => (
                        <AccordionItem key={guide.id} value={guide.id}>
                          <AccordionTrigger className="hover:no-underline">
                            <div className="flex items-center gap-3 w-full">
                              <div className={`p-2 rounded-full ${guide.color} text-white`}>
                                <Icon name={guide.icon as any} size={20} />
                              </div>
                              <div className="flex-1 text-left">
                                <span className="font-semibold">{guide.name}</span>
                                <div className="flex gap-2 mt-1">
                                  <Badge variant="secondary" className="text-xs">{guide.category}</Badge>
                                  <Badge variant="outline" className="text-xs">{guide.time}</Badge>
                                </div>
                              </div>
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
                              <div className="bg-accent/10 p-4 rounded-lg border border-accent/30">
                                <p className="font-semibold text-accent mb-2">💡 Полезные советы:</p>
                                <p className="text-sm">{guide.tips}</p>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                </Tabs>
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

        {activeSection === 'prevention' && (
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
                  <Icon name="Shield" size={28} className="text-accent" />
                  Профилактика пятен
                </CardTitle>
                <CardDescription>
                  Лучше предотвратить, чем потом выводить
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-4 rounded-lg border border-accent/30">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Icon name="Utensils" size={22} className="text-accent" />
                    За столом
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>Используй фартук или салфетку на коленях во время еды</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>Держи бокалы за ножку, чтобы не опрокинуть</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold">•</span>
                      <span>Сразу промокни брызги салфеткой, не дай им высохнуть</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-secondary/10 to-destructive/10 p-4 rounded-lg border border-secondary/30">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Icon name="Paintbrush" size={22} className="text-secondary" />
                    Косметика и уход
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Дай дезодоранту высохнуть перед одеванием (2-3 минуты)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Надевай одежду через пакет или ткань при нанесенном макияже</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold">•</span>
                      <span>Используй воротнички или накидки в салонах красоты</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-lg border border-primary/30">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Icon name="Leaf" size={22} className="text-primary" />
                    На природе и прогулках
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Носи защитную одежду в парке и на пикниках</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Проверяй скамейки на чистоту перед тем, как сесть</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Дай грязи высохнуть - не трогай мокрую!</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-destructive/10 to-secondary/10 p-4 rounded-lg border border-destructive/30">
                  <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    <Icon name="Home" size={22} className="text-destructive" />
                    Дома
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive font-bold">•</span>
                      <span>Защищай мебель чехлами, если ешь на диване</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive font-bold">•</span>
                      <span>Держи пятновыводитель под рукой для быстрой реакции</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive font-bold">•</span>
                      <span>Обрабатывай новые вещи защитным спреем от пятен</span>
                    </li>
                  </ul>
                </div>

                <Card className="bg-muted border-2 border-dashed">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Icon name="Sparkles" size={22} />
                      Золотые правила профилактики
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3 text-sm">
                      <li className="flex gap-3">
                        <span className="font-bold text-primary text-lg">1.</span>
                        <span><strong>Скорость решает!</strong> Чем быстрее обработаешь свежее пятно, тем легче оно выведется.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-primary text-lg">2.</span>
                        <span><strong>Промокай, не три!</strong> Трение размазывает пятно и загоняет глубже в волокна.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-primary text-lg">3.</span>
                        <span><strong>Тест на незаметном участке</strong> перед использованием любого средства.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-primary text-lg">4.</span>
                        <span><strong>Читай ярлыки!</strong> Температура и средства должны подходить типу ткани.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="font-bold text-primary text-lg">5.</span>
                        <span><strong>Не суши до выведения</strong> - тепло закрепляет многие пятна навсегда.</span>
                      </li>
                    </ol>
                  </CardContent>
                </Card>

                <div className="bg-gradient-to-r from-accent/20 to-primary/20 p-5 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Icon name="ShoppingBag" size={22} />
                    Что всегда держать под рукой
                  </h3>
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <Badge variant="secondary" className="justify-center py-2">Влажные салфетки</Badge>
                    <Badge variant="secondary" className="justify-center py-2">Соль/Сода</Badge>
                    <Badge variant="secondary" className="justify-center py-2">Спирт/Водка</Badge>
                    <Badge variant="secondary" className="justify-center py-2">Лимонный сок</Badge>
                    <Badge variant="secondary" className="justify-center py-2">Средство для посуды</Badge>
                    <Badge variant="secondary" className="justify-center py-2">Перекись водорода</Badge>
                  </div>
                </div>
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
              variant={activeSection === 'prevention' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveSection('prevention')}
              className="flex-col h-auto py-2 px-4"
            >
              <Icon name="Shield" size={22} />
              <span className="text-xs mt-1">Советы</span>
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Index;