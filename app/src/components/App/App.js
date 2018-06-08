import React, {Component} from 'react';
import Slider from 'react-slick';
import CountUp from 'react-countup';
import Waypoint from 'react-waypoint';
import smoothscroll from 'smoothscroll';
import './App.css';

const handleSignUp = () => {
    let dest = document.querySelector('.sign-up');
    smoothscroll(dest);
}

const SlideProps = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    touchMove: true,
    slidesToScroll: 1
};

class Counters extends Component {
    constructor(props){
        super(props);
        this.state = {
            onOff: ""
        };
        this.handleWaypointEnter = this.handleWaypointEnter.bind(this);
    }

    handleWaypointEnter(){
        this.setState({
            onOff: '1'
        });
    }
    render() {
        let qqq1, qqq2, qqq3, qqq4;
        if (this.state.onOff == '1') {
            qqq1 = <CountUp duration={5} start={0} end={15}/>;
            qqq2 = <CountUp duration={5} start={0} end={500}/>;
            qqq3 = <CountUp duration={5} start={0} end={120}/>;
            qqq4 = <CountUp duration={5} start={0} end={800}/>;
        }

        return (
            <div className="scores">
                <div className='row-scores'>
                    <div className='first-score'>
                        <div className='scope-text'>
                            <span>{qqq1}</span>
                            <span>Кваліфікованих юристів</span>
                        </div>
                        <span className='first-icon'></span>
                    </div>
                    <div className='second-score'>
                        <div className='scope-text'>
                            <span>{qqq2}+</span>
                            <span>Наявність Рекомендацій</span>
                        </div>
                        <span className='second-icon'></span>
                    </div>
                </div>
                <div className='row-scores'>
                    <div className='third-score'>
                        <div className='scope-text'>
                            <span>{qqq3}</span>
                            <span>Клієнтів</span>
                        </div>
                        <span className='third-icon'></span>
                    </div>
                    <div className='fourth-score'>
                        <div className='scope-text'>
                            <span>{qqq4}+</span>
                            <span>Виграних справ</span>
                        </div>
                        <span className='fourth-icon'></span>
                    </div>
                </div>
                <Waypoint onEnter={this.handleWaypointEnter}/>
            </div>
        )
    }
}

class FirstSlide extends Component {
    render() {
        let moveTo = this.props.moveTo;
        console.log("!!!",this.props.moveTo)
        return (
            <div className="first-slide row">
                <div className="col-12 col-md-12 col-lg-6 fs-left-box">
                    <div className="fs-lb-content">
                        <p></p>
                        <h1>BONA OPINIO HOMINUM TUTIOR PECUNIA EST </h1>
                        <p>Добре відношення людей надійніше грошей.</p>
                        <button onClick={moveTo()}>Детальніше</button>
                    </div>
                </div>
                <div className="col-xs-12 col-md-12 col-lg-6 fs-right-box hide-767 hide-991">
                    <div className="fs-rb-content">
                        {/*<img src="img/woman.png" alt="man"/>*/}
                    </div>
                </div>
            </div>
        )
    }
};

class SecondSlide extends Component {
    render() {
        let moveTo = this.props.moveTo;
        return (
            <div className="second-slide row">
                <div className="col-12 col-md-12 col-lg-6 fs-left-box">
                    <div className="fs-lb-content">
                        <p></p>
                        <h1>ANIMUS AD OMNE JUS DICIT</h1>
                        <p>Кожен закон звернений до суті справи.</p>
                        <button onClick={moveTo()}>Детальніше</button>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6 fs-right-box hide-767 hide-991">
                    <div className="fs-rb-content">
                        {/*<img src="img/woman.png" alt="man"/>*/}
                    </div>
                </div>
            </div>
        )
    }
};

class ThirdSlide extends Component {
    render() {
        let moveTo = this.props.moveTo;
        return (
            <div className="third-slide row">
                <div className="col-12 col-md-12 col-lg-6 fs-left-box">
                    <div className="fs-lb-content">
                        <p></p>
                        <h1>EI INCUMBIT PROBACIO, QUI DICIT, NON QUI NEGAT.</h1>
                        <p>Тяжкість доказу лежить на тому, хто стверджує, а не на тому, хто заперечує</p>
                        <button onClick={moveTo()}>Детальніше</button>
                    </div>
                </div>
                <div className="col-xs-12 col-md-12 col-lg-6 fs-right-box hide-767 hide-991">
                    <div className="fs-rb-content">
                        {/*<img src="img/woman.png" alt="man"/>*/}
                    </div>
                </div>
            </div>
        )
    }
};

class FourthSlide extends Component {
    render() {
        let moveTo = this.props.moveTo;
        return (
            <div className="fourth-slide row">
                <div className="col-12 col-md-12 col-lg-6 fs-left-box">
                    <div className="fs-lb-content">
                        <p></p>
                        <h1>QUI JURE SUO UTITUR, NEMINI FACIT INJURIAM.</h1>
                        <p>Хто користується своїм правом, той не порушує нічийого права.</p>
                        <button onClick={moveTo()}>Детальніше</button>
                    </div>
                </div>
                <div className="col-xs-12 col-md-12 col-lg-6 fs-right-box hide-767 hide-991">
                    <div className="fs-rb-content">
                        {/*<img src="img/woman.png" alt="man"/>*/}
                    </div>
                </div>
            </div>
        )
    }
};

class SimpleSlider extends Component {
    render() {
        let f = this.props.moveTo;
        return (
            <Slider {...SlideProps}>
                <div className="hero-slide"><FirstSlide moveTo={f}/></div>
                <div className="hero-slide"><SecondSlide moveTo={f}/></div>
                <div className="hero-slide"><ThirdSlide moveTo={f}/></div>
                <div className="hero-slide"><FourthSlide moveTo={f}/></div>
            </Slider>
        );
    }
}

class App extends Component {
    constructor() {
        super()
    }

    handleScrollTo = (e) => {

        let dest = document.querySelector('.services');
        console.log(e);
        smoothscroll(dest);
    }

    handleScrollTo1 = (e) => {

        let dest = document.querySelector('.about-us-section');
        console.log(e);
        smoothscroll(dest);
    }

    handleScrollTo2 = (e) => {

        let dest = document.querySelector('.hero-slide');
        console.log(e);
        smoothscroll(dest);
    }

    handleScrollTo3 = (e) => {

        let dest = document.querySelector('.footer');
        console.log(e);
        smoothscroll(dest);
    }

    handleScrollTo5 = (e) => {

        let dest = document.querySelector('.map');
        console.log(e);
        smoothscroll(dest);
    }


    handleScrollTo4 = (e) => {

        let dest = document.querySelector('.about-us-section');
        console.log(e);
        smoothscroll(dest);
    }

    render() {
        return (
            <div className="app">
                <section className="contacts-top-wrapper">
                    <div className="container max-width-1200">
                        <div className="row">
                            <div className="col-6 col-md-6">
                                <div className='contacts-top-left'>
                                    <p><span className="grey-color">Phone : </span>(044)-257-11-14 </p>
                                    <p>
                                        <span className="left-border-dots"></span>
                                        <span className="grey-color">E-mail : </span>
                                        info@zahyst.net.ua
                                    </p>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6">
                                <div className='contacts-top-right'>
                                    <button>Free Case Evaluation</button>
                                    <ul>
                                        <li><a href="https://www.facebook.com/groups/po.zahyst/"><span><i className="fa fa-facebook"
                                                                                                          aria-hidden="true"></i></span></a></li>
                                        {/*<li><a href="#"><span><i className="fa fa-twitter"
                                                                 aria-hidden="true"></i></span></a></li>
                                        <li><a href="#"><span><i className="fa fa-google-plus"
                                                                 aria-hidden="true"></i></span></a></li>
                                        <li><a href="#"><span><i className="fa fa-linkedin"
                                                                 aria-hidden="true"></i></span></a></li>
                                        <li><a href="#"><span><i className="fa fa-feed"
                                                                 aria-hidden="true"></i></span></a></li>*/}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
                    <a className="navbar-brand-mobile" href="#"><span className="nav-logo-mobile"></span><span
                        className="navbrand-text-mobile">ЗАХИСТ</span></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" onClick={this.handleScrollTo2}>Головна</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={this.handleScrollTo1}>Про Компанію</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-set="services" onClick={this.handleScrollTo}>Бізнес</a>
                            </li>
                        </ul>
                        <a className="navbar-brand" href="#"><span className="navbrand-text">ЗАХИСТ</span></a>
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" onClick={this.handleScrollTo}><span
                                    className="myspaces"></span>Послуги</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={this.handleScrollTo5} ><span
                                    className="myspaces"></span>Розташування</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={this.handleScrollTo3} ><span className="myspaces"></span>Контакти
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <SimpleSlider  moveTo={()=>this.handleScrollTo4} />
                <section className="about-us-section">
                    <div className="container-fluid max-width-1200 about-us">
                        <div>
                            <h2>Про Компанію</h2>
                            <div className="hr-image">
                                <hr/>
                                <span className="three-pipes">
                                    <span className="little-pipe"></span>
                                    <span className="long-pipe"></span>
                                    <span className="little-pipe"></span>
                                </span>
                                <hr/>
                            </div>
                            <p></p>
                            <div className="row">
                                <div className="col-12 col-md-7">
                                    <div className="about-content">
                                        <h3>Правова Організація ЗАХИСТ - Ваш надійний партнер</h3>
                                        <p>Займаючись господарською діяльністю, практично кожне підприємство потрапляє до перевірок фіскальних органів, у процесі яких часто виникає безліч складних юридичних та бухгалтерських питань.</p>
                                        <p>Будь-яка податкова перевірка – випробування для підприємства, адже ніхто не застрахований від можливих порушень податкового обліку, накладення штрафів та інших наслідків перевірок.</p>
                                        <p>Слід також пам'ятати, що навіть на планову перевірку податківці виходять раптово, тому до неї завжди треба бути готовим.</p>
                                        <p>Однією із спеціалізацій юридичної компанії «ПО «ЗАХИСТ» є податкове право.</p>
                                        {/*<a href="#">Read More</a>*/}
                                        <Counters/>
                                    </div>
                                </div>
                                <div className="col-12 col-md-5">
                                    <div className='about-us-img-block'>
                                        <img src="img/gavel.png" alt="gavel"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="classes" id="fragment-1">
                    <div className="container-fluid max-width-1200 our-services services">
                        <div className="header-of-section">
                            <h2>Наші послуги</h2>
                            <div className="hr-image">
                                <hr/>
                                <span className="three-pipes">
                                    <span className="little-pipe"></span>
                                    <span className="long-pipe"></span>
                                    <span className="little-pipe"></span>
                                </span>
                                <hr/>
                            </div>
                        </div>
                        <div className="demo">
                            <div className="GITheWall">
                                <ul className="row">
                                    <li className="col-lg-3 col-md-4 col-12" data-contenttype="inline" data-href="#inline-template">
                                        <div className="flex-options">
                                            <div className="first-col">
                                                <h5 className="custom-header">
                                                    Допомога іноземцям в Україні
                                                </h5>
                                            </div>
                                            <div className="second-col">
                                                <div className="icon-container">
                                                    <span className="law-1">
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-lg-3 col-md-4 col-12" data-contenttype="inline" data-href="#inline-template2">
                                        <div className="flex-options">
                                            <div className="first-col">
                                                <h5 className="custom-header">

                                                    Фінансова Безпека

                                                </h5>
                                            </div>
                                            <div className="second-col">
                                                <div className="icon-container">
                                                    <span className="law-3">
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-lg-3 col-md-4 col-12" data-contenttype="inline" data-href="#inline-template3">
                                        <div className="flex-options">
                                            <div className="first-col">
                                                <h5 className="custom-header">

                                                    Бізнес

                                                </h5>
                                            </div>
                                            <div className="second-col">
                                                <div className="icon-container">
                                                    <span className="law-2">
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-lg-3 col-md-4 col-12" data-contenttype="inline" data-href="#inline-template4">
                                        <div className="flex-options">
                                            <div className="first-col">
                                                <h5 className="custom-header">

                                                    Юридична допомога

                                                </h5>
                                            </div>
                                            <div className="second-col">
                                                <div className="icon-container">
                                                    <span className="law-4">
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-lg-3 col-md-4 col-12" data-contenttype="inline" data-href="#inline-template5">
                                        <div className="flex-options">
                                            <div className="first-col">
                                                <h5 className="custom-header">

                                                    Бухгалтерські послуги

                                                </h5>
                                            </div>
                                            <div className="second-col">
                                                <div className="icon-container">
                                                    <span className="law-5">
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-lg-3 col-md-4 col-12" data-contenttype="inline" data-href="#inline-template6">
                                        <div className="flex-options">
                                            <div className="first-col">
                                                <h5 className="custom-header">
                                                    Адвокатські послуги
                                                </h5>
                                            </div>
                                            <div className="second-col">
                                                <div className="icon-container">
                                                    <span className="law-6">
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-lg-3 col-md-4 col-12" data-contenttype="inline" data-href="#inline-template7">
                                        <div className="flex-options">
                                            <div className="first-col">
                                                <h5 className="custom-header">

                                                    Юридичний аутсорсинг

                                                </h5>
                                            </div>
                                            <div className="second-col">
                                                <div className="icon-container">
                                                    <span className="law-7">
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-lg-3 col-md-4 col-12" data-contenttype="inline" data-href="#inline-template8">
                                        <div className="flex-options">
                                            <div className="first-col">
                                                <h5 className="custom-header">

                                                    Інші послуги

                                                </h5>
                                            </div>
                                            <div className="second-col">
                                                <div className="icon-container">
                                                    <span className="law-8">
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div style={{display: "none"}} id="inline-template">
                            <div className="card-body">
                                <p>
                                    Допомога іноземцям в Україні у вирішенні різних проблемних міграційних процедур, а саме:
                                </p>
                                <ul>
                                    <li>Дозвіл на імміграцію</li>
                                    <li>Дозвіл на працевлаштування</li>
                                    <li>Посвідка на тимчасове проживання в Україні</li>
                                    <li>Посвідка на постійне проживання в Україні</li>
                                    <li>Громадянство України</li>
                                    <li>Податковий номер для іноземців</li>
                                    <li>Довідка про несудимість</li>
                                    <li>Поліс страхування</li>
                                    <li>Допомога у отриманні посвідки на постійне проживання</li>
                                    <li>Надання попередньої консультації стосовно отримання посвідки на постійне проживання</li>
                                    <li>Підготовка необхідних документів до ДМС</li>
                                    <li>Супроводження процесу отримання документів</li>
                                    <li>Отримання посвідки на тимчасове проживання</li>
                                    <li>Допомога у отриманні паспорту громадянина України та ІПН для іноземців</li>
                                    <li>Оформлення документів для виїзду на постійне місце проживання у іншу країну</li>
                                    <li>Продовження строку перебування в країні для іноземців</li>
                                    <li>Оформлення дозволу на імміграцію</li>
                                    <li>Оформлення посвідчення особи без громадянства для виїзду за кордон</li>
                                    <li>Набуття статусу біженця або додаткового захисту</li>
                                    <li>Оскарження прийнятих рішень (відмов у прийнятті рішень) органами ДМС.</li>
                                    <li>Оскарження адміністративних протоколів, протоколів затримання.</li>
                                    <li>Інші послуги</li>
                                </ul>
                                <p className="bottom-p"> Здійснення юридичного захисту інтересів іноземців, біженців, осіб без громадянства починаючи із представництва у судах та державних органах України усіх рівнів, захисту від кримінального переслідування, депортації, вирішення сімейних спорів, та інших справ.</p>
                            </div>
                        </div>
                        <div style={{display: "none"}} id="inline-template2">
                            <div className="card-body">
                                <p>В рамках правового поля, зі знанням точної послідовності дій фіскальних органів, команда «ПО «ЗАХИСТ»  забезпечить фінансову безпеку Вашої компанії – шляхом упередження можливих податкових ризиків:</p>
                                <ul>
                                    <li>Аналізу податкових ризиків компанії (до перевірочний аналіз, аудит, оцінка ризиків контрагентів)</li>
                                    <li>Супроводження податкових перевірок</li>
                                    <li>Представлення Ваших інтересів в податковому органі</li>
                                    <li>Складання відповідей на письмові запити податкових органів</li>
                                    <li>Підготовки доказової бази при звинуваченнях платника податків в правопорушеннях</li>
                                    <li>Розробці на основі Акта перевірки правової позиції на користь клієнта</li>
                                    <li>Складання заперечень на Акт перевірки</li>
                                    <li>Підготовки скарг та позовних заяв на винесене податковим органом рішення</li>
                                    <li>Супроводження на всії етапах оскарження</li>
                                </ul>
                                <p className="bottom-p">Найбільш афективний та оптимальний результат, для наших клієнтів – це участь  Правової організації «ЗАХИСТ» у проведенні  податкової  перевірки Вашого підприємства від  початку.</p>
                            </div>
                        </div>
                        <div style={{display: "none"}} id="inline-template3">
                            <div className="card-body">
                                <p>ПО «ЗАХИСТ» надає професійну допомогу у відкритті бізнесу, зокрема але не вичерпно:</p>
                                <ul>
                                    <li>Перевірка та аналіз установчої та іншої юридичної документації суб’єкта  підприємництва</li>
                                    <li>Аналіз укладених угод, поточних договорів з приводу їх відповідності діючому законодавству України</li>
                                    <li>Правова експертиза документів, наданих клієнтом</li>
                                    <li>Консультування з питань застосування  законодавства</li>
                                    <li>Консультування з питань організації  господарської діяльності суб’єкта підприємництва, внесення змін до установчих документів</li>
                                    <li>Розробка проектів договорів з усіх напрямків діяльності суб’єкта підприємництва</li>
                                    <li>Документальне супроводження всієї процедури реєстрації</li>
                                    <li>Реєстрація юридичної адреси в будь якому районі м. Києва або в Київській області</li>
                                    <li>Одержання печаток і штампів</li>
                                    <li>Одержання свідоцтва платника податку ПДВ</li>
                                    <li>Ліцензування, сертифікація, усі види дозвільних документів</li>
                                    <li>Витяги і виписки із реєстру підприємств</li>
                                    <li>Реєстрація торгової марки</li>
                                    <li>Забезпечення нотаріальних послуг</li>
                                    <li>Листування з фіскальними органами</li>
                                </ul>
                            </div>
                        </div>
                        <div style={{display: "none"}} id="inline-template4">
                            <div className="card-body">
                                <p>ПО «ЗАХИСТ» також здійснює для Вас підтримку у:</p>
                                <ul>
                                    <li>Складанні листів, скарг ,звернень, претензій на адресу державних органів, комерційних організацій</li>
                                    <li>Участі у переговорах  з контрагентами</li>
                                    <li>Представництві у судах та інших державних органах</li>
                                    <li>Представництві інтересів в ході перевірок контролюючих органів</li>
                                    <li>Юридичному та аудиторському супроводі (погодженні) перевірок проведених фіскальними органами</li>
                                    <li>Захисті інтересів фізичних і юридичних осіб в суперечках з фіскальною службою та іншими контролюючими органами</li>
                                    <li>Юридичному та аудиторському супровіді адміністративних спорів з фіскальною службою та іншими контролюючими органами</li>
                                    <li>Юридичному супроводі кримінальних проваджень за підозрою в ухиленні від сплати податків і митних платежів</li>
                                    <li>Наданні послуг адвоката у кримінальних справах в рамках кримінальних проваджень щодо посадових осіб підприємств</li>
                                    <li>Юридичному та аудиторському супроводі здійснення господарсько-фінансових операцій, які дають ефект «тут і зараз», але є ризиковими</li>
                                    <li>Плануванні та оптимізації оподаткування</li>
                                    <li>Консультуванні та підготовці документації з трансфертного ціноутворення, податковій експертизі</li>
                                    <li>Консультування з питань трансфертного ціноутворення</li>
                                </ul>
                            </div>
                        </div>
                        <div style={{display: "none"}} id="inline-template5">
                            <div className="card-body">
                                <p>Для юридичних осіб та фізичних осіб-підприємців невід’ємною частиною здійснення господарська діяльності є якісне ведення бухгалтерського обліку і своєчасна подача податкової звітності. Частіше за все, особливо на етапі організації бізнесу у його засновників немає можливості для цього. В такій ситуації розумною альтернативою є залучення найманого бухгалтера. Наша компанія окрім юридичних послуг готова надати суб’єктам підприємницької діяльності кваліфіковані послуги по бухгалтерському обліку.</p>
                                <ul>
                                    <li>Ведення бухгалтерського та податкового обліку, в тому числі окремих ділянок і елементів обліку</li>
                                    <li>Трансформація та консолідація фінансової звітності</li>
                                    <li>Послуги з побудови та ведення бухгалтерського та податкового обліку, автоматизація обліку</li>
                                    <li>Відновлення бухгалтерського і податкового обліку</li>
                                    <li>Розробка та актуалізація облікової політики суб'єкта господарювання</li>
                                    <li>Складання бухгалтерської та податкової звітності</li>
                                    <li>Консультаційні послуги з побудови і ведення кадрового обліку, в т.ч. кадровий аудит</li>
                                </ul>
                            </div>
                        </div>
                        <div style={{display: "none"}} id="inline-template6">
                            <div className="card-body">
                                <p>ПО «ЗАХИСТ» має досвідчених і кваліфікованих адвокатів , які представлятимуть ваші інтереси у кримінальних справах</p>
                                <ul>
                                    <li>Представництво в процедурі банкрутства</li>
                                    <li>Захист прав та інтересів фізичних і юридичних осіб в кримінальному процесі</li>
                                    <li>Консультації в сфері кримінального права і кримінального процесу</li>
                                    <li>Повний супровід клієнта при будь-якому спілкуванні з правоохоронними, контролюючими та іншими державними органами, в тому числі допитів в якості свідків, проведення обшуків та інших процесуальних дій</li>
                                    <li>Захист в рамках кримінального провадження</li>
                                    <li>Представництво інтересів потерпілих у кримінальному провадженні</li>
                                    <li>Супровід юридичних осіб при проведенні перевірок контролюючими та правоохоронними органами</li>
                                    <li>Забезпечення апеляційного та касаційного оскарження судових рішень і вироків</li>
                                </ul>
                            </div>
                        </div>
                        <div style={{display: "none"}} id="inline-template7">
                            <div className="card-body">
                                <p>Наші послуги - юридичний аутсорсинг або юридичне супроводження. Дана модель співробітництва надає Вам наступні переваги:</p>
                                <ul>
                                    <li>можливість одержання необхідної інформації on-line</li>
                                    <li>зфіксована абонентська плата</li>
                                    <li>значне скорочення Ваших видатків, оскільки не буде необхідності наймати штатного юрисконсульта, а Вашими проблемами буде займатися команда професіоналів</li>
                                    <li>ціна послуг юриста в рамках абонентського обслуговування значно нижче, ніж при окремому замовленні</li>
                                    <li>немає необхідності нести витрати на облаштування робочого місця для штатного юриста</li>
                                    <li>ми не йдемо у відпустку, декрет, лікарняний і не звільняємось</li>
                                    <li>Ви не несете додаткових витрат (податків, відпускних, лікарняних та інше)</li>
                                    <li>послуги, що надаються нами, суворо конфіденційні</li>
                                    <li>ми завжди йдемо на зустріч побажанням клієнта</li>
                                </ul>
                            </div>
                        </div>
                        <div style={{display: "none"}} id="inline-template8">
                            <div className="card-body">
                                <ul>
                                    <li>Державна реєстрація ТОВ (стандарт)</li>
                                    <li>Державна реєстрація (повна - отримання ПДВ, електронні ключі, відкриття рахунку, печать)</li>
                                    <li>Державна реєстрація ФОП (єдиний податок)</li>
                                    <li>Зміна даних ФОП</li>
                                    <li>Зміна КВЕД</li>
                                    <li>Зміна директора ТОВ</li>
                                    <li>Зміна засновника</li>
                                    <li>Зміна найменування</li>
                                    <li>Зміна місцезнаходження</li>
                                    <li>Ліквідація ФОП (подача на закриття)</li>
                                    <li>Представництво у судах та державних органах</li>
                                    <li>Отримання витягу</li>
                                    <li>Отримання виписки</li>
                                    <li>Отримання відомостей статистики</li>
                                    <li>Виготовлення печаті</li>
                                    <li>Подача 1-ПДВ</li>
                                    <li>Подача 1-ЗВР</li>
                                    <li>Отримання ідентифікаційного коду нерезиденту</li>
                                    <li>Абонентське юридичне обслуговування підприємства</li>
                                    <li>Надання послуг адвокатом у кримінальних провадженнях</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="finance-defend">
                    <div className="container-fluid max-width-1200">
                        <div className="row">

                            <div className="col-sm">
                                <div className="finance-defend-info">
                                    {/*<h3>Юридична допомога</h3>*/}
                                    <p>Досить часто платнику податків потрібно чітко розуміти всі ризики своїх контрольованих операцій ще на етапі їх здійснення, щоб мати можливість створити ефективну і надійну базу для подальшого забезпечення належного обґрунтування свого ціноутворення (наприклад, наявності внутрішніх порівнянних угод або моніторингу зовнішніх цін) і мінімізувати податкові ризики при спілкуванні з фіскальним органом.</p>
                                    <ul>
                                        <li>Cкладання документації по трансферному ціноутворенню</li>
                                    </ul>
                                    <p>Наша команда напрацювала досить великий досвід обґрунтування різного роду контрольованих операцій і ми з упевненістю можемо сказати, що як неможливо знайти абсолютно однакових платників податків, так і неможливо вмістити різні контрольовані операції в один типовий шаблон документації. Кожна документація, складена нами - це ґрунтовне дослідження, яке поєднує в собі як мінімум два методи обґрунтування, що в свою чергу дає можливість задіяти максимальну кількість аргументів на користь платника податків.</p>
                                    <ul>
                                        <li>Cупровід підготовленої документації в ході перевірки контролюючого органу і захисту інтересів Клієнта в разі виникнення суперечок з фіскальним органом</li>
                                    </ul>
                                    <p>Це заключний, але не менш важливий етап співпраці з Клієнтом, який в результаті співпраці з нами отримує впевненість, що в разі проведення перевірки контролюючим органом його інтереси будуть захищені, позиція доведена, а фінансові ресурси збережені.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.401324086871!2d30.49798431555978!3d50.39635789914242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c8ce9472606d%3A0x4f889b50bfbcb720!2z0LLRg9C70LjRhtGPINCS0LDRgdC40LvRjNC60ZbQstGB0YzQutCwLCAxNiwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1suk!2sua!4v1514204459678" allowFullScreen></iframe>
                </section>
                <footer className={"footer"}>
                    <div className="container-fluid footer-content">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="footer-about">
                                    <div className="footer-about-content">
                                        <h5>
                                            <span className='footer-logo'></span><span className="footer-header-text">ПО "ЗАХИСТ"</span>
                                        </h5>
                                        <p>
                                            Забезпечить фінансову безпеку Вашої компанії шляхом упередження можливих
                                            податкових ризиків.
                                        </p>
                                        <ul className="footer-social">
                                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                            </li>
                                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                            </li>
                                            <li><a href="#"><i className="fa fa-google" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="footer-contacts">
                                    <h5>Наші контакти</h5>
                                    <ul>
                                        <li className="footer-list-header top"><i className="fa fa-map-marker"
                                                                                  aria-hidden="true"></i> Наш Офіс:
                                        </li>
                                        <li className="footer-contact-text">вул.Васильківська.б.16,оф.217</li>
                                    </ul>
                                    <ul>
                                        <li className="footer-list-header"><i className="fa fa-phone"
                                                                              aria-hidden="true"></i> Наші телефони:
                                        </li>
                                        <li className="footer-contact-text">(044)-257-11-14</li>
                                        <li className="footer-contact-text">(093)-552-04-31</li>
                                        <li className="footer-contact-text">Олексій</li>
                                        <li className="footer-contact-text">(067)-328-33-12</li>
                                        <li className="footer-contact-text">Тетяна</li>
                                    </ul>
                                    <ul>
                                        <li className="footer-list-header"><i className="fa fa-envelope-o"
                                                                              aria-hidden="true"></i> Email:
                                        </li>
                                        <li className="footer-contact-text">info@zahyst.net.ua</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="footer-form">
                                    <h5>Напишіть Нам</h5>
                                    <div className="footer-name-email">
                                        <input type="text" placeholder="Ім'я"/>
                                        <input type="text" placeholder="E-mail"/>
                                    </div>
                                    <div className="footer-message">
                                  <textarea placeholder="Ваше повідомлення..." name="message" id="msg" cols="30" rows="10">

                                  </textarea>
                                        <button>ВІДПРАВИТИ</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row footer-copy">
                            <div className="col-sm">
                                <p>
                                    <span>salvage © All Rights Reseved.</span>
                                    <span> mr.diabovic@gmail.com</span>
                                </p>
                            </div>
                            <div className="col-12">
                                <ul className="footer-nav">
                                    <li><a href="#" onClick={this.handleScrollTo2} >Головна</a></li>
                                    <li><a href="#" onClick={this.handleScrollTo1} >Компанія</a></li>
                                    <li><a href="#" onClick={this.handleScrollTo} >Бізнес</a></li>
                                    <li><a href="#" onClick={this.handleScrollTo} >Послуги</a></li>
                                    <li><a href="#" onClick={this.handleScrollTo5} >Розташування</a></li>
                                    <li><a href="#" onClick={this.handleScrollTo3} >Контакти</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        );
    }
}

export default App;
