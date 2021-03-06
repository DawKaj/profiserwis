export const route = [
  {
    path: '/',
    exact: true,
    label: 'Home',
  },
  {
    path: '/onas',
    label: 'O nas',
    title: '',
    subtitle: '# ',
    image: '<Baneronas />',
    component: '<OnasPage />',
  },
  {
    path: '/automatyka',
    label: 'Automatyka',
    title: 'Automatyka i sterowanie',
    subtitle: '# Automatyka przyjazna użytkownikowi',
    image: 'banerautomatyka',
    component: '<AutomatykaPage />',
  },
  {
    path: '/fotowoltaika',
    label: 'Fotowoltaika',
    title: '',
    subtitle: '# Czysta energia',
    image: 'banerfotowoltaika',
    component: '<FotowoltaikaPage />',
  },
  {
    path: '/prefabrykacja',
    label: 'Prefabrykacja',
    title: '',
    subtitle: '# ',
    image: 'banerprefabrykacja',
    component: '<PrefabrykacjaPage />',
  },
  {
    path: '/kontakt',
    label: 'Kontakt',
    title: '',
    subtitle: '# ',
    image: 'banerkontakt',
    component: '<KontaktPage />',
  },
];
