import { Creations } from './scenes/Creations'
import { Home } from './scenes/Home'
import { Profile } from './scenes/Profile'
import { translate } from './i18n'

export type AppRoute = {
  key: string,
  title: string,
  href: string,
  icon?: string,
  exact?: boolean,
  hidden?: boolean,
  disabled?: boolean,
  external?: boolean,
  component?: React.ComponentType<any>,
}

export type AppRedirect = {
  key: string,
  from: string,
  to: string,
  exact?: boolean,
}

export const routes: { [name: string]: AppRoute } = {
  home: {
    key: 'home',
    title: translate('pages.home.pageTitle'),
    href: '/',
    exact: true,
    hidden: true,
    component: Home,
  },
  profile: {
    key: 'profile',
    title: translate('pages.profile.pageTitle'),
    href: '/profile',
    component: Profile,
  },
  creations: {
    key: 'creations',
    title: translate('pages.creations.pageTitle'),
    href: '/creations',
    component: Creations,
  },
  blog: {
    key: 'blog',
    title: translate('pages.blog.pageTitle'),
    href: 'https://blog.teaochadesign.com',
    disabled: false,
    hidden: false,
    external: true,
  },
}

export const redirects: { [name: string]: AppRedirect } = {
  home: {
    key: 'home-redirect',
    from: '/home',
    to: '/',
  }
}