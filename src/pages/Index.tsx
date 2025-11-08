import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const courses = [
    {
      title: 'Основы программирования',
      description: 'Python для начинающих с нуля',
      duration: '3 месяца',
      level: 'Средний',
      price: '15 000 ₽/мес',
      topics: ['Переменные и типы данных', 'Условия и циклы', 'Функции', 'ООП']
    },
    {
      title: 'Веб-разработка',
      description: 'HTML, CSS, JavaScript и React',
      duration: '4 месяца',
      level: 'Средний',
      price: '18 000 ₽/мес',
      topics: ['HTML5 и CSS3', 'JavaScript ES6+', 'React и компоненты', 'API интеграция']
    },
    {
      title: 'Базы данных',
      description: 'SQL и PostgreSQL для разработчиков',
      duration: '2 месяца',
      level: 'Средний',
      price: '12 000 ₽/мес',
      topics: ['SQL запросы', 'Проектирование БД', 'Индексы и оптимизация', 'Транзакции']
    }
  ];

  const materials = [
    {
      title: 'Python: Основы синтаксиса',
      type: 'Видеоурок',
      duration: '45 мин',
      status: 'available'
    },
    {
      title: 'JavaScript: Работа с массивами',
      type: 'Конспект',
      duration: '20 мин',
      status: 'available'
    },
    {
      title: 'React: Создание компонентов',
      type: 'Практика',
      duration: '60 мин',
      status: 'homework'
    }
  ];

  const portfolio = [
    {
      student: 'Анна Смирнова',
      project: 'Интернет-магазин',
      description: 'Полноценный магазин на React с корзиной и оплатой',
      tech: ['React', 'Node.js', 'PostgreSQL']
    },
    {
      student: 'Михаил Петров',
      project: 'Система управления задачами',
      description: 'Трекер задач с аналитикой и уведомлениями',
      tech: ['Python', 'Django', 'REST API']
    },
    {
      student: 'Екатерина Волкова',
      project: 'Портфолио-сайт',
      description: 'Адаптивный сайт-портфолио с анимациями',
      tech: ['HTML', 'CSS', 'JavaScript']
    }
  ];

  const testimonials = [
    {
      name: 'Дмитрий Иванов',
      role: 'Frontend разработчик',
      text: 'Благодаря курсам освоил React и устроился на работу мечты. Преподаватель объясняет сложные вещи простым языком.',
      rating: 5
    },
    {
      name: 'Мария Козлова',
      role: 'Data Analyst',
      text: 'Изучила Python и SQL с нуля. Теперь уверенно работаю с данными. Отличная подача материала и практические задания.',
      rating: 5
    },
    {
      name: 'Александр Соколов',
      role: 'Fullstack разработчик',
      text: 'Прошёл несколько курсов — каждый дал реальные навыки. Особенно ценю индивидуальный подход и помощь с проектами.',
      rating: 5
    }
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="GraduationCap" size={32} className="text-primary" />
            <span className="text-xl font-bold">CodeTutor</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('courses')} className="text-sm font-medium hover:text-primary transition-colors">Курсы</button>
            <button onClick={() => scrollToSection('materials')} className="text-sm font-medium hover:text-primary transition-colors">Материалы</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-sm font-medium hover:text-primary transition-colors">Портфолио</button>
            <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-primary transition-colors">Отзывы</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
          </nav>
          <Button onClick={() => scrollToSection('contact')}>Записаться</Button>
        </div>
      </header>

      <main>
        <section id="home" className="py-20 px-4 md:py-32">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <Badge className="w-fit">Онлайн-обучение программированию</Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Освой IT-профессию с <span className="text-primary">индивидуальным</span> наставником
                </h1>
                <p className="text-lg text-muted-foreground">
                  Персональные занятия по программированию, веб-разработке и базам данных. Практический подход, реальные проекты, трудоустройство.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" onClick={() => scrollToSection('courses')} className="gap-2">
                    <Icon name="BookOpen" size={20} />
                    Выбрать курс
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')} className="gap-2">
                    <Icon name="MessageCircle" size={20} />
                    Бесплатная консультация
                  </Button>
                </div>
                <div className="flex gap-8 pt-4">
                  <div>
                    <div className="text-3xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">лет опыта</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">200+</div>
                    <div className="text-sm text-muted-foreground">студентов</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">95%</div>
                    <div className="text-sm text-muted-foreground">трудоустроено</div>
                  </div>
                </div>
              </div>
              <div className="relative animate-scale-in">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://cdn.poehali.dev/projects/79dcb3dd-3874-4d42-9dc4-d18e9bd03a39/files/6b9ce15c-d302-4e27-a0c8-b64a4cb7d9d2.jpg" 
                    alt="Обучение программированию"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-4 bg-muted/30">
          <div className="container max-w-4xl">
            <div className="text-center space-y-4 mb-12">
              <Badge className="w-fit mx-auto">Обо мне</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Ваш личный наставник в мире IT</h2>
            </div>
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-[200px,1fr] gap-8 items-start">
                  <div className="w-48 h-48 rounded-full overflow-hidden mx-auto shadow-lg">
                    <img 
                      src="https://cdn.poehali.dev/projects/79dcb3dd-3874-4d42-9dc4-d18e9bd03a39/files/dbb71191-06a7-41f1-bff2-2d373de3d485.jpg" 
                      alt="Алексей Романов"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Алексей Романов</h3>
                    <p className="text-muted-foreground">Senior Software Engineer</p>
                    <p className="leading-relaxed">
                      Привет! Я профессиональный разработчик с 5+ летним опытом работы в IT. Специализируюсь на веб-разработке, Python и базах данных. 
                      Работал в стартапах и крупных компаниях, знаю индустрию изнутри.
                    </p>
                    <p className="leading-relaxed">
                      Моя миссия — помочь вам освоить программирование с нуля или прокачать существующие навыки. 
                      Использую практический подход: минимум теории, максимум реальных задач и проектов.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">SQL</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">Git</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="courses" className="py-20 px-4">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <Badge className="w-fit mx-auto">Курсы</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Программы обучения</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Индивидуальные курсы с гибким графиком. Выбирайте направление и начинайте учиться уже сегодня.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, idx) => (
                <Card key={idx} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline">{course.level}</Badge>
                      <Icon name="Clock" size={20} className="text-muted-foreground" />
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Calendar" size={16} className="text-primary" />
                        <span>Длительность: {course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="DollarSign" size={16} className="text-primary" />
                        <span className="font-semibold">{course.price}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Программа курса:</p>
                      <ul className="space-y-1">
                        {course.topics.map((topic, topicIdx) => (
                          <li key={topicIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Icon name="CheckCircle2" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full gap-2" onClick={() => scrollToSection('contact')}>
                      <Icon name="Mail" size={16} />
                      Записаться на курс
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="materials" className="py-20 px-4 bg-muted/30">
          <div className="container max-w-5xl">
            <div className="text-center space-y-4 mb-12">
              <Badge className="w-fit mx-auto">Обучение</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Учебные материалы и задания</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Доступ к видеоурокам, конспектам и практическим заданиям. Учитесь в удобном темпе.
              </p>
            </div>
            <Tabs defaultValue="materials" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="materials" className="gap-2">
                  <Icon name="BookOpen" size={18} />
                  Материалы
                </TabsTrigger>
                <TabsTrigger value="homework" className="gap-2">
                  <Icon name="FileCheck" size={18} />
                  Домашние задания
                </TabsTrigger>
              </TabsList>
              <TabsContent value="materials" className="space-y-4">
                {materials.map((material, idx) => (
                  <Card key={idx} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon 
                              name={material.type === 'Видеоурок' ? 'Video' : material.type === 'Конспект' ? 'FileText' : 'Code'} 
                              size={24} 
                              className="text-primary" 
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold">{material.title}</h3>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                              <span>{material.type}</span>
                              <span>•</span>
                              <span>{material.duration}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="gap-2">
                          <Icon name="Play" size={16} />
                          Открыть
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="homework" className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Icon name="Code" size={24} className="text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">Создать калькулятор на Python</h3>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                          <span>Срок: 3 дня</span>
                          <Badge variant="secondary" className="text-xs">В работе</Badge>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Создайте простой калькулятор с основными операциями: сложение, вычитание, умножение, деление. 
                      Используйте функции и обработку ошибок.
                    </p>
                    <Button size="sm" className="gap-2">
                      <Icon name="Upload" size={16} />
                      Сдать работу
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="portfolio" className="py-20 px-4">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <Badge className="w-fit mx-auto">Портфолио</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Проекты учеников</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Реальные проекты студентов, которые прошли обучение и применили знания на практике.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolio.map((item, idx) => (
                <Card key={idx} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                        {item.student.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <CardTitle className="text-base">{item.student}</CardTitle>
                        <p className="text-xs text-muted-foreground">Выпускник</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{item.project}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech, techIdx) => (
                        <Badge key={techIdx} variant="secondary" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full gap-2">
                      <Icon name="ExternalLink" size={16} />
                      Посмотреть проект
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="py-20 px-4 bg-muted/30">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <Badge className="w-fit mx-auto">Отзывы</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Что говорят студенты</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Реальные отзывы людей, которые достигли своих целей в IT благодаря нашим курсам.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((review, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <CardTitle className="text-base">{review.name}</CardTitle>
                        <p className="text-xs text-muted-foreground">{review.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 px-4">
          <div className="container max-w-4xl">
            <div className="text-center space-y-4 mb-12">
              <Badge className="w-fit mx-auto">Контакты</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Свяжитесь со мной</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Готовы начать обучение? Заполните форму или напишите напрямую.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Отправить сообщение</CardTitle>
                  <CardDescription>Отвечу в течение 24 часов</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Телефон</label>
                    <Input type="tel" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Сообщение</label>
                    <Textarea placeholder="Расскажите о своих целях в обучении..." rows={4} />
                  </div>
                  <Button className="w-full gap-2">
                    <Icon name="Send" size={18} />
                    Отправить
                  </Button>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">info@codetutor.ru</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Телефон</p>
                        <p className="text-sm text-muted-foreground">+7 (999) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="MessageCircle" size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Telegram</p>
                        <p className="text-sm text-muted-foreground">@codetutor_help</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Часто задаваемые вопросы</h3>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-sm">Нужны ли начальные знания?</AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground">
                          Нет, курсы рассчитаны на обучение с нуля. Главное — желание учиться и практиковаться.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-sm">Какой формат занятий?</AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground">
                          Индивидуальные онлайн-занятия по видеосвязи. График подбирается индивидуально.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-sm">Помогаете с трудоустройством?</AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground">
                          Да, помогаю с резюме, портфолио и подготовкой к собеседованиям.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 px-4 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="GraduationCap" size={24} className="text-primary" />
              <span className="font-semibold">CodeTutor</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 CodeTutor. Все права защищены.</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Github" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Linkedin" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Mail" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;