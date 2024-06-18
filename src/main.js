import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

loadFonts();

const app = createApp(App);

// Registrar automaticamente todos os componentes globais
const requireComponent = require.context(
  // O caminho relativo da pasta de componentes
  './components',
  // Se deve ou não procurar subdiretórios
  false,
  // A expressão regular para localizar arquivos de componente
  /[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  // Obter a configuração do componente
  const componentConfig = requireComponent(fileName);

  // Obter o nome do componente em PascalCase
  const componentName = fileName
    .split('/')
    .pop()
    .replace(/\.\w+$/, '');

  // Registrar o componente globalmente
  app.component(
    componentName,
    componentConfig.default || componentConfig
  );
});

app.use(router)
  .use(store)
  .use(vuetify)
  .mount('#app');
