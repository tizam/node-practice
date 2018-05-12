const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

const app = express();

// static folder
app.use(express.static(__dirname + '/public'));

// view engine
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// hbs functions 
hbs.registerHelper('getFullYear', () => {
  return new Date().getFullYear();
});

app.get('/', (req, res) => {
  const services = [
    {
      title: 'Web Design',
      imgUrl: 'http://lorempicsum.com/nemo/255/200/2',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam natus est beatae iste officiis doloribus!',
      url: 'https://www.google.com'
    },
    {
      title: 'UI/UX',
      imgUrl: 'http://lorempicsum.com/nemo/255/200/4',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam natus est beatae iste officiis doloribus!',
      url: 'https://www.facebook.com'
    },
    {
      title: 'SEO',
      imgUrl: 'http://lorempicsum.com/nemo/255/200/5',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam natus est beatae iste officiis doloribus!',
      url: 'https://www.twitter.com'
    }
  ];
  res.render('home.hbs', {services});
});

app.get('/about', (req, res) => {
  const about = [
  {
    title: 'About me',
    img: 'http://lorempicsum.com/futurama/255/200/2',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac metus eros. Proin tristique consectetur finibus. Aliquam erat volutpat. Integer non dui at arcu maximus venenatis. Ut lobortis feugiat hendrerit. Cras pretium facilisis molestie. Aliquam at diam et erat elementum suscipit. Maecenas semper nibh a urna tincidunt lacinia. Pellentesque faucibus ornare ultricies. Cras id mattis elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras dignissim mi nulla, ac dictum urna consequat et. Nulla augue tellus, mollis et molestie nec, condimentum vitae lorem.

    Nam cursus lobortis risus a ultricies. Aenean ac elementum eros. Proin fermentum velit vitae dolor porttitor vestibulum. Nulla a urna ut nulla pellentesque imperdiet placerat vel leo. Donec sed hendrerit mi, a faucibus dolor. Aliquam non tortor dui. Aenean velit augue, facilisis at risus sit amet, gravida accumsan nibh. Quisque gravida tortor in mi aliquet dapibus. Vestibulum euismod turpis id imperdiet dictum. Nam elementum commodo augue, quis blandit tortor fermentum vestibulum.
    
    Nunc nec iaculis mauris, vel mollis justo. Ut consequat, sem ut tempus ornare, massa urna finibus sapien, non porta turpis elit at dolor. Phasellus varius libero non augue tempor rutrum. Nullam bibendum facilisis erat vitae tempus. Aenean est tellus, malesuada a auctor sed, egestas sed nibh. Sed sagittis elementum eros, eget interdum ipsum aliquam et. In id elementum diam. Curabitur ullamcorper odio ac nunc rutrum, eget pharetra nisi pharetra. Pellentesque rhoncus in urna vitae tempus. Aenean pretium erat quis cursus eleifend. Sed quis massa sed ipsum congue fermentum in non massa. Curabitur ac ipsum commodo, consectetur risus sit amet, iaculis ex. Phasellus sem felis, hendrerit a augue ac, imperdiet accumsan massa. Nam vel purus ut ligula scelerisque mollis pretium nec sapien. Mauris cursus augue ac libero condimentum consectetur.`
  }
  ];
  res.render('about.hbs', {about: about});
});

app.get('/projects', (req, res) => {
  const projects = [
    {
      projectTitle: 'Freelance',
      projectDesc: 'Nunc nec iaculis mauris, vel mollis justo. Ut consequat, sem ut tempus ornare,',
      projectImg: `http://lorempicsum.com/futurama/255/200/${getRandomInt(5, 1)}`
    },
    {
      projectTitle: 'Web Design',
      projectDesc: 'Nunc nec iaculis mauris, vel mollis justo. Ut consequat, sem ut tempus ornare,',
      projectImg: `http://lorempicsum.com/futurama/255/200/${getRandomInt(5, 1)}`
    },
    {
      projectTitle: 'UI/UX',
      projectDesc: 'Nunc nec iaculis mauris, vel mollis justo. Ut consequat, sem ut tempus ornare,',
      projectImg: `http://lorempicsum.com/futurama/255/200/${getRandomInt(5, 1)}`
    },
    {
      projectTitle: 'SEO',
      projectDesc: 'Nunc nec iaculis mauris, vel mollis justo. Ut consequat, sem ut tempus ornare,',
      projectImg: `http://lorempicsum.com/futurama/255/200/${getRandomInt(5, 1)}`
    },
    {
      projectTitle: 'Freelance',
      projectDesc: 'Nunc nec iaculis mauris, vel mollis justo. Ut consequat, sem ut tempus ornare,',
      projectImg: `http://lorempicsum.com/futurama/255/200/${getRandomInt(5, 1)}`
    },
    {
      projectTitle: 'Wordpress',
      projectDesc: 'Nunc nec iaculis mauris, vel mollis justo. Ut consequat, sem ut tempus ornare,',
      projectImg: `http://lorempicsum.com/futurama/255/200/${getRandomInt(5, 1)}`
    },
    {
      projectTitle: 'NodeJS',
      projectDesc: 'Nunc nec iaculis mauris, vel mollis justo. Ut consequat, sem ut tempus ornare,',
      projectImg: `http://lorempicsum.com/futurama/255/200/${getRandomInt(5, 1)}`
    },
    {
      projectTitle: 'Freelance',
      projectDesc: 'Nunc nec iaculis mauris, vel mollis justo. Ut consequat, sem ut tempus ornare,',
      projectImg: `http://lorempicsum.com/futurama/255/200/${getRandomInt(5, 1)}`
    },
  ];
  res.render('projects.hbs', {projects});
});

app.get('/contact',(req, res) => {
  res.render('contact.hbs');
});


app.listen(port, () => {
  console.log('Server started at port ' + port);
});